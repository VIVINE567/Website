'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import S from '../../styles/hero';
import { CONTENT } from '../../content';
import QuoteModal from '../QuoteModal';

const C = CONTENT.home.hero;

const HeroSection = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
  <section data-component="HeroSection" className="relative hero-height flex items-center justify-center pt-28 md:pt-32 lg:pt-20 pb-12 md:pb-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        src={C.videoSrc}
        poster="https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142464/food_inds_a0cgm2.png"
        autoPlay loop muted playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-brand-primary/50" />
    </div>

    <div className="relative z-20 max-w-4xl mx-auto px-4 md:px-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col items-center"
      >
        <h1 style={S.heroH1} className="mb-8 max-w-4xl text-center">
          {C.headingPre} <em style={S.heroAccent}>{C.headingAccent}</em> {C.headingPost}
        </h1>

        <p style={S.heroBody} className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-center opacity-90">
          {C.body}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button onClick={() => setQuoteOpen(true)} className="btn-gold px-10 py-3 rounded-md active:scale-95" style={S.heroBtnGold}>
            {C.primaryCta}
          </button>
          <Link href="/products" style={S.heroBtnOutline} className="px-10 py-3 rounded-md font-medium uppercase hover:bg-white/10 transition-all active:scale-95">
            {C.secondaryCta}
          </Link>
        </div>
      </motion.div>
    </div>
    <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
  </section>
  );
};

export default HeroSection;
