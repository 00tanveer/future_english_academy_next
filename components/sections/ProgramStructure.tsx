'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';

export default function ProgramStructure() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.program : bnMessages.program;
  const weeks = t.weeks;

  return (
    <section id="program" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="space-y-8 mb-10">
          {weeks.map((week, index) => (
            <div key={index} className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                {week.title}
              </h3>
              <ul className="space-y-2">
                {week.classes.map((classItem, classIndex) => (
                  <li key={classIndex} className="text-foreground">
                    {classItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent mb-6">
          <p className="text-lg text-foreground font-semibold">
            {t.plus}
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-bold text-primary">
            {t.progression}
          </p>
        </div>
      </div>
    </section>
  );
}
