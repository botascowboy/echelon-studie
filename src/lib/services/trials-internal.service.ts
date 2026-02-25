import { PLATFORM_CONFIG } from '../config';
import { getMockTrialByNctId, getMockTrials } from '../mockTrials';
import { getTrialByNctId as getApiTrialByNctId, transformTrialData } from '../clinicalTrialsApi';
import { TrialSchema } from './trials.service';

/**
 * Server-side service for Trials data.
 * Used by API routes and SSR pages to avoid unnecessary fetch calls.
 */
export const TrialsInternalService = {
    /**
     * Get single trial details with fallback logic
     */
    async getTrialDetails(nctId: string) {
        if (!nctId) return null;

        let trial: any = null;
        let source = 'mock';

        if (PLATFORM_CONFIG.enableRealApi) {
            try {
                const apiTrial = await getApiTrialByNctId(nctId);
                if (apiTrial) {
                    trial = transformTrialData(apiTrial);
                    source = 'api';
                }
            } catch (apiError) {
                console.warn(`[TrialsInternalService] API failed for ${nctId}, falling back to mock`);
            }
        }

        if (!trial) {
            trial = getMockTrialByNctId(nctId);
            if (!trial) {
                // Try fuzzy match for IDs like NCT123456-CITY
                const baseId = nctId.split('-')[0];
                const allTrials = getMockTrials();
                trial = allTrials.find((t: any) => t.nct_id.startsWith(baseId)) || null;
            }
            if (trial) source = 'mock-fallback';
        }

        if (!trial) return null;

        // Validate with Zod for consistency
        const result = TrialSchema.safeParse(trial);

        return {
            trial: result.success ? result.data : trial, // Fallback to raw if validation fails but trial exists
            source,
            isValidated: result.success
        };
    }
};
