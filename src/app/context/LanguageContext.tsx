// 'use client';
// import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
// import { en } from '../langs/en';
// import { pt } from '../langs/pt';
// import { es } from '../langs/es';
// import { jp } from '../langs/jp';

// type Language = 'EN' | 'PT' | 'ES' | 'JP';

// interface LanguageContextProps {
//   language: Language;
//   translations: typeof en;
//   setLanguage: (language: Language) => void;
// }

// const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// const getBrowserLanguage = (): Language => {
//   const browserLang = navigator.language || navigator.languages[0];

//   if (browserLang.startsWith('pt')) {
//     return 'PT';
//   } else if (browserLang.startsWith('es')) {
//     return 'ES';
//   } else if (browserLang.startsWith('ja') || browserLang.startsWith('jp')) {
//     return 'JP';
//   } else {
//     return 'EN';
//   }
// };

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [language, setLanguage] = useState<Language>('EN');

//   useEffect(() => {
//     const detectedLanguage = getBrowserLanguage();
//     setLanguage(detectedLanguage);
//   }, []);

//   const translations = (() => {
//     switch (language) {
//       case 'PT':
//         return pt;
//       case 'ES':
//         return es;
//       case 'JP':
//         return jp;
//       default:
//         return en;
//     }
//   })();

//   return (
//     <LanguageContext.Provider value={{ language, translations, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
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

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || navigator.languages[0];

  if (browserLang.startsWith('pt')) {
    return 'PT';
  } else if (browserLang.startsWith('es')) {
    return 'ES';
  } else if (browserLang.startsWith('ja') || browserLang.startsWith('jp')) {
    return 'JP';
  } else {
    return 'EN';
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = localStorage.getItem('language') as Language | null;
    return storedLanguage || getBrowserLanguage();
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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
