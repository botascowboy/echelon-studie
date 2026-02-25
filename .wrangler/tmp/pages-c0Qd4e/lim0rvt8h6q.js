// <define:__ROUTES__>
var define_ROUTES_default = {
  version: 1,
  include: [
    "/*"
  ],
  exclude: [
    "/_astro/*",
    "/favicon.ico",
    "/favicon.svg",
    "/logo.png"
  ]
};

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "C:\\Users\\Jorge\\Documents\\javi\\.wrangler\\tmp\\pages-c0Qd4e\\bundledWorker-0.45217198293949734.mjs";
import { isRoutingRuleMatch } from "C:\\Users\\Jorge\\Documents\\javi\\node_modules\\wrangler\\templates\\pages-dev-util.ts";
export * from "C:\\Users\\Jorge\\Documents\\javi\\.wrangler\\tmp\\pages-c0Qd4e\\bundledWorker-0.45217198293949734.mjs";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = worker;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=lim0rvt8h6q.js.map
