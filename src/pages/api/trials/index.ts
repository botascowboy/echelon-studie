export const prerender = false;

import type { APIContext } from 'astro';
import { PLATFORM_CONFIG, CITY_SEARCH_TERMS, TARGET_CITIES } from '../../../lib/config';
import { getMockTrials } from '../../../lib/mockTrials';
import { searchWeightLossTrials } from '../../../lib/api/clinical-trials';
import { transformTrialData } from '../../../lib/clinicalTrialsApi';
import { cacheGet, cacheSet, cacheAge } from '../../../lib/cache';

// The 5 target city search terms sent to the API
const TARGET_CITY_QUERIES = [
  'New York, NY',
  'Miami, FL',
  'Houston, TX',
  'Los Angeles, CA',
  'San Francisco, CA',
];

export async function GET({ request }: APIContext) {
  try {
    const url = new URL(request.url);

    // Parse query parameters
    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '9');
    const query = url.searchParams.get('q') || '';
    const locationParam = url.searchParams.get('location') || '';
    const phase = url.searchParams.get('phase') || '';
    const compensation = url.searchParams.get('compensation');

    let allTrials: any[] = [];
    let source = 'mock';

    if (PLATFORM_CONFIG.enableRealApi) {
      // Cache key includes location + phase so each filter combo is cached independently
      const cacheKey = `trials:${locationParam || 'all'}:${phase || 'all'}`;
      const cached = cacheGet(cacheKey);

      if (cached) {
        allTrials = cached;
        source = 'api-cached';
        const ageSeconds = cacheAge(cacheKey) ?? 0;
        console.log(`[API /trials] Serving from cache (${Math.floor(ageSeconds / 60)}m ${ageSeconds % 60}s old)`);
      } else {
        try {
          console.log('[API /trials] Cache miss — fetching from ClinicalTrials.gov API...');

          // Determine which cities to query
          const citiesToQuery = locationParam ? [locationParam] : TARGET_CITY_QUERIES;

          // Fetch in parallel — one request per city
          const cityResults = await Promise.allSettled(
            citiesToQuery.map(city =>
              searchWeightLossTrials({
                pageSize: 30,
                phase: phase || undefined,
                location: city,
              })
            )
          );

          // Merge results and deduplicate by NCT ID
          const seenIds = new Set<string>();
          const mergedStudies: any[] = [];

          for (const result of cityResults) {
            if (result.status === 'fulfilled' && result.value.studies?.length) {
              for (const study of result.value.studies) {
                const nctId = study.protocolSection?.identificationModule?.nctId;
                if (nctId && !seenIds.has(nctId)) {
                  seenIds.add(nctId);
                  mergedStudies.push(study);
                }
              }
            }
          }

          if (mergedStudies.length > 0) {
            allTrials = mergedStudies.map(transformTrialData);
            source = 'api';
            // Store in cache for next requests
            cacheSet(cacheKey, allTrials);
            console.log(`[API /trials] Cached ${allTrials.length} trials (key: ${cacheKey})`);
          } else {
            throw new Error('No studies returned from API for any target city');
          }
        } catch (apiError) {
          console.warn('[API /trials] Real API failed, falling back to mock:', apiError);
          allTrials = getMockTrials();
          source = 'mock-fallback';
        }
      }
    } else {
      console.log('[API /trials] Using mock data (enableRealApi=false)');
      allTrials = getMockTrials();
    }

    // If API source, keep only trials that have at least one location in our 5 target cities
    if (source === 'api') {
      const TARGET_CITY_NAMES = ['new york', 'miami', 'houston', 'los angeles', 'san francisco'];
      allTrials = allTrials.filter(trial => {
        const raw = trial._raw;
        const locations: any[] = [
          ...(raw?.protocolSection?.contactsLocationsModule?.locations || []),
          ...(raw?.protocolSection?.contactsLocationsModule?.facilities || []),
        ];
        return locations.some(loc => {
          const city = (loc.city || '').toLowerCase();
          return TARGET_CITY_NAMES.some(t => city.includes(t));
        });
      });
      console.log(`[API /trials] After city filter: ${allTrials.length} trials in target cities`);
    }

    // Apply search query filter
    if (query) {
      const searchQuery = query.toLowerCase();
      allTrials = allTrials.filter(trial => {
        const title = (trial.title || '').toLowerCase();
        const summary = (trial.ai_summary || trial.brief_summary || '').toLowerCase();
        const tags = (() => {
          try { return JSON.parse(trial.ai_tags || '[]').join(' ').toLowerCase(); }
          catch { return (trial.ai_tags || '').toLowerCase(); }
        })();
        return title.includes(searchQuery) || summary.includes(searchQuery) || tags.includes(searchQuery);
      });
    }

    // Apply phase filter
    if (phase) {
      allTrials = allTrials.filter(trial => trial.phase === phase);
    }

    // Apply compensation filter
    if (compensation !== null && compensation !== undefined && compensation !== '') {
      const compFilter = compensation === 'true';
      allTrials = allTrials.filter(trial => trial.has_compensation === compFilter);
    }

    // Sort by weight loss relevance score
    allTrials.sort((a, b) => (b.weight_loss_relevance_score || 0) - (a.weight_loss_relevance_score || 0));

    // Paginate
    const total = allTrials.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedTrials = allTrials.slice(startIndex, startIndex + pageSize);

    return new Response(
      JSON.stringify({
        trials: paginatedTrials,
        page,
        pageSize,
        total,
        totalPages,
        source,
        targetCities: PLATFORM_CONFIG.cities.map(c => c.displayName),
        hasMore: page < totalPages,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          // Browser can reuse this response for 60 s; server cache lasts 10 min
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
          'X-Cache': source === 'api-cached' ? 'HIT' : 'MISS',
        },
      }
    );
  } catch (error) {
    console.error('[API /trials] Error:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch trials',
        trials: [],
        total: 0,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
