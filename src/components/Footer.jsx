'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ExternalLink, X, Mail } from 'lucide-react';
import Logo from './Logo';
import S from '../styles';
import { CONTENT } from '../content';

const C = CONTENT.footer;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const Footer = () => (
  <footer className="luxury-section-radial pt-20 pb-10" style={S.footer}>
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

      {/* Gold top rule */}
      <div className="gold-divider mb-16" style={{ width: '100%', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

        {/* Brand column */}
        <motion.div {...fadeUp(0)}>
          <Link
            href="/"
            className="inline-block mb-7 rounded-xl px-4 py-3"
            style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.4) 0%, rgba(232,201,122,0.3) 50%, rgba(154,122,46,0.4) 100%)' }}
          >
            <Logo className="h-12" />
          </Link>
          <p style={S.footerAboutText} className="mb-8 leading-relaxed text-sm">
            {C.tagline}
          </p>
          <div className="flex gap-3">
            {[
              { id: 'linkedin', icon: <ExternalLink size={16} />, href: '#' },
              { id: 'x',        icon: <X size={16} />,            href: '#' },
              { id: 'email',    icon: <Mail size={16} />,          href: '#' },
            ].map(({ id, icon, href }) => (
              <a
                key={id}
                href={href}
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all hover:scale-110 hover:brightness-125"
                style={S.footerSocialBtn}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Useful Links */}
        <motion.div {...fadeUp(0.08)}>
          <h4 className="mb-7 uppercase" style={S.footerHeading}>
            {C.usefulLinks.heading}
          </h4>
          <div className="gold-divider mb-7" style={{ marginLeft: 0, width: 40 }} />
          <ul className="space-y-3" style={S.footerLinks}>
            {C.usefulLinks.items.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="text-sm transition-all hover:text-[var(--gold)] hover:tracking-wider"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.04em' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Products */}
        <motion.div {...fadeUp(0.16)}>
          <h4 className="mb-7 uppercase" style={S.footerHeading}>
            {C.products.heading}
          </h4>
          <div className="gold-divider mb-7" style={{ marginLeft: 0, width: 40 }} />
          <ul className="space-y-3" style={S.footerLinks}>
            {C.products.items.map((item) => (
              <li key={item.to}>
                <Link
                  href={item.to}
                  className="text-sm transition-all hover:text-[var(--gold)] hover:tracking-wider"
                  style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.04em' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      {/* Bottom bar */}
      <div
        className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
        style={S.footerBottom}
      >
        <p style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.06em' }}>
          {C.copyright}
        </p>
        <div className="flex gap-6">
          {C.legal.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[var(--gold)] transition-colors"
              style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.06em' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
