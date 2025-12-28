'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function Problem() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.problem : bnMessages.problem;
  const points = t.points;

  return (
    <section id="problem" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
          {t.heading}
        </h2>
        
        <p className="text-xl text-muted-foreground mb-6 text-center">
          {t.intro}
        </p>
        
        <ul className="space-y-4 mb-10">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary text-2xl mr-3">•</span>
              <span className="text-lg text-foreground">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-md">
          <p className="text-lg font-semibold text-primary mb-2">
            {t.realProblemLabel}
          </p>
          <p className="text-xl text-foreground">
            {t.realProblem}
          </p>
        </div>
      </div>
    </section>
  );
}
