'use client';

import React from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { APP_TABLE } from '../../data/hpmcApps';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.05 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

export default function HpmcAppsTable() {
  return (
    <section className="mb-8">
      <SectionHeader title="Applications by industry segment" sub="Functional role, recommended grade, and dosage reference" />
      <motion.div {...fadeUp} className="rounded-md border overflow-x-auto" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <table className="w-full text-[12.5px]" style={{ borderCollapse: 'collapse', minWidth: 900 }}>
          <thead>
            <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
              {['Industry / Segment', 'Typical products', 'Recommended viscosity grade', 'Function of HPMC', 'Dosage (% w/w)'].map((h) => (
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
}
