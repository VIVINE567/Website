'use client';

import React, { useLayoutEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import S from '../styles/products';
import ProductSidebar from '../components/ProductSidebar';
import { HERO } from '../data/ccsContent';
import CcsBody from './ccs/CcsBody';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProductDetailCcs({ slug }) {
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <div className="pt-[72px]" style={{ background: 'var(--cream-dark)' }}>

      {/* Hero band */}
      <section className="pb-12 pt-20 px-4 md:px-6 overflow-hidden" style={S.productDetailHero}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6 uppercase" style={S.productDetailBreadcrumb}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <Link href="/products" className="hover:opacity-80 transition-opacity">Pharmaceutical Excipients</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <span>Croscarmellose Sodium</span>
          </motion.div>

          <motion.div {...fadeUp(0.05)} className="mb-3">
            <span style={{ ...S.richProductTag, background: 'rgba(201,168,76,0.2)', color: 'var(--gold-light)' }}>
              {HERO.productTag}
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-3xl md:text-4xl lg:text-5xl mb-3" style={{ ...S.productDetailHeroH1 }}>
            {HERO.title}
          </motion.h1>

          <motion.div
            {...fadeUp(0.15)}
            className="mb-5"
            style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.78rem', color: 'rgba(245,238,224,0.7)', letterSpacing: '0.04em' }}
          >
            {HERO.cas}
          </motion.div>

          <motion.p {...fadeUp(0.2)} className="text-sm md:text-base max-w-3xl" style={S.productDetailTagline}>
            {HERO.desc}
          </motion.p>

          {HERO.statPills && (
            <motion.div {...fadeUp(0.3)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 max-w-2xl">
              {HERO.statPills.map((pill) => (
                <div key={pill.lbl} style={{ ...S.richStatPill, background: 'rgba(245,238,224,0.08)', border: '1px solid rgba(201,168,76,0.3)' }}>
                  <div style={{ ...S.richStatVal, color: 'var(--cream)' }}>{pill.val}</div>
                  <div style={{ ...S.richStatLbl, color: 'rgba(245,238,224,0.7)' }}>{pill.lbl}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Main content + sidebar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 py-16">
          <ProductSidebar currentSlug={slug} />
          <CcsBody />
        </div>
      </div>
    </div>
  );
}
