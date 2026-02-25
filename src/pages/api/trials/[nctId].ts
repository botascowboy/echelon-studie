export const prerender = false;

import type { APIContext } from 'astro';
import { PLATFORM_CONFIG } from '../../../lib/config';
import { TrialsInternalService } from '../../../lib/services/trials-internal.service';

export async function GET({ params }: APIContext) {
  const { nctId } = params;

  if (!nctId) {
    return new Response(
      JSON.stringify({ error: 'NCT ID is required' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const result = await TrialsInternalService.getTrialDetails(nctId);

    if (result) {
      return new Response(
        JSON.stringify({
          trial: result.trial,
          source: result.source,
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
