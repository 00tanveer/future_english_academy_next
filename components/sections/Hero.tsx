'use client';

import Link from 'next/link';
import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function Hero() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.hero : bnMessages.hero;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pr-4 pl-0 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          {t.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.subheadline}
        </p>
        
        <Link
          href="#pricing"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          {t.cta}
        </Link>
        
        <p className="mt-6 text-sm md:text-base text-muted-foreground">
          {t.supportingText}
        </p>
      </div>
    </section>
  );
}
