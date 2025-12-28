'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';

export default function Pricing() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.pricing : bnMessages.pricing;
  const includes = t.includes;

  return (
    <section id="pricing" className="py-20 px-4 bg-muted">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
          {t.heading}
        </h2>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border-4 border-primary">
          <p className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
            {t.price}
          </p>
          
          <ul className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-lg text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-accent/10 p-4 rounded-lg mb-6 text-center">
            <p className="text-lg font-semibold text-foreground mb-1">
              {t.nextCohort}
            </p>
            <p className="text-danger font-bold">
              {t.spotsAvailable}
            </p>
          </div>
          
          <Link
            href="#register"
            className="block w-full bg-primary hover:bg-primary-hover text-white text-center font-bold text-xl py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl mb-6"
          >
            {t.cta}
          </Link>
          
          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>{t.payment}</p>
            <p>{t.questions}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
