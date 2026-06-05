'use client';

import { motion } from 'motion/react';
import { Heart, Users, Lightbulb, ShieldCheck } from 'lucide-react';
import S from '../../../styles';

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

const AboutValuesSection = () => (
  <section
    id="values"
    className="py-24 md:py-32 overflow-hidden"
    style={S.sectionDark}
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
        <div className="gold-eyebrow mb-6">Our Values</div>
        <h2
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-black uppercase leading-tight mb-5"
          style={S.textForest}
        >
          Four commitments that guide{' '}
          <em className="not-italic block md:inline" style={{ color: 'var(--gold-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'uppercase' }}>
            everything we do
          </em>
        </h2>
        <div className="gold-divider mb-6" />
        <p
          className="text-sm leading-relaxed"
          style={S.textBrownLight}
        >
          At the heart of VIVINE International are four commitments that shape how we work with customers,
          partners, and each other — driving inclusion, embracing accountability, and turning ideas into action.
        </p>
      </motion.div>

      {/* 2x2 Grid — feature-card-animated style */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {VALUES.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, rotateY: 5, rotateX: -3 }}
              className="feature-card-animated group relative"
              style={S.featureCardPerspective}
            >
              <span className="corner-accent corner-tl" />
              <span className="corner-accent corner-br" />
              <span className="feature-card-number">{v.num}</span>

              <div
                className="feature-card-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(201,168,76,0.12)', border: '2px solid rgba(201,168,76,0.25)' }}
              >
                <Icon className="w-7 h-7" style={S.textGoldDark} />
              </div>

              <h3
                className="font-bold mb-3 feature-card-title uppercase"
                style={{ fontFamily: "'Raleway', sans-serif", fontSize: '1.15rem', letterSpacing: '0.04em' }}
              >
                {v.name}
              </h3>
              <div
                className="w-10 h-[1px] mb-4"
                style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }}
              />
              <p
                className="leading-relaxed feature-card-desc"
                style={{ fontSize: '0.85rem', fontWeight: 300 }}
              >
                {v.body}
              </p>
            </motion.div>
          );
        })}
      </div>

    </div>
  </section>
);

export default AboutValuesSection;