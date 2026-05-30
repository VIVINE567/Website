'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

const STATS = [
  { number: '40', suffix: '+', label: 'Countries Served' },
  { number: '200', suffix: '+', label: 'Product Grades' },
  { number: '15', suffix: '+', label: 'Industries' },
  { number: 'ISO', suffix: '', label: 'Certified Supplier' },
  { number: '24', suffix: 'hr', label: 'Technical Response' },
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const [count, setCount] = useState(1);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!inView || isNaN(numericValue)) return;
    const end = numericValue;
    const duration = 700;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * (end - 1) + 1));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, numericValue]);

  if (isNaN(numericValue)) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{count}</span>;
};

const ApplicationsStatsBar = () => (
  <div
    role="region"
    aria-label="Company highlights"
    style={{ background: 'var(--forest-mid)', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}
    className="py-5 px-4"
  >
    <div className="max-w-5xl mx-auto flex justify-center flex-wrap gap-8 md:gap-16">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <span
            className="block text-2xl font-black leading-none mb-0.5"
            style={{ fontFamily: "'Oswald', sans-serif", color: '#fff' }}
          >
            <AnimatedNumber value={s.number} />
            {s.suffix && (
              <span style={{ color: 'var(--gold)', fontSize: '1rem', fontWeight: 500 }}>{s.suffix}</span>
            )}
          </span>
          <span
            className="text-[10px] uppercase tracking-widest font-medium"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Raleway', sans-serif" }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ApplicationsStatsBar;
