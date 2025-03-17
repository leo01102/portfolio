/* src/layouts/Navbar/Navbar.tsx */

import { useContext } from "react";
import { ThemeContext } from "@/lib/contexts/ThemeContext";
import "./Navbar.scss";
import { Sun, Moon } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Navbar() {
  const { language } = useLanguage();
  const translations = getTranslations(language);

  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <nav className="navbar">
      <div className="navbar__content">
        <button className="navbar__button">{translations.navbar.about}</button>

        <button className="navbar__button">{translations.navbar.skills}</button>

        <button className="navbar__button">
          {translations.navbar.projects}
        </button>

        <button className="navbar__button">
          {translations.navbar.contact}
        </button>

        <button onClick={toggleTheme} className="navbar__button">
          {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <LanguageToggle className="navbar__button" />
      </div>
    </nav>
  );
}
