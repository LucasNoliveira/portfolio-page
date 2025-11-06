import ExperienceSummary from "../components/ExperienceSummary";

export const jp = {
  home: "ホーム",
  about: "私について",
  projects: "プロジェクト",
  services: "サービス",
  contact: "連絡先",
  warningTitle: "開発中",
  warningMessage:
    "このポートフォリオは急速に開発中です。まもなく完成しますが、すでに私の経験について良いアイデアを得ることができます。",
  downloadCV: "履歴書をダウンロード",
  readOnline: "オンラインで読む",
  heroDescription:
    "私はソフトウェアエンジニアとして3年以上の経験があり、さまざまな業界で効率的かつスケーラブルなアプリケーションを開発してきました。フロントエンドとバックエンドの両方を専門とし、ビジネスにインパクトを与える高性能なシステムを構築しています。常に自分のスキルを高める新たな挑戦を求めています。",
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
  welcomeMessage:
    "私のプロジェクトをチェックして、気に入ったら次のプロジェクトについて教えてください。お楽しみください！",
  aboutMe: "私について",
  aboutIntro:
    "こんにちは！私はダイナミックでインタラクティブなウェブアプリケーションの作成に情熱を持つフルスタックウェブ開発者です。",
  profile: "プロフィール",
  profileDescription:
    "ユーザー中心のデザインと効率的なコードに焦点を当てたフロントエンドおよびバックエンドソリューションの開発を専門としています。",
  spokenLanguages: "話されている言語",
  languages: [
    { name: "ポルトガル語", level: "ネイティブ" },
    { name: "英語", level: "上級" },
    { name: "日本語", level: "中級" },
    { name: "スペイン語", level: "初級" },
  ],
  portuguese: "ポルトガル語",
  english: "英語",
  japanese: "日本語",
  spanish: "スペイン語",
  hobbies: "趣味",
  nowPlaying: "再生中",
  hobbiesList: [
    { title: "本とコミックを読む", image: "/icons/comics.jpg" },
    { title: "映画、テレビ番組、アニメを見る", image: "/icons/anime.webp" },
    { title: "楽器を演奏する", image: "/icons/guitar.jpg" },
    { title: "新しい言語を学ぶ", image: "/icons/languages.webp" },
    { title: "音楽を聴く", image: "/icons/music.webp" },
    { title: "運動する", image: "/icons/gym.jpg" },
    { title: "ビデオゲームをする", image: "/icons/videogame.webp" },
  ],
  professionalBackground: "職歴",
  // furtherDetails: "プロジェクトや実績についての詳細は、ぜひ私のポートフォリオをご覧ください。",
  ExperienceSummary: {
    techXp: { name: "技術経験", experienceYears: "3年" },
    webDevXp: { name: "ウェブ開発", experienceYears: "3年" },
    services: { name: "提供するサービス", quantity: "27件" },
  },
  years: "年",
  experiences: [
    {
      company: "Accenture",
      logo: "/img/company_logos/accenture_logo.jpeg",
      role: "カスタムソフトウェアエンジニアリングアナリスト",
      techStack: [
        "Python",
        "Flask",
        "JavaScript",
        "Angular",
        "Typescript",
        "GraphQL",
        "Git",
        "Azure",
        "GCP",
      ],
      startDate: "2025年1月",
      endDate: "現在",
      description: `
• Pipefy を使用したスマートな自動化を開発し、ワークフローを効率化し、業務効率を向上させました。
• パフォーマンス、スケーラビリティ、コードの可読性を重視しながら、自動化スクリプトを継続的に改善しました。
• 保守性と信頼性を確保するため、市場標準に沿ったモダンで安全なアーキテクチャを設計・維持しました。
• Git、アジャイル手法（Scrum/Kanban）、タスク／バージョン管理ツールを活用し、分散チームと協力しました。
• RPA やウェブスクレイピングルーチンを構築・保守し、重要なプロセスを自動化して業務負荷を軽減しました。
• Python によるバックエンドシステムを開発し、クリーンコード原則とベストプラクティスを遵守しました。
• 人事関連システムの保守・最適化を行い、社内業務とユーザー体験を向上させました。
• Angular を使ったフロントエンドの開発と、Python + Google Cloud Functions によるサーバーレスバックエンドの実装を担当しました。
• Podman を使用してサービスをコンテナ化し、スケーラブルな環境で管理しました。
    `,
    },
    {
      company: "Indra Energia",
      logo: "/img/company_logos/indra_energia_logo.jpeg",
      role: "フルスタック開発者",
      techStack: [
        "Python",
        "Django",
        "FastAPI",
        "HTML",
        "CSS",
        "JavaScript",
        "JQuery",
        "PostgreSQL",
        "SQLite",
        "Docker",
        "Git",
        "GitHub",
        "AWS",
      ],
      startDate: "2024年10月",
      endDate: "2025年1月",
      description: `
• エネルギー取引および小売業務を支援するウェブアプリケーションの開発・保守に貢献し、社内ツールを改善しました。
• FastAPI、キャッシュ技術、非同期プログラミングを活用した最適化により、API 応答時間を最大 30% 短縮しました。
• Docker および Docker Compose を使ったレガシーコンポーネントのコンテナ化により、デプロイの一貫性を向上させ、環境関連の問題を 40% 削減しました。
• フロントエンド開発にも参加し、UI の応答性を改善したことで、社内フィードバックに基づくユーザー満足度が 15% 向上しました。
• バグの特定と解決を支援し、リリース後のインシデントを 20% 削減しました。
    `,
    },
    {
      company: "Mont Capital Asset",
      logo: "/img/company_logos/montcapitalasset_logo.jpeg",
      role: "フルスタック Python 開発者",
      techStack: [
        "Typescript",
        "React",
        "Nextjs",
        "TailwindCSS",
        "Node",
        "Python",
        "Django",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Docker",
        "Git",
        "GitHub",
        "AWS",
      ],
      startDate: "2024年4月",
      endDate: "2024年8月",
      description: `
• Python（Django、Flask、FastAPI）によるバックエンドサービスの開発に貢献し、スケーラブルでテスト済みの API を提供しました。
• React、TypeScript、Material UI、Styled Components を使用したフロントエンド機能の開発と保守をサポートし、UI の一貫性と応答性を向上させました。
• WebSocket および Socket.io を用いたリアルタイム通信機能のプロジェクトに参加し、システムの対話性を向上させました。
• SOAP / REST API と外部ウェブサービスを使用して、金融データを社内システムに統合しました。
• Docker、Docker Compose、基本的な Kubernetes 構成を使ってサービスをコンテナ化し、開発環境を整備しました。
• PostgreSQL、MySQL、MongoDB などのリレーショナルおよび非リレーショナルデータベースを管理・クエリしました。
• AWS EC2、S3、RDS を用いたアプリケーションのデプロイに貢献し、自動化スクリプトによりデプロイ時間を約 30% 短縮しました。
• 少人数のアジャイルチームで協力し、10 以上の機能追加やバグ修正を実施しました。
• バックエンドサービスの単体テストを作成し、コードの信頼性を向上させ、モジュールのテストカバレッジを 10〜15% 増加させました。
    `,
    },
    {
      company: "Vitta Group Franchising",
      logo: "/img/company_logos/vitta_logo.jpeg",
      role: "フルスタック Web 開発者",
      techStack: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Node",
        "Python",
        "Django",
        "PostgreSQL",
        "Git",
        "GitHub",
      ],
      startDate: "2023年10月",
      endDate: "2024年12月",
      description: `
• React.js を使用したアプリケーションの開発
• JavaScript、Node.js、Django を用いた RESTful API の設計、実装、保守
• PostgreSQL データベースの設計、モデリング、管理
• Postman を活用した API テストの実施
• Linux VPS サーバーを構成し、Django バックエンドと React フロントエンドを Nginx でホスティング
• タスク自動化と生産性向上のためのスクリプトを開発
• WordPress と Elementor を使用したランディングページの開発・保守・デザイン
• パフォーマンス分析および SEO の実装
    `,
    },
    {
      company: "Fundação de Rotarianos de São Paulo",
      logo: "/img/company_logos/fundacao_rotarianos_sp_logo.jpeg",
      role: "ITアナリスト / 自動化開発者",
      techStack: [
        "JavaScript",
        "HTML",
        "CSS",
        "Node",
        "Python",
        "MySQL",
        "Git",
        "GitHub",
      ],
      startDate: "2022年3月",
      endDate: "2023年10月",
      description: `
• Python と PowerShell を使って、インストール、設定、PC 管理などのタスクを自動化するスクリプトを開発し、セットアップ時間を 1 時間以上から 15 分以下に短縮しました。
• IT ツールの使用に関してユーザーを支援・指導。
• インターネット接続に関するサポートを提供。
• 社内外のメールに関するサポートを実施。
• システム保守におけるサポート。
• 物理プリンターおよびサーバー経由のプリンターのインストール。
• Linux、Windows、Mac OS の各 OS に精通。
• MySQL データベースの管理。
• Microsoft Office スイートの操作に熟練。
• コンピュータネットワークに関する専門知識。
    `,
    },
  ],
  servicesList: [
    {
      title: "ウェブ開発",
      description:
        "最新のウェブ技術を使用してモダンでレスポンシブなウェブサイトを構築します。",
      icon: "development",
      details: [
        '<span class="text-[tomato] font-bold">HTML</span>、<span class="text-[tomato] font-bold">CSS</span>、<span class="text-[tomato] font-bold">JavaScript</span>、および <span class="text-[tomato] font-bold">React</span> を使用したカスタムウェブサイトのデザインと開発',
        '<span class="text-[tomato] font-bold">WordPress</span> やヘッドレスCMSなどのコンテンツ管理システム (CMS) との統合',
        'すべての画面サイズとデバイスに対するサイトの <span class="text-[tomato] font-bold">レスポンシブ性</span> の保証',
        '高速な読み込み時間と <span class="text-[tomato] font-bold">SEO</span> のベストプラクティスのためのパフォーマンスの最適化',
        '<span class="text-[tomato] font-bold">e-commerce</span> プラットフォームの作成と支払いゲートウェイの統合',
        '<span class="text-[tomato] font-bold">React</span> と <span class="text-[tomato] font-bold">Next.js</span> を使用した <span class="text-[tomato] font-bold">シングルページアプリケーション (SPA)</span> の開発',
      ],
    },
    {
      title: "バックエンド開発",
      description:
        "Node.js、Pythonなどを使用して堅牢でスケーラブルなバックエンドシステムを開発します。",
      icon: "database",
      details: [
        '<span class="text-[tomato] font-bold">RESTful</span> および <span class="text-[tomato] font-bold">GraphQL</span> のAPIの開発と統合',
        '<span class="text-[tomato] font-bold">SQL</span> および <span class="text-[tomato] font-bold">NoSQL</span> のデータベース設計、管理、最適化',
        '<span class="text-[tomato] font-bold">OAuth</span> や <span class="text-[tomato] font-bold">JWT</span> による認証と認可システムの実装',
        '<span class="text-[tomato] font-bold">マイクロサービス</span> アーキテクチャの構築',
        '<span class="text-[tomato] font-bold">AWS</span>、<span class="text-[tomato] font-bold">GCP</span>、または <span class="text-[tomato] font-bold">Azure</span> でのクラウドインフラのセットアップとサーバー管理',
        '<span class="text-[tomato] font-bold">決済処理</span>、<span class="text-[tomato] font-bold">メールサービス</span> などのサードパーティとの統合の処理',
      ],
    },
    {
      title: "モバイル開発",
      description:
        "React Nativeを使用してクロスプラットフォームのモバイルアプリケーションを作成します。",
      icon: "mobile",
      details: [
        '<span class="text-[tomato] font-bold">iOS</span> および <span class="text-[tomato] font-bold">Android</span> 用のアプリを <span class="text-[tomato] font-bold">React Native</span> を使用して開発',
        '<span class="text-[tomato] font-bold">モバイルデバイス</span> のパフォーマンスと使いやすさの最適化',
        '<span class="text-[tomato] font-bold">プッシュ通知</span>、<span class="text-[tomato] font-bold">オフラインモード</span>、および <span class="text-[tomato] font-bold">リアルタイム更新</span> などの機能の実装',
        "データ同期のためのバックエンドAPIとの統合",
        '<span class="text-[tomato] font-bold">App Store</span> と <span class="text-[tomato] font-bold">Google Play Store</span> へのアプリの公開',
        "既存のモバイルアプリケーションの維持と更新",
      ],
    },
  ],
  servicesTitle: "サービス",
  servicesSubtitle: "私ができること",
  learnMore: "もっと詳しく",
  someThingsBuilt: "私が作ったもの",
  projectsList: [
    {
      title: "ポートフォリオウェブサイト",
      shortDescription:
        "スキル、プロジェクト、経験を紹介するための個人ポートフォリオウェブサイト。",
      image: "/portfolio-website.png",
      link: "https://www.myportfolio.com",
      github: "#",
      techStack: [
        "Typescript",
        "React",
        "Nextjs",
        "TailwindCSS",
        "Git",
        "GitHub",
      ],
    },
    {
      title: "Eコマースプラットフォーム",
      shortDescription:
        "決済統合、ショッピングカート、ユーザー認証を備えた高度なEコマースプラットフォーム。",
      image: "/ecommerce-platform.png",
      link: "https://www.ecommerceplatform.com",
      github: "#",
      techStack: ["React", "Django", "PostgreSQL"],
    },
    {
      title: "タスク管理アプリ",
      shortDescription:
        "チームが作業を整理し、生産性を向上させるためのタスク管理アプリ。",
      image: "/task-management-app.png",
      link: "https://www.taskmanagementapp.com",
      github: "#",
      techStack: ["Nextjs"],
    },
    {
      title: "ソーシャルメディアダッシュボード",
      shortDescription:
        "リアルタイム分析と投稿スケジューリングを備えたソーシャルメディアアカウントを管理および分析するためのダッシュボード。",
      image: "/social-media-dashboard.png",
      link: "https://www.socialmediadashboard.com",
      github: "#",
      techStack: ["PHP", "jQuery", "Bootstrap"],
    },
    {
      title: "不動産リスティングサイト",
      shortDescription:
        "高度な検索フィルターと物件詳細を備えた不動産リスティングを閲覧および管理するためのプラットフォーム。",
      image: "/real-estate-listing.png",
      link: "https://www.realestatelistingsite.com",
      github: "#",
      techStack: ["Node"],
    },
    {
      title: "フィットネストラッカーアプリ",
      shortDescription:
        "フィットネス活動を追跡し、目標を設定し、進捗を監視するためのモバイルアプリ。健康デバイスとの統合。",
      image: "/fitness-tracker-app.png",
      link: "https://www.fitnesstrackerapp.com",
      github: "#",
      techStack: ["Kotlin"],
    },
  ],
  viewProject: "プロジェクトを見る",
  viewMoreProjects: "さらにプロジェクトを見る",
  hoverDescription: "プロジェクトを探る",
  contactIntro:
    "ぜひご連絡ください！プロジェクトのアイデアがある場合、コラボレーションしたい場合、またはただ挨拶したい場合でも、お気軽にお声がけください。 一緒に素晴らしいものを作りましょう。",
  phoneLabel: "電話番号",
  locationLabel: "所在地",
  emailLabel: "メールアドレス",
  scheduleMeeting: "ミーティングをスケジュールする",
  elevatingYourWebXp:
    "最先端の技術と洗練されたデザインで、あなたのウェブ体験を向上させます。",
  quickLinks: "クイックリンク",
  contactMe: "お問い合わせ",
  rightsReserved: "全著作権所有",
  privacyPolicy: "プライバシーポリシー",
  termsOfService: "利用規約",
  cookiePolicy: "クッキーポリシー",
  readMore: "続きを読む",
  readLess: "折りたたむ",
};
