'use client';

import { motion } from 'motion/react';

const CTA_CARDS = [
  { icon: '🌍', title: 'Global Supply', body: 'Reliable delivery to 40+ countries with flexible MOQ and lead times' },
  { icon: '🔬', title: 'Technical Support', body: 'Application-specific guidance from our formulation scientists' },
  { icon: '📋', title: 'Documentation', body: 'TDS, MSDS, CoA, Halal, Kosher and organic certificates on request' },
  { icon: '⚗️', title: 'Custom Grades', body: 'Tailor-made blends and stabiliser systems for unique requirements' },
];

const ApplicationsCtaSection = () => (
  <section
    id="applications-contact"
    aria-labelledby="cta-heading"
    className="relative py-24 md:py-32 overflow-hidden text-center"
    style={{ background: 'var(--forest)' }}
  >
    {/* Ambient glow — CSS only, no animation overhead */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 110%, rgba(201,168,76,0.22) 0%, transparent 70%)' }}
    />
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
    />

    <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6">

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}>
          Find the Right Grade
        </span>
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="cta-heading"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-4"
        style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}
      >
        Find the right grade for{' '}
        <em className="not-italic" style={{ color: 'var(--gold)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
          your application
        </em>
      </motion.h2>

      {/* Body text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="text-sm leading-loose mb-10 max-w-xl mx-auto"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', fontWeight: 300 }}
      >
        VIVINE International's technical team works with your R&D and procurement to specify the exact grade, viscosity, purity and particle size for your process — from lab trials to commercial scale-up.
      </motion.p>

      {/* 4 capability cards — no stagger, all appear at once */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="flex justify-center flex-wrap gap-3 mb-10"
      >
        {CTA_CARDS.map((card) => (
          <motion.div
            key={card.title}
            whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.5)', background: 'rgba(255,255,255,0.09)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="rounded-xl p-5 text-left"
            style={{ width: '200px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <div className="text-sm font-semibold mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: '#fff' }}>{card.title}</div>
            <div className="text-xs leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', fontWeight: 300 }}>{card.body}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <motion.a
          href="mailto:info@vivineinternational.com"
          whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.45)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="btn-gold inline-block px-8 py-4 rounded-full text-sm font-medium"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
        >
          Request a Product Sample
        </motion.a>
        <motion.a
          href="mailto:info@vivineinternational.com"
          whileHover={{ scale: 1.04, y: -2, borderColor: 'rgba(255,255,255,0.6)', color: '#fff', backgroundColor: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="inline-block px-8 py-4 rounded-full text-sm font-medium transition-all"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
        >
          Talk to a Technical Expert
        </motion.a>
      </motion.div>

      {/* Email footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="mt-9 text-xs tracking-wider"
        style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.28)' }}
      >
        <a href="mailto:info@vivineinternational.com" className="hover:underline" style={{ color: 'rgba(201,168,76,0.65)' }}>
          info@vivineinternational.com
        </a>{' '}— we respond within 24 hours
      </motion.p>
    </div>
  </section>
);

export default ApplicationsCtaSection;
