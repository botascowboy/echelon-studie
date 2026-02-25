/**
 * Database Operations for Clinical Trials
 * Compatible with Cloudflare D1
 */

import type { ClinicalTrial } from "../api/clinical-trials";
import type { EnrichedTrialData } from "../ai/enrichment";

// Interfaces para tipado
export interface Trial {
  id: number;
  nct_id: string;
  title: string;
  official_title?: string;
  brief_summary?: string;
  detailed_description?: string;
  overall_status: string;
  status_label?: string;
  phase?: string;
  phase_label?: string;
  phase_description?: string;
  phase_color?: string;
  study_type?: string;
  eligibility_criteria?: string;
  eligibility_summary_must?: string;
  eligibility_summary_cannot?: string;
  eligibility_age_range?: string;
  eligibility_bmi_requirements?: string;
  enrollment_count?: number;
  sex?: string;
  minimum_age?: string;
  maximum_age?: string;
  primary_location_city?: string;
  primary_location_state?: string;
  primary_location_zip?: string;
  primary_location_country?: string;
  locations_count: number;
  latitude?: number;
  longitude?: number;
  lead_sponsor?: string;
  sponsor_class?: string;
  has_compensation: boolean;
  compensation_amount?: string;
  compensation_details?: string;
  ai_summary?: string;
  ai_what_to_expect?: string;
  ai_estimated_duration?: string;
  ai_visit_frequency?: string;
  ai_potential_risks?: string;
  ai_potential_benefits?: string;
  ai_questions_to_ask?: string;
  ai_tags?: string;
  weight_loss_relevance_score: number;
  start_date?: string;
  completion_date?: string;
  last_update_post_date?: string;
  conditions?: string;
  keywords?: string;
  meshes?: string;
  created_at: string;
  updated_at: string;
  last_synced_at?: string;
  is_active: boolean;
}

export interface SearchFilters {
  status?: string;
  phase?: string;
  hasCompensation?: boolean;
  location?: string;
  distance?: number;
  minRelevance?: number;
  sex?: string;
  age?: number;
  query?: string;
}

/**
 * Inserta o actualiza un ensayo clínico con sus datos enriquecidos
 */
