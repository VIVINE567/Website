'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, INFO_CARDS, VISC_CHART } from '../../data/cmcContent';
import { SPEC_TABLE, GRADES } from '../../data/cmcSpecs';
import { REF_COLS, REF_TABLE } from '../../data/cmcApps';
import { SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/cmcDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

// Branded section header — serif title + animated gold rule (ties to site theme)
const SectionHeader = ({ title, sub }) => (
  <motion.div {...fadeUp} className="mb-6">
    <div className="flex items-start gap-2.5">
      <div className="flex flex-col gap-1">
        <h2 style={S.richSectionHeader}>{title}</h2>
        {sub && <p style={S.richSectionSub}>{sub}</p>}
      </div>
    </div>
  </motion.div>
);

const hoverLift = {
  whileHover: { y: -4, borderColor: 'rgba(201,168,76,0.6)', boxShadow: '0 12px 30px -12px rgba(44,58,35,0.28)' },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

// HTML maps the "Detergent" filter to data-ind="industrial".
const FILTERS = [
  { key: 'all', id: 'all', label: 'All grades' },
  { key: 'food', id: 'food', label: 'Food' },
  { key: 'pharma', id: 'pharma', label: 'Pharma' },
  { key: 'cosmetic', id: 'cosmetic', label: 'Cosmetics' },
  { key: 'construction', id: 'construction', label: 'Construction' },
  { key: 'industrial', id: 'industrial', label: 'Industrial' },
  { key: 'oilfield', id: 'oilfield', label: 'Oilfield' },
  { key: 'detergent', id: 'industrial', label: 'Detergent' },
];

const Highlights = () => (
  <motion.div {...fadeUp} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
    {HIGHLIGHTS.map((h) => (
      <div key={h.val} className="rounded-md border text-center p-3" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div style={S.richHlIcon}>{h.icon}</div>
        <div style={S.richHlVal}>{h.val}</div>
        <div style={S.richHlLbl}>{h.lbl}</div>
      </div>
    ))}
  </motion.div>
);

const InfoCards = () => (
  <section>
    <SectionHeader title="Key properties of CMC" sub="What sets it apart from other cellulose ethers" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {INFO_CARDS.map((c) => (
        <motion.div key={c.title} {...fadeUp} className="rounded-md border p-4" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <h3 style={{ ...S.richInfoTitle, marginBottom: '6px' }}>{c.title}</h3>
          <p style={S.richInfoBody}>{c.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const SpecTable = () => (
  <section>
    <SectionHeader title="Technical specifications" />
    <motion.div {...fadeUp} className="rounded-xl border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {SPEC_TABLE.map((row, i) => (
            <tr key={`r-${i}`} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(201,168,76,0.12)', background: i % 2 ? 'rgba(201,168,76,0.04)' : 'transparent' }}>
              <td className="px-4 py-2.5 w-2/5" style={S.richSpecKey}>{row[0]}</td>
              <td className="px-4 py-2.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--forest)', fontWeight: 600, fontSize: '0.98rem' }}>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const Grades = () => {
  const [filter, setFilter] = useState('all');
  return (
    <section>
      <SectionHeader title="Grade comparison" sub="Select an industry to highlight relevant grades" />
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <span style={S.richFilterLabel} className="mr-1">Filter by industry:</span>
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.id)}
              className="px-3.5 py-1.5 rounded-full text-[12px] transition-all"
              style={{
                fontFamily: "'Raleway', sans-serif",
                border: active ? '1px solid var(--gold-dark)' : '1px solid rgba(201,168,76,0.4)',
                background: active ? 'var(--gold-dark)' : 'transparent',
                color: active ? 'var(--cream)' : 'var(--brown-warm)',
                fontWeight: active ? 600 : 500,
                boxShadow: active ? '0 4px 12px -4px rgba(154,122,46,0.5)' : 'none',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))' }}>
        {GRADES.map((g) => {
          const dim = filter !== 'all' && !g.industries.includes(filter);
          return (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: dim ? 0.22 : 1, y: 0 }}
              whileHover={dim ? {} : { y: -4, boxShadow: '0 14px 32px -14px rgba(44,58,35,0.3)' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-xl border p-4"
              style={{
                background: g.featured ? 'linear-gradient(165deg, var(--cream) 0%, #F7EFD8 100%)' : 'var(--cream)',
                borderColor: g.featured ? 'var(--gold-dark)' : 'rgba(201,168,76,0.25)',
                borderWidth: g.featured ? 2 : 1,
                pointerEvents: dim ? 'none' : 'auto',
              }}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div style={S.richGradeName}>{g.name}</div>
                <span className="px-2 py-0.5 rounded-full" style={{ ...S.richGradeBadge, background: g.badge.bg, color: g.badge.tx }}>{g.badge.text}</span>
              </div>
              <div style={S.richViscRange}>{g.range}</div>
              <div style={S.richVbarBg} className="mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${g.viscPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: '100%', borderRadius: 2, background: 'linear-gradient(90deg, var(--gold), var(--gold-dark))' }}
                />
              </div>
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(201,168,76,0.18)' }}>
                {g.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-2 py-0.5" style={{ ...S.richGradeSpecRow, borderBottom: 'none' }}>
                    <span style={S.richGradeSpecKey}>{k}</span>
                    <span style={S.richGradeSpecVal}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <div style={S.richAppsLbl}>Applications</div>
                <div className="flex flex-wrap gap-1.5">
                  {g.apps.map((a) => (
                    <span key={a.l} style={{ ...S.richAppTag, background: (IC[a.i] || IC.all).bg, color: (IC[a.i] || IC.all).tx }}>{a.l}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

// "Quick reference table" — all grades at a glance
const RefTable = () => (
  <section>
    <SectionHeader title="Quick reference table" sub="All grades at a glance" />
    <motion.div {...fadeUp} className="rounded-xl border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
        <thead>
          <tr style={S.richRefTableHead}>
            {REF_COLS.map((h) => (
              <th key={h} style={S.richRefTableTh}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {REF_TABLE.map((r) => (
            <tr key={r.grade} className="transition-colors" style={{ verticalAlign: 'top' }}>
              <td style={{ ...S.richRefTableTd, whiteSpace: 'nowrap' }}>
                <span style={{ ...S.richTGrade, background: r.color.bg, color: r.color.tx }}>{r.grade}</span>
              </td>
              <td style={{ ...S.richRefTableTd, fontFamily: "'DM Mono', 'Raleway', monospace", color: 'var(--forest)', fontWeight: 600, whiteSpace: 'nowrap' }}>{r.visc}</td>
              <td style={S.richRefTableTd}>{r.standard}</td>
              <td style={S.richRefTableTd}>{r.features}</td>
              <td style={S.richRefTableTd}>{r.apps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

// "Viscosity comparison" — logarithmic bar chart, gradient brand bars, hover tooltip
const ViscChart = () => {
  const logMin = Math.log10(VISC_CHART.ticks[0]);
  const logMax = Math.log10(VISC_CHART.ticks[VISC_CHART.ticks.length - 1]);
  const frac = (v) => (Math.log10(v) - logMin) / (logMax - logMin);
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null); // { b, x, y } in plot coords
  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    setTip({ b, x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <section>
      <SectionHeader title={VISC_CHART.header} sub={VISC_CHART.headerSub} />
      <motion.div {...fadeUp} className="rounded-xl border p-5 md:p-6" style={{ background: 'linear-gradient(170deg, var(--cream) 0%, var(--cream-dark) 100%)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <span style={S.richChartTitle}>{VISC_CHART.title}</span>
          <span style={S.richChartSub}>{VISC_CHART.sub}</span>
        </div>
        {/* legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {VISC_CHART.bars.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {/* Y axis (logarithmic ticks) */}
          <div className="relative pb-7 text-[10px]" style={{ height: 280, width: 26, fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
            {VISC_CHART.ticks.map((t) => (
              <span key={t} className="absolute right-0" style={{ bottom: 28 + frac(t) * 252, transform: 'translateY(50%)' }}>
                {t >= 1000 ? `${t / 1000}k` : t}
              </span>
            ))}
          </div>
          {/* Plot */}
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: 280 }} onMouseLeave={() => setTip(null)}>
              {/* pointer-following tooltip */}
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-lg px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'linear-gradient(160deg, var(--forest) 0%, var(--forest-mid) 100%)', border: '1px solid rgba(201,168,76,0.5)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold-light)', fontWeight: 700 }}>{tip.b.label}</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(245,238,224,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    Up to {tip.b.val.toLocaleString()} mPa·s
                  </div>
                </div>
              )}
              {/* gridlines */}
              {VISC_CHART.ticks.map((t) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: 28 + frac(t) * 252, borderTop: '1px dashed rgba(201,168,76,0.25)' }} />
              ))}
              {/* bars */}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-1.5" style={{ bottom: 28, top: 0 }}>
                {VISC_CHART.bars.map((b) => (
                  <div key={b.label} className="flex flex-col items-center justify-end flex-1 h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${frac(b.val) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      onMouseMove={onBarMove(b)}
                      className="w-full rounded-t cursor-pointer relative group"
                      style={{ background: `linear-gradient(180deg, ${b.color} 0%, ${b.color}99 100%)`, maxWidth: 48, boxShadow: `inset 0 0 0 1px ${b.color}` }}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{b.val.toLocaleString()}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
              {/* x labels */}
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-1.5" style={{ height: 28 }}>
                {VISC_CHART.bars.map((b) => (
                  <div key={b.label} className="flex-1 text-center leading-tight pt-1.5 text-[9.5px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{b.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Seo = () => (
  <section>
    <motion.div {...fadeUp} className="rounded-xl border p-6 relative overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, var(--gold-dark), var(--gold), transparent)' }} />
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
  <div className="rounded-xl border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <div>{FOOTER_NOTE}</div>
  </div>
);

export default function CmcBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <InfoCards />
      <SpecTable />
      <Grades />
      <RefTable />
      <ViscChart />
      <Seo />
      <FooterNote />
    </div>
  );
}
