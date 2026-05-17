/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { COLORS } from './colors';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  DollarSign, 
  Truck, 
  Headset, 
  Settings, 
  Play,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const NavLink = ({ href, children, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDefaultPage = href === '#' || href === '' || !href;

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={isDefaultPage ? `/${children.toLowerCase().replace(/\s+/g, '-')}` : href}
        style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--forest)', letterSpacing: '0.12em' }}
        className="nav-ripple flex items-center gap-1 py-4 text-xs font-medium transition-colors uppercase"
      >
        {children}
        {subItems && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>
      
      {subItems && (
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 w-64 glass-dropdown z-dropdown"
            >
              {subItems.map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="block px-6 py-2 text-sm text-brand-primary/70 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Logo = ({ className = "h-16 md:h-20" }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="/vivine_logo.png" 
      alt="VIVINE International" 
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

const BLOB_ANIMATION_1 = {
  scale: [1, 1.2, 1],
  rotate: [0, 90, 180, 270, 360],
  borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
};

const BLOB_ANIMATION_2 = {
  scale: [1, 1.1, 1],
  rotate: [180, 270, 360, 90, 180],
  borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
};

const PARTICLE_VARIANTS = {
  animate: (i) => ({
    y: [0, -100, 0],
    x: [0, i % 2 === 0 ? 15 : -15, 0],
    opacity: [0, 0.5, 0],
  }),
};

const Preloader = () => {
  const tagWords = "Advancing Hydrocolloid Science".split(" ");
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
      style={{ background: 'var(--cream)' }}
      className="fixed inset-0 z-preloader flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient gold radial glow */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.2) 0%, rgba(44,58,35,0.06) 50%, transparent 70%)' }}
        className="absolute w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full blur-[80px] pointer-events-none"
      />

      <div className="flex flex-col items-center relative z-10">
        <motion.div
           initial={{ scale: 0.8, opacity: 0, filter: "blur(20px)", rotate: -180 }}
           animate={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1], filter: ["blur(20px)", "blur(0px)", "blur(0px)"], rotate: [-180, 0, 360] }}
           transition={{ duration: 2.5, ease: "easeInOut" }}
           className="mb-12"
        >
           <Logo className="h-24 md:h-32 drop-shadow-2xl" />
        </motion.div>

        {/* Gold line reveal */}
        <div className="w-48 md:w-64 h-[1px] relative flex justify-center mt-2 overflow-hidden" style={{ background: 'rgba(201,168,76,0.15)' }}>
          <motion.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%", opacity: [1, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "circInOut" }}
            className="absolute inset-y-0 h-full"
            style={{ background: 'var(--gold)' }}
          />
        </div>

        {/* Text word-by-word reveal */}
        <div className="mt-8 flex gap-2 md:gap-3">
          {tagWords.map((word, idx) => (
            <motion.span
              key={idx}
              initial={{ y: 10, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6 + idx * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ color: 'var(--gold-dark)', fontFamily: "'Raleway', sans-serif" }}
              className="text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const PageContent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/home" element={<HomeContent />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </main>
  );
};

const DefaultPage = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-brand-bg-dark text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <Logo className="h-16 md:h-20 mb-8 mx-auto" />
        </Link>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{pageName || 'Page Not Found'}</h1>
        <p className="max-w-2xl text-white/70 text-lg md:text-xl mb-10 leading-relaxed mx-auto">
          Information about our {pageName} will be available soon. Please contact our technical support team for immediate assistance or more details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary py-3 px-8 rounded-full">Return Home</Link>
          <a href="mailto:contact@vivine.com" className="btn-white py-3 px-8 rounded-full">Contact Support</a>
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on mount
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      
      {!loading && (
        <>
          {/* Navigation */}
          <nav className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
            isScrolled ? 'shadow-md py-2' : 'glass-blur-md py-4'
          }`} style={{ background: isScrolled ? 'var(--cream)' : 'rgba(245,238,224,0.92)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Logo className="h-16 md:h-20 lg:h-[84px]" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#" subItems={['Agar-agar', 'Carrageenan', 'Sodium Alginate', 'Pectin', 'Xanthan Gum', 'Guar Gum']}>Products</NavLink>
            <NavLink href="#" subItems={['Food Industry', 'Pharmaceutical', 'Personal Care', 'Technical Applications']}>Applications</NavLink>
            <NavLink href="#">Services</NavLink>
            <NavLink href="#">News & Insights</NavLink>
            <NavLink href="#">Contact</NavLink>
            
            <button className="btn-gold py-2.5 rounded-full text-sm flex items-center justify-center gap-2" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.1em' }}>
              More Information
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-mobile lg:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              <Link to="/home" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Home</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">About</Link>
              <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Products</Link>
              <Link to="/applications" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Applications</Link>
              <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Services</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand-primary">Contact</Link>
              <button className="bg-brand-primary text-white py-4 rounded-xl">Request a Quote</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageContent />

      {/* Footer */}
      <footer className="pt-24 pb-12" style={{ background: '#E2D5C3', color: 'var(--forest)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
            >
              <Link to="/" className="inline-block mb-8">
                <Logo className="h-12" />
              </Link>
              <p style={{ color: 'var(--brown-warm)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }} className="mb-8 leading-relaxed">
                Leading Hydrocolloid and Stabilizer Solution Provider.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 rounded-lg transition-colors" style={{ background: 'rgba(44,58,35,0.08)', color: 'var(--forest)' }}><Linkedin size={18} /></a>
                <a href="#" className="p-2 rounded-lg transition-colors" style={{ background: 'rgba(44,58,35,0.08)', color: 'var(--forest)' }}><Twitter size={18} /></a>
                <a href="#" className="p-2 rounded-lg transition-colors" style={{ background: 'rgba(44,58,35,0.08)', color: 'var(--forest)' }}><Mail size={18} /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-8 uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>Useful Links</h4>
              <ul className="space-y-4" style={{ color: 'var(--brown-warm)' }}>
                 <li><Link to="/home" className="transition-colors hover:opacity-70">Home</Link></li>
                <li><Link to="/about" className="transition-colors hover:opacity-70">About Us</Link></li>
                <li><Link to="/products" className="transition-colors hover:opacity-70">Products Portfolio</Link></li>
                <li><Link to="/applications" className="transition-colors hover:opacity-70">Applications</Link></li>
                <li><Link to="/contact" className="transition-colors hover:opacity-70">Contact Support</Link></li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-8 uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: 'var(--gold-dark)', fontSize: '0.8rem', letterSpacing: '0.2em' }}>Products</h4>
              <ul className="space-y-4" style={{ color: 'var(--brown-warm)' }}>
                 <li><Link to="/alginates" className="transition-colors hover:opacity-70">Alginates</Link></li>
                <li><Link to="/celluloses" className="transition-colors hover:opacity-70">Celluloses</Link></li>
                <li><Link to="/carrageenan-gum" className="transition-colors hover:opacity-70">Carrageenan Gum</Link></li>
                <li><Link to="/xanthan-gum" className="transition-colors hover:opacity-70">Xanthan Gum</Link></li>
                <li><Link to="/gellan-gum" className="transition-colors hover:opacity-70">Gellan Gum</Link></li>
              </ul>
            </motion.div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm" style={{ borderTop: '1px solid rgba(154,122,46,0.3)', color: 'var(--brown-warm)' }}>
            <p>© 2026 VIVINE International. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:opacity-70 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:opacity-70 transition-colors">Terms of Service</a>
              <a href="#" className="hover:opacity-70 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
        </>
      )}
    </div>
  );
}

const HomeContent = () => {
  return (
    <>
      <section className="relative hero-height flex items-center pt-20 overflow-hidden luxury-section-radial">
        {/* Slanted Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 w-[75%] h-full"
            style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
          >
             <img 
              src="/back_image.png" 
              alt="Ingredients" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/30 mix-blend-multiply" />
          </div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--gold)', letterSpacing: '0.3em' }}
                  className="text-xs md:text-sm font-medium mb-6 uppercase flex items-center gap-3"
                >
                  <span style={{ display: 'inline-block', width: 30, height: 1, background: 'var(--gold)' }} />
                  100% Vegan · Plant-Based
                  <span style={{ display: 'inline-block', width: 30, height: 1, background: 'var(--gold)' }} />
                </motion.span>

                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream)', fontWeight: 300, lineHeight: 1.2 }}
                  className="text-4xl md:text-6xl mb-8 max-w-4xl text-center">
                  Global Leader in <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Hydrocolloid</em> Ingredients &amp; Customized Solutions
                </h1>
                
                <p style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream-dark)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8 }}
                  className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed text-center opacity-90">
                  As a trusted hydrocolloid supplier and solution provider, we bring extensive expertise in the research,
                  development, and application of hydrocolloids. Our team delivers innovative, high-performance
                  stabilizer systems tailored to meet diverse industry requirements.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button className="btn-gold px-10 py-3 rounded-md active:scale-95" style={{ fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em', fontSize: '0.75rem' }}>
                    Get a Quote
                  </button>
                  <button style={{ border: '1px solid rgba(201,168,76,0.5)', color: 'var(--cream)', fontFamily: "'Raleway', sans-serif", letterSpacing: '0.15em', fontSize: '0.75rem', background: 'transparent' }}
                    className="px-10 py-3 rounded-md font-medium uppercase hover:bg-white/10 transition-all active:scale-95">
                    Explore More
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:flex flex-col items-center justify-center h-full"
              >
                <div className="relative p-2 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl max-h-[550px] overflow-hidden">
                  <img 
                    src="/powder_product.png" 
                    alt="Powder Product" 
                    className="rounded-xl w-full h-full object-cover shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="mt-4 text-brand-primary italic text-sm font-medium tracking-wide">
                  Vegan Hydrocolloids - Power to the Plant!
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Leader Introduction */}
        <section className="py-24 overflow-hidden" style={{ background: 'var(--cream-dark)', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="gold-eyebrow mb-6">Our Expertise</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--forest)', fontWeight: 400, lineHeight: 1.2 }}
              className="text-3xl md:text-5xl mb-6"
            >
              Global Leader in <em style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>Hydrocolloid</em> Ingredients
            </motion.h2>
            <div className="gold-divider my-6" />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--brown-warm)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.9 }}
              className="text-xl leading-relaxed"
            >
              As a trusted hydrocolloid supplier and solution provider, we bring extensive expertise in the research,
              development, and application of hydrocolloids. Our team delivers innovative, high-performance
              stabilizer systems tailored to meet diverse industry requirements.
            </motion.p>
          </div>
        </section>

        {/* Core Values / Features */}
        <section className="py-20 overflow-hidden" style={{ background: 'var(--cream)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: DollarSign, title: "Competitive Price", desc: "Get better purchasing rates to reduce your costs." },
                { icon: Truck, title: "Safe & On-Time Delivery", desc: "We offer you the best safe & prompt delivery options." },
                { icon: Headset, title: "24/7 Online Support", desc: "Vivine is always here to support your business." },
                { icon: Settings, title: "Customized Solutions", desc: "Product Development & Solutions expertise." }
              ].map((item, id) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: id * 0.1 }}
                  className="standard-card group text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors"
                    style={{ background: 'rgba(201,168,76,0.12)' }}>
                    <item.icon className="w-8 h-8 transition-colors" style={{ color: 'var(--gold-dark)' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.9rem', letterSpacing: '0.1em', color: 'var(--forest)' }}>{item.title}</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brown-warm)', fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <section className="py-24 overflow-hidden" style={{ background: 'var(--cream)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-center mb-20"
            >
              <div className="gold-eyebrow mb-6">Our Portfolio</div>
              <h2 style={{ fontFamily: "'Cinzel', serif", color: 'var(--forest)', letterSpacing: '0.12em', fontWeight: 600 }}
                className="text-3xl md:text-4xl">VIVINE'S PRODUCTS</h2>
              <div className="gold-divider mt-6" />
            </motion.div>

            <div className="product-grid-container">
              {/* Row 1: Hydrocolloid Gums */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="product-text-block rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="product-title">Hydrocolloid Gums</h3>
                  <div className="product-separator" />
                  <p className="product-desc">
                    VIVINE International supplies high-quality hydrocolloid gums designed to improve texture, viscosity,
                    stability, suspension, and mouthfeel across food and industrial applications. 
                  </p>
                  <p className="product-tags">
                    Our premium product range includes Alginates, Celluloses, Carrageenan Gum, Locust Bean Gum,
                    Pectin, Gellan Gum, Xanthan Gum, Guar Gum, Konjac Gum, Flaxseed Gum, Gum Acacia and more —
                    developed to deliver consistent performance and superior product quality. 
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.7 }}
                  className="relative overflow-hidden rounded-3xl shadow-xl bg-white flex items-center justify-center p-2"
                >
                  <img src="/products.png" className="w-full h-auto max-h-[500px] object-contain hover:scale-105 transition-transform duration-700 rounded-2xl" alt="Hydrocolloid Gums Products" referrerPolicy="no-referrer" />
                </motion.div>
              </motion.div>

              {/* Row 2: Food Stabilizers */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.7 }}
                  className="order-2 lg:order-1 relative overflow-hidden rounded-3xl shadow-xl bg-white flex items-center justify-center p-2"
                >
                  <img src="/product_2.png" className="w-full h-auto max-h-[500px] object-contain hover:scale-105 transition-transform duration-700 rounded-2xl" alt="Stabilizers" referrerPolicy="no-referrer" />
                </motion.div>
                <div className="product-text-block order-1 lg:order-2 rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="product-title">Food Stabilizers (Blends & Systems)</h3>
                  <div className="product-separator" />
                  <p className="product-desc">
                   We provide customized food stabilizer blends and systems developed to enhance texture,
                    emulsification, stability, and overall product performance.
                  </p>
                  <p className="product-tags">
                    Our stabilizer solutions are widely used in Dairy, Beverages, Pet Food, Confectionery, Jelly, Sauces,
                    Meat Products, Bakery, and Plant-Based Foods, helping manufacturers achieve better consistency
                    and processing efficiency
                  </p>
                </div>
              </motion.div>

              {/* Row 3: Customized Solutions */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className="product-text-block rounded-3xl shadow-sm border border-slate-100">
                  <h3 className="product-title">Customized Solutions</h3>
                  <div className="product-separator" />
                  <p className="product-desc">
                    At VIVINE International, our technical experts develop tailor-made hydrocolloid and stabilizer
                    solutions based on your product and processing requirements. 
                  </p>
                  <p className="product-tags">
                    We help optimize texture, improve stability, reduce production costs, and deliver reliable product
                    performance for food, pharmaceutical, cosmetic, and industrial applications. 
                  </p>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.7 }}
                  className="relative overflow-hidden bg-white rounded-3xl shadow-xl flex items-center justify-center p-2 group"
                >
                  <img 
                    src="/product_3.png" 
                    className="w-full h-auto max-h-[500px] object-contain group-hover:scale-105 transition-transform duration-700 rounded-2xl" 
                    alt="Customized Solutions Plate" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-brand-primary/5 flexitems-center justify-center pointer-events-none rounded-3xl" />
                  <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none">
                    <span className="bg-white/90 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-brand-primary shadow-lg backdrop-blur-sm pointer-events-auto">Tailor-Made Systems</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="btn-outline-primary">
                More Products
              </button>
            </div>
          </div>
        </section>

        {/* Video / About Section */}
        <section className="py-24 overflow-hidden luxury-section-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream)', fontWeight: 300, lineHeight: 1.2 }}
                className="text-4xl mb-4">India's Best <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Vegan</em> Hydrocolloid Supplier</h2>
              <p style={{ fontFamily: "'Raleway', sans-serif", color: 'var(--gold)', letterSpacing: '0.2em', fontSize: '0.7rem' }}
                className="mb-8 uppercase">10+ Years of Experience As A Player In The Hydrocolloid World</p>
              <div className="space-y-8 mb-10">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-6"
                >
                  <div className="p-4 rounded-2xl shadow-md shrink-0 self-start" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <Globe className="w-8 h-8" style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--cream)', fontSize: '0.9rem', letterSpacing: '0.08em' }}>Global Rich Experience</p>
                    <p style={{ color: 'var(--cream-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8, opacity: 0.85 }}>Vivine has rich experience supplying various kinds of high-quality hydrocolloids and Food Stabilizers from India to global markets.</p>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex gap-6"
                >
                  <div className="p-4 rounded-2xl shadow-md shrink-0 self-start" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <Truck className="w-8 h-8" style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: 'var(--cream)', fontSize: '0.9rem', letterSpacing: '0.08em' }}>Efficient Logistics</p>
                    <p style={{ color: 'var(--cream-dark)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, lineHeight: 1.8, opacity: 0.85 }}>We provide international delivery with competitive rates and professional service to ensure your products arrive on time.</p>
                  </div>
                </motion.div>
              </div>
              <button className="btn-primary">
                Explore More
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary-overlay rounded-huge blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative aspect-video bg-slate-900 rounded-large overflow-hidden flex items-center justify-center shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306dca665?auto=format&fit=crop&q=80&w=1200" 
                  alt="Lab Video Placeholder" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <button className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark))' }}>
                  <Play className="w-10 h-10 text-white fill-current translate-x-1" />
                </button>
                <div className="absolute bottom-6 left-6 text-white text-left">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Watch Corporate Video</p>
                  <p className="text-lg">VIVINE'S Vision & Quality Control</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
              className="bg-brand-primary banner-box rounded-3xl overflow-hidden shadow-2xl relative"
            >
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542831371-d53733020612?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
               <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
                 <motion.div
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: false, amount: 0.1 }}
                   transition={{ duration: 0.8, delay: 0.2 }}
                 >
                    <h2 className="text-3xl font-bold mb-6 italic text-white">"Hydrocolloids are Used in Technical and Regulated Applications to Thicken and to Stabilize Formulations."</h2>
                    <p className="text-xl text-white/80 mb-10 leading-relaxed">
                      Our sales & technical support team can assist you to determine the most effective hydrocolloid to
                      meet your various needs, not only in the Food, Technical, and Pharmaceutical Industries but also in
                      the Personal Care & Allied Industries. 
                    </p>
                    <button className="btn-white">
                      More Applications
                    </button>
                 </motion.div>
                 <div className="grid grid-cols-2 gap-4">
                    {['Food Industry', 'Pharmaceutical', 'Technical', 'Personal Care'].map((app, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                        key={app} 
                        className="glass-card p-1 min-[375px]:p-2 sm:p-4 lg:p-8 border-white/20 text-center hover:bg-white/20 transition-all rounded-xl cursor-default text-white flex items-center justify-center min-h-[90px] min-[375px]:min-h-[100px] sm:min-h-[120px] md:min-h-[140px] xl:min-h-[160px] overflow-hidden"
                      >
                        <span className="text-[10px] min-[370px]:text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold uppercase tracking-tight sm:whitespace-nowrap whitespace-normal w-full px-1 sm:px-2">{app}</span>
                      </motion.div>
                    ))}
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 overflow-hidden luxury-section-radial" style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}>
           <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <div className="gold-eyebrow mb-8" style={{ color: 'var(--gold)', justifyContent: 'center' }}>Our Mission</div>
              <motion.h2
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream)', fontWeight: 300, lineHeight: 1.3 }}
                className="text-4xl md:text-6xl mb-8"
              >
                "Hydrocolloid, for <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Affordable</em> and Sustainable Food Solutions."
              </motion.h2>
              <div className="gold-divider my-8" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--cream-dark)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.9, opacity: 0.85 }}
                className="text-xl mb-12 max-w-3xl mx-auto"
              >
               As one hydrocolloid supplier, and exporter in India, we're always dedicated to providing you with
                label-friendly and cost-effective Hydrocolloid Gums & Stabilizers, which could boost mouthfeel,
                stabilization, and suspension performance in a wide range of end-use applications.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/contact"
                  className="btn-gold inline-block px-12 py-5 rounded-full hover:scale-105 active:scale-95 transition-all"
                  style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.15em', fontSize: '0.85rem', boxShadow: '0 12px 40px rgba(201,168,76,0.4)' }}
                >
                  Get Free Samples Today
                </Link>
              </motion.div>
           </div>
        </section>
    </>
  );
};
