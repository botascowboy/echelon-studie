/**
 * ClinicalTrials.gov API Client
 * Docs: https://clinicaltrials.gov/data-api/api
 */

export interface ClinicalTrial {
  protocolSection: {
    identificationModule: {
      nctId: string;
      briefTitle: string;
      officialTitle?: string;
    };
    statusModule: {
      overallStatus: string;
      startDate?: {
        date: string;
      };
      completionDate?: {
        date: string;
      };
    };
    descriptionModule?: {
      briefSummary: string;
      detailedDescription?: string;
    };
    conditionsModule?: {
      conditions?: string[];
      keywords?: string[];
    };
    designModule?: {
      studyType: string;
      phases?: string[];
      enrollmentInfo?: {
        count: number;
      };
    };
    eligibilityModule?: {
      eligibilityCriteria: string;
      healthyVolunteers?: boolean;
      sex: string;
      minimumAge: string;
      maximumAge?: string;
      stdAges?: string[];
    };
    contactsLocationsModule?: {
      locations?: Array<{
        facility?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
        status?: string;
      }>;
      centralContacts?: Array<{
        name?: string;
        role?: string;
        phone?: string;
        email?: string;
      }>;
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: {
        name: string;
        class: string;
      };
    };
  };
  derivedSection?: {
    miscInfoModule?: {
      keywords?: string[];
    };
    conditionBrowseModule?: {
      meshes?: Array<{
        term: string;
      }>;
    };
  };
}

export interface SearchResponse {
  studies: ClinicalTrial[];
  nextPageToken?: string;
  totalCount: number;
}

// Keywords relacionados con pérdida de peso para búsqueda amplia
export const WEIGHT_LOSS_KEYWORDS = [
  "weight loss",
  "obesity",
  "overweight",
  "BMI",
  "body mass index",
  "metabolic syndrome",
  "bariatric",
  "dietary intervention",
  "GLP-1",
  "semaglutide",
  "tirzepatide",
  "liraglutide",
  "wegovy",
  "ozempic",
  "mounjaro",
  "zepbound",
  "appetite suppressant",
  "weight management",
  "fat loss",
  "satiety",
  "metabolic rate"
];

const API_BASE = "https://clinicaltrials.gov/api/v2";

export async function searchWeightLossTrials(params: {
  pageToken?: string;
  pageSize?: number;
  location?: string;
  distance?: number;
  recruitmentStatus?: string;
  phase?: string;
} = {}): Promise<SearchResponse> {
  const {
    pageToken,
    pageSize = 20,
    location,
    distance = 100,
    recruitmentStatus,
    phase
  } = params;

  // Construir query de búsqueda con OR de todos los keywords
  const conditionsQuery = WEIGHT_LOSS_KEYWORDS.join(" OR ");
  
  const searchParams = new URLSearchParams({
    "query.cond": conditionsQuery,
    "pageSize": pageSize.toString(),
    "sort": "LastUpdatePostDate:desc",
    "fields": "ProtocolSection,DerivedSection"
  });

  if (pageToken) {
    searchParams.set("pageToken", pageToken);
  }

  // Filtros adicionales
  if (recruitmentStatus) {
    searchParams.set("filter.overallStatus", recruitmentStatus);
  } else {
    // Por defecto, solo mostrar reclutando
    searchParams.set("filter.overallStatus", "RECRUITING");
  }

  if (phase) {
    searchParams.set("filter.phase", phase);
  }

  if (location) {
    searchParams.set("query.locn", location);
  }

  const url = `${API_BASE}/studies?${searchParams.toString()}`;
  
  console.log(`[ClinicalTrialsAPI] Fetching: ${url}`);

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${await response.text()}`);
  }

  const data = await response.json();
  
  return {
    studies: data.studies || [],
    nextPageToken: data.nextPageToken,
    totalCount: data.totalCount || 0
  };
}

export async function getTrialByNctId(nctId: string): Promise<ClinicalTrial | null> {
  const url = `${API_BASE}/studies/${nctId}?fields=ProtocolSection,DerivedSection`;
  
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json"
    }
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${await response.text()}`);
  }

  return response.json();
}

