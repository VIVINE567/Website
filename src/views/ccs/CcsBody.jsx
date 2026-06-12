'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { IC, HIGHLIGHTS, MECHANISM, INFO_CARDS, DISINT_CHART } from '../../data/ccsContent';
import { SPEC_TABLE, GRADES } from '../../data/ccsSpecs';
import { REGULATORY, REF_COLS, REF_TABLE, APP_DETAILS, COMPARE, FORMULATION } from '../../data/ccsApps';
import { SEO_TITLE, SEO_PARAS, FOOTER_NOTE } from '../../data/ccsDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

const FILTERS = [
  { key: 'all', id: 'all', label: 'All grades' },
  { key: 'pharma', id: 'pharma', label: 'Pharmaceutical' },
  { key: 'nutri', id: 'nutri', label: 'Nutraceutical' },
  { key: 'otc', id: 'otc', label: 'OTC / Generic' },
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

const MechanismBox = () => (
  <section>
    <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <h2 className="mb-5" style={S.richSectionHeader}>{MECHANISM.title}</h2>
      <div className="grid gap-0" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {MECHANISM.steps.map((s, i) => (
          <div key={s.num} className="relative pr-4 py-3" style={{ paddingLeft: 0 }}>
            {i < MECHANISM.steps.length - 1 && (
              <span className="absolute text-lg hidden sm:block" style={{ right: -10, top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.5)', zIndex: 1, fontFamily: "'Raleway', sans-serif" }}>→</span>
            )}
            <div className="w-7 h-7 rounded-full flex items-center justify-center mb-2" style={{ background: 'var(--gold-dark)', color: '#fff', fontSize: '12px', fontWeight: 500, fontFamily: "'Raleway', sans-serif" }}>{s.num}</div>
            <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{s.title}</div>
            <div className="text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

const InfoCards = () => (
  <section>
    <SectionHeader title="Key functional properties" sub="What makes CCS the preferred superdisintegrant in oral solid dosage forms" />
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
                  <td colSpan={2} className="px-4 py-2" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {row.section}
                  </td>
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
    <SectionHeader title="Pharmacopoeial compliance & certifications" />
    <motion.div {...fadeUp} className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}>
      {REGULATORY.map((r) => (
        <div key={r.title} className="rounded-md border p-3 flex items-start gap-2.5" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <span className="text-xl shrink-0">{r.icon}</span>
          <div>
            <div className="text-[12.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{r.title}</div>
            <div className="text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.sub}</div>
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
        <span className="text-[11px] uppercase mr-1" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.04em' }}>Filter by application:</span>
        {FILTERS.map((f) => (
          <button
            key={f.key}
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

const RefTable = () => (
  <section>
    <SectionHeader title="Quick reference table" sub="All grades at a glance" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 820 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {REF_COLS.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {REF_TABLE.map((r) => (
            <tr key={r.grade} style={{ borderTop: '1px solid rgba(201,168,76,0.12)', verticalAlign: 'top' }}>
              <td className="px-3.5 py-2.5 whitespace-nowrap">
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px]" style={{ background: r.color.bg, color: r.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 600 }}>{r.grade}</span>
                {r.volTag && (
                  <span className="ml-1.5 inline-block px-1.5 py-0.5 rounded text-[9px] uppercase" style={{ background: 'rgba(201,168,76,0.18)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif", fontWeight: 700, letterSpacing: '0.04em' }}>{r.volTag}</span>
                )}
              </td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'DM Mono', 'Raleway', monospace", color: 'var(--forest)', fontWeight: 600 }}>{r.useLevel}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: '#1A6B28', fontWeight: 500 }}>{r.settling}</td>
              <td className="px-3.5 py-2.5 whitespace-nowrap" style={{ fontFamily: "'DM Mono', 'Raleway', monospace", color: 'var(--forest)', fontWeight: 600 }}>{r.ph}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{r.process}</td>
              <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', lineHeight: 1.5 }}>{r.primary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </section>
);

const DisintChart = () => {
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null);
  const maxVal = DISINT_CHART.yMax;
  const frac = (v) => v / maxVal;
  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    setTip({ b, x: e.clientX - r.left, y: e.clientY - r.top });
  };
  const ticks = [0, 20, 40, 60, 80, 100];
  return (
    <section>
      <SectionHeader title={DISINT_CHART.header} sub={DISINT_CHART.headerSub} />
      <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <span className="text-[14px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{DISINT_CHART.title}</span>
          <span className="text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{DISINT_CHART.sub}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {DISINT_CHART.bars.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label.replace(/\n.*/, '')}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative pb-7 text-[10px]" style={{ height: 280, width: 30, fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
            {ticks.map((t) => (
              <span key={t} className="absolute right-0" style={{ bottom: 28 + frac(t) * 252, transform: 'translateY(50%)' }}>{t}</span>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: 280 }} onMouseLeave={() => setTip(null)}>
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-md px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'rgba(24,28,32,0.92)', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: '#fff', fontWeight: 600 }}>{tip.b.label.replace(/\n.*/, '')}</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    Efficiency index: {tip.b.val} / 100 (at equivalent 2% use level, DC tablet)
                  </div>
                </div>
              )}
              {ticks.map((t) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: 28 + frac(t) * 252, borderTop: '1px solid rgba(0,0,0,0.05)' }} />
              ))}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-1.5" style={{ bottom: 28, top: 0 }}>
                {DISINT_CHART.bars.map((b) => (
                  <div key={b.label} className="flex flex-col items-center justify-end flex-1 h-full">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${frac(b.val) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      onMouseMove={onBarMove(b)}
                      className="w-full rounded-t cursor-pointer"
                      style={{ background: b.color, maxWidth: 48 }}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-1.5" style={{ height: 28 }}>
                {DISINT_CHART.bars.map((b) => (
                  <div key={b.label} className="flex-1 text-center leading-tight pt-1.5 text-[9.5px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>
                    {b.label.split('\n').map((line, li) => (<span key={li}>{line}{li === 0 && b.label.includes('\n') ? <br /> : null}</span>))}
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
    <SectionHeader title="Application deep-dive by industry" />
    <div className="flex flex-col gap-4">
      {APP_DETAILS.map((ind) => (
        <motion.div key={ind.title} {...fadeUp} className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <div className="px-4 py-3 flex items-center gap-2" style={{ background: ind.color.bg }}>
            <span className="text-lg">{ind.icon}</span>
            <h3 className="text-[14px]" style={{ fontFamily: "'Raleway', sans-serif", color: ind.color.tx, fontWeight: 700 }}>{ind.title}</h3>
          </div>
          <div className="divide-y" style={{ borderColor: 'rgba(201,168,76,0.12)' }}>
            {ind.items.map((item) => (
              <div key={item.name} className="px-4 py-3">
                <h4 className="text-[13px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{item.name}</h4>
                <p className="text-[12.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Comparison = () => (
  <section>
    <SectionHeader title="CCS vs. other tablet disintegrants" sub="Selecting the right disintegrant for your formulation" />
    <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
      <table className="w-full text-[13px]" style={{ borderCollapse: 'collapse', minWidth: 900 }}>
        <thead>
          <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
            {COMPARE.cols.map((h) => (
              <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {COMPARE.rows.map((row, i) => (
            <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
              {row.map((cell, j) => {
                const isObj = cell && typeof cell === 'object' && cell.t;
                const text = isObj ? cell.t : cell;
                const hl = isObj && cell.hl === 'good';
                return (
                  <td
                    key={j}
                    className="px-3.5 py-2.5"
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: j === 0 ? 'var(--brown-warm)' : 'var(--forest)',
                      fontWeight: j === 0 ? 500 : (hl ? 600 : 400),
                      background: hl ? 'rgba(76,175,80,0.08)' : 'transparent',
                      lineHeight: 1.5,
                    }}
                  >
                    {text}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {COMPARE.note && (
        <div className="px-3.5 py-2.5 text-[11.5px] leading-relaxed" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', borderTop: '1px solid rgba(201,168,76,0.12)', background: 'rgba(201,168,76,0.04)', fontStyle: 'italic' }}>
          {COMPARE.note}
        </div>
      )}
    </motion.div>
  </section>
);

const FormulationGuide = () => (
  <section>
    <SectionHeader title="Formulation guidelines" sub="Practical recommendations for using CCS in tablet and capsule manufacture" />
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
      {FORMULATION.map((c) => (
        <motion.div key={c.title} {...fadeUp} className="rounded-md border p-4" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <h3 style={{ ...S.richInfoTitle, marginBottom: '6px' }}>{c.title}</h3>
          <p style={S.richInfoBody}>{c.body}</p>
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

const FooterNote = () => (
  <div className="rounded-md border p-3.5 flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ background: 'rgba(201,168,76,0.1)', borderColor: 'rgba(201,168,76,0.35)', color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <div>{FOOTER_NOTE}</div>
  </div>
);

export default function CcsBody() {
  return (
    <div className="min-w-0 flex flex-col gap-12">
      <Highlights />
      <MechanismBox />
      <InfoCards />
      <SpecTable />
      <Regulatory />
      <Grades />
      <RefTable />
      <DisintChart />
      <AppDetails />
      <Seo />
      <Comparison />
      <FormulationGuide />
      <FooterNote />
    </div>
  );
}
