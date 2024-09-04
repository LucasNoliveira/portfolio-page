'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../langs/en';
import { pt } from '../langs/pt';
import { es } from '../langs/es';
import { jp } from '../langs/jp';

type Language = 'EN' | 'PT' | 'ES' | 'JP';

interface LanguageContextProps {
  language: Language;
  translations: typeof en;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('EN');
  
  const translations = (() => {
    switch (language) {
      case 'PT':
        return pt;
      case 'ES':
        return es;
      case 'JP':
        return jp;
      default:
        return en;
    }
  })();

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
