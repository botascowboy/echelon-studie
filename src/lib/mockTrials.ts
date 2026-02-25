/**
 * Mock trials data for 5 target cities
 * Cities: NYC, Miami, Houston, Los Angeles, San Francisco
 */

import { PLATFORM_CONFIG } from './config';

const baseTrials = [
  {
    nct_id: "NCT05645691",
    title: "Semaglutide vs Placebo for Weight Management",
    official_title: "A Randomized, Double-Blind, Placebo-Controlled Trial of Semaglutide for Obesity",
    brief_summary: "This study evaluates the efficacy of semaglutide 2.4mg for weight loss in adults with obesity.",
    detailed_description: "This is a 68-week, randomized, double-blind, placebo-controlled, parallel-group, multicenter study to compare the efficacy and safety of semaglutide 2.4 mg subcutaneous once weekly versus placebo in subjects with overweight or obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "PHASE3",
    phase_label: "Phase 3",
    phase_description: "Near approval - testing on large groups",
    phase_color: "emerald",
    study_type: "Interventional",
    eligibility_criteria: "Inclusion Criteria:\n- Age 18-75 years\n- BMI ≥30 kg/m² (or ≥27 with comorbidity)\n- Stable body weight (<5% change) for 3 months\n\nExclusion Criteria:\n- Type 1 diabetes\n- History of pancreatitis\n- Personal/family history of medullary thyroid carcinoma\n- Multiple Endocrine Neoplasia syndrome type 2\n- Pregnant or breastfeeding",
    eligibility_age_range: "18 - 75 years",
    eligibility_bmi_requirements: "BMI 30+ (or 27+ with weight-related condition)",
    enrollment_count: 300,
    sex: "All",
    minimum_age: "18 Years",
    maximum_age: "75 Years",
    lead_sponsor: "Novo Nordisk",
    sponsor_class: "INDUSTRY",
    has_compensation: true,
    compensation_details: "Compensation for time and travel provided at each visit",
    ai_summary: "Testing a popular weight loss medication (semaglutide/Ozempic/Wegovy) to see how well it works for long-term weight management. This is a once-weekly injection study lasting about 16 months.",
    eligibility_summary_must: JSON.stringify(["Age 18-75", "BMI 30 or higher", "Stable weight for 3 months"]),
    eligibility_summary_cannot: JSON.stringify(["Type 1 diabetes", "History of pancreatitis", "Thyroid cancer history", "Pregnant or breastfeeding"]),
    ai_what_to_expect: JSON.stringify([
      "Weekly clinic visits for first month, then monthly",
      "Self-inject medication at home (training provided)",
      "Regular weight checks and blood tests",
      "Complete diet and activity questionnaires",
      "Possible side effects: nausea, diarrhea, decreased appetite"
    ]),
    ai_estimated_duration: "68 weeks (about 16 months)",
    ai_visit_frequency: "Weekly for 4 weeks, then monthly",
    ai_potential_risks: JSON.stringify([
      "Nausea and vomiting (usually temporary)",
      "Diarrhea or constipation",
      "Gallbladder problems",
      "Rare: pancreatitis, thyroid tumors (observed in animal studies)"
    ]),
    ai_potential_benefits: JSON.stringify([
      "Significant weight loss (average 15% of body weight)",
      "Improved blood sugar control",
      "Reduced blood pressure and cholesterol",
      "Access to medication before public availability",
      "Free medical monitoring and tests"
    ]),
    ai_questions_to_ask: JSON.stringify([
      "What happens if I experience side effects?",
      "Will I receive the actual medication or placebo?",
      "Can I continue my current medications?",
      "What diet should I follow during the study?",
      "Will I have access to the drug after the study ends?"
    ]),
    weight_loss_relevance_score: 95,
    ai_tags: JSON.stringify(["GLP-1", "Semaglutide", "Ozempic", "Wegovy", "Medication", "Obesity", "Injection"]),
    conditions: JSON.stringify(["Obesity", "Overweight"]),
    keywords: JSON.stringify(["semaglutide", "GLP-1", "weight loss", "obesity"]),
    start_date: "2023-01-15",
    completion_date: "2026-06-30"
  },
  {
    nct_id: "NCT06123456",
    title: "Tirzepatide Combined with Lifestyle Intervention",
    official_title: "Evaluation of Tirzepatide Plus Behavioral Weight Loss Program",
    brief_summary: "Study combining GLP-1/GIP medication with structured diet and exercise counseling.",
    detailed_description: "This study evaluates whether tirzepatide combined with intensive lifestyle intervention produces greater weight loss than either treatment alone in adults with obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "PHASE2",
    phase_label: "Phase 2",
    phase_description: "Testing effectiveness and side effects",
    phase_color: "blue",
    study_type: "Interventional",
    eligibility_criteria: "Inclusion: BMI ≥27, Age 21-65\nExclusion: Current GLP-1 use, unstable cardiovascular disease",
    eligibility_age_range: "21 - 65 years",
    eligibility_bmi_requirements: "BMI 27+ with comorbidity",
    enrollment_count: 150,
    sex: "All",
    minimum_age: "21 Years",
    maximum_age: "65 Years",
    lead_sponsor: "Eli Lilly",
    sponsor_class: "INDUSTRY",
    has_compensation: true,
    ai_summary: "Testing Mounjaro/Zepbound combined with diet and exercise coaching for better weight loss results than medication alone.",
    eligibility_summary_must: JSON.stringify(["Age 21-65", "BMI 27+ with comorbidity", "Willing to attend weekly sessions"]),
    eligibility_summary_cannot: JSON.stringify(["Current GLP-1 use", "Unstable cardiovascular disease"]),
    ai_what_to_expect: JSON.stringify(["Weekly lifestyle coaching sessions", "Medication injections", "Diet planning"]),
    ai_estimated_duration: "72 weeks",
    ai_visit_frequency: "Weekly",
    ai_potential_risks: JSON.stringify(["Gastrointestinal side effects", "Injection site reactions"]),
    ai_potential_benefits: JSON.stringify(["Greater weight loss than medication alone", "Lifestyle skills for maintenance"]),
    ai_questions_to_ask: JSON.stringify(["What does the coaching include?", "Is there a diet I must follow?"]),
    weight_loss_relevance_score: 92,
    ai_tags: JSON.stringify(["GLP-1", "Tirzepatide", "Mounjaro", "Lifestyle", "Coaching"]),
    conditions: JSON.stringify(["Obesity"]),
    keywords: JSON.stringify(["tirzepatide", "lifestyle", "coaching"]),
    start_date: "2024-03-01",
    completion_date: "2026-03-01"
  },
  {
    nct_id: "NCT05987654",
    title: "Novel Appetite Suppressant Medication",
    official_title: "Phase 2 Study of NN-9738 for Treatment of Obesity",
    brief_summary: "Investigational oral medication targeting appetite regulation centers in the brain.",
    detailed_description: "A phase 2 study to evaluate the safety, tolerability, and efficacy of an investigational oral appetite suppressant in adults with obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "PHASE2",
    phase_label: "Phase 2",
    phase_description: "Testing effectiveness and side effects",
    phase_color: "blue",
    study_type: "Interventional",
    eligibility_criteria: "Inclusion: BMI 30-45, Age 18-70\nExclusion: History of eating disorders, severe depression",
    eligibility_age_range: "18 - 70 years",
    eligibility_bmi_requirements: "BMI 30-45",
    enrollment_count: 200,
    sex: "All",
    minimum_age: "18 Years",
    maximum_age: "70 Years",
    lead_sponsor: "Novo Nordisk",
    sponsor_class: "INDUSTRY",
    has_compensation: true,
    ai_summary: "Testing a new daily pill that reduces hunger by targeting brain appetite centers. No injections required.",
    eligibility_summary_must: JSON.stringify(["Age 18-70", "BMI 30-45", "Failed diet attempts"]),
    eligibility_summary_cannot: JSON.stringify(["History of eating disorders", "Severe depression"]),
    ai_what_to_expect: JSON.stringify(["Daily oral medication", "Appetite monitoring", "Monthly visits"]),
    ai_estimated_duration: "52 weeks",
    ai_visit_frequency: "Monthly",
    ai_potential_risks: JSON.stringify(["Dry mouth", "Insomnia", "Increased heart rate"]),
    ai_potential_benefits: JSON.stringify(["Reduced hunger", "No injections needed"]),
    ai_questions_to_ask: JSON.stringify(["How is this different from current medications?"]),
    weight_loss_relevance_score: 88,
    ai_tags: JSON.stringify(["Appetite Suppressant", "Oral Medication", "Novel Drug", "Brain"]),
    conditions: JSON.stringify(["Obesity"]),
    keywords: JSON.stringify(["appetite", "oral", "investigational"]),
    start_date: "2024-01-15",
    completion_date: "2025-07-15"
  },
  {
    nct_id: "NCT05876543",
    title: "Metabolic Surgery vs Intensive Medical Therapy",
    official_title: "Long-term Outcomes of Bariatric Surgery Compared to Medical Management",
    brief_summary: "Comparing weight loss surgery outcomes with best available non-surgical treatments.",
    detailed_description: "A 5-year observational study comparing metabolic/bariatric surgery outcomes with intensive medical therapy for type 2 diabetes and obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "NA",
    phase_label: "Observational",
    phase_description: "Following patients over time",
    phase_color: "gray",
    study_type: "Observational",
    eligibility_criteria: "Inclusion: Age 25-60, BMI 35+, considering surgery\nExclusion: Prior bariatric surgery",
    eligibility_age_range: "25 - 60 years",
    eligibility_bmi_requirements: "BMI 35+ considering surgery",
    enrollment_count: 500,
    sex: "All",
    minimum_age: "25 Years",
    maximum_age: "60 Years",
    lead_sponsor: "National Institutes of Health",
    sponsor_class: "NIH",
    has_compensation: false,
    ai_summary: "Following patients who choose surgery vs medication to compare long-term results over 5 years.",
    eligibility_summary_must: JSON.stringify(["Age 25-60", "BMI 35+ considering surgery"]),
    eligibility_summary_cannot: JSON.stringify(["Prior bariatric surgery"]),
    ai_what_to_expect: JSON.stringify(["Annual visits for 5 years", "Comprehensive health monitoring", "No cost for study-related tests"]),
    ai_estimated_duration: "5 years",
    ai_visit_frequency: "Annually",
    ai_potential_risks: JSON.stringify(["Surgical risks (if chosen)", "Time commitment"]),
    ai_potential_benefits: JSON.stringify(["Long-term health monitoring", "Helping future patients decide"]),
    ai_questions_to_ask: JSON.stringify(["Can I switch groups during the study?"]),
    weight_loss_relevance_score: 85,
    ai_tags: JSON.stringify(["Bariatric Surgery", "Long-term Study", "Comparative"]),
    conditions: JSON.stringify(["Obesity", "Type 2 Diabetes"]),
    keywords: JSON.stringify(["surgery", "gastric bypass", "sleeve"]),
    start_date: "2023-09-01",
    completion_date: "2028-09-01"
  },
  {
    nct_id: "NCT05765432",
    title: "Digital Health Coaching Platform for Weight Loss",
    official_title: "AI-Powered Nutrition and Fitness Coaching Application",
    brief_summary: "Testing a smartphone app that provides personalized weight loss coaching using AI.",
    detailed_description: "A randomized controlled trial evaluating the effectiveness of an AI-powered digital health platform for weight management in adults with overweight or obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "PHASE2",
    phase_label: "Phase 2",
    phase_description: "Testing effectiveness and side effects",
    phase_color: "blue",
    study_type: "Interventional",
    eligibility_criteria: "Inclusion: Age 18-65, BMI 25+, smartphone owner\nExclusion: Current weight loss program, no smartphone",
    eligibility_age_range: "18 - 65 years",
    eligibility_bmi_requirements: "BMI 25+",
    enrollment_count: 400,
    sex: "All",
    minimum_age: "18 Years",
    maximum_age: "65 Years",
    lead_sponsor: "Digital Health Inc",
    sponsor_class: "INDUSTRY",
    has_compensation: true,
    ai_summary: "Testing a weight loss app with AI coaching - participate from anywhere using just your phone.",
    eligibility_summary_must: JSON.stringify(["Age 18-65", "BMI 25+", "Smartphone owner"]),
    eligibility_summary_cannot: JSON.stringify(["Current weight loss program", "No smartphone"]),
    ai_what_to_expect: JSON.stringify(["Daily app check-ins", "AI chat support", "Personalized meal plans"]),
    ai_estimated_duration: "24 weeks",
    ai_visit_frequency: "Remote - app-based",
    ai_potential_risks: JSON.stringify(["Data privacy concerns", "Screen time increase"]),
    ai_potential_benefits: JSON.stringify(["Convenient remote participation", "Free AI coaching tool", "Flexible schedule"]),
    ai_questions_to_ask: JSON.stringify(["What data does the app collect?", "Can I use other apps during the study?"]),
    weight_loss_relevance_score: 80,
    ai_tags: JSON.stringify(["Digital Health", "App", "Remote", "AI Coaching"]),
    conditions: JSON.stringify(["Overweight", "Obesity"]),
    keywords: JSON.stringify(["app", "digital", "remote", "coaching"]),
    start_date: "2024-06-01",
    completion_date: "2025-12-01"
  },
  {
    nct_id: "NCT05654321",
    title: "High-Protein Diet vs Intermittent Fasting",
    official_title: "Comparative Effectiveness of Dietary Strategies for Weight Loss",
    brief_summary: "Comparing two popular diet approaches: high-protein eating vs intermittent fasting schedules.",
    detailed_description: "A 12-month randomized trial comparing weight loss outcomes between a high-protein diet and intermittent fasting protocol in adults with obesity.",
    overall_status: "RECRUITING",
    status_label: "Recruiting",
    phase: "PHASE3",
    phase_label: "Phase 3",
    phase_description: "Comparing to standard treatments",
    phase_color: "green",
    study_type: "Interventional",
    eligibility_criteria: "Inclusion: Age 21-55, BMI 27-40, no recent structured diet\nExclusion: Diabetes on insulin, eating disorder history",
    eligibility_age_range: "21 - 55 years",
    eligibility_bmi_requirements: "BMI 27-40",
    enrollment_count: 300,
    sex: "All",
    minimum_age: "21 Years",
    maximum_age: "55 Years",
    lead_sponsor: "University Research Center",
    sponsor_class: "ACADEMIC",
    has_compensation: true,
    ai_summary: "Comparing high-protein diets vs intermittent fasting to determine which approach works better.",
    eligibility_summary_must: JSON.stringify(["Age 21-55", "BMI 27-40", "No recent structured diet"]),
    eligibility_summary_cannot: JSON.stringify(["Diabetes on insulin", "Eating disorder history"]),
    ai_what_to_expect: JSON.stringify(["Randomized to diet group", "Monthly nutrition counseling", "Metabolic testing"]),
    ai_estimated_duration: "52 weeks",
    ai_visit_frequency: "Monthly",
    ai_potential_risks: JSON.stringify(["Hunger during fasting", "Kidney stress (high protein)"]),
    ai_potential_benefits: JSON.stringify(["Learn which diet works for you", "Free nutrition counseling", "Metabolic insights"]),
    ai_questions_to_ask: JSON.stringify(["Can I switch diet groups?", "Is exercise required?"]),
    weight_loss_relevance_score: 78,
    ai_tags: JSON.stringify(["Diet", "Nutrition", "Intermittent Fasting", "High Protein"]),
    conditions: JSON.stringify(["Obesity", "Overweight"]),
    keywords: JSON.stringify(["diet", "fasting", "protein", "nutrition"]),
    start_date: "2024-02-01",
    completion_date: "2026-02-01"
  }
];

