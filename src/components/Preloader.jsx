'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, animate } from 'motion/react';
import S from '../styles/preloader';

const LETTERS = ['V', 'I', 'V', 'I', 'N', 'E'];
const DROP_Y = -280;      // px above final position each letter starts
const STAGGER = 0.18;     // seconds between each letter's drop
const IMG_START = 0.1;    // delay before thumbnail drops
const IMG_DURATION = 0.7; // thumbnail animation duration
const LETTERS_START = IMG_START + IMG_DURATION + 0.1; // letters begin after thumbnail lands

const Preloader = () => {
  const letterRefs = useRef([]);
  const globeRef = useRef(null);

  useEffect(() => {
    // Globe drops first
    if (globeRef.current) {
      animate(
        globeRef.current,
        { y: [DROP_Y, 0], scale: [0.6, 1], opacity: [0, 1] },
        {
          duration: IMG_DURATION,
          delay: IMG_START,
          ease: [0.34, 1.56, 0.64, 1],
        }
      );
    }

    // Letters drop after globe has landed
    letterRefs.current.forEach((el, i) => {
      animate(
        el,
        { y: [DROP_Y, 0], scale: [0, 1], opacity: [0, 1] },
        {
          duration: 0.65,
          delay: LETTERS_START + i * STAGGER,
          ease: [0.34, 1.56, 0.64, 1],
        }
      );
    });
  }, []);

  const subtitleDelay = LETTERS_START + (LETTERS.length - 1) * STAGGER + 0.55;

  return (
    <motion.div data-component="Preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(8px)',
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      style={S.preloaderBg}
      className="fixed inset-0 z-preloader flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={S.preloaderGlow}
        className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="flex flex-col items-center gap-0 relative z-10">
        {/* Globe + Letters on the same row */}
        <div className="flex items-center" style={{ gap: '0.4em' }}>
          {/* Globe drops first */}
          <img
            ref={globeRef}
            src="/viv_globe.svg"
            alt="Vivine globe"
            style={{
              width: 'clamp(2.5rem, 10vw, 4.5rem)',
              height: 'clamp(2.5rem, 10vw, 4.5rem)',
              objectFit: 'contain',
              opacity: 0,
            }}
          />

          {/* Letters drop after globe */}
          <div className="flex" style={{ letterSpacing: '0.14em' }}>
            {LETTERS.map((letter, i) => (
              <span
                key={`${letter}-${i}`}
                ref={(el) => { letterRefs.current[i] = el; }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2.5rem, 10vw, 4.5rem)',
                  fontWeight: 700,
                  color: 'var(--forest)',
                  opacity: 0,
                  display: 'inline-block',
                  padding: '0 0.04em',
                  lineHeight: 1,
                }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        {/* Subtitle fades in after all letters have landed */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: subtitleDelay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            ...S.preloaderWord,
            marginTop: '-0.3em',
            marginLeft: '5em',
            fontWeight: 400,
            fontSize: 'clamp(8px, 1.8vw, 20px)',
            letterSpacing: '0.22em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55em',
            justifyContent: 'center',
          }}
        >
          <span style={{ opacity: 0.85 }}>—</span>
          <span className="uppercase">International</span>
          <span style={{ opacity: 0.85 }}>—</span>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
