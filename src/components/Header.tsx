'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(12, 16, 20, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(58, 120, 141, 0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <AppLogo
              src="/assets/images/Bold_Nivel_Logo-1787750326304.jpg"
              size={40}
              className="rounded-sm overflow-hidden"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-foreground text-lg tracking-tight">
                Bold Nivel
              </span>
              <span className="text-accent" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
                Brand Your Story
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link key={link?.href} href={link?.href} className="nav-link">
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="cta-btn-primary" style={{ padding: '0.625rem 1.5rem', fontSize: '0.7rem' }}>
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{
            background: 'rgba(12, 16, 20, 0.97)',
            backdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <AppLogo
                src="/assets/images/Bold_Nivel_Logo-1787750326304.jpg"
                size={36}
                className="rounded-sm overflow-hidden"
              />
              <span className="font-display font-bold text-foreground text-lg tracking-tight">Bold Nivel</span>
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2 text-foreground">
              <Icon name="XMarkIcon" size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 pt-12">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={() => setMenuOpen(false)}
                className="text-foreground font-display font-bold py-5 border-b border-border text-3xl tracking-tight hover:text-accent transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pt-12">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="cta-btn-primary w-full justify-center"
              style={{ fontSize: '0.8rem' }}
            >
              Book a Consultation
            </Link>
          </div>

          <div className="mt-auto px-6 pb-12">
            <p className="text-muted-foreground" style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}>
              boldnivel@gmail.com · +254 723 351 457
            </p>
          </div>
        </div>
      )}
    </>
  );
}