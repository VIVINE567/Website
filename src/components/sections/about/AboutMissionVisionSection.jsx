'use client';

import { motion } from 'motion/react';

const CARDS = [
  {
    icon: '🎯',
    tag: 'Our Mission',
    title: 'Enabling better products through better ingredients',
    body: 'Our mission is to be the most reliable and technically capable international supplier of hydrocolloids, alginates and cellulose ethers. We are committed to exceeding our customers\' expectations — not only through the quality of our products, but through the security, transparency and service that underpin every partnership.',
    pills: ['Quality first', 'Customer success', 'Transparency'],
    dark: false,
  },
  {
    icon: '💡',
    tag: 'Our Vision',
    title: 'The world\'s most trusted hydrocolloid partner',
    body: 'We envision a future where VIVINE International is the first name global manufacturers think of when sourcing functional biopolymers. Our vision is to drive food safety, pharmaceutical efficacy and product innovation worldwide by making premium-grade hydrocolloids and cellulose ethers available to every manufacturer, regardless of size or location.',
    pills: ['Global leadership', 'Innovation', 'Sustainability'],
    dark: true,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

const MvCard = ({ icon, tag, title, body, pills, dark }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.015, borderColor: dark ? 'rgba(201,168,76,0.5)' : 'rgba(201,168,76,0.45)', boxShadow: '0 20px 40px rgba(44,58,35,0.08)' }}
    whileTap={{ scale: 0.99 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-2xl overflow-hidden flex flex-col cursor-default transition-colors duration-300 h-full"
    style={{ border: '1px solid rgba(201,168,76,0.2)' }}
  >
    {/* Card header */}
    <div className="p-7 flex-1" style={{ background: dark ? 'var(--forest)' : 'var(--cream)' }}>
      <div className="flex items-center gap-3 mb-5">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(201,168,76,0.12)' }}
        >
          {icon}
        </motion.div>
        <span
          className="text-[10px] font-medium tracking-[0.14em] uppercase"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          {tag}
        </span>
      </div>
      <h3
        className="text-xl md:text-2xl font-black uppercase leading-snug mb-4"
        style={{
          fontFamily: "'Oswald', sans-serif",
          color: dark ? '#fff' : 'var(--forest)',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-loose"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          color: dark ? 'rgba(255,255,255,0.6)' : 'var(--brown-warm)',
          fontWeight: 300,
        }}
      >
        {body}
      </p>
    </div>

    {/* Card footer */}
    <div
      className="px-7 py-4 flex flex-wrap gap-4"
      style={{
        background: dark ? 'rgba(44,58,35,0.6)' : 'var(--cream-dark)',
        borderTop: '1px solid rgba(201,168,76,0.25)',
      }}
    >
      {pills.map((pill) => (
        <div key={pill} className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
          <span className="text-xs" style={{ color: dark ? 'var(--cream-dark)' : 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{pill}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const AboutMissionVisionSection = () => (
  <section data-component="AboutMissionVisionSection"
    id="mission"
    className="py-20 md:py-28 overflow-hidden"
    style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="max-w-7xl mx-auto px-4 md:px-6">

      <motion.div {...fadeUp(0)} className="max-w-md mb-12">
        <span
          className="block text-[10px] font-medium tracking-[0.18em] uppercase mb-2"
          style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
        >
          Purpose & Direction
        </span>
        <h2
          className="text-3xl md:text-4xl font-black uppercase leading-tight"
          style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--forest)' }}
        >
          Our Mission &{' '}
          <em className="not-italic" style={{ color: 'var(--gold-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
            Vision
          </em>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {CARDS.map((card, i) => (
          <motion.div key={card.tag} {...fadeUp(i * 0.15)} className="h-full">
            <MvCard {...card} />
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutMissionVisionSection;
