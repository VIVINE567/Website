'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import S from '../../../styles/modal';

const STATS = [
  { number: '21', suffix: '+', label: 'Hydrocolloids & Cellulose Ethers' },
  { number: '150', suffix: '+', label: 'Ingredient Grades Supplied' },
  { number: '11', suffix: '+', label: 'Years of Industry Experience' },
  { number: '5', suffix: '', label: 'Key Industries Served' },
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const [count, setCount] = useState(1);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!inView || isNaN(numericValue)) return;
    const end = numericValue;
    const duration = 750;
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

const ServicesIntroSection = () => {
  return (
    <section data-component="ServicesIntroSection" className="py-20 px-4 md:px-8 lg:px-16" style={S.modalBg}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <span
            className="text-xs uppercase tracking-widest font-semibold block"
            style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
          >
            Who We Are
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight"
            style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)' }}
          >
            Your Trusted Partner in Hydrocolloids, Cellulose & Alginates
          </h2>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="space-y-8"
        >
          <div className="space-y-4 text-base md:text-lg font-light leading-relaxed" style={{ color: 'var(--forest-mid)' }}>
            <p>
              At VIVINE International, our services are built around one goal: making complex ingredient sourcing seamless and reliable for our clients. Whether you are a global manufacturer or a specialty producer, our team of specialists brings decades of hands-on expertise in hydrocolloids, cellulose ethers and alginate chemistry.
            </p>
            <p>
              We combine direct manufacturer relationships with deep application knowledge, so every client receives not just a product — but a complete ingredient solution tailored to their formulation, regulatory and commercial needs.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(44,58,35,0.08)' }}
                className="p-6 rounded-xl border border-solid transition-all duration-300"
                style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.06)' }}
              >
                <div
                  className="text-4xl font-semibold mb-1"
                  style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)' }}
                >
                  <AnimatedNumber value={s.number} />
                  {s.suffix}
                </div>
                <div
                  className="text-xs uppercase tracking-wider font-semibold opacity-75"
                  style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;
