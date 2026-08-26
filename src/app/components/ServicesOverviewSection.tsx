'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const serviceCategories = [
  {
    icon: 'HeartIcon',
    title: 'Personal & Interpersonal Skills',
    items: ['Emotional Intelligence', 'Effective Communication', 'Public Speaking', 'Conflict Resolution'],
    accent: 'var(--primary)',
    span: 'lg:col-span-2',
  },
  {
    icon: 'StarIcon',
    title: 'Leadership Development',
    items: ['Influential Leadership', 'Team Leadership', 'Decision-Making', 'Trust-Driven Leadership', 'Change Management'],
    accent: 'var(--accent)',
    span: 'lg:col-span-1',
  },
  {
    icon: 'SparklesIcon',
    title: 'Personal Branding & Image',
    items: ['Professional Presence', 'Executive Image', 'Digital Presence', 'Brand Positioning'],
    accent: 'var(--lime)',
    span: 'lg:col-span-1',
  },
  {
    icon: 'BriefcaseIcon',
    title: 'Sales & Customer Experience',
    items: ['Sales Influence Training', 'Customer Service Excellence', 'Objection Handling'],
    accent: 'var(--accent)',
    span: 'lg:col-span-1',
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'Workplace Culture',
    items: ['Corporate Culture & Etiquette', 'Team Collaboration'],
    accent: 'var(--primary)',
    span: 'lg:col-span-1',
  },
];

export default function ServicesOverviewSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08 }
    );
    refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal-up flex flex-col md:flex-row items-start justify-between gap-8 mb-16"
        >
          <div>
            <span className="section-label block mb-4">Our Core Services</span>
            <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter">
              A Full Spectrum
              <br />
              <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
                of Interpersonal Skills Work.
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 max-w-xs pt-2">
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.9rem' }}>
              All services are built on the IPL Model — identity-rooted, practical and measurable.
            </p>
            <Link href="/services" className="cta-btn-outline" style={{ alignSelf: 'flex-start' }}>
              View All Services
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 5 cards: [Personal&Interpersonal(cs-2), Leadership(cs-1), PersonalBranding(cs-1), Sales(cs-1), Workplace(cs-1)]
          Row 1: [col-1-2: Personal&Interpersonal cs-2] [col-3: Leadership cs-1]
          Row 2: [col-1: PersonalBranding cs-1] [col-2: Sales cs-1] [col-3: Workplace cs-1]
          Placed 5/5 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCategories.map((cat, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className={`reveal-up program-card p-8 relative overflow-hidden ${cat.span}`}
              style={{ transitionDelay: `${i * 100}ms`, borderRadius: '0.75rem' }}
            >
              {/* Top accent */}
              <div className="w-8 h-0.5 mb-6" style={{ background: cat.accent }} />

              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                style={{ background: `${cat.accent}15`, border: `1px solid ${cat.accent}30` }}
              >
                <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={18} style={{ color: cat.accent }} />
              </div>

              <h3
                className="font-display font-bold text-foreground text-xl tracking-tight mb-5 leading-snug"
              >
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, j) => (
                  <span key={j} className="service-pill px-3 py-1.5 text-muted-foreground" style={{ fontSize: '0.75rem', fontWeight: 500, borderRadius: '0.375rem' }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}