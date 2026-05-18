import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import S from '../styles';
import { CONTENT } from '../content';

const C = CONTENT.defaultPage;

const DefaultPage = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replaceAll('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center text-center px-4" style={S.defaultPageBg}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <Logo className="h-16 md:h-20 mb-8 mx-auto" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6" style={S.defaultPageH1}>
          {pageName || C.fallbackTitle}
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-10 leading-relaxed mx-auto" style={S.defaultPageBody}>
          {C.bodyPrefix} {pageName} {C.bodySuffix}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary py-3 px-8 rounded-full">{C.returnHome}</Link>
          <a href={C.contactEmail} className="btn-white py-3 px-8 rounded-full">{C.contactSupport}</a>
        </div>
      </motion.div>
    </div>
  );
};

export default DefaultPage;
