globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BuTsxHe0.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_Dy51zm1x.mjs';
import { $ as $$Hero, a as $$DetailedMission, b as $$StudiesGrid, c as $$ParticipationPath, d as $$FAQ, e as $$Contact } from '../chunks/FAQ_Bl4lSi5s.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const lang = "es";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Echelon Studies | Reclutamiento para Ensayos Cl\xEDnicos NYC", "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "lang": lang })} ${renderComponent($$result2, "DetailedMission", $$DetailedMission, { "lang": lang })} ${renderComponent($$result2, "StudiesGrid", $$StudiesGrid, { "lang": lang })} ${renderComponent($$result2, "ParticipationPath", $$ParticipationPath, { "lang": lang })} ${renderComponent($$result2, "FAQ", $$FAQ, { "lang": lang })} ${renderComponent($$result2, "Contact", $$Contact, { "lang": lang })} <!-- Cómo funciona --> <section id="about" class="section-padding"> <div class="container mx-auto px-4"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Cómo <span class="text-gradient">Funciona</span></h2> <p class="text-muted-foreground text-lg">Tu camino para contribuir a la ciencia médica es simple y transparente.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-12"> ${[
    { step: "01", title: "Busca un Estudio", desc: "Explora nuestra lista de ensayos cl\xEDnicos activos en NYC y en todo EE. UU. para encontrar uno que se adapte a tu perfil." },
    { step: "02", title: "Aplica Online", desc: "Env\xEDa una solicitud r\xE1pida. Nuestro equipo revisar\xE1 tus detalles para asegurar la elegibilidad para el estudio espec\xEDfico." },
    { step: "03", title: "\xDAnete y Contribuye", desc: "Participa en el estudio en uno de nuestros sitios asociados. Recibir\xE1s atenci\xF3n experta y compensaci\xF3n por tu tiempo." }
  ].map((step) => renderTemplate`<div class="relative p-8 bg-card/40 border border-white/5 rounded-3xl group hover:bg-card/60 transition-all"> <div class="text-6xl font-black text-white/5 absolute -top-4 -left-2 group-hover:text-primary/10 transition-colors">${step.step}</div> <h3 class="text-2xl font-bold mb-4 pt-4">${step.title}</h3> <p class="text-muted-foreground leading-relaxed">${step.desc}</p> </div>`)} </div> </div> </section> <!-- Call to Action --> <section class="section-padding"> <div class="container mx-auto px-4"> <div class="relative bg-gradient-to-br from-primary to-accent rounded-[3rem] p-12 md:p-24 overflow-hidden text-center"> <div class="absolute inset-0 bg-black/20"></div> <div class="relative z-10 max-w-2xl mx-auto"> <h2 class="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">¿Listo para marcar la diferencia?</h2> <p class="text-white/80 text-xl mb-12">Únete a miles de participantes en ensayos clínicos que ayudan a que ocurran avances médicos todos los días.</p> <a href="#trials" class="inline-block px-12 py-5 bg-white text-primary font-bold text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl">
Comenzar Hoy
</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "C:/Users/Jorge/Documents/javi/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/Jorge/Documents/javi/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
