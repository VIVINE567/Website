'use client';

import { motion } from 'motion/react';
import ProductsHeroSection from '../components/sections/products/ProductsHeroSection';
import ProductsIntroSection from '../components/sections/products/ProductsIntroSection';
import ProductsCategorySection from '../components/sections/products/ProductsCategorySection';
import { CONTENT } from '../content';
import S from '../styles/products';

const C = CONTENT.productsPage;

const Products = () => (
  <>
    <ProductsHeroSection />
    <ProductsIntroSection />

    {/* Quick Links Bar */}
    <section className="py-6 sticky top-[72px] z-dropdown" style={{ background: 'var(--cream)', borderBottom: '1px solid rgba(201,168,76,0.2)', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      <div className="max-w-6xl mx-auto px-4 overflow-x-auto scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 min-w-max justify-center"
        >
          {C.quickLinks.map((link) => {
            const targetId = link.toLowerCase().replace(/\s+/g, '-');
            const categoryId = C.categories.find((cat) =>
              cat.products.some((p) => p.name === link)
            )?.id || targetId;
            return (
              <button
                key={link}
                onClick={() => document.getElementById(categoryId)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-1.5 rounded-full border border-brand-gold/40 text-brand-primary hover:bg-brand-gold hover:text-brand-bg transition-all uppercase whitespace-nowrap"
                style={S.productsQuickLink}
              >
                {link}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* Category Detail Sections */}
    <div className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
      {C.categories.map((category) => (
        <ProductsCategorySection key={category.id} category={category} />
      ))}
    </div>

    {/* CTA */}
    <section className="luxury-section-dark py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={S.productsCtaGlow} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto px-4"
      >
        <div className="gold-eyebrow mb-4" style={S.productsCtaEyebrow}>Need Assistance?</div>
        <h2 className="text-2xl md:text-3xl mb-6" style={S.productsCtaH2}>
          Looking for a Specific <em style={S.productsCtaAccent}>Hydrocolloid Solution</em>?
        </h2>
        <p className="text-sm md:text-base mb-8" style={S.productsCtaBody}>
          Our technical experts are ready to help you find the perfect ingredient for your application.
          Contact us for free samples, technical support, and custom formulations.
        </p>
        <a href="/contact" className="btn-gold py-3 px-10 rounded-lg inline-block" style={S.productsCtaBtn}>
          Get Free Samples Today
        </a>
      </motion.div>
    </section>
  </>
);

export default Products;
