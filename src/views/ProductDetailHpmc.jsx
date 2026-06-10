'use client';

import React, { useLayoutEffect } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import S from '../styles/products';
import ProductSidebar from '../components/ProductSidebar';
import { HERO, HIGHLIGHTS, MARKET_RANK, CE_COMPARE } from '../data/hpmcContent';
import HpmcSubstAndInfo from './hpmc/HpmcSubstAndInfo';
import HpmcSpecsAndGrades from './hpmc/HpmcSpecsAndGrades';
import HpmcAppsTable from './hpmc/HpmcAppsTable';
import HpmcAppDetails from './hpmc/HpmcAppDetails';
import HpmcRegulatory from './hpmc/HpmcRegulatory';
import HpmcSeo from './hpmc/HpmcSeo';
import HpmcFooterNote from './hpmc/HpmcFooterNote';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

const Highlights = () => (
  <section className="mb-8">
    <motion.div {...fadeUp(0)} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
      {HIGHLIGHTS.map((h) => (
        <div key={h.val} className="rounded-md border text-center p-3" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div style={S.richHlIcon}>{h.icon}</div>
          <div style={S.richHlVal}>{h.val}</div>
          <div style={S.richHlLbl}>{h.lbl}</div>
        </div>
      ))}
    </motion.div>
  </section>
);

const MarketRank = () => (
  <section className="mb-8">
    <SectionHeader title="HPMC — global industry consumption ranking" sub="By volume — industrial grade and speciality grade combined" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {MARKET_RANK.map((r) => (
        <motion.div key={r.num} {...fadeUp(0)} className="rounded-md p-4 relative border" style={{ background: r.color.bg, borderColor: r.color.border, color: r.color.tx }}>
          {r.star && <div className="absolute top-2.5 right-2.5 text-sm">⭐</div>}
          <div className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, opacity: 0.55 }}>{r.num}</div>
          <div className="text-sm mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>{r.name}</div>
          <div className="text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.8 }}>{r.apps}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const CeCompare = () => (
  <section className="mb-8">
    <SectionHeader title="Cellulose ether selection — HEC vs MHEC vs HPMC" sub="Which cellulose ether for which application" />
    <div className="grid gap-3 md:grid-cols-3">
      {CE_COMPARE.map((c) => (
        <motion.div key={c.name} {...fadeUp(0)} className="rounded-md p-4 border" style={{ background: c.bg, borderColor: c.border, color: c.tx }}>
          <div className="mb-0.5" style={{ ...S.richGradeName, color: c.tx }}>{c.name}</div>
          <div className="text-[12px] mb-2" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.85 }}>{c.sub}</div>
          <span className="inline-block px-2.5 py-1 rounded-full text-[10.5px] mb-3" style={{ background: c.bg, color: c.tx, border: `1px solid ${c.border}`, fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{c.tag}</span>
          <div className="text-[12.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif" }}>{c.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default function ProductDetailHpmc({ slug }) {
  useLayoutEffect(() => { window.scrollTo(0, 0); }, [slug]);

  return (
    <div className="pt-[72px]" style={{ background: 'var(--cream-dark)' }}>

      {/* Hero band — reuses the shared ProductDetailRich header */}
      <section className="pb-12 pt-20 px-4 md:px-6 overflow-hidden" style={S.productDetailHero}>
        <div className="max-w-7xl mx-auto w-full">
          <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6 uppercase" style={S.productDetailBreadcrumb}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <Link href="/products" className="hover:opacity-80 transition-opacity">Cellulose Ethers</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <span>HPMC</span>
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

          <div className="min-w-0">
            <Highlights />
            <MarketRank />
            <CeCompare />
            <HpmcSubstAndInfo />
            <HpmcSpecsAndGrades />
            <HpmcAppsTable />
            <HpmcAppDetails />
            <HpmcRegulatory />
            <HpmcSeo />
            <HpmcFooterNote />
          </div>
        </div>
      </div>
    </div>
  );
}
