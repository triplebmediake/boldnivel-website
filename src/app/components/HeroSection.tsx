'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef?.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
      if (contentRef?.current) {
        contentRef.current.style.opacity = '1';
        contentRef.current.style.transform = 'translateY(0)';
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-20 overflow-hidden grain-overlay">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_12c0e2ab4-1772141920055.png"
          alt="African business professionals in a bright corporate boardroom, confident collaborative energy, warm natural light through large windows"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized />
        
        {/* Cinematic scrim — dark bottom, lighter top */}
        <div className="hero-scrim absolute inset-0 z-10" />
        {/* Teal atmospheric glow */}
        <div className="absolute inset-0 z-10 teal-glow-bg" />
      </div>

      {/* Grid background pattern */}
      <div className="absolute inset-0 z-10 bg-grid-pattern opacity-30" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        {/* Eyebrow */}
        <div className="mb-8 flex items-center gap-4">
          <span className="divider-line" />
          <span className="section-label">Bold Nivel Ltd</span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-hero font-display font-black text-foreground uppercase leading-none tracking-tighter mb-6"
          style={{
            opacity: 0,
            transform: 'translateY(60px)',
            transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
          
          Brand
          <br />
          <span className="text-shimmer">Your Story.</span>
        </h1>

        {/* Sub content */}
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
          }}>
          
          <div className="max-w-md teal-border-left">
            <p className="text-foreground leading-relaxed" style={{ fontSize: '1.05rem', opacity: 0.85 }}>
              Unlocking potential through identity, leadership and interpersonal skills.
              We help individuals and organizations achieve maximum results through
              practical, transformational learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="cta-btn-primary">
              Let&apos;s Partner
            </Link>
            <Link href="/services" className="cta-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="section-label" style={{ fontSize: '0.55rem' }}>Scroll</span>
        <div
          className="w-px bg-foreground"
          style={{
            height: '40px',
            background: 'linear-gradient(to bottom, var(--foreground), transparent)'
          }} />
        
      </div>
    </section>);

}