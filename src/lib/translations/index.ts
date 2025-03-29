/* src/lib/translations/index.ts */

import { Language } from "@/lib/contexts/LanguageContext";
import { en } from "./en/en";
import { es } from "./es/es";
import { Translations } from "./types";

// Export translations object
export const translations = {
  en,
  es,
};

// Helper function to get translations based on the current language
export const getTranslations = (language: Language): Translations => {
  return translations[language];
};
