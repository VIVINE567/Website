'use client';

import { motion } from 'motion/react';
import S from '../../../styles/shared';

const ADVANTAGES = [
  {
    title: 'Direct Manufacturer Access',
    desc: 'We source directly from verified, certified manufacturers ensuring authenticity, quality documentation and the best possible pricing without unnecessary intermediaries.',
  },
  {
    title: 'Multi-Industry Expertise',
    desc: 'Our team understands the distinct regulatory, functional and application requirements of food, pharma, cosmetics and industrial sectors simultaneously.',
  },
  {
    title: 'Regulatory Compliance Support',
    desc: 'We provide all necessary quality and compliance documentation — CoA, MSDS, Halal, Kosher, organic certifications — for smooth import clearance globally.',
  },
  {
    title: 'End-to-End Service',
    desc: 'From the first inquiry to post-delivery support, every touchpoint is managed by a dedicated VIVINE account manager who knows your business inside out.',
  },
  {
    title: 'Sustainable Sourcing',
    desc: 'We prioritize suppliers with responsible, traceable sourcing practices to meet growing ESG and clean-label demands across global markets.',
  },
];

const ServicesWhySection = () => {
  return (
    <section data-component="ServicesWhySection" className="py-24 px-4 md:px-8 overflow-hidden" style={S.sectionDark}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column: Global logistics image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center items-center max-w-[480px] mx-auto w-full"
        >
          <img
            src="/services-why-global.jpg"
            alt="Global sourcing and logistics network"
            className="w-full h-auto rounded-2xl shadow-xl"
            style={{ border: '1px solid rgba(201,168,76,0.15)' }}
          />
        </motion.div>

        {/* Right column: Why content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div>
            <span
              className="text-[10px] font-semibold uppercase tracking-widest block mb-2"
              style={{ color: 'var(--forest-light)', fontFamily: "'Raleway', sans-serif" }}
            >
              Why Choose Us
            </span>
            <h2
              className="text-3xl md:text-4xl font-light"
              style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold)' }}
            >
              The VIVINE Advantage
            </h2>
          </div>

          <ul className="divide-y divide-solid" style={{ divideColor: 'rgba(90,122,96,0.12)' }}>
            {ADVANTAGES.map((adv, i) => (
              <motion.li
                key={adv.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.2, delay: i * 0.04 }}
                className="py-4 flex gap-4 items-start"
              >
                {/* Gold bullet */}
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{background: 'var(--gold)'}}
                />
                <p
                  className="text-sm font-light leading-relaxed text-slate-800"
                  style={{ fontFamily: "'Raleway', sans-serif" }}
                >
                  <strong style={{ color: 'var(--forest)', fontWeight: 600 }}>
                    {adv.title}
                  </strong>{' '}
                  — {adv.desc}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesWhySection;
