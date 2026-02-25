/**
 * ClinicalTrials.gov API Integration
 * API v2 documentation: https://clinicaltrials.gov/api/v2/
 */

const API_BASE_URL = 'https://clinicaltrials.gov/api/v2';

export interface ClinicalTrialsParams {
  query?: string;
  condition?: string;
  location?: string;
  phase?: string;
  page?: number;
  pageSize?: number;
}

export interface ClinicalTrial {
  protocolSection: {
    identificationModule: {
      nctId: string;
      briefTitle: string;
      officialTitle?: string;
      organization?: {
        fullName?: string;
        class?: string;
      };
    };
    statusModule: {
      overallStatus: string;
      startDate?: {
        date?: string;
      };
      completionDate?: {
        date?: string;
        type?: string;
      };
    };
    descriptionModule?: {
      briefSummary?: string;
      detailedDescription?: string;
    };
    conditionsModule?: {
      conditions?: string[];
      keywords?: string[];
    };
    designModule?: {
      phases?: string[];
      studyType?: string;
      enrollmentInfo?: {
        count?: number;
        type?: string;
      };
    };
    eligibilityModule?: {
      eligibilityCriteria?: string;
      healthyVolunteers?: boolean;
      sex?: string;
      minimumAge?: string;
      maximumAge?: string;
      stdAges?: string[];
    };
    contactsLocationsModule?: {
      centralContacts?: Array<{
        name?: string;
        role?: string;
        phone?: string;
        email?: string;
      }>;
      facilities?: Array<{
        name?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
        status?: string;
      }>;
      locations?: Array<{
        facility?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
        status?: string;
      }>;
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: {
        name?: string;
        class?: string;
      };
    };
  };
  hasResults?: boolean;
  hasProtocolResults?: boolean;
}

export interface ClinicalTrialsResponse {
  studies?: ClinicalTrial[];
  totalCount?: number;
  nextPageToken?: string;
}

/**
 * Search clinical trials from ClinicalTrials.gov API
 */
export async function searchClinicalTrials(
  params: ClinicalTrialsParams
): Promise<ClinicalTrialsResponse> {
  const { query, condition, location, phase, page = 1, pageSize = 20 } = params;

  // Build filter query
  const filters: string[] = [];

  if (condition) {
    filters.push(`condition:${encodeURIComponent(condition)}`);
  }

  if (location) {
    filters.push(`location:${encodeURIComponent(location)}`);
  }

  if (phase) {
    // Map our phase names to API format
    const phaseMap: Record<string, string> = {
      'PHASE1': 'EARLY_PHASE1|PHASE1|PHASE1/PHASE2',
      'PHASE2': 'PHASE2|PHASE2/PHASE3',
      'PHASE3': 'PHASE3',
      'PHASE4': 'PHASE4',
    };
    if (phaseMap[phase]) {
      filters.push(`phase:${phaseMap[phase]}`);
    }
  }

  // Always filter for recruiting studies and weight-related conditions
  filters.push('status:RECRUITING');

  if (!condition && !query) {
    // Default to weight/obesity related if no specific search
    filters.push('condition:obesity|weight|overweight|diabetes');
  }

  const filterParam = filters.join(' AND ');

  // Build URL
  const url = new URL(`${API_BASE_URL}/studies`);
  url.searchParams.append('filter.overallStatus', 'RECRUITING');
  url.searchParams.append('pageSize', pageSize.toString());
  url.searchParams.append('pageToken', page.toString());

  if (filterParam) {
    url.searchParams.append('filter.advanced', filterParam);
  }

  if (query) {
    url.searchParams.append('query.term', encodeURIComponent(query));
  }

  // Fields to retrieve
  const fields = [
    'protocolSection.identificationModule',
    'protocolSection.statusModule',
    'protocolSection.descriptionModule',
    'protocolSection.conditionsModule',
    'protocolSection.designModule',
    'protocolSection.eligibilityModule',
    'protocolSection.contactsLocationsModule',
    'protocolSection.sponsorCollaboratorsModule',
    'hasResults',
    'hasProtocolResults',
  ].join(',');

  url.searchParams.append('fields', fields);

  try {
    console.log('[ClinicalTrials.gov] Fetching:', url.toString());

    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`ClinicalTrials.gov API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return {
      studies: data.studies || [],
      totalCount: data.totalCount || 0,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    console.error('[ClinicalTrials.gov] Error:', error);
    throw error;
  }
}

/**
 * Get a specific trial by NCT ID
 */
export async function getTrialByNctId(nctId: string): Promise<ClinicalTrial | null> {
  const url = new URL(`${API_BASE_URL}/studies/${nctId}`);
  url.searchParams.append('fields', 'ProtocolSection,DerivedSection');

  try {
    const response = await fetch(url.toString(), {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`ClinicalTrials.gov API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`[ClinicalTrials.gov] Error fetching ${nctId}:`, error);
    throw error;
  }
}

import { TrialSchema, type Trial } from './services/trials.service';

/**
 * Transform ClinicalTrials.gov format to our app format
 */
