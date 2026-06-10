'use client';

import React from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { APP_DETAILS } from '../../data/hpmcDetails';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.05 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

export default function HpmcAppDetails() {
  return (
    <section className="mb-8">
      <div className="mb-6">
        <h2 style={S.richSectionHeader}>Application details — functional role by industry</h2>
      </div>
      <div className="flex flex-col gap-5">
        {APP_DETAILS.map((ind) => (
          <motion.div key={ind.title} {...fadeUp}  className="rounded-md border overflow-hidden" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
            <div className="px-4 py-2.5 text-sm" style={{ background: ind.color.bg, color: ind.color.tx, fontFamily: "'Raleway', sans-serif", fontWeight: 700 }}>
              <span className="mr-2">{ind.icon}</span>{ind.title}
            </div>
            <div className="p-4 flex flex-col gap-3.5">
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
}
