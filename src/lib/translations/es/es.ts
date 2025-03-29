// src/lib/translations/es.ts

import { Translations } from "../types";

// Spanish translations
export const es: Translations = {
  navbar: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
  },
  sections: {
    test: {
      layout: "vertical",
      title: "Artículos Destacados",
      articles: [
        {
          title: "Comenzando con React",
          subtitle: "Una guía para principiantes",
          content:
            "React es una biblioteca de JavaScript para construir interfaces de usuario.",
          footer: {
            technologies: ["Python"],
          },
        },
        {
          title: "Fundamentos de TypeScript",
          subtitle: "Seguridad de tipos para tus proyectos",
          content: "TypeScript añade tipado estático a JavaScript.",
          footer: {
            technologies: ["Python"],
          },
        },
      ],
    },
  },
  buttons: {
    switchLanguage: "English",
  },
};