export function transformTrialData(apiTrial: ClinicalTrial): Trial {
  const protocol = apiTrial.protocolSection;

  // Extract age range
  let ageRange = 'Adults 18+';
  const minAge = protocol.eligibilityModule?.minimumAge;
  const maxAge = protocol.eligibilityModule?.maximumAge;

  if (minAge && maxAge) {
    ageRange = `${minAge.replace(' Years', '')}-${maxAge.replace(' Years', '')} years`;
  } else if (minAge) {
    ageRange = `${minAge.replace(' Years', '')}+ years`;
  }

  // Extract phase
  const phases = protocol.designModule?.phases || [];
  const phase = phases[0] || 'NA';
  const phaseMap: Record<string, { label: string; color: string }> = {
    'EARLY_PHASE1': { label: 'Early Phase 1', color: 'purple' },
    'PHASE1': { label: 'Phase 1', color: 'blue' },
    'PHASE2': { label: 'Phase 2', color: 'emerald' },
    'PHASE3': { label: 'Phase 3', color: 'green' },
    'PHASE4': { label: 'Phase 4', color: 'teal' },
    'NA': { label: 'Not Applicable', color: 'gray' },
  };

  const phaseInfo = phaseMap[phase] || phaseMap['NA'];

  // Extract locations — API v2 uses 'locations', older format used 'facilities'
  const allLocations = [
    ...(protocol.contactsLocationsModule?.locations || []),
    ...(protocol.contactsLocationsModule?.facilities || []),
  ];

  // Extract all unique cities and states for robust filtering
  const citiesSet = new Set<string>();
  const statesSet = new Set<string>();

  allLocations.forEach(loc => {
    if (loc.city) citiesSet.add(loc.city.trim());
    if (loc.state) statesSet.add(loc.state.trim());
  });

  const allCities = Array.from(citiesSet);
  const allStates = Array.from(statesSet);

  // Prefer US locations so city/state fields are meaningful for the "Primary" card view
  const usLocations = allLocations.filter(l => !l.country || l.country === 'United States');
  const primaryLocation = usLocations[0] || allLocations[0] || {};

  // Build AI summary from available data
  const conditions = protocol.conditionsModule?.conditions || [];
  const briefSummary = protocol.descriptionModule?.briefSummary || '';

  let aiSummary = briefSummary;
  if (!aiSummary && conditions.length > 0) {
    aiSummary = `Clinical trial studying ${conditions.join(', ')}. ${protocol.designModule?.studyType || 'Interventional'} study.`;
  }

  // Extract compensation info (not always available in API, so we infer from keywords)
  const keywords = protocol.conditionsModule?.keywords || [];
  const detailedDesc = protocol.descriptionModule?.detailedDescription || '';
  const eligibilityText = protocol.eligibilityModule?.eligibilityCriteria || '';

  const searchText = (briefSummary + detailedDesc + eligibilityText + keywords.join(' ')).toLowerCase();

  const paymentKeywords = [
    'compensat', 'payment', 'paid', 'stipend', 'reimburse', 'remuneration', 'financial'
  ];

  const hasCompensation = paymentKeywords.some(k => searchText.includes(k));

  // Parse eligibility criteria
  const mustHave: string[] = [];
  const cannotHave: string[] = [];

  if (eligibilityText) {
    const inclusionMatch = eligibilityText.match(/inclusion\s*criteria:?([\s\S]*?)(?=exclusion|$)/i);
    const exclusionMatch = eligibilityText.match(/exclusion\s*criteria:?([\s\S]*?)(?=\n\n|$)/i);

    if (inclusionMatch) {
      const items = inclusionMatch[1].split('\n').filter(line => line.trim().startsWith('-') || line.trim().match(/^\d+\./));
      mustHave.push(...items.slice(0, 3).map(item => item.replace(/^[-\d.\s]+/, '').trim()).filter(Boolean));
    }

    if (exclusionMatch) {
      const items = exclusionMatch[1].split('\n').filter(line => line.trim().startsWith('-') || line.trim().match(/^\d+\./));
      cannotHave.push(...items.slice(0, 3).map(item => item.replace(/^[-\d.\s]+/, '').trim()).filter(Boolean));
    }
  }

  // Default eligibility items if none parsed
  if (mustHave.length === 0) {
    mustHave.push('Age requirements met', 'Condition-specific criteria');
  }
  if (cannotHave.length === 0) {
    cannotHave.push('Contraindications for treatment');
  }

  return {
    nct_id: protocol.identificationModule.nctId,
    title: protocol.identificationModule.briefTitle,
    official_title: protocol.identificationModule.officialTitle || protocol.identificationModule.briefTitle,
    brief_summary: briefSummary.slice(0, 200) + (briefSummary.length > 200 ? '...' : ''),
    detailed_description: protocol.descriptionModule?.detailedDescription || briefSummary,
    overall_status: protocol.statusModule.overallStatus,
    status_label: formatStatus(protocol.statusModule.overallStatus),
    phase: phase,
    phase_label: phaseInfo.label,
    phase_color: phaseInfo.color,
    phase_description: getPhaseDescription(phase),
    study_type: protocol.designModule?.studyType || 'Interventional',

    // Eligibility
    eligibility_age_range: ageRange,
    eligibility_summary_must: JSON.stringify(mustHave),
    eligibility_summary_cannot: JSON.stringify(cannotHave),
    eligibility_bmi_requirements: 'Check specific criteria',

    // Enrollment
    enrollment_count: protocol.designModule?.enrollmentInfo?.count || 0,
    sex: protocol.eligibilityModule?.sex || 'All',
    minimum_age: minAge || '18 Years',
    maximum_age: maxAge || 'No maximum',

    // Location
    primary_location_city: primaryLocation.city || (allLocations.length > 1 ? 'Multiple Locations' : 'See details'),
    primary_location_state: primaryLocation.state || '',
    primary_location_zip: primaryLocation.zip || '',
    primary_location_country: primaryLocation.country || 'United States',
    primary_location_facility: (primaryLocation as any).facility || (primaryLocation as any).name || '',
    full_address: `${(primaryLocation as any).facility || (primaryLocation as any).name || ''} ${primaryLocation.city || ''} ${primaryLocation.state || ''} ${primaryLocation.zip || ''}`.trim(),
    locations_count: allLocations.length,
    us_locations_count: usLocations.length,

    // NEW: Searchable locations
    all_cities: allCities,
    all_states: allStates,

    // Sponsor
    lead_sponsor: protocol.sponsorCollaboratorsModule?.leadSponsor?.name || 'Not Disclosed',
    sponsor_class: protocol.sponsorCollaboratorsModule?.leadSponsor?.class || '',

    // AI Enrichment
    ai_summary: aiSummary,
    ai_tags: JSON.stringify(conditions.slice(0, 5)),
    ai_what_to_expect: JSON.stringify(['Contact site for details', 'Screening visit required', 'Study-specific procedures']),
    ai_estimated_duration: 'Duration varies by study',
    ai_visit_frequency: 'Contact site for schedule',
    ai_potential_risks: JSON.stringify(['Side effects specific to treatment', 'Time commitment']),
    ai_potential_benefits: JSON.stringify(['Access to new treatments', 'Medical monitoring', 'Contributing to research']),
    ai_questions_to_ask: JSON.stringify(['What are the specific requirements?', 'How long is the commitment?', 'What compensation is provided?']),

    // Compensation
    has_compensation: hasCompensation,
    compensation_amount: hasCompensation ? 'Contact site for details' : 'Not specified',

    // Dates
    start_date: protocol.statusModule.startDate?.date || '',
    completion_date: protocol.statusModule.completionDate?.date || '',

    // Relevance
    weight_loss_relevance_score: calculateRelevanceScore(conditions, keywords),
  };
}

