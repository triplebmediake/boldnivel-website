'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function FounderSection() {
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const imgEl = entry.target.querySelector('.image-clip-reveal');
            if (imgEl) imgEl.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );
    refs.current.forEach((ref) => {if (ref) observer.observe(ref);});
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={(el) => {refs.current[0] = el as HTMLElement;}}
          className="reveal-up mb-16">
          
          <span className="section-label block mb-4">Meet the Founder</span>
          <h2 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter">
            The Person
            <br />
            <span className="font-display italic font-normal text-primary" style={{ opacity: 0.7 }}>
              Behind Bold Nivel.
            </span>
          </h2>
        </div>

        <div
          ref={(el) => {refs.current[1] = el as HTMLElement;}}
          className="reveal-up grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="image-clip-reveal aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1ce7c97a0-1763299091149.png"
                alt="Professional African businesswoman in elegant attire, confident posture, warm studio lighting, executive presence, leadership embodied"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
                unoptimized />
              
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(12,16,20,0.7) 0%, transparent 50%)'
                }} />
              
            </div>

            {/* Floating book card */}
            <div
              className="absolute -bottom-6 -right-4 md:right-6 p-6 max-w-xs shadow-2xl"
              style={{
                background: 'rgba(17, 24, 32, 0.95)',
                border: '1px solid rgba(245, 185, 63, 0.25)',
                borderRadius: '0.75rem',
                backdropFilter: 'blur(16px)'
              }}>
              
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(245, 185, 63, 0.12)', border: '1px solid rgba(245, 185, 63, 0.3)' }}>
                  
                  <Icon name="BookOpenIcon" size={14} className="text-accent" />
                </div>
                <div>
                  <span className="section-label block mb-1">Author</span>
                  <p className="font-display font-bold text-foreground text-base tracking-tight italic leading-tight">
                    Becoming Before Belonging
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground" style={{ fontSize: '0.75rem', lineHeight: 1.6 }}>
                A faith-rooted book on identity and wholeness in singlehood.
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 lg:pt-8 pt-8 space-y-8">
            <div>
              <h3 className="font-display font-black text-foreground tracking-tighter mb-1" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                Hope Waiganjo
              </h3>
              <p className="text-accent font-semibold" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Founder & Executive Director, Bold Nivel Ltd
              </p>
            </div>

            <div className="teal-border-left">
              <p className="font-display italic text-foreground text-xl leading-relaxed tracking-tight">
                &ldquo;Know who you are. Understand your purpose. Strengthen how you lead, communicate and influence. Build a story that matters.&rdquo;
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
              Hope Waiganjo is the Founder and Executive Director of Bold Nivel Ltd, with nearly a decade of
              experience in emotional intelligence, communication, leadership development and personal branding.
              Her work spans individual coaching, corporate training and speaking engagements across organizations
              and communities.
            </p>

            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
              Hope is the author of{' '}
              <em className="text-foreground font-medium">Becoming Before Belonging</em>,
              a faith-rooted book on identity and wholeness in singlehood. She also co-facilitates marriage
              and pre-marital ministry — bringing the same identity-first approach to relationships.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2">
              {['Emotional Intelligence', 'Communication', 'Leadership Development', 'Personal Branding', 'Coaching', 'Speaking'].map((tag, i) =>
              <span
                key={i}
                className="service-pill px-3 py-1.5 text-muted-foreground"
                style={{ fontSize: '0.75rem', fontWeight: 500, borderRadius: '0.375rem' }}>
                
                  {tag}
                </span>
              )}
            </div>

            <Link href="/contact" className="cta-btn-primary" style={{ alignSelf: 'flex-start', display: 'inline-flex' }}>
              Work With Hope
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>);

}