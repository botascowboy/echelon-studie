/**
 * AI Enrichment Service for Clinical Trials
 * Uses OpenRouter to access free AI models for summarizing eligibility criteria,
 * extracting key insights, and making medical content accessible to patients.
 */

import OpenAI from "openai";

// OpenRouter configuration with user's API key
const OPENROUTER_API_KEY = "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";

const openai = new OpenAI({
  apiKey: OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:4321",
    "X-Title": "TrialGuide Chat"
  }
});

// Free models from OpenRouter (verified working free models)
const DEFAULT_MODEL = "nvidia/nemotron-3-super-120b-a12b:free";
const CHAT_MODEL = "nvidia/nemotron-3-super-120b-a12b:free";

export interface EnrichedTrialData {
  // Resumen en lenguaje simple
  summary: string;
  // Eligibilidad simplificada
  eligibilitySummary: {
    mustHave: string[];
    cannotHave: string[];
    ageRange: string;
    bmiRequirements?: string;
  };
  // Información de compensación extraída
  compensation: {
    hasCompensation: boolean;
    estimatedAmount?: string;
    details?: string;
  };
  // Qué esperar como participante
  whatToExpect: string[];
  // Duración estimada
  estimatedDuration: string;
  // Visitas requeridas
  visitFrequency: string;
  // Riesgos potenciales (simplificados)
  potentialRisks: string[];
  // Beneficios potenciales
  potentialBenefits: string[];
  // Preguntas para hacer al investigador
  questionsToAsk: string[];
  // Puntuación de relevancia para pérdida de peso (0-100)
  weightLossRelevanceScore: number;
  // Tags generados
  aiTags: string[];
}

/**
 * Enriquece un ensayo clínico
 */
export async function enrichTrialWithAI(
  trialData: any
): Promise<EnrichedTrialData> {
  const protocol = trialData.protocolSection;
  const description = protocol.descriptionModule;
  const eligibility = protocol.eligibilityModule;

  // Preparar el prompt con toda la información del estudio
  const studyInfo = `
Title: ${protocol.identificationModule?.briefTitle || "N/A"}
Official Title: ${protocol.identificationModule?.officialTitle || "N/A"}
Phase: ${protocol.designModule?.phases?.join(", ") || "N/A"}
Type: ${protocol.designModule?.studyType || "N/A"}

Summary:
${description?.briefSummary || "N/A"}

Detailed Description:
${description?.detailedDescription || "N/A"}

Eligibility Criteria:
${eligibility?.eligibilityCriteria || "N/A"}

Conditions:
${protocol.conditionsModule?.conditions?.join(", ") || "N/A"}
Keywords:
${protocol.conditionsModule?.keywords?.join(", ") || "N/A"}

Enrollment: ${protocol.designModule?.enrollmentInfo?.count || "N/A"} participants
Sex: ${eligibility?.sex || "N/A"}
Age: ${eligibility?.minimumAge || "N/A"} - ${eligibility?.maximumAge || "N/A"}
  `.trim();

  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: `You are an expert clinical trial assistant specialized in weight loss and obesity studies. 
Your job is to translate complex medical information into clear, patient-friendly language.
Be accurate but avoid medical jargon. Focus on what matters to potential participants.

Respond in JSON format with this exact structure:
{
  "summary": "2-3 sentence plain language summary",
  "eligibilitySummary": {
    "mustHave": ["list of inclusion criteria in simple terms"],
    "cannotHave": ["list of exclusion criteria in simple terms"],
    "ageRange": "simplified age requirement",
    "bmiRequirements": "BMI requirements if mentioned"
  },
  "compensation": {
    "hasCompensation": boolean,
    "estimatedAmount": "estimated compensation range or null",
    "details": "details about compensation if mentioned"
  },
  "whatToExpect": ["bullet points of what participation involves"],
  "estimatedDuration": "estimated study duration",
  "visitFrequency": "how often visits are required",
  "potentialRisks": ["simplified list of potential risks"],
  "potentialBenefits": ["potential benefits for participant and science"],
  "questionsToAsk": ["important questions to ask the study team"],
  "weightLossRelevanceScore": number 0-100,
  "aiTags": ["relevant tags like 'GLP-1', 'Diet', 'Exercise', 'Medication'"]
}`
        },
        {
          role: "user",
          content: `Please analyze this clinical trial and provide a patient-friendly summary:\n\n${studyInfo}`
        }
      ],
      temperature: 0.3
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No response from OpenRouter");
    }

    // Parse JSON from response (handle potential markdown code blocks)
    const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                      content.match(/```\n?([\s\S]*?)\n?```/) ||
                      [null, content];
    const jsonStr = jsonMatch[1]?.trim() || content;
    const enriched = JSON.parse(jsonStr) as EnrichedTrialData;
    return enriched;

  } catch (error) {
    console.error("[AI Enrichment] Error:", error);
    // Retornar datos fallback
    return getFallbackEnrichment(trialData);
  }
}

/**
 * Genera un resumen rápido de elegibilidad (más económico)
 */
export async function generateEligibilitySummary(
  eligibilityCriteria: string
): Promise<{ inclusion: string[]; exclusion: string[] }> {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: `Extract and simplify eligibility criteria. Return JSON:
{
  "inclusion": ["simple bullet points of who CAN participate"],
  "exclusion": ["simple bullet points of who CANNOT participate"]
}
Keep each point under 10 words. Be clear and direct.`
        },
        {
          role: "user",
          content: eligibilityCriteria
        }
      ],
      temperature: 0.2
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      return parseEligibilityManually(eligibilityCriteria);
    }

    // Parse JSON from response
    const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                      content.match(/```\n?([\s\S]*?)\n?```/) ||
                      [null, content];
    const jsonStr = jsonMatch[1]?.trim() || content;
    return JSON.parse(jsonStr);
  } catch (error) {
    return parseEligibilityManually(eligibilityCriteria);
  }
}

