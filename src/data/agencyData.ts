import { Service, Project, Statistic, Testimonial, FAQItem, ProblemSolution, ProcessStep, ChooseUsReason } from '../types';

import heroBgImage from '../assets/images/hero_agency_bg_1785758839449.jpg';
import medicalImage from '../assets/images/portfolio_medical_1785758855739.jpg';
import constructionImage from '../assets/images/portfolio_construction_1785758869561.jpg';
import ecommerceImage from '../assets/images/portfolio_ecommerce_1785758883520.jpg';

export const WHATSAPP_NUMBER = '+91 9123783441';
export const WHATSAPP_LINK = 'https://wa.me/919123783441';
export const WHATSAPP_MESSAGE_PRESETS = {
  general: 'https://wa.me/919123783441?text=Hi!%20I%20would%20like%20to%20discuss%20growing%20my%20business%20with%20your%20services.',
  website: 'https://wa.me/919123783441?text=Hi!%20I%20need%20a%20high-converting%20website%20development%20quote%20for%20my%20business.',
  seo: 'https://wa.me/919123783441?text=Hi!%20I%20want%20to%20increase%20my%20Google%20rankings%20and%20Local%20SEO%20visibility.',
  app: 'https://wa.me/919123783441?text=Hi!%20I%20am%20looking%20for%20custom%20mobile%20app%20development%20for%20iOS%20and%20Android.',
  audit: 'https://wa.me/919123783441?text=Hi!%20I%20would%20like%20a%20free%20website%20speed%20and%20SEO%20audit%20for%20my%20business.'
};

export const AGENCY_HERO_BG = heroBgImage;

