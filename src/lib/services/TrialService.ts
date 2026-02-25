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
        let source = 'api';

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
                            pageSize: 50,
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
                    cacheSet(cacheKey, allTrials);
                } else {
                    allTrials = [];
                }
            } catch (err) {
                console.error('[TrialService] Failed to fetch real trials:', err);
                allTrials = [];
            }
        }

        // Apply Post-Filter logic
        if (location) {
            const loc = location.toLowerCase();
            allTrials = allTrials.filter(trial => {
                const trialCity = (trial.primary_location_city || '').toLowerCase();
                const trialState = (trial.primary_location_state || '').toLowerCase();
                const fullAddress = (trial.full_address || '').toLowerCase();
                return loc.includes(trialCity) || trialCity.includes(loc) || loc.includes(trialState) || fullAddress.includes(loc);
            });
        }

        if (q) {
            const query = q.toLowerCase();
            allTrials = allTrials.filter(trial => {
                const title = (trial.title || '').toLowerCase();
                const summary = (trial.ai_summary || trial.brief_summary || '').toLowerCase();
                return title.includes(query) || summary.includes(query);
            });
        }

        if (phase) {
            allTrials = allTrials.filter(trial => trial.phase === phase);
        }

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
