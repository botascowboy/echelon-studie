globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate } from '../../chunks/astro/server_BuTsxHe0.mjs';
import { P as PLATFORM_CONFIG, C as CITY_SEARCH_TERMS, t as transformTrialData, b as getMockTrials } from '../../chunks/clinicalTrialsApi_DZ73K9si.mjs';
export { renderers } from '../../renderers.mjs';

const WEIGHT_LOSS_KEYWORDS = [
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
async function searchWeightLossTrials(params = {}) {
  const {
    pageToken,
    pageSize = 20,
    location,
    distance = 100,
    recruitmentStatus,
    phase
  } = params;
  const conditionsQuery = WEIGHT_LOSS_KEYWORDS.join(" OR ");
  const searchParams = new URLSearchParams({
    "filter.cond": conditionsQuery,
    "pageSize": pageSize.toString(),
    "sort": "LastUpdatePostDate:desc",
    "fields": "ProtocolSection,DerivedSection"
  });
  if (pageToken) {
    searchParams.set("pageToken", pageToken);
  }
  if (recruitmentStatus) {
    searchParams.set("filter.overallStatus", recruitmentStatus);
  } else {
    searchParams.set("filter.overallStatus", "RECRUITING");
  }
  if (phase) {
    searchParams.set("filter.phase", phase);
  }
  if (location) {
    searchParams.set("filter.geo", `${location},${distance}`);
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

const prerender = false;
async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const pageSize = parseInt(url.searchParams.get("pageSize") || "9");
    const query = url.searchParams.get("q") || "";
    const locationParam = url.searchParams.get("location") || "";
    const phase = url.searchParams.get("phase") || "";
    const compensation = url.searchParams.get("compensation");
    let allTrials = [];
    let source = "mock";
    if (PLATFORM_CONFIG.enableRealApi) {
      try {
        console.log("[API /trials] Fetching from ClinicalTrials.gov API...");
        const cityToSearch = locationParam ? locationParam : CITY_SEARCH_TERMS[Object.keys(CITY_SEARCH_TERMS).find(
          (k) => CITY_SEARCH_TERMS[k].toLowerCase() === locationParam.toLowerCase()
        ) || ""] || "";
        const apiResponse = await searchWeightLossTrials({
          pageSize: Math.min(pageSize * 5, 100),
          // fetch extra for filtering
          phase: phase || void 0
        });
        if (apiResponse.studies && apiResponse.studies.length > 0) {
          allTrials = apiResponse.studies.map(transformTrialData);
          source = "api";
          console.log(`[API /trials] Got ${allTrials.length} trials from API`);
        } else {
          throw new Error("No studies returned from API");
        }
      } catch (apiError) {
        console.warn("[API /trials] Real API failed, falling back to mock:", apiError);
        allTrials = getMockTrials();
        source = "mock-fallback";
      }
    }
    if (locationParam) {
      const searchLocation = locationParam.toLowerCase();
      allTrials = allTrials.filter((trial) => {
        const city = (trial.primary_location_city || "").toLowerCase();
        const state = (trial.primary_location_state || "").toLowerCase();
        return city.includes(searchLocation) || state.includes(searchLocation);
      });
    }
    if (query) {
      const searchQuery = query.toLowerCase();
      allTrials = allTrials.filter((trial) => {
        const title = (trial.title || "").toLowerCase();
        const summary = (trial.ai_summary || trial.brief_summary || "").toLowerCase();
        const tags = (() => {
          try {
            return JSON.parse(trial.ai_tags || "[]").join(" ").toLowerCase();
          } catch {
            return (trial.ai_tags || "").toLowerCase();
          }
        })();
        return title.includes(searchQuery) || summary.includes(searchQuery) || tags.includes(searchQuery);
      });
    }
    if (phase) {
      allTrials = allTrials.filter((trial) => trial.phase === phase);
    }
    if (compensation !== null && compensation !== void 0 && compensation !== "") {
      const compFilter = compensation === "true";
      allTrials = allTrials.filter((trial) => trial.has_compensation === compFilter);
    }
    allTrials.sort((a, b) => (b.weight_loss_relevance_score || 0) - (a.weight_loss_relevance_score || 0));
    const total = allTrials.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedTrials = allTrials.slice(startIndex, startIndex + pageSize);
    return new Response(
      JSON.stringify({
        trials: paginatedTrials,
        page,
        pageSize,
        total,
        totalPages,
        source,
        targetCities: PLATFORM_CONFIG.cities.map((c) => c.displayName),
        hasMore: page < totalPages
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=60"
        }
      }
    );
  } catch (error) {
    console.error("[API /trials] Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to fetch trials",
        trials: [],
        total: 0
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Jorge/Documents/javi/src/pages/api/trials/index.astro", void 0);

const $$file = "C:/Users/Jorge/Documents/javi/src/pages/api/trials/index.astro";
const $$url = "/api/trials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
