'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const results = [
  {
    icon: 'FingerPrintIcon',
    title: 'Greater Clarity of Identity and Purpose',
    description: 'Participants leave knowing who they are, what they stand for, and where they are going.',
  },
  {
    icon: 'StarIcon',
    title: 'Stronger Leadership Confidence',
    description: 'Leaders develop the presence, conviction and consistency that inspires others to follow.',
  },
  {
    icon: 'ChatBubbleLeftRightIcon',
    title: 'Improved Communication and Emotional Intelligence',
    description: 'Teams and individuals communicate with greater clarity, empathy and impact.',
  },
  {
    icon: 'UserGroupIcon',
    title: 'Better Customer Engagement',
    description: 'Customer-facing teams build stronger relationships and deliver exceptional experiences.',
  },
  {
    icon: 'ChartBarIcon',
    title: 'Increased Sales Influence',
    description: 'Sales professionals close with integrity, building trust that creates long-term clients.',
  },
  {
    icon: 'SparklesIcon',
    title: 'Enhanced Professional Presence',
    description: 'Individuals project confidence, credibility and a memorable personal brand.',
  },
];

const deliveryFormats = [
  'In-person Workshops',
  'Virtual Sessions',
  'Hybrid Programs',
  'Corporate Retreats',
  'Keynote Speaking',
  'Group Coaching',
  '1:1 Coaching',
  'Customized Programs',
];

export default function ResultsSection() {
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal-up text-center mb-16"
        >
          <span className="section-label block mb-4">The Results We Deliver</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-4">
            What Participants
            <br />
            <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
              Can Expect.
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto" style={{ fontSize: '1rem', maxWidth: '480px' }}>
            Transformation that is visible, felt and sustained — in the boardroom, on the stage,
            and in everyday leadership.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {results.map((result, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className="reveal-up serve-card p-7 flex gap-5"
              style={{ transitionDelay: `${i * 80}ms`, borderRadius: '0.75rem' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: 'rgba(58, 120, 141, 0.1)',
                  border: '1px solid rgba(58, 120, 141, 0.25)',
                }}
              >
                <Icon name={result.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground text-base tracking-tight mb-2 leading-snug">
                  {result.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.825rem' }}>
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Formats */}
        <div
          ref={(el) => { refs.current[results.length + 1] = el as HTMLElement; }}
          className="reveal-up"
        >
          <div
            className="p-10"
            style={{
              background: 'var(--card)',
              border: '1px solid rgba(58, 120, 141, 0.2)',
              borderRadius: '0.75rem',
            }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
              <div>
                <span className="section-label block mb-2">Flexible Delivery</span>
                <h3 className="font-display font-bold text-foreground text-2xl tracking-tight">
                  Wherever the Client Is.
                </h3>
              </div>
              <p className="text-muted-foreground max-w-xs" style={{ fontSize: '0.875rem' }}>
                Bold Nivel tailors delivery to your needs — in-person, virtual or a hybrid of both.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {deliveryFormats.map((format, i) => (
                <span
                  key={i}
                  className="service-pill px-4 py-2 text-muted-foreground font-medium"
                  style={{ fontSize: '0.8rem', borderRadius: '0.375rem' }}
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}