export async function upsertTrial(
  db: any,
  trialData: ClinicalTrial,
  enrichedData: EnrichedTrialData
): Promise<{ id: number; isNew: boolean }> {
  const protocol = trialData.protocolSection;
  const idModule = protocol.identificationModule;
  const statusModule = protocol.statusModule;
  const descModule = protocol.descriptionModule;
  const designModule = protocol.designModule;
  const eligibilityModule = protocol.eligibilityModule;
  const contactsModule = protocol.contactsLocationsModule;
  const sponsorModule = protocol.sponsorCollaboratorsModule;
  const conditionsModule = protocol.conditionsModule;
  const derived = trialData.derivedSection;

  // Preparar datos de ubicación principal
  const locations = contactsModule?.locations || [];
  const primaryLocation = locations[0] || {};

  // Extraer compensación
  const fullText = `${descModule?.briefSummary || ""} ${descModule?.detailedDescription || ""} ${eligibilityModule?.eligibilityCriteria || ""}`;
  
  // Datos del trial
  const trialRecord = {
    nct_id: idModule.nctId,
    title: idModule.briefTitle,
    official_title: idModule.officialTitle,
    brief_summary: descModule?.briefSummary,
    detailed_description: descModule?.detailedDescription,
    overall_status: statusModule.overallStatus,
    phase: designModule?.phases?.join(", "),
    study_type: designModule?.studyType,
    eligibility_criteria: eligibilityModule?.eligibilityCriteria,
    eligibility_summary_must: JSON.stringify(enrichedData.eligibilitySummary.mustHave),
    eligibility_summary_cannot: JSON.stringify(enrichedData.eligibilitySummary.cannotHave),
    eligibility_age_range: enrichedData.eligibilitySummary.ageRange,
    eligibility_bmi_requirements: enrichedData.eligibilitySummary.bmiRequirements,
    enrollment_count: designModule?.enrollmentInfo?.count,
    sex: eligibilityModule?.sex,
    minimum_age: eligibilityModule?.minimumAge,
    maximum_age: eligibilityModule?.maximumAge,
    primary_location_city: primaryLocation.city,
    primary_location_state: primaryLocation.state,
    primary_location_country: primaryLocation.country || "United States",
    locations_count: locations.length,
    lead_sponsor: sponsorModule?.leadSponsor?.name,
    sponsor_class: sponsorModule?.leadSponsor?.class,
    has_compensation: enrichedData.compensation.hasCompensation ? 1 : 0,
    compensation_amount: enrichedData.compensation.estimatedAmount,
    compensation_details: enrichedData.compensation.details,
    ai_summary: enrichedData.summary,
    ai_what_to_expect: JSON.stringify(enrichedData.whatToExpect),
    ai_estimated_duration: enrichedData.estimatedDuration,
    ai_visit_frequency: enrichedData.visitFrequency,
    ai_potential_risks: JSON.stringify(enrichedData.potentialRisks),
    ai_potential_benefits: JSON.stringify(enrichedData.potentialBenefits),
    ai_questions_to_ask: JSON.stringify(enrichedData.questionsToAsk),
    ai_tags: JSON.stringify(enrichedData.aiTags),
    weight_loss_relevance_score: enrichedData.weightLossRelevanceScore,
    start_date: statusModule.startDate?.date,
    completion_date: statusModule.completionDate?.date,
    conditions: JSON.stringify(conditionsModule?.conditions || []),
    keywords: JSON.stringify(conditionsModule?.keywords || []),
    meshes: JSON.stringify(derived?.conditionBrowseModule?.meshes?.map(m => m.term) || []),
    last_synced_at: new Date().toISOString(),
    is_active: 1
  };

  // Insertar o actualizar
  const result = await db
    .prepare(`
      INSERT INTO trials (
        nct_id, title, official_title, brief_summary, detailed_description,
        overall_status, phase, study_type, eligibility_criteria,
        eligibility_summary_must, eligibility_summary_cannot, eligibility_age_range, eligibility_bmi_requirements,
        enrollment_count, sex, minimum_age, maximum_age,
        primary_location_city, primary_location_state, primary_location_country, locations_count,
        lead_sponsor, sponsor_class,
        has_compensation, compensation_amount, compensation_details,
        ai_summary, ai_what_to_expect, ai_estimated_duration, ai_visit_frequency,
        ai_potential_risks, ai_potential_benefits, ai_questions_to_ask, ai_tags,
        weight_loss_relevance_score, start_date, completion_date,
        conditions, keywords, meshes, last_synced_at, is_active
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
      ON CONFLICT(nct_id) DO UPDATE SET
        title = excluded.title,
        official_title = excluded.official_title,
        brief_summary = excluded.brief_summary,
        detailed_description = excluded.detailed_description,
        overall_status = excluded.overall_status,
        phase = excluded.phase,
        eligibility_criteria = excluded.eligibility_criteria,
        eligibility_summary_must = excluded.eligibility_summary_must,
        eligibility_summary_cannot = excluded.eligibility_summary_cannot,
        enrollment_count = excluded.enrollment_count,
        primary_location_city = excluded.primary_location_city,
        primary_location_state = excluded.primary_location_state,
        locations_count = excluded.locations_count,
        has_compensation = excluded.has_compensation,
        compensation_amount = excluded.compensation_amount,
        compensation_details = excluded.compensation_details,
        ai_summary = excluded.ai_summary,
        ai_what_to_expect = excluded.ai_what_to_expect,
        ai_estimated_duration = excluded.ai_estimated_duration,
        ai_visit_frequency = excluded.ai_visit_frequency,
        ai_potential_risks = excluded.ai_potential_risks,
        ai_potential_benefits = excluded.ai_potential_benefits,
        ai_tags = excluded.ai_tags,
        weight_loss_relevance_score = excluded.weight_loss_relevance_score,
        last_synced_at = excluded.last_synced_at,
        is_active = excluded.is_active,
        updated_at = CURRENT_TIMESTAMP
      RETURNING id
    `)
    .bind(
      trialRecord.nct_id, trialRecord.title, trialRecord.official_title, 
      trialRecord.brief_summary, trialRecord.detailed_description,
      trialRecord.overall_status, trialRecord.phase, trialRecord.study_type,
      trialRecord.eligibility_criteria, trialRecord.eligibility_summary_must,
      trialRecord.eligibility_summary_cannot, trialRecord.eligibility_age_range,
      trialRecord.eligibility_bmi_requirements, trialRecord.enrollment_count,
      trialRecord.sex, trialRecord.minimum_age, trialRecord.maximum_age,
      trialRecord.primary_location_city, trialRecord.primary_location_state,
      trialRecord.primary_location_country, trialRecord.locations_count,
      trialRecord.lead_sponsor, trialRecord.sponsor_class,
      trialRecord.has_compensation, trialRecord.compensation_amount,
      trialRecord.compensation_details, trialRecord.ai_summary,
      trialRecord.ai_what_to_expect, trialRecord.ai_estimated_duration,
      trialRecord.ai_visit_frequency, trialRecord.ai_potential_risks,
      trialRecord.ai_potential_benefits, trialRecord.ai_questions_to_ask,
      trialRecord.ai_tags, trialRecord.weight_loss_relevance_score,
      trialRecord.start_date, trialRecord.completion_date,
      trialRecord.conditions, trialRecord.keywords, trialRecord.meshes,
      trialRecord.last_synced_at, trialRecord.is_active
    )
    .first();

  return {
    id: result?.id,
    isNew: true // Simplificado - en realidad habría que verificar si ya existía
  };
}

