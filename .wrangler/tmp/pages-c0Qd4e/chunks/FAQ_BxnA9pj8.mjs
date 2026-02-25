globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, u as unescapeHTML, l as defineScriptVars, n as renderScript } from './astro/server_BuTsxHe0.mjs';
/* empty css                         */

const $$Astro$5 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang = "en" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex items-center pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-white" data-astro-cid-bbe6dxrz> <!-- Ambient Background --> <div class="absolute inset-0 -z-10 overflow-hidden" data-astro-cid-bbe6dxrz> <div class="absolute -top-[10%] -right-[10%] w-[70%] h-[70%] bg-accent/[0.07] rounded-full blur-[180px] animate-float" data-astro-cid-bbe6dxrz></div> <div class="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-accent/[0.04] rounded-full blur-[140px] animate-float opacity-50" style="animation-delay: 2s;" data-astro-cid-bbe6dxrz></div> <div class="absolute inset-0 opacity-[0.18]" style="background-image: radial-gradient(circle, #00a381 1px, transparent 1px); background-size: 40px 40px;" data-astro-cid-bbe6dxrz></div> </div> <div class="container mx-auto px-4 z-10" data-astro-cid-bbe6dxrz> <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center" data-astro-cid-bbe6dxrz> <!-- Left: Narrative --> <div class="lg:col-span-7 space-y-10 text-center lg:text-left" data-astro-cid-bbe6dxrz> <!-- Badge --> <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em] animate-fade-in shadow-sm" data-astro-cid-bbe6dxrz> <span class="relative flex h-2 w-2" data-astro-cid-bbe6dxrz> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" data-astro-cid-bbe6dxrz></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-accent" data-astro-cid-bbe6dxrz></span> </span> ${lang === "en" ? "FDA-Reviewed Weight Loss Trials" : "Ensayos de P\xE9rdida de Peso Revisados por la FDA"} </div> <!-- Headline --> <div class="space-y-4" data-astro-cid-bbe6dxrz> <h1 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.88] text-primary animate-fade-in" data-astro-cid-bbe6dxrz> ${lang === "en" ? "Lose Weight." : "Pierde Peso."}<br data-astro-cid-bbe6dxrz> <span class="text-gradient leading-tight" data-astro-cid-bbe6dxrz> ${lang === "en" ? "Get Paid." : "Cobra por ello."} </span> </h1> <p class="text-xl md:text-2xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-[1.4] font-medium animate-fade-in" style="animation-delay: 0.15s;" data-astro-cid-bbe6dxrz> ${lang === "en" ? "Join a weight loss clinical trial near you. Access breakthrough medications like Ozempic, Wegovy & Mounjaro \u2014 at no cost." : "\xDAnete a un ensayo cl\xEDnico de p\xE9rdida de peso cerca de ti. Accede a medicamentos como Ozempic, Wegovy y Mounjaro \u2014 sin costo."} </p> </div> <!-- Stats row --> <div class="flex flex-wrap items-center gap-8 justify-center lg:justify-start animate-fade-in" style="animation-delay: 0.25s;" data-astro-cid-bbe6dxrz> <div class="text-center lg:text-left" data-astro-cid-bbe6dxrz> <div class="text-4xl font-black text-primary tracking-tighter" data-astro-cid-bbe6dxrz>$1,500</div> <div class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1" data-astro-cid-bbe6dxrz>${lang === "en" ? "Max. Compensation" : "Compensaci\xF3n M\xE1x."}</div> </div> <div class="w-px h-10 bg-slate-200 hidden sm:block" data-astro-cid-bbe6dxrz></div> <div class="text-center lg:text-left" data-astro-cid-bbe6dxrz> <div class="text-4xl font-black text-accent tracking-tighter" data-astro-cid-bbe6dxrz>100%</div> <div class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1" data-astro-cid-bbe6dxrz>${lang === "en" ? "Free. No Hidden Costs" : "Gratis. Sin costos ocultos"}</div> </div> <div class="w-px h-10 bg-slate-200 hidden sm:block" data-astro-cid-bbe6dxrz></div> <div class="text-center lg:text-left" data-astro-cid-bbe6dxrz> <div class="text-4xl font-black text-primary tracking-tighter" data-astro-cid-bbe6dxrz>5</div> <div class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mt-1" data-astro-cid-bbe6dxrz>${lang === "en" ? "Major US Cities" : "Ciudades Principales"}</div> </div> </div> <!-- CTAs --> <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in" style="animation-delay: 0.35s;" data-astro-cid-bbe6dxrz> <a href="#trials" class="w-full sm:w-auto px-12 py-6 rounded-2xl bg-accent text-white font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(0,163,129,0.35)] hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all duration-500 text-center" data-astro-cid-bbe6dxrz> ${lang === "en" ? "See Open Trials" : "Ver Ensayos Abiertos"} </a> <a href="#contact" class="w-full sm:w-auto px-12 py-6 rounded-2xl bg-white border border-slate-200 text-primary font-black text-sm uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-all duration-500 text-center active:scale-95" data-astro-cid-bbe6dxrz> ${lang === "en" ? "Check My Eligibility" : "Verificar Elegibilidad"} </a> </div> <!-- Cities --> <div class="pt-4 animate-fade-in" style="animation-delay: 0.5s;" data-astro-cid-bbe6dxrz> <p class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 text-center lg:text-left" data-astro-cid-bbe6dxrz> ${lang === "en" ? "Trials available in" : "Ensayos disponibles en"} </p> <div class="flex flex-wrap items-center gap-3 justify-center lg:justify-start" data-astro-cid-bbe6dxrz> ${[
    { name: "NYC", icon: "\u{1F5FD}", val: "New York" },
    { name: "Miami", icon: "\u{1F334}", val: "Miami" },
    { name: "Houston", icon: "\u{1F680}", val: "Houston" },
    { name: "Los Angeles", icon: "\u{1F306}", val: "Los Angeles" },
    { name: "San Francisco", icon: "\u{1F309}", val: "San Francisco" }
  ].map((city) => renderTemplate`<a href="#trials" class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"${addAttribute(`document.getElementById('location-filter').value='${city.val}';document.getElementById('location-filter').dispatchEvent(new Event('change'));`, "onclick")} data-astro-cid-bbe6dxrz> <span class="text-lg" data-astro-cid-bbe6dxrz>${city.icon}</span> <span class="text-sm font-bold text-slate-600 group-hover:text-accent transition-colors" data-astro-cid-bbe6dxrz>${city.name}</span> </a>`)} </div> </div> </div> <!-- Right: Visual Card --> <div class="lg:col-span-5 relative hidden lg:flex flex-col gap-5 animate-fade-in" style="animation-delay: 0.4s;" data-astro-cid-bbe6dxrz> <!-- Main visual card --> <div class="relative bg-white border border-slate-100 rounded-[4rem] shadow-[0_60px_100px_-30px_rgba(0,33,71,0.08)] p-10 overflow-hidden" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent pointer-events-none rounded-[4rem]" data-astro-cid-bbe6dxrz></div> <!-- Visual: weight scale icon big --> <div class="relative w-full aspect-square bg-gradient-to-br from-slate-50 to-white rounded-[3rem] border border-slate-100 flex items-center justify-center mb-8 shadow-inner overflow-hidden" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#00a381_1px,transparent_1px)] [background-size:20px_20px]" data-astro-cid-bbe6dxrz></div> <!-- GLP-1 molecule / weight icon composition --> <div class="relative flex flex-col items-center gap-3" data-astro-cid-bbe6dxrz> <div class="w-28 h-28 rounded-full bg-accent/10 flex items-center justify-center" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <!-- Body/person with downward arrow = weight loss --> <path d="M12 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" data-astro-cid-bbe6dxrz></path> <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" data-astro-cid-bbe6dxrz></path> <path d="M12 14v4M10 16l2 2 2-2" data-astro-cid-bbe6dxrz></path> </svg> </div> <div class="flex items-center gap-2 bg-accent/10 px-5 py-2 rounded-full" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" data-astro-cid-bbe6dxrz></polyline> <polyline points="17 6 23 6 23 12" data-astro-cid-bbe6dxrz></polyline> </svg> <span class="text-accent font-black text-sm" data-astro-cid-bbe6dxrz>–15% Body Weight</span> </div> </div> <!-- Spinner ring --> <div class="absolute inset-4 rounded-full border-[6px] border-accent/5 border-t-accent/30 animate-spin-slow pointer-events-none" data-astro-cid-bbe6dxrz></div> </div> <!-- Drug tags --> <div class="flex flex-wrap gap-2 justify-center" data-astro-cid-bbe6dxrz> ${["Ozempic", "Wegovy", "Mounjaro", "Zepbound", "GLP-1"].map((drug) => renderTemplate`<span class="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/5 text-accent border border-accent/10" data-astro-cid-bbe6dxrz>${drug}</span>`)} </div> </div> <!-- Floating stat nodes --> <div class="absolute -top-6 -right-8 px-8 py-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl animate-float z-20" data-astro-cid-bbe6dxrz> <div class="text-4xl font-black text-primary tracking-tighter mb-0.5" data-astro-cid-bbe6dxrz>$0</div> <div class="text-[9px] font-black uppercase tracking-[0.25em] text-accent" data-astro-cid-bbe6dxrz>Cost to You</div> </div> <div class="absolute -bottom-4 -left-8 px-8 py-6 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl animate-float z-20" style="animation-delay: 2s;" data-astro-cid-bbe6dxrz> <div class="text-4xl font-black text-accent tracking-tighter mb-0.5" data-astro-cid-bbe6dxrz>FDA</div> <div class="text-[9px] font-black uppercase tracking-[0.25em] text-primary" data-astro-cid-bbe6dxrz>Reviewed</div> </div> </div> </div> </div> </section> `;
}, "C:/Users/Jorge/Documents/javi/src/components/Hero.astro", void 0);

const $$Astro$4 = createAstro();
const $$DetailedMission = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DetailedMission;
  const { lang = "en" } = Astro2.props;
  const content = lang === "en" ? {
    subtitle: "Dedicated to transparent, safe, and accessible clinical research in New York City.",
    founded: "Echelon Studies was founded on a simple belief: accessing breakthrough medical care shouldn't be complicated.",
    principles: [
      {
        title: "Patient Safety First",
        desc: "We only partner with sites that adhere to strict Institutional Review Board (IRB) and FDA safety guidelines.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>`
      },
      {
        title: "Total Transparency",
        desc: "No hidden costs. No confusing jargon. You get all the details before you commit to any study.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z"></path><path d="M12 12h10"></path><circle cx="12" cy="12" r="3"></circle></svg>`
      },
      {
        title: "Local Focus",
        desc: "We specialize in connecting New York residents with New York clinics.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
      }
    ],
    features: [
      { title: "Vetted Partners", desc: "We rigorously screen every clinic in our network." },
      { title: "Patient Advocacy", desc: "Your comfort and consent are our priority." },
      { title: "Advancing Science", desc: "Helping bring new treatments to the world." }
    ]
  } : {
    subtitle: "Dedicados a la investigaci\xF3n cl\xEDnica transparente, segura y accesible en la ciudad de Nueva York.",
    founded: "Echelon Studies se fund\xF3 bajo una creencia simple: acceder a una atenci\xF3n m\xE9dica innovadora no deber\xEDa ser complicado.",
    principles: [
      {
        title: "La Seguridad del Paciente es lo Primero",
        desc: "Solo colaboramos con centros que se adhieren a las estrictas directrices de seguridad de la Junta de Revisi\xF3n Institucional (IRB) y la FDA.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>`
      },
      {
        title: "Transparencia Total",
        desc: "Sin costes ocultos. Sin tecnicismos confusos. Usted recibe todos los detalles antes de comprometerse con cualquier estudio.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z"></path><path d="M12 12h10"></path><circle cx="12" cy="12" r="3"></circle></svg>`
      },
      {
        title: "Enfoque Local",
        desc: "Nos especializamos en conectar a los residentes de Nueva York con las cl\xEDnicas de Nueva York.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>`
      }
    ],
    features: [
      { title: "Socios Verificados", desc: "Examinamos rigurosamente cada cl\xEDnica de nuestra red." },
      { title: "Defensa del Paciente", desc: "Su comodidad y consentimiento son nuestra prioridad." },
      { title: "Avance de la Ciencia", desc: "Ayudando a traer nuevos tratamientos al mundo." }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="mission" class="section-padding relative overflow-hidden bg-white"> <!-- Decorative background elements --> <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"> <div class="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-accent/[0.04] rounded-full blur-[100px]"></div> <div class="absolute -bottom-[10%] -left-[10%] w-[30%] h-[30%] bg-accent/[0.02] rounded-full blur-[120px]"></div> </div> <div class="container mx-auto px-4 relative z-10"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center"> <!-- Left Column: The Story --> <div class="lg:col-span-5 space-y-12 animate-fade-in"> <div class="space-y-8"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.3em]"> <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> ${lang === "en" ? "Core Purpose" : "Prop\xF3sito Central"} </div> <h2 class="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-primary"> ${lang === "en" ? "Pioneering" : "Liderando"} <br> <span class="text-gradient leading-tight">${lang === "en" ? "Patient Care." : "el Cuidado."}</span> </h2> <p class="text-xl md:text-2xl font-bold text-slate-500 leading-[1.3] max-w-xl"> ${content.subtitle} </p> </div> <div class="space-y-10"> <div class="relative pl-10 border-l-[3px] border-accent/30 py-2"> <p class="text-lg md:text-xl text-slate-400 font-medium leading-relaxed italic"> ${content.founded} </p> </div> <div class="space-y-8"> <div class="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 shadow-sm text-sm md:text-base leading-relaxed group hover:border-accent/40 transition-all duration-500"> <span class="text-accent font-black uppercase text-[10px] tracking-[0.4em] block mb-4">NYC Global Reach</span> <p class="text-slate-600 font-medium leading-[1.6]"> ${lang === "en" ? "Strategic presence across the entire NYC metro area, bridging leading clinicians with the community." : "Presencia estrat\xE9gica en toda el \xE1rea metropolitana de NYC, uniendo a los mejores m\xE9dicos con la comunidad."} </p> </div> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-6"> ${content.features.map((feature) => renderTemplate`<div class="space-y-3"> <h4 class="font-black text-[10px] uppercase tracking-[0.3em] text-primary">${feature.title}</h4> <div class="w-8 h-1 bg-accent/30 rounded-full group-hover:w-12 transition-all group-hover:bg-accent"></div> </div>`)} </div> </div> <!-- Right Column: Visual Bento & Principles --> <div class="lg:col-span-7 space-y-8 animate-fade-in" style="animation-delay: 0.2s;"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-8"> <!-- Principle 1 --> <div class="group p-10 rounded-[3.5rem] bg-white border border-slate-100 hover:border-accent/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,163,129,0.12)] transition-all duration-700 space-y-6"> <div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700 text-accent">${unescapeHTML(content.principles[0].icon)}</div> <h3 class="text-2xl font-black text-primary tracking-tighter">${content.principles[0].title}</h3> <p class="text-slate-500 leading-relaxed text-sm font-bold opacity-80">${content.principles[0].desc}</p> </div> <!-- Principle 2 --> <div class="group p-10 rounded-[3.5rem] bg-white border border-slate-100 hover:border-accent/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,163,129,0.12)] transition-all duration-700 space-y-6"> <div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700 text-accent">${unescapeHTML(content.principles[1].icon)}</div> <h3 class="text-2xl font-black text-primary tracking-tighter">${content.principles[1].title}</h3> <p class="text-slate-500 leading-relaxed text-sm font-bold opacity-80">${content.principles[1].desc}</p> </div> <!-- Large Visual Card / Principle 3 --> <div class="group sm:col-span-2 p-10 rounded-[3.5rem] bg-gradient-to-br from-white to-slate-50/50 border border-slate-100 flex flex-col md:flex-row items-center gap-12 hover:border-accent/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,163,129,0.12)] transition-all duration-700 overflow-hidden relative"> <div class="absolute -right-20 -bottom-20 w-60 h-60 bg-accent/[0.04] rounded-full blur-[80px] group-hover:w-80 group-hover:h-80 transition-all duration-700"></div> <div class="w-24 h-24 rounded-[2rem] bg-white flex items-center justify-center shrink-0 border border-slate-100 group-hover:rotate-12 group-hover:bg-accent group-hover:text-white transition-all duration-700 shadow-sm text-accent">${unescapeHTML(content.principles[2].icon)}</div> <div class="space-y-4 relative z-10 text-center md:text-left"> <h3 class="text-3xl font-black text-primary tracking-tighter">${content.principles[2].title}</h3> <p class="text-slate-500 leading-relaxed text-base font-bold italic max-w-md opacity-80">
