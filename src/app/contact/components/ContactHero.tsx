import React from 'react';

export default function ContactHero() {
  return (
    <section className="pt-40 pb-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 teal-glow-bg" />
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <span className="section-label block mb-4">Get In Touch</span>
        <h1
          className="font-display font-black text-foreground uppercase tracking-tighter mb-6"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', lineHeight: 0.88 }}
        >
          Let&apos;s Unlock
          <br />
          <span className="font-display italic font-normal text-accent" style={{ opacity: 0.85 }}>
            Potential Together.
          </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '500px' }}>
          We&apos;d be honored to partner with your organization or accompany you on your
          personal transformation journey. Every great engagement begins with a conversation.
        </p>
      </div>
    </section>
  );
}