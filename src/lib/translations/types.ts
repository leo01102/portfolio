/* src/lib/translations/types.ts */

export interface Article {
  title?: string;
  subtitle?: string;
  content?: string;
  footer?: {
    tags?: string[];
    technologies?: string[];
  };
}

export interface Section {
  title: string;
  content?: string;
  articles: Article[];
  layout: "vertical" | "horizontal";
}

// Structure of translations
export interface Translations {
  navbar: Record<string, string>;
  sections: Record<string, Section>;
  buttons: {
    switchLanguage: string;
  };
}
