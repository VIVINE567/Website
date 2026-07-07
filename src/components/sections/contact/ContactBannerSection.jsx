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
    {/* Banner background image */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'url(https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142457/contact-hero-banner_dfzqud.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.45,
    }} />

    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/30 pointer-events-none" />

    {/* Gold accent bar on left */}
    <div className="absolute left-0 top-0 bottom-0 w-[5px]" style={{ background: 'var(--gold)' }} />

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
