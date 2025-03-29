/* src/layouts/Navbar/Navbar.tsx */

import { useContext, useState } from "react";
import { ThemeContext } from "@/lib/contexts/ThemeContext";
import "./Navbar.scss";
import { Sun, Moon, Settings } from "lucide-react";
import LanguageToggle from "@/components/LanguageToggle/LanguageToggle";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

function Navbar() {
  const { language } = useLanguage();
  const translations = getTranslations(language);

  const themeContext = useContext(ThemeContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Moved above the conditional check

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__main">
          <a href="#projects" className="navbar__link">
            {translations.navbar.projects}
          </a>
          <a href="#skills" className="navbar__link">
            {translations.navbar.skills}
          </a>
          <a href="#about" className="navbar__link">
            {translations.navbar.about}
          </a>
          <a href="#contact" className="navbar__link">
            {translations.navbar.contact}
          </a>
        </div>

        {/* Desktop configuration (screens above 768px) */}
        <div className="navbar__config desktop">
          <LanguageToggle className="navbar__button" />
          <button
            onClick={toggleTheme}
            className="navbar__button"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Mobile configuration (screens below 768px) */}
        <div className="navbar__config mobile">
          <button
            onClick={toggleDropdown}
            className="navbar__button settings-button"
            aria-label="Settings"
          >
            <Settings size={24} />
          </button>
          {isDropdownOpen && (
            <div className="navbar__dropdown">
              <LanguageToggle className="navbar__dropdown-button" />
              <button
                onClick={toggleTheme}
                className="navbar__dropdown-button"
                aria-label={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
              >
                {theme === "dark" ? (
                  <>
                    <Sun size={24} />
                    <span>Light</span>
                  </>
                ) : (
                  <>
                    <Moon size={24} />
                    <span>Dark</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
