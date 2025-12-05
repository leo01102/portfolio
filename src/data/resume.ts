export type Language = 'es' | 'en' | 'nl';

export const resumeData = {
  es: {
    personal: {
      name: "Leonardo Rearte",
      title: "Ingeniero en Sistemas de Información",
      email: "leonardorearte0@gmail.com",
      github: "https://github.com/leo01102",
      linkedin: "https://www.linkedin.com/in/leonardo-rearte/?locale=es_ES",
      location: "Argentina",
      heroTitle: {
        prefix: "Ingeniería de ",
        highlight1: "sistemas robustos",
        middle: " con ",
        highlight2: "IA estratégica."
      },
      heroDescription: "Estudiante de 5º año de Ingeniería en Sistemas de Información. Enfocado en la construcción de arquitecturas escalables y automatización inteligente. Desarrollo sistemas modulares orientados a la performance, que automatizan flujos de trabajo y procesan datos para resolver problemas reales e impulsar decisiones estratégicas.",
      whatICanDo: {
        title: "LO QUE HAGO",
        description: "Diseño arquitecturas escalables y flujos de trabajo automatizados que transforman datos crudos en inteligencia estratégica clara para la toma de decisiones.",
        items: [
          { title: 'IA Aplicada y NLP', desc: 'Agentes inteligentes y análisis automatizado' },
          { title: 'Arquitectura de Sistemas', desc: 'Modular, escalable y de alta performance' },
          { title: 'Automatización de Datos', desc: 'Desde inputs crudos hasta información útil' },
          { title: 'Soluciones Estratégicas', desc: 'Resolución de problemas meticulosa y end-to-end' }
        ]
      },
      stats: [
        { label: 'Años Programando', value: '+4' },
        { label: 'Proyectos', value: '9' },
        { label: 'Perfil', value: 'Sistemas e IA' },
      ]
    },
    nav: {
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      talk: "Hablemos",
      role: "Ingeniería & IA"
    },
    skills: {
      title: "Habilidades & Stack Tecnológico",
      items: [
        {
          name: 'Lenguajes',
          skills: ['Python', 'TypeScript', 'JavaScript', 'Visual Basic .NET', 'HTML', 'CSS', 'SCSS']
        },
        {
          name: 'IA & Data Science',
          skills: ['PyTorch', 'TensorFlow', 'ONNX', 'Pandas', 'NumPy', 'Natural Language Processing (NLP)', 'Wav2Vec', 'OpenAI API']
        },
        {
          name: 'Frontend',
          skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Three.js', 'Lightweight Charts', 'AmCharts']
        },
        {
          name: 'Backend',
          skills: ['FastAPI', 'Node.js', 'Express.js', 'Google Cloud', 'PostgreSQL', 'MySQL', 'Supabase']
        },
        {
          name: 'Herramientas & Plataformas',
          skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio']
        },
        {
          name: 'Habilidades Blandas',
          skills: ['Adaptabilidad', 'Resolución de Problemas', 'Comunicación', 'Liderazgo', 'Trabajo en Equipo', 'Inteligencia Emocional']
        }
      ]
    },
    projects: {
      title: "Proyectos destacados",
      subtitle: "Una mezcla de investigación académica, productos funcionales y experimentación técnica.",
      projectDetails: "Detalles del Proyecto",
      lastUpdate: "ÚLTIMA ACTUALIZACIÓN",
      date: "DICIEMBRE 2025",
      viewProject: "Ver proyecto completo",
      viewDetails: "Ver detalles",
      items: [
        {
          id: 'lumen',
          title: "Lumen",
          subtitle: "Asistente IA Empática Multimodal",
          category: "INVESTIGACIÓN",
          technologies: ["Inteligencia Artificial (IA)", "Computación Afectiva", "Reconocimiento de Emociones", "Procesamiento de Lenguaje Natural (NLP)", "Open Neural Network Exchange", "Python", "FastAPI", "TypeScript", "React", "Next.js", "Desarrollo Full-Stack", "TensorFlow", "PyTorch", "Diseño de API RESTful", "Oratoria", "Creatividad e Innovación", "Investigación", "Trabajo en Equipo", "Liderazgo"],
          date: "Ago. – Oct. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Asistente IA full-stack que analiza emociones multimodales (voz y expresiones faciales) para ofrecer respuestas contextuales en tiempo real.",
          details: [
            "Lideré el desarrollo de un asistente IA full-stack que analiza emociones multimodales (voz y expresiones faciales) para ofrecer respuestas contextuales en tiempo real",
            "Diseñé un backend de alto rendimiento con FastAPI, creando una API RESTful para gestionar todo el pipeline de procesamiento de la IA, desde entrada de audio hasta salida de voz sintetizada",
            "Optimicé un modelo Wav2Vec 2.0 para reconocimiento de emociones vocales convirtiéndolo a ONNX, reduciendo significativamente la latencia de inferencia en CPU",
            "Implementé un frontend orientado a la privacidad en Next.js y TypeScript, realizando el análisis de emociones faciales completamente del lado del cliente con face-api.js",
            "Integré la API de Groq con Llama 3.1 para generar respuestas empáticas a alta velocidad, enriqueciendo dinámicamente los prompts con contexto emocional multimodal",
            "Implementé una estrategia de seguridad de datos end-to-end, encriptando todas las conversaciones y hechos almacenados en SQLite usando AES"
          ]
        },
        {
          id: 'arstats',
          title: "ARSTATS",
          subtitle: null,
          category: "PRODUCTO",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
          date: "Dic. 2024 – Presente",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Aplicación web full-stack de visualización de datos usando React, TypeScript y Python.",
          details: [
            "Desarrollé una aplicación web full-stack de visualización de datos usando React, TypeScript y Python",
            "Implementé una base de datos PostgreSQL con Supabase para gestión y consulta eficiente de datos",
            "Utilicé la librería Lightweight Charts para crear visualizaciones interactivas e informativas",
            "Diseñé y mantuve APIs RESTful para la transferencia de datos entre frontend y backend",
            "Usé Python para construir pipelines que integran APIs externas y actualizan automáticamente la base de datos"
          ]
        },
        {
          id: 'ludodidactas',
          title: "Ludodidactas",
          subtitle: "Plataforma de Edutainment",
          category: "EDUCACIÓN",
          technologies: ["React", "Node.js", "Express.js", "Unity", "MySQL", "Tailwind CSS", "JavaScript", "APIs REST", "Git", "Vite", "JWT", "Desarrollo de Videojuegos", "Arquitectura de Software", "Trabajo en Equipo"],
          date: "Mar. – Nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Plataforma educativa integral que combina juegos Unity con un dashboard de seguimiento académico.",
          details: [
            "Diseñé la arquitectura full-stack completa e implementé la mayor parte del código base, actuando como el principal referente técnico de una plataforma educativa integral",
            "Desarrollé una API RESTful escalable con Node.js y Express.js, implementando autenticación segura (JWT), sincronización de datos en tiempo real y analíticas avanzadas para docentes",
            "Construí un frontend responsivo y de alto rendimiento para paneles de administración y docencia usando React, Vite y Tailwind CSS, integrando Recharts para visualización de datos",
            "Integré juegos educativos Unity WebGL directamente en la aplicación React, estableciendo un puente fluido para el flujo de datos bidireccional y el seguimiento del progreso",
            "Diseñé y optimicé un esquema de base de datos MySQL para gestionar eficientemente relaciones complejas entre estudiantes, docentes, cursos y métricas de juego",
            "Colaboré en equipo utilizando una metodología Ágil híbrida (Scrum/XP) y Git, asegurando altos estándares de calidad de código y entrega continua de funcionalidades"
          ]
        },
        {
          id: 'edulytics',
          title: "Edulytics",
          subtitle: "Análisis Automatizado de Feedback",
          category: "PROTOTIPO",
          technologies: ["OpenAI API", "Python", "Google Cloud Platform (GCP)", "Pandas", "NumPy", "Trabajo en Equipo", "Liderazgo"],
          date: "Oct. – Nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Sistema de análisis de feedback estudiantil automatizado mediante NLP y OpenAI.",
          details: [
            "Lideré el desarrollo de un prototipo de feedback, definiendo la arquitectura y gestionando el uso de Google Cloud",
            "Implementé NLP con la API de OpenAI (ChatGPT) para automatizar análisis de feedback de estudiantes",
            "Diseñé un sistema prototipo para recopilar, procesar y analizar feedback, proporcionando información accionable",
            "Utilicé Python, Pandas y NumPy para procesamiento de datos e integración de APIs, y Google Cloud para despliegue escalable",
            "Gestioné el control de versiones del equipo con Git para asegurar la organización del código"
          ]
        },
        {
          id: 'librarium',
          title: "Librarium",
          subtitle: "Sistema de Inventario",
          category: "DESKTOP",
          technologies: ["Visual Basic .NET (VB.NET)", "MySQL", "Git", "Visual Studio", "Trabajo en Equipo", "Liderazgo"],
          date: "Jul. – Oct. 2024",
          link: "https://github.com/leo01102/librarium",
          github: "https://github.com/leo01102/librarium",
          description: "Sistema integral de gestión de inventario y punto de venta con autenticación segura.",
          details: [
            "Lideré el desarrollo de un sistema integral de gestión de inventario y punto de venta con autenticación segura y reportes exportables",
            "Diseñé una interfaz de usuario (UI) moderna implementando una librería de controles personalizados propia distribuida vía NuGet",
            "Implementé un pipeline de CI/CD con GitHub Actions para automatizar la compilación y publicación de paquetes",
            "Optimicé la interacción con la base de datos MySQL para asegurar la integridad y eficiencia en el manejo de datos"
          ]
        },
        {
          id: 'bookstore',
          title: "Sistema de Inventario de Librería",
          subtitle: "Web",
          category: "WEB",
          technologies: ["React", "Vite", "Express.js", "MySQL"],
          date: "Oct. – Nov. 2024",
          link: "#",
          github: null,
          description: "Aplicación web full-stack para gestión de inventario de librería.",
          details: [
            "Desarrollé una aplicación web full-stack para gestión de inventario de librería usando React, Node.js y Express.js",
            "Implementé una API RESTful para comunicación eficiente entre frontend y backend",
            "Diseñé una interfaz responsiva y amigable con React y Bootstrap",
            "Usé una base de datos MySQL y CRUD para la gestión de inventario",
            "Empleé Git para control de versiones y colaboración organizada"
          ]
        },
        {
          id: 'classic-ml',
          title: "Classic ML",
          subtitle: "Algoritmos de Machine Learning",
          category: "EDUCACIÓN",
          technologies: ["Machine Learning", "Implementación de Algoritmos", "Python", "Análisis de Datos", "Visualización de Datos", "Trabajo en Equipo", "Liderazgo"],
          date: "May – Jun. 2025",
          link: "https://github.com/leo01102/classic-ml",
          github: "https://github.com/leo01102/classic-ml",
          description: "Implementación desde cero de algoritmos clásicos de ML (K-means, regresión, perceptron).",
          details: [
            "Implementé algoritmos K-means, regresión lineal y perceptron desde cero en Python",
            "Construí herramientas interactivas CLI para ingreso de datos, predicciones en tiempo real y visualización de resultados",
            "Apliqué preprocesamiento de datos, aprendizaje supervisado y no supervisado sobre datasets CSV",
            "Implementé visualización de clusters y líneas de regresión usando Matplotlib"
          ]
        },
        {
          id: 'tecnoplus',
          title: "TecnoPlus",
          subtitle: "E-commerce",
          category: "WEB",
          technologies: ["Desarrollo WordPress", "WooCommerce", "Pasarelas de Pago", "Diseño Web Responsivo", "Elementor", "Trabajo en Equipo", "Liderazgo"],
          date: "May – Jun. 2025",
          link: "#",
          github: null,
          description: "Sitio de e-commerce con integración de pagos y gestión masiva de productos.",
          details: [
            "Lideré el desarrollo técnico de un sitio de e-commerce, coordinando la personalización de WooCommerce y la implementación de CSS",
            "Integré la pasarela de Mercado Pago (modo prueba) y automaticé la gestión de productos y categorías mediante importación masiva (CSV)",
            "Diseñé una experiencia de usuario responsiva y amigable con Elementor, optimizando la navegación, el proceso de checkout y la búsqueda de productos"
          ]
        }
      ]
    },
    conferences: {
      title: "Conferencias y Charlas",
      subtitle: "Eventos donde he compartido escenario.",
      recentTitle: "Conferencia Reciente",
      items: [
        {
          event: "XXIII Encuentro Informático Riojano (EILAR)",
          role: "Expositor",
          date: "Oct. 2025",
          description: "Presentación del prototipo “Lumen – Asistente IA Empática Multimodal”, abordando temas de computación afectiva e inteligencia artificial conversacional.",
          certificate: "https://www.linkedin.com/in/leonardo-rearte/details/certifications/1762355017963/single-media-viewer/",
          certificateLabel: "Ver Certificado"
        }
      ]
    },
    contact: {
      title: "Hablemos.",
      description: "Cuéntame brevemente quién eres y qué problema quieres resolver.",
      cta: "Enviar correo",
      socialsTitle: "REDES SOCIALES",
      nextStepTitle: "PRÓXIMO PASO",
      nextStepDescription: "Envíame un correo y me pondré en contacto contigo lo antes posible.",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    personal: {
      name: "Leonardo Rearte",
      title: "Information Systems Engineer",
      email: "leonardorearte0@gmail.com",
      github: "https://github.com/leo01102",
      linkedin: "https://www.linkedin.com/in/leonardo-rearte/?locale=en_US",
      location: "Argentina",
      heroTitle: {
        prefix: "Engineering ",
        highlight1: "robust systems",
        middle: " with ",
        highlight2: "Strategic AI."
      },
      heroDescription: "5th-year Information Systems Engineering student. Focused on building scalable architecture and intelligent automation. Developing performance-driven, modular systems that automate workflows and process data to solve real-world problems and drive strategic decisions.",
      whatICanDo: {
        title: "WHAT I CAN DO",
        description: "I engineer scalable architectures and automated workflows that transform raw data into clear, strategic intelligence for decision-making.",
        items: [
          { title: 'Applied AI & NLP', desc: 'Intelligent agents & automated analysis' },
          { title: 'System Architecture', desc: 'Modular, scalable & high-performance' },
          { title: 'Data Automation', desc: 'From raw inputs to useful information' },
          { title: 'Strategic Solutions', desc: 'Meticulous end-to-end problem solving' }
        ]
      },
      stats: [
        { label: 'Years Coding', value: '+4' },
        { label: 'Projects', value: '9' },
        { label: 'Profile', value: 'Systems & AI' },
      ]
    },
    nav: {
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      talk: "Let's Talk",
      role: "Engineering & AI"
    },
    skills: {
      title: "Skills & Tech Stack",
      items: [
        {
          name: 'Languages',
          skills: ['Python', 'TypeScript', 'JavaScript', 'Visual Basic .NET', 'HTML', 'CSS', 'SCSS']
        },
        {
          name: 'AI & Data Science',
          skills: ['PyTorch', 'TensorFlow', 'ONNX', 'Pandas', 'NumPy', 'Natural Language Processing (NLP)', 'Wav2Vec', 'OpenAI API']
        },
        {
          name: 'Frontend',
          skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Three.js', 'Lightweight Charts', 'AmCharts']
        },
        {
          name: 'Backend',
          skills: ['FastAPI', 'Node.js', 'Express.js', 'Google Cloud', 'PostgreSQL', 'MySQL', 'Supabase']
        },
        {
          name: 'Tools & Platforms',
          skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio']
        },
        {
          name: 'Soft Skills',
          skills: ['Adaptability', 'Problem Solving', 'Communication', 'Leadership', 'Teamwork', 'Emotional Intelligence']
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A mix of academic research, functional products, and technical experimentation.",
      projectDetails: "Project Details",
      lastUpdate: "LAST UPDATE",
      date: "DECEMBER 2025",
      viewProject: "View full project",
      viewDetails: "View details",
      items: [
        {
          id: 'lumen',
          title: "Lumen",
          subtitle: "Multimodal Empathic AI Assistant",
          category: "RESEARCH",
          technologies: ["Artificial Intelligence (AI)", "Affective Computing", "Emotion Recognition", "Natural Language Processing (NLP)", "Open Neural Network Exchange", "Python", "FastAPI", "TypeScript", "React", "Next.js", "Full-Stack Development", "TensorFlow", "PyTorch", "RESTful API Design", "Public Speaking", "Creativity and Innovation", "Research", "Teamwork", "Leadership"],
          date: "Aug. – Oct. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Full-stack AI assistant that analyzes multimodal emotions (voice and facial expressions) to provide real-time contextual responses.",
          details: [
            "Led the development of a full-stack AI assistant that analyzes multimodal emotions (voice and facial expressions) to provide real-time contextual responses",
            "Designed a high-performance backend using FastAPI, creating a RESTful API to manage the entire AI processing pipeline, from audio input to synthesized speech output",
            "Optimized a Wav2Vec 2.0 model for vocal emotion recognition by converting it to ONNX, significantly reducing CPU inference latency",
            "Implemented a privacy-first frontend in Next.js and TypeScript, performing facial emotion analysis entirely client-side using face-api.js",
            "Integrated the Groq API with Llama 3.1 to generate high-speed empathic responses, dynamically enriching prompts with multimodal emotional context",
            "Implemented an end-to-end data security strategy, encrypting all conversations and facts stored in SQLite using AES"
          ]
        },
        {
          id: 'arstats',
          title: "ARSTATS",
          subtitle: null,
          category: "PRODUCT",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
          date: "Dec. 2024 – Present",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Full-stack data visualization web application using React, TypeScript, and Python.",
          details: [
            "Developed a full-stack data visualization web application using React, TypeScript, and Python",
            "Implemented a PostgreSQL database with Supabase for efficient data management and querying",
            "Utilized the Lightweight Charts library to create interactive and informative visualizations",
            "Designed and maintained RESTful APIs for data transfer between frontend and backend",
            "Used Python to build pipelines that integrate external APIs and automatically update the database"
          ]
        },
        {
          id: 'ludodidactas',
          title: "Ludodidactas",
          subtitle: "Edutainment Platform",
          category: "EDUCATION",
          technologies: ["React", "Node.js", "Express.js", "Unity", "MySQL", "Tailwind CSS", "JavaScript", "REST APIs", "Git", "Vite", "JWT", "Game Development", "Software Architecture", "Teamwork"],
          date: "Mar. – Nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Comprehensive educational platform combining Unity games with an academic tracking dashboard.",
          details: [
            "Engineered the core full-stack architecture and implemented the majority of the codebase, serving as the primary technical lead",
            "Architected a scalable RESTful API with Node.js/Express.js, implementing secure JWT authentication, real-time data sync, and teacher analytics",
            "Built a high-performance dashboard using React, Vite, and Tailwind CSS, integrating Recharts for data visualization",
            "Seamlessly integrated Unity WebGL games into the React application, establishing a bi-directional bridge for real-time progress tracking",
            "Designed an optimized MySQL schema to efficiently manage complex associations between students, teachers, and gameplay metrics",
            "Collaborated using a hybrid agile methodology (Scrum/XP) and Git, ensuring strict code quality standards and continuous feature delivery"
          ]
        },
        {
          id: 'edulytics',
          title: "Edulytics",
          subtitle: "Automated Feedback Analysis",
          category: "PROTOTYPE",
          technologies: ["OpenAI API", "Python", "Google Cloud Platform (GCP)", "Pandas", "NumPy", "Teamwork", "Leadership"],
          date: "Oct. – Nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Automated student feedback analysis system using NLP and OpenAI.",
          details: [
            "Led the development of a feedback prototype, defining the architecture and managing Google Cloud usage",
            "Implemented NLP using the OpenAI API (ChatGPT) to automate student feedback analysis",
            "Designed a prototype system to collect, process, and analyze feedback, providing actionable insights",
            "Used Python, Pandas, and NumPy for data processing and API integration, and Google Cloud for scalable deployment",
            "Managed team version control using Git to ensure code organization"
          ]
        },
        {
          id: 'librarium',
          title: "Librarium",
          subtitle: "Inventory System",
          category: "DESKTOP",
          technologies: ["Visual Basic .NET (VB.NET)", "MySQL", "Git", "Visual Studio", "Teamwork", "Leadership"],
          date: "Jul. – Oct. 2024",
          link: "https://github.com/leo01102/librarium",
          github: "https://github.com/leo01102/librarium",
          description: "Comprehensive inventory management and point-of-sale system with secure authentication.",
          details: [
            "Led the development of a comprehensive inventory management and point-of-sale system with secure authentication and exportable reporting",
            "Designed a modern User Interface (UI) by implementing a custom control library distributed via NuGet",
            "Implemented a CI/CD pipeline with GitHub Actions to automate build and package publication processes",
            "Optimized MySQL database interactions to ensure data integrity and efficiency"
          ]
        },
        {
          id: 'bookstore',
          title: "Bookstore Inventory System",
          subtitle: "Web",
          category: "WEB",
          technologies: ["React", "Vite", "Express.js", "MySQL"],
          date: "Oct. – Nov. 2024",
          link: "#",
          github: null,
          description: "Full-stack web application for bookstore inventory management.",
          details: [
            "Developed a full-stack web application for bookstore inventory management using React, Node.js, and Express.js",
            "Implemented a RESTful API for efficient communication between frontend and backend",
            "Designed a responsive and user-friendly interface using React and Bootstrap",
            "Used a MySQL database and CRUD operations for inventory management",
            "Employed Git for version control and organized collaboration"
          ]
        },
        {
          id: 'classic-ml',
          title: "Classic ML",
          subtitle: "Machine Learning Algorithms",
          category: "EDUCATION",
          technologies: ["Machine Learning", "Algorithm Implementation", "Python", "Data Analysis", "Data Visualization", "Teamwork", "Leadership"],
          date: "May – Jun. 2025",
          link: "https://github.com/leo01102/classic-ml",
          github: "https://github.com/leo01102/classic-ml",
          description: "Implementation from scratch of classic ML algorithms (K-means, regression, perceptron).",
          details: [
            "Implemented K-means, linear regression, and perceptron algorithms from scratch in Python",
            "Built interactive CLI tools for data input, real-time predictions, and result visualization",
            "Applied data preprocessing, supervised, and unsupervised learning on CSV datasets",
            "Implemented visualization of clusters and regression lines using Matplotlib"
          ]
        },
        {
          id: 'tecnoplus',
          title: "TecnoPlus",
          subtitle: "E-commerce",
          category: "WEB",
          technologies: ["Wordpress Development", "WooCommerce", "Payment Gateways", "Responsive Web Design", "Elementor", "Teamwork", "Leadership"],
          date: "May – Jun. 2025",
          link: "#",
          github: null,
          description: "E-commerce site with payment integration and bulk product management.",
          details: [
            "Led the technical development of an e-commerce site, coordinating WooCommerce customization and CSS implementation",
            "Integrated Mercado Pago payment gateway (sandbox mode) and automated product and category management via bulk import (CSV)",
            "Designed a responsive and user-friendly UX using Elementor, optimizing navigation, checkout process, and product search"
          ]
        }
      ]
    },
    conferences: {
      title: "Conferences & Speaking",
      subtitle: "Events where I have shared the stage.",
      recentTitle: "Recent Conference",
      items: [
        {
          event: "XXIII Riojan Informatics Meeting (EILAR)",
          role: "Speaker",
          date: "Oct. 2025",
          description: "Presented the prototype “Lumen – Multimodal Empathic AI Assistant”, covering topics on affective computing and conversational artificial intelligence.",
          certificate: "https://www.linkedin.com/in/leonardo-rearte/details/certifications/1762355017963/single-media-viewer/",
          certificateLabel: "View Certificate"
        }
      ]
    },
    contact: {
      title: "Let's work together.",
      description: "Tell me briefly who you are and what problem you want to solve.",
      cta: "Send Email",
      socialsTitle: "SOCIALS",
      nextStepTitle: "NEXT STEP",
      nextStepDescription: "Send me an email and I'll get back to you as soon as possible.",
      rights: "All rights reserved."
    }
  },
  nl: {
    personal: {
      name: "Leonardo Rearte",
      title: "Ingenieur in Informatiesystemen",
      email: "leonardorearte0@gmail.com",
      github: "https://github.com/leo01102",
      linkedin: "https://www.linkedin.com/in/leonardo-rearte/?locale=en_US",
      location: "Argentinië",
      heroTitle: {
        prefix: "Ontwikkeling van ",
        highlight1: "robuuste systemen",
        middle: ", met ",
        highlight2: "Strategische AI."
      },
      heroDescription: "Vijfdejaarsstudent Ingenieurswetenschappen (Informatiesystemen). Ontwikkeling van schaalbare full-stack applicaties en automatisatie van workflows met datagedreven oplossingen. Gefocust op performantie, architectuur en het oplossen van problemen uit de praktijk.",
      whatICanDo: {
        title: "WAT IK KAN",
        description: "Ik ontwerp schaalbare architecturen en geautomatiseerde workflows die ruwe data omzetten in heldere, strategische inzichten voor besluitvorming.",
        items: [
          { title: 'Toegepaste AI & NLP', desc: 'Intelligente agenten & geautomatiseerde analyse' },
          { title: 'Systeemarchitectuur', desc: 'Modulair, schaalbaar & hoge performantie' },
          { title: 'Data-automatisatie', desc: 'Van ruwe input naar bruikbare informatie' },
          { title: 'Strategische Oplossingen', desc: 'Meticuleuze end-to-end probleemoplossing' }
        ]
      },
      stats: [
        { label: 'Jaren Coderen', value: '+4' },
        { label: 'Projecten', value: '9' },
        { label: 'Profiel', value: 'Systemen & AI' },
      ]
    },
    nav: {
      projects: "Projecten",
      skills: "Vaardigheden",
      contact: "Contact",
      talk: "Laten we praten",
      role: "Engineering & AI"
    },
    skills: {
      title: "Vaardigheden & Tech Stack",
      items: [
        {
          name: 'Talen',
          skills: ['Python', 'TypeScript', 'JavaScript', 'Visual Basic .NET', 'HTML/CSS/SCSS']
        },
        {
          name: 'AI & Data Science',
          skills: ['PyTorch', 'TensorFlow', 'ONNX', 'Pandas', 'NumPy', 'Natural Language Processing (NLP)', 'Wav2Vec', 'OpenAI API']
        },
        {
          name: 'Frontend',
          skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Three.js', 'Lightweight Charts', 'AmCharts']
        },
        {
          name: 'Backend',
          skills: ['FastAPI', 'Node.js', 'Express.js', 'Google Cloud', 'PostgreSQL', 'MySQL', 'Supabase']
        },
        {
          name: 'Tools & Platforms',
          skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Visual Studio']
        },
        {
          name: 'Soft Skills',
          skills: ['Aanpassingsvermogen', 'Probleemoplossing', 'Communicatie', 'Leiderschap', 'Teamwerk', 'Emotionele Intelligentie']
        }
      ]
    },
    projects: {
      title: "Uitgelichte Projecten",
      subtitle: "Een mix van academisch onderzoek, functionele producten en technische experimenten.",
      projectDetails: "Projectdetails",
      lastUpdate: "LAATSTE UPDATE",
      date: "DECEMBER 2025",
      viewProject: "Bekijk volledig project",
      viewDetails: "Bekijk details",
      items: [
        {
          id: 'lumen',
          title: "Lumen",
          subtitle: "Multimodale Empatische AI-Assistent",
          category: "ONDERZOEK",
          technologies: ["Kunstmatige Intelligentie (AI)", "Affective Computing", "Emotieherkenning", "Natural Language Processing (NLP)", "Open Neural Network Exchange", "Python", "FastAPI", "TypeScript", "React", "Next.js", "Full-Stack Development", "TensorFlow", "PyTorch", "RESTful API Design", "Spreken in het openbaar", "Creativiteit en Innovatie", "Onderzoek", "Teamwerk", "Leiderschap"],
          date: "aug. – okt. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Full-stack AI-assistent die multimodale emoties (stem en gezichtsuitdrukkingen) analyseert om real-time contextuele antwoorden te bieden.",
          details: [
            "Leiding gegeven aan de ontwikkeling van een full-stack AI-assistent die multimodale emoties (stem en gezichtsuitdrukkingen) analyseert om real-time contextuele antwoorden te bieden",
            "Een high-performance backend ontworpen met FastAPI, waarbij een RESTful API werd gecreëerd om de volledige AI-processing pipeline te beheren, van audio-input tot gesynthetiseerde spraakoutput",
            "Een Wav2Vec 2.0 model geoptimaliseerd voor vocale emotieherkenning door conversie naar ONNX, wat de inferentie-latentie op de CPU aanzienlijk verminderde",
            "Een privacy-gerichte frontend geïmplementeerd in Next.js en TypeScript, waarbij gezichtsemotie-analyse volledig client-side werd uitgevoerd met face-api.js",
            "De Groq API geïntegreerd met Llama 3.1 om razendsnelle empatische reacties te genereren, waarbij prompts dynamisch werden verrijkt met multimodale emotionele context",
            "Een end-to-end beveiligingsstrategie geïmplementeerd, waarbij alle gesprekken en feiten opgeslagen in SQLite werden versleuteld met AES"
          ]
        },
        {
          id: 'arstats',
          title: "ARSTATS",
          subtitle: null,
          category: "PRODUCT",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL"],
          date: "dec. 2024 – Heden",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Een full-stack webapplicatie voor datavisualisatie ontwikkeld met React, TypeScript en Python.",
          details: [
            "Een full-stack webapplicatie voor datavisualisatie ontwikkeld met React, TypeScript en Python",
            "Een PostgreSQL database geïmplementeerd met Supabase voor efficiënt databeheer en querying",
            "De Lightweight Charts bibliotheek gebruikt om interactieve en informatieve visualisaties te creëren",
            "RESTful API's ontworpen en onderhouden voor dataoverdracht tussen frontend en backend",
            "Python gebruikt om pipelines te bouwen die externe API's integreren en de database automatisch bijwerken"
          ]
        },
        {
          id: 'ludodidactas',
          title: "Ludodidactas",
          subtitle: "Edutainment Platform",
          category: "ONDERWIJS",
          technologies: ["React", "Node.js", "Express.js", "Unity", "MySQL", "Tailwind CSS", "JavaScript", "REST API's", "Git", "Vite", "JWT", "Game Development", "Softwarearchitectuur", "Teamwerk"],
          date: "mrt. – nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Uitgebreid educatief platform dat Unity-games combineert met een academisch tracking-dashboard.",
          details: [
            "De core full-stack architectuur ontworpen en het grootste deel van de codebase geïmplementeerd als technisch leider van het project",
            "Een schaalbare RESTful API opgezet met Node.js/Express.js, inclusief veilige JWT-authenticatie, real-time datasynchronisatie en analytics voor docenten",
            "Een high-performance dashboard gebouwd met React, Vite en Tailwind CSS, met integratie van Recharts voor datavisualisatie",
            "Unity WebGL-games naadloos geïntegreerd in de React-applicatie, waarbij een bi-directionele brug werd opgezet voor real-time voortgangsmonitoring",
            "Een geoptimaliseerd MySQL-schema ontworpen om complexe relaties tussen studenten, docenten en game-metrieken efficiënt te beheren",
            "Samengewerkt in teamverband via een hybride agile methodologie (Scrum/XP) en Git, waarbij strikte codekwaliteit en continue oplevering van features werden gewaarborgd"
          ]
        },
        {
          id: 'edulytics',
          title: "Edulytics",
          subtitle: "Geautomatiseerde Feedback Analyse",
          category: "PROTOTYPE",
          technologies: ["OpenAI API", "Python", "Google Cloud Platform (GCP)", "Pandas", "NumPy", "Teamwerk", "Leiderschap"],
          date: "okt. – nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Geautomatiseerd systeem voor analyse van studentenfeedback met behulp van NLP en OpenAI.",
          details: [
            "Leiding gegeven aan de ontwikkeling van een feedback-prototype, de architectuur gedefinieerd en het gebruik van Google Cloud beheerd",
            "NLP geïmplementeerd met de OpenAI API (ChatGPT) om de analyse van feedback van studenten te automatiseren",
            "Een prototype systeem ontworpen om feedback te verzamelen, verwerken en analyseren, met actiegerichte inzichten als resultaat",
            "Python, Pandas en NumPy gebruikt voor dataverwerking en API-integratie, en Google Cloud voor schaalbare deployment",
            "Versiebeheer van het team beheerd met Git om de organisatie van de code te waarborgen"
          ]
        },
        {
          id: 'librarium',
          title: "Librarium",
          subtitle: "Inventaris Systeem",
          category: "DESKTOP",
          technologies: ["Visual Basic .NET (VB.NET)", "MySQL", "Git", "Visual Studio", "Teamwerk", "Leiderschap"],
          date: "jul. – okt. 2024",
          link: "https://github.com/leo01102/librarium",
          github: "https://github.com/leo01102/librarium",
          description: "Integraal systeem voor voorraadbeheer en kassasysteem met beveiligde authenticatie.",
          details: [
            "Leiding gegeven aan de ontwikkeling van een integraal systeem voor voorraadbeheer en kassasysteem met beveiligde authenticatie en exporteerbare rapportages",
            "Een moderne gebruikersinterface (UI) ontworpen door implementatie van een eigen bibliotheek met aangepaste controls verspreid via NuGet",
            "Een CI/CD pipeline geïmplementeerd met GitHub Actions om het compileren en publiceren van pakketten te automatiseren",
            "De interactie met de MySQL database geoptimaliseerd om data-integriteit en efficiëntie te garanderen"
          ]
        },
        {
          id: 'bookstore',
          title: "Boekwinkel Inventaris Systeem",
          subtitle: "Web",
          category: "WEB",
          technologies: ["React", "Vite", "Express.js", "MySQL"],
          date: "okt. – nov. 2024",
          link: "#",
          github: null,
          description: "Full-stack webapplicatie voor voorraadbeheer van een boekwinkel.",
          details: [
            "Een full-stack webapplicatie ontwikkeld voor voorraadbeheer van een boekwinkel met React, Node.js en Express.js",
            "Een RESTful API geïmplementeerd voor efficiënte communicatie tussen frontend en backend",
            "Een responsieve en gebruiksvriendelijke interface ontworpen met React en Bootstrap",
            "Een MySQL database en CRUD-operaties gebruikt voor voorraadbeheer",
            "Git gebruikt voor versiebeheer en georganiseerde samenwerking"
          ]
        },
        {
          id: 'classic-ml',
          title: "Classic ML",
          subtitle: "Machine Learning Algoritmen",
          category: "ONDERWIJS",
          technologies: ["Machine Learning", "Algoritme-implementatie", "Python", "Data-analyse", "Datavisualisatie", "Teamwerk", "Leiderschap"],
          date: "mei – jun. 2025",
          link: "https://github.com/leo01102/classic-ml",
          github: "https://github.com/leo01102/classic-ml",
          description: "Implementatie vanaf nul van klassieke ML-algoritmen (K-means, regressie, perceptron).",
          details: [
            "K-means, lineaire regressie en perceptron algoritmen vanaf nul (“from scratch”) geïmplementeerd in Python",
            "Interactieve CLI-tools gebouwd voor data-invoer, real-time voorspellingen en visualisatie van resultaten",
            "Datapreprocessing, supervised en unsupervised learning toegepast op CSV-datasets",
            "Visualisatie van clusters en regressielijnen geïmplementeerd met Matplotlib"
          ]
        },
        {
          id: 'tecnoplus',
          title: "TecnoPlus",
          subtitle: "E-commerce",
          category: "WEB",
          technologies: ["WordPress Development", "WooCommerce", "Betaalgateways", "Responsief Webdesign", "Elementor", "Teamwerk", "Leiderschap"],
          date: "mei – jun. 2025",
          link: "#",
          github: null,
          description: "E-commerce site met betalingsintegratie en massaal productbeheer.",
          details: [
            "De technische ontwikkeling van een e-commerce site geleid, inclusief de coördinatie van WooCommerce-aanpassingen en CSS-implementatie",
            "Mercado Pago betaalgateway (testmodus) geïntegreerd en het beheer van producten en categorieën geautomatiseerd via massa-import (CSV)",
            "Een responsieve en gebruiksvriendelijke UX ontworpen met Elementor, waarbij navigatie, het checkout-proces en het zoeken naar producten werden geoptimaliseerd"
          ]
        }
      ]
    },
    conferences: {
      title: "Conferenties & Spreken",
      subtitle: "Eventos donde he compartido escenario.",
      recentTitle: "Recente Conferentie",
      items: [
        {
          event: "XXIII Informatica-bijeenkomst van La Rioja (EILAR)",
          role: "Spreker",
          date: "okt. 2025",
          description: "Presentatie van het prototype “Lumen – Multimodale Empatische AI-Assistent”, over onderwerpen als affective computing en conversationele kunstmatige intelligentie.",
          certificate: "https://www.linkedin.com/in/leonardo-rearte/details/certifications/1762355017963/single-media-viewer/",
          certificateLabel: "Bekijk Certificaat"
        }
      ]
    },
    contact: {
      title: "Laten we samenwerken.",
      description: "Vertel me kort wie je bent en welk probleem je wilt oplossen.",
      cta: "Stuur e-mail",
      socialsTitle: "SOCIALS",
      nextStepTitle: "VOLGENDE STAP",
      nextStepDescription: "Stuur me een e-mail en ik neem zo snel mogelijk contact met je op.",
      rights: "Alle rechten voorbehouden."
    }
  }
};
