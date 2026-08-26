import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import IPLModelSection from '@/app/components/IPLModelSection';
import ProblemSection from '@/app/components/ProblemSection';
import WhoWeServeSection from '@/app/components/WhoWeServeSection';
import ServicesOverviewSection from '@/app/components/ServicesOverviewSection';
import SignatureProgramsSection from '@/app/components/SignatureProgramsSection';
import WhyBoldNivelSection from '@/app/components/WhyBoldNivelSection';
import ResultsSection from '@/app/components/ResultsSection';
import FounderSection from '@/app/components/FounderSection';
import PromiseSection from '@/app/components/PromiseSection';
import CTASection from '@/app/components/CTASection';

export default function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <IPLModelSection />
      <ProblemSection />
      <WhoWeServeSection />
      <ServicesOverviewSection />
      <SignatureProgramsSection />
      <WhyBoldNivelSection />
      <ResultsSection />
      <FounderSection />
      <PromiseSection />
      <CTASection />
      <Footer />
    </main>
  );
}