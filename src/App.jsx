/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import S from 'styles/nav';
import { CONTENT } from './content';
import Logo from './components/Logo';
import NavLink from './components/NavLink';
import Preloader from './components/Preloader';
import DefaultPage from './components/DefaultPage';
import InquirySection from './components/InquirySection';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetail from './views/ProductDetail';
import Applications from './views/Applications';
import About from './views/About';
import Services from './views/Services';
import Premix from './views/Premix';

const Cn = CONTENT.nav;

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isProductDetail = location.pathname.startsWith('/products/') && location.pathname !== '/products/';

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {(loading) && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
              isScrolled ? 'shadow-md py-1' : 'glass-blur-md py-2'
            }`}
            style={S.navBar(isScrolled)}
          >
            <div className="max-w-8xl mx-auto px-4 md:px-3 flex items-center justify-start gap-[20px]">
              <Link to="/" className="shrink-0">
                <Logo className="h-16 md:h-20 lg:h-[84px]" />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                {Cn.links.map((link) => (
                  <NavLink key={link.label} href={link.href} subItems={link.subItems}>
                    {link.label}
                  </NavLink>
                ))}
                <button className="btn-gold py-2.5 rounded-full text-sm flex items-center justify-center gap-2" style={S.navMoreBtn}>
                  {Cn.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="lg:hidden p-2" style={{ ...S.navMobileToggle, marginLeft: 'auto' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                className="fixed inset-0 z-mobile lg:hidden pt-24 px-6"
                style={S.navMobileOverlay}
              >
                <div className="flex flex-col gap-6 text-xl font-medium" style={S.navMobileLinks}>
                  {Cn.mobilePages.map((page) => (
                    <Link
                      key={page}
                      to={`/${page}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={S.navMobileLink}
                      className="capitalize hover:opacity-60 transition-opacity"
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </Link>
                  ))}
                  <button className="btn-gold py-4 rounded-xl">{Cn.mobileCta}</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Routes */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/premix" element={<Premix />} />
              <Route path="*" element={<DefaultPage />} />
            </Routes>
          </main>

          {!isProductDetail && <InquirySection />}
          <Footer />
          <ChatWidget />
        </>
      )}
    </div>
  );
}
