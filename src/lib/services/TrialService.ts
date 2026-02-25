import { searchWeightLossTrials } from '../api/clinical-trials';
import { transformTrialData } from '../clinicalTrialsApi';
import { cacheGet, cacheSet } from '../cache';
import { TARGET_CITIES, getCityConfig } from '../config';

export interface TrialFilters {
    q?: string;
    location?: string;
    phase?: string;
    compensation?: string;
    page?: number;
    pageSize?: number;
}

export class TrialService {
    private static getCityQueries() {
        return TARGET_CITIES.map(city => `${city.name}, ${city.state}`);
    }

    static async getTrials(filters: TrialFilters) {
        const { page = 1, pageSize = 9, q, location, phase, compensation } = filters;
        let allTrials: any[] = [];
        let source = 'api';

        // Normalize location for cache key and search
        const normalizedLoc = (location || 'all').toLowerCase().trim();
        const cacheKey = `trials:${normalizedLoc}:${phase || 'all'}`;
        const cached = cacheGet(cacheKey);

        if (cached) {
            allTrials = cached;
            source = 'api-cached';
        } else {
            try {
                let citiesToQuery: string[] = [];

                if (location) {
                    // Try to find if this is one of our target cities to use its best search term
                    const cityConfig = getCityConfig(location);
                    if (cityConfig) {
                        citiesToQuery = [`${cityConfig.name}, ${cityConfig.state}`];
                    } else {
                        citiesToQuery = [location];
                    }
                } else {
                    citiesToQuery = this.getCityQueries();
                }

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

        // Apply Post-Filter logic (Strict filtering after merging or broad searches)
        if (location) {
            const loc = location.toLowerCase().trim();
            const cityConfig = getCityConfig(location);

            allTrials = allTrials.filter(trial => {
                // If it's one of our target cities, be a bit more generous if it's in the same state
                if (cityConfig) {
                    const stateMatch = (trial.all_states || []).some((s: string) => s.toLowerCase() === cityConfig.state.toLowerCase() || s.toLowerCase() === cityConfig.stateName.toLowerCase());
                    const cityMatch = (trial.all_cities || []).some((c: string) => c.toLowerCase().includes(cityConfig.name.toLowerCase()) || cityConfig.name.toLowerCase().includes(c.toLowerCase()));
                    if (cityMatch) return true;
                    // If state matches and it's a known city area, we might want to include it, 
                    // but let's stick to city match for "Studies in X" accuracy.
                }

                const matchesCity = (trial.all_cities || []).some((city: string) => city.toLowerCase().includes(loc) || loc.includes(city.toLowerCase()));
                const matchesState = (trial.all_states || []).some((state: string) => state.toLowerCase().includes(loc) || loc.includes(state.toLowerCase()));
                const trialCity = (trial.primary_location_city || '').toLowerCase();
                const trialState = (trial.primary_location_state || '').toLowerCase();

                return matchesCity || matchesState || trialCity.includes(loc) || loc.includes(trialCity) || trialState.includes(loc) || loc.includes(trialState);
            });
        }

        if (q) {
            const query = q.toLowerCase();
            allTrials = allTrials.filter(trial => {
                const title = (trial.title || '').toLowerCase();
                const summary = (trial.ai_summary || trial.brief_summary || '').toLowerCase();
                const officialTitle = (trial.official_title || '').toLowerCase();
                const nctId = trial.nct_id.toLowerCase();
                return title.includes(query) || summary.includes(query) || officialTitle.includes(query) || nctId.includes(query);
            });
        }

        if (phase) {
            const normalizedPhase = phase.toUpperCase().replace(/\s/g, '');
            allTrials = allTrials.filter(trial => {
                const trialPhase = (trial.phase || '').toUpperCase().replace(/\s/g, '');
                return trialPhase === normalizedPhase || (trial.phase_label || '').toUpperCase().includes(normalizedPhase);
            });
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
