'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function CoreOffer() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.offer : bnMessages.offer;
  const items = t.items;

  return (
    <section id="offer" className="py-20 px-4 bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <span className="text-4xl mr-4">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="text-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
