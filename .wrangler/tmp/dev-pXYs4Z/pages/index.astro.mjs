globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, n as renderScript, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_BuTsxHe0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "C:/Users/Jorge/Documents/javi/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<noscript><meta http-equiv="refresh" content="0;url=/en"></noscript>`;
}, "C:/Users/Jorge/Documents/javi/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jorge/Documents/javi/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
