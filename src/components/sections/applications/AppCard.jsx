'use client';

import { motion } from 'motion/react';

/**
 * AppCard — reusable card matching the HTML .app-card pattern.
 * Fast: no per-card stagger, instant viewport trigger, short 0.18s fade.
 */
const AppCard = ({ emoji, image, label, desc, tag }) => (
  <motion.article data-component="AppCard"
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ duration: 0.18, ease: 'easeOut' }}
    whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(44,58,35,0.14), 0 1px 4px rgba(0,0,0,0.07)' }}
    className="rounded-xl overflow-hidden cursor-default"
    style={{
      background: 'var(--cream)',
      border: '1px solid rgba(201,168,76,0.2)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.03)',
      transition: 'box-shadow 0.2s',
    }}
  >
    {/* Emoji / image area */}
    {image ? (
      <div
        className="w-full border-b overflow-hidden"
        style={{
          aspectRatio: '4/3',
          borderColor: 'rgba(201,168,76,0.18)',
        }}
      >
        <img src={image} alt={label} className="w-full h-full object-cover" />
      </div>
    ) : (
      <div
        className="w-full flex items-center justify-center text-4xl border-b"
        style={{
          aspectRatio: '4/3',
          background: 'var(--cream-dark)',
          borderColor: 'rgba(201,168,76,0.18)',
        }}
      >
        {emoji}
      </div>
    )}

    {/* Body */}
    <div className="p-4">
      <span
        className="block text-sm font-semibold mb-1.5"
        style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)', letterSpacing: '0.04em' }}
      >
        {label}
      </span>
      <p
        className="text-xs leading-relaxed mb-3"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--brown-warm)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6 }}
      >
        {desc}
      </p>
      <span
        className="inline-block text-[10px] font-medium px-3 py-1 rounded-full"
        style={{
          background: 'rgba(201,168,76,0.12)',
          color: 'var(--gold-dark)',
          border: '1px solid rgba(201,168,76,0.3)',
          fontFamily: "'Raleway', sans-serif",
          letterSpacing: '0.04em',
        }}
      >
        {tag}
      </span>
    </div>
  </motion.article>
);

export default AppCard;