export const SERVICES_LIST: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'End-to-end custom website engineering including UI/UX design, sub-second performance, top SEO rankings, and ongoing security maintenance.',
    fullDesc: 'We craft bespoke, enterprise-grade business websites engineered with intuitive UI/UX design, ultra-fast page speeds, persuasive conversion funnels, and 24/7 proactive maintenance and security. Designed specifically for small businesses, startups, and growing enterprises across the US, UK, and Europe.',
    iconName: 'Globe',
    category: 'web_apps',
    deliverables: [
      'UI/UX Design & High-Fidelity Prototyping',
      'Custom React / Next.js Architecture',
      'Proactive Maintenance, Security & Backups',
      'Mobile-First Responsive Design',
      'Sub-Second Load Times & Core Web Vitals',
      'Conversion Rate Optimized Layouts',
      'CMS Integration & Easy Content Management'
    ],
    roiImpact: 'Avg +240% increase in inbound sales inquiries within 60 days.',
    keywords: ['Website Development', 'Professional Website Design', 'UI UX Website Design', 'Custom Website Development', 'Website Maintenance & Security', 'Business Website Development', 'Responsive Website Design', 'React Development', 'WordPress Development'],
    popular: true
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Native iOS, Android, and cross-platform Flutter mobile applications built for retention, monetization, and seamless performance.',
    fullDesc: 'Transform your business vision into powerful mobile applications for App Store and Google Play. We design engaging mobile experiences with offline caching, push notifications, native feature integration, and slick UI micro-interactions.',
    iconName: 'Smartphone',
    category: 'web_apps',
    deliverables: ['iOS & Android App Development', 'Flutter Cross-Platform Codebase', 'User-Centric UI/UX Prototyping', 'Secure Payment Gateway & API Integration', 'Real-time Push Notifications', 'App Store & Play Store Publishing'],
    roiImpact: 'Avg 4.8★ app rating with 68% repeat monthly active user retention.',
    keywords: ['Mobile App Development', 'Android App Development', 'iOS App Development', 'Flutter App Development', 'App Developer', 'Cross Platform App Development']
  },
  {
    id: 'seo-services',
    title: 'SEO Services',
    shortDesc: 'Data-driven Search Engine Optimization that ranks your business on Page 1 of Google for high-intent buyer keywords.',
    fullDesc: 'Dominating organic search results requires a comprehensive strategy combining technical site audits, authoritative backlink building, content optimization, and keyword clustering tailored to your exact industry and target geographical market.',
    iconName: 'TrendingUp',
    category: 'seo_growth',
    deliverables: ['Comprehensive Technical SEO Audit', 'Competitor Keyword Gap Analysis', 'On-Page SEO Content Optimization', 'Authority Off-Page Link Building', 'Schema Markup & Structured Data', 'Monthly Ranking & Traffic Reports'],
    roiImpact: 'Avg +380% organic keyword growth and consistent zero-ad-cost leads.',
    keywords: ['SEO Services', 'Search Engine Optimization', 'Technical SEO', 'On Page SEO', 'Off Page SEO', 'SEO Agency', 'Organic Traffic Growth'],
    popular: true
  },
  {
    id: 'google-business-profile',
    title: 'Google Business Profile Optimization',
    shortDesc: 'Dominate Google Maps local 3-pack rankings and turn local searches into direct phone calls and foot traffic.',
    fullDesc: 'Over 82% of local customers search on Google Maps before choosing a service provider. We fully optimize your Google Business Profile with structured categories, geofenced citations, review generation strategies, and weekly post updates.',
    iconName: 'MapPin',
    category: 'seo_growth',
    deliverables: ['Google Business Profile Verification & Setup', 'Geotagged Media & Photo Optimization', 'Local NAP Consistency Alignment', 'Google Maps Local 3-Pack Ranking Strategy', 'Automated Review Request Systems', 'Weekly GBP Posts & Q&A Optimization'],
    roiImpact: 'Avg +310% increase in direct phone calls and direction requests.',
    keywords: ['Google Business Profile Optimization', 'Google Maps Ranking', 'Local SEO', 'Google My Business Expert', 'Local Maps Marketing'],
    popular: true
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    shortDesc: 'Hyper-targeted geo-location SEO campaigns targeting local buyers in specific cities across the US, UK, and Europe.',
    fullDesc: 'Capture ready-to-buy customers in your immediate target cities and neighborhoods. We create localized landing pages, manage regional business directories, and build location authority signals that guarantee local dominance.',
    iconName: 'Compass',
    category: 'seo_growth',
    deliverables: ['Multi-City Location Landing Pages', 'Local Citation & Directory Distribution', 'Localized Backlink Outreach', 'Geo-Targeted Schema Integration', 'Review Management Strategy', 'City-Level Keyword Domination'],
    roiImpact: 'Avg #1 spot for high-value local transactional queries.',
    keywords: ['Local SEO', 'Local Business Marketing', 'Google Maps Local SEO', 'Geo Targeted Marketing', 'Small Business Website SEO']
  },
  {
    id: 'google-paid-campaigns',
    title: 'Google Paid Campaigns (PPC)',
    shortDesc: 'High-ROI Google Ads spanning Search, Performance Max, Video, and Conversion Optimization for instant buyer acquisition.',
    fullDesc: 'Dominate Google Search and YouTube with hyper-targeted paid advertising campaigns. We engineer high-converting Search ads, Performance Max (PMax) AI campaigns, YouTube video ads, and dynamic retargeting funnels designed for maximum ROI and immediate, predictable lead generation.',
    iconName: 'Target',
    category: 'seo_growth',
    deliverables: [
      'Google Search Ads & High-Intent Keyword Targeting',
      'Performance Max (PMax) AI Campaign Setup',
      'YouTube & Video Ad Campaign Management',
      'Conversion Rate & Funnel ROI Optimization',
      'Audience Retargeting & Remarketing Funnels',
      'Negative Keyword Protection & Budget Optimization'
    ],
    roiImpact: 'Avg 4.8x ROAS with immediate high-intent lead flow.',
    keywords: ['Google Paid Campaigns', 'Google Ads', 'PPC Management', 'Performance Max Campaigns', 'Google Search Ads', 'YouTube Ads', 'Conversion Optimization', 'Google Ads Agency'],
    popular: true
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Strategic social content, lead gen ads, and brand building across Meta, LinkedIn, Instagram, and TikTok.',
    fullDesc: 'Build a commanding brand presence on social media with custom content design, video reels, influencer partnerships, and laser-targeted lead generation ad campaigns optimized for high ROAS.',
    iconName: 'Share2',
    category: 'social_media',
    deliverables: ['Social Brand Strategy & Visual Identity', 'Custom Graphic & Video Reel Creation', 'Meta & LinkedIn Lead Gen Ad Campaigns', 'Audience Retargeting Funnels', 'Community Management & Engagement', 'Monthly ROAS Performance Analytics'],
    roiImpact: 'Avg 4.2x ROAS on paid campaign ad spends.',
    keywords: ['Social Media Marketing', 'Digital Marketing Agency', 'Lead Generation', 'Online Marketing', 'Meta Ads', 'LinkedIn Marketing']
  },
  {
    id: 'performance-optimization',
    title: 'Performance & Speed Optimization',
    shortDesc: 'Transform slow, sluggish websites into sub-second, 99+ PageSpeed score powerhouses that convert higher.',
    fullDesc: 'Website speed is a primary Google ranking factor and conversion driver. A 1-second delay reduces conversions by 7%. We re-engineer codebases, optimize media, leverage edge CDNs, and eliminate bloat to hit green 90+ Lighthouse scores.',
    iconName: 'Zap',
    category: 'automation_design',
    deliverables: ['Google PageSpeed & Core Web Vitals Audit', 'Image & Asset Compression / WebP Conversion', 'Code Minification & Unused CSS Clean-up', 'Global CDN Setup (Cloudflare / Cloud Run)', 'Server Caching Architecture', 'Database Query Optimization'],
    roiImpact: 'Achieve 95-100 Core Web Vitals score & +35% instant conversion boost.',
    keywords: ['Website Speed Optimization', 'Core Web Vitals', 'PageSpeed Optimization', 'Conversion Rate Optimization', 'Website Redesign']
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'terra-nova-medical',
    title: 'Terra Nova Medical',
    url: 'https://terranovamedical.netlify.app/',
    industry: 'Healthcare & Medical Practice',
    servicesProvided: ['Website Development', 'UI/UX Design', 'Local SEO', 'Google Business Profile', 'Patient Portal Integration'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    image: medicalImage,
    overview: 'A high-converting, accessible digital patient appointment platform designed for a premier medical practice. Replaced an outdated static portal with a sub-second booking experience that increased direct appointments while establishing regional medical authority.',
    results: [
      { label: 'Patient Inquiries', value: '+310%', change: 'in first 60 days' },
      { label: 'Page Speed Score', value: '99/100', change: 'Google Lighthouse' },
      { label: 'Local Search Position', value: '#1', change: 'Google Maps 3-Pack' }
    ],
    location: 'Vancouver, NA / US Region'
  },
  {
    id: 'vvk-constructions',
    title: 'VVK Constructions',
    url: 'https://vkconstructions.netlify.app/',
    industry: 'Commercial Construction & Architecture',
    servicesProvided: ['Custom Website Development', 'Interactive 3D Portfolio Showcase', 'Technical SEO', 'Lead Generation Engine'],
    techStack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'SEO Schema', 'WhatsApp API'],
    image: constructionImage,
    overview: 'An ultra-luxurious, dark-mode corporate showcase for a high-end commercial construction and architectural firm. Displays multi-million dollar project portfolios with interactive project spec cards, immersive visuals, and instant WhatsApp inquiry funnels.',
    results: [
      { label: 'Commercial Bids', value: '$4.2M+', change: 'pipeline inquiries' },
      { label: 'Bounce Rate', value: '22%', change: 'down from 68%' },
      { label: 'Conversion Rate', value: '+285%', change: 'inbound RFQs' }
    ],
    location: 'United Kingdom & Europe'
  },
  {
    id: 'max-pet-corner',
    title: 'Max Pet Corner',
    url: 'https://maxpetcornerus.netlify.app/',
    industry: 'E-commerce & Luxury Pet Care',
    servicesProvided: ['E-commerce Web Development', 'UI/UX Design', 'Conversion Rate Optimization', 'Social Media Ad Integration'],
    techStack: ['React', 'Tailwind CSS', 'Mobile First PWA', 'Schema Markup', 'Analytics'],
    image: ecommerceImage,
    overview: 'A vibrant, mobile-first e-commerce website designed for a luxury pet supplies and grooming brand. Optimized for lightning checkout speeds, product filters, and localized delivery scheduling that doubled online order conversions.',
    results: [
      { label: 'Online Sales Growth', value: '+240%', change: 'quarter-over-quarter' },
      { label: 'Mobile Conversion', value: '4.8%', change: 'industry avg 1.9%' },
      { label: 'Customer Retention', value: '72%', change: 'repeat buyer rate' }
    ],
    location: 'United States & UK'
  }
];

