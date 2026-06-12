'use client';

import { motion } from 'motion/react';
import S from '../../styles/products';
import { CONTENT } from '../../content';

const C = CONTENT.home.products;

const ProductCard = ({ product }) => {
  const imgBlock = (
    <motion.div
      initial={{ opacity: 0, x: product.imgRight ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden rounded-3xl shadow-xl${
        product.imgRight ? '' : ' order-2 lg:order-1'
      }${product.whiteBg ? ' group' : ''}`}
    >
      <img
        src={product.img}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-transform duration-700 scale-110${
          product.whiteBg ? ' group-hover:scale-120' : ' hover:scale-120'
        }`}
        alt={product.imgAlt}
        referrerPolicy="no-referrer"
      />
      {product.whiteBg && (
        <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none rounded-3xl" />
      )}
    </motion.div>
  );

  const textBlock = (
    <div className={`product-text-block rounded-3xl shadow-sm${!product.imgRight ? ' order-1 lg:order-2' : ''}`}>
      <h3 className="product-title">{product.title}</h3>
      <div className="product-separator" />
      <p className="product-desc">{product.desc}</p>
      <p className="product-tags">{product.tags}</p>
    </div>
  );

  return (
    <motion.div
      key={product.title}
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
    >
      {product.imgRight ? <>{textBlock}{imgBlock}</> : <>{imgBlock}{textBlock}</>}
    </motion.div>
  );
};

const ProductsSection = () => (
  <section data-component="ProductsSection" className="py-24 overflow-hidden" style={S.productsSection}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-center mb-20"
      >
        <div className="gold-eyebrow mb-6">{C.eyebrow}</div>
        <h2 style={S.productsH2} className="uppercase">
          VIVINE'S&nbsp;<em style={{ color: 'var(--gold-dark)', fontStyle: 'italic', fontWeight: 400 }}>Products</em>
        </h2>
        <div className="gold-divider mt-6" />
      </motion.div>

      <div className="product-grid-container">
        {C.items.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="btn-outline-primary">{C.cta}</button>
      </div>
    </div>
  </section>
);

export default ProductsSection;
