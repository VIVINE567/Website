'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Globe, Truck } from 'lucide-react';
import S from '../../styles/about';
import { CONTENT } from '../../content';

const C = CONTENT.home.about;
const POINT_ICONS = [Globe, Truck];

const AboutSection = () => (
  <section data-component="AboutSection" className="py-24 overflow-hidden luxury-section-dark">
    <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center">

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={S.aboutH2} className="text-4xl mb-4">
          {C.headingPre} <em style={S.aboutAccent}>{C.headingAccent}</em> {C.headingPost}
        </h2>
        <p style={S.aboutSubtitle} className="mb-8 uppercase">{C.subtitle}</p>

        <div className="space-y-8 mb-10">
          {C.points.map((text, idx) => {
            const Icon = POINT_ICONS[idx];
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
                whileHover={{ x: 6 }}
                className="flex gap-6 group cursor-default"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  className="p-4 rounded-2xl shadow-md shrink-0 self-start" 
                  style={S.aboutIconBox}
                >
                  <Icon className="w-8 h-8" style={S.aboutIconColor} />
                </motion.div>
                <p style={S.aboutBody} className="transition-colors duration-300 group-hover:text-white">{text}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          whileHover={{ scale: 1.05, y: -2, boxShadow: '0 8px 24px rgba(201,168,76,0.3)' }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className="inline-block"
        >
          <Link href="/products" className="btn-primary">
            {C.cta}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8 }}
      >
        <div className="overflow-hidden shadow-xl h-[490px]" style={{ ...S.aboutImgFrame, borderColor: 'rgba(201,168,76,0.35)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
          <img
            src={C.img}
            alt={C.imgAlt}
            className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
