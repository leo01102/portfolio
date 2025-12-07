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
        highlight1: "Sistemas Inteligentes",
        middle: " para ",
        highlight2: "Decisiones Estratégicas."
      },
      heroDescription: "Estudiante de 5º año de Ingeniería en Sistemas de Información. Diseño soluciones escalables en Python e IA que automatizan flujos de trabajo complejos y transforman datos crudos en inteligencia de negocios accionable.",
      whatICanDo: {
        title: "LO QUE HAGO",
        description: "Me especializo en convertir datos crudos en inteligencia estratégica utilizando sistemas full-stack seguros y escalables.",
        items: [
          { title: 'Automatización Inteligente', desc: 'Despliegue de agentes de IA y pipelines NLP para automatizar flujos de trabajo.' },
          { title: 'Sistemas de Datos Escalables', desc: 'Backends robustos en Python/FastAPI para procesamiento de alto volumen.' },
          { title: 'Inteligencia Estratégica', desc: 'Dashboards (TypeScript) que impulsan la toma de decisiones.' },
          { title: 'Seguridad por Diseño', desc: 'Seguridad estándar de la industria protegiendo la integridad de los datos.' }
        ]
      },
      stats: [
        { label: 'Años Programando', value: '+4' },
        { label: 'Proyectos', value: '9' },
        { label: 'Enfoque', value: 'IA & Estrategia' },
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
      title: "Stack de Confianza",
      items: [
        {
          name: 'El Cerebro (Lógica y Automatización)',
          skills: ['Python', 'FastAPI', 'PyTorch', 'LLMs (OpenAI / Groq)', 'RAG', 'Pandas', 'NumPy', 'Voice AI (STT / TTS)']
        },
        {
          name: 'La Interfaz (Entrega)',
          skills: ['TypeScript', 'React', 'Next.js', 'PyQt6', 'Tailwind CSS', 'Lightweight Charts']
        },
        {
          name: 'Los Cimientos (Fiabilidad)',
          skills: ['PostgreSQL', 'Supabase', 'Google Cloud (GCP)', 'Docker', 'Git', 'SQL']
        },
        {
          name: 'Seguridad e Infraestructura',
          skills: ['JWT Auth', 'Encriptación de Datos', 'Diseño de API Segura', 'Arquitectura de Sistemas']
        },
        {
          name: 'Núcleo Profesional',
          skills: ['Resolución Estratégica de Problemas', 'Pensamiento Sistémico', 'Liderazgo Técnico', 'Adaptabilidad', 'Comunicación']
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Sistemas diseñados para la automatización, estrategia e inteligencia.",
      projectDetails: "Detalles del Proyecto",
      lastUpdate: "ÚLTIMA ACTUALIZACIÓN",
      date: "DICIEMBRE 2025",
      viewProject: "Ver proyecto completo",
      viewDetails: "Ver detalles",
      items: [
        {
          id: 'lumen',
          visible: true,
          title: "Lumen",
          subtitle: "Agente IA Empático Multimodal",
          category: "INVESTIGACIÓN",
          technologies: ["Python", "FastAPI", "Next.js", "ONNX", "Wav2Vec2", "Computación Afectiva"],
          date: "Ago. – Oct. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Asistente de IA en tiempo real que analiza emociones de voz y faciales para respuestas contextuales.",
          details: [
            "Desarrollé una arquitectura de IA multimodal segura utilizando FastAPI y React, integrando Wav2Vec2 y Groq para procesar flujos de datos de audio y faciales simultáneos.",
            "Diseñé un motor de inferencia de alto rendimiento implementando ONNX Runtime con cuantización dinámica, reduciendo significativamente la latencia.",
            "Implementé una capa de persistencia segura utilizando encriptación Fernet y SQL buscable para salvaguardar datos biométricos sensibles.",
            "Automaticé la retención de contexto inteligente construyendo un pipeline recursivo que analiza el diálogo en insights estructurados."
          ]
        },
        {
          id: 'cue',
          visible: true,
          title: "Cue",
          subtitle: "Asistente IA de Escritorio",
          category: "PRODUCTO",
          technologies: ["Python", "PyQt6", "AssemblyAI", "Llama 3.1", "RAG", "Multi-threading"],
          date: "Nov. 2025 – Presente",
          link: "https://github.com/leo01102/cue",
          github: "https://github.com/leo01102/cue",
          description: "Agente de escritorio multi-hilo con capacidades RAG (Generación Aumentada por Recuperación).",
          details: [
            "Diseñé un agente de IA de escritorio multi-hilo usando Python y PyQt6, orquestando captura de audio asíncrona e inferencia de LLM sin congelar la UI.",
            "Integré funcionalidad RAG utilizando Scikit-learn/TF-IDF para inyectar dinámicamente contexto de base de conocimiento local en Llama 3.1.",
            "Optimicé un pipeline de procesamiento de señales end-to-end usando NumPy para remuestreo de audio en tiempo real antes de la carga a la nube."
          ]
        },
        {
          id: 'arstats',
          visible: true,
          title: "ARSTATS",
          subtitle: "Plataforma de Estrategia de Datos",
          category: "PRODUCTO",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL", "Pipelines ETL"],
          date: "Dic. 2024 – Presente",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Plataforma de inteligencia financiera que automatiza la ingesta de más de 50 indicadores económicos.",
          details: [
            "Construí un pipeline ETL modular en Python para automatizar la ingesta y normalización de indicadores económicos de APIs gubernamentales dispares.",
            "Desarrollé un dashboard de alto rendimiento usando React y Vite, permitiendo visualización en tiempo real de tendencias de mercado vía componentes optimizados.",
            "Ideé un sistema de validación de datos resiliente para detectar y corregir automáticamente anomalías estadísticas históricas.",
            "Mejoré la escalabilidad del sistema implementando seguridad estricta de tipos en TypeScript y cargadores de base de datos por lotes eficientes."
          ]
        },
        {
          id: 'ludodidactas',
          visible: true,
          title: "Ludodidactas",
          subtitle: "Ecosistema Educativo",
          category: "EDUCACIÓN",
          technologies: ["Node.js", "React", "Unity", "MySQL", "Sistemas Distribuidos"],
          date: "Mar. – Nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Plataforma escalable que une juegos Unity WebGL con un dashboard académico en React.",
          details: [
            "Arquitecté un sistema distribuido escalable integrando Unity WebGL y React, ingiriendo telemetría en tiempo real en MySQL.",
            "Desarrollé un motor de análisis automatizado que transforma métricas crudas de juego en insights educativos estratégicos vía agregaciones SQL.",
            "Fortifiqué la infraestructura de seguridad usando un patrón Repository en capas con autenticación JWT y hashing Bcrypt.",
            "Agilicé la gestión de estado del frontend usando TanStack Query, reduciendo la latencia para consultas de alto volumen."
          ]
        },
        {
          id: 'edulytics',
          visible: true,
          title: "Edulytics",
          subtitle: "Motor de Insights Automatizado",
          category: "PROTOTIPO",
          technologies: ["Python", "LLMs (OpenAI / Groq)", "GCP", "Pandas", "NLP"],
          date: "Oct. – Nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Sistema automatizado de análisis de feedback utilizando NLP para estrategias de retención.",
          details: [
            "Orquesté un pipeline de inteligencia de datos automatizado usando Python/GCP para ingerir feedback y despachar estrategias de intervención.",
            "Arquitecté un sistema híbrido de NLP combinando heurísticas de Pandas con GPT-4o para análisis de sentimiento cualitativo.",
            "Diseñé un módulo estadístico robusto usando NumPy para correlacionar carga académica con métricas de bienestar mental."
          ]
        },
        {
          id: 'librarium',
          visible: false,
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
          visible: false,
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
          visible: false,
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
          visible: false,
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
          description: "Presentación de “Lumen – Asistente de IA Empático Multimodal”, abordando la arquitectura de sistemas de computación afectiva y el futuro de la IA conversacional.",
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
        highlight1: "Intelligent Systems",
        middle: " for ",
        highlight2: "Strategic Decisions."
      },
      heroDescription: "5th-year Information Systems Engineering student. I architect scalable Python & AI solutions that automate complex workflows and transform raw data into actionable business intelligence.",
      whatICanDo: {
        title: "WHAT I CAN DO",
        description: "I specialize in turning raw data into strategic intelligence using secure, scalable full-stack systems.",
        items: [
          { title: 'Intelligent Automation', desc: 'Deploying AI agents & NLP pipelines to automate workflows.' },
          { title: 'Scalable Data Systems', desc: 'Robust Python/FastAPI backends for high-volume processing.' },
          { title: 'Strategic Intelligence', desc: 'Dashboards (TypeScript) that drive decision-making.' },
          { title: 'Secure-by-Design', desc: 'Industry-standard security protecting data integrity.' }
        ]
      },
      stats: [
        { label: 'Years Coding', value: '+4' },
        { label: 'Projects', value: '9' },
        { label: 'Focus', value: 'AI & Strategy' },
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
      title: "Stack of Confidence",
      items: [
        {
          name: 'The Brain (Logic & Automation)',
          skills: ['Python', 'FastAPI', 'PyTorch', 'LLMs (OpenAI / Groq)', 'RAG', 'Pandas', 'NumPy', 'Voice AI (STT / TTS)']
        },
        {
          name: 'The Interface (Delivery)',
          skills: ['TypeScript', 'React', 'Next.js', 'PyQt6', 'Tailwind CSS', 'Lightweight Charts']
        },
        {
          name: 'The Foundation (Reliability)',
          skills: ['PostgreSQL', 'Supabase', 'Google Cloud (GCP)', 'Docker', 'Git', 'SQL']
        },
        {
          name: 'Security & Strategy',
          skills: ['JWT Auth', 'Data Encryption', 'Secure API Design', 'System Architecture']
        },
        {
          name: 'Professional Core',
          skills: ['Strategic Problem Solving', 'Systems Thinking', 'Technical Leadership', 'Adaptability', 'Communication']
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Systems designed for automation, strategy, and intelligence.",
      projectDetails: "Project Details",
      lastUpdate: "LAST UPDATE",
      date: "DECEMBER 2025",
      viewProject: "View full project",
      viewDetails: "View details",
      items: [
        {
          id: 'lumen',
          visible: true,
          title: "Lumen",
          subtitle: "Multimodal Empathic AI Agent",
          category: "RESEARCH",
          technologies: ["Python", "FastAPI", "Next.js", "ONNX", "Wav2Vec2", "Affective Computing"],
          date: "Aug. – Oct. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Real-time AI assistant analyzing voice and facial emotions for contextual responses.",
          details: [
            "Developed a secure multimodal AI architecture using FastAPI and React, integrating Wav2Vec2 and Groq to process simultaneous audio and facial data flows.",
            "Engineered a high-performance inference engine by implementing ONNX Runtime with dynamic quantization, significantly reducing latency.",
            "Implemented a secure persistence layer using Fernet encryption and searchable SQL to safeguard sensitive biometric data.",
            "Automated intelligent context retention by building a recursive pipeline that parses dialogue into structured insights."
          ]
        },
        {
          id: 'cue',
          visible: true,
          title: "Cue",
          subtitle: "Desktop AI Assistant",
          category: "PRODUCT",
          technologies: ["Python", "PyQt6", "AssemblyAI", "Llama 3.1", "RAG", "Multi-threading"],
          date: "Nov. 2025 – Present",
          link: "https://github.com/leo01102/cue",
          github: "https://github.com/leo01102/cue",
          description: "Multi-threaded desktop agent with RAG (Retrieval-Augmented Generation) capabilities.",
          details: [
            "Designed a multi-threaded desktop AI agent using Python and PyQt6, orchestrating asynchronous audio capture and LLM inference without UI freezing.",
            "Integrated RAG functionality using Scikit-learn/TF-IDF to dynamically inject local knowledge base context into Llama 3.1.",
            "Optimized an end-to-end signal processing pipeline using NumPy for real-time audio resampling before cloud offloading."
          ]
        },
        {
          id: 'arstats',
          visible: true,
          title: "ARSTATS",
          subtitle: "Data Strategy Platform",
          category: "PRODUCT",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL", "ETL Pipelines"],
          date: "Dec. 2024 – Present",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Financial intelligence platform automating the ingestion of 50+ economic indicators.",
          details: [
            "Constructed a modular Python ETL pipeline to automate the ingestion and normalization of economic indicators from disparate government APIs.",
            "Built a high-performance dashboard using React and Vite, enabling real-time visualization of market trends via optimized charts.",
            "Devised a resilient data validation system to automatically detect and correct historical statistical anomalies.",
            "Enhanced system scalability by implementing strict TypeScript safety and efficient batch database loaders."
          ]
        },
        {
          id: 'ludodidactas',
          visible: true,
          title: "Ludodidactas",
          subtitle: "Educational Ecosystem",
          category: "EDUCATION",
          technologies: ["Node.js", "React", "Unity", "MySQL", "Distributed Systems"],
          date: "Mar. – Nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Scalable platform bridging Unity WebGL games with a React academic dashboard.",
          details: [
            "Architected a scalable distributed system integrating Unity WebGL and React, ingesting real-time telemetry into MySQL.",
            "Developed an automated analytics engine transforming raw gameplay metrics into strategic educational insights via SQL aggregations.",
            "Fortified security infrastructure using a layered Repository pattern with JWT authentication and Bcrypt hashing.",
            "Streamlined frontend state management using TanStack Query, reducing latency for high-volume queries."
          ]
        },
        {
          id: 'edulytics',
          visible: true,
          title: "Edulytics",
          subtitle: "Automated Insight Engine",
          category: "PROTOTYPE",
          technologies: ["Python", "LLMs (OpenAI / Groq)", "GCP", "Pandas", "NLP"],
          date: "Oct. – Nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Automated feedback analysis system utilizing NLP for student retention strategies.",
          details: [
            "Orchestrated an automated data intelligence pipeline using Python/GCP to ingest feedback and dispatch intervention strategies.",
            "Architected a hybrid NLP system combining Pandas heuristics with GPT-4o for qualitative sentiment analysis.",
            "Engineered a robust statistical module using NumPy to correlate academic load with mental well-being metrics."
          ]
        },
        {
          id: 'librarium',
          visible: false,
          title: "Librarium",
          subtitle: "Inventory System",
          category: "DESKTOP",
          technologies: ["Visual Basic .NET", "MySQL", "Git"],
          date: "Jul. – Oct. 2024",
          link: "https://github.com/leo01102/librarium",
          github: "https://github.com/leo01102/librarium",
          description: "Comprehensive inventory management system.",
          details: [
            "Led the development of a comprehensive inventory management and point-of-sale system with secure authentication and exportable reporting",
            "Designed a modern User Interface (UI) by implementing a custom control library distributed via NuGet",
            "Implemented a CI/CD pipeline with GitHub Actions to automate build and package publication processes",
            "Optimized MySQL database interactions to ensure data integrity and efficiency"
          ]
        },
        {
          id: 'bookstore',
          visible: false,
          title: "Bookstore Inventory System",
          subtitle: "Web",
          category: "WEB",
          technologies: ["React", "Express.js", "MySQL"],
          date: "Oct. – Nov. 2024",
          link: "#",
          github: null,
          description: "Full-stack web application for inventory management.",
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
          visible: false,
          title: "Classic ML",
          subtitle: "ML Algorithms",
          category: "EDUCATION",
          technologies: ["Python", "Machine Learning"],
          date: "May – Jun. 2025",
          link: "https://github.com/leo01102/classic-ml",
          github: "https://github.com/leo01102/classic-ml",
          description: "Implementation of ML algorithms from scratch.",
          details: [
            "Implemented K-means, linear regression, and perceptron algorithms from scratch in Python",
            "Built interactive CLI tools for data input, real-time predictions, and result visualization",
            "Applied data preprocessing, supervised, and unsupervised learning on CSV datasets",
            "Implemented visualization of clusters and regression lines using Matplotlib"
          ]
        },
        {
          id: 'tecnoplus',
          visible: false,
          title: "TecnoPlus",
          subtitle: "E-commerce",
          category: "WEB",
          technologies: ["WordPress", "WooCommerce"],
          date: "May – Jun. 2025",
          link: "#",
          github: null,
          description: "E-commerce site with payment integration.",
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
          description: "Presented “Lumen – Multimodal Empathic AI Assistant,” discussing the architecture of affective computing systems and the future of conversational AI.",
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
        highlight1: "Intelligente Systemen",
        middle: " voor ",
        highlight2: "Strategische Beslissingen."
      },
      heroDescription: "Vijfdejaarsstudent Ingenieurswetenschappen (Informatiesystemen). Ik ontwerp schaalbare Python- en AI-oplossingen die complexe workflows automatiseren en ruwe data omzetten in actiegerichte business intelligence.",
      whatICanDo: {
        title: "WAT IK KAN",
        description: "Ik specialiseer me in het omzetten van ruwe data naar strategische inzichten met behulp van veilige, schaalbare full-stack systemen.",
        items: [
          { title: 'Intelligente Automatisering', desc: 'Implementatie van AI-agenten & NLP-pipelines voor workflow-automatisatie.' },
          { title: 'Schaalbare Datasystemen', desc: 'Robuuste Python/FastAPI backends voor verwerking van grote volumes.' },
          { title: 'Strategische Intelligentie', desc: 'Dashboards (TypeScript) die besluitvorming aansturen.' },
          { title: 'Secure-by-Design', desc: 'Industriestandaard beveiliging die data-integriteit beschermt.' }
        ]
      },
      stats: [
        { label: 'Jaren Coderen', value: '+4' },
        { label: 'Projecten', value: '9' },
        { label: 'Focus', value: 'AI & Strategie' },
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
      title: "Tech Stack",
      items: [
        {
          name: 'Het Brein (Logica & Automatisering)',
          skills: ['Python', 'FastAPI', 'PyTorch', 'LLMs (OpenAI / Groq)', 'RAG', 'Pandas', 'NumPy', 'Voice AI (STT / TTS)']
        },
        {
          name: 'De Interface (Levering)',
          skills: ['TypeScript', 'React', 'Next.js', 'PyQt6', 'Tailwind CSS', 'Lightweight Charts']
        },
        {
          name: 'De Fundering (Betrouwbaarheid)',
          skills: ['PostgreSQL', 'Supabase', 'Google Cloud (GCP)', 'Docker', 'Git', 'SQL']
        },
        {
          name: 'Beveiliging & Infrastructuur',
          skills: ['JWT Auth', 'Data-encryptie', 'Secure API Design', 'Systeemarchitectuur']
        },
        {
          name: 'Professionele Kern',
          skills: ['Strategisch Probleemoplossen', 'Systeemdenken', 'Technisch Leiderschap', 'Aanpassingsvermogen', 'Communicatie']
        }
      ]
    },
    projects: {
      title: "Uitgelichte Projecten",
      subtitle: "Systemen ontworpen voor automatisering, strategie en intelligentie.",
      projectDetails: "Projectdetails",
      lastUpdate: "LAATSTE UPDATE",
      date: "DECEMBER 2025",
      viewProject: "Bekijk volledig project",
      viewDetails: "Bekijk details",
      items: [
        {
          id: 'lumen',
          visible: true,
          title: "Lumen",
          subtitle: "Multimodale Empatische AI-Agent",
          category: "ONDERZOEK",
          technologies: ["Python", "FastAPI", "Next.js", "ONNX", "Wav2Vec2", "Affective Computing"],
          date: "aug. – okt. 2025",
          link: "https://github.com/leo01102/lumen",
          github: "https://github.com/leo01102/lumen",
          description: "Real-time AI-assistent die stem- en gezichtsemoties analyseert voor contextuele antwoorden.",
          details: [
            "Ontwikkelde een veilige multimodale AI-architectuur met FastAPI en React, die Wav2Vec2 en Groq integreert om gelijktijdige audio- en gezichtsdatastromen te verwerken.",
            "Ontwierp een high-performance inferentie-engine door implementatie van ONNX Runtime met dynamische kwantisatie, wat de latentie aanzienlijk verminderde.",
            "Implementeerde een veilige persistentielaag met Fernet-encryptie en doorzoekbare SQL om gevoelige biometrische gegevens te beschermen.",
            "Automatiseerde intelligent contextbehoud door een recursieve pipeline te bouwen die dialoog omzet in gestructureerde inzichten."
          ]
        },
        {
          id: 'cue',
          visible: true,
          title: "Cue",
          subtitle: "Desktop AI-Assistent",
          category: "PRODUCT",
          technologies: ["Python", "PyQt6", "AssemblyAI", "Llama 3.1", "RAG", "Multi-threading"],
          date: "nov. 2025 – Heden",
          link: "https://github.com/leo01102/cue",
          github: "https://github.com/leo01102/cue",
          description: "Multi-threaded desktop-agent met RAG (Retrieval-Augmented Generation) mogelijkheden.",
          details: [
            "Ontwierp een multi-threaded desktop AI-agent met Python en PyQt6, die asynchrone audio-opname en LLM-inferentie orkestreert zonder de UI te bevriezen.",
            "Integreerde RAG-functionaliteit met Scikit-learn/TF-IDF om dynamisch lokale kennisbasis-context in Llama 3.1 te injecteren.",
            "Optimaliseerde een end-to-end signaalverwerkingspipeline met NumPy voor real-time audio-resampling vóór cloud-upload."
          ]
        },
        {
          id: 'arstats',
          visible: true,
          title: "ARSTATS",
          subtitle: "Datastrategie Platform",
          category: "PRODUCT",
          technologies: ["React", "TypeScript", "Python", "PostgreSQL", "ETL Pipelines"],
          date: "dec. 2024 – Heden",
          link: "https://github.com/leo01102/arstats",
          github: "https://github.com/leo01102/arstats",
          description: "Financieel intelligentieplatform dat de inname van 50+ economische indicatoren automatiseert.",
          details: [
            "Bouwde een modulaire Python ETL-pipeline om de inname en normalisatie van economische indicatoren van diverse overheids-API's te automatiseren.",
            "Ontwikkelde een high-performance dashboard met React en Vite, voor real-time visualisatie van markttrends via geoptimaliseerde grafieken.",
            "Ontwierp een veerkrachtig datavalidatiesysteem om automatisch historische statistische anomalieën te detecteren en corrigeren.",
            "Verbeterde de systeemschaalbaarheid door implementatie van strikte TypeScript-veiligheid en efficiënte batch-database-loaders."
          ]
        },
        {
          id: 'ludodidactas',
          visible: true,
          title: "Ludodidactas",
          subtitle: "Educatief Ecosysteem",
          category: "ONDERWIJS",
          technologies: ["Node.js", "React", "Unity", "MySQL", "Gedistribueerde Systemen"],
          date: "mrt. – nov. 2025",
          link: "https://github.com/leo01102/ludodidactas",
          github: "https://github.com/leo01102/ludodidactas",
          description: "Schaalbaar platform dat Unity WebGL-games koppelt aan een React academisch dashboard.",
          details: [
            "Architectuur ontworpen voor een schaalbaar gedistribueerd systeem dat Unity WebGL en React integreert, met real-time telemetrie-inname in MySQL.",
            "Ontwikkelde een geautomatiseerde analyse-engine die ruwe game-metrics omzet in strategische educatieve inzichten via SQL-aggregaties.",
            "Versterkte de beveiligingsinfrastructuur met een gelaagd Repository-patroon, JWT-authenticatie en Bcrypt-hashing.",
            "Stroomlijnde frontend-statebeheer met TanStack Query, wat latentie voor volumesrijke queries verminderde."
          ]
        },
        {
          id: 'edulytics',
          visible: true,
          title: "Edulytics",
          subtitle: "Geautomatiseerde Insight Engine",
          category: "PROTOTYPE",
          technologies: ["Python", "LLMs (OpenAI / Groq)", "GCP", "Pandas", "NLP"],
          date: "okt. – nov. 2024",
          link: "https://github.com/leo01102/edulytics",
          github: "https://github.com/leo01102/edulytics",
          description: "Geautomatiseerd feedback-analysesysteem met NLP voor studentenbehoudstrategieën.",
          details: [
            "Orkestreerde een geautomatiseerde data-intelligentie pipeline met Python/GCP om feedback in te nemen en interventiestrategieën te verzenden.",
            "Ontwierp een hybride NLP-systeem dat Pandas-heuristieken combineert met GPT-4o voor kwalitatieve sentimentanalyse.",
            "Ontwikkelde een robuuste statistische module met NumPy om academische belasting te correleren met welzijnsmetrieken."
          ]
        },
        {
          id: 'librarium',
          visible: false,
          title: "Librarium",
          subtitle: "Inventaris Systeem",
          category: "DESKTOP",
          technologies: ["Visual Basic .NET", "MySQL", "Git"],
          date: "jul. – okt. 2024",
          link: "https://github.com/leo01102/librarium",
          github: "https://github.com/leo01102/librarium",
          description: "Integraal systeem voor voorraadbeheer.",
          details: [
            "Leiding gegeven aan de ontwikkeling van een integraal systeem voor voorraadbeheer en kassasysteem met beveiligde authenticatie en exporteerbare rapportages",
            "Een moderne gebruikersinterface (UI) ontworpen door implementatie van een eigen bibliotheek met aangepaste controls verspreid via NuGet",
            "Een CI/CD pipeline geïmplementeerd met GitHub Actions om het compileren en publiceren van pakketten te automatiseren",
            "De interactie met de MySQL database geoptimaliseerd om data-integriteit en efficiëntie te garanderen"
          ]
        },
        {
          id: 'bookstore',
          visible: false,
          title: "Boekwinkel Inventaris Systeem",
          subtitle: "Web",
          category: "WEB",
          technologies: ["React", "Express.js", "MySQL"],
          date: "okt. – nov. 2024",
          link: "#",
          github: null,
          description: "Full-stack webapplicatie voor voorraadbeheer.",
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
          visible: false,
          title: "Classic ML",
          subtitle: "ML Algoritmen",
          category: "ONDERWIJS",
          technologies: ["Python", "Machine Learning"],
          date: "mei – jun. 2025",
          link: "https://github.com/leo01102/classic-ml",
          github: "https://github.com/leo01102/classic-ml",
          description: "Implementatie van ML-algoritmen vanaf nul.",
          details: [
            "K-means, lineaire regressie en perceptron algoritmen vanaf nul (“from scratch”) geïmplementeerd in Python",
            "Interactieve CLI-tools gebouwd voor data-invoer, real-time voorspellingen en visualisatie van resultaten",
            "Datapreprocessing, supervised en unsupervised learning toegepast op CSV-datasets",
            "Visualisatie van clusters en regressielijnen geïmplementeerd met Matplotlib"
          ]
        },
        {
          id: 'tecnoplus',
          visible: false,
          title: "TecnoPlus",
          subtitle: "E-commerce",
          category: "WEB",
          technologies: ["WordPress", "WooCommerce"],
          date: "mei – jun. 2025",
          link: "#",
          github: null,
          description: "E-commerce site met betalingsintegratie.",
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
          description: "Presentatie van “Lumen – Multimodale Empathische AI-assistent”, waarbij de architectuur van affective computing-systemen en de toekomst van conversationele AI werden besproken.",
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
      rights: "Alle rechten voorbehouden."
    }
  }
};