export const ANIMATED_STATISTICS: Statistic[] = [
  {
    id: 'projects-delivered',
    numberValue: 250,
    prefix: '',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'High-performing websites & mobile apps launched successfully for clients in US, UK & Europe.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'client-satisfaction',
    numberValue: 99.4,
    prefix: '',
    suffix: '%',
    label: 'Client Retention Rate',
    description: 'Long-term partners who scale their digital growth and marketing campaigns with us.',
    iconName: 'Star'
  },
  {
    id: 'performance-score',
    numberValue: 99,
    prefix: '',
    suffix: '/100',
    label: 'Avg PageSpeed Score',
    description: 'Google Core Web Vitals performance benchmark achieved across all client sites.',
    iconName: 'Zap'
  },
  {
    id: 'seo-optimized-pages',
    numberValue: 15000,
    prefix: '',
    suffix: '+',
    label: 'SEO Pages Ranked',
    description: 'Targeted high-intent search terms dominating Google Page 1 search results.',
    iconName: 'TrendingUp'
  },
  {
    id: 'countries-served',
    numberValue: 18,
    prefix: '',
    suffix: '+',
    label: 'Countries Served',
    description: 'Businesses empowered across the United States, United Kingdom, and Western Europe.',
    iconName: 'Globe2'
  },
  {
    id: 'fast-delivery',
    numberValue: 14,
    prefix: 'Avg ',
    suffix: ' Days',
    label: 'Rapid Execution',
    description: 'Average time from strategy sign-off to full production launch without compromising quality.',
    iconName: 'Clock'
  }
];

