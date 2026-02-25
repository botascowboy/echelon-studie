import { db } from './db';

export type LeadStatus =
  | 'new'
  | 'called'
  | 'qualified'
  | 'sent_to_clinic'
  | 'invoiced'
  | 'disqualified';

export interface Lead {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  age: string;
  bmi: string;
  conditions: string[];
  currentMeds: string;
  trialId?: string;
  trialTitle?: string;
  status: LeadStatus;
  notes: string;
  qualityScore: number;
}

export async function addLead(data: Omit<Lead, 'id' | 'createdAt' | 'status' | 'notes'>): Promise<Lead> {
  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const status = 'new';
  const notes = '';

  await db.execute({
    sql: `INSERT INTO leads (
      id, created_at, first_name, last_name, email, phone, city, 
      age, bmi, conditions, current_meds, trial_id, trial_title, 
      status, notes, quality_score
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id, createdAt, data.firstName, data.lastName, data.email, data.phone, data.city,
      data.age, data.bmi, JSON.stringify(data.conditions), data.currentMeds, data.trialId || null, data.trialTitle || null,
      status, notes, data.qualityScore
    ]
  });

  return { ...data, id, createdAt, status, notes };
}

export async function getLeads(): Promise<Lead[]> {
  const result = await db.execute('SELECT * FROM leads ORDER BY created_at DESC');
  return result.rows.map(row => ({
    id: row.id as string,
    createdAt: row.created_at as string,
    firstName: row.first_name as string,
    lastName: row.last_name as string,
    email: row.email as string,
    phone: row.phone as string,
    city: row.city as string,
    age: row.age as string,
    bmi: row.bmi as string,
    conditions: JSON.parse(row.conditions as string || '[]'),
    currentMeds: row.current_meds as string,
    trialId: row.trial_id as string | undefined,
    trialTitle: row.trial_title as string | undefined,
    status: row.status as LeadStatus,
    notes: row.notes as string,
    qualityScore: Number(row.quality_score)
  }));
}

export async function updateLeadStatus(id: string, status: LeadStatus, notes?: string): Promise<boolean> {
  if (notes !== undefined) {
    await db.execute({
      sql: 'UPDATE leads SET status = ?, notes = ? WHERE id = ?',
      args: [status, notes, id]
    });
  } else {
    await db.execute({
      sql: 'UPDATE leads SET status = ? WHERE id = ?',
      args: [status, id]
    });
  }
  return true;
}

/** Simple quality score based on pre-screen answers */
export function scoreLead(answers: {
  bmi: string;
  conditions: string[];
  currentMeds: string;
}): number {
  let score = 50;

  if (answers.bmi === 'obese') score += 30;
  else if (answers.bmi === 'overweight') score += 15;
  else if (answers.bmi === 'normal') score -= 20;

  const disqualifiers = ['type-1-diabetes', 'thyroid-cancer', 'eating-disorder', 'history-of-pancreatitis'];
  const hasDisqualifier = answers.conditions?.some(c => disqualifiers.includes(c));
  if (hasDisqualifier) score -= 30;

  if (answers.currentMeds === 'glp1') score -= 20;
  if (answers.currentMeds === 'none') score += 10;

  return Math.max(0, Math.min(100, score));
}
