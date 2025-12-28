'use client';

import { useState } from 'react';
import Link from 'next/link';
import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function Navbar() {
  const { locale, toggleLanguage } = useLanguage();
  const t = locale === 'en' ? enMessages.nav : bnMessages.nav;
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#problem', label: t.problem },
    { href: '#solution', label: t.solution },
    { href: '#offer', label: t.offer },
    { href: '#whoisfor', label: t.whoisfor },
    { href: '#instructor', label: t.instructor },
    { href: '#program', label: t.program },
    { href: '#pricing', label: t.pricing },
    { href: '#faq', label: t.faq },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="font-bold text-xl text-primary">
            Future English Academy
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-semibold transition-colors"
            >
              {locale === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full py-2 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-semibold transition-colors"
            >
              {locale === 'en' ? 'বাংলা' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
