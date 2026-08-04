import React, { useEffect } from 'react';
import { FAQ_ITEMS, WHATSAPP_NUMBER } from '../data/agencyData';

export const SEOHead: React.FC = () => {
  useEffect(() => {
    // 1. Set Document Title
    document.title = "Webtron Solution | Growth Agency — Websites, Mobile Apps, SEO & Google Ads";

    // 2. Helper to set or create meta tags
    const setMetaTag = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${nameAttr}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', 'Grow your business across US, UK & Europe with custom Website Development, Mobile Apps, SEO, Google Ads (PPC), Google Business Profile Optimization, and Local SEO services. Chat on WhatsApp for an instant growth strategy.');
    setMetaTag('name', 'keywords', 'Website Development, Professional Website Design, Custom Website Development, Business Website Development, Website Development Agency, Mobile App Development, iOS App Development, Android App Development, Flutter App Development, SEO Services, Search Engine Optimization, Google Ads, PPC Management, Technical SEO, On Page SEO, Off Page SEO, Local SEO, Google Business Profile Optimization, Google Maps Ranking, SEO Agency, Digital Marketing Agency, Social Media Marketing, Lead Generation, Conversion Rate Optimization');
    setMetaTag('name', 'author', 'Webtron Solution');
    setMetaTag('name', 'viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Open Graph / Facebook
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:title', 'Webtron Solution | Premier Website Development, Mobile Apps, SEO & Google Ads Agency');
    setMetaTag('property', 'og:description', 'We build high-converting websites, mobile apps, and rank businesses #1 on Google across the US, UK & Europe.');
    setMetaTag('property', 'og:site_name', 'Webtron Solution');

    // 5. Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', 'Webtron Solution | Digital Growth & Web Development');
    setMetaTag('name', 'twitter:description', 'Custom Website Development, Apps, SEO & Google Business Profile Optimization. WhatsApp: ' + WHATSAPP_NUMBER);

    // 6. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href.split('#')[0]);

    // 7. Inject JSON-LD Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Webtron Solution",
      "image": window.location.origin + "/assets/images/hero_agency_bg.jpg",
      "@id": window.location.href + "#organization",
      "url": window.location.href,
      "telephone": WHATSAPP_NUMBER,
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "areaServed": [
        "United States",
        "United Kingdom",
        "Europe",
        "Global"
      ],
      "knowsAbout": [
        "Website Development",
        "Mobile App Development",
        "SEO Services",
        "Search Engine Optimization",
        "Google Business Profile Optimization",
        "Local SEO",
        "Digital Marketing Agency",
        "Conversion Rate Optimization"
      ],
      "sameAs": [
        "https://wa.me/919123783441"
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    let scriptOrg = document.getElementById('json-ld-org');
    if (!scriptOrg) {
      scriptOrg = document.createElement('script');
      scriptOrg.id = 'json-ld-org';
      scriptOrg.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptOrg);
    }
    scriptOrg.textContent = JSON.stringify(organizationSchema);

    let scriptFaq = document.getElementById('json-ld-faq');
    if (!scriptFaq) {
      scriptFaq = document.createElement('script');
      scriptFaq.id = 'json-ld-faq';
      scriptFaq.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptFaq);
    }
    scriptFaq.textContent = JSON.stringify(faqSchema);

  }, []);

  return null;
};
