'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import S from '../styles/nav';

const NavLink = ({ href, children, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
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
      if (window.location.hash !== `#${id}`) {
        window.history.replaceState(null, '', to);
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
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
      className="relative group inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={isDefaultPage ? `/${children.toLowerCase().replace(/\s+/g, '-')}` : href}
        style={S.navLink}
        className="nav-ripple flex items-center gap-1 py-4 px-2 text-xs font-medium transition-colors uppercase"
      >
        {children}
        {subItems && <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>

      {subItems && (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 glass-dropdown z-dropdown rounded-3xl shadow-2xl max-h-[420px] overflow-y-auto overflow-x-hidden"
      >
        {subItems.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const to =
            typeof item === "string"
              ? `/${item.toLowerCase().replace(/\s+/g, "-")}`
              : item.href;

          return (
            <Link
  key={label}
  href={to}
  onClick={(e) => handleHashNavigate(e, to)}
  onMouseEnter={() => setHoveredItem(label)}
  onMouseLeave={() => setHoveredItem(null)}
  className="
    relative
    flex
    items-center
    w-full
    px-6
    py-4
    transition-all
    duration-300
    hover:bg-[#EFE8D8]
  "
>
  <span className="text-[16px] text-brand-primary/75">
    {label}
  </span>

  {hoveredItem === label && (
    <motion.div
      layoutId="dropdown-indicator"
      className="absolute right-2 top-3 bottom-3 w-[4px] rounded-full bg-[#556B2F]"
      initial={{ opacity: 0, scaleY: 0.4 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    />
  )}
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
