'use client';

import { motion } from 'motion/react';

const CHECKS = [
  {
    strong: 'Comprehensive Product Portfolio',
    rest: ' – Hydrocolloids, cellulose Ethers, and specialty ingredients available under one roof.',
  },
  {
    strong: 'Global Manufacturing Partnerships',
    rest: ' – Direct relationships with trusted international manufacturers, ensuring consistent quality and reliable supply.',
  },
  {
    strong: 'Tailored Ingredient Solutions',
    rest: ' – Supporting customers with customized grades and application-specific recommendations to meet technical requirements.',
  },
  {
    strong: 'Assured Quality Standards',
    rest: ' – Products sourced from certified manufacturing facilities with technical and quality documentation available upon request.',
  },
  {
    strong: 'Flexible Commercial Support',
    rest: ' – Competitive pricing, adaptable order quantities, and dependable international logistics solutions.',
  },
  {
    strong: 'Responsive Technical Assistance',
    rest: ' – Expert support for product selection, application guidance, and formulation optimization.',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.12 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const CheckItem = ({ strong, rest }) => (
  <div className="flex items-start gap-3">
    <div
      className="shrink-0 w-[22px] h-[22px] rounded-full flex items-center justify-center mt-0.5"
      style={{ background: 'rgba(201,168,76,0.15)' }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", color: 'var(--brown-warm)', fontWeight: 300 }}>
      <strong style={{ color: 'var(--forest)', fontWeight: 500 }}>{strong}</strong>
      {rest}
    </p>
  </div>
);

const AboutIntroSection = () => (
  <section data-component="AboutIntroSection"
    id="about-intro"
    className="py-20 md:py-28 overflow-hidden"
    style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

      {/* Left — Image block */}
      <motion.div 
        {...fadeUp(0)} 
        whileHover="hover"
        className="relative hidden lg:block cursor-default"
      >
        <motion.div
          variants={{
            hover: { scale: 1.025, y: -4, boxShadow: '0 20px 40px rgba(44,58,35,0.12)' }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gold/10"
        >
          <img
            src="https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142458/aboutSection_f9b1hp.jpg"
            alt="VIVINE International ingredients"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Badge */}
        <motion.div
          variants={{
            hover: { x: 6, y: 6, scale: 1.03, boxShadow: '0 12px 28px rgba(0,0,0,0.12)' }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="absolute -bottom-5 -right-5 rounded-xl px-6 py-5 border-4 shadow-md"
          style={{ background: 'var(--forest)', borderColor: 'var(--cream)' }}
        >
          <span
            className="block text-3xl font-black text-white leading-none mb-1"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            11<span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>+</span>
          </span>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Open Sans', sans-serif" }}>
            Years of expertise in<br />functional ingredients
          </p>
        </motion.div>
      </motion.div>

      {/* Right — Text */}
      <motion.div {...fadeUp(0.1)} className="pb-5">
        <span
          className="block text-[10px] font-medium tracking-[0.18em] uppercase mb-2"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          Who We Are
        </span>
        <h2
          className="text-3xl md:text-4xl font-black uppercase leading-tight mb-5"
          style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--forest)', letterSpacing: '-0.01em' }}
        >
          Get to Know{' '}
          <em className="not-italic" style={{ color: 'var(--gold-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
            VIVINE International
          </em>
        </h2>
        <p className="text-sm leading-loose mb-2 max-w-lg" style={{ fontFamily: "'Open Sans', sans-serif", color: 'var(--brown-warm)', fontWeight: 300 }}>
          VIVINE International is a trusted global supplier of hydrocolloids, alginates, cellulose Ethers, and specialty ingredients, serving manufacturers and processors across diverse industries. We bridge the gap between leading raw material producers and businesses that rely on high-quality, specification-driven functional ingredients.
        </p>
        <p className="text-sm leading-loose mb-8 max-w-lg" style={{ fontFamily: "'Open Sans', sans-serif", color: 'var(--brown-warm)', fontWeight: 300 }}>
          Our comprehensive product portfolio includes{' '}
          <strong style={{ color: 'var(--forest)', fontWeight: 500 }}>
            alginates, carrageenan, propylene glycol alginate (PGA), locust bean gum, CMC, HPMC, MHEC, HEC, xanthan gum, PAC, guar gum, pectin, starch derivatives, and a wide range of specialty ingredients
          </strong>
          , all sourced through a trusted global network of leading manufacturers and suppliers.
        </p>

        <h3
          className="text-base font-semibold mb-4"
          style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)' }}
        >
          Why Choose VIVINE International?
        </h3>

        <div className="flex flex-col gap-4">
          {CHECKS.map((c, i) => (
            <motion.div key={c.strong} {...fadeUp(0.1 + i * 0.08)}>
              <CheckItem {...c} />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default AboutIntroSection;
