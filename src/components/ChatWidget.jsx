'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@vivine.com';
const DEFAULT_MESSAGE = '';

function WhatsAppPopup({ onClose }) {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    const text = message.trim() || DEFAULT_MESSAGE;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.92 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      style={wpStyles.container}
    >
      {/* Header */}
      <div style={wpStyles.header}>
        <div style={wpStyles.headerLeft}>
          <div style={wpStyles.avatar}>
            <svg width="22" height="22" viewBox="0 0 39 39" fill="none">
              <circle cx="19.4395" cy="19.4395" r="19.4395" fill="rgba(255,255,255,0.2)" />
              <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="white" />
              <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2" />
            </svg>
          </div>
          <div>
            <div style={wpStyles.headerTitle}>VIVINE International</div>
            <div style={wpStyles.headerSubtitle}>Typically replies instantly</div>
          </div>
        </div>
        <button onClick={onClose} style={wpStyles.closeBtn} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Chat body */}
      <div style={wpStyles.body}>
        <div style={wpStyles.bubbleWrapper}>
          <div style={wpStyles.bubble}>
            <p style={wpStyles.bubbleText}>
              Hello! 👋 Welcome to VIVINE International. How can we help you today?
            </p>
            <span style={wpStyles.bubbleTime}>now</span>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div style={wpStyles.inputArea}>
        <div style={wpStyles.inputWrapper}>
          <textarea
            ref={inputRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message…"
            rows={1}
            style={wpStyles.input}
          />
          <button onClick={handleSend} style={wpStyles.sendBtn} aria-label="Send on WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div style={wpStyles.poweredBy}>
          <svg width="14" height="14" viewBox="0 0 39 39" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#25D366" />
            <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="white" />
            <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2" />
          </svg>
          <span>Chat on WhatsApp</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [waPopup, setWaPopup] = useState(false);

  const handleToggle = () => {
    if (waPopup) {
      setWaPopup(false);
      return;
    }
    setOpen(!open);
  };

  const handleWhatsAppClick = () => {
    setOpen(false);
    setWaPopup(true);
  };

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setOpen(true);
      window.removeEventListener('scroll', handleScroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div data-component="ChatWidget" style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      <AnimatePresence>
        {waPopup && (
          <WhatsAppPopup
            key="wa-popup"
            onClose={() => setWaPopup(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && !waPopup && (
          <motion.div
            key="channels"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              marginBottom: 14,
              alignItems: 'flex-end',
            }}
          >
            {/* WhatsApp */}
            <button
              onClick={handleWhatsAppClick}
              aria-label="Chat on WhatsApp"
              style={{ ...styles.channelBtn, background: 'none', border: 'none', padding: 0 }}
              className="chat-widget-channel"
            >
              <span style={styles.tooltip}>WhatsApp</span>
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670" />
                <path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA" />
                <path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" strokeWidth="0.2" />
              </svg>
            </button>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Send Email"
              style={styles.channelBtn}
              className="chat-widget-channel"
            >
              <span style={styles.tooltip}>Email</span>
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#C9A84C" />
                <path d="M20.5379 14.2557H1.36919C0.547677 14.2557 0 13.7373 0 12.9597V1.29597C0 0.518387 0.547677 0 1.36919 0H20.5379C21.3594 0 21.9071 0.518387 21.9071 1.29597V12.9597C21.9071 13.7373 21.3594 14.2557 20.5379 14.2557ZM20.5379 12.9597V13.6077V12.9597ZM1.36919 1.29597V12.9597H20.5379V1.29597H1.36919Z" transform="translate(8.48619 12.3117)" fill="white" />
                <path d="M10.9659 8.43548C10.829 8.43548 10.692 8.43548 10.5551 8.30588L0.286184 1.17806C0.012346 0.918864 -0.124573 0.530073 0.149265 0.270879C0.423104 0.0116857 0.833862 -0.117911 1.1077 0.141283L10.9659 7.00991L20.8241 0.141283C21.0979 -0.117911 21.5087 0.0116857 21.7825 0.270879C22.0563 0.530073 21.9194 0.918864 21.6456 1.17806L11.3766 8.30588C11.2397 8.43548 11.1028 8.43548 10.9659 8.43548Z" transform="translate(8.47443 12.9478)" fill="white" />
                <path d="M9.0906 7.13951C8.95368 7.13951 8.81676 7.13951 8.67984 7.00991L0.327768 1.17806C-0.0829894 0.918864 -0.0829899 0.530073 0.190849 0.270879C0.327768 0.0116855 0.738525 -0.117911 1.14928 0.141282L9.50136 5.97314C9.7752 6.23233 9.91212 6.62112 9.63828 6.88032C9.50136 7.00991 9.36444 7.13951 9.0906 7.13951Z" transform="translate(20.6183 18.7799)" fill="white" />
                <path d="M0.696942 7.13951C0.423104 7.13951 0.286185 7.00991 0.149265 6.88032C-0.124573 6.62112 0.012346 6.23233 0.286185 5.97314L8.63826 0.141282C9.04902 -0.117911 9.45977 0.0116855 9.59669 0.270879C9.87053 0.530073 9.73361 0.918864 9.45977 1.17806L1.1077 7.00991C0.970781 7.13951 0.833862 7.13951 0.696942 7.13951Z" transform="translate(8.47443 18.7799)" fill="white" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <button
        onClick={handleToggle}
        aria-label={open || waPopup ? 'Close chat options' : 'Open chat options'}
        style={{
          ...styles.toggleBtn,
          background: open || waPopup ? '#2C3A23' : '#C9A84C',
        }}
        className="chat-widget-toggle"
      >
        <AnimatePresence mode="wait">
          {open || waPopup ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.2 }}
              viewBox="-496 507.7 54 54"
              width="28"
              height="28"
            >
              <path
                d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"
                fill="white"
              />
              <path
                d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"
                fill="#C9A84C"
              />
              <path
                d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"
                fill="#C9A84C"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}

const styles = {
  channelBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform 0.2s ease',
  },
  tooltip: {
    background: '#2C3A23',
    color: '#F5EEE0',
    fontSize: 13,
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 500,
    letterSpacing: '0.04em',
    padding: '6px 14px',
    borderRadius: 8,
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
  },
  toggleBtn: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
};

const wpStyles = {
  container: {
    position: 'absolute',
    bottom: 70,
    right: 0,
    width: 340,
    maxWidth: 'calc(100vw - 48px)',
    borderRadius: 16,
    overflow: 'hidden',
    boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
    fontFamily: "'Raleway', sans-serif",
  },
  header: {
    background: '#075E54',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#128C7E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'white',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '0.02em',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    marginTop: 2,
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
    opacity: 0.8,
  },
  body: {
    background: '#ECE5DD',
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\' fill=\'%23d4cfc6\' /%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23p)\' width=\'200\' height=\'200\'/%3E%3C/svg%3E")',
    padding: '20px 16px',
    minHeight: 120,
  },
  bubbleWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  bubble: {
    background: 'white',
    borderRadius: '0 10px 10px 10px',
    padding: '10px 14px',
    maxWidth: '85%',
    boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
    position: 'relative',
  },
  bubbleText: {
    fontSize: 13.5,
    lineHeight: 1.5,
    color: '#303030',
    margin: 0,
  },
  bubbleTime: {
    fontSize: 10,
    color: '#999',
    display: 'block',
    textAlign: 'right',
    marginTop: 4,
  },
  inputArea: {
    background: '#F0F0F0',
    padding: '10px 12px 8px',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
    background: 'white',
    borderRadius: 24,
    padding: '6px 6px 6px 16px',
    border: '1px solid #e0e0e0',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    resize: 'none',
    fontFamily: "'Raleway', sans-serif",
    fontSize: 13.5,
    lineHeight: 1.4,
    color: '#303030',
    background: 'transparent',
    maxHeight: 80,
    padding: '4px 0',
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: '#25D366',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'background 0.2s',
  },
  poweredBy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 8,
    fontSize: 11,
    color: '#888',
  },
};
