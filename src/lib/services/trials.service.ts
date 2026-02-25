import { z } from 'zod';
import { searchWeightLossTrials } from '../api/clinical-trials';
import { transformTrialData } from '../clinicalTrialsApi';
import { cacheGet, cacheSet } from '../cache';
import { TARGET_CITIES, getCityConfig } from '../config';

// Define the Trial Schema for type safety and validation
export const TrialSchema = z.object({
    nct_id: z.string(),
    title: z.string(),
    official_title: z.string().optional(),
    brief_summary: z.string().optional(),
    detailed_description: z.string().optional(),
    ai_summary: z.string().optional(),
    overall_status: z.string(),
    status_label: z.string().optional(),
    phase: z.string(),
    phase_label: z.string().optional(),
    phase_color: z.string().optional(),
    phase_description: z.string().optional(),
    study_type: z.string().optional(),

    // Eligibility
    eligibility_age_range: z.string().optional(),
    eligibility_summary_must: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    eligibility_summary_cannot: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    eligibility_bmi_requirements: z.string().optional(),

    // Enrollment
    enrollment_count: z.number().optional().or(z.string()).transform(val => typeof val === 'string' ? parseInt(val) || 0 : val),
    sex: z.string().optional(),
    minimum_age: z.string().optional(),
    maximum_age: z.string().optional(),

    // Location
    primary_location_city: z.string().optional(),
    primary_location_state: z.string().optional(),
    primary_location_zip: z.string().optional(),
    primary_location_country: z.string().optional(),
    primary_location_facility: z.string().optional(),
    full_address: z.string().optional(),
    locations_count: z.number().optional(),
    us_locations_count: z.number().optional(),
    all_cities: z.array(z.string()).optional(),
    all_states: z.array(z.string()).optional(),

    // Sponsor
    lead_sponsor: z.string().optional(),
    sponsor_class: z.string().optional(),

    // AI Enrichments
    ai_tags: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    ai_what_to_expect: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    ai_estimated_duration: z.string().optional(),
    ai_visit_frequency: z.string().optional(),
    ai_potential_risks: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    ai_potential_benefits: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    ai_questions_to_ask: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),

    // Compensation
    has_compensation: z.boolean().default(false),
    compensation_amount: z.string().optional(),

    // Dates
    start_date: z.string().optional(),
    completion_date: z.string().optional(),

    // Relevance
    weight_loss_relevance_score: z.number().optional(),
});

export type Trial = z.infer<typeof TrialSchema>;

export interface TrialsResponse {
    trials: Trial[];
    total: number;
    page: number;
    totalPages: number;
    source: string;
}

export interface TrialFilters {
    q?: string;
    location?: string;
    phase?: string;
    compensation?: boolean | string;
    page?: number;
    pageSize?: number;
}

/**
 * Service to handle all Clinical Trials data operations
 */
export const TrialsService = {
    /**
     * Helper to get all default city queries
     */
    getCityQueries() {
        return TARGET_CITIES.map(city => `${city.name}, ${city.state}`);
    },

    /**
     * Fetch trials with filtering and pagination
     */
    async getTrials(filters: TrialFilters = {}): Promise<TrialsResponse> {
        const { page = 1, pageSize = 9, q, location, phase, compensation } = filters;
        let allTrials: Trial[] = [];
        let source = 'api';

        // Normalize location for cache key
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
                    // Transform and validate each trial
                    allTrials = mergedStudies.map(study => {
                        const transformed = transformTrialData(study);
                        const result = TrialSchema.safeParse(transformed);
                        return result.success ? result.data : null;
                    }).filter(Boolean) as Trial[];

                    cacheSet(cacheKey, allTrials);
                } else {
                    allTrials = [];
                }
            } catch (err) {
                console.error('[TrialsService] Failed to fetch real trials:', err);
                allTrials = [];
            }
        }

        // --- POST-FILTERING (Strict) ---

        // 1. Location Filtering
        if (location) {
            const loc = location.toLowerCase().trim();
            const cityConfig = getCityConfig(location);

            allTrials = allTrials.filter(trial => {
                if (cityConfig) {
                    const cityMatch = (trial.all_cities || []).some(c => c.toLowerCase().includes(cityConfig.name.toLowerCase()) || cityConfig.name.toLowerCase().includes(c.toLowerCase()));
                    if (cityMatch) return true;
                }
                const matchesCity = (trial.all_cities || []).some(city => city.toLowerCase().includes(loc) || loc.includes(city.toLowerCase()));
                const matchesState = (trial.all_states || []).some(state => state.toLowerCase().includes(loc) || loc.includes(state.toLowerCase()));
                const trialCity = (trial.primary_location_city || '').toLowerCase();
                const trialState = (trial.primary_location_state || '').toLowerCase();
                return matchesCity || matchesState || trialCity.includes(loc) || loc.includes(trialCity) || trialState.includes(loc) || loc.includes(trialState);
            });
        }

        // 2. Query Search
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

        // 3. Phase Filtering
        if (phase) {
            const normalizedPhase = phase.toUpperCase().replace(/\s/g, '');
            allTrials = allTrials.filter(trial => {
                const trialPhase = (trial.phase || '').toUpperCase().replace(/\s/g, '');
                return trialPhase === normalizedPhase || (trial.phase_label || '').toUpperCase().includes(normalizedPhase);
            });
        }

        // 4. Compensation Filtering
        if (compensation !== undefined && compensation !== '') {
            const isPaid = compensation === 'true' || compensation === true;
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
    },

    /**
     * Get single trial details by NCT ID
     */
    async getTrialDetails(nctId: string): Promise<Trial | null> {
        // This is primarily used for individual API routes. 
        // Note: For SSR pages, we use TrialsInternalService to avoid an extra internal HTTP hop.
        try {
            const response = await fetch(`/api/trials/${nctId}`);
            if (!response.ok) return null;

            const data = await response.json();
            const result = TrialSchema.safeParse(data.trial || data); // Handle both wrapped and unwrapped

            return result.success ? result.data : null;
        } catch (error) {
            console.error(`TrialsService.getTrialDetails(${nctId}) error:`, error);
            return null;
        }
    }
};
