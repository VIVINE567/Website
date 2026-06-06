'use client';

import { motion } from 'motion/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const AboutCtaSection = () => (
  <section data-component="AboutCtaSection"
    id="contact"
    className="relative py-24 md:py-32 overflow-hidden text-center"
    style={{ background: 'var(--forest)' }}
  >
    {/* Radial glow */}
    <motion.div
      animate={{
        opacity: [0.8, 1.0, 0.8],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(201,168,76,0.25) 0%, transparent 70%)',
      }}
    />
    {/* Dot pattern */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
    />

    <div className="relative z-10 max-w-2xl mx-auto px-4 md:px-6">

      <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3 mb-6">
        <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        <span
          className="text-[10px] font-medium tracking-widest uppercase"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          Get In Touch
        </span>
        <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
      </motion.div>

      <motion.h2
        {...fadeUp(0.06)}
        className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-5"
        style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}
      >
        Ready to partner with{' '}
        <em className="not-italic" style={{ color: 'var(--gold)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
          VIVINE International?
        </em>
      </motion.h2>

      <motion.p
        {...fadeUp(0.12)}
        className="text-sm leading-loose mb-10"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(255,255,255,0.55)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        Talk to our team today. Whether you need a product sample, technical specification or a
        tailored supply agreement — we respond within 24 hours.
      </motion.p>

      <motion.div {...fadeUp(0.18)} className="flex flex-col sm:flex-row gap-3 justify-center">
        <motion.a
          href="mailto:info@vivineinternational.com"
          whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.45)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="btn-gold inline-block px-8 py-4 rounded-full text-sm font-medium"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
        >
          Request a Product Sample
        </motion.a>
        <motion.a
          href="mailto:info@vivineinternational.com"
          whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.6)', color: '#fff', backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block px-8 py-4 rounded-full text-sm font-medium transition-all"
          style={{
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: '0.1em',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          Speak to a Technical Expert
        </motion.a>
      </motion.div>

    </div>
  </section>
);

export default AboutCtaSection;
