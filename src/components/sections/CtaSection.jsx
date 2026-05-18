import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import S from '../../styles';
import { CONTENT } from '../../content';

const C = CONTENT.home.cta;

const CtaSection = () => (
  <section className="py-24 overflow-hidden luxury-section-radial" style={S.ctaSection}>
    <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
      <div className="gold-eyebrow mb-8" style={S.ctaEyebrow}>{C.eyebrow}</div>

      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        style={S.ctaH2}
        className="text-4xl md:text-6xl mb-8"
      >
        {C.headingPre} <em style={S.ctaAccent}>{C.headingAccent}</em> {C.headingPost}
      </motion.h2>

      <div className="gold-divider my-8" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 0.1 }}
        style={S.ctaBody}
        className="text-xl mb-12 max-w-3xl mx-auto"
      >
        {C.body}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          to={C.buttonTo}
          className="btn-gold inline-block px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-all"
          style={S.ctaLink}
        >
          {C.button}
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