export const PROBLEM_SOLUTIONS: ProblemSolution[] = [
  {
    id: 'slow-websites',
    problemTitle: 'Slow, Sluggish Websites',
    problemDesc: '53% of mobile visitors abandon a website if it takes longer than 3 seconds to load. Slow speeds kill your ad spend and rankings.',
    solutionTitle: 'Sub-Second Global Architecture',
    solutionDesc: 'We build with modern edge-cached React architecture that loads in milliseconds, keeping 100% of prospective buyers engaged.',
    impactMetric: '3.4x higher retention rate',
    iconName: 'Gauge'
  },
  {
    id: 'poor-seo',
    problemTitle: 'Poor SEO & Zero Search Visibility',
    problemDesc: 'If your business isn’t on Page 1 of Google, you are paying rent on a digital desert where 92% of buyers never venture.',
    solutionTitle: 'Page 1 Keyword Dominance',
    solutionDesc: 'Our technical SEO and local schema strategies systematically move your domain into Google’s top ranking positions.',
    impactMetric: '+380% organic traffic',
    iconName: 'Search'
  },
  {
    id: 'bad-ux',
    problemTitle: 'Confusing User Experience & Bad Layouts',
    problemDesc: 'Cluttered design, hard-to-read text, and broken forms make visitors leave within 5 seconds to buy from your competitor.',
    solutionTitle: 'Apple-Grade UI/UX Discipline',
    solutionDesc: 'We craft pristine visual hierarchy, intuitive journeys, and frictionless action points that turn visitors into eager clients.',
    impactMetric: '+215% form completions',
    iconName: 'MousePointerClick'
  },
  {
    id: 'no-gbp-maps',
    problemTitle: 'No Google Maps / Local Rankings',
    problemDesc: 'Missing out on the Google Maps Local 3-Pack means local customers in your city call your competitors instead.',
    solutionTitle: 'Google Business Profile Domination',
    solutionDesc: 'We fully optimize your map listing, local geotags, and review triggers so you own the top spot for local search.',
    impactMetric: '+310% direct phone calls',
    iconName: 'Map'
  },
  {
    id: 'weak-branding',
    problemTitle: 'Outdated & Unprofessional Branding',
    problemDesc: 'An old, cheap-looking website destroys customer trust before they even read your offer, forcing you to compete on price.',
    solutionTitle: '$50M+ Enterprise Authority Aesthetics',
    solutionDesc: 'We elevate your visual presence to match world-class brands, allowing you to charge premium prices with confidence.',
    impactMetric: 'Command 2x higher pricing',
    iconName: 'Award'
  },
  {
    id: 'poor-conversion',
    problemTitle: 'Traffic Without Lead Generation',
    problemDesc: 'Getting website visits is useless if no one contacts you. Traditional sites lack direct conversion triggers.',
    solutionTitle: '1-Click WhatsApp & Instant Lead Funnels',
    solutionDesc: 'We embed high-converting WhatsApp CTAs, interactive quote calculators, and automated booking widgets on every page.',
    impactMetric: '3x-5x higher lead conversions',
    iconName: 'MessageSquareCode'
  }
];

