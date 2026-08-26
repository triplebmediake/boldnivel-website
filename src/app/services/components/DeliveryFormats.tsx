'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const formats = [
  { icon: 'MapPinIcon', label: 'In-Person Workshops', desc: 'Immersive, facilitated workshops at your location or ours.' },
  { icon: 'ComputerDesktopIcon', label: 'Virtual Sessions', desc: 'Fully online programs with the same quality and depth.' },
  { icon: 'ArrowsRightLeftIcon', label: 'Hybrid Programs', desc: 'The best of both worlds — flexible for distributed teams.' },
  { icon: 'SunIcon', label: 'Corporate Retreats', desc: 'Intensive off-site experiences for leadership teams.' },
  { icon: 'MicrophoneIcon', label: 'Keynote Speaking', desc: 'Powerful keynotes for conferences, events and launches.' },
  { icon: 'UserGroupIcon', label: 'Group Coaching', desc: 'Collective transformation in a facilitated cohort.' },
  { icon: 'UserIcon', label: '1:1 Coaching', desc: 'Personalized coaching for individual professionals.' },
  { icon: 'AdjustmentsHorizontalIcon', label: 'Customized Programs', desc: 'Fully bespoke programs built around your unique needs.' },
];

export default function DeliveryFormats() {
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
    refs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          ref={(el) => { refs.current[0] = el as HTMLElement; }}
          className="reveal-up text-center mb-16"
        >
          <span className="section-label block mb-4">Delivery Formats</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-4">
            Flexible Delivery,
            <br />
            <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
              Wherever You Are.
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto" style={{ fontSize: '1rem', maxWidth: '460px' }}>
            Bold Nivel tailors every program to fit the client&apos;s context, timeline and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {formats.map((format, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i + 1] = el as HTMLElement; }}
              className="reveal-up program-card p-7 flex flex-col gap-4"
              style={{ transitionDelay: `${i * 80}ms`, borderRadius: '0.75rem' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(58, 120, 141, 0.1)', border: '1px solid rgba(58, 120, 141, 0.25)' }}
              >
                <Icon name={format.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base tracking-tight leading-snug">
                {format.label}
              </h3>
              <p className="text-muted-foreground" style={{ fontSize: '0.825rem', lineHeight: 1.6 }}>
                {format.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}