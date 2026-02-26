export const prerender = false;

import type { APIContext } from 'astro';
import { LeadService } from '../../lib/services/LeadService';
import { LeadCreateSchema, LeadUpdateSchema } from '../../lib/schemas';

export async function POST({ request }: APIContext) {
  try {
    const json = await request.json();
    const result = LeadCreateSchema.safeParse(json);

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: result.error.format() }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const ip = request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    const lead = await LeadService.create({
      ...result.data,
      ipAddress: ip,
      userAgent: userAgent
    });

    return new Response(
      JSON.stringify({ success: true, id: lead.id, qualityScore: lead.qualityScore }),
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
  const url = new URL(request.url);
  const token = url.searchParams.get('token') || request.headers.get('x-admin-token');
  const adminToken = import.meta.env.ADMIN_TOKEN || 'echelon-admin-2024';

  if (token !== adminToken) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  // Parse filters from query params
  const status = url.searchParams.get('status') as any;
  const minScore = url.searchParams.get('minScore') ? parseInt(url.searchParams.get('minScore')!) : undefined;
  const maxScore = url.searchParams.get('maxScore') ? parseInt(url.searchParams.get('maxScore')!) : undefined;
  const city = url.searchParams.get('city') || undefined;

  const leads = await LeadService.getAll({ status, minScore, maxScore, city });
  const stats = await LeadService.getStats();

  return new Response(
    JSON.stringify({ leads, stats, total: leads.length }),
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

  const json = await request.json();
  const result = LeadUpdateSchema.safeParse(json);

  if (!result.success) {
    return new Response(
      JSON.stringify({ error: 'Validation failed', details: result.error.format() }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { id, status, notes } = result.data;
  const updated = await LeadService.updateStatus(id, status, notes);

  if (!updated) {
    return new Response(JSON.stringify({ error: 'Lead not found' }), { status: 404 });
  }

  return new Response(
    JSON.stringify({ success: true, lead: updated }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}
