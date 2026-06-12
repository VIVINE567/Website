'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, TYPE_COMPARE, MECHANISM, INFO_CARDS, GEL_CHART } from '../../data/gellanContent';
import { SPEC_TABLE, GRADES } from '../../data/gellanSpecs';
import { INDUSTRY_TABLE, COMPARISON } from '../../data/gellanApps';
import { REGULATORY, APP_DETAILS, SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/gellanDetails';

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
  { id: 'dairy', label: 'Dairy & Plant-Based' },
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

// "Two commercial types — Low Acyl (LA) vs High Acyl (HA)" — two coloured cards
const TypeCards = () => (
  <section>
    <SectionHeader title="Two commercial types — Low Acyl (LA) vs High Acyl (HA)" sub="The choice of type determines gel texture, clarity, and application suitability" />
    <motion.div {...fadeUp} className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
      {TYPE_COMPARE.map((c) => (
        <div key={c.name} className="rounded-md p-5" style={{ background: c.color.bg, border: `1.5px solid ${c.color.border}`, color: c.color.tx }}>
          <div className="text-[15px]" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>{c.name}</div>
          <div className="text-[10.5px] uppercase mb-3 mt-0.5" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 600, letterSpacing: '0.08em', opacity: 0.65 }}>{c.sub}</div>
          {c.props.map(([k, v]) => (
            <div key={k} className="flex gap-1.5 text-[11.5px] mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <span className="shrink-0" style={{ width: 104, opacity: 0.65 }}>{k}</span>
              <span style={{ fontWeight: 600 }}>{v}</span>
            </div>
          ))}
        </div>
      ))}
    </motion.div>
  </section>
);

