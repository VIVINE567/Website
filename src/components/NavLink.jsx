'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import S from '../styles';

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
