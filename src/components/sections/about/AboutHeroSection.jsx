'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

const STATS = [
  { number: '4', suffix: '+', label: 'Countries served across Asia, Europe, Middle East & Americas' },
  { number: '200', suffix: '+', label: 'Product grades across hydrocolloids, alginates & cellulose' },
  { number: '15', suffix: '+', label: 'Industries served from food & beverage to construction' },
  { number: 'ISO', suffix: '', label: 'Certified supply chain with Halal, Kosher & FSSC 22000 compliant partners' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const [count, setCount] = useState(1);
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!inView) {
      setCount(1); // Reset count when out of view
      return;
    }
    if (isNaN(numericValue)) return;
    
    let start = 1;
    const end = numericValue;
    const duration = 1800; // 1.8s count up
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Premium cubic ease-out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, numericValue]);

  if (isNaN(numericValue)) {
    return <span>{value}</span>;
  }

  return <span ref={ref}>{count}</span>;
};

const StatCard = ({ number, suffix, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ 
      delay: index * 0.1, 
      duration: 0.7, 
      ease: [0.22, 1, 0.36, 1] 
    }}
    whileHover={{ 
      y: -6, 
      scale: 1.02, 
      borderColor: 'rgba(201,168,76,0.5)', 
      background: 'rgba(255,255,255,0.09)', 
      boxShadow: '0 15px 30px rgba(0,0,0,0.25)' 
    }}
    className="rounded-2xl p-5 md:p-6 cursor-default transition-colors duration-300"
    style={{
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(201,168,76,0.18)',
    }}
  >
    <span
      className="block text-3xl md:text-4xl font-black mb-1 leading-none"
      style={{ fontFamily: "'Oswald', sans-serif", color: '#fff' }}
    >
      <AnimatedNumber value={number} />
      {suffix && (
        <span style={{ color: 'var(--gold)', fontSize: '1.25rem', fontWeight: 500 }}>
          {suffix}
        </span>
      )}
    </span>
    <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Open Sans', sans-serif" }}>
      {label}
    </p>
  </motion.div>
);

const AboutHeroSection = () => (
  <section data-component="AboutHeroSection"
    className="relative overflow-hidden min-h-[540px] flex items-end pt-28 pb-16 md:pb-20"
    style={{ background: 'var(--forest)' }}
  >
    {/* Banner background image */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'url(/about-hero-banner.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.45,
    }} />

    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-black/30 pointer-events-none" />

    {/* Bottom gradient fade */}
    <div
      className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(44,58,35,0.6))' }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">

      {/* Left — text + CTAs */}
      <div>
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-5">
          <span className="inline-block w-7 h-px" style={{ background: 'var(--gold)', opacity: 0.7 }} />
          <span
            className="text-xs font-medium tracking-widest uppercase"
            style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
          >
            About VIVINE International
          </span>
        </motion.div>

        <motion.h1 {...fadeUp(0.08)} className="text-4xl md:text-5xl lg:text-[3.2rem] font-black uppercase leading-tight mb-5" style={{ fontFamily: "'Oswald', sans-serif", color: '#fff', letterSpacing: '-0.01em' }}>
          Your Trusted Partner in{' '}
          <em className="not-italic" style={{ color: 'var(--gold)' }}>
            Functional Ingredients
          </em>
        </motion.h1>

        <motion.p {...fadeUp(0.14)} className="text-base leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Cormorant Garamond', serif", color: 'rgba(255,255,255,0.65)', fontStyle: 'italic', fontWeight: 300 }}>
          VIVINE International is a global supplier of hydrocolloids, alginates and cellulose
          derivatives — connecting manufacturers in food, pharma, cosmetics and industry with
          precision-grade ingredients and dedicated technical support.
        </motion.p>

        <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3">
          <motion.a
            href="#about-intro"
            whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.45)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="btn-gold inline-block px-7 py-3 rounded-full text-sm font-medium"
            style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}
          >
            Discover Our Story
          </motion.a>
          <motion.a
            href="mailto:info@vivineinternational.com"
            whileHover={{ scale: 1.05, y: -2, borderColor: 'rgba(255,255,255,0.6)', color: '#fff', backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="inline-block px-7 py-3 rounded-full text-sm font-medium transition-all"
            style={{
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: '0.1em',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>

      {/* Right — stats grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {STATS.map((s, i) => (
          <StatCard key={s.number} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
