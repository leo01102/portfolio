/* src/pages/Home/Home.tsx */

import Section from "@/components/Section/Section";
import "./Home.scss";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Home() {
  const { language } = useLanguage();
  const translations = getTranslations(language);

  return (
    <div className="home">
      Home
      <Section
        title={translations.section.title}
        articles={translations.section.articles}
      ></Section>
    </div>
  );
}
