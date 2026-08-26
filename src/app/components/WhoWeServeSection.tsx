'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const organizations = [
'SMEs and growing businesses',
'Corporate teams and HR functions',
'Sales and customer service teams',
'Faith-based organizations and community groups'];


const individuals = [
'Mid-level managers and emerging leaders',
'Entrepreneurs and high-achievers in transition',
'Professionals seeking brand clarity and positioning'];


export default function WhoWeServeSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    refs.current.forEach((ref) => {if (ref) observer.observe(ref);});
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gold-glow-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => {refs.current[0] = el as HTMLElement;}}
          className="reveal-up text-center mb-20">
          
          <span className="section-label block mb-4">Who We Serve</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-4">
            Built for Leaders
            <br />
            <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
              at every stage.
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto" style={{ fontSize: '1.05rem', maxWidth: '520px' }}>
            Individuals and organizations ready to grow from the inside out.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Organizations */}
          <div
            ref={(el) => {refs.current[1] = el as HTMLElement;}}
            className="reveal-left relative overflow-hidden serve-card hover-lift"
            style={{ borderRadius: '0.75rem' }}>
            
            <div className="relative h-56 overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_18f31b4d8-1779995715717.png"
                alt="African corporate team collaborating in modern office, engaged discussion around conference table, professional business environment with natural light"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized />
              
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(12,16,20,0.95) 30%, rgba(12,16,20,0.3) 100%)' }} />
              
              <div className="absolute top-6 left-6">
                <span
                  className="px-3 py-1 text-foreground font-bold"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    background: 'rgba(58, 120, 141, 0.9)',
                    borderRadius: '2rem'
                  }}>
                  
                  For Organizations
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-display font-bold text-foreground text-2xl tracking-tight mb-6 leading-tight">
                Teams, Corporates
                <br />
                <span className="font-display italic font-normal text-primary">& Growing Businesses</span>
              </h3>
              <div className="flex flex-col gap-3 mb-8">
                {organizations.map((item, i) =>
                <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--primary)' }} />
                    <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>{item}</span>
                  </div>
                )}
              </div>
              <Link href="/contact" className="cta-btn-outline">
                Partner With Us
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>

          {/* Individuals */}
          <div
            ref={(el) => {refs.current[2] = el as HTMLElement;}}
            className="reveal-right relative overflow-hidden serve-card hover-lift"
            style={{ borderRadius: '0.75rem' }}>
            
            <div className="relative h-56 overflow-hidden">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1f41c87b6-1767641918992.png"
                alt="African professional woman in leadership coaching session, one-on-one conversation, warm confident atmosphere, executive setting"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized />
              
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(12,16,20,0.95) 30%, rgba(12,16,20,0.3) 100%)' }} />
              
              <div className="absolute top-6 left-6">
                <span
                  className="px-3 py-1 text-foreground font-bold"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    background: 'rgba(245, 185, 63, 0.9)',
                    color: '#0C1014',
                    borderRadius: '2rem'
                  }}>
                  
                  For Individuals
                </span>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-display font-bold text-foreground text-2xl tracking-tight mb-6 leading-tight">
                Leaders, Entrepreneurs
                <br />
                <span className="font-display italic font-normal text-accent">& Emerging Professionals</span>
              </h3>
              <div className="flex flex-col gap-3 mb-8">
                {individuals.map((item, i) =>
                <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                    <span className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>{item}</span>
                  </div>
                )}
              </div>
              <Link href="/contact" className="cta-btn-primary">
                Start Your Journey
                <Icon name="ArrowRightIcon" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}