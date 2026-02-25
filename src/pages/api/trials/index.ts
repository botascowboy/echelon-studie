export const prerender = false;

import type { APIContext } from 'astro';
import { PLATFORM_CONFIG, CITY_SEARCH_TERMS } from '../../../lib/config';
import { getMockTrials } from '../../../lib/mockTrials';
import { searchWeightLossTrials } from '../../../lib/api/clinical-trials';
import { transformTrialData } from '../../../lib/clinicalTrialsApi';

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
      try {
        console.log('[API /trials] Fetching from ClinicalTrials.gov API...');

        const apiResponse = await searchWeightLossTrials({
          pageSize: Math.min(pageSize * 5, 100),
          phase: phase || undefined,
          location: locationParam || undefined,
        });

        if (apiResponse.studies && apiResponse.studies.length > 0) {
          allTrials = apiResponse.studies.map(transformTrialData);
          source = 'api';
          console.log(`[API /trials] Got ${allTrials.length} trials from API`);
        } else {
          throw new Error('No studies returned from API');
        }
      } catch (apiError) {
        console.warn('[API /trials] Real API failed, falling back to mock:', apiError);
        allTrials = getMockTrials();
        source = 'mock-fallback';
      }
    } else {
      console.log('[API /trials] Using mock data (enableRealApi=false)');
      allTrials = getMockTrials();
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
          'Cache-Control': 'public, max-age=60',
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
