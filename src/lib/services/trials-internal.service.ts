import { getTrialByNctId as getApiTrialByNctId, transformTrialData } from '../clinicalTrialsApi';
import { TrialSchema, type Trial } from './trials.service';

/**
 * Server-side service for Trials data.
 * Always uses real API from ClinicalTrials.gov.
 */
export const TrialsInternalService = {
    /**
     * Get single trial details from API
     */
    async getTrialDetails(nctId: string): Promise<{ trial: Trial; source: string; isValidated: boolean } | null> {
        if (!nctId) return null;

        try {
            const apiTrial = await getApiTrialByNctId(nctId);
            if (!apiTrial) return null;

            const trial = transformTrialData(apiTrial);

            // Validate with Zod for consistency
            const result = TrialSchema.safeParse(trial);

            if (!result.success) {
                console.error(`[TrialsInternalService] Validation failed for ${nctId}:`, result.error);
                return {
                    trial: trial as any,
                    source: 'api',
                    isValidated: false
                };
            }

            return {
                trial: result.data,
                source: 'api',
                isValidated: true
            };
        } catch (error) {
            console.error(`[TrialsInternalService] Error fetching trial ${nctId}:`, error);
            return null;
        }
    }
};
