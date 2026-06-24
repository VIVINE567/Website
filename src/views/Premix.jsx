import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PREMIX_PRODUCTS, PREMIX_CATEGORIES, PREMIX_STATS,
  PREMIX_FEATURES, PREMIX_WHY, CAT_GRADIENTS, TAG_COLORS,
} from '../data/premixData';

/* ── category accent colors that harmonise with the Vivine palette ── */
const CAT_ACCENT = {
  waffle:  '#B8860B', cone: '#8B6914', pancake: '#9A4E2A',
  cake:    '#8B3A52', churro: '#7A5A00', crepe: '#3A6A2A',
  other:   '#5A2A7A', frostex: '#0A4A6E', kulfex: '#7A4E00',
  shakex:  '#7A1A60', lollex: '#0A5A2A', cafex:  '#5C3010',
};

/* ═══════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════ */
function PremixHero() {
  return (
    <section
      className="luxury-section-radial relative flex items-end overflow-hidden"
      style={{ minHeight: '100vh', padding: '0 5rem 5rem' }}
    >
      {/* subtle gold shimmer overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 65% 55% at 72% 38%, rgba(201,168,76,0.22) 0%, transparent 65%),
          radial-gradient(ellipse 45% 65% at 18% 82%, rgba(134,110,84,0.14) 0%, transparent 55%)`,
      }} />

      {/* hero banner image */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'url(/premix-hero-banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.35,
      }} />

      <motion.div
        className="relative z-10"
        style={{ maxWidth: 560 }}
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Cinzel eyebrow — matches site pattern */}
        <span className="gold-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '1.75rem' }}>
          VIVINE FOODS · Crafted Premixes
        </span>

        <h1 style={{
          fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(40px, 5.5vw, 72px)',
          fontWeight: 100, lineHeight: 1.08,
          color: 'var(--cream)', marginBottom: '1.5rem',
          letterSpacing: '0.02em',
        }}>
          Crafted for <br />
          <em style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif", fontStyle: 'normal', color: 'var(--gold)', fontWeight: 200, fontSize: '1.08em' }}>
            Taste,
          </em>{' '}
          Built for Scale
        </h1>

        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 15, fontWeight: 300, lineHeight: 1.8,
          color: 'rgba(245,238,224,0.65)', maxWidth: 440, marginBottom: '2.5rem',
        }}>
          Discover our range of premium eggless premixes — waffles, pancakes, cakes, churros, crepes, and more. Every premix is crafted for exceptional taste, consistent results, and effortless preparation.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <div className="flex flex-col">
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 13, fontWeight: 600, color: 'var(--cream)', letterSpacing: '0.04em' }}>Vivek Kolekar</span>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 300, letterSpacing: '.18em', color: 'rgba(245,238,224,0.45)', textTransform: 'uppercase' }}>Founder, VIVINE FOODS</span>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-wrap">
          <a href="#premix-products" className="btn-gold no-underline inline-block"
            style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: '.2em', padding: '14px 38px', borderRadius: 3 }}>
            Explore Products
          </a>
          <a href="#premix-contact" className="no-underline flex items-center gap-2"
            style={{ fontFamily: "'Raleway', sans-serif", color: 'rgba(245,238,224,0.5)', fontSize: 11, letterSpacing: '.15em', textTransform: 'uppercase' }}>
            Contact Us <span style={{ fontSize: 16 }}>↓</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <div className="flex justify-center flex-wrap" style={{ background: 'var(--gold)' }}>
      {PREMIX_STATS.map((s, i) => (
        <div key={i} className="flex-1 text-center"
          style={{
            maxWidth: 280, padding: '1.75rem 2rem',
            borderRight: i < PREMIX_STATS.length - 1 ? '1px solid rgba(28,25,21,0.14)' : 'none',
          }}>
          <span style={{
            fontFamily: "'Cinzel', serif",
            fontSize: 30, fontWeight: 700, color: 'var(--forest)',
            display: 'block', marginBottom: 4,
          }}>{s.num}</span>
          <span style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 10, fontWeight: 500, letterSpacing: '.18em',
            textTransform: 'uppercase', color: 'rgba(28,25,21,0.65)',
          }}>
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ABOUT STRIP
   ═══════════════════════════════════════════════════ */
function AboutStrip() {
  return (
    <section id="premix-about" className="flex items-center justify-between gap-16 flex-wrap"
      style={{ background: 'var(--cream)', padding: '5rem' }}>
      <div style={{ flex: 1, minWidth: 280 }}>
        <span className="gold-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '1.25rem' }}>
          Who We Are
        </span>
        <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(26px, 3vw, 38px)',
          fontWeight: 600, lineHeight: 1.2,
          marginBottom: '1.25rem', color: 'var(--forest)',
          letterSpacing: '0.02em',
        }}>
          Premixes Crafted with<br />
          <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>
            Purpose and Passion
          </em>
        </h2>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 14, fontWeight: 300, lineHeight: 1.85, color: 'var(--brown-warm)', maxWidth: 460,
        }}>
          VIVINE FOODS is a premium food premix company founded by Vivek Kolekar, built on the belief that great taste should never require compromise. Our entire range is 100% eggless — designed for cafes, restaurants, cloud kitchens, and home bakers who demand consistent quality and effortless preparation every single time.
        </p>
      </div>
      <div className="premix-feature-grid grid grid-cols-2 gap-5" style={{ flex: 1, minWidth: 260 }}>
        {PREMIX_FEATURES.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, rotateY: 5, rotateX: -3 }}
            className="feature-card-animated group relative text-center"
            style={{ perspective: '1000px' }}
          >
            <span className="corner-accent corner-tl" />
            <span className="corner-accent corner-br" />
            <span className="feature-card-number">0{i + 1}</span>

            <div
              className="feature-card-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(201,168,76,0.12)', border: '10px solid rgba(201,168,76,0.25)', fontSize: 22 }}
            >
              {f.icon}
            </div>

            <h3 className="font-bold mb-4 feature-card-title" style={{ fontFamily: "'Cinzel', serif", fontSize: '1.2rem', letterSpacing: '0.1em' }}>
              {f.title}
            </h3>
            <div className="w-10 h-[1px] mx-auto mb-4" style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)' }} />
            <p className="leading-relaxed feature-card-desc" style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   PRODUCT GRID + CATEGORY TABS
   ═══════════════════════════════════════════════════ */
