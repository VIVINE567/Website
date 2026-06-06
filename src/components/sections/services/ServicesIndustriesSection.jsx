'use client';

import { motion } from 'motion/react';
import S from '../../../styles/shared';

const INDUSTRIES = [
  {
    icon: '🥗',
    title: 'Food & Beverage',
    sub: 'Stabilizers · Thickeners · Gelling Agents · Emulsifiers',
  },
  {
    icon: '💊',
    title: 'Pharmaceutical',
    sub: 'Excipients · Binders · Controlled Release · Coatings',
  },
  {
    icon: '✨',
    title: 'Cosmetics & Personal Care',
    sub: 'Rheology Modifiers · Film Formers · Moisturizers',
  },
  {
    icon: '🏭',
    title: 'Industrial Applications',
    sub: 'Paper · Textiles · Adhesives · Construction Chemicals',
  },
  {
    icon: '🔬',
    title: 'Technical & Specialty',
    sub: 'R&D Support · Custom Blends · Application Testing',
  },
];

const ServicesIndustriesSection = () => {
  return (
    <section data-component="ServicesIndustriesSection" className="py-20 px-4 md:px-8" style={S.sectionDark}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest block mb-2"
            style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
          >
            Industries We Serve
          </span>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)' }}
          >
            Specialized Across Every{' '}
            <em style={S.accentItalic}>Sector</em>
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              whileHover={{ y: -5, borderColor: 'var(--gold)' }}
              className="border border-solid p-8 text-center rounded-xl relative overflow-hidden transition-all duration-300"
              style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(201,168,76,0.04)' }}
            >
              {/* Subtle back gradient */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, transparent 60%, rgba(44,58,35,0.03))',
                }}
              />
              <div className="text-4xl mb-4 select-none">{ind.icon}</div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)' }}
              >
                {ind.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
              >
                {ind.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIndustriesSection;
