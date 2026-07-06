'use client';

import React from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { REGULATORY } from '../../data/hpmcDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

export default function HpmcRegulatory() {
  return (
    <section className="mb-8">
      <div className="mb-6">
        <h2 style={S.richSectionHeader}>Standards & regulatory status</h2>
        <p style={S.richSectionSub}>HPMC holds the broadest regulatory approvals of all cellulose Ethers</p>
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
}
