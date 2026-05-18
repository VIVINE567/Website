import { motion } from 'motion/react';
import S from '../../styles';
import { CONTENT } from '../../content';

const C = CONTENT.home.expertise;

const ExpertiseSection = () => (
  <section className="py-24 overflow-hidden" style={S.globalLeaderSection}>
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="gold-eyebrow mb-6">{C.eyebrow}</div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={S.globalLeaderH2}
        className="text-3xl md:text-5xl mb-6"
      >
        {C.headingPre} <em style={S.globalLeaderAccent}>{C.headingAccent}</em> {C.headingPost}
      </motion.h2>
      <div className="gold-divider my-6" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        style={S.globalLeaderBody}
        className="text-xl leading-relaxed"
      >
        {C.body}
      </motion.p>
    </div>
  </section>
);

export default ExpertiseSection;
