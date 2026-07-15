'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { useTheme } from '@/context/ThemeContext';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-border shadow-glass'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <AppLogo
                size={32}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
              <span className="font-display font-bold text-foreground text-base tracking-tight hidden sm:block">
                Nandhitha Binu
              </span>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link-underline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted/50"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Theme toggle + Mobile toggle */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted/60 dark:bg-gray-800/60 border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'light' ? (
                    <motion.span
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={17} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={17} className="text-amber-400" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:block btn-primary text-sm py-2 px-4 no-underline"
              >
                Hire Me
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 text-foreground"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-border shadow-glass-lg md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 px-4 py-3 rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  className="btn-primary block text-center text-sm py-3 no-underline"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}