/**
 * Busca trials con filtros
 */
export async function searchTrials(
  db: any,
  filters: SearchFilters,
  page: number = 1,
  pageSize: number = 20
): Promise<{ trials: Trial[]; total: number; page: number; totalPages: number }> {
  const offset = (page - 1) * pageSize;
  const conditions: string[] = ["is_active = 1"];
  const params: any[] = [];

  if (filters.status) {
    conditions.push("overall_status = ?");
    params.push(filters.status);
  } else {
    conditions.push("overall_status = 'RECRUITING'");
  }

  if (filters.phase) {
    conditions.push("phase LIKE ?");
    params.push(`%${filters.phase}%`);
  }

  if (filters.hasCompensation !== undefined) {
    conditions.push("has_compensation = ?");
    params.push(filters.hasCompensation ? 1 : 0);
  }

  if (filters.location) {
    conditions.push("(primary_location_city LIKE ? OR primary_location_state LIKE ?)");
    params.push(`%${filters.location}%`, `%${filters.location}%`);
  }

  if (filters.minRelevance) {
    conditions.push("weight_loss_relevance_score >= ?");
    params.push(filters.minRelevance);
  }

  if (filters.query) {
    conditions.push(`(
      title LIKE ? OR 
      brief_summary LIKE ? OR 
      ai_summary LIKE ? OR
      keywords LIKE ?
    )`);
    const queryParam = `%${filters.query}%`;
    params.push(queryParam, queryParam, queryParam, queryParam);
  }

  const whereClause = conditions.join(" AND ");

  // Contar total
  const countResult = await db
    .prepare(`SELECT COUNT(*) as total FROM trials WHERE ${whereClause}`)
    .bind(...params)
    .first();

  const total = countResult?.total || 0;

  // Obtener resultados
  const trials = await db
    .prepare(`
      SELECT * FROM trials 
      WHERE ${whereClause}
      ORDER BY weight_loss_relevance_score DESC, created_at DESC
      LIMIT ? OFFSET ?
    `)
    .bind(...params, pageSize, offset)
    .all();

  return {
    trials: trials.results || [],
    total,
    page,
    totalPages: Math.ceil(total / pageSize)
  };
}

/**
 * Obtiene un trial por NCT ID
 */
export async function getTrialByNctId(
  db: any,
  nctId: string
): Promise<Trial | null> {
  const result = await db
    .prepare("SELECT * FROM trials WHERE nct_id = ?")
    .bind(nctId)
    .first();

  return result || null;
}

/**
 * Obtiene trials por ubicación (estado)
 */
export async function getTrialsByState(
  db: any,
  state: string,
  limit: number = 50
): Promise<Trial[]> {
  const results = await db
    .prepare(`
      SELECT * FROM trials 
      WHERE primary_location_state = ? AND is_active = 1
      ORDER BY weight_loss_relevance_score DESC
      LIMIT ?
    `)
    .bind(state, limit)
    .all();

  return results.results || [];
}

