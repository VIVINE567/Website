'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@VIVINE.com';
const CALL_NUMBER = '9619661133';

export default function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const emailUrl = `mailto:${EMAIL}`;
  const callUrl = `tel:${CALL_NUMBER}`;

  useEffect(() => {
    setVisible(true);
    const hideTimer = window.setTimeout(() => setVisible(false), 3800);

    const handleInteraction = () => {
      setVisible(false);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  const showIcons = visible || hovered;

  return (
    <div
      data-component="ChatWidget"
      style={styles.wrapper}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {showIcons && (
          <motion.div
            key="channels"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={styles.buttons}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              whileHover={{ scale: 1.05 }}
              style={styles.channelLink}
            >
              <span style={styles.channelLabel}>WhatsApp</span>
              <div style={{ ...styles.iconWrapper, background: '#49E670' }}>
                <svg width="32" height="32" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="19.4395" cy="19.4395" r="19.4395" fill="white" opacity="0.15" />
                  <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="white" />
                  <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2" />
                </svg>
              </div>
            </motion.a>
            <motion.a
              href={emailUrl}
              aria-label="Email"
              whileHover={{ scale: 1.05 }}
              style={styles.channelLink}
            >
              <span style={styles.channelLabel}>Email</span>
              <div style={{ ...styles.iconWrapper, background: 'rgba(42, 108, 165, 0.95)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z" stroke="white" strokeWidth="1.8" />
                  <path d="M4 6L12 13L20 6" stroke="white" strokeWidth="1.8" />
                </svg>
              </div>
            </motion.a>
            <motion.a
              href={callUrl}
              aria-label="Call"
              whileHover={{ scale: 1.05 }}
              style={styles.channelLink}
            >
              <span style={styles.channelLabel}>Phone</span>
              <div style={{ ...styles.iconWrapper, background: '#4A90E2' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.27 15.32C15.52 15.07 15.88 14.99 16.2 15.09C17.27 15.45 18.42 15.65 19.61 15.65C20.05 15.65 20.42 16.02 20.42 16.46V20.45C20.42 20.89 20.05 21.25 19.61 21.25C10.99 21.25 3.75 14.01 3.75 5.39C3.75 4.95 4.11 4.58 4.55 4.58H8.54C8.98 4.58 9.35 4.95 9.35 5.39C9.35 6.58 9.55 7.73 9.91 8.8C10.01 9.12 9.93 9.48 9.68 9.73L7.62 11.79C7.5 11.91 7.5 12.08 7.62 12.2L6.62 10.79Z" fill="white" />
                </svg>
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={styles.trigger}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={styles.triggerIcon}
        >
          <line x1="12" y1="5" x2="12" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="5" y1="12" x2="19" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        </motion.svg>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 12,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 12,
  },
  channelLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    padding: '0 4px',
    textDecoration: 'none',
    color: 'inherit',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.12)',
    flexShrink: 0,
  },
  channelLabel: {
    fontSize: 14,
    fontWeight: 700,
    color: '#111',
    background: 'transparent',
    textTransform: 'none',
    whiteSpace: 'nowrap',
  },
  iconBtn: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    boxShadow: '0 12px 24px rgba(0,0,0,0.16)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  trigger: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: '#C9A84C',
    boxShadow: '0 16px 36px rgba(0,0,0,0.22)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  triggerIcon: {
    display: 'block',
  },
};

