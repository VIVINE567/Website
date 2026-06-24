'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

/* ── Data ─────────────────────────────────────────────────────────────── */

const WHY_CARDS = [
  { icon: '🌍', title: 'Global supply network',       body: 'Strategic sourcing partnerships across Asia, Europe and South America ensure consistent supply and competitive pricing worldwide.' },
  { icon: '🔬', title: 'Technical expertise',         body: 'Application-specific guidance from our formulation scientists covering food, pharma, cosmetics and construction industries.' },
  { icon: '📋', title: 'Full documentation',          body: 'TDS, MSDS, Certificates of Analysis, Halal, Kosher, organic and non-GMO certificates provided promptly for every product.' },
  { icon: '⚗️', title: 'Custom grade development',   body: 'Tailor-made blends, stabiliser systems and private-label solutions developed to your exact viscosity, purity and particle size requirements.' },
  { icon: '🚚', title: 'Reliable logistics',          body: 'Flexible MOQ, efficient international shipping and real-time order tracking — minimising lead times and supply chain disruption.' },
  { icon: '🤝', title: 'Long-term partnerships',      body: 'We invest in understanding your business. Our account managers provide continuity, transparency and proactive market intelligence.' },
  { icon: '✅', title: 'Quality assurance',           body: 'Every batch sourced from GMP and HACCP certified facilities. Rigorous incoming quality checks at our end before dispatch.' },
  { icon: '💡', title: 'One-stop solution',           body: 'From hydrocolloids to cellulose derivatives, access over 200 product grades from a single, trusted international supplier.' },
];

const CERT_CARDS = [
  { icon: '🏅', title: 'ISO 9001 : 2015',          body: 'Quality management systems certified across our supply chain partners.' },
  { icon: '🛡️', title: 'ISO 22000 / FSSC 22000',  body: 'Food safety management systems ensuring product safety from source to delivery.' },
  { icon: '🌙', title: 'Halal Certified',           body: 'All products available with internationally recognised Halal certification.' },
  { icon: '✡️', title: 'Kosher Certified',          body: 'Kosher-certified grades available to meet Jewish dietary law requirements.' },
  { icon: '🌿', title: 'Non-GMO',                   body: 'Non-GMO verified grades available across our plant-based hydrocolloid range.' },
  { icon: '📦', title: 'GMP & HACCP',               body: 'Good Manufacturing Practice and Hazard Analysis certified production facilities.' },
  { icon: '🌱', title: 'COSMOS / Organic',          body: 'Organic-certified grades for natural cosmetics and food formulations.' },
  { icon: '📄', title: 'Full Documentation',        body: 'CoA, TDS, MSDS and all compliance documents available on request within 24 hours.' },
];

const REGIONS = [
  { flag: '🌏', name: 'South & Southeast Asia',  detail: 'India, Indonesia, Malaysia, Thailand, Vietnam, Philippines — our most active supply region.', tag: 'Primary Market',    tagColor: 'var(--gold)' },
  { flag: '🌍', name: 'Middle East & Africa',     detail: 'UAE, Saudi Arabia, Egypt, Morocco, Turkey and Sub-Saharan African markets. Halal-certified grades readily available.',   tag: 'Growing Region',    tagColor: 'var(--gold-dark)' },
  { flag: '🌎', name: 'Europe',                   detail: 'EU-compliant documentation for all products. Supply to Poland, Spain, Portugal, Norway, Germany, Netherlands, France, Italy and the UK.', tag: 'EU Compliant',      tagColor: 'var(--forest)' },
  { flag: '🌐', name: 'Americas',                 detail: 'GRAS-listed grades with FDA-compatible documentation for US, Canada, Chile, Brazil and Latin American markets.',        tag: 'FDA Compatible',    tagColor: 'var(--forest)' },
  { flag: '🇨🇳', name: 'East Asia',              detail: 'Deep sourcing partnerships with manufacturers in China, Japan and South Korea.',                                   tag: 'Direct Sourcing',   tagColor: 'var(--brown-warm)' },
  { flag: '📦', name: 'Flexible MOQ',             detail: 'From lab samples to full container loads — tailored logistics for businesses at every scale.',                   tag: 'All Volumes',       tagColor: 'var(--brown-warm)' },
];

