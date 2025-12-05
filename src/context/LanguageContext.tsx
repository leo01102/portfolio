import React, { createContext, useContext, useState, ReactNode } from 'react';
import { resumeData, Language } from '@data/resume';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof resumeData['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check localStorage
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['es', 'en', 'nl'].includes(saved)) return saved;

    // 2. Check browser language
    const browserLang = typeof window !== 'undefined' ? navigator.language.toLowerCase() : 'es';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('nl')) return 'nl';
    
    // 3. Default to English for everyone else
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Update html lang attribute
  React.useEffect(() => {
    const langMap: Record<Language, string> = {
      es: 'es',
      en: 'en',
      nl: 'nl-BE'
    };
    document.documentElement.lang = langMap[language];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: resumeData[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
