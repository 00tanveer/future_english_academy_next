'use client';

import Link from 'next/link';
import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function FinalCTA() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.finalCta : bnMessages.finalCta;

  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
          {t.heading}
        </h2>
        
        <p className="text-xl text-foreground mb-2">
          {t.line1}
        </p>
        <p className="text-xl text-foreground mb-8">
          {t.line2}
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 inline-block">
          <p className="text-lg font-semibold text-foreground mb-1">
            {t.nextCohort}
          </p>
          <p className="text-danger font-bold text-xl">
            {t.spots}
          </p>
        </div>
        
        <Link
          href="#register"
          className="inline-block bg-primary hover:bg-primary-hover text-white font-bold text-xl px-12 py-5 rounded-full transition-colors duration-300 shadow-xl hover:shadow-2xl mb-8"
        >
          {t.cta}
        </Link>
        
        <div className="text-center text-foreground">
          <p className="font-semibold mb-2">{t.stillQuestions}</p>
          <p className="text-muted-foreground">{t.whatsapp}</p>
        </div>
      </div>
    </section>
  );
}
