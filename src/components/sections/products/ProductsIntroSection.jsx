'use client';

import { motion } from 'motion/react';
import { Leaf, Waves, FlaskConical, ChefHat } from 'lucide-react';
import S from '../../../styles/products';
import { CONTENT } from '../../../content';

const C = CONTENT.productsPage;
const iconMap = { Leaf, Waves, FlaskConical, ChefHat };

const ProductsIntroSection = () => (
  <section data-component="ProductsIntroSection" className="py-24" style={S.productsSection}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <div className="gold-eyebrow mb-4">Our Product Range</div>
        <h2 className="mb-6 uppercase" style={S.productsH2}>
          {C.intro.headingPre}{' '}
          <em style={S.productsIntroAccent}>{C.intro.headingAccent}</em>
        </h2>
        <div className="gold-divider mb-8" />
        <p className="max-w-3xl mx-auto text-base md:text-lg" style={S.productsIntroBody}>
          {C.intro.body}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {C.categoryOverview.map((cat, idx) => {
          const Icon = iconMap[cat.icon];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateY: 5, rotateX: -3 }}
              className="feature-card-animated text-center relative"
              style={S.featureCardPerspective}
            >
              <span className="corner-accent corner-tl" />
              <span className="corner-accent corner-br" />
              <div
                className="feature-card-icon w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={S.productsCatIcon}
              >
                <Icon className="w-6 h-6" style={{ color: 'var(--gold)' }} />
              </div>
              <h3 className="text-sm uppercase mb-3 font-bold feature-card-title" style={S.productsCatTitle}>
                {cat.title}
              </h3>
              <p className="text-sm feature-card-desc" style={S.productsCatItems}>
                {cat.items.join(' · ')}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProductsIntroSection;
