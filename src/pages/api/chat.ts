export const prerender = false;

import type { APIContext } from 'astro';
import { generateExpertResponse } from '../../lib/ai/enrichment';

export async function POST({ request }: APIContext) {
    try {
        const { message } = await request.json();

        if (!message) {
            return new Response(JSON.stringify({ error: 'Message is required' }), { status: 400 });
        }

        // Get response from OpenRouter
        const response = await generateExpertResponse(message);

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
