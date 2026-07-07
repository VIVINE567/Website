'use client';

import { motion } from 'motion/react';
import S from '../styles/preloader';

const Preloader = () => {
  return (
    <motion.div
      data-component="Preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(8px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      style={S.preloaderBg}
      className="fixed inset-0 z-preloader flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 flex items-center justify-center">
        <div className="relative mx-auto" style={{ width: 'fit-content' }}>
          <motion.img
            src="https://res.cloudinary.com/wiofsjuh/image/upload/f_auto,q_auto/v1783406938/viv_globe.png"
            alt="VIVINE globe"
            className="relative rounded-[28px] w-[clamp(16rem,30vw,22rem)] h-auto object-cover"
            initial={{ filter: 'blur(12px)', opacity: 0.9 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
