globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createComponent, r as renderTemplate, l as defineScriptVars, g as addAttribute, m as maybeRenderHead, h as createAstro, k as renderComponent } from '../../chunks/astro/server_BuTsxHe0.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../../chunks/Footer_Dy51zm1x.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$ChatBot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ChatBot;
  const { lang = "en" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Chat Button -->", '<button id="chat-toggle" class="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-accent text-white shadow-2xl shadow-accent/30 flex items-center justify-center hover:scale-110 transition-transform z-50 group" aria-label="Open chat" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform" data-astro-cid-7papdsbo> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-7papdsbo></path> </svg> <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse" data-astro-cid-7papdsbo>AI</span> </button> <!-- Chat Window --> <div id="chat-window" class="fixed bottom-28 right-8 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-[2rem] shadow-2xl shadow-slate-900/20 z-50 flex flex-col border border-slate-100 transform scale-95 opacity-0 pointer-events-none transition-all duration-300" data-astro-cid-7papdsbo> <!-- Header --> <div class="flex items-center justify-between p-6 border-b border-slate-100" data-astro-cid-7papdsbo> <div class="flex items-center gap-3" data-astro-cid-7papdsbo> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-7papdsbo></path> <path d="M2 17l10 5 10-5" data-astro-cid-7papdsbo></path> <path d="M2 12l10 5 10-5" data-astro-cid-7papdsbo></path> </svg> </div> <div data-astro-cid-7papdsbo> <h3 class="font-bold text-slate-800" data-astro-cid-7papdsbo>TrialGuide AI</h3> <p class="text-xs text-slate-400" data-astro-cid-7papdsbo>Clinical trials expert</p> </div> </div> <button id="chat-close" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-7papdsbo></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-7papdsbo></line> </svg> </button> </div> <!-- Messages --> <div id="chat-messages" class="flex-1 overflow-y-auto p-6 space-y-4" data-astro-cid-7papdsbo> <!-- Welcome Message --> <div class="flex gap-3" data-astro-cid-7papdsbo> <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-7papdsbo></path> </svg> </div> <div class="bg-slate-50 rounded-2xl rounded-tl-sm p-4 max-w-[80%]" data-astro-cid-7papdsbo> <p class="text-sm text-slate-700" data-astro-cid-7papdsbo> ', ' </p> <div class="flex flex-wrap gap-2 mt-3" data-astro-cid-7papdsbo> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> </div> </div> </div> </div> <!-- Input --> <div class="p-4 border-t border-slate-100" data-astro-cid-7papdsbo> <form id="chat-form" class="flex gap-2" data-astro-cid-7papdsbo> <input type="text" id="chat-input"', ' class="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" data-astro-cid-7papdsbo> <button type="submit" class="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50" id="chat-send" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-7papdsbo></line> <polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-7papdsbo></polygon> </svg> </button> </form> <p class="text-[10px] text-slate-400 text-center mt-2" data-astro-cid-7papdsbo> ', " </p> </div> </div> <script>(function(){", `
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const chatSend = document.getElementById('chat-send');

  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
      chatWindow.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
      chatToggle.classList.add('scale-0');
      setTimeout(() => chatInput.focus(), 100);
    } else {
      chatWindow.classList.add('scale-95', 'opacity-0', 'pointer-events-none');
      chatWindow.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
      chatToggle.classList.remove('scale-0');
    }
  }

  chatToggle?.addEventListener('click', toggleChat);
  chatClose?.addEventListener('click', toggleChat);

  // Suggestion buttons
  document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = e.target.textContent;
      chatInput.value = text;
      handleSubmit(e);
    });
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    chatSend.disabled = true;

    // Show typing indicator
    const typingId = addTypingIndicator();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      removeTypingIndicator(typingId);

      if (response.ok) {
        const data = await response.json();
        addMessage(data.response, 'ai');
      } else {
        addMessage(lang === 'en' 
          ? "Sorry, I'm having trouble connecting. Please try again."
          : "Lo siento, estoy teniendo problemas de conexi\xF3n. Por favor intenta de nuevo.", 
          'ai', true
        );
      }
    } catch (error) {
      removeTypingIndicator(typingId);
      addMessage(lang === 'en'
        ? "Sorry, I couldn't process your request. Please try again."
        : "Lo siento, no pude procesar tu solicitud. Por favor intenta de nuevo.",
        'ai', true
      );
    } finally {
      chatSend.disabled = false;
    }
  }

  function addMessage(text, sender, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex gap-3 animate-fade-in';
    
    if (sender === 'user') {
      messageDiv.innerHTML = \`
        <div class="ml-auto bg-accent text-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
          <p class="text-sm">\${escapeHtml(text)}</p>
        </div>
      \`;
    } else {
      messageDiv.innerHTML = \`
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          </svg>
        </div>
        <div class="\${isError ? 'bg-red-50 border border-red-100' : 'bg-slate-50'} rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
          <p class="text-sm text-slate-700">\${formatResponse(text)}</p>
        </div>
      \`;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addTypingIndicator() {
    const id = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'flex gap-3';
    typingDiv.innerHTML = \`
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        </svg>
      </div>
      <div class="bg-slate-50 rounded-2xl rounded-tl-sm p-4">
        <div class="flex gap-1">
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        </div>
      </div>
    \`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatResponse(text) {
    // Convertir URLs en enlaces
    return escapeHtml(text)
      .replace(/\\n/g, '<br>')
      .replace(/(https?:\\/\\/[^\\s]+)/g, '<a href="$1" target="_blank" rel="noopener" class="text-accent hover:underline">$1</a>');
  }

  chatForm?.addEventListener('submit', handleSubmit);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleChat();
    }
  });
})();<\/script> `], ["<!-- Chat Button -->", '<button id="chat-toggle" class="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-accent text-white shadow-2xl shadow-accent/30 flex items-center justify-center hover:scale-110 transition-transform z-50 group" aria-label="Open chat" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:rotate-12 transition-transform" data-astro-cid-7papdsbo> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" data-astro-cid-7papdsbo></path> </svg> <span class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse" data-astro-cid-7papdsbo>AI</span> </button> <!-- Chat Window --> <div id="chat-window" class="fixed bottom-28 right-8 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-[2rem] shadow-2xl shadow-slate-900/20 z-50 flex flex-col border border-slate-100 transform scale-95 opacity-0 pointer-events-none transition-all duration-300" data-astro-cid-7papdsbo> <!-- Header --> <div class="flex items-center justify-between p-6 border-b border-slate-100" data-astro-cid-7papdsbo> <div class="flex items-center gap-3" data-astro-cid-7papdsbo> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-7papdsbo></path> <path d="M2 17l10 5 10-5" data-astro-cid-7papdsbo></path> <path d="M2 12l10 5 10-5" data-astro-cid-7papdsbo></path> </svg> </div> <div data-astro-cid-7papdsbo> <h3 class="font-bold text-slate-800" data-astro-cid-7papdsbo>TrialGuide AI</h3> <p class="text-xs text-slate-400" data-astro-cid-7papdsbo>Clinical trials expert</p> </div> </div> <button id="chat-close" class="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-7papdsbo></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-7papdsbo></line> </svg> </button> </div> <!-- Messages --> <div id="chat-messages" class="flex-1 overflow-y-auto p-6 space-y-4" data-astro-cid-7papdsbo> <!-- Welcome Message --> <div class="flex gap-3" data-astro-cid-7papdsbo> <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <path d="M12 2L2 7l10 5 10-5-10-5z" data-astro-cid-7papdsbo></path> </svg> </div> <div class="bg-slate-50 rounded-2xl rounded-tl-sm p-4 max-w-[80%]" data-astro-cid-7papdsbo> <p class="text-sm text-slate-700" data-astro-cid-7papdsbo> ', ' </p> <div class="flex flex-wrap gap-2 mt-3" data-astro-cid-7papdsbo> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> <button class="suggestion-btn text-xs px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-accent hover:text-accent transition-colors" data-astro-cid-7papdsbo> ', ' </button> </div> </div> </div> </div> <!-- Input --> <div class="p-4 border-t border-slate-100" data-astro-cid-7papdsbo> <form id="chat-form" class="flex gap-2" data-astro-cid-7papdsbo> <input type="text" id="chat-input"', ' class="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" data-astro-cid-7papdsbo> <button type="submit" class="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50" id="chat-send" data-astro-cid-7papdsbo> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-7papdsbo> <line x1="22" y1="2" x2="11" y2="13" data-astro-cid-7papdsbo></line> <polygon points="22 2 15 22 11 13 2 9 22 2" data-astro-cid-7papdsbo></polygon> </svg> </button> </form> <p class="text-[10px] text-slate-400 text-center mt-2" data-astro-cid-7papdsbo> ', " </p> </div> </div> <script>(function(){", `
  const chatToggle = document.getElementById('chat-toggle');
  const chatWindow = document.getElementById('chat-window');
  const chatClose = document.getElementById('chat-close');
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const chatSend = document.getElementById('chat-send');

  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.remove('scale-95', 'opacity-0', 'pointer-events-none');
      chatWindow.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
      chatToggle.classList.add('scale-0');
      setTimeout(() => chatInput.focus(), 100);
    } else {
      chatWindow.classList.add('scale-95', 'opacity-0', 'pointer-events-none');
      chatWindow.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
      chatToggle.classList.remove('scale-0');
    }
  }

  chatToggle?.addEventListener('click', toggleChat);
  chatClose?.addEventListener('click', toggleChat);

  // Suggestion buttons
  document.querySelectorAll('.suggestion-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = e.target.textContent;
      chatInput.value = text;
      handleSubmit(e);
    });
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (!message) return;

    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    chatSend.disabled = true;

    // Show typing indicator
    const typingId = addTypingIndicator();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      removeTypingIndicator(typingId);

      if (response.ok) {
        const data = await response.json();
        addMessage(data.response, 'ai');
      } else {
        addMessage(lang === 'en' 
          ? "Sorry, I'm having trouble connecting. Please try again."
          : "Lo siento, estoy teniendo problemas de conexi\xF3n. Por favor intenta de nuevo.", 
          'ai', true
        );
      }
    } catch (error) {
      removeTypingIndicator(typingId);
      addMessage(lang === 'en'
        ? "Sorry, I couldn't process your request. Please try again."
        : "Lo siento, no pude procesar tu solicitud. Por favor intenta de nuevo.",
        'ai', true
      );
    } finally {
      chatSend.disabled = false;
    }
  }

  function addMessage(text, sender, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex gap-3 animate-fade-in';
    
    if (sender === 'user') {
      messageDiv.innerHTML = \\\`
        <div class="ml-auto bg-accent text-white rounded-2xl rounded-tr-sm p-4 max-w-[80%]">
          <p class="text-sm">\\\${escapeHtml(text)}</p>
        </div>
      \\\`;
    } else {
      messageDiv.innerHTML = \\\`
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          </svg>
        </div>
        <div class="\\\${isError ? 'bg-red-50 border border-red-100' : 'bg-slate-50'} rounded-2xl rounded-tl-sm p-4 max-w-[80%]">
          <p class="text-sm text-slate-700">\\\${formatResponse(text)}</p>
        </div>
      \\\`;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addTypingIndicator() {
    const id = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = id;
    typingDiv.className = 'flex gap-3';
    typingDiv.innerHTML = \\\`
      <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        </svg>
      </div>
      <div class="bg-slate-50 rounded-2xl rounded-tl-sm p-4">
        <div class="flex gap-1">
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span>
          <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
        </div>
      </div>
    \\\`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function formatResponse(text) {
    // Convertir URLs en enlaces
    return escapeHtml(text)
      .replace(/\\\\n/g, '<br>')
      .replace(/(https?:\\\\/\\\\/[^\\\\s]+)/g, '<a href="$1" target="_blank" rel="noopener" class="text-accent hover:underline">$1</a>');
  }

  chatForm?.addEventListener('submit', handleSubmit);

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleChat();
    }
  });
})();<\/script> `])), maybeRenderHead(), lang === "en" ? "Hi! I'm TrialGuide, your clinical trials assistant. I can help you understand weight loss trials, explain treatments like GLP-1 medications, or answer questions about participation. What would you like to know?" : "\xA1Hola! Soy TrialGuide, tu asistente de ensayos cl\xEDnicos. Puedo ayudarte a entender los ensayos de p\xE9rdida de peso, explicar tratamientos como los medicamentos GLP-1, o responder preguntas sobre la participaci\xF3n. \xBFQu\xE9 te gustar\xEDa saber?", lang === "en" ? "What are GLP-1 drugs?" : "\xBFQu\xE9 son los f\xE1rmacos GLP-1?", lang === "en" ? "How much do trials pay?" : "\xBFCu\xE1nto pagan los ensayos?", lang === "en" ? "Are trials safe?" : "\xBFSon seguros los ensayos?", addAttribute(lang === "en" ? "Type your question..." : "Escribe tu pregunta...", "placeholder"), lang === "en" ? "AI-generated responses. Not medical advice." : "Respuestas generadas por IA. No es consejo m\xE9dico.", defineScriptVars({ lang }));
}, "C:/Users/Jorge/Documents/javi/src/components/ChatBot.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$PreScreener = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PreScreener;
  const { trial, lang = "en" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-lg shadow-slate-200/30"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-10"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> ', ' </div> <h2 class="text-3xl font-black text-primary mb-4"> ', ' </h2> <p class="text-slate-500"> ', ' </p> </div> <!-- Progress --> <div class="mb-8"> <div class="flex justify-between text-xs font-bold text-slate-400 mb-2"> <span id="progress-text">', '</span> <span id="progress-percent">20%</span> </div> <div class="h-2 bg-slate-100 rounded-full overflow-hidden"> <div id="progress-bar" class="h-full bg-accent rounded-full transition-all duration-300" style="width: 20%"></div> </div> </div> <!-- Form --> <form id="prescreen-form" class="space-y-6"> <!-- Question 1: Age --> <div class="question-step" data-step="1"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="grid grid-cols-3 gap-3"> <label class="cursor-pointer"> <input type="radio" name="age" value="18-30" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">18-30</span> </div> </label> <label class="cursor-pointer"> <input type="radio" name="age" value="31-50" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">31-50</span> </div> </label> <label class="cursor-pointer"> <input type="radio" name="age" value="51+" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">51+</span> </div> </label> </div> </div> <!-- Question 2: BMI --> <div class="question-step hidden" data-step="2"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-3"> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="normal" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center peer-checked:border-accent"> <div class="w-2.5 h-2.5 rounded-full bg-accent opacity-0 peer-checked:opacity-100"></div> </div> <div> <div class="font-bold text-slate-700">Normal weight (BMI &lt;25)</div> <div class="text-sm text-slate-400">May not qualify for most weight loss trials</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="overweight" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div> <div> <div class="font-bold text-slate-700">Overweight (BMI 25-29.9)</div> <div class="text-sm text-slate-400">May qualify for some trials</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="obese" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div> <div> <div class="font-bold text-slate-700">Obese (BMI 30+)</div> <div class="text-sm text-slate-400">Likely to qualify for most trials</div> </div> </label> </div> </div> <!-- Question 3: Health Conditions --> <div class="question-step hidden" data-step="3"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <p class="text-sm text-slate-500 mb-4">', '</p> <div class="space-y-3"> ', ' </div> </div> <!-- Question 4: Current Medications --> <div class="question-step hidden" data-step="4"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-3"> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="glp1" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">Yes - GLP-1 (Ozempic, Wegovy, Mounjaro, etc.)</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="other" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">Yes - Other weight loss medications</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="none" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">No weight loss medications</div> </div> </label> </div> </div> <!-- Question 5: Contact Info --> <div class="question-step hidden" data-step="5"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-4"> <div> <input type="email" name="email"', ' class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" required> </div> <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50"> <input type="checkbox" id="consent" name="consent" class="mt-1 w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent" required> <label for="consent" class="text-sm text-slate-600"> ', ' </label> </div> </div> </div> <!-- Navigation Buttons --> <div class="flex justify-between pt-6"> <button type="button" id="prev-btn" class="hidden px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors"> ', ' </button> <button type="button" id="next-btn" class="ml-auto px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"> ', ' </button> <button type="submit" id="submit-btn" class="hidden ml-auto px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all"> ', ' </button> </div> </form> <!-- Results --> <div id="results-section" class="hidden"> <div class="text-center py-8"> <div id="result-icon" class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"> <!-- Icon injected via JS --> </div> <h3 id="result-title" class="text-2xl font-black text-slate-800 mb-4"></h3> <p id="result-message" class="text-slate-600 mb-6"></p> <div id="result-reasons" class="text-left bg-slate-50 rounded-2xl p-6 mb-6 hidden"> <h4 class="font-bold text-slate-700 mb-3">', '</h4> <ul class="space-y-2 text-sm text-slate-600"></ul> </div> <div class="flex flex-col gap-3"> <a id="cta-primary" href="#" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all"> ', ' </a> <button id="retake-btn" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors"> ', " </button> </div> </div> </div> </div> </div> <script>(function(){", `
  let currentStep = 1;
  const totalSteps = 5;
  const form = document.getElementById('prescreen-form');
  const resultsSection = document.getElementById('results-section');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  function updateStep() {
    // Hide all steps
    document.querySelectorAll('.question-step').forEach(step => {
      step.classList.add('hidden');
    });
    
    // Show current step
    const currentStepEl = document.querySelector(\`[data-step="\${currentStep}"]\`);
    if (currentStepEl) {
      currentStepEl.classList.remove('hidden');
    }

    // Update progress
    const percent = (currentStep / totalSteps) * 100;
    progressBar.style.width = \`\${percent}%\`;
    progressText.textContent = lang === 'en' 
      ? \`Question \${currentStep} of \${totalSteps}\`
      : \`Pregunta \${currentStep} de \${totalSteps}\`;
    progressPercent.textContent = \`\${Math.round(percent)}%\`;

    // Update buttons
    prevBtn.classList.toggle('hidden', currentStep === 1);
    
    if (currentStep === totalSteps) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }

    validateCurrentStep();
  }

  function validateCurrentStep() {
    const currentStepEl = document.querySelector(\`[data-step="\${currentStep}"]\`);
    if (!currentStepEl) return;

    const inputs = currentStepEl.querySelectorAll('input[required], input[type="radio"], input[type="checkbox"]');
    
    if (currentStep === totalSteps) {
      // Email validation for last step
      const email = form.querySelector('input[name="email"]').value;
      const consent = form.querySelector('input[name="consent"]').checked;
      submitBtn.disabled = !email || !consent;
    } else {
      // Check if any radio is selected in the current step
      const radioGroups = new Set();
      const radios = currentStepEl.querySelectorAll('input[type="radio"]');
      radios.forEach(r => radioGroups.add(r.name));
      
      let valid = true;
      radioGroups.forEach(groupName => {
        const checked = currentStepEl.querySelector(\`input[name="\${groupName}"]:checked\`);
        if (!checked) valid = false;
      });

      nextBtn.disabled = !valid;
    }
  }

  // Event listeners for inputs
  form?.addEventListener('change', validateCurrentStep);
  form?.addEventListener('input', validateCurrentStep);

  nextBtn?.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStep();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStep();
    }
  });

  // Form submission
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const answers = Object.fromEntries(formData.entries());
    
    // Handle checkboxes (conditions)
    const conditions = formData.getAll('conditions');
    answers.conditions = conditions;

    // Show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = lang === 'en' ? 'Analyzing...' : 'Analizando...';

    try {
      const response = await fetch('/api/prescreen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trialId: trialNctId,
          answers
        })
      });

      const result = await response.json();
      showResults(result);
    } catch (error) {
      console.error('Error:', error);
      // Fallback result
      showResults({
        likelyEligible: true,
        confidence: 'medium',
        message: lang === 'en' 
          ? 'Based on your answers, you may be a good candidate. We recommend contacting the study team for a full screening.'
          : 'Basado en tus respuestas, podr\xEDas ser un buen candidato. Recomendamos contactar al equipo del estudio para un cribado completo.'
      });
    }
  });

  function showResults(result) {
    form.classList.add('hidden');
    document.querySelector('.flex.justify-between').classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultReasons = document.getElementById('result-reasons');

    if (result.likelyEligible) {
      resultIcon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100';
      resultIcon.innerHTML = \`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      \`;
      resultTitle.textContent = lang === 'en' ? 'You May Qualify! \u{1F389}' : '\xA1Podr\xEDas Calificar! \u{1F389}';
      resultTitle.className = 'text-2xl font-black text-green-700 mb-4';
    } else {
      resultIcon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-amber-100';
      resultIcon.innerHTML = \`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      \`;
      resultTitle.textContent = lang === 'en' ? 'May Not Be a Match' : 'Podr\xEDa No Ser Compatible';
      resultTitle.className = 'text-2xl font-black text-amber-700 mb-4';
    }

    resultMessage.textContent = result.message || result.recommendation;

    if (result.reasons && result.reasons.length > 0) {
      resultReasons.classList.remove('hidden');
      const ul = resultReasons.querySelector('ul');
      ul.innerHTML = result.reasons.map(r => \`<li class="flex items-start gap-2"><span class="text-accent mt-1">\u2022</span>\${r}</li>\`).join('');
    }
  }

  document.getElementById('retake-btn')?.addEventListener('click', () => {
    form.reset();
    currentStep = 1;
    updateStep();
    resultsSection.classList.add('hidden');
    form.classList.remove('hidden');
    document.querySelector('.flex.justify-between').classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = lang === 'en' ? 'Check Eligibility' : 'Verificar Elegibilidad';
  });

  // Initialize
  updateStep();
})();<\/script>`], ["", '<div class="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-lg shadow-slate-200/30"> <div class="max-w-3xl mx-auto"> <div class="text-center mb-10"> <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> ', ' </div> <h2 class="text-3xl font-black text-primary mb-4"> ', ' </h2> <p class="text-slate-500"> ', ' </p> </div> <!-- Progress --> <div class="mb-8"> <div class="flex justify-between text-xs font-bold text-slate-400 mb-2"> <span id="progress-text">', '</span> <span id="progress-percent">20%</span> </div> <div class="h-2 bg-slate-100 rounded-full overflow-hidden"> <div id="progress-bar" class="h-full bg-accent rounded-full transition-all duration-300" style="width: 20%"></div> </div> </div> <!-- Form --> <form id="prescreen-form" class="space-y-6"> <!-- Question 1: Age --> <div class="question-step" data-step="1"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="grid grid-cols-3 gap-3"> <label class="cursor-pointer"> <input type="radio" name="age" value="18-30" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">18-30</span> </div> </label> <label class="cursor-pointer"> <input type="radio" name="age" value="31-50" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">31-50</span> </div> </label> <label class="cursor-pointer"> <input type="radio" name="age" value="51+" class="sr-only peer"> <div class="p-4 rounded-2xl border-2 border-slate-200 text-center peer-checked:border-accent peer-checked:bg-accent/5 transition-all hover:border-accent/50"> <span class="font-bold text-slate-700 peer-checked:text-accent">51+</span> </div> </label> </div> </div> <!-- Question 2: BMI --> <div class="question-step hidden" data-step="2"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-3"> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="normal" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center peer-checked:border-accent"> <div class="w-2.5 h-2.5 rounded-full bg-accent opacity-0 peer-checked:opacity-100"></div> </div> <div> <div class="font-bold text-slate-700">Normal weight (BMI &lt;25)</div> <div class="text-sm text-slate-400">May not qualify for most weight loss trials</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="overweight" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div> <div> <div class="font-bold text-slate-700">Overweight (BMI 25-29.9)</div> <div class="text-sm text-slate-400">May qualify for some trials</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="bmi" value="obese" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div> <div> <div class="font-bold text-slate-700">Obese (BMI 30+)</div> <div class="text-sm text-slate-400">Likely to qualify for most trials</div> </div> </label> </div> </div> <!-- Question 3: Health Conditions --> <div class="question-step hidden" data-step="3"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <p class="text-sm text-slate-500 mb-4">', '</p> <div class="space-y-3"> ', ' </div> </div> <!-- Question 4: Current Medications --> <div class="question-step hidden" data-step="4"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-3"> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="glp1" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">Yes - GLP-1 (Ozempic, Wegovy, Mounjaro, etc.)</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="other" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">Yes - Other weight loss medications</div> </div> </label> <label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="radio" name="current_meds" value="none" class="sr-only"> <div class="w-5 h-5 rounded-full border-2 border-slate-300"></div> <div> <div class="font-bold text-slate-700">No weight loss medications</div> </div> </label> </div> </div> <!-- Question 5: Contact Info --> <div class="question-step hidden" data-step="5"> <label class="block text-lg font-bold text-slate-800 mb-4"> ', ' </label> <div class="space-y-4"> <div> <input type="email" name="email"', ' class="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all" required> </div> <div class="flex items-start gap-3 p-4 rounded-xl bg-slate-50"> <input type="checkbox" id="consent" name="consent" class="mt-1 w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent" required> <label for="consent" class="text-sm text-slate-600"> ', ' </label> </div> </div> </div> <!-- Navigation Buttons --> <div class="flex justify-between pt-6"> <button type="button" id="prev-btn" class="hidden px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors"> ', ' </button> <button type="button" id="next-btn" class="ml-auto px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"> ', ' </button> <button type="submit" id="submit-btn" class="hidden ml-auto px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all"> ', ' </button> </div> </form> <!-- Results --> <div id="results-section" class="hidden"> <div class="text-center py-8"> <div id="result-icon" class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"> <!-- Icon injected via JS --> </div> <h3 id="result-title" class="text-2xl font-black text-slate-800 mb-4"></h3> <p id="result-message" class="text-slate-600 mb-6"></p> <div id="result-reasons" class="text-left bg-slate-50 rounded-2xl p-6 mb-6 hidden"> <h4 class="font-bold text-slate-700 mb-3">', '</h4> <ul class="space-y-2 text-sm text-slate-600"></ul> </div> <div class="flex flex-col gap-3"> <a id="cta-primary" href="#" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-black uppercase tracking-wider text-sm hover:bg-primary transition-all"> ', ' </a> <button id="retake-btn" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-200 text-slate-600 font-medium hover:border-accent hover:text-accent transition-colors"> ', " </button> </div> </div> </div> </div> </div> <script>(function(){", `
  let currentStep = 1;
  const totalSteps = 5;
  const form = document.getElementById('prescreen-form');
  const resultsSection = document.getElementById('results-section');
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const submitBtn = document.getElementById('submit-btn');

  function updateStep() {
    // Hide all steps
    document.querySelectorAll('.question-step').forEach(step => {
      step.classList.add('hidden');
    });
    
    // Show current step
    const currentStepEl = document.querySelector(\\\`[data-step="\\\${currentStep}"]\\\`);
    if (currentStepEl) {
      currentStepEl.classList.remove('hidden');
    }

    // Update progress
    const percent = (currentStep / totalSteps) * 100;
    progressBar.style.width = \\\`\\\${percent}%\\\`;
    progressText.textContent = lang === 'en' 
      ? \\\`Question \\\${currentStep} of \\\${totalSteps}\\\`
      : \\\`Pregunta \\\${currentStep} de \\\${totalSteps}\\\`;
    progressPercent.textContent = \\\`\\\${Math.round(percent)}%\\\`;

    // Update buttons
    prevBtn.classList.toggle('hidden', currentStep === 1);
    
    if (currentStep === totalSteps) {
      nextBtn.classList.add('hidden');
      submitBtn.classList.remove('hidden');
    } else {
      nextBtn.classList.remove('hidden');
      submitBtn.classList.add('hidden');
    }

    validateCurrentStep();
  }

  function validateCurrentStep() {
    const currentStepEl = document.querySelector(\\\`[data-step="\\\${currentStep}"]\\\`);
    if (!currentStepEl) return;

    const inputs = currentStepEl.querySelectorAll('input[required], input[type="radio"], input[type="checkbox"]');
    
    if (currentStep === totalSteps) {
      // Email validation for last step
      const email = form.querySelector('input[name="email"]').value;
      const consent = form.querySelector('input[name="consent"]').checked;
      submitBtn.disabled = !email || !consent;
    } else {
      // Check if any radio is selected in the current step
      const radioGroups = new Set();
      const radios = currentStepEl.querySelectorAll('input[type="radio"]');
      radios.forEach(r => radioGroups.add(r.name));
      
      let valid = true;
      radioGroups.forEach(groupName => {
        const checked = currentStepEl.querySelector(\\\`input[name="\\\${groupName}"]:checked\\\`);
        if (!checked) valid = false;
      });

      nextBtn.disabled = !valid;
    }
  }

  // Event listeners for inputs
  form?.addEventListener('change', validateCurrentStep);
  form?.addEventListener('input', validateCurrentStep);

  nextBtn?.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateStep();
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateStep();
    }
  });

  // Form submission
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const answers = Object.fromEntries(formData.entries());
    
    // Handle checkboxes (conditions)
    const conditions = formData.getAll('conditions');
    answers.conditions = conditions;

    // Show loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = lang === 'en' ? 'Analyzing...' : 'Analizando...';

    try {
      const response = await fetch('/api/prescreen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trialId: trialNctId,
          answers
        })
      });

      const result = await response.json();
      showResults(result);
    } catch (error) {
      console.error('Error:', error);
      // Fallback result
      showResults({
        likelyEligible: true,
        confidence: 'medium',
        message: lang === 'en' 
          ? 'Based on your answers, you may be a good candidate. We recommend contacting the study team for a full screening.'
          : 'Basado en tus respuestas, podr\xEDas ser un buen candidato. Recomendamos contactar al equipo del estudio para un cribado completo.'
      });
    }
  });

  function showResults(result) {
    form.classList.add('hidden');
    document.querySelector('.flex.justify-between').classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const resultReasons = document.getElementById('result-reasons');

    if (result.likelyEligible) {
      resultIcon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-green-100';
      resultIcon.innerHTML = \\\`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      \\\`;
      resultTitle.textContent = lang === 'en' ? 'You May Qualify! \u{1F389}' : '\xA1Podr\xEDas Calificar! \u{1F389}';
      resultTitle.className = 'text-2xl font-black text-green-700 mb-4';
    } else {
      resultIcon.className = 'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-amber-100';
      resultIcon.innerHTML = \\\`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-amber-600">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      \\\`;
      resultTitle.textContent = lang === 'en' ? 'May Not Be a Match' : 'Podr\xEDa No Ser Compatible';
      resultTitle.className = 'text-2xl font-black text-amber-700 mb-4';
    }

    resultMessage.textContent = result.message || result.recommendation;

    if (result.reasons && result.reasons.length > 0) {
      resultReasons.classList.remove('hidden');
      const ul = resultReasons.querySelector('ul');
      ul.innerHTML = result.reasons.map(r => \\\`<li class="flex items-start gap-2"><span class="text-accent mt-1">\u2022</span>\\\${r}</li>\\\`).join('');
    }
  }

  document.getElementById('retake-btn')?.addEventListener('click', () => {
    form.reset();
    currentStep = 1;
    updateStep();
    resultsSection.classList.add('hidden');
    form.classList.remove('hidden');
    document.querySelector('.flex.justify-between').classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.innerHTML = lang === 'en' ? 'Check Eligibility' : 'Verificar Elegibilidad';
  });

  // Initialize
  updateStep();
})();<\/script>`])), maybeRenderHead(), lang === "en" ? "AI-Powered Pre-Screening" : "Pre-Cribado con IA", lang === "en" ? "Check Your Eligibility" : "Verifica tu Elegibilidad", lang === "en" ? "Answer a few questions to see if you might qualify for this trial. This takes about 2 minutes." : "Responde algunas preguntas para ver si podr\xEDas calificar para este ensayo. Toma unos 2 minutos.", lang === "en" ? "Question 1 of 5" : "Pregunta 1 de 5", lang === "en" ? "What is your age?" : "\xBFCu\xE1l es tu edad?", lang === "en" ? "What is your BMI or weight category?" : "\xBFCu\xE1l es tu IMC o categor\xEDa de peso?", lang === "en" ? "Do you have any of these conditions?" : "\xBFTienes alguna de estas condiciones?", lang === "en" ? "Select all that apply" : "Selecciona todas las que apliquen", ["Type 1 Diabetes", "Type 2 Diabetes", "Heart Disease", "History of Pancreatitis", "Thyroid Cancer", "Eating Disorder", "None of these"].map((condition) => renderTemplate`<label class="flex items-center gap-4 p-4 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-accent/50 transition-all has-[:checked]:border-accent has-[:checked]:bg-accent/5"> <input type="checkbox" name="conditions"${addAttribute(condition.toLowerCase().replace(/\s+/g, "-"), "value")} class="w-5 h-5 rounded border-slate-300 text-accent focus:ring-accent"> <span class="font-bold text-slate-700">${condition}</span> </label>`), lang === "en" ? "Are you currently taking weight loss medications?" : "\xBFActualmente tomas medicamentos para bajar de peso?", lang === "en" ? "Enter your email to receive your results" : "Ingresa tu email para recibir tus resultados", addAttribute(lang === "en" ? "your@email.com" : "tu@email.com", "placeholder"), lang === "en" ? "I consent to being contacted about this clinical trial and agree to the privacy policy. I understand this is not medical advice." : "Doy mi consentimiento para ser contactado sobre este ensayo cl\xEDnico y acepto la pol\xEDtica de privacidad. Entiendo que esto no es consejo m\xE9dico.", lang === "en" ? "Back" : "Atr\xE1s", lang === "en" ? "Next" : "Siguiente", lang === "en" ? "Check Eligibility" : "Verificar Elegibilidad", lang === "en" ? "Why this result?" : "\xBFPor qu\xE9 este resultado?", lang === "en" ? "Contact Study Team" : "Contactar al Equipo del Estudio", lang === "en" ? "Start Over" : "Comenzar de Nuevo", defineScriptVars({ lang, trialNctId: trial?.nct_id }));
}, "C:/Users/Jorge/Documents/javi/src/components/PreScreener.astro", void 0);

