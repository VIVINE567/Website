'use client';

import { motion } from 'motion/react';

const WHY = [
  { icon: '🌍', title: 'Global Supply',      desc: 'Reliable sourcing and export of specialty chemicals and excipients worldwide.' },
  { icon: '🔬', title: 'Technical Expertise', desc: 'Expert guidance on grade selection, specification matching, and formulation support.' },
  { icon: '📋', title: 'Full Documentation', desc: 'TDS, SDS, COA, DMF, and regulatory compliance documents for every product.' },
  { icon: '⚡', title: 'Fast Response',      desc: 'Quotation and technical responses within 24 hours of inquiry submission.' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const ContactWhyStrip = () => (
  <div data-component="ContactWhyStrip" className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
    {WHY.map((w, i) => (
      <motion.div
        key={w.title}
        {...fadeUp(i * 0.06)}
        whileHover={{ y: -3, borderColor: 'rgba(201,168,76,0.55)', boxShadow: '0 10px 24px rgba(44,58,35,0.08)' }}
        className="rounded-xl p-5 text-center cursor-default transition-colors"
        style={{
          background: 'var(--cream)',
          border: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="text-2xl mb-2">{w.icon}</div>
        <div
          className="text-sm font-bold mb-1"
          style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}
        >
          {w.title}
        </div>
        <div
          className="text-xs leading-relaxed"
          style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}
        >
          {w.desc}
        </div>
      </motion.div>
    ))}
  </div>
);

export default ContactWhyStrip;
