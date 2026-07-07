'use client';

import { motion } from 'motion/react';
import S from '../../styles/products';

const CERTS = [
  { code: 'ISO', num: '9001', label: 'Quality Management' },
  { code: 'ISO', num: '22000', label: 'Food Safety Management' },
  { code: 'FSSC', num: '22000', label: 'Food Safety System' },
  { code: 'BRC', num: 'Global', label: 'Food Safety Standard' },
  { code: 'HALAL', num: '', label: 'Halal Certified' },
  { code: 'KOSHER', num: '', label: 'Kosher Certified' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.15 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const CertificationsSection = () => (
  <section
    data-component="CertificationsSection"
    className="py-24 overflow-hidden"
    style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
      <div className="gold-eyebrow mb-6" style={{ color: 'var(--gold)', justifyContent: 'center' }}>
        Quality Assurance
      </div>

      <motion.h2
        {...fadeUp(0)}
        className="text-4xl md:text-5xl mb-5 break-words"
        style={S.productsH2}
      >
        VIVINE&nbsp;
        <em style={{ color: 'var(--gold-dark)', fontStyle: 'italic', fontWeight: 400 }}>
          Certifications
        </em>
      </motion.h2>

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

      <motion.div
        {...fadeUp(0.1)}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-5xl mx-auto"
        style={{ gap: 'clamp(10px, 2vw, 20px)' }}
      >
        {CERTS.map((cert) => (
          <div
            key={`${cert.code}-${cert.num || cert.label}`}
            className="relative overflow-hidden flex flex-col items-center justify-center rounded-xl"
            style={{
              minHeight: 132,
              padding: '18px 10px',
              background: 'rgba(255,255,255,0.38)',
              border: '1px solid rgba(201,168,76,0.32)',
              boxShadow: '0 12px 28px rgba(44,58,35,0.08)',
            }}
          >
            <span
              className="uppercase"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: cert.num ? 'clamp(1.35rem, 2.5vw, 2rem)' : 'clamp(1.05rem, 2vw, 1.35rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: 'var(--forest)',
                lineHeight: 1,
              }}
            >
              {cert.code}
            </span>
            {cert.num && (
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  color: 'var(--gold-dark)',
                  marginTop: 8,
                }}
              >
                {cert.num}
              </span>
            )}
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--brown-warm)',
                marginTop: 12,
                lineHeight: 1.45,
              }}
            >
              {cert.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
