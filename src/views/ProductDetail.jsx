'use client';

import React, { useState, useLayoutEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Sprout } from 'lucide-react';
import S from '../styles/products';
import { CONTENT } from '../content';
import DefaultPage from '../components/DefaultPage';
import FormInput from '../components/FormInput';
import ProductDetailRich from './ProductDetailRich';
import ProductDetailHpmc from './ProductDetailHpmc';
import ProductDetailHec from './ProductDetailHec';
import ProductDetailMhec from './ProductDetailMhec';
import ProductDetailCarrageenan from './ProductDetailCarrageenan';
import ProductDetailPga from './ProductDetailPga';
import ProductDetailPectin from './ProductDetailPectin';
import ProductDetailGellan from './ProductDetailGellan';
import ProductDetailCmc from './ProductDetailCmc';
import ProductDetailPac from './ProductDetailPac';
import ProductDetailKonjac from './ProductDetailKonjac';
import ProductDetailXanthan from './ProductDetailXanthan';
import ProductDetailGuar from './ProductDetailGuar';
import ProductDetailCcs from './ProductDetailCcs';
import QuoteModal from '../components/QuoteModal';

const ALL_PRODUCTS = Object.entries(CONTENT.productDetails).map(([slug, p]) => ({
  slug,
  name: p.name,
}));

