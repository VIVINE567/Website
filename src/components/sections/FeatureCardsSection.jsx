'use client';

import { motion } from 'motion/react';
import { DollarSign, Truck, Headset, Settings } from 'lucide-react';
import S from '../../styles';
import { CONTENT } from '../../content';

const ICONS = [DollarSign, Truck, Headset, Settings];

const FeatureCardsSection = () => (
  <section data-component="FeatureCardsSection" className="py-20 overflow-hidden" style={S.coreSection}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {CONTENT.home.featureCards.map((card, id) => {
          const Icon = ICONS[id];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: id * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateY: 5, rotateX: -3 }}
              className="feature-card-animated group relative"
              style={S.featureCardPerspective}
            >
              <span className="corner-accent corner-tl" />
              <span className="corner-accent corner-br" />
              <span className="feature-card-number">0{id + 1}</span>

              <div className="feature-card-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={S.featureCardIcon}>
                <Icon className="w-8 h-8" style={S.featureCardIconColor} />
              </div>

              <h3 className="font-bold mb-4 feature-card-title" style={S.featureCardTitle}>{card.title}</h3>
              <div className="w-10 h-[1px] mx-auto mb-4" style={S.featureCardDivider} />
              <p className="leading-relaxed feature-card-desc" style={S.featureCardDesc}>{card.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeatureCardsSection;
