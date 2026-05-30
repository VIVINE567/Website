'use client';

import { motion } from 'motion/react';
import AppCard from './AppCard';

/**
 * IndustrySectionBlock — reusable section: header + description + card grid.
 * Animations: once:true, amount:0, instant trigger, 0.2s max duration.
 */
const IndustrySectionBlock = ({ id, title, desc, cards, alt = false }) => (
  <section
    id={id}
    aria-labelledby={`${id}-heading`}
    className="py-20"
    style={{ background: alt ? 'var(--cream-dark)' : 'var(--cream)' }}
  >
    <div className="max-w-6xl mx-auto px-4 md:px-6">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="flex items-center gap-4 mb-3"
      >
        <div
          className="w-1 h-9 rounded-full shrink-0"
          style={{ background: 'linear-gradient(to bottom, var(--gold), var(--gold-dark))' }}
        />
        <h2
          id={`${id}-heading`}
          className="text-2xl md:text-3xl"
          style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)', letterSpacing: '0.04em', fontWeight: 600 }}
        >
          {title}
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="text-sm md:text-base leading-loose max-w-3xl mb-8 pl-5"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--brown-warm)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8 }}
      >
        {desc}
      </motion.p>

      {/* Card grid */}
      <div
        role="list"
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}
      >
        {cards.map((card) => (
          <AppCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default IndustrySectionBlock;
