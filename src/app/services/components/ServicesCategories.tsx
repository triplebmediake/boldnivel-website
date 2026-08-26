'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const categories = [
  {
    id: 'personal',
    number: '01',
    title: 'Personal & Interpersonal Skills',
    description:
      'The foundation of everything. Before strategy, before systems, before skills — there are people. Bold Nivel builds the human side of performance.',
    accent: 'var(--primary)',
    icon: 'HeartIcon',
    services: [
      {
        name: 'Emotional Intelligence',
        desc: 'Develop the self-awareness, empathy and regulation that makes relationships work — and leadership possible.',
      },
      {
        name: 'Effective Communication',
        desc: 'Speak and listen with clarity, intention and impact. Communication is the currency of influence.',
      },
      {
        name: 'Public Speaking',
        desc: 'Overcome fear. Develop presence. Deliver messages that move people to action.',
      },
      {
        name: 'Conflict Resolution',
        desc: 'Navigate disagreement with maturity, preserve relationships and create constructive outcomes.',
      },
    ],
  },
  {
    id: 'leadership',
    number: '02',
    title: 'Leadership Development',
    description:
      'Leadership is not a title — it is an identity. Bold Nivel develops leaders who know who they are and lead with conviction, consistency and care.',
    accent: 'var(--accent)',
    icon: 'StarIcon',
    services: [
      {
        name: 'Influential Leadership',
        desc: 'Lead by example, earn trust, and create followership that is built on respect rather than authority.',
      },
      {
        name: 'Team Leadership',
        desc: 'Build cohesive, high-performing teams where every individual knows their role and contribution.',
      },
      {
        name: 'Decision-Making',
        desc: 'Make better decisions under pressure — grounded in values, informed by data and guided by purpose.',
      },
      {
        name: 'Trust-Driven Leadership',
        desc: 'Trust is the foundation of every great team and organization. Learn to build it intentionally.',
      },
      {
        name: 'Change Management',
        desc: 'Lead people through uncertainty, transition and transformation with clarity and compassion.',
      },
    ],
  },
  {
    id: 'branding',
    number: '03',
    title: 'Personal Branding & Image',
    description:
      'Your brand is not your logo — it is the impression you leave. Bold Nivel helps professionals build a brand that is authentic, credible and compelling.',
    accent: 'var(--lime)',
    icon: 'SparklesIcon',
    services: [
      {
        name: 'Professional Presence',
        desc: 'Show up with the confidence and authority that commands attention and opens doors.',
      },
      {
        name: 'Executive Image',
        desc: 'Align your external presentation with the leader you are becoming — in every room you enter.',
      },
      {
        name: 'Digital Presence',
        desc: 'Build a consistent, credible online brand that extends your influence beyond the room.',
      },
      {
        name: 'Brand Positioning',
        desc: 'Define your unique value, your audience and the story only you can tell.',
      },
    ],
  },
  {
    id: 'sales',
    number: '04',
    title: 'Sales & Customer Experience',
    description:
      'Sales is not persuasion — it is connection. Bold Nivel trains sales and customer-facing professionals to close with integrity and build lasting relationships.',
    accent: 'var(--accent)',
    icon: 'BriefcaseIcon',
    services: [
      {
        name: 'Sales Influence Training',
        desc: 'Develop the interpersonal skills that turn conversations into conversions and clients into advocates.',
      },
      {
        name: 'Customer Service Excellence',
        desc: 'Deliver experiences that make customers feel valued, heard and eager to return.',
      },
      {
        name: 'Objection Handling',
        desc: 'Navigate resistance with confidence, empathy and a clear understanding of customer needs.',
      },
    ],
  },
  {
    id: 'culture',
    number: '05',
    title: 'Workplace Culture & Etiquette',
    description:
      'Culture is not what you say — it is what you tolerate and what you celebrate. Bold Nivel helps organizations build cultures of excellence.',
    accent: 'var(--primary)',
    icon: 'BuildingOfficeIcon',
    services: [
      {
        name: 'Corporate Culture & Etiquette',
        desc: 'Define the standards of behaviour, communication and interaction that reflect your organizational values.',
      },
      {
        name: 'Team Collaboration',
        desc: 'Break down silos, build trust across functions and create teams that achieve more together.',
      },
    ],
  },
  {
    id: 'coaching',
    number: '06',
    title: 'Coaching & Training Programs',
    description:
      'Whether you need individual coaching or a full organizational program, Bold Nivel designs and delivers transformational learning at every level.',
    accent: 'var(--accent)',
    icon: 'UserGroupIcon',
    services: [
      {
        name: 'One-on-One Coaching',
        desc: 'Personalized coaching for executives, professionals and emerging leaders navigating growth.',
      },
      {
        name: 'Group Coaching',
        desc: 'Collective transformation in a facilitated environment — powerful for teams and communities.',
      },
      {
        name: 'Corporate Training',
        desc: 'Customized training programs designed around your organizational goals and delivered at scale.',
      },
    ],
  },
];

export default function ServicesCategories() {
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
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {categories.map((cat, i) => (
          <div
            key={cat.id}
            ref={(el) => { refs.current[i] = el as HTMLElement; }}
            className={`reveal-up mb-16 last:mb-0 ${i % 2 === 0 ? '' : ''}`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div
              className="p-10 md:p-12"
              style={{
                background: 'var(--card)',
                border: `1px solid ${cat.accent}25`,
                borderRadius: '0.75rem',
              }}
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-10 pb-8" style={{ borderBottom: `1px solid ${cat.accent}15` }}>
                <div className="flex items-start gap-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${cat.accent}12`, border: `1px solid ${cat.accent}30` }}
                  >
                    <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={20} style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <span className="font-display italic font-semibold" style={{ fontSize: '0.85rem', color: cat.accent, opacity: 0.7 }}>
                      {cat.number}
                    </span>
                    <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl tracking-tight leading-tight">
                      {cat.title}
                    </h2>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed md:max-w-sm" style={{ fontSize: '0.9rem' }}>
                  {cat.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((service, j) => (
                  <div
                    key={j}
                    className="p-5"
                    style={{
                      background: 'rgba(12, 16, 20, 0.5)',
                      border: '1px solid rgba(247, 247, 247, 0.06)',
                      borderRadius: '0.5rem',
                      transition: 'border-color 0.3s ease',
                    }}
                  >
                    <div className="w-4 h-0.5 mb-4" style={{ background: cat.accent }} />
                    <h3 className="font-display font-bold text-foreground text-base tracking-tight mb-2">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.8rem' }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* IPL note */}
        <div
          className="mt-8 p-8 text-center"
          style={{
            background: 'rgba(245, 185, 63, 0.04)',
            border: '1px solid rgba(245, 185, 63, 0.15)',
            borderRadius: '0.75rem',
          }}
        >
          <p className="font-display italic text-foreground text-xl tracking-tight">
            All services are built on the IPL Model —
            <span className="text-accent"> Values → Identity → Purpose → Legacy</span>
          </p>
        </div>
      </div>
    </section>
  );
}