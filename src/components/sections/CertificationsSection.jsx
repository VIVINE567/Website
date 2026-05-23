'use client';

import { motion } from 'motion/react';
import S from '../../styles';

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
  <section
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
          fontFamily: "'Cormorant Garamond', serif",
          color: 'var(--brown-warm)',
          fontStyle: 'italic',
          fontWeight: 300,
          lineHeight: 1.85,
          fontSize: '1.1rem',
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

      {/* Certification badge grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {CERTS.map(({ code, num, label }, i) => (
          <motion.div
            key={`${code}-${num}`}
            {...fadeUp(i * 0.07)}
            className="flex flex-col items-center gap-3 py-6 px-3 rounded-2xl"
            style={{
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.22)',
            }}
          >
            {/* Badge circle */}
            <div
              className="w-16 h-16 rounded-full flex flex-col items-center justify-center gap-0.5"
              style={{
                background: 'rgba(201,168,76,0.14)',
                border: '1.5px solid rgba(201,168,76,0.4)',
              }}
            >
              <span style={{
                fontFamily: "'Cinzel', serif",
                color: 'var(--forest)',
                fontWeight: 700,
                fontSize: code.length > 4 ? '0.5rem' : '0.62rem',
                letterSpacing: '0.04em',
                lineHeight: 1.1,
              }}>
                {code}
              </span>
              {num && (
                <span style={{
                  fontFamily: "'Cinzel', serif",
                  color: 'var(--gold-dark)',
                  fontWeight: 700,
                  fontSize: '0.68rem',
                  lineHeight: 1,
                }}>
                  {num}
                </span>
              )}
            </div>

            {/* Label */}
            <span style={{
              fontFamily: "'Raleway', sans-serif",
              color: 'var(--forest)',
              fontSize: '0.62rem',
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
              lineHeight: 1.4,
            }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default CertificationsSection;
