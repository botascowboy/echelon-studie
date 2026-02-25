import { getTrialByNctId as getApiTrialByNctId, transformTrialData } from '../clinicalTrialsApi';
import { TrialSchema } from './trials.service';

/**
 * Server-side service for Trials data.
 * Always uses real API from ClinicalTrials.gov.
 */
export const TrialsInternalService = {
    /**
     * Get single trial details from API
     */
    async getTrialDetails(nctId: string) {
        if (!nctId) return null;

        try {
            const apiTrial = await getApiTrialByNctId(nctId);
            if (!apiTrial) return null;

            const trial = transformTrialData(apiTrial);

            // Validate with Zod for consistency
            const result = TrialSchema.safeParse(trial);

            return {
                trial: result.success ? result.data : trial,
                source: 'api',
                isValidated: result.success
            };
        } catch (error) {
            console.error(`[TrialsInternalService] Error fetching trial ${nctId}:`, error);
            return null;
        }
    }
};