function formatStatus(status: string): string {
  const statusMap: Record<string, string> = {
    'RECRUITING': 'Recruiting',
    'ACTIVE_NOT_RECRUITING': 'Active',
    'NOT_YET_RECRUITING': 'Not Yet Recruiting',
    'COMPLETED': 'Completed',
    'SUSPENDED': 'Suspended',
    'TERMINATED': 'Terminated',
    'WITHDRAWN': 'Withdrawn',
  };
  return statusMap[status] || status;
}

function getPhaseDescription(phase: string): string {
  const descriptions: Record<string, string> = {
    'EARLY_PHASE1': 'Early exploration of treatment',
    'PHASE1': 'Testing safety and dosage',
    'PHASE2': 'Testing efficacy and side effects',
    'PHASE3': 'Comparing to standard treatments',
    'PHASE4': 'Post-approval monitoring',
    'NA': 'Observational study',
  };
  return descriptions[phase] || 'Clinical trial';
}

function calculateRelevanceScore(conditions: string[], keywords: string[]): number {
  const weightTerms = ['obesity', 'weight', 'overweight', 'bmi', 'body mass', 'weight loss', 'metabolic'];
  const drugTerms = ['semaglutide', 'tirzepatide', 'liraglutide', 'glp-1', 'wegovy', 'ozempic', 'mounjaro'];

  let score = 50; // Base score

  const allText = [...conditions, ...keywords].join(' ').toLowerCase();

  weightTerms.forEach(term => {
    if (allText.includes(term)) score += 10;
  });

  drugTerms.forEach(term => {
    if (allText.includes(term)) score += 15;
  });

  return Math.min(score, 100);
}

/**
 * Fetch trials with fallback to mock data
 */
export async function fetchTrialsWithFallback(params: ClinicalTrialsParams): Promise<{
  trials: any[];
  source: 'api' | 'mock';
  totalCount: number;
}> {
  try {
    const response = await searchClinicalTrials(params);

    if (!response.studies || response.studies.length === 0) {
      throw new Error('No studies found');
    }

    const transformed = response.studies.map(transformTrialData);

    return {
      trials: transformed,
      source: 'api',
      totalCount: response.totalCount || transformed.length,
    };
  } catch (error) {
    console.warn('[ClinicalTrials.gov] Falling back to mock data:', error);

    // Import mock data
    const { getMockTrials } = await import('./mockTrials');
    const mockTrials = getMockTrials();

    return {
      trials: mockTrials,
      source: 'mock',
      totalCount: mockTrials.length,
    };
  }
}
