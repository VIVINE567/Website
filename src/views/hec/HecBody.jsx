'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, MARKET_RANK, TYPE_COMPARE, INFO_CARDS } from '../../data/hecContent';
import { SPEC_TABLE, GRADES } from '../../data/hecSpecs';
import { APP_TABLE } from '../../data/hecApps';
import { APP_DETAILS, REGULATORY, SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/hecDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

const FILTERS = [
  { id: 'all', label: 'All grades' },
  { id: 'paint', label: 'Paints & Coatings' },
  { id: 'oil', label: 'Oil & Gas' },
  { id: 'const', label: 'Construction' },
  { id: 'care', label: 'Personal Care' },
  { id: 'deterg', label: 'Detergents' },
  { id: 'text', label: 'Textile' },
];

const Highlights = () => (
  <motion.div {...fadeUp} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))' }}>
    {HIGHLIGHTS.map((h) => (
      <div key={h.val} className="rounded-md border text-center p-3" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div style={S.richHlIcon}>{h.icon}</div>
        <div style={S.richHlVal}>{h.val}</div>
        <div style={S.richHlLbl}>{h.lbl}</div>
      </div>
    ))}
  </motion.div>
);

const MarketRank = () => (
  <section>
    <SectionHeader title="HEC — global industry consumption ranking" sub="Largest-volume application segments worldwide" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      {MARKET_RANK.map((r) => (
        <motion.div key={r.num} {...fadeUp} className="rounded-md p-4 relative border" style={{ background: r.color.bg, borderColor: r.color.border, color: r.color.tx }}>
          {r.star && <div className="absolute top-2.5 right-2.5 text-sm">⭐</div>}
          <div className="text-2xl mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, opacity: 0.55 }}>{r.num}</div>
          <div className="text-sm mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>{r.name}</div>
          <div className="text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.8 }}>{r.apps}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const TypeCompare = () => (
  <section>
    <SectionHeader title="HEC vs MHEC vs HPMC — cellulose ether selection guide" sub="Key differentiators for product and application matching" />
    <div className="grid gap-3 md:grid-cols-3">
      {TYPE_COMPARE.map((c) => (
        <motion.div key={c.name} {...fadeUp} className="rounded-md p-4 border" style={{ background: c.color.bg, borderColor: c.color.border, color: c.color.tx }}>
          <div className="text-base font-bold mb-0.5" style={{ fontFamily: "'Raleway', sans-serif" }}>{c.name}</div>
          <div className="text-[10.5px] uppercase mb-3" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: '0.06em', opacity: 0.7 }}>{c.sub}</div>
          {c.props.map(([k, v]) => (
            <div key={k} className="flex gap-1.5 text-[11.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <span style={{ opacity: 0.65, flexShrink: 0, width: 110 }}>{k}</span>
              <span style={{ fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  </section>
);

const InfoCards = () => (
  <section>
    <SectionHeader title="Chemical identity & functional properties" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {INFO_CARDS.map((c) => (
        <motion.div key={c.title} {...fadeUp} className="rounded-md border p-4" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <h3 style={{ ...S.richInfoTitle, marginBottom: '6px' }}>{c.title}</h3>
          <p style={S.richInfoBody}>{c.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const SpecsAndGrades = () => {
  const [filter, setFilter] = useState('all');
  return (
    <>
      <section>
        <SectionHeader title="Standard technical specification" sub="Reference values — actual TDS varies by viscosity grade" />
        <motion.div {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
            <tbody>
              {SPEC_TABLE.map((row, i) => {
                if (row.section) {
                  return (
                    <tr key={`s-${i}`} style={{ background: 'rgba(201,168,76,0.1)' }}>
                      <td colSpan={2} className="px-4 py-2 text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{row.section}</td>
                    </tr>
                  );
                }
                return (
                  <tr key={`r-${i}`} style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
                    <td className="px-4 py-2.5 w-2/5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 500 }}>{row[0]}</td>
                    <td className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{row[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </section>

      <section>
        <SectionHeader title="Grade comparison" sub="Select an industry to highlight relevant viscosity grades" />
        <div className="flex flex-wrap gap-2 mb-4 items-center">
          <span className="text-[11px] uppercase mr-1" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.04em' }}>Filter by industry:</span>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="px-3 py-1 rounded-full text-[12px] transition-all"
              style={{
                fontFamily: "'Raleway', sans-serif",
                border: '1px solid rgba(201,168,76,0.4)',
                background: filter === f.id ? 'var(--gold-dark)' : 'transparent',
                color: filter === f.id ? 'var(--cream)' : 'var(--brown-warm)',
                fontWeight: filter === f.id ? 600 : 500,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(215px, 1fr))' }}>
          {GRADES.map((g) => {
            const dim = filter !== 'all' && !g.industries.includes(filter);
            return (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: dim ? 0.22 : 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-md border p-4"
                style={{
                  background: 'var(--cream)',
                  borderColor: g.featured ? 'var(--gold-dark)' : 'rgba(201,168,76,0.25)',
                  borderWidth: g.featured ? 2 : 1,
                  pointerEvents: dim ? 'none' : 'auto',
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div style={S.richGradeName}>{g.name}</div>
                  <span className="px-2 py-0.5 rounded-full" style={{ ...S.richGradeBadge, background: g.badge.bg, color: g.badge.tx }}>{g.badge.text}</span>
                </div>
                <div className="text-[11.5px] mb-2" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{g.range}</div>
                <div className="h-1 rounded mb-3" style={{ background: 'var(--cream-dark)' }}>
                  <div style={{ width: `${g.viscPct}%`, height: '100%', background: 'var(--gold-dark)', borderRadius: 2 }} />
                </div>
                <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(201,168,76,0.18)' }}>
                  {g.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-2 text-[11.5px] py-0.5" style={{ fontFamily: "'Raleway', sans-serif" }}>
                      <span style={{ color: 'var(--brown-warm)' }}>{k}</span>
                      <span style={{ color: 'var(--forest)', fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <div className="text-[10px] uppercase mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.06em' }}>Applications</div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.apps.map((a) => (
                      <span key={a.l} className="px-2 py-0.5 text-[10.5px] rounded" style={{ background: (IC[a.i] || IC.all).bg, color: (IC[a.i] || IC.all).tx, fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>{a.l}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const AppsTable = () => (
  <section>
    <SectionHeader title="Applications by industry segment" sub="Functional role, recommended grade, and dosage" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse', minWidth: 900 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {['Industry / Segment', 'Typical products', 'Recommended viscosity grade', 'Function of HEC', 'Dosage (% w/w)'].map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {APP_TABLE.map((row, i) => (
            <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.12)', verticalAlign: 'top' }}>
              <td className="px-3.5 py-2.5">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px] whitespace-nowrap" style={{ background: row.color.bg, color: row.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{row.name}</span>
              </td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{row.products}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{row.visc}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{row.func}</td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{row.dosage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const AppDetails = () => (
  <section>
    <div className="mb-6">
      <h2 style={S.richSectionHeader}>Application details — functional role by industry</h2>
    </div>
    <div className="flex flex-col gap-5">
      {APP_DETAILS.map((ind) => (
        <motion.div key={ind.title} {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="px-4 py-2.5 text-sm" style={{ background: ind.color.bg, color: ind.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            <span className="mr-2">{ind.icon}</span>{ind.title}
          </div>
          <div className="p-4 grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {ind.items.map((it) => (
              <div key={it.name}>
                <div className="mb-1" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.875rem', fontWeight: 500, color: 'var(--forest)' }}>{it.name}</div>
                <div style={S.richInfoBody}>{it.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Regulatory = () => (
  <section>
    <div className="mb-6">
      <h2 style={S.richSectionHeader}>Standards & regulatory status</h2>
    </div>
    <motion.div {...fadeUp} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))' }}>
      {REGULATORY.map((r) => (
        <div key={r.title} className="rounded-md border p-3 flex items-start gap-2.5" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="text-lg">{r.icon}</div>
          <div className="flex flex-col">
            <strong className="text-[13px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 700 }}>{r.title}</strong>
            <span className="text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.sub}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

const Seo = () => (
  <section>
    <motion.div {...fadeUp} className="rounded-md border p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <h2 style={S.richSeoH2}>{SEO_TITLE}</h2>
      <div className="space-y-3.5" style={S.richSeoBody}>
        {SEO_PARAS.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
        ))}
      </div>
    </motion.div>
  </section>
);

const FooterNote = () => (
  <div className="rounded-md border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 7v4M8 5.5v.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
    <div>{FOOTER_NOTE}</div>
  </div>
);

export default function HecBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <MarketRank />
      <TypeCompare />
      <InfoCards />
      <SpecsAndGrades />
      <AppsTable />
      <AppDetails />
      <Regulatory />
      <Seo />
      <FooterNote />
    </div>
  );
}
