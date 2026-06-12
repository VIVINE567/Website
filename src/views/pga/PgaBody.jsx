'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, INFO_CARDS, VISC_CHART } from '../../data/pgaContent';
import { SPEC_TABLE, GRADES, REF_TABLE } from '../../data/pgaSpecs';
import { REGULATORY, APP_DETAILS, COMPARISON } from '../../data/pgaApps';
import { SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/pgaDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

const FILTERS = [
  { id: 'all', label: 'All grades' },
  { id: 'food', label: 'Food & Beverage' },
  { id: 'pharma', label: 'Pharma' },
  { id: 'cosmetic', label: 'Cosmetics' },
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
    <SectionHeader title="Key properties of PGA" sub="What distinguishes PGA from other alginates and hydrocolloids" />
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
    <motion.div {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {SPEC_TABLE.map((row, i) => (
            <tr key={`r-${i}`} style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(201,168,76,0.12)' }}>
              <td className="px-4 py-2.5 w-2/5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 500 }}>{row[0]}</td>
              <td className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 500 }}>{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const Regulatory = () => (
  <section>
    <SectionHeader title="Regulatory approvals" sub="Cleared for food, pharmaceutical, and cosmetic use globally" />
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

const Grades = () => {
  const [filter, setFilter] = useState('all');
  return (
    <section>
      <SectionHeader title="Grade comparison" sub="Select an industry to highlight relevant grades" />
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
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}>
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
                    <span style={{ color: 'var(--forest)', fontWeight: 600, textAlign: 'right' }}>{v}</span>
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
  );
};

const RefTable = () => (
  <section>
    <SectionHeader title="Quick reference table" sub="All grades at a glance" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {REF_TABLE.cols.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {REF_TABLE.rows.map((row, i) => (
            <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.12)', verticalAlign: 'top' }}>
              <td className="px-3.5 py-2.5">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px] whitespace-nowrap" style={{ background: row.grade.bg, color: row.grade.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{row.grade.text}</span>
              </td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{row.visc}</td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{row.de}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{row.standard}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{row.features}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{row.apps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const ViscChart = () => {
  const C = VISC_CHART;
  const logMin = Math.log10(C.logMin);
  const max = Math.max(...C.bars.map((b) => b.val));
  const logMax = Math.log10(max);
  const span = logMax - logMin;
  const frac = (v) => (Math.log10(v) - logMin) / span;
  const PLOT_H = 280;
  const X_AXIS = 28;
  const BARS_H = PLOT_H - X_AXIS;
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null);
  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    setTip({ b, x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <section>
      <SectionHeader title="Viscosity comparison" sub="Typical max viscosity at 1% aqueous solution, 25°C, Brookfield LVT" />
      <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-4">
          <span className="text-[14px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{C.title}</span>
          <span className="text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{C.sub}</span>
        </div>
        {/* legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {C.bars.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {/* Y axis */}
          <div className="relative" style={{ width: 34, height: PLOT_H }}>
            {C.ticks.map((t) => (
              <span
                key={t}
                className="absolute right-0 text-[10px]"
                style={{ bottom: X_AXIS + frac(t) * BARS_H, transform: 'translateY(50%)', fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}
              >
                {t >= 1000 ? `${t / 1000}k` : t}
              </span>
            ))}
          </div>
          {/* Plot */}
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: PLOT_H }} onMouseLeave={() => setTip(null)}>
              {/* pointer-following tooltip */}
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-md px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'rgba(24,28,32,0.92)', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: '#fff', fontWeight: 600 }}>{tip.b.label}</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    Up to {tip.b.val.toLocaleString()} mPa·s (1%, 25°C)
                  </div>
                </div>
              )}
              {/* gridlines */}
              {C.ticks.map((t) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: X_AXIS + frac(t) * BARS_H, borderTop: '1px solid rgba(0,0,0,0.05)' }} />
              ))}
              {/* bars */}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-2" style={{ bottom: X_AXIS, top: 0 }}>
                {C.bars.map((b) => (
                  <div key={b.label} className="flex flex-col items-center justify-end flex-1 h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${frac(b.val) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      onMouseMove={onBarMove(b)}
                      className="w-full rounded-t cursor-pointer"
                      style={{ background: b.color, maxWidth: 64 }}
                    />
                  </div>
                ))}
              </div>
              {/* x labels */}
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-2" style={{ height: X_AXIS }}>
                {C.bars.map((b) => (
                  <div key={b.label} className="flex-1 text-center leading-tight text-[11px] pt-1.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const AppDetails = () => (
  <section>
    <div className="mb-6">
      <h2 style={S.richSectionHeader}>Application deep-dive</h2>
    </div>
    <div className="flex flex-col gap-5">
      {APP_DETAILS.map((ind) => (
        <motion.div key={ind.title} {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="px-4 py-2.5 text-sm" style={{ background: ind.color.bg, color: ind.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            <span className="mr-2">{ind.icon}</span>{ind.title}
          </div>
          <div className="p-4 grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
            {ind.items.map((it) => (
              <div key={it.name} className="rounded-md border p-2.5" style={{ background: 'var(--cream-dark)', borderColor: 'rgba(201,168,76,0.2)' }}>
                <div className="mb-1" style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'var(--forest)' }}>{it.name}</div>
                <div style={S.richInfoBody}>{it.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
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

const Comparison = () => (
  <section>
    <SectionHeader title="PGA vs. Sodium Alginate — key differences" sub="Choosing the right alginate for your formulation" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse', minWidth: 720 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {COMPARISON.cols.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARISON.rows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: '1px solid rgba(201,168,76,0.12)', verticalAlign: 'top' }}>
              {row.map((cell, ci) => {
                const obj = typeof cell === 'object';
                const text = obj ? cell.t : cell;
                const color = ci === 0 ? 'var(--brown-warm)' : obj && cell.hl === 'good' ? '#1A6830' : obj && cell.hl === 'neg' ? '#781A60' : 'var(--forest)';
                const weight = ci === 0 ? 500 : obj ? 600 : 400;
                return (
                  <td key={ci} className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color, fontWeight: weight, lineHeight: 1.5 }}>{text}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const FooterNote = () => (
  <div className="rounded-md border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <div>{FOOTER_NOTE}</div>
  </div>
);

export default function PgaBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <InfoCards />
      <SpecTable />
      <Regulatory />
      <Grades />
      <RefTable />
      <ViscChart />
      <AppDetails />
      <Seo />
      <Comparison />
      <FooterNote />
    </div>
  );
}
