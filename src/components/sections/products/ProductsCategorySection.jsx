'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import S from '../../../styles/products';
import { CONTENT } from '../../../content';

const VALID_SLUGS = new Set(Object.keys(CONTENT.productDetails));

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');

const ProductCard = ({ product, index }) => {
  const fromLeft = index % 2 === 0;
  const slug = toSlug(product.name);
  const id = `product-${slug}`;
  const hasPage = VALID_SLUGS.has(slug);

  const card = (
    <motion.div
      id={id}
      initial={{ opacity: 0, x: fromLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-brand-bg border border-brand-gold/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer"
      style={{ scrollMarginTop: '96px' }}
    >
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--cream-dark)' }}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-base uppercase font-bold" style={S.productsCardName}>
          {product.name}
        </h3>
        <div className="w-10 h-px" style={{ background: 'linear-gradient(to right, var(--gold), transparent)' }} />
        <p className="text-sm leading-relaxed" style={S.productsCardDesc}>
          {product.desc}
        </p>

        {product.subProducts && product.subProducts.length > 0 && (
          <div className="pt-2 space-y-3">
            <p className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}>
              Available Grades
            </p>
            {product.subProducts.map((sub) => (
              <div key={sub.name} className="flex items-start gap-2">
                <ArrowRight className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--gold)' }} />
                <div>
                  <span style={S.productsSubName}>{sub.name}</span>
                  <p className="mt-0.5" style={S.productsSubDesc}>{sub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (hasPage) {
    return <Link href={`/products/${slug}`} className="block">{card}</Link>;
  }
  return card;
};

const ProductsCategorySection = ({ category }) => (
  <section data-component="ProductsCategorySection" id={category.id} className="py-16 md:py-20 scroll-mt-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <div className="gold-eyebrow mb-3">{category.title}</div>
      <h2
        className="text-2xl md:text-3xl uppercase mb-4"
        style={S.productsSectionH3}
      >
        {category.title}
      </h2>
      <div className="gold-divider" />
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {category.products.map((product, idx) => (
        <ProductCard key={product.name} product={product} index={idx} />
      ))}
    </div>
  </section>
);

export default ProductsCategorySection;
