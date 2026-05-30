'use client';

import { motion } from 'motion/react';
import { Mail, Phone, Clock, Shield } from 'lucide-react';

const PRODUCT_CATS = [
  'Hydrocolloids & Gums',
  'Cellulose Derivatives',
  'Pharmaceutical Excipients',
  'Cosmetic Ingredients',
  'Industrial Additives',
  'Oilfield & PAC Grades',
  'Textile Chemicals',
  'Stabilizer Systems',
];

const CONTACTS = [
  { Icon: Mail,  label: 'Email',          value: 'Sales@vivineinternational.com', href: 'mailto:Sales@vivineinternational.com' },
  { Icon: Phone, label: 'Phone',          value: '+91 91524 80570',               href: 'tel:+919152480570' },
  { Icon: Clock, label: 'Business hours', value: 'Monday – Saturday, 9:00 AM – 6:00 PM IST', href: null },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.1 },
  transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

const ContactInfoPanel = () => (
  <div>
    {/* Eyebrow */}
    <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-3">
      <span className="inline-block w-4 h-px" style={{ background: 'var(--gold)' }} />
      <span
        className="text-[11px] font-medium tracking-widest uppercase"
        style={{ color: 'var(--gold)', fontFamily: "'Raleway', sans-serif" }}
      >
        Contact our expert team
      </span>
    </motion.div>

    {/* H2 */}
    <motion.h2
      {...fadeUp(0.05)}
      className="text-2xl md:text-3xl font-black uppercase leading-tight mb-4"
      style={{ fontFamily: "'Oswald', sans-serif", color: 'var(--forest)', letterSpacing: '-0.01em' }}
    >
      Partner with{' '}
      <em
        className="not-italic"
        style={{
          color: 'var(--gold-dark)',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 400,
          textTransform: 'none',
        }}
      >
        VIVINE International
      </em>{' '}
      for your formulation needs
    </motion.h2>

    {/* Description */}
    <motion.p
      {...fadeUp(0.1)}
      className="text-sm leading-relaxed mb-8 max-w-lg pl-4"
      style={{
        fontFamily: "'Open Sans', sans-serif",
        color: 'var(--brown-warm)',
        fontWeight: 300,
        borderLeft: '3px solid rgba(201,168,76,0.3)',
      }}
    >
      Contact VIVINE International to discover the right hydrocolloids, gums, cellulose derivatives,
      pharmaceutical excipients, cosmetic ingredients, industrial additives, technical products,
      and customized stabilizer systems tailored to your application needs. Take your brand further
      with VIVINE's quality, experience, and efficiency — talk to our team today and find out how
      partnering with us can drive the success of your business.
    </motion.p>

    {/* Product categories */}
    <motion.div
      {...fadeUp(0.15)}
      className="rounded-xl p-5 mb-8"
      style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.25)' }}
    >
      <div
        className="text-[10px] font-bold tracking-widest uppercase mb-3"
        style={{ color: 'var(--brown-warm)', fontFamily: "'Raleway', sans-serif" }}
      >
        Products we supply
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
        {PRODUCT_CATS.map((cat) => (
          <div key={cat} className="flex items-center gap-2 py-1">
            <div className="w-[5px] h-[5px] rounded-full shrink-0" style={{ background: 'var(--gold)' }} />
            <span className="text-xs" style={{ color: 'var(--forest)', fontFamily: "'Open Sans', sans-serif" }}>
              {cat}
            </span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Contact details */}
    <div className="flex flex-col gap-3 mb-6">
      {CONTACTS.map(({ Icon, label, value, href }, i) => (
        <motion.div
          key={label}
          {...fadeUp(0.18 + i * 0.05)}
          whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
          className="rounded-lg p-4 flex items-center gap-4 transition-colors"
          style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.25)' }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-dark)' }}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <div
              className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
              style={{ color: 'var(--brown-warm)', fontFamily: "'Raleway', sans-serif" }}
            >
              {label}
            </div>
            <div className="text-sm font-medium" style={{ color: 'var(--forest)', fontFamily: "'Open Sans', sans-serif" }}>
              {href ? (
                <a href={href} className="hover:text-[var(--gold-dark)] transition-colors">
                  {value}
                </a>
              ) : (
                value
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Trust note */}
    <motion.div
      {...fadeUp(0.35)}
      className="flex items-start gap-2 p-3 rounded-lg text-xs"
      style={{
        background: 'rgba(201,168,76,0.1)',
        border: '1px solid rgba(201,168,76,0.25)',
        color: 'var(--brown-warm)',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Shield className="w-4 h-4 shrink-0 mt-px" style={{ color: 'var(--gold-dark)' }} />
      <span>Your email information is absolutely safe — we will never disclose it to third parties for any reason.</span>
    </motion.div>
  </div>
);

export default ContactInfoPanel;
