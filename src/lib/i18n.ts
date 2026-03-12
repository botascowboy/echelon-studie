const translations = {
    en: {
        // Navigation
        'nav.mission': 'Mission',
        'nav.trials': 'Clinical Trials',
        'nav.participation': 'Participation',
        'nav.contact': 'Contact',
        'nav.join': 'Join Registry',
        // Hero
        'hero.badge': 'Elite Clinical Recruitment',
        'hero.title': 'The Future of',
        'hero.subtitle': 'Weight Loss Medicine',
        'hero.desc': 'Helping thousands of patients in NYC and nationwide access next-generation clinical trials for metabolic health and weight management.',
        'hero.cta': 'Find Your Trial',
        'hero.stats.recruits': 'Studies Nationwide',
        'hero.stats.sites': 'Partner Clinics',
        'hero.stats.success': 'Success Rate',
        // Map
        'map.title': 'Nationwide',
        'map.coverage': 'Coverage',
        'map.desc': 'Explore all active clinical trial sites across the United States in real-time.',
        // How It Works
        'how.title': 'How It',
        'how.works': 'Works',
        'how.desc': 'Your journey to contributing to medical science is simple and transparent.',
        'how.step1.title': 'Find a Study',
        'how.step1.desc': 'Browse our list of active clinical trials to find one that fits your health profile.',
        'how.step2.title': 'Apply Online',
        'how.step2.desc': 'Submit a quick application. Our team will review your details to ensure eligibility.',
        'how.step3.title': 'Join & Contribute',
        'how.step3.desc': 'Participate at one of our partner sites. Receive expert care and compensation.',
        // CTA
        'cta.title': 'Ready to make a difference?',
        'cta.desc': 'Join thousands of clinical trial participants helping medical breakthroughs happen every day.',
        'cta.button': 'Get Started Today',
        // Footer
        'footer.explore': 'Explore',
        'footer.connect': 'Connect',
        'footer.mission': 'Our Mission',
        'footer.tagline': 'Excellence in Clinical Care.',
        'footer.privacy': 'Privacy Policy',
        'footer.faq': 'FAQ',
        // Form
        'form.secure': 'Secure Registration',
        'form.sending': 'Sending...',
        'form.error': 'There was an error submitting the form. Please try again.',
        'form.success': 'Application Received!',
        // Common
        'common.apply': 'Apply',
        'common.close': 'Close',
        'common.next': 'Continue',
        'common.back': 'Back',
        'common.submit': 'Submit',
    },
    es: {
        // Navigation
        'nav.mission': 'Misión',
        'nav.trials': 'Ensayos Clínicos',
        'nav.participation': 'Participación',
        'nav.contact': 'Contacto',
        'nav.join': 'Unirse al Registro',
        // Hero
        'hero.badge': 'Reclutamiento Clínico de Élite',
        'hero.title': 'El Futuro de la',
        'hero.subtitle': 'Medicina para Perder Peso',
        'hero.desc': 'Ayudando a miles de pacientes en NYC y en todo el país a acceder a ensayos clínicos de próxima generación para la salud metabólica.',
        'hero.cta': 'Buscar mi ensayo',
        'hero.stats.recruits': 'Estudios Nacionales',
        'hero.stats.sites': 'Clínicas Asociadas',
        'hero.stats.success': 'Tasa de Éxito',
        // Map
        'map.title': 'Cobertura',
        'map.coverage': 'Nacional',
        'map.desc': 'Explora todos los sitios de ensayos clínicos activos en todo Estados Unidos en tiempo real.',
        // How It Works
        'how.title': 'Cómo',
        'how.works': 'Funciona',
        'how.desc': 'Tu camino para contribuir a la ciencia médica es simple y transparente.',
        'how.step1.title': 'Busca un Estudio',
        'how.step1.desc': 'Explora nuestra lista de ensayos clínicos activos para encontrar uno que se adapte a tu perfil.',
        'how.step2.title': 'Aplica Online',
        'how.step2.desc': 'Envía una solicitud rápida. Nuestro equipo revisará tus detalles para asegurar la elegibilidad.',
        'how.step3.title': 'Únete y Contribuye',
        'how.step3.desc': 'Participa en uno de nuestros sitios asociados. Recibirás atención experta y compensación.',
        // CTA
        'cta.title': '¿Listo para marcar la diferencia?',
        'cta.desc': 'Únete a miles de participantes en ensayos clínicos que ayudan a que ocurran avances médicos.',
        'cta.button': 'Comenzar hoy',
        // Footer
        'footer.explore': 'Explorar',
        'footer.connect': 'Conectar',
        'footer.mission': 'Misión',
        'footer.tagline': 'Excelencia en Cuidado Clínico.',
        'footer.privacy': 'Política de Privacidad',
        'footer.faq': 'Preguntas Frecuentes',
        // Form
        'form.secure': 'Registro Seguro',
        'form.sending': 'Enviando...',
        'form.error': 'Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.',
        'form.success': '¡Solicitud Recibida!',
        // Common
        'common.apply': 'Aplicar',
        'common.close': 'Cerrar',
        'common.next': 'Continuar',
        'common.back': 'Atrás',
        'common.submit': 'Enviar',
    }
} as const;

export type Lang = keyof typeof translations;

export function getTranslations(lang: Lang) {
    return translations[lang] || translations.en;
}

export function useTranslations(lang: Lang) {
    return (key: keyof typeof translations['en']) => translations[lang][key] || translations.en[key];
}
