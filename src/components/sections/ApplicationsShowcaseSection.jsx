'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import S from '../../styles';

const APPS = [
  {
    id: 'food',
    title: 'Food & Confectionery',
    desc: 'Precision texturing for jellies, jams, biscuits, and beverages — clean-label solutions for premium results.',
    img: '/product-images/Apple-Pectin.jpg',
    tags: ['Jelly', 'Jam', 'Confectionery', 'Beverages'],
  },
  {
    id: 'dairy',
    title: 'Dairy & Ice Cream',
    desc: 'Reliable emulsion stability and consistent texture across dairy formulations at any scale.',
    img: '/product-images/Kappa-Carrageenan.jpg',
    tags: ['Ice Cream', 'Cheese', 'Yogurt', 'Milk Drinks'],
  },
  {
    id: 'pharma',
    title: 'Pharmaceutical',
    desc: 'Controlled-release delivery and effective thickening for pharmaceutical-grade formulations.',
    img: '/product-images/Konjac-Gum-18000.jpg',
    tags: ['Capsules', 'Tablets', 'Suspensions'],
  },
  {
    id: 'personal',
    title: 'Personal Care',
    desc: 'Viscosity control and long-term stability in cosmetic and personal care product lines.',
    img: '/product-images/Xanthan-Gum-200-Mesh.jpg',
    tags: ['Skin Care', 'Hair Care', 'Cosmetics'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const ApplicationsShowcaseSection = () => (
  <section data-component="ApplicationsShowcaseSection"
    className="py-24 overflow-hidden"
    style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

      {/* Eyebrow */}
      <div className="gold-eyebrow mb-6" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
        Industries We Serve
      </div>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-4xl md:text-5xl mb-5"
        style={S.productsH2}
      >
        VIVINE&nbsp;
        <em style={{ color: 'var(--gold-dark)', fontStyle: 'italic', fontWeight: 400 }}>
          Applications
        </em>
      </motion.h2>

      {/* Quote */}
      <motion.p
        {...fadeUp(0.08)}
        className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'var(--brown-warm)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        "Hydrocolloids are Used in Technical and Regulated Applications to Thicken and to Stabilize Formulations."
      </motion.p>

      <div className="gold-divider mb-8" />

      {/* Body */}
      <motion.p
        {...fadeUp(0.12)}
        className="max-w-2xl mx-auto mb-14"
        style={S.productsIntroBody}
      >
        Our sales &amp; technical support team can assist you in selecting the most effective
        hydrocolloid for your needs — across the Food, Biochemistry, Pharmaceutical, and
        Personal Care &amp; Allied Industries.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {APPS.map(({ id, title, desc, img, tags }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            className="rounded-2xl overflow-hidden text-left transition-shadow hover:shadow-xl"
            style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'var(--cream-dark)' }}
          >
            {/* Image + overlay */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.82)' }}
              />
              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(30,40,20,0.82) 0%, rgba(30,40,20,0.1) 60%, transparent 100%)' }}
              />
              {/* Tag pills */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(44,58,35,0.85)',
                      color: 'var(--gold)',
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: '0.6rem',
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(201,168,76,0.35)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card body */}
            <div className="p-5">
              <h3
                className="mb-2 text-base"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: 'var(--forest)',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: 'var(--brown-warm)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                }}
              >
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div {...fadeUp(0.3)} className="mt-14">
        <Link
          href="/products"
          className="btn-gold inline-block px-10 py-4 rounded-full hover:scale-105 active:scale-95 transition-all"
          style={{
            fontFamily: "'Cinzel', serif",
            letterSpacing: '0.15em',
            fontSize: '0.8rem',
          }}
        >
          Explore Applications
        </Link>
      </motion.div>

    </div>
  </section>
);

export default ApplicationsShowcaseSection;
