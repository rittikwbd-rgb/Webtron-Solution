import React, { useState } from 'react';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedGrowthPartnerSection } from './components/TrustedGrowthPartnerSection';
import { AnimatedStatsSection } from './components/AnimatedStatsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FeaturedPortfolioSection } from './components/FeaturedPortfolioSection';
import { DevelopmentProcessSection } from './components/DevelopmentProcessSection';
import { BusinessGrowthSection } from './components/BusinessGrowthSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { StickyWhatsAppCTA } from './components/StickyWhatsAppCTA';
import { InteractiveGrowthCalculatorModal } from './components/InteractiveGrowthCalculatorModal';
import { TargetRegion, AppLanguage } from './types';

export default function App() {
  const [currentRegion, setCurrentRegion] = useState<TargetRegion>('US');
  const [currentLanguage, setCurrentLanguage] = useState<AppLanguage>('EN');
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* 1. Dynamic SEO & Schema Injection */}
      <SEOHead />

      {/* 2. Fixed Glassmorphism Navbar */}
      <Navbar
        currentRegion={currentRegion}
        onRegionChange={setCurrentRegion}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onOpenCalculator={() => setCalculatorOpen(true)}
      />

      {/* 3. Main Landing Sections */}
      <main>
        {/* SECTION 1: Hero Section */}
        <HeroSection
          currentRegion={currentRegion}
          currentLanguage={currentLanguage}
          onOpenCalculator={() => setCalculatorOpen(true)}
        />

        {/* SECTION 2: Development Process (From Concept To Market Dominance) */}
        <DevelopmentProcessSection currentLanguage={currentLanguage} />

        {/* SECTION 3: High Impact Digital Solutions For Measurable Business Growth */}
        <ServicesSection currentLanguage={currentLanguage} />

        {/* SECTION 4: Animated Statistics (Impact Delivered In Numbers) */}
        <AnimatedStatsSection currentLanguage={currentLanguage} />

        {/* SECTION 5: Featured Client Showcase */}
        <FeaturedPortfolioSection currentLanguage={currentLanguage} />

        {/* SECTION 6: Why Successful Businesses Choose Us */}
        <WhyChooseUsSection currentRegion={currentRegion} currentLanguage={currentLanguage} />
        <TrustedGrowthPartnerSection currentLanguage={currentLanguage} />

        {/* SECTION 7: How Modern Digital Architecture Drives Predictable Customer Acquisition */}
        <BusinessGrowthSection currentLanguage={currentLanguage} />

        {/* SECTION 8: Trusted By Business Leaders Across The US, UK & Europe */}
        <TestimonialsSection currentLanguage={currentLanguage} />

        {/* SECTION 9: FAQ */}
        <FAQSection currentLanguage={currentLanguage} />

        {/* SECTION 10: Final CTA */}
        <FinalCTASection currentLanguage={currentLanguage} />
      </main>

      {/* 4. Agency Footer */}
      <FooterSection currentLanguage={currentLanguage} />

      {/* 5. Sticky WhatsApp Floating Action Button */}
      <StickyWhatsAppCTA currentLanguage={currentLanguage} />

      {/* 6. Interactive ROI Growth Calculator Modal */}
      <InteractiveGrowthCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        currentRegion={currentRegion}
        currentLanguage={currentLanguage}
      />

    </div>
  );
}