"${content.principles[2].desc}"
</p> </div> </div> </div> <!-- Highly Advanced NYC Dashboard Card --> <div class="relative p-12 rounded-[4rem] bg-white border border-slate-100 overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.04)] group"> <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div> <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10"> <div class="space-y-4 text-center md:text-left"> <div class="flex items-center justify-center md:justify-start gap-4"> <span class="w-8 h-1 bg-accent/40 rounded-full"></span> <span class="text-[10px] font-black tracking-[0.5em] text-accent uppercase">Active Network</span> </div> <h4 class="text-6xl md:text-8xl font-black text-accent tracking-tighter leading-none">NYC</h4> </div> <div class="grid grid-cols-2 gap-4 w-full md:w-auto"> <div class="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/40 transition-all duration-500 group/item hover:bg-white shadow-sm"> <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover/item:text-accent transition-colors">Manhattan</div> <div class="text-xs font-black text-primary">Connected</div> </div> <div class="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/40 transition-all duration-500 group/item hover:bg-white shadow-sm"> <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover/item:text-accent transition-colors">Brooklyn</div> <div class="text-xs font-black text-primary">Connected</div> </div> <div class="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/40 transition-all duration-500 group/item hover:bg-white shadow-sm"> <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover/item:text-accent transition-colors">Queens</div> <div class="text-xs font-black text-primary">Connected</div> </div> <div class="px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/40 transition-all duration-500 group/item hover:bg-white shadow-sm"> <div class="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 group-hover/item:text-accent transition-colors">Bronx</div> <div class="text-xs font-black text-primary">Connected</div> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/Jorge/Documents/javi/src/components/DetailedMission.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$StudiesGrid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StudiesGrid;
  const { lang = "en" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<section id="trials" class="section-padding bg-slate-50/40" data-astro-cid-avc55pib> <div class="container mx-auto px-4" data-astro-cid-avc55pib> <!-- Header --> <div class="max-w-3xl mx-auto text-center mb-12 animate-fade-in" data-astro-cid-avc55pib> <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6" data-astro-cid-avc55pib> <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" data-astro-cid-avc55pib></span> ', ' </div> <h2 class="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-primary" data-astro-cid-avc55pib> ', ' <span class="text-gradient leading-tight" data-astro-cid-avc55pib>', '</span> </h2> <p class="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto" data-astro-cid-avc55pib> ', ' </p> </div> <!-- Filters --> <div class="max-w-5xl mx-auto mb-10" data-astro-cid-avc55pib> <div class="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100" data-astro-cid-avc55pib> <div class="grid grid-cols-1 md:grid-cols-4 gap-3" data-astro-cid-avc55pib> <!-- Search --> <div class="relative" data-astro-cid-avc55pib> <input type="text" id="search-input"', ' class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm" data-astro-cid-avc55pib> <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-avc55pib> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-avc55pib></path> </svg> </div> <!-- Location --> <select id="location-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="New York" data-astro-cid-avc55pib>\u{1F5FD} NYC</option> <option value="Miami" data-astro-cid-avc55pib>\u{1F334} Miami</option> <option value="Houston" data-astro-cid-avc55pib>\u{1F680} Houston</option> <option value="Los Angeles" data-astro-cid-avc55pib>\u{1F306} Los Angeles</option> <option value="San Francisco" data-astro-cid-avc55pib>\u{1F309} San Francisco</option> </select> <!-- Phase --> <select id="phase-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="PHASE3" data-astro-cid-avc55pib>', '</option> <option value="PHASE2" data-astro-cid-avc55pib>', '</option> <option value="PHASE1" data-astro-cid-avc55pib>', '</option> </select> <!-- Compensation --> <select id="compensation-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="true" data-astro-cid-avc55pib>', '</option> <option value="false" data-astro-cid-avc55pib>', '</option> </select> </div> <!-- Stats bar --> <div class="flex flex-wrap gap-4 mt-4 pt-4 border-t border-slate-100" id="stats-bar" data-astro-cid-avc55pib> <span class="text-xs text-slate-400 font-medium" data-astro-cid-avc55pib>', '</span> </div> </div> </div> <!-- Loading Skeletons --> <div id="loading-state" class="hidden" data-astro-cid-avc55pib> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-avc55pib> ', ' </div> </div> <!-- Trials Grid --> <div id="trials-grid" class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-avc55pib></div> <!-- Empty State --> <div id="empty-state" class="hidden text-center py-20" data-astro-cid-avc55pib> <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5" data-astro-cid-avc55pib> <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-avc55pib> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-avc55pib></path> </svg> </div> <h3 class="text-xl font-bold text-slate-700 mb-2" data-astro-cid-avc55pib>', '</h3> <p class="text-slate-500 text-sm" data-astro-cid-avc55pib>', '</p> </div> <!-- Pagination --> <div id="pagination" class="hidden mt-12 flex justify-center items-center gap-4" data-astro-cid-avc55pib> <button id="prev-page" class="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm" data-astro-cid-avc55pib>\n\u2190 ', ' </button> <span id="page-info" class="text-slate-600 font-medium text-sm" data-astro-cid-avc55pib></span> <button id="next-page" class="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm" data-astro-cid-avc55pib> ', " \u2192\n</button> </div> </div> </section> <script>(function(){", `
  let currentPage = 1;
  let totalPages  = 1;
  let currentFilters = {};

  const trialsGrid   = document.getElementById('trials-grid');
  const loadingState = document.getElementById('loading-state');
  const emptyState   = document.getElementById('empty-state');
  const pagination   = document.getElementById('pagination');
  const pageInfo     = document.getElementById('page-info');
  const prevBtn      = document.getElementById('prev-page');
  const nextBtn      = document.getElementById('next-page');
  const statsBar     = document.getElementById('stats-bar');
  const searchInput  = document.getElementById('search-input');
  const locationFilter     = document.getElementById('location-filter');
  const phaseFilter        = document.getElementById('phase-filter');
  const compensationFilter = document.getElementById('compensation-filter');

  /* \u2500\u2500 helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  function safeJSON(val, fallback = []) {
    if (!val) return fallback;
    if (typeof val !== 'string') return val;
    try { return JSON.parse(val); } catch { return fallback; }
  }

  function phaseColor(phase) {
    const map = { PHASE3:'emerald', PHASE2:'blue', PHASE1:'amber', PHASE4:'teal', NA:'slate' };
    return map[phase] || 'slate';
  }

  function phaseLabel(trial) {
    return trial.phase_label || trial.phase || 'Clinical Trial';
  }

  /* \u2500\u2500 render one card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  function renderCard(trial) {
    const tags        = safeJSON(trial.ai_tags).slice(0, 3);
    const must        = safeJSON(trial.eligibility_summary_must).slice(0, 2);
    const summary     = trial.ai_summary || trial.brief_summary || '';
    const city        = [trial.primary_location_city, trial.primary_location_state].filter(Boolean).join(', ') || 'Multiple Locations';
    const isRecruiting = trial.overall_status === 'RECRUITING' || trial.status_label === 'Recruiting';
    const phase       = phaseLabel(trial);
    const phaseCol    = phaseColor(trial.phase);
    const hasPay      = trial.has_compensation;
    const payAmt      = trial.compensation_amount || '';
    const duration    = trial.ai_estimated_duration || '';
    const sponsor     = trial.lead_sponsor || '';

    return \`
      <article class="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_32px_64px_-20px_rgba(0,163,129,0.15)] flex flex-col">

        <!-- Top accent stripe -->
        <div class="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Glow -->
        <div class="absolute -top-20 -right-20 w-52 h-52 bg-accent/[0.05] rounded-full blur-[80px] group-hover:bg-accent/[0.12] transition-all duration-700 pointer-events-none"></div>

        <div class="relative z-10 p-8 flex flex-col h-full gap-6">

          <!-- Row 1: Status + Phase badges -->
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase tracking-[0.18em] px-4 py-2 rounded-full \${isRecruiting ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}">
              \${isRecruiting ? (lang === 'en' ? 'Recruiting' : 'Reclutando') : (trial.status_label || 'Active')}
            </span>
            <span class="text-[10px] font-black uppercase tracking-[0.18em] text-\${phaseCol}-600 bg-\${phaseCol}-50 border border-\${phaseCol}-100 px-3 py-1.5 rounded-full">
              \${phase}
            </span>
          </div>

          <!-- Row 2: Drug tags -->
          \${tags.length ? \`
          <div class="flex flex-wrap gap-1.5">
            \${tags.map(t => \`<span class="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">\${t}</span>\`).join('')}
          </div>\` : ''}

          <!-- Row 3: Title + Summary -->
          <div class="flex-1 space-y-3">
            <h3 class="text-xl font-black text-primary group-hover:text-accent transition-colors leading-[1.25] tracking-tight">
              \${trial.title}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed line-clamp-3">
              \${summary}
            </p>
          </div>

          <!-- Row 4: Key facts -->
          <div class="space-y-2.5">
            <!-- Eligibility -->
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-accent/10 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\${lang === 'en' ? 'Who qualifies' : 'Qui\xE9n califica'}</div>
                <div class="text-sm font-bold text-slate-700 truncate">\${must.length ? must[0] : (trial.eligibility_age_range || 'Adults 18+')}</div>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-accent/10 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\${lang === 'en' ? 'Location' : 'Ubicaci\xF3n'}</div>
                <div class="text-sm font-bold text-slate-700 truncate">\${city}</div>
              </div>
            </div>

            <!-- Compensation (highlighted if paid) -->
            \${hasPay ? \`
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 group-hover:border-emerald-200 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-emerald-600">\${lang === 'en' ? 'You get paid' : 'Te pagan'}</div>
                <div class="text-sm font-black text-emerald-700 truncate">\${payAmt || (lang === 'en' ? 'Ask for details' : 'Consultar')}</div>
              </div>
            </div>\` : \`
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\${lang === 'en' ? 'Cost' : 'Costo'}</div>
                <div class="text-sm font-bold text-slate-600">\${lang === 'en' ? 'Free \u2013 no payment' : 'Gratis \u2013 sin pago'}</div>
              </div>
            </div>\`}
          </div>

          <!-- Row 5: Duration pill + CTA -->
          <div class="flex items-center gap-3 pt-2">
            \${duration ? \`<span class="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">\u23F1 \${duration}</span>\` : ''}
            <a href="/trial/\${trial.nct_id}" class="flex-1 inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-accent text-white font-black text-xs uppercase tracking-[0.25em] hover:bg-primary transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-primary/20 active:scale-95">
              \${lang === 'en' ? 'View & Apply' : 'Ver y Aplicar'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

        </div>
      </article>
    \`;
  }

  /* \u2500\u2500 API + state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  async function fetchTrials(page = 1, filters = {}) {
    showLoading();
    try {
      const params = new URLSearchParams({ page, pageSize: '9' });
      if (filters.q)          params.set('q', filters.q);
      if (filters.location)   params.set('location', filters.location);
      if (filters.phase)      params.set('phase', filters.phase);
      if (filters.compensation !== undefined) params.set('compensation', filters.compensation);

      const res  = await fetch(\`/api/trials?\${params}\`);
      const data = await res.json();

      if (data.trials?.length) {
        renderTrials(data.trials);
        updateStats(data.trials.length, data.total);
        currentPage = data.page;
        totalPages  = data.totalPages || 1;
        updatePagination();
      } else {
        showEmpty();
      }
    } catch(e) {
      console.error(e);
      showEmpty();
    }
  }

  function showLoading() {
    trialsGrid.classList.add('hidden');
    emptyState.classList.add('hidden');
    pagination.classList.add('hidden');
    loadingState.classList.remove('hidden');
  }

  function showEmpty() {
    loadingState.classList.add('hidden');
    trialsGrid.classList.add('hidden');
    pagination.classList.add('hidden');
    emptyState.classList.remove('hidden');
  }

  function renderTrials(trials) {
    loadingState.classList.add('hidden');
    emptyState.classList.add('hidden');
    trialsGrid.classList.remove('hidden');
    pagination.classList.remove('hidden');
    trialsGrid.innerHTML = trials.map(renderCard).join('');
  }

  function updateStats(visible, total) {
    statsBar.innerHTML = \`
      <span class="text-xs font-medium text-slate-500">
        \${lang === 'en'
          ? \`Showing <strong>\${visible}</strong> of <strong>\${total || '?'}</strong> active weight loss trials\`
          : \`Mostrando <strong>\${visible}</strong> de <strong>\${total || '?'}</strong> ensayos activos\`}
      </span>
      <span class="text-slate-300 hidden sm:inline">|</span>
      <span class="text-xs font-bold text-accent hidden sm:inline">\u{1F52C} \${lang === 'en' ? 'AI-Enriched Data' : 'Datos con IA'}</span>
    \`;
  }

  function updatePagination() {
    pageInfo.textContent = \`\${lang === 'en' ? 'Page' : 'P\xE1gina'} \${currentPage} / \${totalPages}\`;
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;
    if (totalPages <= 1) pagination.classList.add('hidden');
  }

  function debounce(fn, ms) {
    let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }

  function handleFilterChange() {
    currentFilters = {
      q: searchInput.value,
      location: locationFilter.value,
      phase: phaseFilter.value,
      compensation: compensationFilter.value === '' ? undefined : compensationFilter.value
    };
    currentPage = 1;
    fetchTrials(currentPage, currentFilters);
  }

  searchInput?.addEventListener('input', debounce(handleFilterChange, 300));
  locationFilter?.addEventListener('change', handleFilterChange);
  phaseFilter?.addEventListener('change', handleFilterChange);
  compensationFilter?.addEventListener('change', handleFilterChange);
  prevBtn?.addEventListener('click', () => { if (currentPage > 1) { currentPage--; fetchTrials(currentPage, currentFilters); }});
  nextBtn?.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; fetchTrials(currentPage, currentFilters); }});

  fetchTrials();
})();<\/script> `], ["", '<section id="trials" class="section-padding bg-slate-50/40" data-astro-cid-avc55pib> <div class="container mx-auto px-4" data-astro-cid-avc55pib> <!-- Header --> <div class="max-w-3xl mx-auto text-center mb-12 animate-fade-in" data-astro-cid-avc55pib> <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-6" data-astro-cid-avc55pib> <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" data-astro-cid-avc55pib></span> ', ' </div> <h2 class="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-primary" data-astro-cid-avc55pib> ', ' <span class="text-gradient leading-tight" data-astro-cid-avc55pib>', '</span> </h2> <p class="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl mx-auto" data-astro-cid-avc55pib> ', ' </p> </div> <!-- Filters --> <div class="max-w-5xl mx-auto mb-10" data-astro-cid-avc55pib> <div class="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100" data-astro-cid-avc55pib> <div class="grid grid-cols-1 md:grid-cols-4 gap-3" data-astro-cid-avc55pib> <!-- Search --> <div class="relative" data-astro-cid-avc55pib> <input type="text" id="search-input"', ' class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all text-sm" data-astro-cid-avc55pib> <svg class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-avc55pib> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-avc55pib></path> </svg> </div> <!-- Location --> <select id="location-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="New York" data-astro-cid-avc55pib>\u{1F5FD} NYC</option> <option value="Miami" data-astro-cid-avc55pib>\u{1F334} Miami</option> <option value="Houston" data-astro-cid-avc55pib>\u{1F680} Houston</option> <option value="Los Angeles" data-astro-cid-avc55pib>\u{1F306} Los Angeles</option> <option value="San Francisco" data-astro-cid-avc55pib>\u{1F309} San Francisco</option> </select> <!-- Phase --> <select id="phase-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="PHASE3" data-astro-cid-avc55pib>', '</option> <option value="PHASE2" data-astro-cid-avc55pib>', '</option> <option value="PHASE1" data-astro-cid-avc55pib>', '</option> </select> <!-- Compensation --> <select id="compensation-filter" class="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer text-sm" data-astro-cid-avc55pib> <option value="" data-astro-cid-avc55pib>', '</option> <option value="true" data-astro-cid-avc55pib>', '</option> <option value="false" data-astro-cid-avc55pib>', '</option> </select> </div> <!-- Stats bar --> <div class="flex flex-wrap gap-4 mt-4 pt-4 border-t border-slate-100" id="stats-bar" data-astro-cid-avc55pib> <span class="text-xs text-slate-400 font-medium" data-astro-cid-avc55pib>', '</span> </div> </div> </div> <!-- Loading Skeletons --> <div id="loading-state" class="hidden" data-astro-cid-avc55pib> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-avc55pib> ', ' </div> </div> <!-- Trials Grid --> <div id="trials-grid" class="grid grid-cols-1 lg:grid-cols-3 gap-8" data-astro-cid-avc55pib></div> <!-- Empty State --> <div id="empty-state" class="hidden text-center py-20" data-astro-cid-avc55pib> <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-5" data-astro-cid-avc55pib> <svg class="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-avc55pib> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-avc55pib></path> </svg> </div> <h3 class="text-xl font-bold text-slate-700 mb-2" data-astro-cid-avc55pib>', '</h3> <p class="text-slate-500 text-sm" data-astro-cid-avc55pib>', '</p> </div> <!-- Pagination --> <div id="pagination" class="hidden mt-12 flex justify-center items-center gap-4" data-astro-cid-avc55pib> <button id="prev-page" class="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm" data-astro-cid-avc55pib>\n\u2190 ', ' </button> <span id="page-info" class="text-slate-600 font-medium text-sm" data-astro-cid-avc55pib></span> <button id="next-page" class="px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm" data-astro-cid-avc55pib> ', " \u2192\n</button> </div> </div> </section> <script>(function(){", `
  let currentPage = 1;
  let totalPages  = 1;
  let currentFilters = {};

  const trialsGrid   = document.getElementById('trials-grid');
  const loadingState = document.getElementById('loading-state');
  const emptyState   = document.getElementById('empty-state');
  const pagination   = document.getElementById('pagination');
  const pageInfo     = document.getElementById('page-info');
  const prevBtn      = document.getElementById('prev-page');
  const nextBtn      = document.getElementById('next-page');
  const statsBar     = document.getElementById('stats-bar');
  const searchInput  = document.getElementById('search-input');
  const locationFilter     = document.getElementById('location-filter');
  const phaseFilter        = document.getElementById('phase-filter');
  const compensationFilter = document.getElementById('compensation-filter');

  /* \u2500\u2500 helpers \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  function safeJSON(val, fallback = []) {
    if (!val) return fallback;
    if (typeof val !== 'string') return val;
    try { return JSON.parse(val); } catch { return fallback; }
  }

  function phaseColor(phase) {
    const map = { PHASE3:'emerald', PHASE2:'blue', PHASE1:'amber', PHASE4:'teal', NA:'slate' };
    return map[phase] || 'slate';
  }

  function phaseLabel(trial) {
    return trial.phase_label || trial.phase || 'Clinical Trial';
  }

  /* \u2500\u2500 render one card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  function renderCard(trial) {
    const tags        = safeJSON(trial.ai_tags).slice(0, 3);
    const must        = safeJSON(trial.eligibility_summary_must).slice(0, 2);
    const summary     = trial.ai_summary || trial.brief_summary || '';
    const city        = [trial.primary_location_city, trial.primary_location_state].filter(Boolean).join(', ') || 'Multiple Locations';
    const isRecruiting = trial.overall_status === 'RECRUITING' || trial.status_label === 'Recruiting';
    const phase       = phaseLabel(trial);
    const phaseCol    = phaseColor(trial.phase);
    const hasPay      = trial.has_compensation;
    const payAmt      = trial.compensation_amount || '';
    const duration    = trial.ai_estimated_duration || '';
    const sponsor     = trial.lead_sponsor || '';

    return \\\`
      <article class="group relative bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_32px_64px_-20px_rgba(0,163,129,0.15)] flex flex-col">

        <!-- Top accent stripe -->
        <div class="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Glow -->
        <div class="absolute -top-20 -right-20 w-52 h-52 bg-accent/[0.05] rounded-full blur-[80px] group-hover:bg-accent/[0.12] transition-all duration-700 pointer-events-none"></div>

        <div class="relative z-10 p-8 flex flex-col h-full gap-6">

          <!-- Row 1: Status + Phase badges -->
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-black uppercase tracking-[0.18em] px-4 py-2 rounded-full \\\${isRecruiting ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}">
              \\\${isRecruiting ? (lang === 'en' ? 'Recruiting' : 'Reclutando') : (trial.status_label || 'Active')}
            </span>
            <span class="text-[10px] font-black uppercase tracking-[0.18em] text-\\\${phaseCol}-600 bg-\\\${phaseCol}-50 border border-\\\${phaseCol}-100 px-3 py-1.5 rounded-full">
              \\\${phase}
            </span>
          </div>

          <!-- Row 2: Drug tags -->
          \\\${tags.length ? \\\`
          <div class="flex flex-wrap gap-1.5">
            \\\${tags.map(t => \\\`<span class="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/5 text-accent border border-accent/10">\\\${t}</span>\\\`).join('')}
          </div>\\\` : ''}

          <!-- Row 3: Title + Summary -->
          <div class="flex-1 space-y-3">
            <h3 class="text-xl font-black text-primary group-hover:text-accent transition-colors leading-[1.25] tracking-tight">
              \\\${trial.title}
            </h3>
            <p class="text-slate-500 text-sm leading-relaxed line-clamp-3">
              \\\${summary}
            </p>
          </div>

          <!-- Row 4: Key facts -->
          <div class="space-y-2.5">
            <!-- Eligibility -->
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-accent/10 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\\\${lang === 'en' ? 'Who qualifies' : 'Qui\xE9n califica'}</div>
                <div class="text-sm font-bold text-slate-700 truncate">\\\${must.length ? must[0] : (trial.eligibility_age_range || 'Adults 18+')}</div>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-white group-hover:border-accent/10 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\\\${lang === 'en' ? 'Location' : 'Ubicaci\xF3n'}</div>
                <div class="text-sm font-bold text-slate-700 truncate">\\\${city}</div>
              </div>
            </div>

            <!-- Compensation (highlighted if paid) -->
            \\\${hasPay ? \\\`
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-100 group-hover:border-emerald-200 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-widest text-emerald-600">\\\${lang === 'en' ? 'You get paid' : 'Te pagan'}</div>
                <div class="text-sm font-black text-emerald-700 truncate">\\\${payAmt || (lang === 'en' ? 'Ask for details' : 'Consultar')}</div>
              </div>
            </div>\\\` : \\\`
            <div class="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-100 transition-all duration-300">
              <div class="w-9 h-9 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div>
                <div class="text-[9px] font-black uppercase tracking-widest text-slate-400">\\\${lang === 'en' ? 'Cost' : 'Costo'}</div>
                <div class="text-sm font-bold text-slate-600">\\\${lang === 'en' ? 'Free \u2013 no payment' : 'Gratis \u2013 sin pago'}</div>
              </div>
            </div>\\\`}
          </div>

          <!-- Row 5: Duration pill + CTA -->
          <div class="flex items-center gap-3 pt-2">
            \\\${duration ? \\\`<span class="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">\u23F1 \\\${duration}</span>\\\` : ''}
            <a href="/trial/\\\${trial.nct_id}" class="flex-1 inline-flex items-center justify-center gap-2 py-4 rounded-2xl bg-accent text-white font-black text-xs uppercase tracking-[0.25em] hover:bg-primary transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-primary/20 active:scale-95">
              \\\${lang === 'en' ? 'View & Apply' : 'Ver y Aplicar'}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>

        </div>
      </article>
    \\\`;
  }

  /* \u2500\u2500 API + state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
  async function fetchTrials(page = 1, filters = {}) {
    showLoading();
    try {
      const params = new URLSearchParams({ page, pageSize: '9' });
      if (filters.q)          params.set('q', filters.q);
      if (filters.location)   params.set('location', filters.location);
      if (filters.phase)      params.set('phase', filters.phase);
      if (filters.compensation !== undefined) params.set('compensation', filters.compensation);

      const res  = await fetch(\\\`/api/trials?\\\${params}\\\`);
      const data = await res.json();

      if (data.trials?.length) {
        renderTrials(data.trials);
        updateStats(data.trials.length, data.total);
        currentPage = data.page;
        totalPages  = data.totalPages || 1;
        updatePagination();
      } else {
        showEmpty();
      }
    } catch(e) {
      console.error(e);
      showEmpty();
    }
  }

  function showLoading() {
    trialsGrid.classList.add('hidden');
    emptyState.classList.add('hidden');
    pagination.classList.add('hidden');
    loadingState.classList.remove('hidden');
  }

  function showEmpty() {
    loadingState.classList.add('hidden');
    trialsGrid.classList.add('hidden');
    pagination.classList.add('hidden');
    emptyState.classList.remove('hidden');
  }

  function renderTrials(trials) {
    loadingState.classList.add('hidden');
    emptyState.classList.add('hidden');
    trialsGrid.classList.remove('hidden');
    pagination.classList.remove('hidden');
    trialsGrid.innerHTML = trials.map(renderCard).join('');
  }

  function updateStats(visible, total) {
    statsBar.innerHTML = \\\`
      <span class="text-xs font-medium text-slate-500">
        \\\${lang === 'en'
          ? \\\`Showing <strong>\\\${visible}</strong> of <strong>\\\${total || '?'}</strong> active weight loss trials\\\`
          : \\\`Mostrando <strong>\\\${visible}</strong> de <strong>\\\${total || '?'}</strong> ensayos activos\\\`}
      </span>
      <span class="text-slate-300 hidden sm:inline">|</span>
      <span class="text-xs font-bold text-accent hidden sm:inline">\u{1F52C} \\\${lang === 'en' ? 'AI-Enriched Data' : 'Datos con IA'}</span>
    \\\`;
  }

  function updatePagination() {
    pageInfo.textContent = \\\`\\\${lang === 'en' ? 'Page' : 'P\xE1gina'} \\\${currentPage} / \\\${totalPages}\\\`;
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= totalPages;
    if (totalPages <= 1) pagination.classList.add('hidden');
  }

  function debounce(fn, ms) {
    let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
  }

  function handleFilterChange() {
    currentFilters = {
      q: searchInput.value,
      location: locationFilter.value,
      phase: phaseFilter.value,
      compensation: compensationFilter.value === '' ? undefined : compensationFilter.value
    };
    currentPage = 1;
    fetchTrials(currentPage, currentFilters);
  }

  searchInput?.addEventListener('input', debounce(handleFilterChange, 300));
  locationFilter?.addEventListener('change', handleFilterChange);
  phaseFilter?.addEventListener('change', handleFilterChange);
  compensationFilter?.addEventListener('change', handleFilterChange);
  prevBtn?.addEventListener('click', () => { if (currentPage > 1) { currentPage--; fetchTrials(currentPage, currentFilters); }});
  nextBtn?.addEventListener('click', () => { if (currentPage < totalPages) { currentPage++; fetchTrials(currentPage, currentFilters); }});

  fetchTrials();
})();<\/script> `])), maybeRenderHead(), lang === "en" ? "Now Recruiting" : "Reclutando Ahora", lang === "en" ? "Weight Loss" : "Ensayos de", lang === "en" ? "Trials." : "P\xE9rdida de Peso.", lang === "en" ? "Every study below offers free access to cutting-edge treatments. Many pay up to $1,500. No insurance needed." : "Cada estudio ofrece acceso gratuito a tratamientos de vanguardia. Muchos pagan hasta $1,500. Sin seguro m\xE9dico.", addAttribute(lang === "en" ? "Search (Ozempic, GLP-1\u2026)" : "Buscar (Ozempic, GLP-1\u2026)", "placeholder"), lang === "en" ? "All Cities" : "Todas las Ciudades", lang === "en" ? "All Phases" : "Todas las Fases", lang === "en" ? "Phase 3 \u2013 Near Approval" : "Fase 3 \u2013 Casi aprobado", lang === "en" ? "Phase 2 \u2013 Efficacy" : "Fase 2 \u2013 Eficacia", lang === "en" ? "Phase 1 \u2013 Safety" : "Fase 1 \u2013 Seguridad", lang === "en" ? "All Studies" : "Todos", lang === "en" ? "\u{1F4B0} Paid Studies Only" : "\u{1F4B0} Solo estudios pagados", lang === "en" ? "No Payment" : "Sin pago", lang === "en" ? "Loading trials\u2026" : "Cargando ensayos\u2026", [1, 2, 3].map(() => renderTemplate`<div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 animate-pulse" data-astro-cid-avc55pib> <div class="flex gap-2 mb-6" data-astro-cid-avc55pib><div class="h-5 w-20 bg-slate-200 rounded-full" data-astro-cid-avc55pib></div><div class="h-5 w-16 bg-slate-100 rounded-full" data-astro-cid-avc55pib></div></div> <div class="h-7 bg-slate-200 rounded-xl w-3/4 mb-3" data-astro-cid-avc55pib></div> <div class="h-4 bg-slate-100 rounded w-full mb-2" data-astro-cid-avc55pib></div> <div class="h-4 bg-slate-100 rounded w-5/6 mb-8" data-astro-cid-avc55pib></div> <div class="space-y-3" data-astro-cid-avc55pib> <div class="h-12 bg-slate-100 rounded-2xl" data-astro-cid-avc55pib></div> <div class="h-12 bg-slate-100 rounded-2xl" data-astro-cid-avc55pib></div> </div> </div>`), lang === "en" ? "No trials found" : "No se encontraron ensayos", lang === "en" ? "Try adjusting your filters" : "Intenta ajustar los filtros", lang === "en" ? "Previous" : "Anterior", lang === "en" ? "Next" : "Siguiente", defineScriptVars({ lang }));
}, "C:/Users/Jorge/Documents/javi/src/components/StudiesGrid.astro", void 0);

const $$Astro$2 = createAstro();
const $$ParticipationPath = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ParticipationPath;
  const { lang = "en" } = Astro2.props;
  const content = lang === "en" ? {
    steps: [
      {
        title: "Registry Sign-Up",
        desc: "Submit your basic health profile via our secure and confidential portal.",
        icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      },
      {
        title: "Clinical Pre-Screening",
        desc: "Our medical team reviews your health profile.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2"
      },
      {
        title: "Contact",
        desc: "Our team will reach out if you are eligible.",
        icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      },
      {
        title: "Site Visit",
        desc: "We schedule a private appointment for you at the research clinic in New York City.",
        icon: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      },
      {
        title: "Informed Decision",
        desc: "Meet the doctor, review the informed consent, and decide if joining is right for you.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
      }
    ],
    whoTitle: "Who Can Participate?",
    whoDesc: "We are currently seeking candidates in the New York City area who meet the following criteria:",
    criteria: [
      "Adults between 18 and 75 years old.",
      "Body Mass Index (BMI) of 30 or higher (or 27+ with a related condition like High Blood Pressure, Diabetes mellitus, etc.).",
      "Have attempted to lose weight through diet and exercise without long-term success.",
      "Willing to attend clinic visits and follow the study protocol."
    ]
  } : {
    steps: [
      {
        title: "Registro en el Portal",
        desc: "Env\xEDe su perfil de salud b\xE1sico a trav\xE9s de nuestro portal seguro y confidencial.",
        icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      },
      {
        title: "Preselecci\xF3n Cl\xEDnica",
        desc: "Nuestro equipo m\xE9dico revisa su perfil de salud.",
        icon: "M22 12h-4l-3 9L9 3l-3 9H2"
      },
      {
        title: "Contacto",
        desc: "Nuestro equipo se pondr\xE1 en contacto si usted es elegible.",
        icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      },
      {
        title: "Visita al Centro",
        desc: "Programamos una cita privada para usted en la cl\xEDnica de investigaci\xF3n en la ciudad de Nueva York.",
        icon: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
      },
      {
        title: "Decisi\xF3n Informada",
        desc: "Conozca al m\xE9dico, revise el consentimiento informado y decida si participar es adecuado para usted.",
        icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
      }
    ],
    whoTitle: "\xBFQui\xE9n puede participar?",
    whoDesc: "Actualmente buscamos candidatos en el \xE1rea de la ciudad de Nueva York que cumplan con los siguientes criterios:",
    criteria: [
      "Adultos de entre 18 y 75 a\xF1os.",
      "\xCDndice de Masa Corporal (IMC) de 30 o m\xE1s (o 27+ con una condici\xF3n relacionada como Presi\xF3n Arterial Alta, Diabetes mellitus, etc.).",
      "Haber intentado perder peso mediante dieta y ejercicio sin \xE9xito a largo plazo.",
      "Disposici\xF3n para asistir a las visitas cl\xEDnicas y seguir el protocolo del estudio."
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="participation" class="section-padding bg-[#fdfdfe] relative overflow-hidden"> <!-- Aesthetic ambient elements --> <div class="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-[120px] -z-10"></div> <div class="container mx-auto px-4"> <!-- Participation Process --> <div class="mb-32"> <div class="max-w-3xl mx-auto text-center mb-20 animate-fade-in"> <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6"> <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> ${lang === "en" ? "Seamless Process" : "Proceso Fluido"} </div> <h2 class="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-primary"> ${lang === "en" ? "The Path to" : "El Camino a la"} <span class="text-gradient leading-tight">${lang === "en" ? "Participation." : "Participaci\xF3n."}</span> </h2> <p class="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"> ${lang === "en" ? "We guide you through every step of clinical research with transparency and personalized care." : "Le guiamos en cada paso de la investigaci\xF3n cl\xEDnica con transparencia y atenci\xF3n personalizada."} </p> </div> <div class="relative"> <!-- Connector line for desktop --> <div class="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8"> ${content.steps.map((step, index) => renderTemplate`<div class="relative group text-center animate-fade-in"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> <div class="w-28 h-28 rounded-[2.5rem] bg-white border border-slate-100 flex items-center justify-center mx-auto mb-8 relative z-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] group-hover:scale-110 group-hover:border-accent/40 group-hover:shadow-[0_40px_80px_-20px_rgba(0,163,129,0.1)] transition-all duration-700"> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-accent"><path${addAttribute(step.icon, "d")}></path></svg> <div class="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-primary text-white text-[10px] font-black flex items-center justify-center shadow-lg border-4 border-white">${index + 1}</div> </div> <h3 class="text-xl font-black mb-4 text-primary tracking-tighter group-hover:text-accent transition-colors">${step.title}</h3> <p class="text-[13px] text-slate-400 font-bold leading-relaxed max-w-[200px] mx-auto opacity-80">${step.desc}</p> </div>`)} </div> </div> </div> <!-- Who Can Participate --> <div class="max-w-5xl mx-auto"> <div class="bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-[0_60px_120px_-30px_rgba(0,33,71,0.08)] relative overflow-hidden group"> <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.02] via-transparent to-transparent"></div> <div class="text-center mb-16 relative z-10"> <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-6">
Global Eligibility
</div> <h2 class="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-primary">${content.whoTitle}</h2> <p class="text-slate-500 text-lg font-medium max-w-2xl mx-auto">${content.whoDesc}</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"> ${content.criteria.map((item) => renderTemplate`<div class="flex gap-6 p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-accent/20 hover:bg-white transition-all duration-500 group/item"> <div class="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-accent group-hover/item:text-white transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <p class="text-base text-slate-600 font-bold leading-relaxed">${item}</p> </div>`)} </div> <div class="mt-16 text-center relative z-10"> <a href="#contact" class="inline-flex items-center gap-4 text-primary font-black text-sm uppercase tracking-[0.3em] hover:text-accent transition-all group"> ${lang === "en" ? "Check your eligibility" : "Verifica tu elegibilidad"} <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-2 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> </a> </div> </div> </div> </div> </section>`;
}, "C:/Users/Jorge/Documents/javi/src/components/ParticipationPath.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang = "en" } = Astro2.props;
  const content = lang === "en" ? {
    subtitle: "Please answer a few basic questions to check your eligibility for current studies.",
    steps: [
      {
        title: "Basic Info",
        fields: [
          { label: "Date of birth", name: "dob", type: "date", required: true },
          { label: "Gender", name: "gender", type: "select", options: ["Male", "Female", "Non-binary", "Prefer not to say"], required: true }
        ]
      },
      {
        title: "Primary Goal",
        fields: [
          {
            label: "What is your primary goal for joining this program?",
            name: "goal",
            type: "radio",
            options: [
              "I want to maintain my current weight / I have no weight concerns.",
              "I am looking to lose a small amount (10\u201325 lbs).",
              "I need to lose a significant amount (30 lbs or more)."
            ],
            required: true
          }
        ]
      },
      {
        title: "Prescription History",
        fields: [
          {
            label: "Have you used any prescription medications for weight loss in the past 6 months?",
            name: "medications",
            type: "radio",
            options: [
              "Yes, currently taking.",
              "Used in the past, but stopped more than 3 months ago.",
              "Used in the past, but stopped less than 3 months ago.",
              "No, never used."
            ],
            required: true
          }
        ]
      },
      {
        title: "Interests",
        fields: [
          {
            label: "Besides Weight Management and Metabolic Health, are you interested in studies related to any of the following? (Select all that apply)",
            name: "interests",
            type: "checkbox",
            options: [
              "Blood Sugar / Metabolism",
              "Heart Health & Blood Pressure",
              "Liver Health",
              "Breathing & Lungs",
              "Skin Care & Health",
              "Cholesterol Management",
              "Sleep Health",
              "Kidney Function & Health",
              "Joint Pain & Mobility",
              "Mood & Brain",
              "None of the above"
            ],
            required: true
          }
        ]
      },
      {
        title: "Location",
        fields: [
          {
            label: "Are you willing to attend recurring study visits at leading research clinics in New York City?",
            name: "willing_to_visit",
            type: "radio",
            options: ["Yes", "No"],
            required: true
          },
          { label: "Zip Code", name: "zipcode", type: "text", placeholder: "10001", required: true }
        ]
      },
      {
        title: "Contact Info",
        fields: [
          { label: "First Name", name: "first_name", type: "text", required: true },
          { label: "Last Name", name: "last_name", type: "text", required: true },
          { label: "Phone", name: "phone", type: "tel", required: true },
          { label: "Email", name: "email", type: "email", required: true }
        ]
      }
    ],
    legal: 'By clicking "Submit," I authorize Echelon Clinical Research to contact me at the number provided above regarding current and future matching research opportunities. I understand these communications may be sent via text/SMS, email, or phone, and may utilize automated technology, including pre-recorded messages or artificial voice. I agree to the [Privacy Policy] and [Terms of Service]. Reply STOP to opt out.',
    buttons: {
      next: "Next Step",
      prev: "Previous",
      submit: "Submit"
    }} : {
    subtitle: "Responda algunas preguntas b\xE1sicas para verificar su elegibilidad para los estudios actuales.",
    steps: [
      {
        title: "Informaci\xF3n B\xE1sica",
        fields: [
          { label: "Fecha de nacimiento", name: "dob", type: "date", required: true },
          { label: "G\xE9nero", name: "gender", type: "select", options: ["Masculino", "Femenino", "No binario", "Prefiero no decirlo"], required: true }
        ]
      },
      {
        title: "Objetivo Principal",
        fields: [
          {
            label: "\xBFCu\xE1l es su objetivo principal al unirse a este programa?",
            name: "goal",
            type: "radio",
            options: [
              "Quiero mantener mi peso actual / No tengo preocupaciones de peso.",
              "Busco perder una peque\xF1a cantidad (10\u201325 lbs).",
              "Necesito perder una cantidad significativa (30 lbs o m\xE1s)."
            ],
            required: true
          }
        ]
      },
      {
        title: "Historial de Medicamentos",
        fields: [
          {
            label: "\xBFHa usado alg\xFAn medicamento recetado para perder peso en los \xFAltimos 6 meses?",
            name: "medications",
            type: "radio",
            options: [
              "S\xED, los tomo actualmente.",
              "Usado en el pasado, pero dej\xE9 de tomarlo hace m\xE1s de 3 meses.",
              "Usado en el pasado, pero dej\xE9 de tomarlo hace menos de 3 meses.",
              "No, nunca usado."
            ],
            required: true
          }
        ]
      },
      {
        title: "Intereses",
        fields: [
          {
            label: "Adem\xE1s del control de peso y la salud metab\xF3lica, \xBFle interesan estudios relacionados con alguno de los siguientes? (Seleccione todos los que correspondan)",
            name: "interests",
            type: "checkbox",
            options: [
              "Az\xFAcar en Sangre / Metabolismo",
              "Salud del Coraz\xF3n y Presi\xF3n Arterial",
              "Salud del H\xEDgado",
              "Respiraci\xF3n y Pulmones",
              "Cuidado de la Piel y Salud",
              "Control del Colesterol",
              "Salud del Sue\xF1o",
              "Funci\xF3n Renal y Salud",
              "Dolor Articular y Movilidad",
              "Estado de \xC1nimo y Cerebro",
              "Ninguno de los anteriores"
            ],
            required: true
          }
        ]
      },
      {
        title: "Ubicaci\xF3n",
        fields: [
          {
            label: "\xBFEst\xE1 dispuesto a asistir a visitas recurrentes del estudio en cl\xEDnicas de investigaci\xF3n l\xEDderes en la ciudad de Nueva York?",
            name: "willing_to_visit",
            type: "radio",
            options: ["S\xED", "No"],
            required: true
          },
          { label: "C\xF3digo Postal", name: "zipcode", type: "text", placeholder: "10001", required: true }
        ]
      },
      {
        title: "Informaci\xF3n de Contacto",
        fields: [
          { label: "Nombre", name: "first_name", type: "text", required: true },
          { label: "Apellido", name: "last_name", type: "text", required: true },
          { label: "Tel\xE9fono", name: "phone", type: "tel", required: true },
          { label: "Correo Electr\xF3nico", name: "email", type: "email", required: true }
        ]
      }
    ],
    legal: 'Al hacer clic en "Enviar", autorizo a Echelon Clinical Research a contactarme al n\xFAmero proporcionado anteriormente con respecto a las oportunidades de investigaci\xF3n actuales y futuras que coincidan. Entiendo que estas comunicaciones pueden enviarse a trav\xE9s de mensajes de texto/SMS, correo electr\xF3nico o tel\xE9fono, y pueden utilizar tecnolog\xEDa automatizada, incluidos mensajes pregrabados o voz artificial. Acepto la [Pol\xEDtica de Privacidad] y los [T\xE9rminos de Servicio]. Responda STOP para darse de baja.',
    buttons: {
      next: "Siguiente Paso",
      prev: "Anterior",
      submit: "Enviar"
    }};
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="section-padding relative overflow-hidden bg-slate-50/20"> <!-- Luxury Ambient Orbs --> <div class="absolute -top-20 -right-20 w-[600px] h-[600px] bg-accent/[0.08] rounded-full blur-[120px] -z-10 animate-float"></div> <div class="absolute -bottom-20 -left-20 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px] -z-10 animate-float" style="animation-delay: 2s;"></div> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto bg-white rounded-[4rem] p-10 md:p-20 border border-slate-100 shadow-[0_80px_160px_-40px_rgba(0,163,129,0.12)] relative group"> <!-- Luxury Internal Glow --> <div class="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent pointer-events-none rounded-[4rem]"></div> <!-- Form Header --> <div class="text-center mb-20 relative z-10"> <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-8">
Secure Registration
</div> <h2 class="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-primary"> ${lang === "en" ? "Join the" : "\xDAnete al"} <span class="text-gradient">${lang === "en" ? "Registry." : "Registro."}</span> </h2> <p class="text-slate-500 text-lg md:text-xl max-w-xl mx-auto font-medium opacity-80">${content.subtitle}</p> </div> <form id="multi-step-form" name="registry" method="POST" class="space-y-12 md:space-y-16 relative z-10"> <input type="hidden" name="form-name" value="registry"> <!-- Precision Progress Indicator --> <div class="relative flex justify-between items-center mb-20 px-4"> <!-- Main Progress Track --> <div class="absolute top-6 left-12 right-12 h-[2px] bg-slate-100 -z-10 overflow-hidden"> <div id="progress-line" class="h-full bg-accent transition-all duration-1000 ease-out" style="width: 0%"></div> </div> ${content.steps.map((step, i) => renderTemplate`<div class="flex flex-col items-center gap-4 group relative z-10"${addAttribute(i, "data-step-nav")}> <div${addAttribute(`step-indicator w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-700 border-2 
                  ${i === 0 ? "bg-accent border-accent text-white shadow-2xl shadow-accent/30 scale-110" : "bg-white border-slate-100 text-slate-300"}`, "class")}${addAttribute(i, "data-index")}> ${i + 1} </div> <span${addAttribute(`hidden xs:block text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${i === 0 ? "text-accent" : "text-slate-300"}`, "class")}> ${step.title.split(" ")[0]} </span> </div>`)} </div> <!-- Dynamic Form Stages --> <div class="form-steps-container"> ${content.steps.map((step, i) => renderTemplate`<div${addAttribute(`form-step space-y-10 md:space-y-12 transition-all duration-700 ${i === 0 ? "block opacity-100" : "hidden opacity-0 h-0 overflow-hidden"}`, "class")}${addAttribute(i, "data-step")}> <div class="flex items-center gap-6 mb-4"> <span class="w-12 h-1 bg-accent/20 rounded-full"></span> <h3 class="text-xl md:text-2xl font-black text-primary tracking-tighter uppercase tracking-[0.1em]">${step.title}</h3> </div> <div class="grid grid-cols-1 gap-8 md:gap-12"> ${step.fields.map((field) => renderTemplate`<div class="space-y-5 group"> <label class="block text-base font-black text-primary/70 ml-1 group-has-[:focus]:text-accent transition-colors tracking-tighter"> ${field.label} ${field.required && renderTemplate`<span class="text-accent">*</span>`} </label> ${field.type === "select" ? renderTemplate`<div class="relative"> <select${addAttribute(field.name, "name")}${addAttribute(field.required, "required")} class="w-full bg-slate-50/50 border border-slate-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:ring-[6px] focus:ring-accent/5 focus:border-accent/40 transition-all text-primary appearance-none text-lg font-bold shadow-sm hover:bg-white"> <option value="" disabled selected>${lang === "en" ? "Select Option" : "Seleccione"}</option> ${field.options?.map((opt) => renderTemplate`<option${addAttribute(opt, "value")}>${opt}</option>`)} </select> <div class="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg> </div> </div>` : field.type === "radio" ? renderTemplate`<div class="grid grid-cols-1 gap-4"> ${field.options?.map((opt) => renderTemplate`<label class="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group/radio active:scale-[0.98]"> <div class="relative flex items-center justify-center w-7 h-7 rounded-full border-[3px] border-slate-100 group-has-[:checked]:border-accent group-has-[:checked]:bg-accent transition-all duration-500"> <input type="radio"${addAttribute(field.name, "name")}${addAttribute(opt, "value")}${addAttribute(field.required, "required")} class="sr-only"> <div class="w-2.5 h-2.5 rounded-full bg-white opacity-0 group-has-[:checked]:opacity-100"></div> </div> <span class="text-lg font-black text-slate-400 group-has-[:checked]:text-primary transition-colors tracking-tighter">${opt}</span> </label>`)} </div>` : field.type === "checkbox" ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-5"> ${field.options?.map((opt) => renderTemplate`<label class="flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group/check active:scale-[0.98]"> <div class="relative flex items-center justify-center w-7 h-7 rounded-xl border-[3px] border-slate-100 group-has-[:checked]:border-accent group-has-[:checked]:bg-accent transition-all duration-500"> <input type="checkbox"${addAttribute(field.name, "name")}${addAttribute(opt, "value")} class="sr-only"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="opacity-0 group-has-[:checked]:opacity-100 transition-opacity"><polyline points="20 6 9 17 4 12"></polyline></svg> </div> <span class="text-xs font-black text-slate-400 group-has-[:checked]:text-primary leading-tight transition-colors tracking-[0.05em]">${opt}</span> </label>`)} </div>` : renderTemplate`<input${addAttribute(field.type, "type")}${addAttribute(field.name, "name")}${addAttribute(field.required, "required")}${addAttribute(field.placeholder || "", "placeholder")} class="w-full bg-slate-50/50 border border-slate-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:ring-[6px] focus:ring-accent/5 focus:border-accent/40 transition-all text-primary placeholder:text-slate-200 text-lg font-bold shadow-sm hover:bg-white">`} </div>`)} </div> ${i === content.steps.length - 1 && renderTemplate`<div class="pt-8 space-y-8"> <div class="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 text-sm leading-relaxed text-slate-400 font-bold opacity-80"> <p>${content.legal}</p> </div> </div>`} </div>`)} </div> <!-- Global Navigation --> <div class="flex flex-col sm:flex-row gap-6 pt-10"> <button type="button" id="prev-btn" class="hidden flex-1 py-7 rounded-2xl bg-slate-50 border border-slate-100 text-slate-400 font-black text-xs uppercase tracking-[0.3em] hover:bg-slate-100 transition-all active:scale-95 shadow-sm"> ${content.buttons.prev} </button> <button type="button" id="next-btn" class="flex-1 py-7 rounded-2xl bg-primary text-white font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_-10px_rgba(0,33,71,0.3)] hover:scale-[1.02] active:scale-95 transition-all"> ${content.buttons.next} </button> <button type="submit" id="submit-btn" class="hidden flex-1 py-7 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_-10px_rgba(0,163,129,0.3)] hover:scale-[1.02] active:scale-95 transition-all"> ${content.buttons.submit} </button> </div> </form> </div> </div></section> ${renderScript($$result, "C:/Users/Jorge/Documents/javi/src/components/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Jorge/Documents/javi/src/components/Contact.astro", void 0);

const $$Astro = createAstro();
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { lang = "en" } = Astro2.props;
  const content = lang === "en" ? {
    subtitle: "Learn how clinical trials work and what to expect when participating in medical progress.",
    faq: [
      {
        question: "What are clinical trials?",
        answer: "A clinical trial is a research study to answer specific questions about new treatments or vaccines for a health-related condition. Clinical trials are used to determine whether new drugs or treatments are both safe and effective and are also used to determine the best way to use a standard treatment. All clinical trials are based on a set of rules called a protocol, which describes what types of people may participate, the schedule and doses of the treatment, and the length of the study."
      },
      {
        question: "How are clinical trials for medications structured?",
        answer: `Clinical trials for medications proceed through four phases:
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Phase I</span>
            <p class="text-xs text-muted-foreground">Researchers test in a small group (20-80) for the first time to evaluate safety, dosage, and side effects.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Phase II</span>
            <p class="text-xs text-muted-foreground">The treatment is given to a larger group (100-300) to see if it is effective and further evaluate safety.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Phase III</span>
            <p class="text-xs text-muted-foreground">Given to large groups (1,000-3,000) to confirm effectiveness, monitor effects, and compare to standard treatments.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Phase IV</span>
            <p class="text-xs text-muted-foreground">Done after marketing to collect info on long-term use and effects in various populations.</p>
          </div>
        </div>`
      },
      {
        question: "Does it cost anything to participate?",
        answer: "No. Qualified participants never pay for care related to the study. All study-related medications, doctor visits, and health monitoring are provided at no cost. You do not need health insurance to join."
      },
      {
        question: "Is compensation provided for my time?",
        answer: "Yes. Most clinical trials offer compensation to cover your time and travel expenses for each clinic visit. The specific amount varies by study, and details will be fully disclosed to you before you sign any consent forms."
      },
      {
        question: "Will I receive a placebo (sugar pill)?",
        answer: "It depends on the specific study protocol. Some studies compare a new treatment against a placebo, while others compare it against an existing standard medication. However, you will always be informed of the probability of receiving a placebo during the informed consent process."
      },
      {
        question: "Is Clinical Research safe?",
        answer: "Patient safety is the top priority. All studies in our network are regulated by the FDA and monitored by an Independent Review Board (IRB) to ensure ethical standards are met. You will be under the close supervision of top board certified physicians who monitor your health throughout the entire process."
      },
      {
        question: "Can I leave the study if I change my mind?",
        answer: "Absolutely. Participation is 100% voluntary. You have the right to withdraw from a clinical trial at any time, for any reason, with no penalty to your future medical care."
      },
      {
        question: "Will my personal information be kept private?",
        answer: "Yes. Echelon Studies and our partner clinics adhere to strict protocols and regulations. Your personal information is only shared with the specific medical staff evaluating your eligibility. We do not sell your medical data to advertisers."
      },
      {
        question: "Why clinical trials are important?",
        answer: "Clinical trials ensure treatments are safe and effective based on evidence. They transform scientific discovery into reliable medical solutions. One key reason to participate is knowing you contribute to new treatments for people with the same condition."
      },
      {
        question: "How you are protected when you participate?",
        answer: "Every trial in the US must be approved and monitored by an Institutional Review Board (IRB) to ensure risks are low and ethically sound. Research staff also provide informed consent documents detailing all risks and study procedures before you join."
      },
      {
        question: "What can I expect?",
        answer: "Before joining, you must qualify based on factors like age and medical history. Once you start, a team will check your health, give instructions on responsibilities, and monitor you closely during and after the study."
      }
    ]
  } : {
    subtitle: "Aprenda c\xF3mo funcionan los ensayos cl\xEDnicos y qu\xE9 esperar al participar en el progreso m\xE9dico.",
    faq: [
      {
        question: "\xBFQu\xE9 son los ensayos cl\xEDnicos?",
        answer: "Un ensayo cl\xEDnico es un estudio de investigaci\xF3n para responder preguntas espec\xEDficas sobre nuevos tratamientos o vacunas para una condici\xF3n de salud. Se utilizan para determinar si los nuevos medicamentos son seguros y efectivos, y la mejor manera de usar un tratamiento est\xE1ndar. Todos se basan en un protocolo que describe qui\xE9n puede participar, el cronograma, las dosis y la duraci\xF3n del estudio."
      },
      {
        question: "\xBFC\xF3mo se estructuran los ensayos cl\xEDnicos?",
        answer: `Los ensayos cl\xEDnicos para medicamentos pasan por cuatro fases:
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Fase I</span>
            <p class="text-xs text-muted-foreground">Se prueba en un grupo peque\xF1o (20-80) por primera vez para evaluar seguridad, dosis y efectos secundarios.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Fase II</span>
            <p class="text-xs text-muted-foreground">Se administra a un grupo m\xE1s grande (100-300) para ver si es efectivo y evaluar m\xE1s la seguridad.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Fase III</span>
            <p class="text-xs text-muted-foreground">Se administra a grupos grandes (1,000-3,000) para confirmar efectividad y monitorear efectos secundarios.</p>
          </div>
          <div class="p-4 rounded-xl bg-white/5 border border-white/5">
            <span class="text-primary font-bold block mb-1">Fase IV</span>
            <p class="text-xs text-muted-foreground">Se realiza despu\xE9s de la comercializaci\xF3n para recopilar informaci\xF3n sobre el uso a largo plazo.</p>
          </div>
        </div>`
      },
      {
        question: "\xBFTiene alg\xFAn costo participar?",
        answer: "No. Los participantes calificados nunca pagan por la atenci\xF3n relacionada con el estudio. Todo se proporciona sin costo: medicamentos, visitas al m\xE9dico y monitoreo de salud. No necesita seguro m\xE9dico para unirse."
      },
      {
        question: "\xBFSe ofrece compensaci\xF3n por mi tiempo?",
        answer: "S\xED. La mayor\xEDa de los ensayos cl\xEDnicos ofrecen compensaci\xF3n para cubrir su tiempo y gastos de viaje por cada visita a la cl\xEDnica. El monto var\xEDa seg\xFAn el estudio y se le informar\xE1 detalladamente antes de firmar cualquier consentimiento."
      },
      {
        question: "\xBFRecibir\xE9 un placebo (pastilla de az\xFAcar)?",
        answer: "Depende del protocolo. Algunos estudios comparan un tratamiento con un placebo, otros con un medicamento est\xE1ndar existente. Siempre se le informar\xE1 la probabilidad de recibir un placebo durante el proceso de consentimiento informado."
      },
      {
        question: "\xBFEs segura la Investigaci\xF3n Cl\xEDnica?",
        answer: "La seguridad del paciente es la prioridad. Todos los estudios en nuestra red est\xE1n regulados por la FDA y monitoreados por una Junta de Revisi\xF3n Independiente (IRB). Estar\xE1 bajo la supervisi\xF3n de m\xE9dicos certificados que monitorear\xE1n su salud constantemente."
      },
      {
        question: "\xBFPuedo dejar el estudio si cambio de opini\xF3n?",
        answer: "Absolutamente. La participaci\xF3n es 100% voluntaria. Tiene derecho a retirarse de un ensayo cl\xEDnico en cualquier momento y por cualquier motivo, sin penalizaci\xF3n para su futura atenci\xF3n m\xE9dica."
      },
      {
        question: "\xBFSe mantendr\xE1 privada mi informaci\xF3n personal?",
        answer: "S\xED. Echelon Studies y nuestras cl\xEDnicas adherimos a protocolos estrictos. Su informaci\xF3n solo se comparte con el personal m\xE9dico espec\xEDfico que eval\xFAa su elegibilidad. No vendemos sus datos m\xE9dicos."
      },
      {
        question: "\xBFPor qu\xE9 son importantes los ensayos cl\xEDnicos?",
        answer: "Son la base para garantizar que los tratamientos sean seguros y efectivos basados en evidencia. Sin ellos, la medicina se basar\xEDa en suposiciones. Al participar, contribuye al desarrollo de nuevos tratamientos para otras personas."
      },
      {
        question: "\xBFC\xF3mo se le protege al participar?",
        answer: "Cada ensayo en los EE. UU. debe ser aprobado y monitoreado por una Junta de Revisi\xF3n Institucional (IRB). Adem\xE1s, recibir\xE1 documentos de consentimiento informado que describen el estudio, los riesgos y sus derechos antes de unirse."
      },
      {
        question: "\xBFQu\xE9 puedo esperar?",
        answer: "Antes de unirse, debe calificar seg\xFAn factores como edad e historial m\xE9dico. Al comenzar, un equipo verificar\xE1 su salud, le dar\xE1 instrucciones y le monitorear\xE1 de cerca durante y despu\xE9s del estudio."
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="section-padding bg-white relative overflow-hidden"> <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] -z-10 shadow-inner"></div> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-20 animate-fade-in"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent text-[9px] font-black uppercase tracking-[0.3em] mb-6">
Patient Education
</div> <h2 class="text-4xl md:text-7xl font-black mb-6 tracking-tighter text-primary"> ${lang === "en" ? "Common" : "Preguntas"} <span class="text-gradient leading-tight">${lang === "en" ? "Questions." : "Frecuentes."}</span> </h2> <p class="text-slate-500 text-lg md:text-xl font-medium opacity-80">${content.subtitle}</p> </div> <div class="space-y-6"> ${content.faq.map((item, i) => renderTemplate`<div class="faq-item group"> <button class="w-full flex items-center justify-between p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 text-left transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_40px_-10px_rgba(0,163,129,0.08)] group-[.active]:border-accent group-[.active]:shadow-[0_30px_60px_-15px_rgba(0,163,129,0.12)]" aria-expanded="false" data-faq-btn> <span class="text-lg md:text-xl font-black text-primary pr-8 leading-tight group-[.active]:text-accent transition-colors">${item.question}</span> <div class="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-[.active]:bg-accent group-[.active]:border-accent group-[.active]:text-white transition-all duration-500"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-500 group-[.active]:rotate-180"><path d="m6 9 6 6 6-6"></path></svg> </div> </button> <div class="faq-answer max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out"> <div class="p-10 pt-2 text-slate-500 text-lg leading-relaxed font-medium">${unescapeHTML(item.answer.replace(/p-4 rounded-xl bg-white\/5 border border-white\/5/g, "p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-all duration-500").replace(/text-primary font-bold block mb-1/g, "text-accent font-black uppercase text-[10px] tracking-widest block mb-2").replace(/text-muted-foreground/g, "text-slate-500"))}</div> </div> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "C:/Users/Jorge/Documents/javi/src/components/FAQ.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Jorge/Documents/javi/src/components/FAQ.astro", void 0);

export { $$Hero as $, $$DetailedMission as a, $$StudiesGrid as b, $$ParticipationPath as c, $$FAQ as d, $$Contact as e };
