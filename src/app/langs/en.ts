import ExperienceSummary from "../components/ExperienceSummary";

export const en = {
  home: "Home",
  about: "About",
  projects: "Projects",
  services: "Services",
  contact: "Contact",
  warningTitle: "Under Development",
  warningMessage: "This portfolio is currently under rapid development. It will soon be complete, but you can already get a good idea of my experience.",
  downloadCV: "Download Resume",
  readOnline: "Read Online",
  heroDescription: "I am a passionate web developer creating modern, elegant, and functional interfaces. With 3 years of experience, I master various technologies and am always seeking new challenges to enhance my skills.",
  getInTouch: "Get in Touch",
  experience: "Experience",
  showMore: "Show More",
  showLess: "Show Less",
  sendMeAnEmail: "Send me an Email",
  sendMeAWhatsapp: "Send me a WhatsApp message",
  sendMeATelegram: "Send me a Telegram message",
  sendMeADiscord: "Send me a Discord message",
  close: "Close",
  hiThere: "Hi there! 👋",
  welcomeMessage: "Check out some of my projects, and if you like them, let me know about your next project. Enjoy your visit!",
  aboutMe: "About Me",
  aboutIntro: "Hello! I'm Lucas, a Full Stack Web Developer with a passion for creating dynamic and interactive web applications.",
  profile: "Profile",
  profileDescription: "I specialize in developing front-end and back-end solutions, focusing on user-centered design and efficient code.",
  spokenLanguages: "Spoken Languages",
  languages: [
    { name: "portuguese", level: "native" },
    { name: "english", level: "advanced" },
    { name: "japanese", level: "intermediate" },
    { name: "spanish", level: "basic" },
  ],
  portuguese: "Portuguese",
  english: "English",
  japanese: "Japanese",
  spanish: "Spanish",
  hobbies: "Hobbies",
  nowPlaying: "Now Playing",
  hobbiesList: [
    { title: "Reading Books and Comics", image: "/icons/comics.jpg" },
    { title: "Watching Movies, TV Shows & Anime", image: "/icons/anime.webp" },
    { title: "Playing Instruments", image: "/icons/guitar.jpg" },
    { title: "Learning New Languages", image: "/icons/languages.webp" },
    { title: "Listen to Music", image: "/icons/music.webp" },
    { title: "Working Out", image: "/icons/gym.jpg" },
  ],
  professionalBackground: "Professional Background",
  // furtherDetails: "For more information about my projects and achievements, feel free to explore my portfolio.",
  ExperienceSummary: {
    techXp: { name: "Technology Experience", experienceYears: '3' },
    webDevXp: { name: "Web Development", experienceYears: '2' },
    services: { name: "Services Provided", quantity: '27' }
  },
  years: "years",
  experiences: [
    {
      company: 'Mont Capital Asset',
      logo: '/img/company_logos/montcapitalasset_logo.jpeg',
      role: 'Full Stack Python Developer',
      techStack: ["Typescript", "React", "Nextjs", "TailwindCSS", "Node", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "GitHub", "AWS"],
      startDate: 'Apr 2024',
      endDate: 'Aug 2024',
      description: `
      - Backend development with Python, Django, Flask, FastAPI, as well as other technologies like Node.js, Express, Sequelize.
        - Creating interfaces with React, TypeScript, Material UI, Styled Components, HTML, CSS.
        - Handling SOAP/REST requests, Webservices.
        - Implementing WebSockets, socket.io for real-time communication.
        - Managing databases: MySQL, PostgreSQL, MongoDB.
        - Containerizing applications with Docker, Docker Compose, Kubernetes.
        - Utilizing AWS Services: EC2, RDS, S3.
        `,
    },
    {
      company: 'Vitta Group Franchising',
      logo: '/img/company_logos/vitta_logo.jpeg',
      role: 'Full Stack Web Developer',
      techStack: ["React", "HTML", "CSS", "JavaScript", "Node", "Python", "Django", "PostgreSQL", "Git", "GitHub"],
      startDate: 'Oct 2023',
      endDate: 'Apr 2024',
      description: `
        - Development of applications in React.js
        - Project, implementation, and maintenance of APIs using JavaScript, Node.js, and Django, including RESTful APIs
        - Creation, modeling, and administration of PostgreSQL databases
        - Utilization of Postman for API testing
        - Configuration of Linux VPS server to host React applications with Django Back-End using Nginx
        - Development of scripts for task automation and productivity enhancement
        - Development and maintenance of Landing Pages with WordPress and Elementor for design and layout
        - Performance analysis and implementation of SEO
      `,
    },
  ],
  servicesList: [
    {
      title: "Web Development",
      description: "Building modern, responsive websites using the latest web technologies.",
      icon: "development",
      details: [
        'Custom website design and development using <span class="text-[tomato] font-bold">HTML</span>, <span class="text-[tomato] font-bold">CSS</span>, <span class="text-[tomato] font-bold">JavaScript</span>, and <span class="text-[tomato] font-bold">React</span>',
        'Integration with content management systems (CMS) like <span class="text-[tomato] font-bold">WordPress</span> or headless CMS',
        'Ensuring website <span class="text-[tomato] font-bold">responsiveness</span> for all screen sizes and devices',
        'Optimizing performance for fast load times and <span class="text-[tomato] font-bold">SEO</span> best practices',
        'Creating <span class="text-[tomato] font-bold">e-commerce</span> platforms with payment gateway integrations',
        'Developing <span class="text-[tomato] font-bold">single-page applications (SPA)</span> using <span class="text-[tomato] font-bold">React</span> and <span class="text-[tomato] font-bold">Next.js</span>'
      ]
    },
    {
      title: "Backend Development",
      description: "Developing robust and scalable backend systems with Node.js, Python, and more.",
      icon: "database",
      details: [
        'API development and integration (<span class="text-[tomato] font-bold">RESTful</span> and <span class="text-[tomato] font-bold">GraphQL</span>)',
        'Database design, management, and optimization (<span class="text-[tomato] font-bold">SQL</span>, <span class="text-[tomato] font-bold">NoSQL</span>)',
        'Authentication and authorization systems implementation (<span class="text-[tomato] font-bold">OAuth</span>, <span class="text-[tomato] font-bold">JWT</span>)',
        'Building <span class="text-[tomato] font-bold">microservices</span> architectures for large-scale applications',
        'Cloud infrastructure setup and server management with <span class="text-[tomato] font-bold">AWS</span>, <span class="text-[tomato] font-bold">GCP</span>, or <span class="text-[tomato] font-bold">Azure</span>',
        'Handling third-party integrations, such as <span class="text-[tomato] font-bold">payment processors</span>, <span class="text-[tomato] font-bold">email services</span>, and more'
      ]
    },
    {
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native.",
      icon: "mobile",
      details: [
        'Building <span class="text-[tomato] font-bold">iOS</span> and <span class="text-[tomato] font-bold">Android</span> apps using <span class="text-[tomato] font-bold">React Native</span>',
        'Optimizing performance and usability for <span class="text-[tomato] font-bold">mobile devices</span>',
        'Implementing features like <span class="text-[tomato] font-bold">push notifications</span>, <span class="text-[tomato] font-bold">offline mode</span>, and <span class="text-[tomato] font-bold">real-time updates</span>',
        'Integration with backend APIs for <span class="text-[tomato] font-bold">data synchronization</span>',
        'Deploying apps to the <span class="text-[tomato] font-bold">App Store</span> and <span class="text-[tomato] font-bold">Google Play Store</span>',
        'Maintaining and updating existing mobile applications'
      ]
    }
  ],
      servicesTitle: "Services",
  servicesSubtitle: "What I Can Do For You",
  learnMore: "Learn More",
  someThingsBuilt: 'Some things I’ve built',
  projectsList: [
    {
      title: 'Portfolio Website',
      shortDescription: 'A personal portfolio website to showcase my skills, projects, and experience.',
      image: '/portfolio-website.png',
      link: 'https://www.myportfolio.com',
      github: "#",
      techStack: ["Typescript", "React", "Nextjs", "TailwindCSS", "Git", "GitHub"]
    },
    {
      title: 'E-commerce Platform',
      shortDescription: 'An advanced e-commerce platform with payment integration, shopping cart, and user authentication.',
      image: '/ecommerce-platform.png',
      link: 'https://www.ecommerceplatform.com',
      github: "#",
      techStack: ["React", "Django", "PostgreSQL"]
    },
    {
      title: 'Task Management App',
      shortDescription: 'A task management app to help teams organize their work and improve productivity.',
      image: '/task-management-app.png',
      link: 'https://www.taskmanagementapp.com',
      github: "#",
      techStack: ["Nextjs"]
    },
    {
      title: 'Social Media Dashboard',
      shortDescription: 'A dashboard for managing and analyzing social media accounts with real-time analytics and post scheduling.',
      image: '/social-media-dashboard.png',
      link: 'https://www.socialmediadashboard.com',
      github: "#",
      techStack: ["PHP", "jQuery", "Bootstrap"]
    },
    {
      title: 'Real Estate Listing Site',
      shortDescription: 'A platform for browsing and managing real estate listings with advanced search filters and property details.',
      image: '/real-estate-listing.png',
      link: 'https://www.realestatelistingsite.com',
      github: "#",
      techStack: ["Node"]
    },
    {
      title: 'Fitness Tracker App',
      shortDescription: 'A mobile app for tracking fitness activities, setting goals, and monitoring progress with integration to health devices.',
      image: '/fitness-tracker-app.png',
      link: 'https://www.fitnesstrackerapp.com',
      github: "#",
      techStack: ["Kotlin"]
    },
  ],
  viewProject: "View Project",
  viewMoreProjects: 'View More Projects',
  hoverDescription: "Explore the project",
  contactIntro: "I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hi, feel free to reach out. Let's create something amazing together.",
  phoneLabel: "Phone",
  locationLabel: "Location",
  emailLabel: "Email",
  elevatingYourWebXp: "Elevating your web experience with cutting-edge technology and elegant design.",
  quickLinks: "Quick Links",
  contactUs: "Contact Us",
  rightsReserved: "Rights Reserved",
  privacyPolicy: "Privacy Policy",
  termsOfService: "Terms of Service",
  cookiePolicy: "Cookie Policy",
  readMore: "Read more",
  readLess: "Read less",
};