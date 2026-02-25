export const prerender = false;

import type { APIContext } from 'astro';
import { TrialsService } from '../../../lib/services/trials.service';

export async function GET({ request }: APIContext) {
  try {
    const url = new URL(request.url);

    const page = parseInt(url.searchParams.get('page') || '1');
    const pageSize = parseInt(url.searchParams.get('pageSize') || '9');
    const q = url.searchParams.get('q') || undefined;
    const location = url.searchParams.get('location') || undefined;
    const phase = url.searchParams.get('phase') || undefined;
    const compensation = url.searchParams.get('compensation') || undefined;

    const result = await TrialsService.getTrials({
      page,
      pageSize,
      q,
      location,
      phase,
      compensation
    });

    return new Response(
      JSON.stringify({
        ...result,
        hasMore: result.page < result.totalPages,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (error) {
    console.error('[API /trials] Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch trials', trials: [], total: 0 }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