// Generate trials for all 5 target cities
export function generateMockTrials() {
  const trials: any[] = [];
  
  PLATFORM_CONFIG.cities.forEach((city) => {
    baseTrials.forEach((baseTrial, index) => {
      // Create city-specific ID
      const cityPrefix = city.id.substring(0, 3).toUpperCase();
      const uniqueId = `${baseTrial.nct_id}-${cityPrefix}`;
      
      // Adjust compensation by city (higher in SF/NYC)
      const baseComp = city.id === 'sanfrancisco' || city.id === 'nyc' 
        ? '$600 - $1,500' 
        : city.id === 'losangeles' 
          ? '$500 - $1,200'
          : '$400 - $1,000';
      
      // Vary enrollment count
      const enrollment = Math.floor(baseTrial.enrollment_count * (0.8 + Math.random() * 0.4));
      
      trials.push({
        ...baseTrial,
        nct_id: uniqueId,
        primary_location_city: city.name,
        primary_location_state: city.state,
        locations_count: Math.floor(Math.random() * 8) + 2,
        compensation_amount: baseTrial.has_compensation ? baseComp : null,
        enrollment_count: enrollment,
        // Slightly vary relevance score per city
        weight_loss_relevance_score: Math.min(100, baseTrial.weight_loss_relevance_score + Math.floor(Math.random() * 8 - 4))
      });
    });
  });
  
  return trials;
}

// Singleton instance
let cachedTrials: any[] | null = null;

export function getMockTrials() {
  if (!cachedTrials) {
    cachedTrials = generateMockTrials();
  }
  return cachedTrials;
}

export function getMockTrialByNctId(nctId: string) {
  return getMockTrials().find(trial => trial.nct_id === nctId) || null;
}

// Get trials by city
export function getTrialsByCity(cityId: string) {
  const city = PLATFORM_CONFIG.cities.find(c => c.id === cityId);
  if (!city) return [];
  
  return getMockTrials().filter(trial => 
    trial.primary_location_city === city.name
  );
}

// Clear cache (useful for development)
export function clearMockCache() {
  cachedTrials = null;
}
