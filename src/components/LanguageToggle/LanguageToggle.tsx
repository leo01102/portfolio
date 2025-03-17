/* src/components/LanguageToggle/LanguageToggle.tsx */

/* import React from "react"; */
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function LanguageToggle({ className = "" }) {
  const { language, setLanguage } = useLanguage();
  const translations = getTranslations(language);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button onClick={toggleLanguage} className={className}>
      {translations.buttons.switchLanguage}
    </button>
  );
}
