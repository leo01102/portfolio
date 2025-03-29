/* src/lib/contexts/LanguageContext.tsx */

import React, { createContext, useState, useContext, ReactNode } from "react";

// Available languages
export type Language = "en" | "es";

// Context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

// Context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to consume the context
// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
