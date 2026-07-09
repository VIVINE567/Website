'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { Mail, Phone, Clock } from 'lucide-react';
import S from '../styles/footer';
import { CONTENT } from '../content';

const C = CONTENT.footer;

const FOOTER_CONTACTS = [
  { Icon: Mail, label: 'Email', value: 'sales@vivineinternational.com', href: 'mailto:sales@vivineinternational.com' },
  { Icon: Phone, label: 'Phone', value: '+91 9619661133', href: 'tel:+919619661133' },
  { Icon: Clock, label: 'Business hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST', href: null },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const Footer = () => (
  <footer data-component="Footer" className="luxury-section-radial pt-20 pb-10" style={S.footer}>
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

      {/* Gold top rule */}
      <div className="gold-divider mb-16" style={{ width: '100%', background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Contact column */}
        <motion.div {...fadeUp(0)} className="flex flex-col gap-3">
          {FOOTER_CONTACTS.map(({ Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              {...fadeUp(0.05 + i * 0.05)}
              whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
              className="rounded-lg p-4 flex items-center gap-4 transition-colors"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold)' }}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div
                  className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
                  style={{ color: 'rgba(237,224,200,0.6)', fontFamily: "'Raleway', sans-serif" }}
                >
                  {label}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--cream-dark)', fontFamily: "'Open Sans', sans-serif" }}>
                  {href ? (
                    <a href={href} className="hover:text-[var(--gold)] transition-colors">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
        <motion.div {...fadeUp(0.16)} className="md:col-span-2 lg:col-span-2">
          <h4 className="mb-7 uppercase" style={S.footerHeading}>
            {C.products.heading}
          </h4>
          <div className="gold-divider mb-7" style={{ marginLeft: 0, width: 40 }} />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3" style={S.footerLinks}>
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
      </div>

    </div>
  </footer>
);

export default Footer;
