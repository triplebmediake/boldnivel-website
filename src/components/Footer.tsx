import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left: Logo + Tagline */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/Bold_Nivel_Logo-1787750326304.jpg"
                size={36}
                className="rounded-sm overflow-hidden"
              />
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-foreground text-base tracking-tight">Bold Nivel</span>
                <span className="text-accent" style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
                  Brand Your Story
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '0.8rem' }}>
              Unlocking potential through identity, leadership and interpersonal skills.
            </p>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-2">
            <p className="section-label mb-2">Contact</p>
            <a
              href="mailto:boldnivel@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: '0.85rem', fontWeight: 500 }}
            >
              boldnivel@gmail.com
            </a>
            <a
              href="tel:+254723351457"
              className="text-muted-foreground hover:text-foreground transition-colors"
              style={{ fontSize: '0.85rem', fontWeight: 500 }}
            >
              +254 723 351 457
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground" style={{ fontSize: '0.75rem' }}>
            © 2026 Bold Nivel Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors" style={{ fontSize: '0.75rem', fontWeight: 500 }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}