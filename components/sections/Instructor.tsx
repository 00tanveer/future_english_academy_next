'use client';

import enMessages from '@/messages/en.json';
import bnMessages from '@/messages/bn.json';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';

export default function Instructor() {
  const { locale } = useLanguage();
  const t = locale === 'en' ? enMessages.instructor : bnMessages.instructor;
  const credentials = t.credentials;

  return (
    <section id="instructor" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12 text-center">
          {t.heading}
        </h2>
        
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
          {/* Instructor Photo Placeholder */}
          <Image 
            src='/images/chief_instructor.png'
            alt="Instructor Photo"
            width={120}
            height={120}
            priority
            className="mx-auto mb-6 rounded-full"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
            {t.name}
          </h3>
          
          <blockquote className="text-lg text-foreground italic mb-8 border-l-4 border-primary pl-6 whitespace-pre-line">
            "{t.quote}"
          </blockquote>
          
          <ul className="space-y-3 mb-8">
            {credentials.map((credential, index) => (
              <li key={index} className="flex items-start">
                <span className="text-accent text-xl mr-3">✓</span>
                <span className="text-foreground">{credential}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
            <p className="text-xl font-bold text-primary mb-2">
              {t.mission}
            </p>
            <p className="text-lg text-foreground">
              {t.missionSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
