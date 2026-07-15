export const translations = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      contact: "Contact",
      language: "Language",
      theme: "Theme",
      darkMode: "Dark Mode",
      lightMode: "Light Mode"
    },
    work: {
      title: "Hello, I’m Valentin.",
      subtitle: "Systems Engineering Student at UTN Córdoba & Software Developer.",
      keyFeatures: "Key Features",
      skills: "Skills",
      sourceCode: "Source Code",
      liveProject: "Live Project",
      activeDev: "Active Development",
      currentlyBuilding: "Currently Building",
      projects: [
        {
          id: '01',
          name: 'Expense Tracker',
          tagline: 'Personal Finance Management Platform',
          desc: 'A personal finance management platform designed to help users track expenses, manage accounts, categorize transactions, and monitor their financial activity through a secure and scalable backend architecture.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'JWT', 'REST APIs', 'Maven', 'Git'],
          features: [
            'User authentication and authorization with JWT',
            'Account and balance management',
            'Expense and income tracking',
            'Transaction categorization and tagging',
            'Ownership-based access control',
            'RESTful API architecture',
            'Data validation and exception handling',
            'Relational database integration'
          ],
          skills: 'Backend Development, API Design, Database Modeling, Authentication & Security, Problem Solving, Software Architecture.',
          linkText: 'Source Code',
          linkUrl: 'https://github.com/ValGP/Expense-Tracker',
          liveUrl: 'https://expense-tracker-frontend-iota-nine.vercel.app'
        },
        {
          id: '02',
          name: 'Appointment Management System',
          tagline: 'Business Appointment Scheduling Platform',
          desc: 'A scheduling platform designed for service-based businesses to manage appointments, professionals, services, availability, and customer bookings through a centralized system.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'REST APIs', 'React', 'Git'],
          features: [
            'Appointment booking and management',
            'Service and professional administration',
            'Availability and schedule configuration',
            'Business hours management',
            'Appointment status tracking',
            'Role-based access control',
            'Conflict prevention and booking validation',
            'Administrative dashboard'
          ],
          skills: 'Business Process Modeling, Backend Development, System Design, Database Design, API Development, Problem Solving.',
          linkText: 'Source Code',
          linkUrl: 'https://github.com/ValGP/AppointmentMS-Template',
          liveUrl: 'https://bibe-estetica-prueba-front.vercel.app/'
        },
        {
          id: '03',
          name: 'Appointment Booking SaaS',
          tagline: 'Multi-tenant Business Scheduling & Operations Platform',
          desc: 'A scalable multi-tenant SaaS scheduling platform designed to allow independent service-based businesses (tenants) to manage bookings, customize service catalogs, and monitor scheduling metrics under a subscription-based model with secure, isolated tenant database architecture.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'JWT', 'REST APIs', 'React', 'TypeScript', 'Docker'],
          features: [
            'Multi-tenant database isolation: Secure data segregation per business (tenant).',
            'Centralized customer booking wizard: Fast, multi-step scheduling flow with real-time slot availability checking (focused purely on reservation logistics).',
            'Flexible configuration per tenant: Customize work schedules, professional rosters, and service catalogs.',
            'Role-based access control: Granular access management for Admins (business owners), Professionals, and Customers.',
            'Conflict resolution algorithms: Prevents double-booking and validates overlapping slots against active business hours and custom agenda blocks.',
            'SaaS subscription management: Tier-based enforcement of tenant-specific operational limits (e.g., maximum active professionals or bookings).',
            'Operational metrics dashboard: Live tracking of tenant booking volumes, occupancy rates, and peak scheduling hours.'
          ],
          skills: 'SaaS Architecture, Database Multi-tenancy, Full-Stack Development, Secure API Design, Conflict Resolution Algorithms, Relational Database Design.',
          linkText: 'Source Code',
          linkUrl: 'https://github.com/ValGP/Saas-Appointment-Platform',
          status: 'wip'
        }
      ]
    },
    about: {
      title: "Hi I’m Valentín Garcia Pintos, Software Developer.",
      bio1: "I'm an advanced Systems Engineering student at UTN Córdoba passionate about software development, systems thinking, and solving real-world problems through technology.",
      bio2: "I enjoy working across different areas of software, from backend development and web applications to automation and AI-powered solutions. My focus is on understanding challenges, designing effective solutions, and turning ideas into functional products.",
      bio3: "Currently, I'm building personal projects while exploring how emerging technologies and AI are transforming the way software is designed, developed, and delivered.",
      techTitle: "Tech & Tools",
      langTitle: "Languages & Frameworks",
      toolsTitle: "Tools",
      skillsTitle: "Core Skills",
      skillsValue: "Software Development, Backend Engineering, Problem Solving, System Design, REST API Development, Database Modeling, Business Process Analysis, Technical Documentation, Testing & Debugging, Continuous Learning.",
      cta: "I am thrilled to answer to your next project",
      viewResume: "View Resume",
      cvPath: "/cv.pdf"
    },
    contact: {
      title: "Let’s start a conversation.",
      subtitle: "Whether you have a project in mind, want to discuss a partnership, or just say hello, drop me a message.",
      labels: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
        sending: "Sending...",
        another: "Send another message"
      },
      placeholders: {
        name: "e.g., Jane Doe",
        email: "e.g., jane@example.com",
        subject: "e.g., Software Project Inquiry",
        message: "Tell me about your project or inquiry..."
      },
      sidebar: {
        contact: "Direct Contact",
        location: "Location",
        locationValue: "Córdoba, Argentina",
        remote: "Available for remote work and contracts."
      },
      alert: {
        success: "Message sent successfully! I'll get back to you soon.",
        error: "An error occurred. Please try again."
      }
    }
  },
  es: {
    nav: {
      work: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto",
      language: "Idioma",
      theme: "Tema",
      darkMode: "Modo Oscuro",
      lightMode: "Modo Claro"
    },
    work: {
      title: "Hola, soy Valentin.",
      subtitle: "Estudiante de Ingeniería en Sistemas en la UTN Córdoba y Desarrollador de Software.",
      keyFeatures: "Características Clave",
      skills: "Habilidades",
      sourceCode: "Código Fuente",
      liveProject: "Ver Proyecto",
      activeDev: "Desarrollo Activo",
      currentlyBuilding: "En Desarrollo",
      projects: [
        {
          id: '01',
          name: 'Expense Tracker',
          tagline: 'Plataforma de Gestión de Finanzas Personales',
          desc: 'Una plataforma de gestión de finanzas personales diseñada para ayudar a los usuarios a registrar gastos, administrar cuentas, categorizar transacciones y monitorear su actividad financiera a través de una arquitectura backend segura y escalable.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'JWT', 'REST APIs', 'Maven', 'Git'],
          features: [
            'Autenticación y autorización de usuarios con JWT',
            'Gestión de cuentas bancarias y saldos',
            'Seguimiento y registro de ingresos y gastos',
            'Categorización y etiquetado de transacciones',
            'Control de acceso basado en la propiedad de los datos',
            'Arquitectura de API RESTful limpia',
            'Validación de datos y manejo global de excepciones',
            'Integración con base de datos relacional PostgreSQL'
          ],
          skills: 'Desarrollo Backend, Diseño de APIs, Modelado de Bases de Datos, Autenticación y Seguridad, Resolución de Problemas, Arquitectura de Software.',
          linkText: 'Código Fuente',
          linkUrl: 'https://github.com/ValGP/Expense-Tracker',
          liveUrl: 'https://expense-tracker-frontend-iota-nine.vercel.app'
        },
        {
          id: '02',
          name: 'Appointment Management System',
          tagline: 'Plataforma de Reserva de Turnos para Negocios',
          desc: 'Una plataforma de reservas diseñada para negocios basados en servicios para gestionar citas, profesionales, servicios, disponibilidad y reservas de clientes a través de un sistema centralizado.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'REST APIs', 'React', 'Git'],
          features: [
            'Reserva, reprogramación y gestión de turnos',
            'Administración de servicios y de profesionales asociados',
            'Configuración de disponibilidad y horarios de atención',
            'Gestión centralizada de turnos comerciales',
            'Seguimiento y actualización del estado de las citas',
            'Control de acceso de usuarios basado en roles',
            'Validación de reservas y prevención automática de solapamientos',
            'Panel de control administrativo e intuitivo'
          ],
          skills: 'Modelado de Procesos de Negocio, Desarrollo Backend, Diseño de Sistemas, Diseño de Bases de Datos, Desarrollo de APIs, Resolución de Problemas.',
          linkText: 'Código Fuente',
          linkUrl: 'https://github.com/ValGP/AppointmentMS-Template',
          liveUrl: 'https://bibe-estetica-prueba-front.vercel.app/'
        },
        {
          id: '03',
          name: 'Appointment Booking SaaS',
          tagline: 'Plataforma SaaS Multi-negocio de Operaciones y Reservas',
          desc: 'Una plataforma SaaS multi-negocio escalable diseñada para permitir que negocios independientes basados en servicios gestionen reservas, personalicen catálogos de servicios y monitoreen métricas a través de una arquitectura de base de datos aislada y segura.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'JWT', 'REST APIs', 'React', 'TypeScript', 'Docker'],
          features: [
            'Aislamiento de base de datos multi-negocio: Segregación segura de datos por negocio.',
            'Asistente de reserva centralizado: Flujo rápido en varios pasos con verificación de disponibilidad en tiempo real (enfocado puramente en la logística de reservas).',
            'Configuración flexible por negocio: Personalización de horarios de trabajo, lista de profesionales y catálogos de servicios.',
            'Control de acceso basado en roles: Gestión de permisos granulares para Administradores (dueños de negocios), Profesionales y Clientes.',
            'Algoritmos de resolución de conflictos: Previene la duplicación de reservas y valida solapamientos contra horarios comerciales y bloqueos de agenda.',
            'Gestión de suscripciones SaaS: Aplicación de límites operativos por negocio según el nivel de suscripción (ej., máximo de profesionales activos o reservas).',
            'Panel de métricas operacionales: Seguimiento en tiempo real de volúmenes de reservas de negocios, tasas de ocupación y horas pico.'
          ],
          skills: 'Arquitectura SaaS, Multi-tenancy en Bases de Datos, Desarrollo Full-Stack, Diseño de APIs Seguras, Algoritmos de Resolución de Conflictos, Diseño de Bases de Datos Relacionales.',
          linkText: 'Código Fuente',
          linkUrl: 'https://github.com/ValGP/Saas-Appointment-Platform',
          status: 'wip'
        }
      ]
    },
    about: {
      title: "Hola, soy Valentin Garcia Pintos, Desarrollador de Software.",
      bio1: "Soy un estudiante avanzado de Ingeniería en Sistemas en la UTN Córdoba apasionado por el desarrollo de software, el pensamiento sistémico y la resolución de problemas reales a través de la tecnología.",
      bio2: "Disfruto trabajar en diferentes áreas del software, desde desarrollo backend y aplicaciones web hasta automatización y soluciones impulsadas por IA. Mi enfoque está en comprender los desafíos, diseñar soluciones efectivas y transformar ideas en productos funcionales.",
      bio3: "Actualmente, desarrollo proyectos personales mientras exploro cómo las tecnologías emergentes y la IA están transformando la forma en que se diseña, desarrolla y distribuye el software.",
      techTitle: "Tecnologías y Herramientas",
      langTitle: "Lenguajes y Frameworks",
      toolsTitle: "Herramientas",
      skillsTitle: "Habilidades Clave",
      skillsValue: "Desarrollo de Software, Ingeniería Backend, Resolución de Problemas, Diseño de Sistemas, Desarrollo de APIs REST, Modelado de Bases de Datos, Análisis de Procesos de Negocio, Documentación Técnica, Pruebas y Depuración, Aprendizaje Continuo.",
      cta: "Me encantaría sumarme a tu próximo proyecto",
      viewResume: "Ver Currículum",
      cvPath: "/cv.pdf"
    },
    contact: {
      title: "Comencemos una conversación.",
      subtitle: "Ya sea que tengas un proyecto en mente, quieras discutir una colaboración o simplemente saludar, déjame un mensaje.",
      labels: {
        name: "Tu Nombre",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        another: "Enviar otro mensaje"
      },
      placeholders: {
        name: "ej., Juan Pérez",
        email: "ej., juan@ejemplo.com",
        subject: "ej., Consulta de Proyecto de Software",
        message: "Cuéntame sobre tu proyecto o consulta..."
      },
      sidebar: {
        contact: "Contacto Directo",
        location: "Ubicación",
        locationValue: "Córdoba, Argentina",
        remote: "Disponible para trabajo remoto y contratos."
      },
      alert: {
        success: "¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.",
        error: "Ha ocurrido un error al enviar. Por favor inténtalo de nuevo."
      }
    }
  }
};
