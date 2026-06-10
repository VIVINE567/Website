'use client';

import React from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { SUBST_TYPES, SUBST_NOTE, INFO_CARDS } from '../../data/hpmcContent';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

export default function HpmcSubstAndInfo() {
  return (
    <>
      <section className="mb-8">
        <SectionHeader title="HPMC substitution types — USP / Ph.Eur. designation system" sub="Methoxyl and hydroxypropyl content determine application suitability" />
        <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
          <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                {['USP Type', 'Methoxyl content (%)', 'Hydroxypropyl content (%)', 'Cloud point (°C)', 'Primary applications'].map((h) => (
                  <th key={h} className="px-3.5 py-2.5 text-left text-[11px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SUBST_TYPES.map((r) => (
                <tr key={r.type} style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                  <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600, whiteSpace: 'nowrap' }}>{r.type}</td>
                  <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.methoxyl}</td>
                  <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.hp}</td>
                  <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.cloud}</td>
                  <td className="px-3.5 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{r.apps}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-3.5 py-2 text-[11px] italic" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>{SUBST_NOTE}</div>
        </motion.div>
      </section>

      <section className="mb-8">
        <SectionHeader title="Chemical identity & key functional properties" />
        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {INFO_CARDS.map((c) => (
            <motion.div key={c.title} {...fadeUp}  className="rounded-md border p-4" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
              <h3 style={{ ...S.richInfoTitle, marginBottom: '6px' }}>{c.title}</h3>
              <p style={S.richInfoBody}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
