'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const ContactSupportBanner = () => (
  <motion.div data-component="ContactSupportBanner"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="rounded-xl px-6 py-5 mt-10 flex items-center justify-center gap-3 flex-wrap text-center"
    style={{
      background: 'var(--forest)',
      border: '1px solid rgba(201,168,76,0.3)',
    }}
  >
    <Phone className="w-5 h-5 shrink-0" style={{ color: 'var(--gold)' }} />
    <div
      className="text-sm font-medium"
      style={{
        fontFamily: "'Raleway', sans-serif",
        color: 'var(--cream)',
        letterSpacing: '0.01em',
      }}
    >
      Need help? Call our team directly at{' '}
      <a
        href="tel:+919619661133"
        className="font-semibold transition-opacity hover:opacity-100"
        style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,0.5)', paddingBottom: 1 }}
      >
        +91 96196 61133
      </a>
      <span style={{ color: 'rgba(245,238,224,0.4)', margin: '0 8px' }}>·</span>
      Email:{' '}
      <a
        href="mailto:sales@vivineinternational.com"
        className="font-semibold transition-opacity hover:opacity-100"
        style={{ color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,0.5)', paddingBottom: 1 }}
      >
        sales@vivineinternational.com
      </a>
    </div>
  </motion.div>
);

export default ContactSupportBanner;
