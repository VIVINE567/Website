'use client';

import { motion } from 'motion/react';
import S from '../../../styles';
import { CONTENT } from '../../../content';

const C = CONTENT.productsPage.hero;

const ProductsHeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28"
    style={S.productsHero}
  >
    <div className="absolute inset-0 bg-black/20 pointer-events-none" />

    <div className="absolute inset-0 pointer-events-none" style={{
      background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(201,168,76,0.15) 0%, transparent 70%)',
    }} />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 px-4"
    >
      <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4" style={S.productsHeroH1}>
        {C.heading}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto" style={S.productsHeroSub}>
        {C.subheading}
      </p>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-16">
        <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="var(--cream)" />
      </svg>
    </div>
  </section>
);

export default ProductsHeroSection;
