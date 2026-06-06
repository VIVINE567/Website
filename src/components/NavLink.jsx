'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import S from '../styles';

const NavLink = ({ href, children, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDefaultPage = href === '#' || href === '' || !href;
  const pathname = usePathname();
  const router = useRouter();

  // Smooth-scroll to hash target. If already on the target page, prevent default
  // and scroll; otherwise navigate + scroll after navigation.
  const handleHashNavigate = (e, to) => {
    const hashIdx = to.indexOf('#');
    if (hashIdx === -1) return;
    const path = to.slice(0, hashIdx) || '/';
    const id = to.slice(hashIdx + 1);
    if (!id) return;
    e.preventDefault();
    setIsOpen(false);
    const doScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 90; // offset for fixed nav
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    if (pathname === path) {
      doScroll();
    } else {
      router.push(to);
      // wait for route + paint
      setTimeout(doScroll, 350);
      setTimeout(doScroll, 800);
    }
  };

  return (
    <div data-component="NavLink"
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={isDefaultPage ? `/${children.toLowerCase().replace(/\s+/g, '-')}` : href}
        style={S.navLink}
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
              {subItems.map((item) => {
                const label = typeof item === 'string' ? item : item.label;
                const to = typeof item === 'string'
                  ? `/${item.toLowerCase().replace(/\s+/g, '-')}`
                  : item.href;
                return (
                  <Link
                    key={label}
                    href={to}
                    onClick={(e) => handleHashNavigate(e, to)}
                    className="block px-6 py-2 text-sm text-brand-primary/70 hover:bg-brand-primary/5 hover:text-brand-primary transition-colors"
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default NavLink;
