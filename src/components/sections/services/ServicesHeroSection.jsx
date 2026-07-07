'use client';

import { motion } from 'motion/react';

const ServicesHeroSection = () => (
  <header data-component="ServicesHeroSection"
    className="relative overflow-hidden text-center pt-32 pb-20 md:pb-28"
    style={{ background: 'var(--forest)' }}
  >
    {/* Banner background image */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'url(https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142414/services-hero-banner-2_rdha06.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.55,
    }} />

    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/30 pointer-events-none" />

    {/* Spinning molecular/orbital ring */}
    <motion.div
      className="absolute top-[-80px] right-[-100px] pointer-events-none hidden md:block"
      style={{
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.12)',
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="absolute inset-[40px] rounded-full"
        style={{ border: '1px dashed rgba(201,168,76,0.07)' }}
      />
    </motion.div>

    {/* Dot grid pattern */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 mb-6"
      >
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        <span
          className="text-[11px] font-medium tracking-[0.14em] uppercase"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          VIVINE International · Global Ingredient Solutions
        </span>
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
      </motion.div>

      {/* H1 Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-4xl md:text-5xl lg:text-[3.8rem] font-light leading-[1.1] mb-5 text-white"
        style={{ fontFamily: "'Cinzel', serif", letterSpacing: '-0.01em' }}
      >
        Precision Services for<br />
        <em
          style={{
            color: 'var(--gold)',
            fontStyle: 'italic',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: '1.05em',
            textTransform: 'none',
          }}
        >
          Nature-Derived
        </em>{' '}
        Ingredients
      </motion.h1>

      {/* Subdescription */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
        className="text-base md:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed"
        style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
      >
        End-to-end support across sourcing, technical formulation, logistics and after-sale care — serving food, pharma, cosmetic and industrial sectors worldwide.
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
        className="w-16 h-px mx-auto"
        style={{ background: 'var(--gold)' }}
      />
    </div>
  </header>
);

export default ServicesHeroSection;
