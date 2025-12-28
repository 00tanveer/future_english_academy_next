'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function Solution() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.solution : bnMessages.solution;
  const points = t.points;

  return (
    <section id="solution" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
          {t.heading}
        </h2>
        
        <p className="text-xl text-muted-foreground mb-4 text-center">
          {t.intro}
        </p>
        
        <p className="text-lg font-semibold text-primary mb-8 text-center">
          {t.subheading}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {points.map((point, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-primary mb-3">
                {point.title}
              </h3>
              <p className="text-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-2xl font-bold text-center text-primary">
          {t.footer}
        </p>
      </div>
    </section>
  );
}
