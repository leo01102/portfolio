/* src/lib/translations/types.ts */

// Structure of translations
export interface Translations {
  navbar: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  section: {
    title: string;
    articles: {
      title?: string;
      subtitle?: string;
      content?: string;
      footer?: string;
    }[];
  };
  buttons: {
    switchLanguage: string;
  };
}
