'use client';

import { motion } from 'motion/react';
import S from '../../styles/products';

const CERTS = [
  { code: 'ISO',   num: '9001',   label: 'Quality Management'      },
  { code: 'ISO',   num: '22000',  label: 'Food Safety Management'   },
  { code: 'FSSC',  num: '22000',  label: 'Food Safety System'       },
  { code: 'BRC',   num: 'Global', label: 'Food Safety Standard'     },
  { code: 'HALAL', num: '',       label: 'Halal Certified'          },
  { code: 'KOSHER',num: '',       label: 'Kosher Certified'         },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const CertificationsSection = () => (
  <section data-component="CertificationsSection"
    className="py-24 overflow-hidden"
    style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

      {/* Eyebrow */}
      <div className="gold-eyebrow mb-6" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
        Quality Assurance
      </div>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-4xl md:text-5xl mb-5"
        style={S.productsH2}
      >
        VIVINE&nbsp;
        <em style={{ color: 'var(--gold-dark)', fontStyle: 'italic', fontWeight: 400 }}>
          Certifications
        </em>
      </motion.h2>

      {/* Quote */}
      <motion.p
        {...fadeUp(0.08)}
        className="text-xl md:text-2xl mb-6"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: 'var(--brown-warm)',
          fontStyle: 'italic',
          fontWeight: 300,
        }}
      >
        "Food Safety is Everybody's Business."
      </motion.p>

      <div className="gold-divider mb-10" />

      {/* Body */}
      <motion.div
        {...fadeUp(0.12)}
        className="max-w-3xl mx-auto mb-16 space-y-4"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          color: 'var(--brown-warm)',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '24px',
          fontSize: '16px',
        }}
      >
        <p>
          All VIVINE products are produced in Halal &amp; Kosher certified plants, fully meeting
          international religious requirements. Our partner facilities hold ISO 9001, ISO 22000,
          BRC, and FSSC 22000 certifications.
        </p>
        <p>
          We continually strengthen our quality and credibility management systems to ensure
          compliance with global food safety standards set by the UNFAO, EU, and the USA.
        </p>
      </motion.div>

      {/* Certification badges — 5 always in one row */}
      <motion.div
        {...fadeUp(0.1)}
        className="grid grid-cols-5 max-w-4xl mx-auto"
        style={{ gap: 'clamp(4px, 2vw, 32px)' }}
      >
        {[
          { src: '/iso_9001.svg',   alt: 'ISO 9001 Certified',  origin: '45.07% 43%'    },
          { src: '/iso_22000.svg',  alt: 'ISO 22000 Certified', origin: '52.01% 47.84%' },
          { src: '/brg_cert.svg',   alt: 'BRC Certified Food',  origin: '54.06% 47.51%' },
          { src: '/halal_cert.svg', alt: 'Halal Certified',     origin: '48.31% 47.84%' },
          { src: '/kesher_cert.svg', alt: 'Kosher Certified',   origin: '50.40% 48.01%' },
        ].map((cert) => (
          <div
            key={cert.src}
            className="flex items-center justify-center"
            style={{ width: '100%', aspectRatio: '1 / 1' }}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-full h-full object-contain"
              style={{ transform: 'scale(3.0)', transformOrigin: cert.origin }}
            />
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default CertificationsSection;