const TIMELINE = [
  { year: 'Founded',              event: 'VIVINE International Established',         detail: 'Built with a vision to connect global manufacturers with high-quality hydrocolloids, cellulose ethers, and specialty ingredients through reliable sourcing and supply solutions.' },
  { year: 'Expansion',           event: 'Portfolio Expanded Across Key Ingredient Categories', detail: 'Broadened our offering from hydrocolloids to cellulose ethers and specialty ingredients, supporting customers across multiple industries and applications.' },
  { year: 'International Growth',event: 'Expanded Global Supply Network',   detail: 'Established sourcing partnerships and logistics capabilities across Asia, Europe, the Middle East, and the Americas, enabling reliable international supply and distribution.' },
  { year: 'Quality Milestone',   event: 'Full certification programme launched',     detail: 'All supply chain partners audited and certified to ISO 9001, ISO 22000, HACCP, Halal and Kosher standards.' },
  { year: 'Today',               event: '9+ grades across 6 industries',         detail: 'VIVINE now offers a comprehensive portfolio serving food, pharma, cosmetics, personal care, construction and industrial sectors globally.' },
];

const TABS = [
  { id: 'why',     label: 'Why VIVINE' },
  { id: 'quality', label: 'Quality & Certifications' },
  { id: 'global',  label: 'Global Reach' },
  { id: 'journey', label: 'Our Journey' },
];

/* ── Variants ─────────────────────────────────────────────────────────── */

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

/* ── Sub-components ───────────────────────────────────────────────────── */

const FeatureCard = ({ icon, title, body }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, scale: 1.015, borderColor: 'rgba(201,168,76,0.5)', boxShadow: '0 12px 30px rgba(44,58,35,0.08)' }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-2xl p-5 cursor-default transition-colors duration-300"
    style={{
      background: 'var(--cream)',
      border: '1px solid rgba(201,168,76,0.2)',
    }}
  >
    <div className="text-2xl mb-3">{icon}</div>
    <div className="text-sm font-medium mb-1.5" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{title}</div>
    <div className="text-xs leading-relaxed" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{body}</div>
  </motion.div>
);

const CertCard = ({ icon, title, body }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, scale: 1.015, borderColor: 'rgba(201,168,76,0.5)', boxShadow: '0 10px 24px rgba(44,58,35,0.06)' }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-2xl p-5 text-center cursor-default transition-colors duration-300"
    style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl" style={{ background: 'rgba(201,168,76,0.12)' }}>{icon}</div>
    <div className="text-sm font-medium mb-1" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{title}</div>
    <div className="text-xs leading-relaxed" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{body}</div>
  </motion.div>
);

const RegionCard = ({ flag, name, detail, tag, tagColor }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -6, scale: 1.015, borderColor: 'rgba(201,168,76,0.5)', boxShadow: '0 10px 24px rgba(44,58,35,0.06)' }}
    whileTap={{ scale: 0.985 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="rounded-2xl p-5 cursor-default transition-colors duration-300"
    style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.2)' }}
  >
    <div className="text-3xl mb-3">{flag}</div>
    <div className="text-sm font-medium mb-1.5" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{name}</div>
    <div className="text-xs leading-relaxed mb-3" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{detail}</div>
    <span className="inline-block text-[10px] font-medium px-3 py-0.5 rounded-full" style={{ background: 'rgba(201,168,76,0.12)', color: tagColor || 'var(--gold)', fontFamily: "'Raleway', sans-serif", letterSpacing: '0.06em' }}>{tag}</span>
  </motion.div>
);

