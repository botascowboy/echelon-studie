export const prerender = false;

import type { APIContext } from 'astro';
import { generateExpertResponse } from '../../lib/ai/enrichment';
import { TrialService } from '../../lib/services/TrialService';

export async function POST({ request }: APIContext) {
    try {
        const { message, context } = await request.json();

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
        }

        // Optional: Get some sample trials to give context to the AI
        const trials = await TrialService.getTrials({ pageSize: 3 });

        const response = await generateExpertResponse(message, {
            trials: trials.trials
        });

        return new Response(
            JSON.stringify({ response }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (err) {
        console.error('[Chat API] Error:', err);
        return new Response(
            JSON.stringify({ error: 'Internal server error' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
