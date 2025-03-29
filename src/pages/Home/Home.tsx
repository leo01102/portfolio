/* src/pages/Home/Home.tsx */

import Section from "@/components/Section/Section";
import "./Home.scss";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";
import { TechnologyHighlightProvider } from "@/lib/contexts/TechnologyHighlightContext";

export default function Home() {
  const { language } = useLanguage();
  const translations = getTranslations(language);

  return (
    <TechnologyHighlightProvider>
      <div className="home">
        {/* introduction */}
        {/* intro here */}
        {/* content */}
        {Object.entries(translations.sections).map(([key, section]) => (
          <Section
            key={key}
            sectionKey={key} // Pass the section key as an additional prop
            title={section.title}
            articles={section.articles}
            layout={section.layout}
          />
        ))}
      </div>
    </TechnologyHighlightProvider>
  );
}
