'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function Navbar() {
  const { locale, toggleLanguage } = useLanguage();
  const t = locale === 'en' ? enMessages.nav : bnMessages.nav;
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: t.home, id: 'home' },
    { href: '#problem', label: t.problem, id: 'problem' },
    { href: '#solution', label: t.solution, id: 'solution' },
    { href: '#offer', label: t.offer, id: 'offer' },
    { href: '#whoisfor', label: t.whoisfor, id: 'whoisfor' },
    { href: '#instructor', label: t.instructor, id: 'instructor' },
    { href: '#program', label: t.program, id: 'program' },
    { href: '#pricing', label: t.pricing, id: 'pricing' },
    { href: '#faq', label: t.faq, id: 'faq' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1,
      }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Navbar - Logo + Language Toggle */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="flex justify-between items-center h-16 px-4 sm:px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image 
              src="/logo/logo-full-white-bg.png" 
              alt="Future English Academy" 
              width={180}
              height={120}
              priority
              className="h-35 w-auto"
            />
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-semibold transition-colors"
          >
            {locale === 'en' ? 'বাংলা' : 'English'}
          </button>
        </div>
      </nav>

      {/* Left Sidebar - Table of Contents (Mobile + Desktop) */}
      <aside className="fixed left-0 top-16 bottom-0 w-30 md:w-64 bg-muted/50 backdrop-blur-sm border-r border-border overflow-y-auto z-40">
        <div className="p-3 md:p-6 space-y-2">
          <h3 className="text-xs uppercase tracking-wide text-muted-foreground font-bold mb-4">
            Speak Up - 5 week English Speaking Course
          </h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 px-3 text-xs md:text-sm rounded-md transition-colors ${
                activeSection === link.id
                  ? 'bg-primary text-white font-semibold'
                  : 'text-foreground hover:text-primary hover:bg-white/50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
