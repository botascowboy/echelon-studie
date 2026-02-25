import type { Lead, LeadStatus } from '../leads';
import { addLead, getLeads, updateLeadStatus, scoreLead } from '../leads';

export interface LeadFilters {
    status?: LeadStatus | 'all';
    minScore?: number;
    maxScore?: number;
    city?: string;
}

export class LeadService {
    static getAll(filters: LeadFilters = {}) {
        let leads = getLeads();

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

    static create(data: any) {
        const qualityScore = scoreLead({
            bmi: data.bmi || 'normal',
            conditions: data.conditions || [],
            currentMeds: data.currentMeds || 'none'
        });

        return addLead({
            ...data,
            qualityScore
        });
    }

    static updateStatus(id: string, status: LeadStatus, notes?: string) {
        return updateLeadStatus(id, status, notes);
    }

    static getStats() {
        const leads = getLeads();
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