export const CHOOSE_US_REASONS: ChooseUsReason[] = [
  {
    id: 'more-leads',
    title: 'Predictable Lead Generation',
    subtitle: 'Turn your website into a 24/7 client acquisition engine.',
    description: 'We don’t just build pretty pages; we engineer sales funnels designed to convert qualified decision-makers into direct WhatsApp chats and booked calls.',
    metric: '3x-5x',
    metricLabel: 'Inbound Lead Increase',
    iconName: 'Target'
  },
  {
    id: 'phone-calls',
    title: 'More High-Intent Phone Calls',
    subtitle: 'Capture ready-to-buy local customers when they need you.',
    description: 'By dominating Google Business Profile and Local SEO keywords, we connect your business directly with local clients actively searching for immediate services.',
    metric: '+310%',
    metricLabel: 'More Direct Calls',
    iconName: 'PhoneCall'
  },
  {
    id: 'google-rankings',
    title: 'Top #1 Google Search Rankings',
    subtitle: 'Stop paying endlessly for ads. Claim permanent search equity.',
    description: 'Our technical SEO and authority link strategies position your brand at the absolute top of Google for valuable commercial search terms.',
    metric: 'Page 1',
    metricLabel: 'Guaranteed SEO Focus',
    iconName: 'TrendingUp'
  },
  {
    id: 'speed',
    title: 'Sub-Second Page Load Times',
    subtitle: 'Outperform 99% of web competitors in speed and performance.',
    description: 'Built on high-performance React and edge CDNs, your pages load instantly on mobile devices, boosting Google quality scores and conversions.',
    metric: '< 0.8s',
    metricLabel: 'Avg Load Time',
    iconName: 'Zap'
  },
  {
    id: 'conversion-rate',
    title: 'Higher Conversion Rates (CRO)',
    subtitle: 'Extract maximum revenue from every single website visitor.',
    description: 'Using proven behavioral psychology, clear typography, and 1-click WhatsApp CTAs, we ensure zero traffic is wasted.',
    metric: '+285%',
    metricLabel: 'Conversion Boost',
    iconName: 'BarChart3'
  },
  {
    id: 'business-growth',
    title: 'Long-Term Compound Business Growth',
    subtitle: 'A digital asset that appreciates in value over time.',
    description: 'We partner with you for the long haul, continuously optimizing, security testing, and updating your platform as your business scales globally.',
    metric: '100%',
    metricLabel: 'ROI Dedicated Strategy',
    iconName: 'Rocket'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: '1. Basic Details Intake',
    duration: 'Day 1',
    summary: 'Share basic details: business name, nature of business, and required website type (e.g., online store or custom site).',
    description: 'We begin with a brief, effortless intake. You simply share basic details like your business name, business nature, target market, and the type of website you need (such as an e-commerce online store, service portfolio, or booking portal).',
    deliverables: ['Business Nature & Objectives Brief', 'Website Type Selection (Online Store / Service / Custom)', 'Target Audience & Market Mapping'],
    iconName: 'Search'
  },
  {
    step: 2,
    title: '2. Working First Draft Website',
    duration: 'Day 2 - 4',
    summary: 'We build & present a fully working first draft website so you can judge our work quality firsthand.',
    description: 'Before major commitments, we construct and deliver a fully functional first draft website. You get to interact with live navigation, test mobile layouts, check loading speeds, and evaluate our engineering quality risk-free.',
    deliverables: ['Live Functional First Draft Website', 'Interactive UI & Mobile Responsiveness Preview', 'Speed & Performance Demo'],
    iconName: 'Layout'
  },
  {
    step: 3,
    title: '3. Feedback & Custom Design Refinements',
    duration: 'Day 5 - 7',
    summary: 'Based on your direct feedback on the draft, we refine design, layouts, colors, and feature requirements.',
    description: 'We listen carefully to your feedback on the first draft. We make custom visual adjustments, polish brand aesthetics, refine content structure, and integrate specific features tailored precisely to your vision.',
    deliverables: ['Client Feedback Implementation', 'Bespoke UI/UX Aesthetic Enhancements', 'Custom Feature & Workflow Additions'],
    iconName: 'Compass'
  },
  {
    step: 4,
    title: '4. Advanced SEO & Google Profile Strategy',
    duration: 'Day 8 - 10',
    summary: 'Executing Page 1 Google SEO keyword targeting, local schema, and Google Maps Local 3-Pack setup.',
    description: 'With the design approved, we build an aggressive Search Engine Optimization strategy around buyer-intent keywords for the US, UK, and Europe, and optimize your Google Business Profile for map dominance.',
    deliverables: ['On-Page SEO Keyword Optimization', 'Google Business Profile Setup & Verification', 'Local Schema & Geotargeted Sitemap'],
    iconName: 'TrendingUp'
  },
  {
    step: 5,
    title: '5. Sub-Second Speed & Conversion Funnels',
    duration: 'Day 11 - 12',
    summary: 'Fine-tuning sub-second loading speeds, 1-click WhatsApp CTAs, and automated CRM lead capture.',
    description: 'We optimize Core Web Vitals for sub-second speeds, embed conversion-tested WhatsApp buttons, and connect automated booking forms and client intake funnels.',
    deliverables: ['Sub-Second Edge Speed Optimization', 'High-Converting WhatsApp Lead CTA Buttons', 'Automated CRM & Contact Integration'],
    iconName: 'Code'
  },
  {
    step: 6,
    title: '6. Final QA & Global Production Launch',
    duration: 'Day 13 - 14',
    summary: 'Cross-device testing on 25+ screens, SSL security validation, and instant Google Search Console indexing.',
    description: 'We conduct comprehensive quality checks across mobile, tablet, and desktop screens. Upon final approval, we launch your site to production and submit sitemaps to Google Search Console.',
    deliverables: ['Live Cloud Run Production Deployment', 'Google Search Console Indexing Submission', '25+ Device QA Security Certification'],
    iconName: 'Rocket'
  },
  {
    step: 7,
    title: '7. Continuous Growth & Ongoing Optimization',
    duration: 'Ongoing',
    summary: 'Continuous keyword rank monitoring, speed maintenance, and proactive conversion rate growth.',
    description: 'After launch, we stay by your side—tracking Google rankings, performing security updates, running performance checks, and providing strategic growth recommendations.',
    deliverables: ['Monthly SEO & Ranking Reports', '24/7 Security & Uptime Care', 'Proactive Lead Generation Growth Updates'],
    iconName: 'CheckCircle2'
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Managing Director',
    company: 'Vance Medical Group',
    location: 'London, UK',
    flag: '🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Webtron Solution completely transformed our digital presence. Our previous website was sluggish and brought in zero patient inquiries. Within 30 days of launching the new site and local SEO campaign, our online appointments surged by 310%. The WhatsApp integration is brilliant—patients love the instant communication!',
    metric: '+310%',
    metricLabel: 'Inbound Patient Enquiries',
    verified: true
  },
  {
    id: 'test-2',
    name: 'David Reynolds',
    role: 'Founder & CEO',
    company: 'Apex Commercial Build',
    location: 'Chicago, IL, USA',
    flag: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'The team built an incredible, ultra-luxurious corporate website that immediately sets us apart from every commercial contractor in the Midwest. We secured two multi-million dollar contracts directly through inbound website leads in our first quarter. Worth every single penny.',
    metric: '$4.2M+',
    metricLabel: 'Pipeline Contracts Generated',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Head of Growth',
    company: 'Lumiere Pet Care',
    location: 'Berlin, Germany',
    flag: '🇩🇪',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    content: 'Our Google Business Profile rankings shot up to #1 in our district within weeks. Their understanding of local search and e-commerce UI design is second to none. Communication via WhatsApp was super fast and professional. Highly recommended for European businesses looking to expand!',
    metric: '#1 Rank',
    metricLabel: 'Google Maps Local 3-Pack',
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can you develop and launch a professional business website?',
    answer: 'Our average timeline for a complete, high-converting custom website is 10 to 14 days from strategy sign-off to live launch. For urgent launches or landing pages, we offer accelerated 5-day delivery options. Every project includes full SEO optimization, mobile responsiveness, and WhatsApp lead integration.',
    category: 'website',
    keywords: ['Website Development', 'Timeline', 'Fast Delivery', 'Responsive Website Design']
  },
  {
    id: 'faq-2',
    question: 'How does SEO and Google Business Profile Optimization generate customers for my business?',
    answer: 'SEO positions your website at the very top of Google when potential clients in the US, UK, or Europe search for keywords like "best [your service] near me". Google Business Profile optimization puts your listing in the coveted Google Maps Local 3-Pack. This captures high-intent customers who are ready to make a phone call or chat on WhatsApp immediately.',
    category: 'seo',
    keywords: ['SEO Services', 'Google Business Profile Optimization', 'Local SEO', 'Search Engine Optimization']
  },
  {
    id: 'faq-3',
    question: 'What is the cost of custom website development and digital marketing services?',
    answer: 'We offer tailored pricing based on your specific business goals, scope, and target geographical region (US, UK, or Europe). We focus on delivering a high Return on Investment (ROI)—our projects typically pay for themselves within 30 to 60 days through new client leads. Contact us directly on WhatsApp at +91 9123783441 for an instant quote.',
    category: 'pricing',
    keywords: ['Pricing', 'Website Development Cost', 'SEO Pricing', 'Digital Marketing']
  },
  {
    id: 'faq-4',
    question: 'Why is WhatsApp the primary CTA on your agency landing page?',
    answer: 'WhatsApp provides an instant, friction-free communication channel with a 98% open rate compared to traditional email forms (which average 20%). Prospective business clients in the US, UK, and Europe prefer instant replies, enabling us to answer your project questions, review your site, and share proposals in real time.',
    category: 'support',
    keywords: ['WhatsApp CTA', 'Lead Generation', 'Conversion Rate Optimization', 'Direct Communication']
  },
  {
    id: 'faq-5',
    question: 'Do you develop custom iOS, Android, and Flutter mobile applications?',
    answer: 'Yes! We specialize in custom mobile app development using Flutter for cross-platform iOS and Android apps, as well as native Swift and Kotlin codebases. We handle user interface design, app store optimization, backend API integration, payment processing, and publishing to Apple App Store and Google Play.',
    category: 'app',
    keywords: ['Mobile App Development', 'Flutter App Development', 'iOS App Development', 'Android App Development']
  },
  {
    id: 'faq-6',
    question: 'Will my website perform well on Google PageSpeed and mobile devices?',
    answer: 'Guaranteed. We engineer all websites with React 19, modern CSS, edge CDN hosting, and compressed media. Our builds consistently achieve 90+ to 100 scores on Google Core Web Vitals and PageSpeed Insights, ensuring zero user drop-off and optimal SEO ranking boosts.',
    category: 'maintenance',
    keywords: ['Website Speed Optimization', 'Google PageSpeed', 'Core Web Vitals', 'Responsive Design']
  },
  {
    id: 'faq-7',
    question: 'Do you provide ongoing website maintenance, security updates, and SEO support?',
    answer: 'Yes, we offer comprehensive 24/7 Web Care & Maintenance packages. This includes daily automated cloud backups, security firewall monitoring, plugin/core updates, speed optimizations, monthly content edits, and continuous SEO rank tracking so your digital presence never goes outdated.',
    category: 'maintenance',
    keywords: ['Website Maintenance', 'Website Security', 'SEO Agency', 'Ongoing Support']
  },
  {
    id: 'faq-8',
    question: 'How do I get started with your digital agency?',
    answer: 'Getting started takes under 2 minutes! Simply click "Chat on WhatsApp" or message us directly at +91 9123783441. We will review your current website or idea, perform a free initial audit, and provide a clear growth strategy tailored to your industry and target market.',
    category: 'timeline',
    keywords: ['Get Started', 'WhatsApp Chat', 'Digital Agency', 'Growth Strategy']
  }
];
