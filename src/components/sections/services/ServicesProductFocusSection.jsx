'use client';

import { motion } from 'motion/react';
import S from '../../../styles/modal';

const PRODUCTS = [
  {
    badge: 'Hydrocolloids',
    title: 'Hydrocolloid Systems',
    desc: 'A comprehensive range of hydrocolloids providing viscosity, gelation, emulsification and stabilization across food, pharmaceutical and cosmetic applications.',
    tags: ['Xanthan Gum', 'Guar Gum', 'Carrageenan', 'Locust Bean Gum', 'Pectin','Gellan Gum','Konjac Gum'],
  },
  {
    badge: 'Cellulose',
    title: 'Cellulose Derivatives',
    desc: 'High-performance cellulose ethers and microcrystalline cellulose grades for controlled release, binding, coating and rheology modification in diverse formulations.',
    tags: ['HPMC','MHEC','HEC', 'Sodium CMC', 'Calcium CMC',  'Croscarmellose Sodium','PAC','MCC'],
  },
  {
    badge: 'Alginates',
    title: 'Alginate Solutions',
    desc: 'Marine-sourced alginates offering exceptional gelling, thickening and film-forming properties for food, pharmaceutical, textile printing, cosmetic and industrial applications.',
    tags: ['Sodium Alginate', 'Calcium Alginate', 'Propylene Glycol Alginate', 'Alginic Acid'],
  },
];

const ServicesProductFocusSection = () => {
  return (
    <section data-component="ServicesProductFocusSection" className="py-20 px-4 md:px-8" style={S.modalBg}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span
            className="text-[10px] font-semibold uppercase tracking-widest block mb-2"
            style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
          >
            Our Ingredient Expertise
          </span>
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)' }}
          >
            Core Product Categories
          </h2>
          <div className="gold-divider mt-6" />
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, i) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(44,58,35,0.12)' }}
              className="rounded-xl p-8 transition-all duration-300 shadow-sm border-t-[3px] flex flex-col justify-between"
              style={{
                borderTopColor: 'var(--gold)',
                borderColor: 'rgba(201,168,76,0.2)',
                borderWidth: '1px',
                background: 'rgba(201,168,76,0.04)',
              }}
            >
              <div>
                {/* Category Badge */}
                <span
                  className="inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4"
                  style={{
                    background: 'rgba(201,168,76,0.12)',
                    color: 'var(--gold-dark)',
                    fontFamily: "'Raleway', sans-serif",
                    border: '1px solid rgba(201,168,76,0.25)',
                  }}
                >
                  {prod.badge}
                </span>

                {/* Card Title */}
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)' }}
                >
                  {prod.title}
                </h3>

                {/* Card Description */}
                <p
                  className="text-sm font-light leading-relaxed mb-6"
                  style={{ color: 'var(--forest-mid)', fontFamily: "'Raleway', sans-serif" }}
                >
                  {prod.desc}
                </p>
              </div>

              {/* Tag Chips list */}
              <div className="flex flex-wrap gap-2">
                {prod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 rounded-full border border-solid"
                    style={{
                      borderColor: 'rgba(201,168,76,0.3)',
                      color: 'var(--forest)',
                      
                      background: 'rgba(201,168,76,0.06)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProductFocusSection;
