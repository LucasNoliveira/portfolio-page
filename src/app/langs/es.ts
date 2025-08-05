export const es = {
  home: "Home",
  about: "Sobre",
  projects: "Proyectos",
  services: "Servicios",
  contact: "Contacto",
  warningTitle: "En Desarrollo",
  warningMessage: "Este portafolio está en desarrollo acelerado. Pronto estará completo, pero ya puedes tener una buena idea de mi experiencia.",
  downloadCV: "Descargar Resumen",
  readOnline: "Leer en línea",
  heroDescription: "Soy ingeniero de software con más de 3 años de experiencia en el desarrollo de aplicaciones eficientes y escalables en diversos sectores. Me especializo tanto en desarrollo front-end como back-end, creando sistemas de alto rendimiento que generan impacto empresarial. Siempre estoy buscando nuevos desafíos para mejorar mis habilidades.",
  getInTouch: "Ponerse en Contacto",
  experience: "Experiencia",
  showMore: "Mostrar Más",
  showLess: "Mostrar Menos",
  sendMeAnEmail: "Envíame un correo electrónico",
  sendMeAWhatsapp: "Envíame un mensaje por WhatsApp",
  sendMeATelegram: "Envíame un mensaje por Telegram",
  sendMeADiscord: "Envíame un mensaje por Discord",
  close: "Cerrar",
  hiThere: "Holla! 👋",
  welcomeMessage: "Explora mis proyectos y, si te gustan, cuéntame sobre tu próximo proyecto. ¡Disfruta de la visita!",
  aboutMe: "Sobre Mí",
  aboutIntro: "¡Hola! Soy Lucas, un Desarrollador Web Full Stack con pasión por crear aplicaciones web dinámicas e interactivas.",
  profile: "Perfil",
  profileDescription: "Me especializo en desarrollar soluciones front-end y back-end, con enfoque en el diseño centrado en el usuario y código eficiente.",
  spokenLanguages: "Idiomas Hablados",
  languages: [
    { name: "portugués", level: "nativo" },
    { name: "inglés", level: "avanzado" },
    { name: "japonés", level: "intermedio" },
    { name: "español", level: "básico" },
  ],
  portuguese: "Portugués",
  english: "Inglés",
  japanese: "Japonés",
  spanish: "Español",
  hobbies: "Pasatiempos",
  nowPlaying: "Reproduciendo Ahora",
  hobbiesList: [
    { title: "Leer Libros y Cómics", image: "/icons/comics.jpg" },
    { title: "Ver Películas, Series de TV y Anime", image: "/icons/anime.webp" },
    { title: "Tocar Instrumentos", image: "/icons/guitar.jpg" },
    { title: "Aprender Nuevos Idiomas", image: "/icons/languages.webp" },
    { title: "Escuchar Música", image: "/icons/music.webp" },
    { title: "Hacer Ejercicio", image: "/icons/gym.jpg" },
    { title: "Jugar Videojuegos", image: "/icons/videogame.webp" },
  ],
  professionalBackground: "Trayectoria Profesional",
  ExperienceSummary: {
    techXp: { name: "Experiencia en Tecnología", experienceYears: '3' },
    webDevXp: { name: "Desarrollo WEB", experienceYears: '2' },
    services: { name: "Servicios prestados", quantity: '27' }
  },
  years: "años",
  "experiences": [
    {
      "company": "Mont Capital Asset",
      "logo": "/img/company_logos/montcapitalasset_logo.jpeg",
      "role": "Desarrollador Full Stack Python",
      "techStack": ["Typescript", "React", "Nextjs", "TailwindCSS", "Node", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "GitHub", "AWS"
      ],
      "startDate": "Abr 2024",
      "endDate": "Ago 2024",
      "description": `
        - Desarrollo de backend con Python, Django, Flask, FastAPI, así como otras tecnologías como Node.js, Express, Sequelize.
        - Creación de interfaces con React, TypeScript, Material UI, Styled Components, HTML, CSS.
        - Manejo de solicitudes SOAP/REST, Webservices.
        - Implementación de WebSockets, socket.io para comunicación en tiempo real.
        - Gestión de bases de datos: MySQL, PostgreSQL, MongoDB.
        - Contenerización de aplicaciones con Docker, Docker Compose, Kubernetes.
        - Utilización de servicios de AWS: EC2, RDS, S3.
      `,
    },
    {
      "company": "Vitta Group Franchising",
      "logo": "/img/company_logos/vitta_logo.jpeg",
      "role": "Desarrollador Web Full Stack",
      "techStack": ["React", "HTML", "CSS", "JavaScript", "Node", "Python", "Django", "PostgreSQL", "Git", "GitHub"
      ],
      "startDate": "Oct 2023",
      "endDate": "Abr 2024",
      "description": `
        - Desarrollo de aplicaciones en React.js
        - Proyecto, implementación y mantenimiento de APIs usando JavaScript, Node.js y Django, incluyendo APIs RESTful.
        - Creación, modelado y administración de bases de datos PostgreSQL.
        - Utilización de Postman para pruebas de API.
        - Configuración de servidor VPS Linux para alojar aplicaciones React con backend Django usando Nginx.
        - Desarrollo de scripts para automatización de tareas y mejora de la productividad.
        - Desarrollo y mantenimiento de Landing Pages con WordPress y Elementor para diseño y maquetación.
        - Análisis de rendimiento e implementación de SEO.
      `,
    }
  ],
  servicesList: [
    {
      title: "Desarrollo Web",
      description: "Construcción de sitios web modernos y responsivos utilizando las últimas tecnologías web.",
      icon: "development",
      details: [
        'Diseño y desarrollo personalizado de sitios web usando <span class="text-[tomato] font-bold">HTML</span>, <span class="text-[tomato] font-bold">CSS</span>, <span class="text-[tomato] font-bold">JavaScript</span> y <span class="text-[tomato] font-bold">React</span>',
        'Integración con sistemas de gestión de contenidos (CMS) como <span class="text-[tomato] font-bold">WordPress</span> o CMS sin cabeza',
        'Garantizando <span class="text-[tomato] font-bold">responsividad</span> del sitio para todos los tamaños de pantalla y dispositivos',
        'Optimización del rendimiento para tiempos de carga rápidos y mejores prácticas de <span class="text-[tomato] font-bold">SEO</span>',
        'Creación de plataformas <span class="text-[tomato] font-bold">e-commerce</span> con integraciones de pasarelas de pago',
        'Desarrollo de <span class="text-[tomato] font-bold">aplicaciones de una sola página (SPA)</span> usando <span class="text-[tomato] font-bold">React</span> y <span class="text-[tomato] font-bold">Next.js</span>'
      ]
    },
    {
      title: "Desarrollo Backend",
      description: "Desarrollo de sistemas backend robustos y escalables con Node.js, Python y más.",
      icon: "database",
      details: [
        'Desarrollo e integración de APIs (<span class="text-[tomato] font-bold">RESTful</span> y <span class="text-[tomato] font-bold">GraphQL</span>)',
        'Diseño, gestión y optimización de bases de datos (<span class="text-[tomato] font-bold">SQL</span>, <span class="text-[tomato] font-bold">NoSQL</span>)',
        'Implementación de sistemas de autenticación y autorización (<span class="text-[tomato] font-bold">OAuth</span>, <span class="text-[tomato] font-bold">JWT</span>)',
        'Construcción de arquitecturas de <span class="text-[tomato] font-bold">microservicios</span> para aplicaciones a gran escala',
        'Configuración de infraestructura en la nube y gestión de servidores con <span class="text-[tomato] font-bold">AWS</span>, <span class="text-[tomato] font-bold">GCP</span> o <span class="text-[tomato] font-bold">Azure</span>',
        'Gestión de integraciones con terceros, como <span class="text-[tomato] font-bold">procesadores de pagos</span>, <span class="text-[tomato] font-bold">servicios de correo electrónico</span> y más'
      ]
    },
    {
      title: "Desarrollo Mobile",
      description: "Creación de aplicaciones móviles multiplataforma con React Native.",
      icon: "mobile",
      details: [
        'Desarrollo de aplicaciones para <span class="text-[tomato] font-bold">iOS</span> y <span class="text-[tomato] font-bold">Android</span> usando <span class="text-[tomato] font-bold">React Native</span>',
        'Optimización del rendimiento y la usabilidad para <span class="text-[tomato] font-bold">dispositivos móviles</span>',
        'Implementación de características como <span class="text-[tomato] font-bold">notificaciones push</span>, <span class="text-[tomato] font-bold">modo offline</span> y <span class="text-[tomato] font-bold">actualizaciones en tiempo real</span>',
        'Integración con APIs backend para <span class="text-[tomato] font-bold">sincronización de datos</span>',
        'Publicación de aplicaciones en la <span class="text-[tomato] font-bold">App Store</span> y <span class="text-[tomato] font-bold">Google Play Store</span>',
        'Mantenimiento y actualización de aplicaciones móviles existentes'
      ]
    }
  ],
  servicesTitle: "Servicios",
  servicesSubtitle: "Qué Puedo Hacer Por Ti",
  learnMore: "Aprende Más",
  someThingsBuilt: 'Algunas cosas que he construido',
  projectsList: [
    {
      title: 'Sitio Web de Portafolio',
      shortDescription: 'Un sitio web de portafolio personal para mostrar mis habilidades, proyectos y experiencia.',
      image: '/portfolio-website.png',
      link: 'https://www.myportfolio.com',
      github: "#",
      techStack: ["Typescript", "React", "Nextjs", "TailwindCSS"]
    },
    {
      title: 'Plataforma de Comercio Electrónico',
      shortDescription: 'Una plataforma avanzada de comercio electrónico con integración de pagos, carrito de compras y autenticación de usuarios.',
      image: '/ecommerce-platform.png',
      link: 'https://www.ecommerceplatform.com',
      github: '#',
      techStack: ["React", "Django", "PostgreSQL"]
    },
    {
      title: 'App de Gestión de Tareas',
      shortDescription: 'Una aplicación de gestión de tareas para ayudar a los equipos a organizar su trabajo y mejorar la productividad.',
      image: '/task-management-app.png',
      link: 'https://www.taskmanagementapp.com',
      github: "#",
      techStack: ["Nextjs"]
    },
    {
      title: 'Panel de Redes Sociales',
      shortDescription: 'Un panel para gestionar y analizar cuentas de redes sociales con análisis en tiempo real y programación de publicaciones.',
      image: '/social-media-dashboard.png',
      link: 'https://www.socialmediadashboard.com',
      github: "#",
      techStack: ["PHP", "jQuery", "Bootstrap"]
    },
    {
      title: 'Sitio de Listado Inmobiliario',
      shortDescription: 'Una plataforma para navegar y gestionar listados inmobiliarios con filtros de búsqueda avanzados y detalles de las propiedades.',
      image: '/real-estate-listing.png',
      link: 'https://www.realestatelistingsite.com',
      github: "#",
      techStack: ["Node"]
    },
    {
      title: 'App de Seguimiento de Fitness',
      shortDescription: 'Una aplicación móvil para rastrear actividades físicas, establecer metas y monitorear el progreso con integración a dispositivos de salud.',
      image: '/fitness-tracker-app.png',
      link: 'https://www.fitnesstrackerapp.com',
      github: "#",
      techStack: ["Kotlin"]
    },
  ],
  viewProject: "Ver Proyecto",
  viewMoreProjects: 'Ver Más Proyectos',
  hoverDescription: "Explora el proyecto",
  contactIntro: "¡Me encantaría saber de ti! Si tienes un proyecto en mente, quieres colaborar o simplemente saludar, no dudes en ponerte en contacto. Creemos algo increíble juntos.",
  phoneLabel: "Teléfono",
  locationLabel: "Ubicación",
  emailLabel: "Correo Electrónico",
  scheduleMeeting: "Programar Reunión",
  elevatingYourWebXp: "Elevando tu experiencia web con tecnología de vanguardia y diseño elegante.",
  quickLinks: "Enlaces Rápidos",
  contactUs: "Contáctanos",
  rightsReserved: "Derechos Reservados",
  privacyPolicy: "Política de Privacidad",
  termsOfService: "Términos de Servicio",
  cookiePolicy: "Política de Cookies",
  readMore: "Leer más",
  readLess: "Leer menos",
};
