'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import S from '../src/styles/nav';
import { CONTENT } from '../src/content';
import Logo from '../src/components/Logo';
import NavLink from '../src/components/NavLink';
import Preloader from '../src/components/Preloader';
import InquirySection from '../src/components/InquirySection';
import Footer from '../src/components/Footer';
import ChatWidget from '../src/components/ChatWidget';
import QuoteModal from '../src/components/QuoteModal';

const Cn = CONTENT.nav;

export default function AppShell({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const pathname = usePathname();
  const isProductDetail = pathname.startsWith('/products/') && pathname !== '/products/';
  const isContact = pathname === '/contact';
  const [productsOpen, setProductsOpen] = useState(false);

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
    <div className="min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Navigation */}
          <nav
            className={`fixed top-0 left-0 right-0 z-nav transition-all duration-300 ${
              isScrolled ? 'shadow-md' : 'glass-blur-md'
            }`}
            style={S.navBar(isScrolled)}
          >
            <div className="max-w-8xl mx-auto md:px-3 flex items-center justify-between lg:justify-start gap-[20px]">
              <Link href="/" className="shrink-0">
                <Logo className="h-16 md:h-20 lg:h-[84px]" />
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-8">
                {Cn.links.map((link) => (
                  <NavLink key={link.label} href={link.href} subItems={link.subItems}>
                    {link.label}
                  </NavLink>
                ))}
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="btn-gold py-2.5 rounded-full text-sm flex items-center justify-center gap-2"
                  style={S.navMoreBtn}
                >
                  {Cn.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="lg:hidden p-2" style={S.navMobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
                <div className="flex flex-col gap-5 text-xl font-medium" style={S.navMobileLinks}>
  {Cn.mobilePages.map((page) => {
    const href = typeof page === "string" ? page : page.href;
    const label =
      typeof page === "string"
        ? page.charAt(0).toUpperCase() + page.slice(1)
        : page.label;

    // Products Dropdown
    if (label === "Products") {
      const products = Cn.links.find((l) => l.label === "Products");

      return (
        <div key="products">
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="w-full flex items-center justify-between py-2 text-left"
            style={S.navMobileLink}
          >
            <span>Products</span>
            <span
              className={`transition-transform duration-300 ${
                productsOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <AnimatePresence>
            {productsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden ml-4 mt-2 border-l border-gray-300 pl-4 flex flex-col gap-3"
              >
                {products.subItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-yellow-500 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={href}
        href={`/${href}`}
        onClick={() => setMobileMenuOpen(false)}
        style={S.navMobileLink}
        className="capitalize hover:opacity-60 transition-opacity"
      >
        {label}
      </Link>
    );
  })}

  <button
    onClick={() => {
      setMobileMenuOpen(false);
      setQuoteOpen(true);
    }}
    className="btn-gold py-4 rounded-xl"
  >
    {Cn.mobileCta}
  </button>
</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Content */}
          <main>
            {children}
          </main>

          {!isProductDetail && !isContact && <InquirySection />}
          <Footer />
          <ChatWidget />
          <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        </>
      )}
    </div>
  );
}
