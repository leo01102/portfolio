/* src/lib/translations/en.ts */

import { Translations } from "./types";

// English translations
export const en: Translations = {
  navbar: {
    about: "About me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  section: {
    title: "Featured Articles",
    articles: [
      {
        title: "Getting Started with React",
        subtitle: "A beginner's guide",
        content: "React is a JavaScript library for building user interfaces.",
        footer: "React",
      },
      {
        title: "TypeScript Basics",
        subtitle: "Type safety for your projects",
        content: "TypeScript adds static typing to JavaScript.",
        footer: "TypeScript",
      },
    ],
  },
  buttons: {
    switchLanguage: "Español",
  },
};
