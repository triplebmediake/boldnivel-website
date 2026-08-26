'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const programs = [
  {
    title: 'Influential Leader Program',
    subtitle: 'Leadership Development Journey',
    description:
      'A comprehensive leadership development journey for executives, professionals and entrepreneurs. This is not a generic leadership course — it is an identity-first exploration of how you lead.',
    pillars: ['Identity', 'Purpose', 'Vision'],
    accent: 'var(--primary)',
    tag: 'Flagship',
  },
  {
    title: 'The Thrive Circle',
    subtitle: 'Values-Based Transformational Journey',
    description:
      'Designed for women groups, The Thrive Circle equips participants with interpersonal skills for stronger relationships, resilient communities and purposeful living.',
    pillars: ['Values', 'Relationships', 'Community'],
    accent: 'var(--accent)',
    tag: 'Group',
  },
  {
    title: 'Confident Presence',
    subtitle: 'Coaching Program',
    description:
      'For professionals and speakers who want to show up with clarity and impact. Build the kind of professional presence that commands rooms and opens doors.',
    pillars: ['Clarity', 'Confidence', 'Presence'],
    accent: 'var(--lime)',
    tag: 'Coaching',
  },
  {
    title: 'Connected Seller',
    subtitle: 'Sales Training Program',
    description:
      'Sales built around relationships, trust and follow-through. Closing with integrity. Because effective selling is an expression of who you are, not just what you say.',
    pillars: ['Trust', 'Follow-Through', 'Integrity'],
    accent: 'var(--accent)',
    tag: 'Sales',
  },
  {
    title: 'Transition, Purpose & Legacy',
    subtitle: 'Life & Career Transition Coaching',
    description:
      'For those navigating career or life transitions. Find clarity in uncertainty, align your direction to your purpose, and begin building a legacy that matters.',
    pillars: ['Clarity', 'Direction', 'Legacy'],
    accent: 'var(--primary)',
    tag: 'Coaching',
  },
];

export default function SignatureProgramsSection() {
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
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 teal-glow-bg" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal-up text-center mb-16"
        >
          <span className="section-label block mb-4">Signature Programs</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-4">
            Our Flagship
            <br />
            <span className="font-display italic font-normal text-accent" style={{ opacity: 0.8 }}>
              Offers.
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto" style={{ fontSize: '1rem', maxWidth: '480px' }}>
            Purpose-built programs that go deeper than skills. Each one is grounded in the IPL Model.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className={`reveal-up program-card p-8 flex flex-col relative overflow-hidden ${i === 0 ? 'lg:col-span-2' : ''}`}
              style={{ transitionDelay: `${i * 110}ms`, borderRadius: '0.75rem', minHeight: '280px' }}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="px-3 py-1 font-bold"
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    background: `${program.accent}18`,
                    color: program.accent,
                    border: `1px solid ${program.accent}35`,
                    borderRadius: '2rem',
                  }}
                >
                  {program.tag}
                </span>
                <div className="w-6 h-px" style={{ background: program.accent, opacity: 0.4 }} />
              </div>

              <h3 className="font-display font-bold text-foreground mb-1 tracking-tight leading-tight" style={{ fontSize: '1.4rem' }}>
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                {program.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1" style={{ fontSize: '0.875rem' }}>
                {program.description}
              </p>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {program.pillars.map((pillar, j) => (
                  <span
                    key={j}
                    className="font-display italic font-semibold"
                    style={{
                      fontSize: '0.8rem',
                      color: program.accent,
                      opacity: 0.8,
                    }}
                  >
                    {pillar}{j < program.pillars.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={(el) => { refs.current[programs.length + 1] = el as HTMLElement; }}
          className="reveal-up mt-12 text-center"
        >
          <Link href="/contact" className="cta-btn-primary">
            Explore Our Programs
            <Icon name="ArrowRightIcon" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}