const ImageCarousel = ({ images, name }) => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length);
  const next = () => setIdx(i => (i + 1) % images.length);
  return (
    <div className="relative rounded-xl overflow-hidden" style={{ background: "#f5f0e6", aspectRatio: "1/1" }}>
      <img
        src={images[idx]}
        alt={`${name} ${idx + 1}`}
        className="w-full h-full object-cover"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: "rgba(255,255,255,0.85)", color: "var(--forest)" }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{ background: "rgba(255,255,255,0.85)", color: "var(--forest)" }}
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === idx ? "var(--gold)" : "rgba(255,255,255,0.6)" }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AnimatedDoubleUnderline = () => (
  <svg
    style={{ position: 'absolute', bottom: '-14px', left: 0, width: '100%', height: '14px', overflow: 'visible', pointerEvents: 'none' }}
    viewBox="0 0 100 14"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M 1,2 C 20,0.6 50,3.4 80,1.8 C 90,1.4 96,2.2 99,2"
      stroke="var(--gold)"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
      animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.6, times: [0, 0.4, 0.72, 1], repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.path
      d="M 1,9 C 25,10.4 55,7.6 78,9.2 C 88,9.8 95,8.8 99,9"
      stroke="var(--gold)"
      strokeWidth="1.6"
      strokeLinecap="round"
      fill="none"
      animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.6, times: [0, 0.4, 0.72, 1], repeat: Infinity, ease: 'easeInOut', delay: 0.22 }}
    />
  </svg>
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const Sidebar = ({ currentSlug }) => (
  <aside className="hidden lg:block relative">
    <div className="sticky top-[100px]">
      <h3
        className="text-xs uppercase mb-5 tracking-[0.18em]"
        style={{ fontFamily: "'Raleway', sans-serif", color: "var(--gold-dark)", fontWeight: 700 }}
      >
        Products
      </h3>
      <nav className="flex flex-col gap-0.5" style={S.sidebarNav}>
        {ALL_PRODUCTS.map(({ slug, name }) => {
          const active = slug === currentSlug;
          return (
            <Link
              key={slug}
              href={`/products/${slug}`}
              className="block px-4 py-2.5 rounded-lg transition-all"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "0.82rem",
                letterSpacing: "0.04em",
                fontWeight: active ? 700 : 500,
                color: active ? "var(--forest)" : "var(--brown-warm)",
                background: active ? "rgba(201,168,76,0.1)" : "transparent",
                borderLeft: active ? "3px solid var(--gold)" : "3px solid transparent",
              }}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
  </aside>
);

const Ci = CONTENT.inquiry;

const ProductDetail = () => {
  const { slug } = useParams();
  const product = CONTENT.productDetails[slug];

  useLayoutEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!product) return <DefaultPage />;

  // Branch on layout — rich layout for cellulose-derivative products.
  // These return BEFORE the rest of this component's hooks/handlers run.
  if (product.layout === 'hpmc') {
    return <ProductDetailHpmc slug={slug} />;
  }
  if (product.layout === 'hec') {
    return <ProductDetailHec slug={slug} product={product} />;
  }
  if (product.layout === 'mhec') {
    return <ProductDetailMhec slug={slug} />;
  }
  if (product.layout === 'carrageenan') {
    return <ProductDetailCarrageenan slug={slug} />;
  }
  if (product.layout === 'pga') {
    return <ProductDetailPga slug={slug} />;
  }
  if (product.layout === 'pectin') {
    return <ProductDetailPectin slug={slug} />;
  }
  if (product.layout === 'gellan') {
    return <ProductDetailGellan slug={slug} />;
  }
  if (product.layout === 'cmc') {
    return <ProductDetailCmc slug={slug} />;
  }
  if (product.layout === 'pac') {
    return <ProductDetailPac slug={slug} />;
  }
  if (product.layout === 'konjac') {
    return <ProductDetailKonjac slug={slug} />;
  }
  if (product.layout === 'xanthan') {
    return <ProductDetailXanthan slug={slug} />;
  }
  if (product.layout === 'guar') {
    return <ProductDetailGuar slug={slug} />;
  }
  if (product.layout === 'ccs') {
    return <ProductDetailCcs slug={slug} />;
  }
  if (product.layout === 'rich') {
    return <ProductDetailRich slug={slug} product={product} />;
  }

  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleInquiry = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form['inquiry-name'].value,
      email: form['inquiry-email'].value,
      product: product.name,
      request: form['inquiry-request'].value,
    };
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status === 'error') throw new Error(result.message);
      btn.textContent = 'Submitted ✓';
      form.reset();
      setTimeout(() => { btn.textContent = 'Submit'; btn.disabled = false; }, 3000);
    } catch (err) {
      btn.textContent = 'Error – Try Again';
      btn.disabled = false;
      console.error('Form submission error:', err);
    }
  };

  if (!product) return <DefaultPage />;

  return (
    <div className="pt-[72px]">

      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28"
        style={S.productDetailHero}
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
          <div className="flex items-center justify-center gap-2 mb-5 uppercase" style={S.productDetailBreadcrumb}>
            <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
            <ChevronRight className="w-3 h-3" style={{ opacity: 0.5 }} />
            <span>{product.name}</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl" style={S.productDetailHeroH1}>
            {product.name}
          </h1>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z" fill="var(--cream)" />
          </svg>
        </div>
      </section>

      {/* Content + Sidebar layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 py-20">

          {/* Left: Sidebar */}
          <Sidebar currentSlug={slug} />

          {/* Right: All detail sections */}
          <div className="min-w-0">

            {/* What is [Product] */}
            <section>
              <motion.div {...fadeUp(0)} className="mb-10">
                <div className="flex items-start gap-3 mb-6">

                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)", marginTop: "0.2rem" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                  What is <em style={{ color: "var(--gold-dark)", fontStyle: "normal" }}>{product.name}</em>
                  </h2>
                
                </div>
                <div className="w-full mb-8" style={{ height: 1, background: "rgba(201,168,76,0.25)" }} />
                <div className="space-y-5 max-w-3xl">
                  {product.description.map((para, i) => (
                    <p key={i} style={S.productDetailDescBody}>{para}</p>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="mb-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />


            {/* Product Overview — Carousel + Info Table */}
            <section className="mb-16">
              <motion.div {...fadeUp(0)} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: image carousel */}
                <ImageCarousel images={product.images} name={product.name} />

                {/* Right: name + divider + info table */}
                <div>
                  <h3
                    className="text-2xl md:text-3xl mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700 }}
                  >
                    {product.name}
                  </h3>
                  <div className="mb-6" style={{ height: 1, background: "rgba(201,168,76,0.35)" }} />
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                    <thead>
                      <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                        <th
                          className="px-4 py-3 text-left"
                          style={{ fontFamily: "'Raleway', sans-serif", color: "var(--brown-warm)", fontWeight: 600, letterSpacing: "0.04em" }}
                        >
                          Category
                        </th>
                        <th
                          className="px-4 py-3 text-left"
                          style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontWeight: 600, letterSpacing: "0.04em" }}
                        >
                          {product.category}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["E Number", product.eNo],
                        ["CAS No.", product.casNo],
                        ["H.S. Code", product.hsCode],
                        ["Origin", product.origin],
                        ["MOQ", product.moq],
                        ["Packaging", product.packaging],
                        ["Payment Term", product.paymentTerm],
                      ].map(([label, value], i) => (
                        <tr
                          key={label}
                          style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", background: i % 2 === 0 ? "transparent" : "rgba(201,168,76,0.04)" }}
                        >
                          <td className="px-4 py-3" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--brown-warm)", fontWeight: 500 }}>
                            {label}
                          </td>
                          <td className="px-4 py-3" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontWeight: 600 }}>
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex flex-wrap gap-3 mt-10">
                    <button onClick={() => setQuoteOpen(true)} className="btn-gold px-7 py-2.5 rounded-md text-sm" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.12em" }}>
                      Get a Quote
                    </button>
                    <button
                      className="px-7 py-2.5 rounded-md text-sm"
                      style={{
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "var(--forest)",
                        fontFamily: "'Raleway', sans-serif",
                        letterSpacing: "0.12em",
                        background: "transparent",
                      }}
                    >
                      Download TDS
                    </button>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* Raw Materials */}
            <section>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {product.rawMaterials.heading}
                  </h2>
                </div>
                <h3
                  className="text-lg mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold-dark)", fontWeight: 600, display: "inline-block", position: "relative" }}
                >
                  {product.rawMaterials.subheading}
                  <AnimatedDoubleUnderline />
                </h3>
                <div className="space-y-5 max-w-3xl mt-4">
                  {product.rawMaterials.body.map((para) => (
                    <p key={para} style={S.productDetailDescBody}>{para}</p>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* Production Process */}
            <section>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    {product.productionProcess.heading}
                  </h2>
                </div>
                <h3
                  className="text-lg mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--gold-dark)", fontWeight: 600, display: "inline-block", position: "relative" }}
                >
                  {product.productionProcess.subheading}
                  <AnimatedDoubleUnderline />
                </h3>
                <div className="space-y-5 max-w-3xl mt-4">
                  {product.productionProcess.body.map((para) => (
                    <p key={para} style={S.productDetailDescBody}>{para}</p>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* Product Range */}
            <section>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    Our {product.name} Range
                  </h2>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {product.subProducts.map((sub) => (
                    <li
                      key={sub.name}
                      className="px-4 py-2 rounded-md text-sm"
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 500,
                        color: "var(--forest)",
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* All-in-one Specification */}
            <section>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    All-in-one Specification
                  </h2>
                </div>

                {/* Sensory */}
                <p className="mb-2 font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontSize: "0.9rem" }}>
                  {product.allInOneSpec.sensory.label}
                </p>
                <p className="mb-8" style={S.productDetailDescBody}>{product.allInOneSpec.sensory.desc}</p>

                {/* Chemical & Physical */}
                <p className="mb-3 font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontSize: "0.9rem" }}>
                  {product.allInOneSpec.chemicalPhysical.label}
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: "400px" }}>
                    <thead>
                      <tr style={{ background: "rgba(201,168,76,0.12)" }}>
                        {product.allInOneSpec.chemicalPhysical.columns.map((col) => (
                          <th key={col} className="px-4 py-3 text-left" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.allInOneSpec.chemicalPhysical.rows.map((row, i) => (
                        <tr key={row[0]} style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", background: i % 2 === 0 ? "transparent" : "rgba(201,168,76,0.04)" }}>
                          {row.map((cell, j) => (
                            <td key={`${row[0]}-${j}`} className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: j === 0 ? "var(--brown-warm)" : "var(--forest)", fontWeight: j === 0 ? 500 : 600, fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Microbiological */}
                <p className="mb-3 font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontSize: "0.9rem" }}>
                  {product.allInOneSpec.microbiological.label}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: "400px" }}>
                    <thead>
                      <tr style={{ background: "rgba(201,168,76,0.12)" }}>
                        {product.allInOneSpec.microbiological.columns.map((col) => (
                          <th key={col} className="px-4 py-3 text-left" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.allInOneSpec.microbiological.rows.map((row, i) => (
                        <tr key={row[0]} style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", background: i % 2 === 0 ? "transparent" : "rgba(201,168,76,0.04)" }}>
                          {row.map((cell, j) => (
                            <td key={`${row[0]}-${j}`} className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: j === 0 ? "var(--brown-warm)" : "var(--forest)", fontWeight: j === 0 ? 500 : 600, fontSize: "0.82rem", whiteSpace: "nowrap" }}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* Functional Properties Table */}
            <section>
              <motion.div {...fadeUp(0)}>
                <div className="flex items-center gap-3 mb-6">
                  <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                  <h2
                    className="text-2xl md:text-3xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                  >
                    Functional Properties
                  </h2>
                </div>

                {/* Bullet list */}
                <ul className="flex flex-col gap-2 mb-8">
                  {product.functionalPropertiesTable.bullets.map((item) => (
                    <li key={item} className="flex items-center gap-2" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontSize: "0.9rem" }}>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--gold-dark)" }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Summary table */}
                <p className="mb-3 text-center font-semibold" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontSize: "0.9rem" }}>
                  {product.functionalPropertiesTable.title}
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" style={{ borderCollapse: "collapse", minWidth: "400px" }}>
                    <thead>
                      <tr style={{ background: "rgba(201,168,76,0.12)" }}>
                        {product.functionalPropertiesTable.columns.map((col) => (
                          <th key={col} className="px-4 py-3 text-left" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--forest)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.functionalPropertiesTable.sections.map((section) => (
                        <React.Fragment key={section.name}>
                          <tr style={{ background: "rgba(201,168,76,0.08)" }}>
                            <td colSpan={product.functionalPropertiesTable.columns.length} className="px-4 py-2" style={{ fontFamily: "'Raleway', sans-serif", color: "var(--brown-warm)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                              {section.name}
                            </td>
                          </tr>
                          {section.rows.map((row, i) => (
                            <tr key={row[0]} style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", background: i % 2 === 0 ? "transparent" : "rgba(201,168,76,0.04)" }}>
                              {row.map((cell, j) => (
                                <td key={`${row[0]}-${j}`} className="px-4 py-2.5" style={{ fontFamily: "'Raleway', sans-serif", color: j === 0 ? "var(--brown-warm)" : "var(--forest)", fontWeight: j === 0 ? 500 : 400, fontSize: "0.82rem" }}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            {/* Divider */}
            <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

            {/* Benefits & Applications */}
            {product.benefitsAndApplications && (
              <>
                <section>
                  <motion.div {...fadeUp(0)} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                      <h2
                        className="text-2xl md:text-3xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {product.benefitsAndApplications.benefits.heading}
                      </h2>
                    </div>
                    <div className="w-full mb-6" style={{ height: 1, background: "rgba(201,168,76,0.25)" }} />
                    <div className="space-y-4 max-w-3xl">
                      {product.benefitsAndApplications.benefits.body.map((para) => (
                        <p key={para} style={S.productDetailDescBody}>{para}</p>
                      ))}
                    </div>
                  </motion.div>
                </section>

                <div className="my-10" style={{ height: 1, background: "rgba(201,168,76,0.1)" }} />

                <section>
                  <motion.div {...fadeUp(0)} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                      <h2
                        className="text-2xl md:text-3xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                      >
                        {product.benefitsAndApplications.applicationOverview.heading}
                      </h2>
                    </div>
                    <div className="w-full mb-6" style={{ height: 1, background: "rgba(201,168,76,0.25)" }} />
                  </motion.div>

                  <motion.div {...fadeUp(0.05)} className="mb-8 max-w-3xl">
                    <h4
                      className="mb-3 text-base"
                      style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, fontSize: "1.1rem" }}
                    >
                      {product.benefitsAndApplications.applicationOverview.whatContains.heading}
                    </h4>
                    <p style={S.productDetailDescBody}>
                      {product.benefitsAndApplications.applicationOverview.whatContains.body}
                    </p>
                  </motion.div>

                  <motion.div {...fadeUp(0.1)} className="mb-8 max-w-3xl">
                    <h4
                      className="mb-4 text-base"
                      style={{ fontFamily: "'Raleway', sans-serif", color: "var(--brown-warm)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                    >
                      {product.benefitsAndApplications.applicationOverview.foodApplications.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {product.benefitsAndApplications.applicationOverview.foodApplications.items.map((item) => (
                        <li key={item} className="flex items-start gap-3" style={S.productDetailDescBody}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)", marginTop: "0.45rem" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {product.benefitsAndApplications.applicationOverview.nonFoodApplications && (
                    <motion.div {...fadeUp(0.15)} className="max-w-3xl">
                      <h4
                        className="mb-2 text-base"
                        style={{ fontFamily: "'Raleway', sans-serif", color: "var(--brown-warm)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" }}
                      >
                        {product.benefitsAndApplications.applicationOverview.nonFoodApplications.heading}
                      </h4>
                      {product.benefitsAndApplications.applicationOverview.nonFoodApplications.subheading && (
                        <h5
                          className="mb-4"
                          style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 600, fontSize: "1rem" }}
                        >
                          {product.benefitsAndApplications.applicationOverview.nonFoodApplications.subheading}
                        </h5>
                      )}
                      <ul className="space-y-2.5">
                        {product.benefitsAndApplications.applicationOverview.nonFoodApplications.items.map((item) => (
                          <li key={item} className="flex items-start gap-3" style={S.productDetailDescBody}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)", marginTop: "0.45rem" }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </section>
              </>
            )}

            {/* Product Inquiry */}
            {product.inquiryBlock && (
              <>
                <div className="my-16" style={{ height: 1, background: "rgba(201,168,76,0.15)" }} />

                <section>
                  <motion.div {...fadeUp(0)} className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Sprout className="w-7 h-7 shrink-0" style={{ color: "var(--gold-dark)" }} />
                      <h2
                        className="text-2xl md:text-3xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--forest)", fontWeight: 700, lineHeight: 1.2 }}
                      >
                        Contact <em style={{ color: "var(--gold-dark)", fontStyle: "normal" }}>Form</em>
                      </h2>
                    </div>
                    <div className="w-full mb-6" style={{ height: 1, background: "rgba(201,168,76,0.25)" }} />
                    <div className="space-y-3 max-w-2xl mb-8">
                      {product.inquiryBlock.intro.map((para) => (
                        <p key={para} style={S.productDetailDescBody}>{para}</p>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div {...fadeUp(0.05)} className="max-w-2xl">
                    <form className="inquiry-form" onSubmit={handleInquiry}>
                      <FormInput type="text" name="inquiry-name" placeholder="Name" required />
                      <FormInput type="email" name="inquiry-email" placeholder="Email" required />

                      {/* Products checkbox */}
                      <div className="form-field-floating filled mb-1">
                        <div
                          className="form-input"
                          style={{ paddingTop: "1.5rem", paddingBottom: "0.75rem", minHeight: "56px", display: "flex", flexDirection: "column", gap: "0.5rem" }}
                        >
                          <span
                            className="form-floating-label"
                            style={{ position: "static", transform: "none", fontSize: "0.75rem", marginBottom: "0.25rem", color: "var(--brown-warm)", fontWeight: 600, letterSpacing: "0.04em" }}
                          >
                            Products
                          </span>
                          <label htmlFor="inquiry-product" className="flex items-center gap-2 cursor-pointer" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.85rem", color: "var(--forest)", fontWeight: 500 }}>
                            <input
                              id="inquiry-product"
                              type="checkbox"
                              name="inquiry-product"
                              value={product.name}
                              defaultChecked
                              style={{ accentColor: "var(--gold-dark)", width: "15px", height: "15px" }}
                            />
                            {product.name}
                          </label>
                        </div>
                      </div>

                      <FormInput
                        as="textarea"
                        name="inquiry-request"
                        rows="4"
                        placeholder="Request"
                        style={{ paddingTop: "1.5rem" }}
                        required
                      />
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "0.75rem", color: "var(--brown-warm)", marginTop: "-0.5rem", marginBottom: "1rem", opacity: 0.8 }}>
                        For better quotations, kindly enter your inquiry details such as requirements, application field, order quantity, etc.
                      </p>

                      <div className="mt-4">
                        <button type="submit" className="btn-gold px-8 py-2.5 rounded-md" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: "0.12em", fontSize: "0.8rem" }}>
                          Submit
                        </button>
                      </div>
                    </form>
                  </motion.div>

                  <motion.div {...fadeUp(0.1)} className="mt-10">
                    <h4
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        color: "var(--gold-dark)",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                      }}
                    >
                      {product.inquiryBlock.closingHeading}
                    </h4>
                  </motion.div>
                </section>
              </>
            )}

          </div>
        </div>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
};

export default ProductDetail;
