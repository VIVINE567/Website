'use client';

import { motion } from 'motion/react';

const PORTFOLIO_CHIPS = [
  'Sodium Alginate', 'Potassium Alginate', 'Kappa Carrageenan', 'Iota Carrageenan',
  'Lambda Carrageenan', 'Food-grade Agar', 'Bacteriological Agar',
  'CMC (Carboxymethyl Cellulose)', 'HPMC', 'HEC', 'MCC',
  'Xanthan Gum', 'Guar Gum', 'Locust Bean Gum', 'Pectin', 'Konjac Gum',
];

const ApplicationsPortfolioStrip = () => (
  <section style={{ padding: '60px 1.5rem 0', background: 'var(--cream)' }}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex gap-6 md:gap-8 items-start flex-wrap rounded-2xl p-6 md:p-8"
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.25)',
        }}
      >
        <div className="shrink-0">
          <p
            className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
          >
            Our Portfolio
          </p>
        </div>
        <div className="flex flex-wrap gap-2 flex-1">
          {PORTFOLIO_CHIPS.map((chip) => (
            <span
              key={chip}
              className="text-xs px-3 py-1 rounded-full cursor-default hover:scale-105 transition-transform"
              style={{
                color: 'var(--forest)',
                border: '1px solid rgba(44,58,35,0.25)',
                background: 'rgba(255,255,255,0.9)',
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 400,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApplicationsPortfolioStrip;
