import ExperienceSummary from "../components/ExperienceSummary";

export const jp = {
    home: "ホーム",
    about: "私について",
    projects: "プロジェクト",
    services: "サービス",
    contact: "連絡先",
    downloadCV: "履歴書をダウンロード",
    readOnline: "オンラインで読む",
    heroDescription: "私はモダンでエレガントかつ機能的なインターフェースを作成する情熱的なウェブ開発者です。3年間の経験を持ち、さまざまな技術を駆使し、新しい挑戦に常に取り組んでいます。",
    getInTouch: "お問い合わせ",
    experience: "経験",
    showMore: "もっと見る",
    showLess: "少なくする",
    sendMeAnEmail: "メールを送る",
    sendMeAWhatsapp: "WhatsAppメッセージを送る",
    sendMeATelegram: "Telegramメッセージを送る",
    sendMeADiscord: "Discordメッセージを送る",
    close: "閉じる",
    hiThere: "こんにちは！👋",
    welcomeMessage: "私のプロジェクトをチェックして、気に入ったら次のプロジェクトについて教えてください。お楽しみください！",
    aboutMe: "私について",
    aboutIntro: "こんにちは！私はダイナミックでインタラクティブなウェブアプリケーションの作成に情熱を持つフルスタックウェブ開発者です。",
    profile: "プロフィール",
    profileDescription: "ユーザー中心のデザインと効率的なコードに焦点を当てたフロントエンドおよびバックエンドソリューションの開発を専門としています。",
    professionalBackground: "職歴",
    // furtherDetails: "プロジェクトや実績についての詳細は、ぜひ私のポートフォリオをご覧ください。",
    ExperienceSummary: {
        techXp: { name: "技術経験", experienceYears: '3年' },
        webDevXp: { name: "ウェブ開発", experienceYears: '2年' },
        services: { name: "提供するサービス", quantity: '27件' }
    },
    years: "年",
    experiences: [
        {
            company: 'Mont Capital Asset',
            logo: '/img/company_logos/montcapitalasset_logo.jpeg',
            role: 'フルスタックPython開発者',
            techStack: ["Typescript", "React", "Nextjs", "TailwindCSS", "Node", "Python", "Django", "PostgreSQL", "MySQL", "MongoDB", "Docker", "Git", "GitHub", "AWS"],
            startDate: '2024年4月',
            endDate: '現在',
            description: `
      - Python, Django, Flask, FastAPIなどを使用したバックエンド開発
        - React, TypeScript, Material UI, Styled Components, HTML, CSSを使用したインターフェースの作成
        - SOAP/RESTリクエスト、Webサービスの処理
        - WebSockets、socket.ioを使用したリアルタイム通信の実装
        - データベースの管理: MySQL, PostgreSQL, MongoDB
        - Docker, Docker Compose, Kubernetesを使用したアプリケーションのコンテナ化
        - AWSサービスの活用: EC2, RDS, S3
        `,
        },
        {
            company: 'Vitta Group Franchising',
            logo: '/img/company_logos/vitta_logo.jpeg',
            role: 'フルスタックウェブ開発者',
            techStack: ["React", "HTML", "CSS", "JavaScript", "Node", "Python", "Django", "PostgreSQL", "Git", "GitHub"],
            startDate: '2023年10月',
            endDate: '2024年4月',
            description: `
        - React.jsを使用したアプリケーションの開発
        - JavaScript, Node.js, Djangoを使用したAPIの設計、実装、および保守
        - PostgreSQLデータベースの作成、モデリング、および管理
        - Postmanを使用したAPIのテスト
        - Nginxを使用してDjangoバックエンドとともにReactアプリケーションをホストするためのLinux VPSサーバーの設定
        - タスクの自動化と生産性向上のためのスクリプトの開発
        - デザインとレイアウトのためのWordPressおよびElementorを使用したランディングページの開発と保守
        - パフォーマンス分析とSEOの実装
      `,
        },
    ],
    servicesList: [
        {
            title: "ウェブ開発",
            description: "最新のウェブ技術を使用してモダンでレスポンシブなウェブサイトを構築します。",
            icon: "開発",
        },
        {
            title: "バックエンド開発",
            description: "Node.js、Pythonなどを使用して堅牢でスケーラブルなバックエンドシステムを開発します。",
            icon: "データベース",
        },
        {
            title: "モバイル開発",
            description: "React Nativeを使用してクロスプラットフォームのモバイルアプリケーションを作成します。",
            icon: "モバイル",
        },
    ],
    servicesTitle: "サービス",
    servicesSubtitle: "私ができること",
    learnMore: "もっと詳しく",
    someThingsBuilt: '私が作ったもの',
    projectsList: [
        {
            title: 'ポートフォリオウェブサイト',
            shortDescription: 'スキル、プロジェクト、経験を紹介するための個人ポートフォリオウェブサイト。',
            image: '/portfolio-website.png',
            link: 'https://www.myportfolio.com',
            github: "#",
            techStack: ["Typescript", "React", "Nextjs", "TailwindCSS", "Git", "GitHub"]
        },
        {
            title: 'Eコマースプラットフォーム',
            shortDescription: '決済統合、ショッピングカート、ユーザー認証を備えた高度なEコマースプラットフォーム。',
            image: '/ecommerce-platform.png',
            link: 'https://www.ecommerceplatform.com',
            github: "#",
            techStack: ["React", "Django", "PostgreSQL"]
        },
        {
            title: 'タスク管理アプリ',
            shortDescription: 'チームが作業を整理し、生産性を向上させるためのタスク管理アプリ。',
            image: '/task-management-app.png',
            link: 'https://www.taskmanagementapp.com',
            github: "#",
            techStack: ["Nextjs"]
        },
        {
            title: 'ソーシャルメディアダッシュボード',
            shortDescription: 'リアルタイム分析と投稿スケジューリングを備えたソーシャルメディアアカウントを管理および分析するためのダッシュボード。',
            image: '/social-media-dashboard.png',
            link: 'https://www.socialmediadashboard.com',
            github: "#",
            techStack: ["PHP", "jQuery", "Bootstrap"]
        },
        {
            title: '不動産リスティングサイト',
            shortDescription: '高度な検索フィルターと物件詳細を備えた不動産リスティングを閲覧および管理するためのプラットフォーム。',
            image: '/real-estate-listing.png',
            link: 'https://www.realestatelistingsite.com',
            github: "#",
            techStack: ["Node"]
        },
        {
            title: 'フィットネストラッカーアプリ',
            shortDescription: 'フィットネス活動を追跡し、目標を設定し、進捗を監視するためのモバイルアプリ。健康デバイスとの統合。',
            image: '/fitness-tracker-app.png',
            link: 'https://www.fitnesstrackerapp.com',
            github: "#",
            techStack: ["Kotlin"]
        },
    ],
    viewProject: "プロジェクトを見る",
    viewMoreProjects: 'さらにプロジェクトを見る',
    hoverDescription: "プロジェクトを探る",
    contactIntro: "ぜひご連絡ください！プロジェクトのアイデアがある場合、コラボレーションしたい場合、またはただ挨拶したい場合でも、お気軽にお声がけください。 一緒に素晴らしいものを作りましょう。",
    phoneLabel: "電話番号",
    locationLabel: "所在地",
    emailLabel: "メールアドレス",
    elevatingYourWebXp: "最先端の技術と洗練されたデザインで、あなたのウェブ体験を向上させます。",
    quickLinks: "クイックリンク",
    contactUs: "お問い合わせ",
    rightsReserved: "全著作権所有",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    cookiePolicy: "クッキーポリシー",
    readMore: "続きを読む",
    readLess: "折りたたむ",
}