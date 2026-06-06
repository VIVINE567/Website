'use client';

import { useRef, useEffect } from 'react';
import { motion, animate } from 'motion/react';
import S from '../styles/preloader';

const LETTERS = [
  { char: 'V', id: 'v1' },
  { char: 'I', id: 'i1' },
  { char: 'V', id: 'v2' },
  { char: 'I', id: 'i2' },
  { char: 'N', id: 'n1' },
  { char: 'E', id: 'e1' },
];
// delay per letter index before its gold flash (ball lands order: E→N→I→V→I→V)
const LETTER_DELAY = [1.75, 1.4, 1.05, 0.7, 0.35, 0];
const CYCLE = 2.75;
const PEAK = 44;
const HOP = 0.35;
const HOLD = 0.5;
const RETURN = 0.5;

const Preloader = () => {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const ballRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !ballRef.current) return;

    const cr = containerRef.current.getBoundingClientRect();
    const cx = cr.width / 2;

    // x center of each letter relative to the container's horizontal center
    const xPos = letterRefs.current.map(el => {
      const r = el.getBoundingClientRect();
      return r.left - cr.left + r.width / 2 - cx;
    });

    // Build keyframes: bounce E(5)→N(4)→I(3)→V(2)→I(1)→V(0), hold, arc back to E(5)
    const xKF = [xPos[5]];
    const yKF = [0];
    const tKF = [0];
    let t = 0;

    for (let i = 5; i > 0; i--) {
      t += HOP / 2;
      xKF.push((xPos[i] + xPos[i - 1]) / 2);
      yKF.push(-PEAK);
      tKF.push(t / CYCLE);

      t += HOP / 2;
      xKF.push(xPos[i - 1]);
      yKF.push(0);
      tKF.push(t / CYCLE);
    }

    // Hold at V(0): same position, later time
    t += HOLD;
    xKF.push(xPos[0]);
    yKF.push(0);
    tKF.push(t / CYCLE);

    // Big return arc: V(0) → apex → E(5)
    t += RETURN / 2;
    xKF.push((xPos[0] + xPos[5]) / 2);
    yKF.push(-PEAK * 1.8);
    tKF.push(t / CYCLE);

    xKF.push(xPos[5]);
    yKF.push(0);
    tKF.push(1);

    const ctrl = animate(
      ballRef.current,
      { x: xKF, y: yKF, opacity: new Array(xKF.length).fill(1) },
      { duration: CYCLE, times: tKF, repeat: Infinity, ease: 'easeInOut' }
    );

    return () => ctrl.stop();
  }, []);

  return (
    <motion.div data-component="Preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      style={S.preloaderBg}
      className="fixed inset-0 z-preloader flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={S.preloaderGlow}
        className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="relative z-10">
        <div ref={containerRef} className="relative flex items-end gap-3">
          {LETTERS.map(({ char, id }, i) => (
            <motion.span
              key={id}
              ref={el => { letterRefs.current[i] = el; }}
              animate={{ color: ['var(--forest)', 'var(--gold)', 'var(--forest)'] }}
              transition={{
                duration: 0.32,
                repeat: Infinity,
                repeatDelay: CYCLE - 0.32,
                delay: LETTER_DELAY[i],
                ease: 'easeInOut',
              }}
              className="text-5xl md:text-6xl font-semibold"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {char}
            </motion.span>
          ))}

          {/* Gold ball — positioned at container center, x-shifted by animate() */}
          <div
            ref={ballRef}
            style={{
              position: 'absolute',
              top: -20,
              left: '50%',
              marginLeft: -7,
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #f0d87a, var(--gold))',
              boxShadow: '0 2px 10px rgba(201,168,76,0.8), 0 0 6px rgba(201,168,76,0.4)',
              opacity: 0,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
