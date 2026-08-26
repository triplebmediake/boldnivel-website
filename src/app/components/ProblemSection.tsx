'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const problems = [
  'Poor communication and low emotional intelligence',
  'Weak leadership presence and influence',
  'Fragmented personal or organizational brand',
  'Low confidence in public speaking',
  'High-achievers who plan well but struggle to execute',
  'People working in silos with low motivation',
];

const impacts = [
  { icon: 'ChartBarIcon', label: 'Reduced productivity and disengagement' },
  { icon: 'BriefcaseIcon', label: 'Lost sales opportunities' },
  { icon: 'UserGroupIcon', label: 'Weak client relationships' },
  { icon: 'ArrowTrendingUpIcon', label: 'Poor leadership succession' },
  { icon: 'BuildingOfficeIcon', label: 'Stalled organizational growth' },
];

export default function ProblemSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
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
          className="reveal-up mb-16 max-w-3xl"
        >
          <span className="section-label block mb-4">The Challenge</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-6">
            Organizations invest in systems —
            <br />
            <span className="font-display italic font-normal text-accent" style={{ opacity: 0.8 }}>
              but people-challenges still hold them back.
            </span>
          </h2>
        </div>

        {/* Two column: Problems + Transformation */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div
            ref={(el) => { refs.current[1] = el as HTMLElement; }}
            className="reveal-left"
          >
            <div className="mb-8 flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(245, 185, 63, 0.1)', border: '1px solid rgba(245, 185, 63, 0.3)' }}
              >
                <Icon name="ExclamationTriangleIcon" size={16} className="text-accent" />
              </div>
              <span className="section-label">Common Challenges</span>
            </div>
            <div className="flex flex-col gap-3">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4"
                  style={{
                    background: 'rgba(12, 16, 20, 0.5)',
                    border: '1px solid rgba(247, 247, 247, 0.06)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: 'var(--accent)' }}
                  />
                  <p className="text-muted-foreground" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {problem}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transformation Arrow + Impacts */}
          <div
            ref={(el) => { refs.current[2] = el as HTMLElement; }}
            className="reveal-right flex flex-col gap-6"
          >
            {/* Arrow divider */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-px" style={{ background: 'rgba(58, 120, 141, 0.3)' }} />
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--primary)', border: '1px solid rgba(58, 120, 141, 0.5)' }}
              >
                <Icon name="ArrowRightIcon" size={18} className="text-primary-foreground" />
              </div>
              <span className="section-label">Organizational Impact</span>
            </div>

            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.95rem', maxWidth: '420px' }}>
              When these challenges go unaddressed, the cost is measurable — in productivity,
              relationships, revenue and culture.
            </p>

            <div className="flex flex-col gap-3">
              {impacts.map((impact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 serve-card"
                  style={{ borderRadius: '0.5rem' }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(58, 120, 141, 0.12)', border: '1px solid rgba(58, 120, 141, 0.25)' }}
                  >
                    <Icon name={impact.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                  </div>
                  <p className="text-foreground font-medium" style={{ fontSize: '0.9rem' }}>
                    {impact.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Transformation note */}
            <div
              className="p-6 mt-4"
              style={{
                background: 'rgba(58, 120, 141, 0.08)',
                border: '1px solid rgba(58, 120, 141, 0.25)',
                borderRadius: '0.5rem',
              }}
            >
              <p className="font-display italic text-foreground text-lg leading-snug tracking-tight">
                &ldquo;Bold Nivel addresses the root — not just the symptom.
                We build from the inside out.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}