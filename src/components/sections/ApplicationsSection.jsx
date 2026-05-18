import { motion } from 'motion/react';
import S from '../../styles';
import { CONTENT } from '../../content';

const C = CONTENT.home.applications;

const ApplicationsSection = () => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
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

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 italic" style={S.appsBannerH2}>
              {C.quote}
            </h2>
            <p className="text-xl mb-10 leading-relaxed" style={S.appsBannerBody}>
              {C.body}
            </p>
            <button className="btn-white">{C.cta}</button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {C.categories.map((app, idx) => (
              <motion.div
                key={app}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="glass-card p-1 min-[375px]:p-2 sm:p-4 lg:p-8 border-white/20 text-center hover:bg-white/20 transition-all rounded-xl cursor-default text-white flex items-center justify-center min-h-[90px] min-[375px]:min-h-[100px] sm:min-h-[120px] md:min-h-[140px] xl:min-h-[160px] overflow-hidden"
              >
                <span className="text-[10px] min-[370px]:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-tight sm:whitespace-nowrap whitespace-normal w-full px-1 sm:px-2">
                  {app}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApplicationsSection;
