'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { CONTENT } from '../../../content';
import S from '../../../styles/shared';

const PRODUCTS = [
  { label: 'Carrageenan', href: '/products/carrageenan' },
  { label: 'Sodium Alginate', href: '/products/sodium-alginate' },
  { label: 'Propylene Glycol Alginate (PGA)', href: '/products/propylene-glycol-alginate' },
  { label: 'Pectin', href: '/products/pectin' },
  { label: 'Xanthan Gum', href: '/products/xanthan-gum' },
  { label: 'Guar Gum', href: '/products/guar-gum' },
  { label: 'Gellan Gum', href: '/products/gellan-gum' },
  { label: 'Konjac Gum', href: '/products/konjac-gum' },
  { label: 'Hydroxypropyl Methyl Cellulose (HPMC)', href: '/products/hpmc' },
  { label: 'Hydroxyethyl Cellulose (HEC)', href: '/products/hec' },
  { label: 'Methyl Hydroxyethyl Cellulose (MHEC)', href: '/products/mhec' },
  { label: 'Carboxymethyl Cellulose (CMC)', href: '/products/sodium-cmc' },
  { label: 'Polyanionic Cellulose (PAC)', href: '/products/polyanionic-cellulose' },
  { label: 'Croscarmellose Sodium (CCS)', href: '/products/croscarmellose-sodium' },
  { label: 'Alginic Acid', href: '/products/alginic-acid' },
  { label: 'Locust Bean Gum (LBG)', href: '/products/locust-bean-gum' },
  { label: 'Cellulose Powder', href: '/products/cellulose-powder' },
  { label: 'Modified Starch', href: '/products/modified-starch' },
];

const ApplicationsPortfolioStrip = () => (
  <section data-component="ApplicationsPortfolioStrip" style={{ padding: '60px 1.5rem 0', background: 'var(--cream)' }}>
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
            style={{...S.textForest, letterSpacing: '0.1em'}}
          >
            Our Portfolio
          </p>
        </div>
        <div className="flex flex-wrap gap-2 flex-1">
          {PRODUCTS.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="text-xs px-3 py-1 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                color: 'var(--forest)',
                border: '1px solid rgba(201,168,76,0.35)',
                background: 'var(--cream)',
                fontWeight: 400,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = 'var(--forest)';
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.fontWeight = '600';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--cream)';
                e.currentTarget.style.color = 'var(--forest)';
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                e.currentTarget.style.fontWeight = '400';
              }}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApplicationsPortfolioStrip;