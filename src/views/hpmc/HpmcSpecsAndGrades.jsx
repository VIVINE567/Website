'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { SPEC_TABLE, GRADES } from '../../data/hpmcSpecs';
import { IC } from '../../data/hpmcContent';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

const FILTERS = [
  { id: 'all', label: 'All grades' },
  { id: 'const', label: 'Construction' },
  { id: 'pharma', label: 'Pharmaceuticals' },
  { id: 'food', label: 'Food' },
  { id: 'paint', label: 'Paints' },
  { id: 'care', label: 'Personal Care' },
  { id: 'ceram', label: 'Ceramics' },
];

export default function HpmcSpecsAndGrades() {
  const [filter, setFilter] = useState('all');

  return (
    <>
      {/* SPEC TABLE */}
      <section className="mb-8">
        <SectionHeader title="Standard technical specification" sub="Reference values — actual TDS varies by substitution type and viscosity grade" />
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
                    <td className="px-4 py-2.5 w-1/3" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 500 }}>{row[0]}</td>
                    <td className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>{row[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* GRADE FILTER + CARDS */}
      <section className="mb-8">
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

        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
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
                  <div className="text-[10px] uppercase mb-1.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 700, letterSpacing: '0.06em' }}>Typical applications</div>
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
}