const $$Astro = createAstro();
const $$nctId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$nctId;
  const { nctId } = Astro2.params;
  const lang = "en";
  let trial = null;
  let error = null;
  try {
    const response = await fetch(`${Astro2.url.origin}/api/trials/${nctId}`);
    if (response.ok) {
      const data = await response.json();
      trial = data.trial;
    } else {
      error = "Trial not found";
    }
  } catch (e) {
    error = "Failed to load trial";
  }
  function safeJSON(val, fallback = []) {
    if (!val) return fallback;
    if (typeof val !== "string") return val;
    try {
      return JSON.parse(val);
    } catch {
      return fallback;
    }
  }
  const eligibilityMust = safeJSON(trial?.eligibility_summary_must);
  const eligibilityCannot = safeJSON(trial?.eligibility_summary_cannot);
  const whatToExpect = safeJSON(trial?.ai_what_to_expect);
  const risks = safeJSON(trial?.ai_potential_risks);
  const benefits = safeJSON(trial?.ai_potential_benefits);
  const questions = safeJSON(trial?.ai_questions_to_ask);
  const tags = safeJSON(trial?.ai_tags);
  safeJSON(trial?.conditions);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": trial ? `${trial.title} | Weight Loss Trial` : "Trial Not Found", "description": trial?.ai_summary || trial?.brief_summary || "Clinical trial details" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "lang": lang })} ${maybeRenderHead()}<main class="pt-28 pb-24 bg-slate-50/30"> ${error || !trial ? renderTemplate`<!-- Error State -->
      <div class="container mx-auto px-4 text-center py-24"> <div class="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line> </svg> </div> <h1 class="text-3xl font-black text-slate-800 mb-3">Trial Not Found</h1> <p class="text-slate-500 mb-8">This trial doesn't exist or has ended.</p> <a href="/#trials" class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-accent text-white font-black text-sm uppercase tracking-wider hover:bg-primary transition-colors">
