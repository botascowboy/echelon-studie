import { PLATFORM_CONFIG } from '../config';
import { getMockTrials } from '../mockTrials';
import { searchWeightLossTrials } from '../api/clinical-trials';
import { transformTrialData } from '../clinicalTrialsApi';
import { cacheGet, cacheSet } from '../cache';

export interface TrialFilters {
    q?: string;
    location?: string;
    phase?: string;
    compensation?: string;
    page?: number;
    pageSize?: number;
}

export class TrialService {
    private static TARGET_CITY_QUERIES = [
        'New York, NY',
        'Miami, FL',
        'Houston, TX',
        'Los Angeles, CA',
        'San Francisco, CA',
    ];

    static async getTrials(filters: TrialFilters) {
        const { page = 1, pageSize = 9, q, location, phase, compensation } = filters;
        let allTrials: any[] = [];
        let source = 'mock';

        if (PLATFORM_CONFIG.enableRealApi) {
            const cacheKey = `trials:${location || 'all'}:${phase || 'all'}`;
            const cached = cacheGet(cacheKey);

            if (cached) {
                allTrials = cached;
                source = 'api-cached';
            } else {
                try {
                    const citiesToQuery = location ? [location] : this.TARGET_CITY_QUERIES;
                    const cityResults = await Promise.allSettled(
                        citiesToQuery.map(city =>
                            searchWeightLossTrials({
                                pageSize: 30,
                                phase: phase || undefined,
                                location: city,
                            })
                        )
                    );

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
                        cacheSet(cacheKey, allTrials);
                    } else {
                        allTrials = getMockTrials();
                        source = 'mock-fallback';
                    }
                } catch (err) {
                    allTrials = getMockTrials();
                    source = 'mock-fallback';
                }
            }
        } else {
            allTrials = getMockTrials();
        }

        // Apply Filters (Unified logic for API and Mock)

        // 1. Filter by location (City/State)
        if (location) {
            const loc = location.toLowerCase();
            allTrials = allTrials.filter(trial => {
                const trialCity = (trial.primary_location_city || '').toLowerCase();
                const trialState = (trial.primary_location_state || '').toLowerCase();
                return loc.includes(trialCity) || trialCity.includes(loc) || loc.includes(trialState);
            });
        }

        // 2. Filter by search query
        if (q) {
            const query = q.toLowerCase();
            allTrials = allTrials.filter(trial => {
                const title = (trial.title || '').toLowerCase();
                const summary = (trial.ai_summary || trial.brief_summary || '').toLowerCase();
                return title.includes(query) || summary.includes(query);
            });
        }

        // 3. Filter by phase
        if (phase) {
            allTrials = allTrials.filter(trial => trial.phase === phase);
        }

        // 4. Filter by compensation
        if (compensation !== undefined && compensation !== '') {
            const isPaid = compensation === 'true';
            allTrials = allTrials.filter(trial => trial.has_compensation === isPaid);
        }

        // Sort by relevance
        allTrials.sort((a, b) => (b.weight_loss_relevance_score || 0) - (a.weight_loss_relevance_score || 0));

        // Pagination
        const total = allTrials.length;
        const totalPages = Math.ceil(total / pageSize);
        const startIndex = (page - 1) * pageSize;
        const paginated = allTrials.slice(startIndex, startIndex + pageSize);

        return {
            trials: paginated,
            total,
            page,
            totalPages,
            source
        };
    }
}
