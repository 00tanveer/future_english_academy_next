'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Locale = 'en' | 'bn';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  const toggleLanguage = () => {
    setLocale(prev => prev === 'en' ? 'bn' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
