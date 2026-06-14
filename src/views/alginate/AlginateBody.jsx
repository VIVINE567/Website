'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, INFO_CARDS, VISC_CHART } from '../../data/alginateContent';
import { VISC_GRADE_TABLE, SPEC_TABLE, GRADES } from '../../data/alginateSpecs';
import { RANK, TYPE_CARDS, REG_BADGES, HYDRO_COMPARE, REF_COLS, REF_TABLE, REF_NOTE } from '../../data/alginateApps';
import { APP_DETAILS, SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/alginateDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const hoverLift = {
  whileHover: { y: -4, borderColor: 'rgba(201,168,76,0.6)', boxShadow: '0 12px 30px -12px rgba(44,58,35,0.28)' },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
};

const SectionHeader = ({ title, sub }) => (
  <motion.div {...fadeUp} className="mb-6">
    <div className="flex items-start gap-2.5">
      <div className="flex flex-col gap-1">
        <h2 style={S.richSectionHeader}>{title}</h2>
        {sub && <p style={S.richSectionSub}>{sub}</p>}
      </div>
    </div>
    <div className="relative mt-3 ml-[1.95rem]" style={{ height: 2, maxWidth: 320 }}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 origin-left rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--gold) 0%, var(--gold-dark) 45%, transparent 100%)' }}
      />
    </div>
  </motion.div>
);

/* ── 1. Highlights ── */
const Highlights = () => (
  <motion.div {...fadeUp} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
    {HIGHLIGHTS.map((h) => (
      <motion.div
        key={h.val}
        {...hoverLift}
        className="rounded-xl border text-center p-3.5 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, var(--cream) 0%, var(--cream-dark) 100%)', borderColor: 'rgba(201,168,76,0.3)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />
        <div style={S.richHlIcon}>{h.icon}</div>
        <div style={S.richHlVal}>{h.val}</div>
        <div style={S.richHlLbl}>{h.lbl}</div>
      </motion.div>
    ))}
  </motion.div>
);

