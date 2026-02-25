import { z } from 'zod';

// Define the Trial Schema for type safety and validation
export const TrialSchema = z.object({
    nct_id: z.string(),
    title: z.string(),
    official_title: z.string().optional(),
    brief_summary: z.string().optional(),
    ai_summary: z.string().optional(),
    overall_status: z.string(),
    status_label: z.string().optional(),
    phase: z.string(),
    phase_label: z.string().optional(),
    primary_location_city: z.string().optional(),
    primary_location_state: z.string().optional(),
    has_compensation: z.boolean().default(false),
    compensation_amount: z.string().optional(),
    ai_tags: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    eligibility_summary_must: z.union([z.string(), z.array(z.string())]).transform(val => {
        if (Array.isArray(val)) return val;
        try { return JSON.parse(val); } catch { return []; }
    }),
    ai_estimated_duration: z.string().optional(),
    lead_sponsor: z.string().optional(),
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
     * Fetch trials with filtering and pagination
     */
    async getTrials(filters: TrialFilters = {}): Promise<TrialsResponse> {
        const params = new URLSearchParams();

        if (filters.page) params.set('page', filters.page.toString());
        if (filters.pageSize) params.set('pageSize', filters.pageSize.toString());
        if (filters.q) params.set('q', filters.q);
        if (filters.location) params.set('location', filters.location);
        if (filters.phase) params.set('phase', filters.phase);
        if (filters.compensation !== undefined) params.set('compensation', filters.compensation.toString());

        try {
            const response = await fetch(`/api/trials?${params.toString()}`);
            if (!response.ok) throw new Error('Failed to fetch trials');

            const data = await response.json();

            // Validate trials array
            const validatedTrials = (data.trials || []).map((t: any) => {
                const result = TrialSchema.safeParse(t);
                if (!result.success) {
                    console.error('Trial validation failed:', result.error, t);
                    return null;
                }
                return result.data;
            }).filter(Boolean) as Trial[];

            return {
                ...data,
                trials: validatedTrials
            };
        } catch (error) {
            console.error('TrialsService.getTrials error:', error);
            return {
                trials: [],
                total: 0,
                page: 1,
                totalPages: 1,
                source: 'error'
            };
        }
    },

    /**
     * Get single trial details by NCT ID
     */
    async getTrialDetails(nctId: string): Promise<Trial | null> {
        try {
            const response = await fetch(`/api/trials/${nctId}`);
            if (!response.ok) return null;

            const data = await response.json();
            const result = TrialSchema.safeParse(data);

            return result.success ? result.data : null;
        } catch (error) {
            console.error(`TrialsService.getTrialDetails(${nctId}) error:`, error);
            return null;
        }
    }
};
