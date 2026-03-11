/**
 * AI Enrichment Service for Clinical Trials
 * Uses OpenRouter to access free AI models for summarizing eligibility criteria,
 * extracting key insights, and making medical content accessible to patients.
 */

// OpenRouter configuration with user's API key
const OPENROUTER_API_KEY = "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";
const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

// Free models from OpenRouter
const CHAT_MODEL = "google/gemma-2-9b-it:free";

export interface EnrichedTrialData {
  summary: string;
  eligibilitySummary: {
    mustHave: string[];
    cannotHave: string[];
    ageRange: string;
    bmiRequirements?: string;
  };
  compensation: {
    hasCompensation: boolean;
    estimatedAmount?: string;
    details?: string;
  };
  whatToExpect: string[];
  estimatedDuration: string;
  visitFrequency: string;
  potentialRisks: string[];
  potentialBenefits: string[];
  questionsToAsk: string[];
  weightLossRelevanceScore: number;
  aiTags: string[];
}

/**
 * Generic fetch to OpenRouter API
 */
async function callOpenRouter(
  model: string,
  messages: Array<{ role: string; content: string }>,
  maxTokens: number = 500,
  temperature: number = 0.7
): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    const response = await fetch(`${OPENROUTER_BASE_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://echelon-studie.pages.dev',
        'X-Title': 'TrialGuide Chat'
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: maxTokens,
        temperature
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[OpenRouter] HTTP error:', response.status, errorText);
      return null;
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.error('[OpenRouter] Request timeout');
    } else {
      console.error('[OpenRouter] Error:', error);
    }
    return null;
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
    contextPrompt = `\n\nRELEVANT CLINICAL TRIALS IN DATABASE:\n${context.trials.slice(0, 3).map((t, i) =>
      `${i + 1}. ${t.protocolSection?.identificationModule?.briefTitle || 'Unknown'}`
    ).join("\n")}`;
  }

  const messages = [
    {
      role: "system",
      content: `You are "TrialGuide", an expert assistant specialized in clinical trials, particularly for weight loss and metabolic health. You help patients understand:
- How clinical trials work
- What to expect as a participant  
- How to find suitable trials
- General questions about obesity treatments, GLP-1 medications, etc.

Be helpful, accurate, and encouraging. Keep responses concise (2-3 short paragraphs) and actionable. Always remind users to consult healthcare providers for medical advice.`
    },
    {
      role: "user",
      content: question + contextPrompt
    }
  ];

  const content = await callOpenRouter(CHAT_MODEL, messages, 400, 0.7);
  
  if (content) {
    return content;
  }

  // Fallback responses if API fails
  const lowerQ = question.toLowerCase();
  if (lowerQ.includes('hola') || lowerQ.includes('hello') || lowerQ.includes('hi')) {
    return "Hello! I'm TrialGuide, your clinical trials assistant. I can help you understand weight loss trials, explain treatments like GLP-1 medications, or answer questions about participation. What would you like to know?";
  }
  if (lowerQ.includes('glp') || lowerQ.includes('wegovy') || lowerQ.includes('ozempic')) {
    return "GLP-1 medications like Ozempic, Wegovy, and Mounjaro are injectable drugs that help regulate appetite and blood sugar. Many clinical trials are studying new GLP-1 treatments or comparing them to existing options. Would you like to find trials near you?";
  }
  if (lowerQ.includes('safe') || lowerQ.includes('seguro')) {
    return "Clinical trials follow strict safety protocols monitored by the FDA and ethics committees. Before joining, you'll receive detailed information about potential risks and benefits. You can withdraw at any time. Would you like to know more about the safety process?";
  }
  if (lowerQ.includes('pay') || lowerQ.includes('compensation') || lowerQ.includes('paga') || lowerQ.includes('dinero')) {
    return "Many clinical trials offer compensation for your time and travel, typically ranging from $50 to $500+ per visit depending on the study. The exact amount varies by trial and will be disclosed before you enroll.";
  }
  
  return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again in a moment, or contact us directly for assistance.";
}

/**
 * Enriquece un ensayo clínico
 */
export async function enrichTrialWithAI(
  trialData: any
): Promise<EnrichedTrialData> {
  const protocol = trialData.protocolSection;
  const description = protocol?.descriptionModule;
  const eligibility = protocol?.eligibilityModule;

  const studyInfo = `
Title: ${protocol?.identificationModule?.briefTitle || "N/A"}
Phase: ${protocol?.designModule?.phases?.join(", ") || "N/A"}
Summary: ${description?.briefSummary || "N/A"}
Eligibility: ${eligibility?.eligibilityCriteria || "N/A"}
Conditions: ${protocol?.conditionsModule?.conditions?.join(", ") || "N/A"}
  `.trim();

  const messages = [
    {
      role: "system",
      content: `You are a clinical trial assistant. Translate complex medical info into patient-friendly language. Respond in JSON format:
{
  "summary": "2-3 sentence summary",
  "eligibilitySummary": {
    "mustHave": ["inclusion criteria"],
    "cannotHave": ["exclusion criteria"],
    "ageRange": "age requirement",
    "bmiRequirements": "BMI if mentioned"
  },
  "compensation": { "hasCompensation": boolean, "estimatedAmount": "amount or null", "details": "details" },
  "whatToExpect": ["participation steps"],
  "estimatedDuration": "duration",
  "visitFrequency": "visit schedule",
  "potentialRisks": ["risks"],
  "potentialBenefits": ["benefits"],
  "questionsToAsk": ["questions"],
  "weightLossRelevanceScore": number,
  "aiTags": ["tags"]
}`
    },
    {
      role: "user",
      content: `Analyze this trial:\n\n${studyInfo}`
    }
  ];

  const content = await callOpenRouter(CHAT_MODEL, messages, 800, 0.3);

  if (content) {
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      const jsonStr = jsonMatch[1]?.trim() || content;
      return JSON.parse(jsonStr) as EnrichedTrialData;
    } catch (e) {
      console.error('[AI Enrichment] JSON parse error:', e);
    }
  }

  return getFallbackEnrichment(trialData);
}

/**
 * Genera un resumen rápido de elegibilidad
 */
export async function generateEligibilitySummary(
  eligibilityCriteria: string
): Promise<{ inclusion: string[]; exclusion: string[] }> {
  const messages = [
    {
      role: "system",
      content: `Extract and simplify eligibility criteria. Return JSON: {"inclusion": ["who CAN join"], "exclusion": ["who CANNOT join"]}. Keep points under 10 words.`
    },
    {
      role: "user",
      content: eligibilityCriteria
    }
  ];

  const content = await callOpenRouter(CHAT_MODEL, messages, 300, 0.2);

  if (content) {
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      const jsonStr = jsonMatch[1]?.trim() || content;
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error('[Eligibility] JSON parse error:', e);
    }
  }

  return parseEligibilityManually(eligibilityCriteria);
}

/**
 * Verifica si un paciente podría ser elegible
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

  const messages = [
    {
      role: "system",
      content: `You are a pre-screening assistant. Analyze if a patient matches eligibility. Be conservative. Return JSON: {"likelyEligible": boolean, "confidence": "high|medium|low", "reasons": ["why eligible"], "concerns": ["potential issues"], "recommendation": "next steps"}`
    },
    {
      role: "user",
      content: `ELIGIBILITY:\n${eligibilityText}\n\nPATIENT:\n${userProfile}\n\nWould they qualify?`
    }
  ];

  const content = await callOpenRouter(CHAT_MODEL, messages, 400, 0.2);

  if (content) {
    try {
      const jsonMatch = content.match(/```json\n?([\s\S]*?)\n?```/) || 
                        content.match(/```\n?([\s\S]*?)\n?```/) ||
                        [null, content];
      const jsonStr = jsonMatch[1]?.trim() || content;
      return JSON.parse(jsonStr);
    } catch (e) {
      console.error('[PreScreen] JSON parse error:', e);
    }
  }

  return {
    likelyEligible: false,
    confidence: "low",
    reasons: [],
    concerns: ["Unable to analyze - contact study directly"],
    recommendation: "Contact the study team to verify eligibility."
  };
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