/**
 * Verifica si un paciente podría ser elegible basado en sus respuestas
 */
export async function preScreenEligibility(
  trialData: any,
  userAnswers: Record<string, string>
): Promise<{
  likelyEligible: boolean;
  confidence: "high" | "medium" | "low";
  reasons: string[];
  concerns: string[];
  recommendation: string;
}> {
  const eligibilityText = trialData.protocolSection?.eligibilityModule?.eligibilityCriteria || "";

  const userProfile = Object.entries(userAnswers)
    .map(([q, a]) => `${q}: ${a}`)
    .join("\n");

  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: `You are a clinical trial pre-screening assistant. Analyze if a potential participant 
matches the eligibility criteria. Be conservative - if unsure, indicate potential issues.

Return JSON:
{
  "likelyEligible": boolean,
  "confidence": "high|medium|low",
  "reasons": ["why they might be eligible"],
  "concerns": ["potential disqualifying factors or things to verify"],
  "recommendation": "clear next step recommendation"
}`
        },
        {
          role: "user",
          content: `ELIGIBILITY CRITERIA:\n${eligibilityText}\n\nPATIENT PROFILE:\n${userProfile}\n\nBased on this information, would this patient likely qualify for the study?`
        }
      ],
      temperature: 0.2
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error("No response");
    }

    // Parse JSON from response
    const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                      content.match(/```\n?([\s\S]*?)\n?```/) ||
                      [null, content];
    const jsonStr = jsonMatch[1]?.trim() || content;
    return JSON.parse(jsonStr);
  } catch (error) {
    return {
      likelyEligible: false,
      confidence: "low",
      reasons: [],
      concerns: ["Unable to analyze - please contact the study directly"],
      recommendation: "Contact the study team to verify eligibility."
    };
  }
}

/**
 * Genera respuesta del chatbot experto
 */
export async function generateExpertResponse(
  question: string,
  context?: { trials?: any[]; userLocation?: string }
): Promise<string> {
  let contextPrompt = "";

  if (context?.trials && context.trials.length > 0) {
    contextPrompt = `\n\nRELEVANT CLINICAL TRIALS IN DATABASE:\n${context.trials.slice(0, 5).map((t, i) =>
      `${i + 1}. ${t.protocolSection?.identificationModule?.briefTitle} (${t.protocolSection?.identificationModule?.nctId})`
    ).join("\n")}`;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000); // 25s timeout

    const response = await openai.chat.completions.create({
      model: CHAT_MODEL,
      messages: [
        {
          role: "system",
          content: `You are "TrialGuide", an expert assistant specialized in clinical trials, 
particularly for weight loss and metabolic health. You help patients understand:
- How clinical trials work
- What to expect as a participant
- How to find suitable trials
- General questions about obesity treatments, GLP-1 medications, etc.

Be helpful, accurate, and encouraging. Always remind users that they should consult with healthcare providers for medical advice.

Keep responses concise (2-4 paragraphs) and actionable.`.trim()
        },
        {
          role: "user",
          content: question + contextPrompt
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    }, { signal: controller.signal });

    clearTimeout(timeoutId);

    return response.choices[0]?.message?.content ||
      "I apologize, I couldn't generate a response. Please try rephrasing your question.";
  } catch (error: any) {
    console.error("[Chat] OpenRouter error:", error?.message || error);
    if (error?.name === 'AbortError') {
      return "The request timed out. Please try again.";
    }
    return "I'm having trouble connecting right now. Please try again in a moment.";
  }
}

// Helpers privados

function getFallbackEnrichment(trialData: any): EnrichedTrialData {
  const protocol = trialData.protocolSection;
  const eligibility = protocol?.eligibilityModule;

  return {
    summary: protocol?.descriptionModule?.briefSummary || "No summary available",
    eligibilitySummary: {
      mustHave: ["See full eligibility criteria"],
      cannotHave: [],
      ageRange: `${eligibility?.minimumAge || "N/A"} - ${eligibility?.maximumAge || "N/A"}`,
      bmiRequirements: undefined
    },
    compensation: { hasCompensation: false },
    whatToExpect: ["Contact the study team for details"],
    estimatedDuration: "Contact study team",
    visitFrequency: "Contact study team",
    potentialRisks: ["See study documentation"],
    potentialBenefits: ["Contribution to medical research"],
    questionsToAsk: [
      "What does participation involve?",
      "What are the potential risks?",
      "Is there compensation?"
    ],
    weightLossRelevanceScore: 50,
    aiTags: ["Weight Loss"]
  };
}

function parseEligibilityManually(criteria: string): { inclusion: string[]; exclusion: string[] } {
  const lines = criteria.split(/\n/);
  const inclusion: string[] = [];
  const exclusion: string[] = [];

  let currentSection: "inclusion" | "exclusion" | null = null;

  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.includes("inclusion")) {
      currentSection = "inclusion";
    } else if (lower.includes("exclusion")) {
      currentSection = "exclusion";
    } else if (line.trim().startsWith("-") || line.trim().match(/^\d+\./)) {
      const item = line.replace(/^[-\d.\s]+/, "").trim();
      if (item && currentSection) {
        (currentSection === "inclusion" ? inclusion : exclusion).push(item);
      }
    }
  }

  return { inclusion, exclusion };
}
