import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactContent from '@/app/contact/components/ContactContent';

export const metadata = {
  title: 'Contact Bold Nivel — Book a Consultation',
  description: 'Get in touch with Bold Nivel Ltd. Book a consultation with Hope Waiganjo to begin your leadership and transformation journey.',
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <ContactHero />
      <ContactContent />
      <Footer />
    </main>
  );
}