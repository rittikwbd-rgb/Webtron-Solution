import { AppLanguage } from '../types';

export interface Translations {
  hero: {
    topBadge: string;
    headlinePart1: string;
    headlineHighlight: string;
    subtitle: string;
    badges: {
      web: string;
      apps: string;
      seo: string;
      ppc: string;
      gbp: string;
      smm: string;
    };
    ctaWhatsapp: string;
    ctaWork: string;
    ctaAudit: string;
  };
  process: {
    badge: string;
    title: string;
    subtitle: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      web: string;
      seo: string;
      ppc: string;
      gbp: string;
    };
  };
  stats: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
  };
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
    calcTitle: string;
    calcDesc: string;
    calcVisitors: string;
    calcStandard: string;
    calcOptimized: string;
    calcRevenueLift: string;
    calcCta: string;
  };
  partner: {
    badge: string;
    title: string;
    subtitle: string;
    tabProblems: string;
    tabSolutions: string;
  };
  businessGrowth: {
    badge: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    ctaText: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  ctaSection: {
    badge: string;
    title: string;
    subtitle: string;
    presetHeader: string;
    presets: {
      website: string;
      seo: string;
      app: string;
      audit: string;
    };
    btnMain: string;
    responseTime: string;
    noPushySales: string;
  };
  footer: {
    brandDesc: string;
    quickLinks: string;
    links: {
      portfolio: string;
      process: string;
      services: string;
      whyUs: string;
      growth: string;
      faq: string;
    };
    capabilities: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  modal: {
    title: string;
    regionNote: string;
    industryLabel: string;
    trafficLabel: string;
    goalLabel: string;
    impactHeader: string;
    leadsMo: string;
    revenueMo: string;
    ctaBtn: string;
  };
}

export const translations: Record<AppLanguage, Translations> = {
  EN: {
    hero: {
      topBadge: '🚀 Helping Small Businesses Grow Across the US • UK • Europe',
      headlinePart1: 'Grow Your Business with Websites, Apps & Marketing That',
      headlineHighlight: 'Deliver Results.',
      subtitle: 'Whether you\'re launching a new business or scaling an existing one, we help you attract more customers through high-converting websites, powerful mobile apps, strategic SEO, high-performance Google Ads (PPC), Google Business Profile optimisation and data-driven digital marketing.',
      badges: {
        web: 'Website Development',
        apps: 'Mobile App Development',
        seo: 'SEO',
        ppc: 'Google Ads (PPC)',
        gbp: 'Google Business Profile',
        smm: 'Social Media Marketing',
      },
      ctaWhatsapp: 'Chat on WhatsApp',
      ctaWork: 'Explore Our Work',
      ctaAudit: 'Free Website & Marketing Audit →',
    },
    process: {
      badge: 'Proven 14-Day Growth Execution',
      title: 'Our Development Process: From Concept To Market Dominance',
      subtitle: 'We collect basic details, deliver a fully working first draft website so you can judge our work firsthand, and then refine and scale your platform with custom SEO plans.',
    },
    services: {
      badge: 'Full-Spectrum Digital Services',
      title: 'High-Impact Digital Solutions For Measurable Business Growth',
      subtitle: 'From bespoke custom website development and Flutter mobile apps to dominating Google Maps Local SEO, Social Media Marketing campaigns, and automated client workflows.',
      categories: {
        all: 'All 12 Services',
        web: 'Web & Mobile Apps',
        seo: 'SEO & Paid Campaigns',
        ppc: 'Social Media Marketing',
        gbp: 'Automation & Design',
      },
    },
    stats: {
      title: 'Impact Delivered In Numbers',
      subtitle: 'Real performance benchmarks achieved across client projects in the United States, United Kingdom, and Europe.',
    },
    portfolio: {
      badge: 'Featured Case Studies',
      title: 'Our Work Speaks For Itself: Live Production Showcase',
      subtitle: 'Explore live, deployed client applications engineered for maximum performance, aesthetic elegance, and revenue generation.',
    },
    whyUs: {
      badge: 'ROI-Focused Execution',
      title: 'Why Successful Businesses Choose Us: Measurable Revenue Results',
      subtitle: 'We measure success in signed contracts, incoming phone calls, and revenue growth. Here is why industry leaders partner with Webtron Solution.',
      calcTitle: 'Interactive Lead & Revenue Lift Estimator',
      calcDesc: 'See how much extra revenue your business could generate by upgrading your website speed, conversion architecture, and local SEO with Webtron Solution.',
      calcVisitors: 'Estimated Monthly Website Visitors:',
      calcStandard: 'Standard 1% Conversion',
      calcOptimized: 'Webtron Solution 4.2% Optimization',
      calcRevenueLift: 'Projected Monthly Revenue Lift',
      calcCta: 'Claim This Revenue Lift On WhatsApp',
    },
    partner: {
      badge: 'Why 90% of Business Websites Fail',
      title: 'Your Trusted Growth Partner: Fixing Broken Digital Presences',
      subtitle: 'Most business owners spend thousands on slow, generic websites that produce zero leads. We replace outdated digital traps with high-converting growth engines.',
      tabProblems: 'Common Business Traps ❌',
      tabSolutions: 'The Webtron Solution ✅',
    },
    businessGrowth: {
      badge: 'The Business Growth Masterclass',
      title: 'How Modern Digital Architecture Drives Predictable Customer Acquisition',
      subtitle: 'Understanding the economic principles behind high-converting websites, local SEO, mobile apps, and automated sales funnels.',
    },
    testimonials: {
      badge: '4.9/5 Rating Across 250+ Projects',
      title: 'Trusted By Business Leaders Across The US, UK & Europe',
      subtitle: 'Read what founders, managing directors, and healthcare executives say about partnering with Webtron Solution.',
      ctaText: 'Join 250+ Satisfied Business Clients On WhatsApp',
    },
    faq: {
      badge: 'SEO & Client Help Center',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about our custom website development, mobile apps, local SEO campaigns, and pricing models.',
    },
    ctaSection: {
      badge: 'Transform Your Digital Presence Today',
      title: 'Ready To Grow Your Business?',
      subtitle: 'Let\'s build a website and marketing strategy that brings you more customers, more leads and more sales across the US, UK & Europe.',
      presetHeader: 'Or choose an instant topic to discuss on WhatsApp:',
      presets: {
        website: 'Custom Website Development',
        seo: 'Page 1 Google SEO & Maps',
        app: 'Mobile App Development',
        audit: 'Free Website Speed Audit',
      },
      btnMain: 'Chat on WhatsApp',
      responseTime: 'Typical response time: < 5 minutes',
      noPushySales: 'No pushy sales pitches',
    },
    footer: {
      brandDesc: 'A high-growth digital agency engineering custom high-converting websites, mobile applications, technical SEO campaigns, Google Ads (PPC), and Google Business Profile optimizations.',
      quickLinks: 'Quick Links',
      links: {
        portfolio: 'Featured Portfolio',
        process: '14-Day Process',
        services: 'Digital Services',
        whyUs: 'Why Choose Us',
        growth: 'Growth Masterclass',
        faq: 'Client FAQ',
      },
      capabilities: 'Core Capabilities',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    modal: {
      title: 'Business Growth Estimator',
      regionNote: 'Customized for {region} region ({symbol})',
      industryLabel: 'Your Industry Sector:',
      trafficLabel: 'Monthly Traffic / Visitors:',
      goalLabel: 'Primary Growth Objective:',
      impactHeader: 'Estimated Monthly Growth Impact:',
      leadsMo: 'Leads/mo',
      revenueMo: 'Revenue',
      ctaBtn: 'Claim My Customized Plan On WhatsApp',
    },
  },
  ES: {
    hero: {
      topBadge: '🚀 Ayudando a las Empresas a Crecer en EE. UU. • Reino Unido • Europa',
      headlinePart1: 'Impulsa tu Negocio con Sitios Web, Apps y Marketing que',
      headlineHighlight: 'Generan Resultados.',
      subtitle: 'Tanto si estás lanzando un nuevo proyecto como si quieres escalar uno existente, te ayudamos a atraer más clientes con sitios web de alta conversión, apps móviles potentes, SEO estratégico y publicidad en Google Ads (PPC).',
      badges: {
        web: 'Desarrollo Web',
        apps: 'Desarrollo de Apps Móviles',
        seo: 'Posicionamiento SEO',
        ppc: 'Google Ads (PPC)',
        gbp: 'Perfil de Empresa en Google',
        smm: 'Marketing en Redes Sociales',
      },
      ctaWhatsapp: 'Hablar por WhatsApp',
      ctaWork: 'Ver Nuestros Trabajos',
      ctaAudit: 'Auditoría Web Gratis →',
    },
    process: {
      badge: 'Ejecución Probada en 14 Días',
      title: 'Nuestro Proceso: Del Concepto al Dominio del Mercado',
      subtitle: 'Recopilamos detalles básicos, entregamos un borrador web totalmente funcional para que evalúes nuestro trabajo de primera mano, y luego escalamos con SEO personalizado.',
    },
    services: {
      badge: 'Servicios Digitales Integrales',
      title: 'Soluciones Digitales de Alto Impacto para el Crecimiento Medible',
      subtitle: 'Desde desarrollo web personalizado a medida y aplicaciones móviles Flutter hasta el dominio del SEO local en Google Maps, campañas de Marketing en Redes Sociales y flujos de trabajo automatizados.',
      categories: {
        all: 'Los 12 Servicios',
        web: 'Sitios y Apps Web',
        seo: 'SEO y Campañas',
        ppc: 'Marketing Redes Sociales',
        gbp: 'Automatización y Diseño',
      },
    },
    stats: {
      title: 'Impacto Entregado en Números',
      subtitle: 'Métricas de rendimiento reales logradas en proyectos de clientes en Estados Unidos, Reino Unido y Europa.',
    },
    portfolio: {
      badge: 'Casos de Éxito Destacados',
      title: 'Nuestro Trabajo Habla por Sí Mismo: Proyectos en Vivo',
      subtitle: 'Explora aplicaciones de clientes desplegadas en vivo, diseñadas para el máximo rendimiento, elegancia estética y generación de ingresos.',
    },
    whyUs: {
      badge: 'Ejecución Enfocada en el ROI',
      title: 'Por Qué las Empresas Exitosas nos Eligen: Resultados de Ingresos Medibles',
      subtitle: 'Medimos el éxito en contratos firmados, llamadas telefónicas entrantes y aumento de ingresos. Descubre por qué los líderes confían en Webtron Solution.',
      calcTitle: 'Estimador Interactivo de Clientes e Ingresos',
      calcDesc: 'Descubre cuántos ingresos adicionales podría generar tu empresa al mejorar la velocidad de tu web, la arquitectura de conversión y el SEO local con Webtron Solution.',
      calcVisitors: 'Visitantes Mensuales Estimados:',
      calcStandard: 'Conversión Estándar (1%)',
      calcOptimized: 'Optimización Webtron Solution (4.2%)',
      calcRevenueLift: 'Aumento de Ingresos Mensuales Proyectado',
      calcCta: 'Reclamar Este Aumento de Ingresos en WhatsApp',
    },
    partner: {
      badge: 'Por Qué el 90% de los Sitios Web Fracasan',
      title: 'Tu Socio de Confianza: Solucionando Presencias Digitales Ineficaces',
      subtitle: 'La mayoría de empresarios gastan miles en webs lentas que no generan contactos. Reemplazamos trampas digitales por motores de crecimiento de alta conversión.',
      tabProblems: 'Trampas Comunes de Negocio ❌',
      tabSolutions: 'La Solución Webtron ✅',
    },
    businessGrowth: {
      badge: 'Masterclass de Crecimiento Empresarial',
      title: 'Cómo la Arquitectura Digital Moderna Impulsa la Captación Predecible de Clientes',
      subtitle: 'Entendiendo los principios económicos detrás de webs de alta conversión, SEO local, apps móviles y embudos de ventas automatizados.',
    },
    testimonials: {
      badge: 'Calificación 4.9/5 en Más de 250 Proyectos',
      title: 'Con la Confianza de Líderes Empresariales en EE.UU., Reino Unido y Europa',
      subtitle: 'Lee lo que dicen fundadores, directores ejecutivos y líderes de la salud sobre su asociación con Webtron Solution.',
      ctaText: 'Únete a Más de 250 Clientes Satisfechos en WhatsApp',
    },
    faq: {
      badge: 'Centro de Ayuda y SEO',
      title: 'Preguntas Frecuentes',
      subtitle: 'Todo lo que necesitas saber sobre nuestro desarrollo web personalizado, apps móviles, campañas de SEO local y modelos de precios.',
    },
    ctaSection: {
      badge: 'Transforma tu Presencia Digital Hoy',
      title: '¿Listo para Hacer Crecer tu Negocio?',
      subtitle: 'Construyamos un sitio web y una estrategia de marketing que te traiga más clientes, más clientes potenciales y más ventas.',
      presetHeader: 'O elige un tema para discutir al instante en WhatsApp:',
      presets: {
        website: 'Desarrollo Web Personalizado',
        seo: 'SEO en Google y Google Maps',
        app: 'Desarrollo de Apps Móviles',
        audit: 'Auditoría de Velocidad Web Gratis',
      },
      btnMain: 'Hablar por WhatsApp',
      responseTime: 'Tiempo de respuesta habitual: < 5 minutos',
      noPushySales: 'Sin ventas agresivas',
    },
    footer: {
      brandDesc: 'Una agencia digital de alto crecimiento que diseña sitios web personalizados de alta conversión, aplicaciones móviles, campañas de SEO técnico, Google Ads (PPC) y perfiles en Google Business.',
      quickLinks: 'Enlaces Rápidos',
      links: {
        portfolio: 'Portafolio Destacado',
        process: 'Proceso de 14 Días',
        services: 'Servicios Digitales',
        whyUs: 'Por Qué Elegirnos',
        growth: 'Masterclass de Crecimiento',
        faq: 'Preguntas Frecuentes',
      },
      capabilities: 'Capacidades Principales',
      rights: 'Todos los derechos reservados.',
      privacy: 'Política de Privacidad',
      terms: 'Términos del Servicio',
    },
    modal: {
      title: 'Estimador de Crecimiento Comercial',
      regionNote: 'Personalizado para la región {region} ({symbol})',
      industryLabel: 'Tu Sector Industrial:',
      trafficLabel: 'Tráfico Mensual / Visitantes:',
      goalLabel: 'Objetivo Principal de Crecimiento:',
      impactHeader: 'Impacto de Crecimiento Mensual Estimado:',
      leadsMo: 'Contactos/mes',
      revenueMo: 'Ingresos',
      ctaBtn: 'Reclamar Mi Plan Personalizado en WhatsApp',
    },
  },
  FR: {
    hero: {
      topBadge: '🚀 Développer les Entreprises aux États-Unis • Royaume-Uni • Europe',
      headlinePart1: 'Développez votre Entreprise avec des Sites, Apps et Marketing qui',
      headlineHighlight: 'Génèrent des Résultats.',
      subtitle: 'Que vous lanciez une nouvelle activité ou développiez une entreprise existante, nous vous aidons à attirer plus de clients avec des sites web à haute conversion, des applications mobiles performantes et du référencement SEO stratégique.',
      badges: {
        web: 'Développement Web',
        apps: 'Applications Mobiles',
        seo: 'Référencement SEO',
        ppc: 'Google Ads (PPC)',
        gbp: 'Fiche Google Business',
        smm: 'Marketing Réseaux Sociaux',
      },
      ctaWhatsapp: 'Discuter sur WhatsApp',
      ctaWork: 'Découvrir nos Réalisations',
      ctaAudit: 'Audit Web Gratuit →',
    },
    process: {
      badge: 'Exécution Éprouvée en 14 Jours',
      title: 'Notre Processus: Du Concept à la Domination du Marché',
      subtitle: 'Nous recueillons vos besoins, livrons une première version entièrement fonctionnelle pour juger de la qualité, puis optimisons avec du SEO sur-mesure.',
    },
    services: {
      badge: 'Services Numériques Complets',
      title: 'Solutions Numériques à Haut Impact pour une Croissance Mesurable',
      subtitle: 'Du développement web sur mesure et applications mobiles Flutter à la domination du SEO local sur Google Maps, campagnes de réseaux sociaux et workflows automatisés.',
      categories: {
        all: 'Les 12 Services',
        web: 'Web & Applications',
        seo: 'SEO & Campagnes',
        ppc: 'Marketing Réseaux Sociaux',
        gbp: 'Automation & Design',
      },
    },
    stats: {
      title: 'L\'Impact en Chiffres',
      subtitle: 'Des résultats de performance réels obtenus pour nos clients aux États-Unis, au Royaume-Uni et en Europe.',
    },
    portfolio: {
      badge: 'Études de Cas Récents',
      title: 'Notre Travail Parle d\'Il-Même: Vitrine de Projets en Ligne',
      subtitle: 'Découvrez des applications déployées en direct, conçues pour une performance maximale, une élégance esthétique et la génération de revenus.',
    },
    whyUs: {
      badge: 'Exécution Axée sur le ROI',
      title: 'Pourquoi les Entreprises Performantes Nous Choisissent',
      subtitle: 'Nous mesurons le succès en contrats signés, appels entrants et augmentation du chiffre d\'affaires. Voici pourquoi les dirigeants choisissent Webtron Solution.',
      calcTitle: 'Estimateur Interactif de Prospects et Revenus',
      calcDesc: 'Découvrez les revenus supplémentaires que votre entreprise pourrait générer en améliorant la vitesse de votre site, l\'architecture de conversion et le SEO local.',
      calcVisitors: 'Visiteurs Mensuels Estimés du Site:',
      calcStandard: 'Conversion Standard (1%)',
      calcOptimized: 'Optimisation Webtron Solution (4.2%)',
      calcRevenueLift: 'Augmentation Estimée des Revenus Mensuels',
      calcCta: 'Réclamer cette Augmentation sur WhatsApp',
    },
    partner: {
      badge: 'Pourquoi 90% des Sites Web Échouent',
      title: 'Votre Partenaire de Confiance: Correction des Présences Inefficaces',
      subtitle: 'La plupart des propriétaires dépensent des milliers dans des sites lents sans prospects. Nous les remplaçons par des moteurs de croissance à haute conversion.',
      tabProblems: 'Pièges Fréquents des Entreprises ❌',
      tabSolutions: 'La Solution Webtron ✅',
    },
    businessGrowth: {
      badge: 'Masterclass de Croissance Digitale',
      title: 'Comment l\'Architecture Digitale Moderne Génère des Clients de Manière Prévisible',
      subtitle: 'Comprendre les principes économiques derrière les sites à haute conversion, le SEO local, les applications mobiles et les tunnels de vente automatisés.',
    },
    testimonials: {
      badge: 'Note 4.9/5 sur Plus de 250 Projets',
      title: 'Fait Confiance aux Dirigeants aux USA, UK et Europe',
      subtitle: 'Lisez les avis de fondateurs, directeurs généraux et cadres de la santé partenaires de Webtron Solution.',
      ctaText: 'Rejoignez Plus de 250 Clients Satisfaits sur WhatsApp',
    },
    faq: {
      badge: 'Centre d\'Aide Client & SEO',
      title: 'Foire Aux Questions',
      subtitle: 'Tout ce que vous devez savoir sur notre développement web sur mesure, nos applications mobiles, nos campagnes SEO et nos modèles de tarification.',
    },
    ctaSection: {
      badge: 'Transformez Votre Présence Digitale Dès Aujourd\'hui',
      title: 'Prêt à Faire Grandir Votre Entreprise ?',
      subtitle: 'Développons un site web et une stratégie marketing qui vous apportent plus de clients, de prospects et de ventes.',
      presetHeader: 'Ou choisissez un sujet instantané à discuter sur WhatsApp :',
      presets: {
        website: 'Développement Web Sur Mesure',
        seo: 'SEO Google & Google Maps Page 1',
        app: 'Développement d\'Applications Mobiles',
        audit: 'Audit Gratuit de Vitesse Web',
      },
      btnMain: 'Discuter sur WhatsApp',
      responseTime: 'Temps de réponse habituel: < 5 minutes',
      noPushySales: 'Pas de pression commerciale',
    },
    footer: {
      brandDesc: 'Une agence digitale à forte croissance créant des sites web sur mesure à haute conversion, des applications mobiles, des campagnes SEO techniques, Google Ads (PPC) et fiches Google Business.',
      quickLinks: 'Liens Rapides',
      links: {
        portfolio: 'Portfolio Récent',
        process: 'Processus en 14 Jours',
        services: 'Services Digitaux',
        whyUs: 'Pourquoi Nous Choisir',
        growth: 'Masterclass Croissance',
        faq: 'FAQ Clients',
      },
      capabilities: 'Compétences Clés',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
    },
    modal: {
      title: 'Estimateur de Croissance d\'Entreprise',
      regionNote: 'Personnalisé pour la région {region} ({symbol})',
      industryLabel: 'Votre Secteur d\'Activité :',
      trafficLabel: 'Trafic Mensuel / Visiteurs :',
      goalLabel: 'Objectif Principal de Croissance :',
      impactHeader: 'Impact Estimé sur la Croissance Mensuelle :',
      leadsMo: 'Prospects/mois',
      revenueMo: 'Revenus',
      ctaBtn: 'Réclamer Mon Plan Personnalisé sur WhatsApp',
    },
  },
  DE: {
    hero: {
      topBadge: '🚀 Unternehmensexpanision in den USA • UK • Europa',
      headlinePart1: 'Wachsen Sie mit Websites, Apps & Marketing, die',
      headlineHighlight: 'Ergebnisse Liefern.',
      subtitle: 'Egal, ob Sie ein neues Unternehmen gründen oder ein bestehendes skalieren: Wir helfen Ihnen, mehr Kunden über hochkonvertierende Websites, leistungsstarke Apps und strategisches SEO zu gewinnen.',
      badges: {
        web: 'Website-Entwicklung',
        apps: 'Mobile App-Entwicklung',
        seo: 'SEO-Optimierung',
        ppc: 'Google Ads (PPC)',
        gbp: 'Google Unternehmensprofil',
        smm: 'Social Media Marketing',
      },
      ctaWhatsapp: 'Auf WhatsApp Chatten',
      ctaWork: 'Unsere Arbeiten Entdecken',
      ctaAudit: 'Kostenloses Website-Audit →',
    },
    process: {
      badge: 'Bewährte 14-Tage Wachstumsausführung',
      title: 'Unser Entwicklungsprozess: Vom Konzept zur Marktführerschaft',
      subtitle: 'Wir sammeln grundlegende Details, liefern einen voll funktionsfähigen ersten Website-Entwurf zur Überprüfung und skalieren mit maßgeschneiderten SEO-Plänen.',
    },
    services: {
      badge: 'Umfassende Digitale Dienstleistungen',
      title: 'Wirkungsvolle Digitallösungen für Messbares Unternehmenswachstum',
      subtitle: 'Von maßgeschneiderter Website-Entwicklung und Flutter Mobile Apps bis zur Dominanz bei Google Maps SEO, Social-Media-Kampagnen und automatisierten Workflows.',
      categories: {
        all: 'Alle 12 Leistungen',
        web: 'Web & Mobile Apps',
        seo: 'SEO & Bezahlte Kampagnen',
        ppc: 'Social Media Marketing',
        gbp: 'Automatisierung & Design',
      },
    },
    stats: {
      title: 'Wirkung in Zahlen Geliefert',
      subtitle: 'Echte Leistungs-Benchmarks aus Kundenprojekten in den USA, Großbritannien und Europa.',
    },
    portfolio: {
      badge: 'Ausgewählte Fallstudien',
      title: 'Unsere Arbeit Spricht für Sich: Live-Projekt-Showcase',
      subtitle: 'Entdecken Sie live bereitgestellte Kundenanwendungen, die auf maximale Leistung, ästhetische Eleganz und Umsatzerzielung ausgelegt sind.',
    },
    whyUs: {
      badge: 'ROI-Fokussierte Ausführung',
      title: 'Warum Erfolgreiche Unternehmen Uns Wählen: Messbare Umsatzergebnisse',
      subtitle: 'Wir messen Erfolg an unterzeichneten Verträgen, eingehenden Anrufen und Umsatzwachstum. Deshalb arbeiten Marktführer mit Webtron Solution.',
      calcTitle: 'Interaktiver Schätzer für Anfragen & Umsatzsteigerung',
      calcDesc: 'Sehen Sie, wie viel zusätzlichen Umsatz Ihr Unternehmen erzielen könnte, indem Sie Ihre Website-Geschwindigkeit, Conversion-Architektur und lokales SEO optimieren.',
      calcVisitors: 'Geschätzte Monatliche Website-Besucher:',
      calcStandard: 'Standard 1% Conversion',
      calcOptimized: 'Webtron Solution 4.2% Optimierung',
      calcRevenueLift: 'Prognostizierte Monatliche Umsatzsteigerung',
      calcCta: 'Diesen Umsatzanstieg auf WhatsApp Beanspruchen',
    },
    partner: {
      badge: 'Warum 90% der Unternehmenswebsites Scheitern',
      title: 'Ihr Vertrauter Wachstumspartner: Behebung Ineffektiver Digitalauftritte',
      subtitle: 'Die meisten Inhaber geben Tausende für langsame Websites aus, die keine Kunden bringen. Wir ersetzen diese durch hochkonvertierende Wachstumsmotoren.',
      tabProblems: 'Typische Unternehmensfallen ❌',
      tabSolutions: 'Die Webtron Solution ✅',
    },
    businessGrowth: {
      badge: 'Die Business Growth Masterclass',
      title: 'Wie Moderne Digitale Architektur Vorhersehbare Neukundengewinnung Treibt',
      subtitle: 'Verstehen Sie die wirtschaftlichen Prinzipien hinter hochkonvertierenden Websites, lokalem SEO, mobilen Apps und automatisierten Verkaufsfunnels.',
    },
    testimonials: {
      badge: '4.9/5 Bewertung bei Über 250 Projekten',
      title: 'Vertraut von Führungskräften in den USA, UK & Europa',
      subtitle: 'Lesen Sie, was Gründer, Geschäftsführer und Führungskräfte über die Partnerschaft mit Webtron Solution sagen.',
      ctaText: 'Schließen Sie Sich Über 250 Zufriedenen Kunden auf WhatsApp An',
    },
    faq: {
      badge: 'SEO & Kunden-Hilfecenter',
      title: 'Häufig Gestellte Fragen',
      subtitle: 'Alles, was Sie über unsere maßgeschneiderte Website-Entwicklung, mobilen Apps, lokalen SEO-Kampagnen und Preismodelle wissen müssen.',
    },
    ctaSection: {
      badge: 'Transformieren Sie Ihre Digitale Präsenz Heute',
      title: 'Bereit, Ihr Unternehmen zu Skalieren?',
      subtitle: 'Lassen Sie uns eine Website und Marketingstrategie entwickeln, die Ihnen mehr Kunden, mehr Anfragen und mehr Verkäufe bringt.',
      presetHeader: 'Oder wählen Sie ein Sofort-Thema für WhatsApp:',
      presets: {
        website: 'Maßgeschneiderte Website-Entwicklung',
        seo: 'Google SEO & Maps Seite 1',
        app: 'Mobile App-Entwicklung',
        audit: 'Kostenloses Website-Geschwindigkeits-Audit',
      },
      btnMain: 'Auf WhatsApp Chatten',
      responseTime: 'Typische Antwortzeit: < 5 Minuten',
      noPushySales: 'Keine aufdringlichen Verkaufsgespräche',
    },
    footer: {
      brandDesc: 'Eine wachstumsstarke Digitalagentur für maßgeschneiderte High-Conversion-Websites, mobile Anwendungen, technisches SEO, Google Ads (PPC) und Google Business-Profile.',
      quickLinks: 'Quick-Links',
      links: {
        portfolio: 'Ausgewähltes Portfolio',
        process: '14-Tage-Prozess',
        services: 'Digitale Leistungen',
        whyUs: 'Warum Uns Wählen',
        growth: 'Wachstums-Masterclass',
        faq: 'Kunden-FAQ',
      },
      capabilities: 'Kernkompetenzen',
      rights: 'Alle Rechte vorbehalten.',
      privacy: 'Datenschutzrichtlinie',
      terms: 'Nutzungsbedingungen',
    },
    modal: {
      title: 'Unternehmenswachstumsschätzer',
      regionNote: 'Angepasst für die Region {region} ({symbol})',
      industryLabel: 'Ihre Branche:',
      trafficLabel: 'Monatlicher Traffic / Besucher:',
      goalLabel: 'Primäres Wachstumsziel:',
      impactHeader: 'Geschätzte Monatliche Auswirkung:',
      leadsMo: 'Anfragen/Monat',
      revenueMo: 'Umsatz',
      ctaBtn: 'Meinen Individuellen Plan Auf WhatsApp Anfordern',
    },
  },
};
