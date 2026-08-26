'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    if (contentRef?.current) observer?.observe(contentRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 bg-secondary relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_14adaa71e-1772305983413.png"
          alt="African leadership team in strategic planning session, collaborative atmosphere, modern boardroom, warm confident energy, diverse professionals"
          fill
          className="object-cover object-center opacity-20"
          sizes="100vw"
          unoptimized />
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(12,16,20,0.95) 0%, rgba(26,37,48,0.85) 100%)'
          }} />
        
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          ref={contentRef}
          className="reveal-up">
          
          <span className="section-label block mb-6">Ready to Begin?</span>

          <h2
            className="font-display font-black text-foreground uppercase tracking-tighter mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.9 }}>
            
            Let&apos;s Unlock
            <br />
            <span className="text-shimmer">Potential Together.</span>
          </h2>

          <p className="text-muted-foreground mx-auto mb-10 leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '520px' }}>
            We&apos;d be honored to partner with your organization to develop leaders,
            strengthen teams, and build a culture of excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="cta-btn-primary">
              Let&apos;s Partner
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
            <Link href="/contact" className="cta-btn-outline">
              Book a Consultation
            </Link>
          </div>

          {/* Contact quick-access */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href="mailto:boldnivel@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: '0.85rem' }}>
              
              <Icon name="EnvelopeIcon" size={16} className="text-primary" />
              boldnivel@gmail.com
            </a>
            <a
              href="tel:+254723351457"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: '0.85rem' }}>
              
              <Icon name="PhoneIcon" size={16} className="text-primary" />
              +254 723 351 457
            </a>
          </div>
        </div>
      </div>
    </section>);

}