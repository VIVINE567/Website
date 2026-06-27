'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import S from '../../styles/products';
import { VISC_CHART } from '../../data/hpmcSpecs';

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.1 }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } };

const SectionHeader = ({ title, sub }) => (
  <div className="mb-6 flex flex-col gap-1">
    <h2 style={S.richSectionHeader}>{title}</h2>
    {sub && <p style={S.richSectionSub}>{sub}</p>}
  </div>
);

export default function HpmcViscosityChart() {
  const plotRef = useRef(null);
  const [tip, setTip] = useState(null);
  const logMin = Math.log10(VISC_CHART.yMin);
  const logMax = Math.log10(VISC_CHART.yMax);
  const frac = (v) => (Math.log10(v) - logMin) / (logMax - logMin);
  const onBarMove = (b) => (e) => {
    const r = plotRef.current.getBoundingClientRect();
    const pt = e.touches && e.touches[0] ? e.touches[0] : e;
    setTip({ b, x: pt.clientX - r.left, y: pt.clientY - r.top });
  };
  const ticks = [5, 100, 1000, 10000, 100000, 200000];
  const fmt = (v) => (v >= 1000 ? `${v / 1000}k` : v);

  return (
    <section className="mb-8">
      <SectionHeader title={VISC_CHART.header} sub={VISC_CHART.headerSub} />
      <motion.div {...fadeUp} className="rounded-md border p-5 md:p-6" style={{ background: 'var(--cream)', borderColor: 'rgba(201,168,76,0.25)' }}>
        <div className="flex items-baseline justify-between flex-wrap gap-2 mb-5">
          <span className="text-[14px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', fontWeight: 600 }}>{VISC_CHART.title}</span>
          <span className="text-[11.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>{VISC_CHART.sub}</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          {VISC_CHART.bars.map((b) => (
            <span key={b.label} className="flex items-center gap-1.5 text-[10.5px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
              <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: b.color }} />{b.label.replace(/\n.*/, '')} mPa·s
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <div className="relative pb-9 text-[10px] shrink-0" style={{ height: 280, width: 34, fontFamily: "'Raleway', sans-serif", color: 'var(--brown-warm)' }}>
            {ticks.map((t) => (
              <span key={t} className="absolute right-0" style={{ bottom: 38 + frac(t) * 242, transform: 'translateY(50%)' }}>{fmt(t)}</span>
            ))}
          </div>
          <div className="flex-1 min-w-0">
            <div ref={plotRef} className="relative" style={{ height: 280 }} onMouseLeave={() => setTip(null)}>
              {tip && (
                <div
                  className="absolute z-20 pointer-events-none rounded-md px-3 py-2 whitespace-nowrap"
                  style={{ left: tip.x, top: tip.y, transform: 'translate(-50%, calc(-100% - 14px))', background: 'rgba(24,28,32,0.92)', boxShadow: '0 6px 20px rgba(0,0,0,0.25)' }}
                >
                  <div className="text-[12.5px] mb-1" style={{ fontFamily: "'Raleway', sans-serif", color: '#fff', fontWeight: 600 }}>{tip.b.label.replace(/\n.*/, '')} mPa·s</div>
                  <div className="flex items-center gap-1.5 text-[12px]" style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(255,255,255,0.92)' }}>
                    <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: tip.b.color }} />
                    {tip.b.label.split('\n')[1]}
                  </div>
                </div>
              )}
              {ticks.map((t) => (
                <div key={t} className="absolute left-0 right-0" style={{ bottom: 38 + frac(t) * 242, borderTop: '1px solid rgba(0,0,0,0.05)' }} />
              ))}
              <div className="absolute left-0 right-0 flex items-end justify-around gap-1 sm:gap-1.5" style={{ bottom: 38, top: 0 }}>
                {VISC_CHART.bars.map((b) => (
                  <div key={b.label} className="flex flex-col items-center justify-end flex-1 min-w-0 h-full">
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
              <div className="absolute left-0 right-0 bottom-0 flex items-start justify-around gap-1 sm:gap-1.5" style={{ height: 38 }}>
                {VISC_CHART.bars.map((b) => {
                  const [valLine, appLine] = b.label.split('\n');
                  return (
                    <div key={b.label} className="flex-1 min-w-0 text-center leading-tight pt-1.5 text-[8px] sm:text-[9.5px] font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)' }}>
                      <span className="break-words">{valLine}</span>
                      {appLine && (
                        <>
                          <br />
                          <span
                            className="block truncate sm:whitespace-normal sm:overflow-visible sm:text-clip sm:break-words cursor-pointer"
                            title={appLine}
                            onMouseEnter={onBarMove(b)}
                            onMouseMove={onBarMove(b)}
                            onTouchStart={onBarMove(b)}
                          >
                            {appLine}
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
