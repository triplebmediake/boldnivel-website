'use client';

import React, { useEffect, useRef } from 'react';

const iplSteps = [
  {
    number: '01',
    label: 'Values',
    tagline: 'Clarify what matters and why.',
    description:
      'The foundation of lasting leadership. When you know what you stand for, every decision becomes clearer and every action carries greater weight.',
    color: 'var(--primary)',
  },
  {
    number: '02',
    label: 'Identity',
    tagline: 'Know who you are — rooted and unshakeable.',
    description:
      'Identity is the bedrock. When you are secure in who you are, you lead with consistency, communicate with authenticity, and influence with integrity.',
    color: 'var(--accent)',
  },
  {
    number: '03',
    label: 'Purpose',
    tagline: 'Align daily action to deeper calling.',
    description:
      'Purpose transforms work into mission. When individuals and organizations are purpose-driven, motivation becomes intrinsic and results become extraordinary.',
    color: 'var(--lime)',
  },
  {
    number: '04',
    label: 'Legacy',
    tagline: 'Build something that outlasts the moment.',
    description:
      'Legacy thinking shifts leaders from short-term wins to long-term impact. It is the difference between managing a team and building one.',
    color: 'var(--accent)',
  },
];

export default function IPLModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 teal-glow-bg" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => { cardRefs.current[0] = el; }}
          className="reveal-up mb-20 max-w-2xl"
        >
          <span className="section-label block mb-4">Our Proprietary Approach</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-6">
            The IPL
            <br />
            <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
              Model.
            </span>
          </h2>
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '500px' }}>
            A four-stage identity-rooted journey that transforms how individuals lead, communicate
            and build their legacy. This is what makes Bold Nivel different.
          </p>
        </div>

        {/* Journey flow line */}
        <div className="hidden lg:flex items-center justify-between mb-4 px-8">
          {iplSteps.map((step, i) => (
            <React.Fragment key={step.number}>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: step.color }}
                />
                <span className="section-label" style={{ color: step.color }}>
                  {step.label}
                </span>
              </div>
              {i < iplSteps.length - 1 && (
                <div
                  className="flex-1 h-px mx-4 opacity-30"
                  style={{ background: `linear-gradient(to right, ${iplSteps[i].color}, ${iplSteps[i + 1].color})` }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {iplSteps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { cardRefs.current[i + 1] = el; }}
              className="reveal-up program-card relative p-8 overflow-hidden"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Big background number */}
              <span className="ipl-number">{step.number}</span>

              {/* Top accent line */}
              <div
                className="w-10 h-0.5 mb-8"
                style={{ background: step.color }}
              />

              <span
                className="section-label block mb-3"
                style={{ color: step.color }}
              >
                {step.number} — {step.label}
              </span>

              <h3 className="font-display font-bold text-foreground text-xl tracking-tight mb-4 leading-snug">
                {step.tagline}
              </h3>

              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Toolkit note */}
        <div
          ref={(el) => { cardRefs.current[5] = el; }}
          className="reveal-up mt-12 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{
            background: 'rgba(245, 185, 63, 0.05)',
            border: '1px solid rgba(245, 185, 63, 0.2)',
            borderRadius: '0.5rem',
          }}
        >
          <div>
            <span className="section-label block mb-2">The Bold Nivel Toolkit</span>
            <p className="text-muted-foreground" style={{ fontSize: '0.9rem' }}>
              Every program is built on the IPL Model — translating deep insight into measurable, real-world action.
            </p>
          </div>
          <div
            className="shrink-0 px-6 py-3 font-display italic font-semibold text-foreground text-lg tracking-tight"
            style={{
              borderLeft: '2px solid var(--accent)',
            }}
          >
            Values → Identity → Purpose → Legacy
          </div>
        </div>
      </div>
    </section>
  );
}