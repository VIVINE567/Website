import { motion } from 'motion/react';
import Logo from './Logo';
import S from '../styles';
import { CONTENT } from '../content';

const Preloader = () => {
  const tagWords = CONTENT.preloader.tagline.split(" ");
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      style={S.preloaderBg}
      className="fixed inset-0 z-preloader flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={S.preloaderGlow}
        className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="flex flex-col items-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)", rotate: -180 }}
          animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1], filter: ["blur(20px)", "blur(0px)", "blur(0px)"], rotate: [-180, 0, 360] }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="mb-12"
        >
          <Logo className="h-24 md:h-32 drop-shadow-2xl" />
        </motion.div>

        <div className="w-48 md:w-64 h-[1px] relative flex justify-center mt-2 overflow-hidden" style={S.preloaderLineBg}>
          <motion.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%", opacity: [1, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }}
            className="absolute inset-y-0 h-full"
            style={S.preloaderLineAnim}
          />
        </div>

        <div className="mt-8 flex gap-2 md:gap-3">
          {tagWords.map((word, idx) => (
            <motion.span
              key={word}
              initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={S.preloaderWord}
              className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
