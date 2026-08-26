'use client';

import React, { useEffect, useRef } from 'react';

export default function PromiseSection() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    if (textRef?.current) observer?.observe(textRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-40 bg-background relative overflow-hidden"
    >
      {/* Background teal blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 float-animation"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-8"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="section-label block mb-8">Our Promise</span>

        <div
          ref={textRef}
          className="reveal-up"
        >
          <p className="promise-text text-foreground leading-relaxed mx-auto" style={{ maxWidth: '820px' }}>
            At Bold Nivel, we don&apos;t just train people —
            <br />
            <span className="text-accent"> we help them become clear on who they are,</span>
            <br />
            so they can lead, sell, speak, and live
            <br />
            <span className="text-primary">with unshakeable confidence.</span>
          </p>
        </div>

        {/* Journey strip */}
        <div className="mt-16 flex items-center justify-center gap-3 flex-wrap">
          {['Identity', 'Clarity', 'Confidence', 'Influence', 'Transformation']?.map((word, i, arr) => (
            <React.Fragment key={word}>
              <span
                className="font-display italic font-semibold text-muted-foreground"
                style={{ fontSize: '1rem', letterSpacing: '-0.01em' }}
              >
                {word}
              </span>
              {i < arr?.length - 1 && (
                <div className="w-4 h-px" style={{ background: 'var(--accent)', opacity: 0.5 }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}