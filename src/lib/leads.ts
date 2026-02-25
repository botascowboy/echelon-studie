/**
 * Lead store — in-memory storage for captured leads.
 * In production, replace with a D1 database or external CRM.
 */

export type LeadStatus =
  | 'new'
  | 'called'
  | 'qualified'
  | 'sent_to_clinic'
  | 'invoiced'
  | 'disqualified';

export interface Lead {
  id: string;
  createdAt: string; // ISO
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  // Pre-screen answers
  age: string;
  bmi: string;
  conditions: string[];
  currentMeds: string;
  // Trial context
  trialId?: string;
  trialTitle?: string;
  // Pipeline
  status: LeadStatus;
  notes: string;
  // Score
  qualityScore: number; // 0–100
}

// Module-level store — persists across requests in the same worker instance
const leadsStore: Lead[] = [];

export function addLead(data: Omit<Lead, 'id' | 'createdAt' | 'status' | 'notes'>): Lead {
  const lead: Lead = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: 'new',
    notes: '',
  };
  leadsStore.unshift(lead); // newest first
  return lead;
}

export function getLeads(): Lead[] {
  return leadsStore;
}

export function getLead(id: string): Lead | undefined {
  return leadsStore.find(l => l.id === id);
}

export function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Lead | null {
  const lead = leadsStore.find(l => l.id === id);
  if (!lead) return null;
  lead.status = status;
  if (notes !== undefined) lead.notes = notes;
  return lead;
}

/** Simple quality score based on pre-screen answers */
export function scoreLead(answers: {
  bmi: string;
  conditions: string[];
  currentMeds: string;
}): number {
  let score = 50;

  // BMI scoring
  if (answers.bmi === 'obese') score += 30;
  else if (answers.bmi === 'overweight') score += 15;
  else if (answers.bmi === 'normal') score -= 20;

  // Disqualifying conditions
  const disqualifiers = ['type-1-diabetes', 'thyroid-cancer', 'eating-disorder', 'history-of-pancreatitis'];
  const hasDisqualifier = answers.conditions?.some(c => disqualifiers.includes(c));
  if (hasDisqualifier) score -= 30;

  // Already on GLP-1 = usually excluded from GLP-1 trials
  if (answers.currentMeds === 'glp1') score -= 20;
  if (answers.currentMeds === 'none') score += 10;

  return Math.max(0, Math.min(100, score));
}
