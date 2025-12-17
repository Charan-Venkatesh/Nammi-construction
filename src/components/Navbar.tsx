'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_DATA } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm border-gray-100'
            : 'py-6 bg-white/50 backdrop-blur-sm border-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {SITE_DATA.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-bold uppercase tracking-widest relative group transition-colors ${
                  pathname === item.href ? 'text-nammi-orange' : 'text-nammi-navy hover:text-nammi-orange'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-nammi-orange transition-all duration-300 group-hover:w-full ${pathname === item.href ? 'w-full' : ''}`} />
              </Link>
            ))}

            <Link href="/contact" className="bg-nammi-orange text-white px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-nammi-navy transition-colors duration-300 shadow-lg shadow-nammi-orange/20">
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-nammi-navy"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <button
              className="absolute top-8 right-8 text-nammi-navy hover:text-nammi-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {SITE_DATA.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-display font-bold uppercase tracking-tight ${
                     pathname === item.href ? 'text-nammi-orange' : 'text-nammi-navy'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
