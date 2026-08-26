import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 teal-glow-bg" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="section-label block mb-6">Ready to Get Started?</span>
        <h2
          className="font-display font-black text-foreground uppercase tracking-tighter mb-6"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 0.9 }}
        >
          Let&apos;s Design
          <br />
          <span className="text-shimmer">Your Program.</span>
        </h2>
        <p className="text-muted-foreground mb-10 leading-relaxed mx-auto" style={{ fontSize: '1rem', maxWidth: '440px' }}>
          Every engagement begins with a conversation. Tell us about your organization or
          your personal goals, and we will design something that fits.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="cta-btn-primary">
            Book a Consultation
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
          <Link href="/contact" className="cta-btn-outline">
            Contact Bold Nivel
          </Link>
        </div>
      </div>
    </section>
  );
}