// Función para extraer información de compensación del texto
export function extractCompensationInfo(text: string): {
  hasCompensation: boolean;
  amount?: string;
  details?: string;
} {
  const lowerText = text.toLowerCase();
  
  // Palabras clave relacionadas con pago
  const paymentKeywords = [
    "compensation", "compensated", "payment", "paid", "stipend",
    "reimbursement", "reimbursed", "remuneration", "remunerated",
    "financial compensation", "travel reimbursement", "parking reimbursement"
  ];

  const hasCompensation = paymentKeywords.some(kw => lowerText.includes(kw));

  if (!hasCompensation) {
    return { hasCompensation: false };
  }

  // Intentar extraer montos monetarios (patrones como $500, $1,200, etc.)
  const amountRegex = /\$[\d,]+(?:\.\d{2})?|\$\d+(?:,\d{3})*(?:\.\d{2})?/g;
  const amounts = text.match(amountRegex);

  // Buscar detalles en oraciones que mencionen pago
  const sentences = text.split(/[.!?]+/);
  const paymentSentences = sentences.filter(s => 
    paymentKeywords.some(kw => s.toLowerCase().includes(kw))
  );

  return {
    hasCompensation: true,
    amount: amounts ? amounts[0] : undefined,
    details: paymentSentences.length > 0 ? paymentSentences[0].trim() : undefined
  };
}

// Traducir fases del estudio a formato amigable
export function translatePhase(phase?: string[]): {
  code: string;
  label: string;
  description: string;
  color: string;
} {
  if (!phase || phase.length === 0) {
    return {
      code: "NA",
      label: "Not Applicable",
      description: "Observational or expanded access study",
      color: "gray"
    };
  }

  const phaseStr = phase.join(", ");
  
  if (phaseStr.includes("PHASE4") || phaseStr.includes("PHASE 4")) {
    return {
      code: "Phase 4",
      label: "Post-Market",
      description: "Monitoring after FDA approval",
      color: "green"
    };
  }
  
  if (phaseStr.includes("PHASE3") || phaseStr.includes("PHASE 3")) {
    return {
      code: "Phase 3",
      label: "Pivotal Trial",
      description: "Near approval - testing on large groups",
      color: "emerald"
    };
  }
  
  if (phaseStr.includes("PHASE2") || phaseStr.includes("PHASE 2")) {
    return {
      code: "Phase 2",
      label: "Efficacy Trial",
      description: "Testing effectiveness and side effects",
      color: "blue"
    };
  }
  
  if (phaseStr.includes("PHASE1") || phaseStr.includes("PHASE 1")) {
    return {
      code: "Phase 1",
      label: "Safety Trial",
      description: "Initial safety testing",
      color: "amber"
    };
  }

  if (phaseStr.includes("EARLY_PHASE1")) {
    return {
      code: "Early Phase 1",
      label: "Early Research",
      description: "Exploratory research",
      color: "orange"
    };
  }

  return {
    code: phaseStr,
    label: phaseStr,
    description: "Clinical research phase",
    color: "slate"
  };
}

// Traducir estado del estudio
export function translateStatus(status: string): {
  code: string;
  label: string;
  color: string;
} {
  const statusMap: Record<string, { label: string; color: string }> = {
    "RECRUITING": { label: "Recruiting", color: "green" },
    "ACTIVE_NOT_RECRUITING": { label: "Active", color: "blue" },
    "NOT_YET_RECRUITING": { label: "Coming Soon", color: "amber" },
    "COMPLETED": { label: "Completed", color: "gray" },
    "SUSPENDED": { label: "Suspended", color: "red" },
    "TERMINATED": { label: "Terminated", color: "red" },
    "WITHDRAWN": { label: "Withdrawn", color: "gray" },
    "ENROLLING_BY_INVITATION": { label: "By Invitation", color: "purple" }
  };

  const mapped = statusMap[status] || { label: status, color: "slate" };
  
  return {
    code: status,
    label: mapped.label,
    color: mapped.color
  };
}

// Simplificar título del estudio
export function simplifyTitle(title: string): string {
  // Remover prefijos comunes que hacen el título largo
  const prefixesToRemove = [
    /^A\s+(Phase\s+\d+|Randomized|Double-Blind|Single-Blind|Open-Label|Multicenter|International|Prospective)\s+/i,
    /^An?\s+(Open-Label|Observational|Interventional)\s+/i,
    /^A\s+Study\s+of\s+/i,
    /^A\s+Safety\s+and\s+Efficacy\s+Study\s+of\s+/i,
    /^Clinical\s+Study\s+to\s+Evaluate\s+/i,
    /^Evaluation\s+of\s+/i,
    /^Investigation\s+of\s+/i
  ];

  let simplified = title;
  for (const prefix of prefixesToRemove) {
    simplified = simplified.replace(prefix, "");
  }

  // Limitar longitud pero mantener palabras completas
  if (simplified.length > 80) {
    const truncated = simplified.substring(0, 80);
    const lastSpace = truncated.lastIndexOf(" ");
    simplified = truncated.substring(0, lastSpace) + "...";
  }

  return simplified;
}