// "How Gellan Gum gels — mechanism of gelation" — numbered step flow
const Mechanism = () => (
  <section>
    <SectionHeader title={MECHANISM.title} />
    <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <div className="grid gap-x-6 gap-y-5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(155px, 1fr))' }}>
        {MECHANISM.steps.map((s, i) => (
          <div key={s.title} className="relative">
            {i < MECHANISM.steps.length - 1 && (
              <span className="hidden md:block absolute text-lg" style={{ right: -16, top: 6, color: 'var(--gold-dark)' }} aria-hidden="true">→</span>
            )}
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[12px] mb-2" style={{ background: 'var(--gold-dark)', color: 'var(--cream)', fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{i + 1}</div>
            <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{s.title}</div>
            <div className="text-[11.5px] leading-snug" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

const InfoCards = () => (
  <section>
    <SectionHeader title="Key functional properties of Gellan Gum" sub="What distinguishes gellan from other microbial and natural gelling agents" />
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
                <td className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 500 }}>{row[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const Regulatory = () => (
  <section>
    <SectionHeader title="Regulatory approvals & certifications" />
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

// "Industry applications — at a glance"
const IndustryTable = () => (
  <section>
    <SectionHeader title="Industry applications — at a glance" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {['Industry', 'Common Applications', 'Gellan Type', 'Key Function', 'Typical Use Level'].map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {INDUSTRY_TABLE.map((r) => (
            <tr key={r.name} style={{ borderTop: '1px solid rgba(201,168,76,0.12)', verticalAlign: 'top' }}>
              <td className="px-3.5 py-2.5 whitespace-nowrap">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px]" style={{ background: r.color.bg, color: r.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{r.name}</span>
                {r.tag && <span className="inline-block ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] align-middle" style={{ background: '#E4F4F0', color: '#0A4A42', fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>{r.tag}</span>}
              </td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{r.apps}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{r.type}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{r.func}</td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'DM Mono', 'Raleway', monospace", color: 'var(--forest)', fontWeight: 600 }}>{r.use}</td>
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
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))' }}>
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

// "Gel strength comparison" — mirrors the HTML Chart.js bar chart (solid bars, hover tooltip)
const GelChart = () => {
  const max = Math.max(...GEL_CHART.bars.map((b) => b.val));
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(max * f));
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null); // { b, x, y } in plot coords
  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    setTip({ b, x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <section>
      <SectionHeader title="Gel strength comparison" sub="Indicative gel strength (g/cm²) at 0.5% concentration — LA gellan vs other gelling agents" />
      <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <span className="text-[14px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{GEL_CHART.title}</span>
          <span className="text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{GEL_CHART.sub}</span>
        </div>
        <div className="flex gap-2">
          {/* Y axis */}
          <div className="flex flex-col justify-between items-end pb-7 text-[10px]" style={{ height: 280, fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
            {[...ticks].reverse().map((t) => (<span key={t}>{t.toLocaleString()}</span>))}
          </div>
          {/* Plot */}
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: 280 }} onMouseLeave={() => setTip(null)}>
              {/* pointer-following tooltip */}
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-md px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'rgba(24,28,32,0.92)', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: '#fff', fontWeight: 600 }}>{tip.b.label} ({tip.b.sub})</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    ~{tip.b.val.toLocaleString()} g/cm² (indicative, 0.5%, 25°C)
                  </div>
                </div>
              )}
              {/* gridlines */}
              {ticks.map((t, i) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: 28 + (i / (ticks.length - 1)) * 252, borderTop: '1px solid rgba(0,0,0,0.05)' }} />
              ))}
              {/* bars */}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-2" style={{ bottom: 28, top: 0 }}>
                {GEL_CHART.bars.map((b) => (
                  <div key={`${b.label}-${b.sub}`} className="flex flex-col items-center justify-end flex-1 h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(b.val / max) * 100}%` }}
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
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-2" style={{ height: 28 }}>
                {GEL_CHART.bars.map((b) => (
                  <div key={`${b.label}-${b.sub}`} className="flex-1 text-center leading-tight" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
                    <div className="text-[9.5px] font-semibold" style={{ color: 'var(--forest)' }}>{b.label}</div>
                    <div className="text-[8.5px] opacity-70">{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-2 text-[10px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{GEL_CHART.axisLabel}</div>
          </div>
        </div>
        {/* legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center mt-4 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          {GEL_CHART.bars.map((b) => (
            <span key={`${b.label}-${b.sub}`} className="flex items-center gap-1.5 text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const AppDetails = () => (
  <section>
    <div className="mb-6">
      <h2 style={S.richSectionHeader}>Application deep-dive by industry</h2>
    </div>
    <div className="flex flex-col gap-5">
      {APP_DETAILS.map((ind) => (
        <motion.div key={ind.title} {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="px-4 py-2.5 text-sm" style={{ background: ind.color.bg, color: ind.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
            <span className="mr-2">{ind.icon}</span>{ind.title}
          </div>
          <div className="p-4 grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(205px, 1fr))' }}>
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

// "Gellan Gum vs. comparable gelling agents" — comparison table with note
const Comparison = () => (
  <section>
    <SectionHeader title="Gellan Gum vs. comparable gelling agents" sub="Selecting the right gelling system for your formulation" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
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
                const color = ci === 0 ? 'var(--brown-warm)' : obj && cell.hl === 'good' ? '#1A6830' : obj && cell.hl === 'neg' ? '#8A2020' : 'var(--forest)';
                const weight = ci === 0 ? 500 : obj && cell.hl ? 600 : obj ? 500 : 400;
                return (
                  <td key={ci} className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color, fontWeight: weight, lineHeight: 1.5 }}>{text}</td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-3.5 py-2.5 text-[12px] italic" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{COMPARISON.note}</p>
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

export default function GellanBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <TypeCards />
      <Mechanism />
      <InfoCards />
      <SpecTable />
      <Regulatory />
      <IndustryTable />
      <Grades />
      <GelChart />
      <AppDetails />
      <Seo />
      <Comparison />
      <FooterNote />
    </div>
  );
}
