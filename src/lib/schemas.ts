import { z } from 'zod';

export const LeadStatusSchema = z.enum([
    'new',
    'called',
    'qualified',
    'sent_to_clinic',
    'invoiced',
    'disqualified'
]);

export const LeadCreateSchema = z.object({
    firstName: z.string().min(2, "First name is too short").max(50),
    lastName: z.string().max(50).optional().default(''),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is too short").max(20),
    city: z.string().max(100).optional().default(''),
    age: z.string().optional().default(''),
    bmi: z.enum(['underweight', 'normal', 'overweight', 'obese', 'extremely-obese']).optional().default('normal'),
    conditions: z.array(z.string()).optional().default([]),
    currentMeds: z.string().optional().default('none'),
    trialId: z.string().optional().default(''),
    trialTitle: z.string().optional().default(''),
});

export const PrescreenSchema = z.object({
    trialId: z.string().min(1),
    answers: z.object({
        age: z.string().optional(),
        bmi: z.string().optional(),
        conditions: z.array(z.string()).optional(),
        current_meds: z.string().optional(),
    }),
});

export const LeadUpdateSchema = z.object({
    id: z.string().uuid(),
    status: LeadStatusSchema,
    notes: z.string().max(500).optional(),
});

export type LeadCreateInput = z.infer<typeof LeadCreateSchema>;
export type LeadUpdateInput = z.infer<typeof LeadUpdateSchema>;
