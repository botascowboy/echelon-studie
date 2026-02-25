globalThis.process ??= {}; globalThis.process.env ??= {};
import { P as PLATFORM_CONFIG, g as getTrialByNctId, t as transformTrialData, a as getMockTrialByNctId, b as getMockTrials } from '../../../chunks/clinicalTrialsApi_Cyd2L4Zi.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
async function GET({ params }) {
  const { nctId } = params;
  if (!nctId) {
    return new Response(
      JSON.stringify({ error: "NCT ID is required" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    let trial = null;
    let source = "mock";
    if (PLATFORM_CONFIG.enableRealApi) {
      try {
        console.log(`[API /trials/${nctId}] Fetching from ClinicalTrials.gov API...`);
        const apiTrial = await getTrialByNctId(nctId);
        if (apiTrial) {
          trial = transformTrialData(apiTrial);
          source = "api";
        }
      } catch (apiError) {
        console.warn(`[API /trials/${nctId}] API failed, falling back to mock:`, apiError);
      }
    }
    if (!trial) {
      trial = getMockTrialByNctId(nctId);
      if (!trial) {
        const baseId = nctId.split("-")[0];
        const allTrials = getMockTrials();
        trial = allTrials.find((t) => t.nct_id.startsWith(baseId)) || null;
      }
      if (trial) source = "mock-fallback";
    }
    if (trial) {
      return new Response(
        JSON.stringify({
          trial,
          source,
          availableCities: PLATFORM_CONFIG.cities.map((c) => c.name),
          url: `https://clinicaltrials.gov/study/${nctId.split("-")[0]}`
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=300"
          }
        }
      );
    }
    return new Response(
      JSON.stringify({
        error: "Trial not found",
        availableCities: PLATFORM_CONFIG.cities.map((c) => c.name)
      }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(`[API /trials/${nctId}] Error:`, error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch trial data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
