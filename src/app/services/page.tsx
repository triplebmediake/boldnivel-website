import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesCategories from '@/app/services/components/ServicesCategories';
import DeliveryFormats from '@/app/services/components/DeliveryFormats';
import ServicesCTA from '@/app/services/components/ServicesCTA';

export const metadata = {
  title: 'Services — Bold Nivel Leadership & Coaching',
  description: 'Explore Bold Nivel\'s full spectrum of leadership training, coaching, personal branding, and interpersonal skills services — all built on the IPL Model.',
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesCategories />
      <DeliveryFormats />
      <ServicesCTA />
      <Footer />
    </main>
  );
}