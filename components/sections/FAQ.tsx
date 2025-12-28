'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useState } from 'react';
import { useLanguage } from '@/components/LanguageProvider';

export default function FAQ() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.faq : bnMessages.faq;
  const questions = t.questions;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-muted rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-primary/5 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {item.q}
                </span>
                <span className="text-primary text-2xl shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
