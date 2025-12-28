'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function WhoThisIsFor() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.whoisfor : bnMessages.whoisfor;
  const perfectList = t.perfectList;
  const notForList = t.notForList;

  return (
    <section id="whoisfor" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Perfect For */}
          <div className="bg-accent/10 p-8 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-accent mb-6">
              {t.perfectLabel}
            </h3>
            <ul className="space-y-4">
              {perfectList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent text-2xl mr-3">✅</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Not For */}
          <div className="bg-danger/10 p-8 rounded-lg border-2 border-danger">
            <h3 className="text-2xl font-bold text-danger mb-6">
              {t.notForLabel}
            </h3>
            <ul className="space-y-4">
              {notForList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-danger text-2xl mr-3">❌</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
