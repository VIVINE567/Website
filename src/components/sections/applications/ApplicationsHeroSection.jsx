'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import S from '../../../styles';

const HERO_PILLS = [
  { label: 'Alginates', href: '/products#seaweed-based' },
  { label: 'Carrageenan', href: '/products#seaweed-based' },
  { label: 'CMC · HEC · HPMC · MCC', href: '/products#cellulose-ethers' },
  { label: 'Xanthan Gum', href: '/products#microbial' },
  { label: 'Guar Gum', href: '/products#plant-based' },
  { label: 'Locust Bean Gum', href: '/products#plant-based' },
  { label: 'Pectin', href: '/products#plant-based' },
];

const ApplicationsHeroSection = () => (
  <header
    className="relative overflow-hidden text-center pt-32 pb-20"
    style={{ background: 'var(--forest)' }}
  >
    {/* Radial glows */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 60% 50% at 20% 50%, rgba(44,58,35,0.7) 0%, transparent 70%),
          radial-gradient(ellipse 50% 60% at 80% 40%, rgba(90,110,72,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 55% 45% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 65%)
        `,
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
    />

    <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">

      {/* Eyebrow — no animation delay, instant */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="inline-flex items-center gap-2 mb-6"
      >
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
        <span className="text-[11px] font-medium tracking-[0.14em] uppercase" style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}>
          VIVINE International — Global Supplier
        </span>
        <span className="w-6 h-px" style={{ background: 'var(--gold)', opacity: 0.6 }} />
      </motion.div>

      {/* H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.1] mb-5"
        style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}
      >
        Hydrocolloids, Alginates &<br />
        <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '0.92em', textTransform: 'capitalize' }}>
          Cellulose Applications
        </em>
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05, ease: 'easeOut' }}
        className="text-base md:text-lg max-w-xl mx-auto mb-8 font-light leading-7"
        style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
      >
        From food stabilisation and pharma excipients to personal care actives and industrial binders — precision-grade functional ingredients trusted by manufacturers in over 40 countries.
      </motion.p>

      {/* Product pills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.1, ease: 'easeOut' }}
        className="flex flex-wrap justify-center gap-2 mb-9"
      >
        {HERO_PILLS.map((pill) => (
          <Link
            key={pill.label}
            href={pill.href}
            className="text-xs px-4 py-1.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{
              color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.05)',
              letterSpacing: '0.02em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.25)';
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
              e.currentTarget.style.color = 'var(--gold-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
            }}
          >
            {pill.label}
          </Link>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.12, ease: 'easeOut' }}
        className="flex flex-wrap gap-3 justify-center"
      >
        <motion.a
          href="#applications-food"
          whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.4)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="btn-gold inline-block px-8 py-3 rounded-full text-sm font-medium"
          style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
        >
          Explore Applications
        </motion.a>
        <motion.a
          href="#applications-contact"
          whileHover={{ scale: 1.04, y: -2, borderColor: 'rgba(255,255,255,0.55)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="inline-block px-8 py-3 rounded-full text-sm font-medium transition-all"
          style={{
            fontFamily: "'Raleway', sans-serif",
            letterSpacing: '0.1em',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          Request Product Guide
        </motion.a>
      </motion.div>
    </div>
  </header>
);

export default ApplicationsHeroSection;
