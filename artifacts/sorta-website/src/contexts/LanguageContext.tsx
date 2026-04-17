import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (en: string, jp: string) => string;
  tr: <Section extends keyof typeof translations>(
    section: Section,
    key: keyof (typeof translations)[Section]
  ) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'jp' : 'en'));
  };

  const t = (en: string, jp: string): string => {
    return language === 'en' ? en : jp;
  };

  const tr = <Section extends keyof typeof translations>(
    section: Section,
    key: keyof (typeof translations)[Section]
  ): string => {
    const entry = translations[section][key] as { en: string; jp: string };
    return language === 'en' ? entry.en : entry.jp;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
