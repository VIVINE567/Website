import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';
import S from '../styles';
import { CONTENT } from '../content';

const C = CONTENT.footer;

const Footer = () => (
  <footer className="pt-24 pb-12" style={S.footer}>
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link to="/" className="inline-block mb-8">
            <Logo className="h-12" />
          </Link>
          <p style={S.footerAboutText} className="mb-8 leading-relaxed">{C.tagline}</p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg transition-colors" style={S.footerSocialBtn}><Linkedin size={18} /></a>
            <a href="#" className="p-2 rounded-lg transition-colors" style={S.footerSocialBtn}><Twitter size={18} /></a>
            <a href="#" className="p-2 rounded-lg transition-colors" style={S.footerSocialBtn}><Mail size={18} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="text-xl font-bold mb-8 uppercase tracking-widest" style={S.footerHeading}>{C.usefulLinks.heading}</h4>
          <ul className="space-y-4" style={S.footerLinks}>
            {C.usefulLinks.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:opacity-70">{item.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-xl font-bold mb-8 uppercase tracking-widest" style={S.footerHeading}>{C.products.heading}</h4>
          <ul className="space-y-4" style={S.footerLinks}>
            {C.products.items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:opacity-70">{item.label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm" style={S.footerBottom}>
        <p>{C.copyright}</p>
        <div className="flex gap-8">
          {C.legal.map((item) => (
            <a key={item.label} href={item.href} className="hover:opacity-70 transition-colors">{item.label}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