function ProductsGrid() {
  const [activeCat, setActiveCat] = useState('all');

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && PREMIX_CATEGORIES.some(c => c.key === hash)) {
        setActiveCat(hash);
        setTimeout(() => {
          const el = document.getElementById('premix-products');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const filtered = activeCat === 'all'
    ? PREMIX_PRODUCTS
    : PREMIX_PRODUCTS.filter(p => p.cat === activeCat);

  return (
    <section id="premix-products" className="px-4 py-16 md:px-16 md:py-20 md:pb-24" style={{ background: 'var(--cream-dark)' }}>
      <div className="text-center" style={{ marginBottom: '3.5rem' }}>
        <span className="gold-eyebrow" style={{ marginBottom: '1rem' }}>Our Products</span>
        <div className="gold-divider" style={{ margin: '1rem auto 1.5rem' }} />
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(28px, 3.5vw, 48px)',
          fontWeight: 600, marginBottom: '1rem', color: 'var(--forest)',
          letterSpacing: '0.03em',
        }}>
          The Complete Premix Collection
        </h2>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 14, fontWeight: 300, color: 'var(--brown-warm)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75,
        }}>
          From Belgian waffles to artisan cold coffee — every product is formulated for consistent perfection, batch after batch.
        </p>
      </div>

      {/* Category tabs — matches site's btn-outline-primary pattern */}
      <div className="flex gap-2 justify-center flex-wrap" style={{ marginBottom: '3rem' }}>
        {PREMIX_CATEGORIES.map(c => (
          <button
            key={c.key}
            onClick={() => setActiveCat(c.key)}
            style={{
              fontFamily: "'Raleway', sans-serif",
              padding: '8px 20px', fontSize: 10, fontWeight: 600,
              letterSpacing: '.18em', textTransform: 'uppercase',
              border: '1px solid',
              borderColor: activeCat === c.key ? 'var(--forest)' : 'rgba(201,168,76,0.4)',
              background: activeCat === c.key ? 'var(--forest)' : 'transparent',
              color: activeCat === c.key ? 'var(--cream)' : 'var(--brown-warm)',
              cursor: 'pointer', borderRadius: 3,
              transition: 'all .2s',
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => {
            const tagC = TAG_COLORS[p.cat] || TAG_COLORS.other;
            const accent = CAT_ACCENT[p.cat] || 'var(--forest)';
            return (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, delay: i * 0.025 }}
                className="group overflow-hidden cursor-pointer rounded-xl"
                style={{ background: 'var(--cream)', border: '1px solid rgba(201,168,76,0.15)' }}
              >
                {/* Image area */}
                <div className="relative w-full flex items-center justify-center"
                  style={{
                    aspectRatio: '4/3',
                    background: CAT_GRADIENTS[p.cat] || CAT_GRADIENTS.other,
                    fontSize: 80,
                    overflow: 'hidden',
                    transition: 'transform 0.5s ease',
                  }}>
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, transition: 'transform 0.5s ease' }}
                      className="group-hover:scale-110"
                    />
                  ) : (
                    <span style={{ transition: 'transform 0.5s ease', display: 'block' }}
                      className="group-hover:scale-110">
                      {p.emoji}
                    </span>
                  )}
                  {/* gold shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(to top, rgba(44,58,35,0.8) 0%, rgba(44,58,35,0) 55%)' }} />
                  {/* accent bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0"
                    style={{ height: 3, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, opacity: 0.6 }} />
                </div>

                {/* Info */}
                <div style={{
                  padding: '1.25rem 1.25rem 1.5rem',
                  borderTop: `2px solid transparent`,
                  borderBottom: '1px solid rgba(201,168,76,0.12)',
                  transition: 'border-color 0.3s',
                }}>
                  {/* tag badge */}
                  <span style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 8, fontWeight: 600, letterSpacing: '.22em',
                    textTransform: 'uppercase', marginBottom: 8,
                    display: 'inline-block', padding: '3px 10px',
                    borderRadius: 2,
                    background: tagC.bg, color: tagC.color,
                    border: `1px solid ${tagC.color}22`,
                  }}>
                    {p.tag}
                  </span>

                  {/* gold separator */}
                  <div style={{
                    width: 28, height: 1,
                    background: 'linear-gradient(to right, var(--gold), transparent)',
                    margin: '6px 0 8px',
                  }} />

                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 13, fontWeight: 600, lineHeight: 1.35,
                    color: 'var(--forest)', marginBottom: 8, letterSpacing: '0.02em',
                  }}>
                    {p.name}
                  </div>
                  <div style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11.5, fontWeight: 300, lineHeight: 1.65,
                    color: 'var(--brown-warm)',
                  }}>
                    {p.desc}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   WHY VIVINE FOODS
   ═══════════════════════════════════════════════════ */
