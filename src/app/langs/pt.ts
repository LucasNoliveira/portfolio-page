export const pt = {
  home: "Home",
  about: "Sobre",
  projects: "Projetos",
  services: "Serviços",
  contact: "Contato",
  warningTitle: "Em Desenvolvimento",
  warningMessage: "Este portfólio está em rápido desenvolvimento. Em breve estará completo, mas você já pode ter uma boa ideia da minha experiência.",
  downloadCV: "Baixar Currículo",
  readOnline: "Ler Online",
  heroDescription: "Sou desenvolvedor de software com mais de 3 anos de experiência na construção de aplicações eficientes e escaláveis em diversos setores. Especializo-me tanto em desenvolvimento front-end quanto back-end, criando sistemas de alto desempenho que geram impacto nos negócios. Estou sempre em busca de novos desafios para aprimorar minhas habilidades.",
  getInTouch: "Entrar em Contato",
  experience: "Experiência",
  showMore: "Mostrar Mais",
  showLess: "Mostrar Menos",
  sendMeAnEmail: "Me envie um Email",
  sendMeAWhatsapp: "Me envie um WhatsApp",
  sendMeATelegram: "Me envie um Telegram",
  sendMeADiscord: "Me envie um Discord",
  close: "Fechar",
  hiThere: "Olá! 👋",
  welcomeMessage: "Explore meus projetos e, se gostar deles, me conte um pouco sobre o seu próximo projeto. Aproveite a visita!",
  aboutMe: "Sobre Mim",
  aboutIntro: "Olá! Eu sou o Lucas, um Desenvolvedor Web Full Stack com paixão por criar aplicações web dinâmicas e interativas.",
  profile: "Perfil",
  profileDescription: "Eu me especializo em desenvolver soluções front-end e back-end, com foco em design centrado no usuário e código eficiente.",
  spokenLanguages: "Idiomas Falados",
  languages: [
    { name: "português", level: "nativo" },
    { name: "inglês", level: "avançado" },
    { name: "japonês", level: "intermediário" },
    { name: "espanhol", level: "básico" },
  ],
  portuguese: "Português",
  english: "Inglês",
  japanese: "Japonês",
  spanish: "Espanhol",
  hobbies: "Hobbies",
  nowPlaying: "Tocando Agora",
  hobbiesList: [
    { title: "Ler Livros e Quadrinhos", image: "/icons/comics.jpg" },
    { title: "Assistir Filmes, Séries de TV & Anime", image: "/icons/anime.webp" },
    { title: "Tocar Instrumentos", image: "/icons/guitar.jpg" },
    { title: "Aprender Novos Idiomas", image: "/icons/languages.webp" },
    { title: "Ouvir Música", image: "/icons/music.webp" },
    { title: "Treinar", image: "/icons/gym.jpg" },
    { title: "Jogar Videogames", image: "/icons/videogame.webp" },
  ],
  professionalBackground: "Histórico Profissional",
  ExperienceSummary: {
    techXp: { name: "Experiência em Tecnologia", experienceYears: "3" },
    webDevXp: { name: "Desenvolvimento WEB", experienceYears: "2" },
    services: { name: "Serviços prestados", quantity: "27" }
  },
  years: "anos",
  experiences: [
    {
      company: 'Mont Capital Asset',
      logo: '/img/company_logos/montcapitalasset_logo.jpeg',
      role: 'Desenvolvedor Full Stack Python',
      techStack: ["Typescript", "React", "Nextjs", "TailwindCSS", "Node", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "GitHub", "AWS"],
      startDate: 'Abr 2024',
      endDate: 'Ago 2024',
      description: `- Desenvolvimento Backend com Python, Django, Flask, FastAPI, além de outras tecnologias como Node.js, Express, Sequelize
      - Criação de interfaces com React, Typescript, Material UI, Styled Components, HTML, CSS
      - Requisições SOAP/REST, Webservices, JWT
      - GitHub Actions, Pipelines CI/CD
      - WebSockets, socket.io
      - MySQL, PostgreSQL, MongoDB
      - Conteinerização de aplicações com Docker, Docker Compose, Kubernetes
      - AWS EC2, RDS, S3`,
    },
    {
      company: 'Vitta Group Franchising',
      logo: '/img/company_logos/vitta_logo.jpeg',
      role: 'Desenvolvedor Web Full Stack',
      techStack: ["React", "HTML", "CSS", "JavaScript", "Node", "Python", "Django", "PostgreSQL", "Git", "GitHub"],
      startDate: 'Out 2023',
      endDate: 'Abr 2024',
      description: `- Desenvolvimento de aplicações em React.js
      - Projeto, implementação e manutenção de APIs com JavaScript, Node.js e Django, RESTful APIs
      - Criação, modelagem e administração de banco de dados PostgreSQL
      - Utilização do Postman e Insomnia para testes de API
      - Configuração de servidor VPS Linux Locaweb para servir aplicações React com Back-End em Django utilizando Nginx
      - Desenvolvimento de scripts para automação de tarefas e aumento de produtividade
      - Desenvolvimento e manutenção de Landing Pages com WordPress e Elementor para design e layout
      - Análise de desempenho e implementação de SEO`,
    },
  ],
  servicesList: [
    {
      title: "Desenvolvimento Web",
      description: "Construindo sites modernos e responsivos usando as mais recentes tecnologias web.",
      icon: "development",
      details: [
        'Design e desenvolvimento personalizados de sites usando <span class="text-[tomato] font-bold">HTML</span>, <span class="text-[tomato] font-bold">CSS</span>, <span class="text-[tomato] font-bold">JavaScript</span> e <span class="text-[tomato] font-bold">React</span>',
        'Integração com sistemas de gerenciamento de conteúdo (CMS) como <span class="text-[tomato] font-bold">WordPress</span> ou CMS headless',
        'Garantindo <span class="text-[tomato] font-bold">responsividade</span> do site para todos os tamanhos de tela e dispositivos',
        'Otimização de desempenho para tempos de carregamento rápidos e melhores práticas de <span class="text-[tomato] font-bold">SEO</span>',
        'Criação de plataformas <span class="text-[tomato] font-bold">e-commerce</span> com integrações de gateways de pagamento',
        'Desenvolvimento de <span class="text-[tomato] font-bold">aplicações de página única (SPA)</span> usando <span class="text-[tomato] font-bold">React</span> e <span class="text-[tomato] font-bold">Next.js</span>'
      ]
    },
    {
      title: "Desenvolvimento Backend",
      description: "Desenvolvendo sistemas backend robustos e escaláveis com Node.js, Python e mais.",
      icon: "database",
      details: [
        'Desenvolvimento e integração de APIs (<span class="text-[tomato] font-bold">RESTful</span> e <span class="text-[tomato] font-bold">GraphQL</span>)',
        'Design, gerenciamento e otimização de banco de dados (<span class="text-[tomato] font-bold">SQL</span>, <span class="text-[tomato] font-bold">NoSQL</span>)',
        'Implementação de sistemas de autenticação e autorização (<span class="text-[tomato] font-bold">OAuth</span>, <span class="text-[tomato] font-bold">JWT</span>)',
        'Construção de arquiteturas de <span class="text-[tomato] font-bold">microservices</span> para aplicações de grande escala',
        'Configuração de infraestrutura em nuvem e gerenciamento de servidores com <span class="text-[tomato] font-bold">AWS</span>, <span class="text-[tomato] font-bold">GCP</span> ou <span class="text-[tomato] font-bold">Azure</span>',
        'Gerenciamento de integrações com terceiros, como <span class="text-[tomato] font-bold">processadores de pagamento</span>, <span class="text-[tomato] font-bold">serviços de email</span> e mais'
      ]
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Criando aplicativos móveis multiplataforma com React Native.",
      icon: "mobile",
      details: [
        'Desenvolvimento de aplicativos para <span class="text-[tomato] font-bold">iOS</span> e <span class="text-[tomato] font-bold">Android</span> usando <span class="text-[tomato] font-bold">React Native</span>',
        'Otimização de desempenho e usabilidade para <span class="text-[tomato] font-bold">dispositivos móveis</span>',
        'Implementação de recursos como <span class="text-[tomato] font-bold">notificações push</span>, <span class="text-[tomato] font-bold">modo offline</span> e <span class="text-[tomato] font-bold">atualizações em tempo real</span>',
        'Integração com APIs backend para <span class="text-[tomato] font-bold">sincronização de dados</span>',
        'Publicação de aplicativos na <span class="text-[tomato] font-bold">App Store</span> e <span class="text-[tomato] font-bold">Google Play Store</span>',
        'Manutenção e atualização de aplicativos móveis existentes'
      ]
    }
  ],
  servicesTitle: "Serviços",
  servicesSubtitle: "O Que Posso Fazer Por Você",
  learnMore: "Saiba Mais",
  someThingsBuilt: 'Algumas coisas que eu construí',
  projectsList: [
    {
      title: 'Website de Portfólio',
      shortDescription: 'Um website de portfólio pessoal para mostrar minhas habilidades, projetos e experiência.',
      image: '/portfolio-website.png',
      link: 'https://www.myportfolio.com',
      github: "#",
      techStack: ["Typescript", "React", "Nextjs", "TailwindCSS"]
    },
    {
      title: 'Plataforma de E-commerce',
      shortDescription: 'Uma plataforma de e-commerce avançada com integração de pagamento, carrinho de compras e autenticação de usuários.',
      image: '/ecommerce-platform.png',
      link: 'https://www.ecommerceplatform.com',
      github: '#',
      techStack: ["React", "Django", "PostgreSQL"]
    },
    {
      title: 'App de Gestão de Tarefas',
      shortDescription: 'Um aplicativo de gestão de tarefas para ajudar equipes a organizar seu trabalho e melhorar a produtividade.',
      image: '/task-management-app.png',
      link: 'https://www.taskmanagementapp.com',
      github: "#",
      techStack: ["Nextjs"]
    },
    {
      title: 'Painel de Mídias Sociais',
      shortDescription: 'Um painel para gerenciar e analisar contas de mídias sociais com análises em tempo real e agendamento de posts.',
      image: '/social-media-dashboard.png',
      link: 'https://www.socialmediadashboard.com',
      github: "#",
      techStack: ["PHP", "jQuery", "Bootstrap"]
    },
    {
      title: 'Site de Listagem Imobiliária',
      shortDescription: 'Uma plataforma para navegar e gerenciar listagens imobiliárias com filtros de pesquisa avançados e detalhes das propriedades.',
      image: '/real-estate-listing.png',
      link: 'https://www.realestatelistingsite.com',
      github: "#",
      techStack: ["Node"]
    },
    {
      title: 'App de Rastreamento de Fitness',
      shortDescription: 'Um aplicativo móvel para rastrear atividades físicas, definir metas e monitorar o progresso com integração a dispositivos de saúde.',
      image: '/fitness-tracker-app.png',
      link: 'https://www.fitnesstrackerapp.com',
      github: "#",
      techStack: ["Kotlin"]
    },
  ],
  viewProject: "Ver Projeto",
  viewMoreProjects: 'Ver Mais Projetos',
  hoverDescription: "Explore o projeto",
  contactIntro: "Adoraria ouvir de você! Se você tem um projeto em mente, quer colaborar, ou apenas quer dizer oi, sinta-se à vontade para entrar em contato. Vamos criar algo incrível juntos.",
  phoneLabel: "Telefone",
  locationLabel: "Localização",
  emailLabel: "Email",
  scheduleMeeting: "Agendar Reunião",
  elevatingYourWebXp: "Elevando sua experiência web com tecnologia de ponta e design elegante.",
  quickLinks: "Links Rápidos",
  contactUs: "Entre em contato",
  rightsReserved: "Direitos Reservados",
  privacyPolicy: "Política de Privacidade",
  termsOfService: "Termos de Serviço",
  cookiePolicy: "Política de Cookies",
  readMore: "Ler mais",
  readLess: "Ler menos",
};
