'use client';

import React, { useRef, useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactContent() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend/email service
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--input)',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem',
    padding: '0.875rem 1rem',
    color: 'var(--foreground)',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  return (
    <section className="pb-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gold-glow-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Contact Info */}
          <div
            ref={(el) => { refs.current[0] = el as HTMLElement; }}
            className="reveal-left flex flex-col gap-10"
          >
            {/* Primary contact */}
            <div>
              <span className="section-label block mb-6">Direct Contact</span>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:boldnivel@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(58, 120, 141, 0.1)', border: '1px solid rgba(58, 120, 141, 0.3)' }}
                  >
                    <Icon name="EnvelopeIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Email
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors" style={{ fontSize: '1rem' }}>
                      boldnivel@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+254723351457"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(58, 120, 141, 0.1)', border: '1px solid rgba(58, 120, 141, 0.3)' }}
                  >
                    <Icon name="PhoneIcon" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                      Telephone
                    </p>
                    <p className="text-foreground font-semibold group-hover:text-accent transition-colors" style={{ fontSize: '1rem' }}>
                      +254 723 351 457
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Person */}
            <div
              className="p-8"
              style={{
                background: 'var(--card)',
                border: '1px solid rgba(58, 120, 141, 0.2)',
                borderRadius: '0.75rem',
              }}
            >
              <p className="section-label mb-4">Your Point of Contact</p>
              <h3 className="font-display font-bold text-foreground text-2xl tracking-tight mb-1">
                Hope Waiganjo
              </h3>
              <p className="text-accent font-semibold mb-4" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                Coach · Trainer · Speaker
              </p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.875rem' }}>
                Hope personally responds to all inquiries. Whether you are an organization
                exploring a training partnership or an individual beginning your transformation
                journey — she would love to hear from you.
              </p>
            </div>

            {/* What to expect */}
            <div>
              <span className="section-label block mb-5">What to Expect</span>
              <div className="flex flex-col gap-4">
                {[
                  'A personal response within 48 hours',
                  'A discovery conversation to understand your goals',
                  'A tailored proposal designed around your context',
                  'No pressure — just an honest conversation',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: 'rgba(245, 185, 63, 0.1)', border: '1px solid rgba(245, 185, 63, 0.3)' }}
                    >
                      <Icon name="CheckIcon" size={10} className="text-accent" />
                    </div>
                    <p className="text-muted-foreground" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            ref={(el) => { refs.current[1] = el as HTMLElement; }}
            className="reveal-right"
          >
            <div
              className="p-10"
              style={{
                background: 'var(--card)',
                border: '1px solidrgba(58, 120, 141, 0.2)',
                borderRadius: '0.75rem',
              }}
            >
              <span className="section-label block mb-2">Book a Consultation</span>
              <h2 className="font-display font-bold text-foreground text-2xl tracking-tight mb-8">
                Start the Conversation.
              </h2>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-16 text-center gap-6"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(58, 120, 141, 0.15)', border: '1px solid rgba(58, 120, 141, 0.4)' }}
                  >
                    <Icon name="CheckIcon" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-2xl tracking-tight mb-2">
                      Message Received
                    </h3>
                    <p className="text-muted-foreground" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
                      Thank you for reaching out. Hope will respond personally within 48 hours.
                      We look forward to partnering with you.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="section-label" style={{ fontSize: '0.6rem' }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="section-label" style={{ fontSize: '0.6rem' }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="section-label" style={{ fontSize: '0.6rem' }}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254 700 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="section-label" style={{ fontSize: '0.6rem' }}>Organization</label>
                      <input
                        type="text"
                        name="organization"
                        placeholder="Company or organization name"
                        value={formData.organization}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                        onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="section-label" style={{ fontSize: '0.6rem' }}>Area of Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                    >
                      <option value="" style={{ background: 'var(--card)' }}>Select a service or program</option>
                      <option value="leadership" style={{ background: 'var(--card)' }}>Leadership Development</option>
                      <option value="personal-skills" style={{ background: 'var(--card)' }}>Personal & Interpersonal Skills</option>
                      <option value="branding" style={{ background: 'var(--card)' }}>Personal Branding & Image</option>
                      <option value="sales" style={{ background: 'var(--card)' }}>Sales & Customer Experience</option>
                      <option value="coaching" style={{ background: 'var(--card)' }}>One-on-One Coaching</option>
                      <option value="corporate" style={{ background: 'var(--card)' }}>Corporate Training Program</option>
                      <option value="influential-leader" style={{ background: 'var(--card)' }}>Influential Leader Program</option>
                      <option value="thrive-circle" style={{ background: 'var(--card)' }}>The Thrive Circle</option>
                      <option value="confident-presence" style={{ background: 'var(--card)' }}>Confident Presence Coaching</option>
                      <option value="connected-seller" style={{ background: 'var(--card)' }}>Connected Seller</option>
                      <option value="transition" style={{ background: 'var(--card)' }}>Transition, Purpose & Legacy</option>
                      <option value="other" style={{ background: 'var(--card)' }}>Other / Not Sure Yet</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="section-label" style={{ fontSize: '0.6rem' }}>Your Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your goals, your organization, or what you are hoping to achieve. The more context you share, the better we can serve you."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="cta-btn-primary w-full justify-center mt-2"
                    style={{ fontSize: '0.8rem', padding: '1rem' }}
                  >
                    Send Message
                    <Icon name="PaperAirplaneIcon" size={14} />
                  </button>

                  <p className="text-muted-foreground text-center" style={{ fontSize: '0.75rem' }}>
                    Your information is kept strictly confidential.
                    Hope personally reads and responds to every inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}