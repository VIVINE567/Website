'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import QuoteModal from '../../QuoteModal';

const ServicesCtaSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section
      id="services-cta"
      className="relative py-24 md:py-32 overflow-hidden text-center"
      style={{ background: 'var(--forest)' }}
    >
      {/* Dynamic breathing gold radial glow in background */}
      <motion.div
        animate={{
          opacity: [0.75, 0.95, 0.75],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(201,168,76,0.22) 0%, transparent 70%)',
        }}
      />

      {/* Decorative dot pattern grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
          <span
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
          >
            Ready to Find Your Ideal Ingredient Solution?
          </span>
          <span className="inline-block w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 text-white"
          style={{ fontFamily: "'Cinzel', serif", letterSpacing: '-0.01em' }}
        >
          Connect with our specialists today and receive a{' '}
          <em
            className="not-italic"
            style={{
              color: 'var(--gold)',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              textTransform: 'none',
            }}
          >
            Tailored Solution
          </em>
        </h2>

        {/* Paragraph */}
        <p
          className="text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: 'rgba(255,255,255,0.65)',
            fontStyle: 'italic',
          }}
        >
          Connect with our specialists today and receive a tailored product recommendation, competitive quote, and full
          technical documentation — all within 24 hours.
        </p>

        {/* Reusable, covered CTAs of About/Services sections in our site */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* 1. Request a Quote button */}
          <motion.button
            onClick={() => setQuoteOpen(true)}
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="btn-gold px-8 py-4 rounded-full text-sm font-semibold cursor-pointer"
            style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
          >
            Request a Quote
          </motion.button>

          {/* 2. Explore Products link */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Link
              href="/products"
              className="px-8 py-4 rounded-full text-sm font-medium border border-solid transition-all block"
              style={{
                fontFamily: "'Raleway', sans-serif",
                letterSpacing: '0.1em',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'rgba(255, 255, 255, 0.7)',
                background: 'transparent',
              }}
            >
              Explore Products
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Quote Modal Dialog overlay */}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
};

export default ServicesCtaSection;