const TimelineItem = ({ year, event, detail }) => (
  <motion.div variants={cardVariants} className="relative pb-10 last:pb-0">
    <div
      className="absolute left-[-20px] top-1 w-3.5 h-3.5 rounded-full border-2"
      style={{ background: 'var(--gold)', borderColor: 'var(--cream-dark)', boxShadow: '0 0 0 3px rgba(201,168,76,0.2)' }}
    />
    <div className="text-[10px] font-medium tracking-wider uppercase mb-1" style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}>{year}</div>
    <div className="text-sm font-medium mb-1.5" style={{ color: 'var(--forest)', fontFamily: "'Raleway', sans-serif" }}>{event}</div>
    <div className="text-xs leading-relaxed" style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif", fontWeight: 300 }}>{detail}</div>
  </motion.div>
);

const TabIntro = ({ tag, heading, accentWord, body }) => (
  <div className="max-w-xl mb-8">
    <span className="block text-[10px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}>{tag}</span>
    <h3 className="text-2xl md:text-3xl font-black uppercase leading-snug mb-3" style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--forest)' }}>
      {heading}{' '}
      {accentWord && <em className="not-italic" style={{ color: 'var(--gold-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>{accentWord}</em>}
    </h3>
    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Open Sans', sans-serif", color: 'var(--brown-warm)', fontWeight: 300 }}>{body}</p>
  </div>
);

/* ── Main Component ───────────────────────────────────────────────────── */

const AboutTabsSection = () => {
  const [active, setActive] = useState('why');

  return (
    <section data-component="AboutTabsSection"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--cream-dark)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Tab bar */}
        <div
          className="flex gap-0 overflow-x-auto mb-10 border-b relative"
          style={{ borderColor: 'rgba(201,168,76,0.25)' }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className="whitespace-nowrap px-5 py-3.5 text-sm relative transition-all duration-200"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: active === tab.id ? 500 : 400,
                color: active === tab.id ? 'var(--gold)' : 'var(--brown-warm)',
                background: 'transparent',
              }}
            >
              {tab.label}
              {active === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--gold)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {active === 'why' && (
              <>
                <TabIntro
                  tag="Why Choose Us"
                  heading="Your premier hydrocolloid partner —"
                  accentWord="globally"
                  body="We combine deep product knowledge with a customer-first approach, offering more than just ingredients — end-to-end supply chain confidence and formulation expertise."
                />
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {WHY_CARDS.map((c) => <FeatureCard key={c.title} {...c} />)}
                </motion.div>
              </>
            )}

            {active === 'quality' && (
              <>
                <TabIntro
                  tag="Quality & Certifications"
                  heading="Never compromise"
                  accentWord="on quality"
                  body="All VIVINE products are produced in GMP and HACCP certified plants. Our cooperative manufacturers hold ISO 9001, ISO 22000, BRC and FSSC 22000 certifications."
                />
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {CERT_CARDS.map((c) => <CertCard key={c.title} {...c} />)}
                </motion.div>
              </>
            )}

            {active === 'global' && (
              <>
                <TabIntro
                  tag="Global Reach"
                  heading="Delivering Globally with"
                  accentWord="Trusted Supply Networks"
                  body="VIVINE maintains an extensive international distribution network, connecting manufacturers and buyers across key global markets with reliable sourcing and efficient logistics."
                />
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  {REGIONS.map((r) => <RegionCard key={r.name} {...r} />)}
                </motion.div>
              </>
            )}

            {active === 'journey' && (
              <>
                <TabIntro
                  tag="Our Journey"
                  heading="Built on expertise,"
                  accentWord="driven by trust"
                  body="VIVINE International was built from the ground up with a clear purpose: to make premium functional ingredients accessible to manufacturers everywhere."
                />
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="relative pl-8 max-w-2xl"
                  style={{ borderLeft: '1px solid rgba(201,168,76,0.3)' }}
                >
                  {TIMELINE.map((item) => <TimelineItem key={item.year} {...item} />)}
                </motion.div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AboutTabsSection;
