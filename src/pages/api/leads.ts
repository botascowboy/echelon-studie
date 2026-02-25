export const prerender = false;

import type { APIContext } from 'astro';
import { addLead, getLeads, updateLeadStatus, scoreLead } from '../../lib/leads';

export async function POST({ request }: APIContext) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, city, age, bmi, conditions, currentMeds, trialId, trialTitle } = body;

    if (!firstName || !email || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: firstName, email, phone' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const qualityScore = scoreLead({ bmi, conditions: conditions || [], currentMeds });
    const likelyEligible = qualityScore >= 40;

    const lead = addLead({
      firstName,
      lastName: lastName || '',
      email,
      phone,
      city: city || '',
      age: age || '',
      bmi: bmi || '',
      conditions: conditions || [],
      currentMeds: currentMeds || '',
      trialId: trialId || '',
      trialTitle: trialTitle || '',
      qualityScore,
    });

    console.log(`[Leads] New lead captured: ${lead.id} | ${firstName} ${lastName} | score=${qualityScore}`);

    return new Response(
      JSON.stringify({ success: true, id: lead.id, likelyEligible, qualityScore }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('[Leads API] Error:', err);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET({ request }: APIContext) {
  // Simple token-based auth — set ADMIN_TOKEN env var
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || request.headers.get('x-admin-token');
  const adminToken = import.meta.env.ADMIN_TOKEN || 'echelon-admin-2024';

  if (token !== adminToken) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const leads = getLeads();
  return new Response(
    JSON.stringify({ leads, total: leads.length }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

export async function PATCH({ request }: APIContext) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || request.headers.get('x-admin-token');
  const adminToken = import.meta.env.ADMIN_TOKEN || 'echelon-admin-2024';

  if (token !== adminToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const { id, status, notes } = await request.json();
  const updated = updateLeadStatus(id, status, notes);

  if (!updated) {
    return new Response(JSON.stringify({ error: 'Lead not found' }), { status: 404 });
  }

  return new Response(
    JSON.stringify({ success: true, lead: updated }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