/* ── 2. Market Rank ── */
const MarketRank = () => (
  <section>
    <SectionHeader title="Sodium Alginate — global industry consumption ranking" sub="By volume and commercial significance" />
    <motion.div {...fadeUp} className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
      {RANK.map((r) => (
        <motion.div
          key={r.num}
          {...hoverLift}
          className="rounded-xl border p-4 relative"
          style={{ background: r.bg, borderColor: r.border, color: r.tx }}
        >
          {r.star && <span className="absolute top-3 right-3 text-[13px]">⭐</span>}
          <div className="text-[22px] font-light mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", opacity: 0.5 }}>{r.num}</div>
          <div className="text-[13px] font-semibold mb-1.5" style={{ fontFamily: "'Raleway', sans-serif" }}>{r.name}</div>
          <div className="text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.8 }}>{r.apps}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

/* ── 3. Info Cards — Key Properties ── */
const InfoCards = () => (
  <section>
    <SectionHeader title="Key properties of Sodium Alginate" sub="What makes it unique among food & industrial hydrocolloids" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {INFO_CARDS.map((c) => (
        <motion.div key={c.title} {...fadeUp} {...hoverLift} className="rounded-xl border p-4 relative overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(180deg, var(--gold), var(--gold-dark))' }} />
          <h3 style={{ ...S.richInfoTitle, marginBottom: '6px', paddingLeft: '0.4rem' }}>{c.title}</h3>
          <p style={{ ...S.richInfoBody, paddingLeft: '0.4rem' }}>{c.body}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ── 4. G/M Type Banner ── */
const TypeBanner = () => (
  <section>
    <SectionHeader title="Alginate composition — G-block, M-block & grade selection" />
    <motion.div {...fadeUp} className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {TYPE_CARDS.map((tc) => (
        <motion.div key={tc.head} {...hoverLift} className="rounded-xl border p-4" style={{ background: tc.bg, borderColor: tc.border, color: tc.tx }}>
          <div className="text-[14px] font-semibold mb-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>{tc.head}</div>
          <div className="text-[10.5px] font-medium uppercase tracking-widest mb-3" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.65 }}>{tc.sub}</div>
          {tc.props.map(([lbl, val]) => (
            <div key={lbl} className="flex gap-2 text-[11.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif" }}>
              <span style={{ opacity: 0.65, flexShrink: 0, width: 110 }}>{lbl}</span>
              <span className="font-semibold">{val}</span>
            </div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  </section>
);

/* ── 5. Viscosity Grade Classification Table ── */
const ViscGradeTable = () => (
  <section>
    <SectionHeader title="Viscosity grade classification — Sodium Alginate" sub="Measured at 1% aqueous solution, 25°C, Brookfield LV viscometer" />
    <motion.div {...fadeUp} className="rounded-xl border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse', minWidth: 700 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.08)' }}>
            {VISC_GRADE_TABLE.cols.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px] uppercase tracking-wider whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 500, borderBottom: '1px solid rgba(201,168,76,0.2)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {VISC_GRADE_TABLE.rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: i < VISC_GRADE_TABLE.rows.length - 1 ? '1px solid rgba(201,168,76,0.12)' : 'none' }}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-3.5 py-2.5 align-top" style={{ fontFamily: ci === 0 ? "'Cormorant Garamond', serif" : "'Raleway', sans-serif", fontWeight: ci === 0 ? 600 : 400, color: 'var(--forest)', fontSize: ci === 0 ? '0.95rem' : '0.8rem', whiteSpace: ci === 0 ? 'nowrap' : 'normal', lineHeight: 1.5 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3.5 py-2 text-[11px] italic" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>{VISC_GRADE_TABLE.note}</div>
    </motion.div>
  </section>
);

/* ── 6. Standard Specification Table (with section headers) ── */
const SpecTable = () => (
  <section>
    <SectionHeader title="Standard specification — Sodium Alginate" sub="Food grade (E401 / FCC) · Pharma grade (Ph.Eur. / USP-NF) · Technical" />
    <motion.div {...fadeUp} className="rounded-xl border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {SPEC_TABLE.map((row, i) => {
            if (row.section) {
              return (
                <tr key={`s-${i}`}>
                  <td colSpan={2} className="px-4 py-1.5 text-[11px] uppercase tracking-widest" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500, color: 'var(--brown-warm)', background: 'rgba(201,168,76,0.08)', borderTop: i > 0 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>{row.section}</td>
                </tr>
              );
            }
            return (
              <tr key={`r-${i}`} style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                <td className="px-4 py-2.5 w-[42%]" style={S.richSpecKey}>{row.k}</td>
                <td className="px-4 py-2.5" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--forest)', fontWeight: 600, fontSize: '0.98rem' }} dangerouslySetInnerHTML={{ __html: row.v }} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  </section>
);

/* ── 7. Regulatory Badges ── */
const RegBadges = () => (
  <section>
    <SectionHeader title="Regulatory approvals & standards" />
    <motion.div {...fadeUp} className="flex flex-wrap gap-2.5">
      {REG_BADGES.map((b) => (
        <div key={b.strong} className="flex items-center gap-2.5 rounded-lg border px-3.5 py-2" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <span className="text-base">{b.icon}</span>
          <div>
            <strong className="block text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{b.strong}</strong>
            <span className="text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{b.span}</span>
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

/* ── 8. Hydrocolloid Comparison ── */
const HydroCompare = () => (
  <section>
    <SectionHeader title="Alginate vs. comparable hydrocolloids" sub="Selecting the right gelling or thickening agent for your system" />
    <motion.div {...fadeUp} className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {HYDRO_COMPARE.map((c) => (
        <motion.div key={c.name} {...hoverLift} className="rounded-xl border p-4 text-center" style={{ background: c.bg, borderColor: c.border, color: c.tx }}>
          <div className="text-[15px] font-semibold mb-0.5" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}>{c.name}</div>
          <div className="text-[11px] mb-2.5" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.65 }}>{c.sub}</div>
          <span className="inline-block px-3 py-0.5 rounded-full text-[11.5px] font-semibold mb-2.5" style={{ fontFamily: "'Raleway', sans-serif", background: c.bg, border: `1px solid ${c.border}`, color: c.tx }}>{c.tag}</span>
          <p className="text-[11.5px] text-left leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", opacity: 0.8 }}>{c.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

/* ── 9. Grade Comparison ── */
const FILTERS = [
  { key: 'all',     label: 'All grades' },
  { key: 'food',    label: 'Food & Beverage' },
  { key: 'pharma',  label: 'Pharmaceuticals' },
  { key: 'textile', label: 'Textile Printing' },
  { key: 'care',    label: 'Personal Care' },
  { key: 'animal',  label: 'Animal Nutrition' },
];

const Grades = () => {
  const [filter, setFilter] = useState('all');
  return (
    <section>
      <SectionHeader title="Grade comparison" sub="Select an industry to highlight relevant grades" />
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <span style={S.richFilterLabel} className="mr-1">Filter by industry:</span>
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
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
                  <div key={k} className="flex justify-between gap-2 py-0.5">
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

/* ── 10. Viscosity Chart (logarithmic, 9 bars, pointer-following tooltip) ── */
const ViscChart = () => {
  const logMin = Math.log10(15);
  const logMax = Math.log10(1200);
  const frac = (v) => (Math.log10(v) - logMin) / (logMax - logMin);
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null);

  const bars = VISC_CHART.labels.map((lbl, i) => ({
    label: lbl,
    val: VISC_CHART.vals[i],
    color: VISC_CHART.colors[i],
    appLabel: VISC_CHART.appLabels[i],
  }));

  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    setTip({ b, x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <section>
      <SectionHeader title="Viscosity grade guide by application" sub="Brookfield 1% aqueous, 25°C — indicative values by grade and industry" />
      <motion.div {...fadeUp} className="rounded-xl border p-5 md:p-6" style={{ background: 'linear-gradient(170deg, var(--cream) 0%, var(--cream-dark) 100%)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <span style={S.richChartTitle}>{VISC_CHART.title}</span>
          <span style={S.richChartSub}>{VISC_CHART.sub}</span>
        </div>
        {/* legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {bars.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {/* Y axis */}
          <div className="relative pb-7 text-[10px]" style={{ height: 280, width: 32, fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
            {VISC_CHART.yTicks.map((t) => (
              <span key={t} className="absolute right-0" style={{ bottom: 28 + frac(t) * 252, transform: 'translateY(50%)' }}>
                {t >= 1000 ? `${t / 1000}k` : t}
              </span>
            ))}
          </div>
          {/* Plot */}
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: 280 }} onMouseLeave={() => setTip(null)}>
              {/* tooltip */}
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-lg px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'linear-gradient(160deg, var(--forest) 0%, var(--forest-mid) 100%)', border: '1px solid rgba(201,168,76,0.5)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--gold-light)', fontWeight: 700 }}>{tip.b.label}</div>
                  <div className="flex items-center gap-1.5 text-[11.5px] mb-0.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(245,238,224,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    ~{tip.b.val.toLocaleString()} mPa·s
                  </div>
                  <div className="text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(245,238,224,0.7)', maxWidth: 240 }}>— {tip.b.appLabel}</div>
                </div>
              )}
              {/* gridlines */}
              {VISC_CHART.yTicks.map((t) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: 28 + frac(t) * 252, borderTop: '1px dashed rgba(201,168,76,0.25)' }} />
              ))}
              {/* bars */}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-1" style={{ bottom: 28, top: 0 }}>
                {bars.map((b) => (
                  <div key={b.label} className="flex flex-col items-center justify-end flex-1 h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${frac(b.val) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      onMouseMove={onBarMove(b)}
                      className="w-full rounded-t cursor-pointer relative group"
                      style={{ background: b.color, maxWidth: 44, boxShadow: `inset 0 0 0 1px ${b.color}` }}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{b.val.toLocaleString()}</span>
                    </motion.div>
                  </div>
                ))}
              </div>
              {/* x labels */}
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-1" style={{ height: 28 }}>
                {bars.map((b) => (
                  <div key={b.label} className="flex-1 text-center leading-tight pt-1.5 text-[8.5px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{b.label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* ── 11. Chart footer note ── */
const ChartFooterNote = () => (
  <div className="rounded-xl border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.08)', borderColor: 'rgba(201,168,76,0.3)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <div>All viscosity values are indicative at 1% aqueous solution, 25°C, Brookfield LV viscometer, spindle 3, 60 rpm. Actual values depend on G/M ratio, molecular weight distribution, ionic strength, pH, and shear rate. Contact VIVINE International for grade-specific TDS, SDS, COA, Ph.Eur./USP-NF compliance documents, and sample requests.</div>
  </div>
);

/* ── 12. Application Reference Table (15 rows) ── */
const AppRefTable = () => (
  <section>
    <SectionHeader title="Applications by industry segment" sub="Functional role, recommended grade, and dosage reference" />
    <motion.div {...fadeUp} className="rounded-xl border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 860 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.08)' }}>
            {REF_COLS.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px] uppercase tracking-wider whitespace-nowrap" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 500, borderBottom: '1px solid rgba(201,168,76,0.2)' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {REF_TABLE.map((r, i) => (
            <tr key={i} style={{ borderBottom: '1px solid rgba(201,168,76,0.1)', verticalAlign: 'top' }}>
              <td className="px-3.5 py-2.5 whitespace-nowrap">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", background: r.iStyle.bg, color: r.iStyle.tx }}>{r.industry}</span>
              </td>
              <td className="px-3.5 py-2.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest-mid)', lineHeight: 1.5 }}>{r.products}</td>
              <td className="px-3.5 py-2.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest-mid)', lineHeight: 1.5 }}>{r.grade}</td>
              <td className="px-3.5 py-2.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest-mid)', lineHeight: 1.5 }}>{r.fn}</td>
              <td className="px-3.5 py-2.5 whitespace-nowrap text-[12px] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--forest)', fontSize: '0.9rem' }}>{r.dose}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="px-3.5 py-2 text-[12px] italic" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>{REF_NOTE}</p>
    </motion.div>
  </section>
);

/* ── 13. Application Deep-Dive ── */
const AppDeepDive = () => (
  <section>
    <SectionHeader title="Industry application deep-dive" sub="Detailed use cases across all 5 industries" />
    <div className="flex flex-col gap-4">
      {APP_DETAILS.map((sec) => (
        <motion.div key={sec.industry} {...fadeUp} className="rounded-xl border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="px-5 py-3.5 border-b" style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
            <h3 style={{ ...S.richSectionHeader, fontSize: '1.1rem' }}>{sec.industry}</h3>
          </div>
          <div className="p-4 flex flex-col gap-5">
            {sec.groups.map((grp) => (
              <div key={grp.title}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md mb-3 text-[13px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", background: grp.bg, color: grp.tx }}>{grp.title}</div>
                <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
                  {grp.items.map((item) => (
                    <div key={item.name} className="rounded-lg border p-3" style={{ background: 'rgba(201,168,76,0.04)', borderColor: 'rgba(201,168,76,0.18)' }}>
                      <div className="text-[12.5px] font-semibold mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{item.name}</div>
                      <div className="text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

/* ── 14. SEO ── */
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

/* ── 15. Footer Note ── */
const FooterNote = () => (
  <div className="rounded-xl border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <div>{FOOTER_NOTE}</div>
  </div>
);

export default function AlginateBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <MarketRank />
      <InfoCards />
      <TypeBanner />
      <ViscGradeTable />
      <SpecTable />
      <RegBadges />
      <HydroCompare />
      <Grades />
      <ViscChart />
      <ChartFooterNote />
      <AppRefTable />
      <AppDeepDive />
      <Seo />
      <FooterNote />
    </div>
  );
}