← Back to All Trials
</a> </div>` : renderTemplate`<div class="container mx-auto px-4 max-w-7xl"> <!-- Breadcrumb --> <nav class="flex items-center gap-2 text-sm text-slate-400 mb-8"> <a href="/" class="hover:text-accent transition-colors">Home</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <a href="/#trials" class="hover:text-accent transition-colors">Weight Loss Trials</a> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg> <span class="text-slate-700 font-medium truncate max-w-[200px] md:max-w-sm">${trial.title}</span> </nav> <!-- Hero band --> <div class="relative bg-primary rounded-[3rem] overflow-hidden mb-8 p-10 md:p-14"> <div class="absolute inset-0 opacity-[0.06]" style="background-image:radial-gradient(circle,#00a381 1px,transparent 1px);background-size:32px 32px;"></div> <div class="absolute -top-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div> <div class="relative z-10 max-w-3xl"> <!-- Badges row --> <div class="flex flex-wrap gap-2 mb-5"> <span${addAttribute(`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full ${trial.overall_status === "RECRUITING" ? "bg-accent text-white" : "bg-white/10 text-white/70"}`, "class")}> ${trial.status_label || trial.overall_status} </span> <span class="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-white/10 text-white/80"> ${trial.phase_label || trial.phase} </span> ${trial.has_compensation && renderTemplate`<span class="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
💰 Paid Study
</span>`} </div> <h1 class="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tight mb-4"> ${trial.title} </h1> ${trial.official_title && trial.official_title !== trial.title && renderTemplate`<p class="text-white/50 text-sm italic">${trial.official_title}</p>`} <!-- Drug tags --> ${tags.length > 0 && renderTemplate`<div class="flex flex-wrap gap-2 mt-5"> ${tags.map((tag) => renderTemplate`<span class="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-white/70 border border-white/10">${tag}</span>`)} </div>`} </div> </div> <!-- Main grid --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <!-- ─── LEFT: main content ──────────────────────────────── --> <div class="lg:col-span-2 space-y-6"> <!-- 1. Plain-English Summary --> <div class="bg-gradient-to-br from-accent/5 to-accent/[0.015] rounded-[2.5rem] p-8 md:p-10 border border-accent/10"> <div class="flex items-center gap-3 mb-5"> <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path> </svg> </div> <span class="text-[11px] font-black uppercase tracking-[0.2em] text-accent">What is this study about?</span> </div> <p class="text-slate-700 text-lg leading-relaxed font-medium"> ${trial.ai_summary || trial.brief_summary} </p> <!-- Quick stats row --> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-7"> ${trial.ai_estimated_duration && renderTemplate`<div class="bg-white rounded-2xl p-4 text-center border border-slate-100"> <div class="text-xl font-black text-accent leading-tight">${trial.ai_estimated_duration}</div> <div class="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Duration</div> </div>`} ${trial.ai_visit_frequency && renderTemplate`<div class="bg-white rounded-2xl p-4 text-center border border-slate-100"> <div class="text-xl font-black text-primary leading-tight">${trial.ai_visit_frequency}</div> <div class="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Visits</div> </div>`} ${trial.enrollment_count && renderTemplate`<div class="bg-white rounded-2xl p-4 text-center border border-slate-100"> <div class="text-xl font-black text-primary leading-tight">${trial.enrollment_count}</div> <div class="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-1">Participants</div> </div>`} </div> </div> <!-- 2. Do I qualify? --> <div class="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100"> <h2 class="text-2xl font-black text-primary mb-7 flex items-center gap-3"> <div class="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline> </svg> </div>
Do I Qualify?
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <!-- Must have --> <div class="bg-emerald-50 rounded-2xl p-5 border border-emerald-100"> <h3 class="text-xs font-black uppercase tracking-wider text-emerald-700 mb-4 flex items-center gap-2"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
You may qualify if:
</h3> <ul class="space-y-2.5"> ${eligibilityMust.map((item) => renderTemplate`<li class="flex items-start gap-2.5 text-sm text-emerald-800"> <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-[6px] flex-shrink-0"></span> ${item} </li>`)} ${eligibilityMust.length === 0 && renderTemplate`<li class="text-sm text-emerald-700/70 italic">See full criteria below</li>`} </ul> </div> <!-- Cannot --> <div class="bg-red-50 rounded-2xl p-5 border border-red-100"> <h3 class="text-xs font-black uppercase tracking-wider text-red-700 mb-4 flex items-center gap-2"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
You cannot join if:
</h3> <ul class="space-y-2.5"> ${eligibilityCannot.map((item) => renderTemplate`<li class="flex items-start gap-2.5 text-sm text-red-800"> <span class="w-1.5 h-1.5 rounded-full bg-red-400 mt-[6px] flex-shrink-0"></span> ${item} </li>`)} ${eligibilityCannot.length === 0 && renderTemplate`<li class="text-sm text-red-700/70 italic">No exclusions listed</li>`} </ul> </div> </div> <!-- Age / BMI chips --> <div class="flex flex-wrap gap-3 pt-5 border-t border-slate-100"> ${trial.eligibility_age_range && renderTemplate`<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> <span class="text-xs font-bold text-slate-600">Age: <strong class="text-primary">${trial.eligibility_age_range}</strong></span> </div>`} ${trial.eligibility_bmi_requirements && renderTemplate`<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100"> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> <span class="text-xs font-bold text-slate-600">BMI: <strong class="text-primary">${trial.eligibility_bmi_requirements}</strong></span> </div>`} ${trial.sex && trial.sex !== "All" && renderTemplate`<div class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100"> <span class="text-xs font-bold text-slate-600">Sex: <strong class="text-primary">${trial.sex}</strong></span> </div>`} </div> </div> <!-- 3. What will I do? --> ${whatToExpect.length > 0 && renderTemplate`<div class="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100"> <h2 class="text-2xl font-black text-primary mb-7 flex items-center gap-3"> <div class="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path> </svg> </div>
What Will I Do?
</h2> <div class="space-y-3"> ${whatToExpect.map((item, i) => renderTemplate`<div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-colors"> <div class="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 font-black text-[11px]"> ${i + 1} </div> <span class="text-slate-700 text-sm leading-relaxed">${item}</span> </div>`)} </div> </div>`} <!-- 4. Risks & Benefits --> <div class="grid grid-cols-1 md:grid-cols-2 gap-5"> <!-- Risks --> <div class="bg-red-50 rounded-[2rem] p-7 border border-red-100"> <h3 class="text-base font-black text-red-700 mb-5 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path> <line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line> </svg>
Possible Risks
</h3> <ul class="space-y-2.5"> ${risks.map((item) => renderTemplate`<li class="text-sm text-red-700/80 flex items-start gap-2"> <span class="mt-1.5 w-1 h-1 rounded-full bg-red-400 flex-shrink-0"></span> ${item} </li>`)} ${risks.length === 0 && renderTemplate`<li class="text-sm text-red-600/60 italic">Contact site for details</li>`} </ul> </div> <!-- Benefits --> <div class="bg-emerald-50 rounded-[2rem] p-7 border border-emerald-100"> <h3 class="text-base font-black text-emerald-700 mb-5 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>
Potential Benefits
</h3> <ul class="space-y-2.5"> ${benefits.map((item) => renderTemplate`<li class="text-sm text-emerald-700/80 flex items-start gap-2"> <span class="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 flex-shrink-0"></span> ${item} </li>`)} ${benefits.length === 0 && renderTemplate`<li class="text-sm text-emerald-600/60 italic">Contact site for details</li>`} </ul> </div> </div> <!-- 5. Questions to ask --> ${questions.length > 0 && renderTemplate`<div class="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100"> <h2 class="text-2xl font-black text-primary mb-3 flex items-center gap-3"> <div class="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line> </svg> </div>
Questions to Ask the Study Team
</h2> <p class="text-slate-500 text-sm mb-6">Use these when you contact the site:</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-3"> ${questions.map((item) => renderTemplate`<div class="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-colors"> <span class="w-6 h-6 rounded-full bg-accent/10 text-accent font-black text-xs flex items-center justify-center flex-shrink-0">?</span> <span class="text-slate-700 text-sm">${item}</span> </div>`)} </div> </div>`} <!-- 6. NCT / External link --> <div class="flex flex-wrap items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-slate-100 text-sm"> <span class="text-slate-400">NCT ID:</span> <code class="px-2.5 py-1 bg-slate-100 rounded-lg text-slate-700 font-mono text-xs">${trial.nct_id}</code> <a${addAttribute(`https://clinicaltrials.gov/study/${trial.nct_id}`, "href")} target="_blank" rel="noopener noreferrer" class="ml-auto flex items-center gap-1.5 text-accent font-bold hover:underline text-xs">
View on ClinicalTrials.gov
<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> </a> </div> </div> <!-- ─── RIGHT: Sticky sidebar ───────────────────────────── --> <div class="lg:col-span-1"> <div class="sticky top-28 space-y-5"> <!-- CTA card --> <div class="bg-primary rounded-[2.5rem] p-8 text-white overflow-hidden relative"> <div class="absolute -top-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none"></div> <div class="relative z-10"> <h3 class="text-xl font-black mb-2">Ready to apply?</h3> <p class="text-white/70 text-sm mb-6 leading-relaxed">
Check your eligibility in 2 minutes. Free, no obligation.
</p> <a href="#prescreen" class="block w-full py-4 rounded-2xl bg-accent text-white font-black text-center uppercase tracking-wider text-xs hover:bg-white hover:text-primary transition-all shadow-lg shadow-accent/30">
Check My Eligibility
</a> <p class="text-white/40 text-[10px] text-center mt-3">No medical records needed</p> </div> </div> <!-- Compensation highlight (if paid) --> ${trial.has_compensation && renderTemplate`<div class="bg-emerald-50 rounded-[2.5rem] p-7 border border-emerald-100"> <div class="flex items-center gap-2 mb-3"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> <span class="text-xs font-black uppercase tracking-wider text-emerald-700">You Get Paid</span> </div> <div class="text-3xl font-black text-emerald-700 mb-1">${trial.compensation_amount || "Ask for amount"}</div> ${trial.compensation_details && renderTemplate`<p class="text-sm text-emerald-600/80">${trial.compensation_details}</p>`} </div>`} <!-- Location --> <div class="bg-white rounded-[2.5rem] p-7 border border-slate-100"> <h3 class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-4">Location</h3> <div class="flex items-start gap-3"> <div class="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> </div> <div> <p class="font-bold text-slate-800 text-sm"> ${trial.primary_location_city || "Multiple Locations"} ${trial.primary_location_state ? `, ${trial.primary_location_state}` : ""} </p> ${trial.locations_count > 1 && renderTemplate`<p class="text-xs text-slate-500 mt-0.5">+${trial.locations_count - 1} more locations</p>`} </div> </div> </div> <!-- Sponsor --> <div class="bg-white rounded-[2.5rem] p-7 border border-slate-100"> <h3 class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">Sponsored by</h3> <p class="font-bold text-slate-800 text-sm">${trial.lead_sponsor || "Not disclosed"}</p> ${trial.sponsor_class && renderTemplate`<p class="text-xs text-slate-500 mt-0.5">${trial.sponsor_class}</p>`} </div> <!-- Study size --> <div class="bg-white rounded-[2.5rem] p-7 border border-slate-100"> <h3 class="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-3">Study Size</h3> <div class="flex items-center gap-3"> <div class="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> </div> <div> <p class="font-black text-primary text-lg">${trial.enrollment_count || "?"}</p> <p class="text-xs text-slate-500">participants needed</p> </div> </div> </div> <!-- FDA badge --> <div class="flex items-center gap-3 px-5 py-4 bg-accent/5 rounded-2xl border border-accent/10"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> <div> <p class="text-[10px] font-black uppercase tracking-wider text-accent">FDA Reviewed</p> <p class="text-xs text-slate-500">IRB approved & monitored</p> </div> </div> </div> </div> </div> <!-- Pre-Screener --> <section id="prescreen" class="mt-14"> ${renderComponent($$result2, "PreScreener", $$PreScreener, { "trial": trial, "lang": lang })} </section> </div>`} </main> ${renderComponent($$result2, "ChatBot", $$ChatBot, { "lang": lang })} ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "C:/Users/Jorge/Documents/javi/src/pages/trial/[nctId].astro", void 0);

const $$file = "C:/Users/Jorge/Documents/javi/src/pages/trial/[nctId].astro";
const $$url = "/trial/[nctId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$nctId,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
