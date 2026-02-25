export const prerender = false;

import type { APIContext } from 'astro';
import { getMockTrialByNctId, getMockTrials } from '../../../lib/mockTrials';
import { PLATFORM_CONFIG } from '../../../lib/config';
import { getTrialByNctId as getApiTrialByNctId, transformTrialData } from '../../../lib/clinicalTrialsApi';

export async function GET({ params }: APIContext) {
  const { nctId } = params;

  if (!nctId) {
    return new Response(
      JSON.stringify({ error: 'NCT ID is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    let trial: any = null;
    let source = 'mock';

    if (PLATFORM_CONFIG.enableRealApi) {
      try {
        console.log(`[API /trials/${nctId}] Fetching from ClinicalTrials.gov API...`);
        const apiTrial = await getApiTrialByNctId(nctId);
        if (apiTrial) {
          trial = transformTrialData(apiTrial);
          source = 'api';
        }
      } catch (apiError) {
        console.warn(`[API /trials/${nctId}] API failed, falling back to mock:`, apiError);
      }
    }

    if (!trial) {
      trial = getMockTrialByNctId(nctId);
      if (!trial) {
        const baseId = nctId.split('-')[0];
        const allTrials = getMockTrials();
        trial = allTrials.find((t: any) => t.nct_id.startsWith(baseId)) || null;
      }
      if (trial) source = 'mock-fallback';
    }

    if (trial) {
      return new Response(
        JSON.stringify({
          trial,
          source,
          availableCities: PLATFORM_CONFIG.cities.map(c => c.name),
          url: `https://clinicaltrials.gov/study/${nctId.split('-')[0]}`,
        }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=300',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        error: 'Trial not found',
        availableCities: PLATFORM_CONFIG.cities.map(c => c.name),
      }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error(`[API /trials/${nctId}] Error:`, error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch trial data' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