function FeaturedSection() {
  return (
    <section className="luxury-section-dark grid md:grid-cols-2 gap-16 items-center"
      style={{ padding: '5rem' }}>
      <div>
        <span className="gold-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '1.25rem' }}>
          Why VIVINE FOODS
        </span>
        <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(26px, 3vw, 42px)',
          fontWeight: 600, color: 'var(--cream)',
          lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '0.02em',
        }}>
          Premium Ingredients.{' '}
          <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold)', fontWeight: 400 }}>
            Unforgettable
          </em>{' '}Results.
        </h2>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 14, fontWeight: 300, lineHeight: 1.85,
          color: 'rgba(245,238,224,0.6)', marginBottom: '2.5rem',
        }}>
          Every VIVINE FOODS premix is developed to deliver commercial-grade consistency — whether you are running a single café or a large-scale production kitchen.
        </p>

        <div className="flex flex-col gap-5" style={{ marginBottom: '2.5rem' }}>
          {PREMIX_WHY.map((w, i) => (
            <div key={i} className="flex gap-4 items-start"
              style={{ paddingBottom: '1.25rem', borderBottom: i < PREMIX_WHY.length - 1 ? '1px solid rgba(201,168,76,0.12)' : 'none' }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{w.icon}</span>
              <div>
                <strong style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 11, fontWeight: 600, color: 'var(--cream)',
                  display: 'block', marginBottom: 4, letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>{w.title}</strong>
                <span style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 12, fontWeight: 300, color: 'rgba(245,238,224,0.5)', lineHeight: 1.6,
                }}>{w.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <a href="#premix-contact" className="btn-gold no-underline inline-block"
          style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: '.2em', padding: '14px 38px', borderRadius: 3 }}>
          Request Samples
        </a>
      </div>

      {/* Visual grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-px rounded overflow-hidden"
        style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
        {['🧇','🍦','🥞','🍰'].map((e, i) => (
          <div key={i} className="flex items-center justify-center"
            style={{
              aspectRatio: '1', fontSize: 64,
              background: i % 2 === 0 ? 'rgba(201,168,76,0.1)' : 'rgba(44,58,35,0.6)',
            }}>
            {e}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CTA / CONTACT
   ═══════════════════════════════════════════════════ */
function CtaContact() {
  return (
    <section id="premix-contact"
      className="flex items-center justify-between gap-12 flex-wrap"
      style={{ background: 'var(--cream)', padding: '5rem' }}>
      <div style={{ flex: 1, minWidth: 280 }}>
        <span className="gold-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '1rem' }}>
          Get In Touch
        </span>
        <div className="gold-divider" style={{ margin: '0 0 1.5rem 0' }} />
        <h2 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(24px, 3vw, 40px)',
          fontWeight: 600, lineHeight: 1.2,
          color: 'var(--forest)', marginBottom: '1rem', letterSpacing: '0.02em',
        }}>
          Ready to Bring{' '}
          <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--gold)', fontWeight: 400 }}>
            Premium Premixes
          </em>{' '}to Your Menu?
        </h2>
        <p style={{
          fontFamily: "'Raleway', sans-serif",
          fontSize: 14, fontWeight: 300, color: 'var(--brown-warm)', maxWidth: 400, lineHeight: 1.8,
        }}>
          Contact VIVINE FOODS for bulk pricing, sample requests, product catalogues, and custom formulation enquiries. We supply cafes, cloud kitchens, restaurants, and retail brands across India.
        </p>
      </div>
      <div className="flex flex-col gap-5 items-start">
        <div className="flex gap-10 flex-wrap">
          {[['Founder', 'Vivek Kolekar'], ['Brand', 'VIVINE FOODS'], ['Supply', 'Bulk · Retail · Private Label']].map(([label, val]) => (
            <div key={label} className="flex flex-col gap-1">
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>{label}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 400, color: 'var(--forest)' }}>{val}</span>
            </div>
          ))}
        </div>
        <a href="mailto:info@vivinefoods.com" className="btn-primary no-underline inline-block"
          style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, letterSpacing: '.2em', padding: '14px 38px', borderRadius: 3 }}>
          Send an Enquiry
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */
export default function Premix() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: 'var(--cream)' }}>
      <PremixHero />
      <StatsBar />
      <AboutStrip />
      <ProductsGrid />
      <FeaturedSection />
      <CtaContact />
    </div>
  );
}
