globalThis.process ??= {}; globalThis.process.env ??= {};
import { q as decodeKey } from './chunks/astro/server_BuTsxHe0.mjs';
import './chunks/astro-designed-error-pages_D1tfDy7B.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B7CJc9iR.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Jorge/Documents/javi/","cacheDir":"file:///C:/Users/Jorge/Documents/javi/node_modules/.astro/","outDir":"file:///C:/Users/Jorge/Documents/javi/dist/","srcDir":"file:///C:/Users/Jorge/Documents/javi/src/","publicDir":"file:///C:/Users/Jorge/Documents/javi/public/","buildClientDir":"file:///C:/Users/Jorge/Documents/javi/dist/","buildServerDir":"file:///C:/Users/Jorge/Documents/javi/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/prescreen","isIndex":false,"type":"page","pattern":"^\\/api\\/prescreen\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"prescreen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/prescreen.astro","pathname":"/api/prescreen","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/trials/[nctid]","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/trials\\/([^/]+?)\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"trials","dynamic":false,"spread":false}],[{"content":"nctId","dynamic":true,"spread":false}]],"params":["nctId"],"component":"src/pages/api/trials/[nctId].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/trials","isIndex":true,"type":"endpoint","pattern":"^\\/api\\/trials\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"trials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/trials/index.ts","pathname":"/api/trials","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B2vpykhf.css"},{"type":"inline","content":".animate-spin-slow[data-astro-cid-bbe6dxrz]{animation:spin 10s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.line-clamp-3[data-astro-cid-avc55pib]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/en","isIndex":true,"type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B2vpykhf.css"},{"type":"inline","content":".animate-spin-slow[data-astro-cid-bbe6dxrz]{animation:spin 10s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.line-clamp-3[data-astro-cid-avc55pib]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B2vpykhf.css"},{"type":"inline","content":".animate-fade-in[data-astro-cid-7papdsbo]{animation:fadeIn .3s ease-out}@keyframes fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}\n"}],"routeData":{"route":"/trial/[nctid]","isIndex":false,"type":"page","pattern":"^\\/trial\\/([^/]+?)\\/?$","segments":[[{"content":"trial","dynamic":false,"spread":false}],[{"content":"nctId","dynamic":true,"spread":false}]],"params":["nctId"],"component":"src/pages/trial/[nctId].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Jorge/Documents/javi/src/pages/en/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Jorge/Documents/javi/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Jorge/Documents/javi/src/pages/trial/[nctId].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/prescreen@_@astro":"pages/api/prescreen.astro.mjs","\u0000@astro-page:src/pages/api/trials/[nctId]@_@ts":"pages/api/trials/_nctid_.astro.mjs","\u0000@astro-page:src/pages/api/trials/index@_@ts":"pages/api/trials.astro.mjs","\u0000@astro-page:src/pages/en/index@_@astro":"pages/en.astro.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/trial/[nctId]@_@astro":"pages/trial/_nctid_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DOh9uYgt.mjs","C:/Users/Jorge/Documents/javi/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/Jorge/Documents/javi/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_OiAUligE.mjs","C:/Users/Jorge/Documents/javi/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BWEFigJP.js","C:/Users/Jorge/Documents/javi/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CaPme5N7.js","C:/Users/Jorge/Documents/javi/src/components/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.DocL38W1.js","C:/Users/Jorge/Documents/javi/src/components/FAQ.astro?astro&type=script&index=0&lang.ts":"_astro/FAQ.astro_astro_type_script_index_0_lang.azcuWb1I.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/Jorge/Documents/javi/src/pages/index.astro?astro&type=script&index=0&lang.ts","const a=navigator.language.split(\"-\")[0];a===\"es\"?window.location.pathname=\"/es\":window.location.pathname=\"/en\";"],["C:/Users/Jorge/Documents/javi/src/components/Header.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"main-header\"),n=document.getElementById(\"mobile-menu-toggle\"),t=document.getElementById(\"mobile-menu\"),a=document.querySelectorAll(\".mobile-nav-link\"),e=n?.querySelectorAll(\"span\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?(o?.classList.add(\"py-2\"),o?.classList.remove(\"py-4\")):(o?.classList.add(\"py-4\"),o?.classList.remove(\"py-2\"))});n&&t&&(n.addEventListener(\"click\",()=>{t.classList.contains(\"opacity-100\")?(t.classList.add(\"opacity-0\",\"pointer-events-none\"),t.classList.remove(\"opacity-100\"),document.body.style.overflow=\"\",e&&(e[0].style.transform=\"\",e[1].style.opacity=\"1\",e[2].style.transform=\"\"),a.forEach(s=>{s.classList.add(\"translate-y-8\",\"opacity-0\"),s.classList.remove(\"translate-y-0\",\"opacity-100\")})):(t.classList.remove(\"pointer-events-none\",\"opacity-0\"),t.classList.add(\"opacity-100\"),document.body.style.overflow=\"hidden\",e&&(e[0].style.transform=\"rotate(45deg) translate(5px, 6px)\",e[1].style.opacity=\"0\",e[2].style.transform=\"rotate(-45deg) translate(5px, -6px)\"),a.forEach(s=>{s.classList.remove(\"translate-y-8\",\"opacity-0\"),s.classList.add(\"translate-y-0\",\"opacity-100\")}))}),a.forEach(l=>{l.addEventListener(\"click\",()=>{t.classList.add(\"opacity-0\",\"pointer-events-none\"),t.classList.remove(\"opacity-100\"),document.body.style.overflow=\"\",e&&(e[0].style.transform=\"\",e[1].style.opacity=\"1\",e[2].style.transform=\"\")})}));"],["C:/Users/Jorge/Documents/javi/src/components/FAQ.astro?astro&type=script&index=0&lang.ts","function r(){const i=document.querySelectorAll(\".faq-item\");i.forEach(t=>{const s=t.querySelector(\"[data-faq-btn]\"),e=t.querySelector(\".faq-answer\");s?.addEventListener(\"click\",()=>{const n=t.classList.contains(\"active\");i.forEach(a=>{if(a!==t){a.classList.remove(\"active\"),a.querySelector(\"[data-faq-btn]\")?.setAttribute(\"aria-expanded\",\"false\");const c=a.querySelector(\".faq-answer\");c&&(c.style.maxHeight=\"0\",c.style.opacity=\"0\")}}),n?(t.classList.remove(\"active\"),s.setAttribute(\"aria-expanded\",\"false\"),e&&(e.style.maxHeight=\"0\",e.style.opacity=\"0\")):(t.classList.add(\"active\"),s.setAttribute(\"aria-expanded\",\"true\"),e&&(e.style.maxHeight=e.scrollHeight+\"px\",e.style.opacity=\"1\"))})})}r();document.addEventListener(\"astro:page-load\",r);"]],"assets":["/_astro/index.B2vpykhf.css","/favicon.ico","/favicon.svg","/logo.png","/_astro/Contact.astro_astro_type_script_index_0_lang.DocL38W1.js","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_astro/index.B2vpykhf.css","/_worker.js/pages/en.astro.mjs","/_worker.js/pages/es.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro-designed-error-pages_D1tfDy7B.mjs","/_worker.js/chunks/astro_Ds2M5zif.mjs","/_worker.js/chunks/clinicalTrialsApi_oM7yjrsU.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/FAQ_Bl4lSi5s.mjs","/_worker.js/chunks/Footer_Dy51zm1x.mjs","/_worker.js/chunks/image-endpoint_DJe0ibq6.mjs","/_worker.js/chunks/index_DLcW7LeY.mjs","/_worker.js/chunks/noop-middleware_B7CJc9iR.mjs","/_worker.js/chunks/path_CH3auf61.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_OiAUligE.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_Bg4ZDu0f.mjs","/_worker.js/pages/api/prescreen.astro.mjs","/_worker.js/pages/api/trials.astro.mjs","/_worker.js/chunks/astro/server_BuTsxHe0.mjs","/_worker.js/pages/trial/_nctid_.astro.mjs","/_worker.js/pages/api/trials/_nctid_.astro.mjs"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"wfipsczEyPjfA2b30ktRWsyUaKz1bmIyZ7gyJ1pd6NQ=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
