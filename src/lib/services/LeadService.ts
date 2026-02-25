import type { Lead, LeadStatus } from '../leads';
import { addLead, getLeads, updateLeadStatus, scoreLead } from '../leads';

export interface LeadFilters {
    status?: LeadStatus | 'all';
    minScore?: number;
    maxScore?: number;
    city?: string;
}

export class LeadService {
    static async getAll(filters: LeadFilters = {}) {
        let leads = await getLeads();

        if (filters.status && filters.status !== 'all') {
            leads = leads.filter(l => l.status === filters.status);
        }

        if (filters.minScore !== undefined) {
            leads = leads.filter(l => l.qualityScore >= filters.minScore!);
        }

        if (filters.maxScore !== undefined) {
            leads = leads.filter(l => l.qualityScore <= filters.maxScore!);
        }

        if (filters.city) {
            const citySearch = filters.city.toLowerCase();
            leads = leads.filter(l => (l.city || '').toLowerCase().includes(citySearch));
        }

        return leads;
    }

    static async create(data: any) {
        const qualityScore = scoreLead({
            bmi: data.bmi || 'normal',
            conditions: data.conditions || [],
            currentMeds: data.currentMeds || 'none'
        });

        return await addLead({
            ...data,
            qualityScore
        });
    }

    static async updateStatus(id: string, status: LeadStatus, notes?: string) {
        return await updateLeadStatus(id, status, notes);
    }

    static async getStats() {
        const leads = await getLeads();
        const byStatus = (s: LeadStatus) => leads.filter(l => l.status === s).length;

        return {
            total: leads.length,
            new: byStatus('new'),
            qualified: byStatus('qualified'),
            sent_to_clinic: byStatus('sent_to_clinic'),
            invoiced: byStatus('invoiced'),
            revenue: (byStatus('sent_to_clinic') + byStatus('invoiced')) * 400
        };
    }
}
