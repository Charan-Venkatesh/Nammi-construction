'use client';

import { motion } from 'framer-motion';
import { Home, Grid, Users, Phone } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#hero' },
  { name: 'Services', icon: Grid, href: '#services' },
  { name: 'Process', icon: Users, href: '#process' }, // Using Users icon for process/about area or maybe a different one
  { name: 'Contact', icon: Phone, href: '#contact' },
];

export default function Navbar() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
      <motion.nav
        className="flex items-center gap-2 px-2 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-lg"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 rounded-full text-concrete-white hover:bg-white/10 transition-colors relative group"
            aria-label={item.name}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <item.icon size={20} strokeWidth={1.5} />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-void-navy text-concrete-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}
      </motion.nav>
    </div>
  );
}
