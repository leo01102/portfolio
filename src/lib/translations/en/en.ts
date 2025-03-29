/* src/lib/translations/en.ts */

import { Translations } from "../types";

// English translations
export const en: Translations = {
  navbar: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  sections: {
    projects: {
      layout: "vertical",
      title: "Projects",
      articles: [
        {
          title: "ARSTATS",
          content:
            "- Developed a full-stack data visualization web application using React, TypeScript, and Python\n- Implemented a PostgreSQL database with Supabase for efficient data management and retrieval\n- Utilized Lightweight Charts library to create interactive and informative data visualizationn\n- Designed and maintained RESTful APIs for seamless data transfer between frontend and backend\n- Employed Python to build data pipelines that integrate external APIs and automatically update the database",
          footer: {
            tags: [
              "Full Stack",
              "Data Visualization",
              "Open Data",
              "Data Pipeline",
              "API Integration",
            ],
            technologies: [
              "React",
              "TypeScript",
              "Vite",
              "Python",
              "PostgreSQL",
              "Supabase",
              "Tailwind CSS",
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
            ],
          },
        },
        {
          title: "Bookstore Inventory Desktop System",
          content:
            "- Developed a Windows desktop application using Visual Basic .NET for comprehensive bookstore inventory management\n- Implemented CRUD (Create, Read, Update, Delete) operations for efficient book and inventory tracking\n- Integrated a MySQL database with MySQL Workbench for robust and reliable data storage and retrieval\n- Designed a modern and user-friendly interface to streamline e-commerce and inventory management tasks\n- Utilized Git for version control, ensuring organized development and code management\n- Collaborated in a team with university classmates to develop the application",
          footer: {
            tags: [
              "Desktop Application",
              "CRUD",
              "E-commerce",
              "Inventory Management",
              "Database Management",
            ],
            technologies: [
              "Visual Basic",
              "MySQL",
              "Git",
              "GitHub",
              "Postman",
              "Visual Studio",
            ],
          },
        },
        {
          title: "Bookstore Inventory Web System",
          content:
            "- Developed a full-stack web application for bookstore inventory management using React, Node.js, and Express.js\n- Implemented a RESTful API for seamless data communication between the frontend and backend\n- Designed a responsive and user-friendly interface with React and Bootstrap for efficient e-commerce and inventory management\n- Utilized a MySQL database with MySQL Workbench for robust data storage and implemented CRUD operations for inventory management\n- Employed Git for version control, ensuring organized development and collaborative code management",
          footer: {
            tags: [
              "Full Stack",
              "CRUD",
              "REST API",
              "E-commerce",
              "Inventory Management",
              "Database Management",
            ],
            technologies: [
              "React",
              "Vite",
              "JavaScript",
              "HTML",
              "CSS",
              "Bootstrap",
              "Node.js",
              "Express.js",
              "MySQL",
              "Git",
              "GitHub",
              "Postman",
              "VS Code",
            ],
          },
        },
        {
          title: "University Feedback System",
          content:
            "- Collaborated in a team to develop a prototype feedback system using Python and Google Cloud\n- Implemented Natural Language Processing (NLP) using the OpenAI API (ChatGPT) to automate the analysis and summarization of student and university feedback\n- Designed a prototype system to collect, process, and analyze student and university feedback, providing actionable insights for improvement\n- Utilized Python, Pandas, and NumPy for data processing and API integration, and Google Cloud for scalable deployment of the prototype\n- Employed Git for version control, ensuring organized teamwork and code management for the prototype",
          footer: {
            tags: [
              "Data Analysis",
              "AI Integration",
              "Automation",
              "Student Feedback",
            ],
            technologies: [
              "Python",
              "Google Cloud",
              "OpenAI API",
              "pandas",
              "NumPy",
              "Git",
              "GitHub",
              "VS Code",
            ],
          },
        },
      ],
    },
    skills: {
      layout: "horizontal",
      title: "Skills",
      content: "Click on an item.",
      articles: [
        {
          title: "Programming languages",
          footer: {
            technologies: [
              "Python",
              "TypeScript",
              "JavaScript",
              "HTML",
              "CSS",
              "SCSS",
            ],
          },
        },
        {
          title: "Frameworks",
          footer: {
            technologies: ["Tailwind CSS", "Bootstrap"],
          },
        },
        {
          title: "Libraries",
          footer: {
            technologies: ["React", "Lightweight Charts", "AmCharts"],
          },
        },
        {
          title: "Backend",
          footer: {
            technologies: ["Node.js", "Express.js"],
          },
        },
        {
          title: "Databases & Backend Services",
          footer: {
            technologies: ["PostgreSQL", "MySQL", "Supabase"],
          },
        },
        {
          title: "Tools",
          footer: {
            technologies: [
              "Git",
              "GitHub",
              "Vite",
              "Postman",
              "VS Code",
              "Visual Studio",
            ],
          },
        },
      ],
    },
    about: {
      layout: "vertical",
      title: "About",
      articles: [
        {
          content:
            "Hi, I’m Leonardo, an Information Systems Engineering student (4th year out of 5).",
          footer: {
            tags: ["Spanish (native)", "English (intermediate)"],
          },
        },
      ],
    },
    contact: {
      layout: "vertical",
      title: "Contact",
      articles: [
        {
          content:
            "[Email](leonardorearte0@gmail.com), [LinkedIn], and GitHub.",
        },
      ],
    },
  },
  buttons: {
    switchLanguage: "Español",
  },
};
