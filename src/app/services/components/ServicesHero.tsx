import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden pt-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1588a9ae3-1767082357565.png"
          alt="Professional corporate training workshop with African professionals engaged in learning, well-lit modern conference room, collaborative energy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          unoptimized />
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(12,16,20,0.85) 0%, rgba(12,16,20,0.6) 40%, rgba(12,16,20,0.92) 100%)'
          }} />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <span className="section-label block mb-4">Our Core Services</span>
        <h1 className="text-section-title font-display font-black text-foreground uppercase tracking-tighter mb-6" style={{ maxWidth: '700px' }}>
          A Full Spectrum of
          <br />
          <span className="font-display italic font-normal text-accent" style={{ opacity: 0.8 }}>
            Interpersonal Skills Work.
          </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '520px' }}>
          Every service we offer is built on the IPL Model — identity-rooted, practical and
          designed to deliver measurable transformation for individuals and organizations.
        </p>
      </div>
    </section>);

}