'use client';

import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const ContactBannerSection = () => (
  <section data-component="ContactBannerSection"
    className="relative overflow-hidden pt-28 pb-12 md:pb-16"
    style={{ background: 'var(--forest)', minHeight: 320 }}
  >
    {/* Gold accent bar on left */}
    <div className="absolute left-0 top-0 bottom-0 w-[5px]" style={{ background: 'var(--gold)' }} />

    {/* Grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    />

    {/* Decorative line illustration top-left */}
    <div className="absolute left-0 top-0 w-[220px] h-[220px] opacity-25 pointer-events-none hidden md:block">
      <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <path d="M20 200 L20 40 L180 40" stroke="rgba(245,238,224,0.7)" strokeWidth="1" fill="none" />
        <path d="M40 200 L40 60 L180 60" stroke="rgba(245,238,224,0.5)" strokeWidth="0.6" fill="none" />
        <path d="M60 200 L60 80 L180 80" stroke="rgba(245,238,224,0.4)" strokeWidth="0.5" fill="none" />
        <circle cx="20" cy="40" r="3" fill="var(--gold)" />
        <circle cx="40" cy="60" r="2" fill="rgba(245,238,224,0.6)" />
        <circle cx="60" cy="80" r="2" fill="rgba(245,238,224,0.4)" />
      </svg>
    </div>

    {/* Right gradient panel (abstract person-on-phone) */}
    <div className="absolute right-0 top-0 h-full w-[38%] overflow-hidden hidden lg:block pointer-events-none">
      <div
        className="absolute left-0 top-0 w-[120px] h-full z-10"
        style={{ background: 'linear-gradient(90deg, var(--forest) 0%, transparent 100%)' }}
      />
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #2C3A23 0%, #3D4F2F 40%, #5A6E48 100%)', opacity: 0.6 }}
      >
        <svg width="180" height="160" viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.55 }}>
          <rect x="30" y="120" width="120" height="6" rx="2" fill="rgba(245,238,224,0.35)" />
          <rect x="65" y="70" width="50" height="36" rx="3" fill="rgba(245,238,224,0.22)" stroke="rgba(245,238,224,0.45)" strokeWidth="1.5" />
          <rect x="83" y="106" width="14" height="8" rx="1" fill="rgba(245,238,224,0.22)" />
          <circle cx="75" cy="42" r="12" fill="rgba(245,238,224,0.28)" />
          <path d="M58 95 C58 75 92 73 92 95" fill="rgba(245,238,224,0.22)" />
          <rect x="85" y="30" width="8" height="14" rx="2" fill="rgba(201,168,76,0.65)" transform="rotate(-20 85 30)" />
        </svg>
      </div>
    </div>

    <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-3">
        <span className="inline-block w-5 h-px" style={{ background: 'var(--gold)' }} />
        <span
          className="text-xs font-medium tracking-widest uppercase"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          Contact Us
        </span>
      </motion.div>

      <motion.h1
        {...fadeUp(0.08)}
        className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-3"
        style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}
      >
        Get in Touch with{' '}
        <em
          className="not-italic"
          style={{
            color: 'var(--gold)',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            textTransform: 'none',
          }}
        >
          Our Team
        </em>
      </motion.h1>

      <motion.p
        {...fadeUp(0.14)}
        className="text-sm max-w-xl leading-relaxed"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(245,238,224,0.65)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        Reach out for product enquiries, technical support, samples, and custom formulation solutions.
      </motion.p>
    </div>
  </section>
);

export default ContactBannerSection;
