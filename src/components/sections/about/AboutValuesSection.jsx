'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Heart, Users, Lightbulb, ShieldCheck } from 'lucide-react';

const VALUES = [
  {
    num: '01',
    name: 'We Care',
    body: 'We respect and support our customers, partners, and people. Quality and safety are built into every decision we make. We listen carefully, respond promptly, and take full accountability for the products we supply.',
    icon: Heart,
  },
  {
    num: '02',
    name: 'We Collaborate',
    body: 'We believe strong partnerships create better results. By working closely with customers, suppliers, and technical teams, we share knowledge, solve challenges, and build long-term success together.',
    icon: Users,
  },
  {
    num: '03',
    name: 'We Innovate',
    body: 'We continuously explore new ideas, technologies, and solutions. By staying ahead of industry trends, we help customers improve product performance, efficiency, and competitiveness.',
    icon: Lightbulb,
  },
  {
    num: '04',
    name: 'We Deliver',
    body: 'We do what we promise. From product quality to on-time delivery and responsive support, we are committed to providing reliable solutions that customers can trust.',
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const ValueCard = ({ num, name, body, icon: Icon, isHovered, isDimmed, onHoverStart, onHoverEnd }) => (
  <motion.div
    variants={cardVariants}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
    whileHover={{ y: -8, scale: 1.015 }}
    whileTap={{ scale: 0.995 }}
    animate={{ 
      opacity: isDimmed ? 0.65 : 1.0,
      borderColor: isHovered ? 'var(--gold)' : 'rgba(201,168,76,0.18)',
      backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
      boxShadow: isHovered ? '0 20px 40px rgba(201,168,76,0.08)' : '0 4px 20px rgba(0,0,0,0.01)',
    }}
    transition={{ type: "spring", stiffness: 350, damping: 22 }}
    className="rounded-3xl p-6 md:p-8 flex flex-col justify-between border cursor-default h-full relative overflow-hidden"
    style={{
      borderWidth: '1px',
      background: 'rgba(255, 255, 255, 0.01)',
      backdropFilter: 'blur(8px)',
    }}
  >
    {/* Ambient micro glow background on card */}
    <motion.div
      animate={{
        opacity: isHovered ? 0.06 : 0,
        scale: isHovered ? 1.2 : 0.8,
      }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle at 80% 20%, var(--gold) 0%, transparent 60%)',
      }}
    />

    <div>
      {/* Top Row: Icon + Metallic number */}
      <div className="flex items-start justify-between mb-6">
        <motion.div
          animate={{
            backgroundColor: isHovered ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
            borderColor: isHovered ? 'var(--gold)' : 'rgba(201,168,76,0.25)',
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-2xl flex items-center justify-center border"
          style={{ background: 'rgba(201,168,76,0.08)' }}
        >
          <Icon className="w-6 h-6 transition-colors duration-300" style={{ color: isHovered ? 'var(--gold-dark)' : 'var(--forest)' }} />
        </motion.div>
        
        <span
          className="text-4xl md:text-5xl font-black leading-none tracking-tight select-none"
          style={{
            fontFamily: "'Oswald', sans-serif",
            color: 'transparent',
            WebkitTextStroke: isHovered ? '1.5px var(--gold)' : '1.5px rgba(201,168,76,0.75)',
            background: isHovered ? 'linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)' : 'none',
            WebkitBackgroundClip: isHovered ? 'text' : 'unset',
            transition: 'WebkitTextStroke 0.3s, background 0.3s',
          }}
        >
          {num}
        </span>
      </div>

      {/* Commitment Title */}
      <h3
        className="text-lg md:text-xl font-bold uppercase mb-3 transition-colors duration-300"
        style={{
          fontFamily: "'Raleway', sans-serif",
          color: isHovered ? 'var(--gold-dark)' : 'var(--forest)',
          letterSpacing: '0.04em',
        }}
      >
        {name}
      </h3>

      {/* Commitment Body */}
      <p
        className="text-xs leading-relaxed transition-colors duration-300"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          color: isHovered ? 'var(--forest)' : 'var(--brown-warm)',
          fontWeight: isHovered ? 400 : 300,
        }}
      >
        {body}
      </p>
    </div>
  </motion.div>
);

const AboutValuesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="values"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <span
            className="block text-[10px] font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
          >
            Our Values
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-black uppercase leading-tight mb-5"
            style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--forest)' }}
          >
            Four commitments that guide{' '}
            <em className="not-italic block md:inline" style={{ color: 'var(--gold-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none' }}>
              everything we do
            </em>
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gold/30 mb-6" />
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: "'Open Sans', sans-serif", color: 'var(--brown-warm)', fontWeight: 300 }}
          >
            At the heart of VIVINE International are four commitments that shape how we work with customers,
            partners, and each other — driving inclusion, embracing accountability, and turning ideas into action.
          </p>
        </motion.div>

        {/* 2x2 Spotlight Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.05 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {VALUES.map((v, i) => {
            const isHovered = hoveredIndex === i;
            const isAnyHovered = hoveredIndex !== null;
            const isDimmed = isAnyHovered && !isHovered;
            
            return (
              <ValueCard
                key={v.num}
                {...v}
                isHovered={isHovered}
                isDimmed={isDimmed}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default AboutValuesSection;
