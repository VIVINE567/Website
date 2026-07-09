'use client';

import { motion } from 'motion/react';
import S from '../../styles/products';

const CERTS = [
  {
    label: 'ISO 9001 Certified',
    img: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783580104/certificates/iso-9001-certified.png',
  },
  {
    label: 'ISO 22000 Certified',
    img: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783580102/certificates/iso-22000-certified.png',
  },
  {
    label: 'BRC Certified Food',
    img: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783580097/certificates/halal-certified.png',
  },
  {
    label: 'Halal Certified',
    img: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783580101/certificates/brc-certified-food.png',
  },
  {
    label: 'Kosher Certified',
    img: 'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783580099/certificates/kosher-certified.png',
  },
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
        className="grid grid-cols-5 items-center justify-items-center max-w-4xl mx-auto"
        style={{ gap: 'clamp(8px, 2vw, 28px)' }}
      >
        {CERTS.map((cert) => (
          <div
            key={cert.label}
            className="relative overflow-hidden flex items-center justify-center"
            style={{
              width: '100%',
              height: 'clamp(42px, 10vw, 88px)',
            }}
          >
            <img
              src={cert.img}
              alt={cert.label}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center center' }}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
