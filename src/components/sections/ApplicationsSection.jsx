'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import S from '../../styles/applications';
import { CONTENT } from '../../content';

const C = CONTENT.home.applications;

const CATEGORY_IMAGES = [
  'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142464/food_inds_a0cgm2.png',
  'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142415/pharma_u0fr3r.png',
  'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142455/tech_cv06rx.png',
  'https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783142417/personel_care_c5t0gk.png',
];

const CATEGORY_LINKS = [
  '/applications#applications-food',
  '/applications#applications-pharma',
  '/applications#applications-industrial',
  '/applications#applications-cosmetics',
];

const ApplicationsSection = () => (
  <section data-component="ApplicationsSection" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-2 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-brand-primary banner-box rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url('${C.bannerImg}')` }}
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-2 sm:p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 italic" style={S.appsBannerH2}>
              "Hydrocolloids are Used in <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Technical</em> and <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Regulated</em> Applications to Thicken and to Stabilize Formulations."
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={S.appsBannerBody}>
              {C.body}
            </p>
            <Link href="/applications" className="btn-white inline-block !px-4 !py-3 !text-xs !tracking-wider sm:!px-10 sm:!py-5 sm:!text-base sm:!tracking-widest whitespace-nowrap">{C.cta}</Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-4">
            {C.categories.map((app, idx) => (
              <Link key={app} href={CATEGORY_LINKS[idx]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={CATEGORY_IMAGES[idx]}
                    alt={app}
                    className="w-full aspect-[3/2] object-cover block scale-[1.25]"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-1.5 px-1.5 sm:pb-4 sm:px-3">
                    <span className="block text-center text-white font-bold uppercase tracking-wide break-words text-[clamp(0.5rem,2.6vw,1rem)] sm:text-sm md:text-base">
                      {app}
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApplicationsSection;
