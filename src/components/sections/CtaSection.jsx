'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import S from '../../styles';
import { CONTENT } from '../../content';

const C = CONTENT.home.cta;

const CtaSection = () => (
  <section data-component="CtaSection" className="py-10 md:py-14 overflow-hidden luxury-section-radial" style={S.ctaSection}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* Left — quote + body */}
        <div className="md:max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={S.ctaH2}
            className="text-2xl md:text-[1.85rem] leading-snug mb-4"
          >
            {C.headingPre} <em style={S.ctaAccent}>{C.headingAccent}</em> {C.headingPost}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={S.ctaBody}
            className="text-base md:text-lg"
          >
            {C.body}
          </motion.p>
        </div>

        {/* Right — button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <Link
            href={C.buttonTo}
            className="btn-gold inline-block px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            style={S.ctaLink}
          >
            {C.button}
          </Link>
        </motion.div>

      </div>
    </div>
  </section>
);

export default CtaSection;
