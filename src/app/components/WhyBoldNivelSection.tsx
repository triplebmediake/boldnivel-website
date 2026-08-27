'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const differentiators = [
  {
    icon: 'FingerPrintIcon',
    title: 'Identity-Rooted, Not Just Skills-Based',
    description:
      'We don\'t start with techniques. We start with identity — who you are, what you stand for, and where you\'re going.',
    span: 'lg:col-span-2',
  },
  {
    icon: 'ChartBarIcon',
    title: 'Practical, Measurable Outcomes',
    description:
      'Every program is designed to translate insight into real-world action. Transformation you can see and measure.',
    span: 'lg:col-span-1',
  },
  {
    icon: 'AdjustmentsHorizontalIcon',
    title: 'Tailored to You',
    description:
      'No two clients are the same. Every program is customized to the individual or organization\'s specific context and goals.',
    span: 'lg:col-span-1',
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Values Driven',
    description:
      'Grounded in integrity and excellence. Our approach is shaped by values that go beyond professional performance.',
    span: 'lg:col-span-1',
  },
  {
    icon: 'BuildingOfficeIcon',
    title: 'Corporate Professionalism + Personal Transformation',
    description:
      'We bridge the gap between professional standards and personal growth — so transformation happens at every level.',
    span: 'lg:col-span-1',
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Transformation, Not Just Information',
    description:
      'We are not in the information business. We are in the transformation business. The difference is everything.',
    span: 'lg:col-span-2',
  },
];

export default function WhyBoldNivelSection() {
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
          className="reveal-up mb-16"
        >
          <span className="section-label block mb-4">Why Bold Nivel?</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter">
            What Sets Us
            <br />
            <span className="font-display italic font-normal text-accent" style={{ opacity: 0.8 }}>
              Apart.
            </span>
          </h2>
        </div>

        {/* BENTO GRID AUDIT:
          Array has 6 cards: [IdentityRooted(cs-2), Practical(cs-1), Tailored(cs-1), FaithDriven(cs-1), Corporate(cs-1), Transformation(cs-2)]
          Row 1: [col-1-2: IdentityRooted cs-2] [col-3: Practical cs-1]
          Row 2: [col-1: Tailored cs-1] [col-2: FaithDriven cs-1] [col-3: Corporate cs-1]
          Row 3: [col-1-2-3: Transformation cs-3]
          Placed 6/6 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentiators.map((item, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className={`reveal-up program-card p-8 relative overflow-hidden ${item.span}`}
              style={{ transitionDelay: `${i * 100}ms`, borderRadius: '0.75rem' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(245, 185, 63, 0.08)',
                  border: '1px solid rgba(245, 185, 63, 0.2)',
                }}
              >
                <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl tracking-tight mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