/**
 * Obtiene trials destacados (más relevantes)
 */
export async function getFeaturedTrials(
  db: any,
  limit: number = 6
): Promise<Trial[]> {
  const results = await db
    .prepare(`
      SELECT * FROM trials 
      WHERE is_active = 1 AND overall_status = 'RECRUITING'
      ORDER BY weight_loss_relevance_score DESC, has_compensation DESC
      LIMIT ?
    `)
    .bind(limit)
    .all();

  return results.results || [];
}

/**
 * Obtiene estadísticas para el dashboard
 */
export async function getTrialStats(db: any): Promise<{
  totalActive: number;
  byPhase: Record<string, number>;
  byState: Record<string, number>;
  withCompensation: number;
  avgRelevanceScore: number;
}> {
  const totalActive = await db
    .prepare("SELECT COUNT(*) as count FROM trials WHERE is_active = 1 AND overall_status = 'RECRUITING'")
    .first();

  const byPhase = await db
    .prepare(`
      SELECT phase, COUNT(*) as count 
      FROM trials 
      WHERE is_active = 1 AND overall_status = 'RECRUITING'
      GROUP BY phase
    `)
    .all();

  const byState = await db
    .prepare(`
      SELECT primary_location_state, COUNT(*) as count 
      FROM trials 
      WHERE is_active = 1 AND overall_status = 'RECRUITING'
      GROUP BY primary_location_state
      ORDER BY count DESC
      LIMIT 10
    `)
    .all();

  const withComp = await db
    .prepare("SELECT COUNT(*) as count FROM trials WHERE has_compensation = 1 AND is_active = 1")
    .first();

  const avgScore = await db
    .prepare("SELECT AVG(weight_loss_relevance_score) as avg FROM trials WHERE is_active = 1")
    .first();

  return {
    totalActive: totalActive?.count || 0,
    byPhase: (byPhase.results || []).reduce((acc: any, row: any) => {
      acc[row.phase || "Unknown"] = row.count;
      return acc;
    }, {}),
    byState: (byState.results || []).reduce((acc: any, row: any) => {
      acc[row.primary_location_state || "Unknown"] = row.count;
      return acc;
    }, {}),
    withCompensation: withComp?.count || 0,
    avgRelevanceScore: Math.round(avgScore?.avg || 0)
  };
}

/**
 * Guarda un interés de paciente
 */
export async function savePatientInterest(
  db: any,
  data: {
    trialId: number;
    sessionId: string;
    email?: string;
    phone?: string;
    age?: number;
    gender?: string;
    locationZip?: string;
    preScreenAnswers?: Record<string, string>;
    preScreenResult?: string;
    preScreenConfidence?: string;
  }
): Promise<{ id: number }> {
  const result = await db
    .prepare(`
      INSERT INTO patient_interests (
        trial_id, session_id, email, phone, age, gender, location_zip,
        pre_screen_answers, pre_screen_result, pre_screen_confidence, status
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
      RETURNING id
    `)
    .bind(
      data.trialId,
      data.sessionId,
      data.email,
      data.phone,
      data.age,
      data.gender,
      data.locationZip,
      JSON.stringify(data.preScreenAnswers),
      data.preScreenResult,
      data.preScreenConfidence
    )
    .first();

  return { id: result?.id };
}

/**
 * Crea una alerta de usuario
 */
export async function createUserAlert(
  db: any,
  data: {
    sessionId: string;
    email: string;
    locationZip?: string;
    maxDistance?: number;
    phases?: string[];
    requiresCompensation?: boolean;
    minRelevanceScore?: number;
  }
): Promise<{ id: number }> {
  const result = await db
    .prepare(`
      INSERT INTO user_alerts (
        session_id, email, location_zip, max_distance_miles, phases,
        requires_compensation, min_relevance_score
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
      RETURNING id
    `)
    .bind(
      data.sessionId,
      data.email,
      data.locationZip,
      data.maxDistance || 50,
      JSON.stringify(data.phases || []),
      data.requiresCompensation ? 1 : 0,
      data.minRelevanceScore || 70
    )
    .first();

  return { id: result?.id };
}
