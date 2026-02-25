/**
 * =========================================================================
 * 檔案 1: src/data/resume-content.js
 * 說明：這是妳的「內容管理層」。
 * 妳可以在這裡像填 Excel 表格一樣修改文字，完全不用管下面的 UI 程式碼。
 * 在本地開發時，請將這個 const content 剪下，存成獨立檔案，
 * 然後使用 export const content = { ... } 匯出。
 * =========================================================================
 */
export const content = {
  en: {
    role: "Technical Product Owner",
    nav: { overview: "Overview", projects: "System & Tech", design: "UX & Design" },
    hero: {
      name: "Rina Hsu",
      role: "Design Engineer",
      headline: "Bridging Scientific Logic & Creative Design.",
      description: "Transforming real-world problems into deployed products. From NTU Atmospheric Science to Full-stack execution.",
      social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/rinahsu",
        email: "mailto:chhsu2003@gmail.com"
      }
    },
    science: {
      tag: "Core",
      title: "Scientific Rigor",
      description: "Data Interpretation & Complex Logic Visualization."
    },
    tech: {
      title: "Tech Stack",
      subtitle: "Performance & Scalability"
    },
    hire: {
      title: "Available for work",
      subtitle: "Open for FT roles & Freelance",
      download: "Download Resume",
      book: "Book Consultation"
    },
    network: {
      title: "Rinario Network",
      subtitle: "AI-Augmented Static Sites"
    },
    stats: {
      migration: { title: "Strategic Migration", value: "100%", sub: "Cost reduction (SaaS to Custom)" },
      security: { title: "Security First", value: "Priority", sub: "Refactoring for Data Integrity" },
      design: { title: "UX Design", value: "Expert", sub: "Flow & Visual Hierarchy" }
    },
    skills: [
      { name: 'Product Planning', value: 90, fullMark: 100 },
      { name: 'System Arch.', value: 85, fullMark: 100 },
      { name: 'Data Logic', value: 80, fullMark: 100 },
      { name: 'Next.js Impl.', value: 75, fullMark: 100 },
      { name: 'UX Design', value: 88, fullMark: 100 },
      { name: 'AI Ops', value: 92, fullMark: 100 },
    ],
    projects: [
      {
        id: 1,
        title: "EduSearch Platform", // Fixed typo from EduSaerch
        role: "Technical Product Owner",
        status: "V2 Architecture",
        statusColor: "bg-amber-100 text-amber-700",
        desc: "Built MVP in 1 month using Softr+Airtable, acquiring ~100 users. After a hiatus, I started refactoring in Nov using Cloudflare D1/R2/Workers to achieve a 'Zero Cost' architecture (excluding domain fees), addressing scalability and cost issues.",
        tech: ["Cloudflare D1/R2", "Next.js", "Zero Cost Arch.", "MVP to V2"],
        linkText: "View MVP (Legacy)",
        tag: "Featured Project",
        name: "EduSearch",
        subtitle: "Solo-Dev Execution.",
        cta: "View Case Study",
        highlights: {
          migration: { title: "Zero Cost Architecture", text: "Migrated from SaaS to a custom Serverless stack (Cloudflare D1/R2/Workers), successfully eliminating all operational costs except for the domain name." },
          brand: { title: "Rapid Validation", text: "Built MVP in just 1 month and gathered ~100 teacher profiles by July, validating the market demand before investing in custom development." }
        },
        content: {
          proposal: {
            problem: "As a tutor, I noticed scattered resources and inefficient matching processes in the local market, leading to missed opportunities for both students and teachers.",
            insight: "The market lacked a centralized, data-driven platform that could transparently showcase teacher credentials while maintaining privacy.",
            solution: "I designed a self-sustaining ecosystem where teachers can build verifiable profiles and students can filter by specific needs, all powered by a low-latency edge network."
          },
          architecture: {
            description: "Leveraging Cloudflare D1 for edge capability and Next.js for SSR performance, achieving a 'Zero Cost' operational model (excluding domain).",
            diagram: `
            graph LR
              Client[Client] -->|HTTPS| Next[Next.js SSR]
              Next -->|API| Worker[Cloudflare Workers]
              Worker -->|SQL| D1[(Cloudflare D1)]
              Worker -->|Cache| R2[(Cloudflare R2)]
              style Client fill:#f9f9f9,stroke:#333,stroke-width:2px
              style Next fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
              style Worker fill:#fff3e0,stroke:#f57c00,stroke-width:2px
              style D1 fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
              style R2 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
          `
          },
          features: [
            "Real-time Teacher Filtering with sub-100ms response times.",
            "Server-side rendered profiles for optimal SEO and shareability.",
            "Edge-cached static assets via Cloudflare R2 for lightning-fast loads.",
            "Automated verification workflow to ensure platform trust."
          ]
        }
      },
      {
        id: 2,
        title: "Rinario Content Network",
        role: "Lead Developer",
        status: "Live Production",
        statusColor: "bg-emerald-100 text-emerald-700",
        desc: "Designed the content strategy and visual hierarchy for a family of static sites. Orchestrated the development process using AI tools to implement pixel-perfect, high-performance layouts.",
        tech: ["Astro", "Content Strategy", "Performance Opt.", "AI-Augmented Dev"],
        linkText: "Visit Site",
        highlights: null,
        gallery: [
          { title: "Project Alpha", desc: "A static blog generator.", image: "/images/alpha.jpg" },
          { title: "Project Beta", desc: "E-commerce landing page.", image: "/images/beta.jpg" },
          { title: "Project Gamma", desc: "Portfolio template.", image: "/images/gamma.jpg" }
        ]
      }
    ],
    learning: {
      title: "The Migration Story",
      steps: [
        { stage: "Phase 1 (1 Month)", title: "Rapid MVP", desc: "Built with Softr+Airtable. Acquired ~100 users by July." },
        { stage: "Phase 2", title: "Strategic Pause", desc: "Evaluated costs and scalability. Decided to pivot to custom code." },
        { stage: "Phase 3 (Nov)", title: "Zero Cost V2", desc: "Refactoring with Cloudflare D1/R2/Workers for $0 operational cost." }
      ]
    },
    designLab: {
      title: "Scientific Aesthetic",
      desc: "I believe in \"Comfortable Data\". My goal is to make complex information approachable through whitespace and visual hierarchy.",
      legacy: { title: "Legacy Design", sub: "Too many borders, dense text", desc: "Typical engineer-made dashboard. Functional but intimidating." },
      soft: { title: "My Approach (Soft Tech)", sub: "Card layout & Breathing room", desc: "Prioritizing cognitive ease. Information is grouped logically." }
    },
  },
  zh: {
    role: "技術產品負責人 (Technical PM)",
    nav: { overview: "總覽與數據", projects: "系統與技術", design: "設計實驗室" },
    hero: {
      name: "Rina Hsu",
      role: "技術產品負責人",
      headline: "架構師思維。連結商業目標與技術實踐的橋樑。",
      description: "我負責規劃系統架構與定義使用者體驗，並策劃 AI 輔助的工作流程以加速開發，同時確保架構的完整性。",
      social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "mailto:your@email.com"
      }
    },
    science: {
      tag: "核心",
      title: "科學嚴謹性",
      description: "數據解讀與複雜邏輯可視化。"
    },
    tech: {
      title: "技術棧",
      subtitle: "效能與擴展性"
    },
    hire: {
      title: "開放接案",
      subtitle: "全職或自由接案",
      download: "下載履歷",
      book: "預約諮詢"
    },
    network: {
      title: "Rinario Network",
      subtitle: "AI 輔助靜態網站"
    },
    stats: {
      migration: { title: "策略性遷移", value: "100%", sub: "成本降低 (SaaS 轉自研)" },
      security: { title: "資安意識", value: "Priority", sub: "為資料完整性進行重構" },
      design: { title: "UX 設計", value: "Expert", sub: "動線規劃與視覺階層" }
    },
    skills: [
      { name: '產品規劃 & UX', value: 90, fullMark: 100 },
      { name: '系統架構設計', value: 85, fullMark: 100 },
      { name: '數據邏輯 (科學)', value: 80, fullMark: 100 },
      { name: 'Next.js 實作', value: 75, fullMark: 100 },
      { name: 'UX 設計', value: 88, fullMark: 100 },
      { name: 'AI 協作', value: 92, fullMark: 100 },
    ],
    projects: [
      {
        id: 1,
        title: "EduSearch 家教平台",
        role: "技術產品負責人",
        status: "V2 架構進化中",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "使用 Softr+Airtable 僅花一個月建置 MVP，至 7 月累積約 100 位教師資料。11 月啟動重構，選用 Cloudflare D1/R2/Workers 整合開發，除了網域費外，成功實現「零成本」營運架構。",
        tech: ["Cloudflare D1/R2", "Next.js", "零成本架構", "MVP 轉型"],
        linkText: "查看 MVP (舊版)",
        tag: "精選專案",
        name: "EduSearch",
        subtitle: "獨立開發執行力",
        cta: "查看案例研究",
        highlights: {
          migration: { title: "零成本架構 (Zero Cost)", text: "從 SaaS 轉移至自研 Serverless 架構 (Cloudflare D1/R2/Workers)，成功消除所有營運成本 (僅保留網域費)，展現對成本控制的極致追求。" },
          brand: { title: "快速驗證", text: "僅用一個月完成 MVP 建置，並在 7 月前累積 100+ 用戶資料，確認市場需求後才投入程式碼開發，避免過早優化。" }
        },
        content: {
          proposal: {
            problem: "作為一名家教，我注意到本地市場資源分散且媒合過程效率低下，導致學生和教師都錯失了機會。",
            insight: "市場缺乏一個集中的、數據驅動的平台，既能透明地展示教師資歷，又能保護隱私。",
            solution: "我設計了一個自我維持的生態系統，教師可以建立可驗證的個人資料，學生可以根據特定需求進行篩選，所有這些都由低延遲的邊緣網絡支持。"
          },
          architecture: {
            description: "利用 Cloudflare D1 的邊緣能力和 Next.js 的 SSR 效能，實現「零成本」營運模式（不含網域）。",
            diagram: `
              graph LR
                Client[Client] -->|HTTPS| Next[Next.js SSR]
                Next -->|API| Worker[Cloudflare Workers]
                Worker -->|SQL| D1[(Cloudflare D1)]
                Worker -->|Cache| R2[(Cloudflare R2)]
                style Client fill:#f9f9f9,stroke:#333,stroke-width:2px
                style Next fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
                style Worker fill:#fff3e0,stroke:#f57c00,stroke-width:2px
                style D1 fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
                style R2 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
            `
          },
          features: [
            "低於 100ms 回應時間的即時教師篩選。",
            "伺服器端渲染的個人資料，實現最佳 SEO 和分享性。",
            "透過 Cloudflare R2 進行邊緣快取的靜態資源，實現極速加載。",
            "自動化驗證工作流程，確保平台信任度。"
          ]
        }
      },
      {
        id: 2,
        title: "Rinario 內容網站群",
        role: "主導開發者",
        status: "正式營運中",
        statusColor: "bg-emerald-100 text-emerald-800",
        desc: "為一系列靜態網站設計內容策略與視覺階層。利用 AI 工具輔助開發，實現了像素級精準 (Pixel-perfect) 的高效能版面。",
        tech: ["Astro", "內容策略", "效能優化", "AI 協作開發"],
        linkText: "造訪網站",
        highlights: null,
        gallery: [
          { title: "Project Alpha", desc: "靜態部落格生成器。", image: "/images/alpha.jpg" },
          { title: "Project Beta", desc: "電商登陸頁面。", image: "/images/beta.jpg" },
          { title: "Project Gamma", desc: "作品集模板。", image: "/images/gamma.jpg" }
        ]
      }
    ],
    learning: {
      title: "架構遷移的故事",
      steps: [
        { stage: "Phase 1 (1個月)", title: "MVP 快速驗證", desc: "Softr+Airtable 建置。7月前累積 100+ 位教師資料。" },
        { stage: "Phase 2", title: "策略暫停", desc: "評估 SaaS 成本後，決定轉向自研以追求長遠效益。" },
        { stage: "Phase 3 (11月)", title: "零成本重構", desc: "使用 Cloudflare D1/R2/Workers，實現 $0 營運成本架構。" }
      ]
    },
    designLab: {
      title: "科學美學",
      desc: "我相信「舒適的數據」。我的目標是透過留白與視覺階層，讓複雜的資訊變得平易近人。",
      legacy: { title: "傳統工程介面", sub: "邊框過多、文字密集", desc: "典型的工程師思維儀表板。功能齊全但令人卻步。" },
      soft: { title: "我的設計 (Soft Tech)", sub: "卡片式佈局 & 呼吸感", desc: "優先考慮認知負荷。利用柔和的視覺提示將資訊邏輯分組。" }
    },
  },
  ja: {
    role: "テクニカル・プロダクト・オーナー",
    nav: { overview: "概要", projects: "システム開発", design: "UXデザイン" },
    hero: {
      name: "Rina Hsu",
      role: "テクニカル・プロダクト・オーナー",
      headline: "アーキテクト思考。ビジネス目標と技術実装の架け橋。",
      description: "システムの全体設計とUX定義を行い、AIを活用したワークフローを構築して開発を加速させつつ、アーキテクチャの整合性を担保します。",
      social: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        email: "mailto:your@email.com"
      }
    },
    science: {
      tag: "コア",
      title: "科学的厳密さ",
      description: "データ解釈と複雑なロジックの可視化。"
    },
    tech: {
      title: "技術スタック",
      subtitle: "パフォーマンスとスケーラビリティ"
    },
    hire: {
      title: "お仕事募集中",
      subtitle: "フルタイム & フリーランス",
      download: "履歴書をダウンロード",
      book: "相談を予約する"
    },
    network: {
      title: "Rinario Network",
      subtitle: "AI強化静的サイト"
    },
    stats: {
      migration: { title: "戦略的移行", value: "100%", sub: "コスト削減 (SaaSから自社開発へ)" },
      security: { title: "セキュリティ意識", value: "Priority", sub: "データ整合性のための再構築" },
      design: { title: "UXデザイン", value: "Expert", sub: "動線設計と視覚階層" }
    },
    skills: [
      { name: '製品企画 & UX', value: 90, fullMark: 100 },
      { name: 'システムアーキテクチャ', value: 85, fullMark: 100 },
      { name: 'データ論理 (科学)', value: 80, fullMark: 100 },
      { name: 'Next.js 実装', value: 75, fullMark: 100 },
      { name: 'UXデザイン', value: 88, fullMark: 100 },
      { name: 'AI オペレーション', value: 92, fullMark: 100 },
    ],
    projects: [
      {
        id: 1,
        title: "EduSearch プラットフォーム",
        role: "テクニカル・プロダクト・オーナー",
        status: "V2 アーキテクチャ",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "Softr+Airtableを使用し、1ヶ月でMVPを構築。7月までに約100名の講師データを獲得しました。11月からCloudflare D1/R2/Workersを用いたリファクタリングを開始し、ドメイン代以外の運用コストをゼロにする「ゼロコスト・アーキテクチャ」を実現しました。",
        tech: ["Cloudflare D1/R2", "Next.js", "ゼロコスト設計", "MVP検証"],
        linkText: "MVPを見る (旧版)",
        tag: "注目プロジェクト",
        name: "EduSearch",
        subtitle: "単独開発の実行力",
        cta: "ケーススタディを見る",
        highlights: {
          migration: { title: "ゼロコスト・アーキテクチャ", text: "SaaSから独自のサーバーレス構成(Cloudflare D1/R2/Workers)へ移行し、ドメイン費用以外の運用コストを完全に排除しました。" },
          brand: { title: "高速な検証", text: "わずか1ヶ月でMVPを構築し、100名以上のユーザーを獲得。市場ニーズを確実に検証してから開発投資を行いました。" }
        },
        content: {
          proposal: {
            problem: "家庭教師として、リソースが散在し、マッチングプロセスが非効率であることを痛感しました。",
            insight: "教師の資格を透明性を持って示しつつ、プライバシーを保護できるデータ駆動型のプラットフォームが不足していました。",
            solution: "教師が検証可能なプロフィールを作成し、学生がニーズに合わせてフィルタリングできる、自己持続型のエコシステムを設計しました。"
          },
          architecture: {
            description: "Cloudflare D1のエッジ機能とNext.jsのSSRパフォーマンスを活用し、「ゼロコスト」運用モデル（ドメインを除く）を実現。",
            diagram: `
              graph LR
                Client[Client] -->|HTTPS| Next[Next.js SSR]
                Next -->|API| Worker[Cloudflare Workers]
                Worker -->|SQL| D1[(Cloudflare D1)]
                Worker -->|Cache| R2[(Cloudflare R2)]
                style Client fill:#f9f9f9,stroke:#333,stroke-width:2px
                style Next fill:#e1f5fe,stroke:#0288d1,stroke-width:2px
                style Worker fill:#fff3e0,stroke:#f57c00,stroke-width:2px
                style D1 fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
                style R2 fill:#e8f5e9,stroke:#388e3c,stroke-width:2px
            `
          },
          features: [
            "100ms以下の応答時間でのリアルタイム教師フィルタリング。",
            "SEOと共有性のためのサーバーサイドレンダリングプロフィール。",
            "Cloudflare R2によるエッジキャッシュされた静的アセット。",
            "プラットフォームの信頼性を確保するための自動検証ワークフロー。"
          ]
        }
      },
      {
        id: 2,
        title: "Rinario コンテンツネットワーク",
        role: "リードデベロッパー",
        status: "稼働中",
        statusColor: "bg-emerald-100 text-emerald-800",
        desc: "静的サイト群のコンテンツ戦略と視覚階層を設計。AIツールを活用した開発プロセスを構築し、高パフォーマンスなサイト実装を実現しました。",
        tech: ["Astro", "コンテンツ戦略", "パフォーマンス最適化", "AI協調開発"],
        linkText: "サイトへ",
        highlights: null,
        gallery: [
          { title: "Project Alpha", desc: "静的ブログジェネレーター。", image: "/images/alpha.jpg" },
          { title: "Project Beta", desc: "ECランディングページ。", image: "/images/beta.jpg" },
          { title: "Project Gamma", desc: "ポートフォリオテンプレート。", image: "/images/gamma.jpg" }
        ]
      }
    ],
    learning: {
      title: "マイグレーションの軌跡",
      steps: [
        { stage: "Phase 1 (1ヶ月)", title: "MVP 高速検証", desc: "Softr+Airtableで構築。7月までに100+ユーザー獲得。" },
        { stage: "Phase 2", title: "戦略的休止", desc: "コストと拡張性を評価し、自社開発への転換を決断。" },
        { stage: "Phase 3 (11月)", title: "ゼロコストV2", desc: "Cloudflare D1/R2/Workersで、運用コスト$0を実現。" }
      ]
    },
    designLab: {
      title: "科学的・美学",
      desc: "「心地よいデータ」を信条としています。余白と視覚的階層を駆使し、複雑な情報を親しみやすいものにします。",
      legacy: { title: "従来の管理画面", sub: "過剰な枠線、密集した文字", desc: "典型的なエンジニア主導のUI。機能的だが圧迫感がある。" },
      soft: { title: "私のアプローチ (Soft Tech)", sub: "カード型レイアウト & 余白", desc: "認知的負荷を最小限に。柔らかな視覚的手がかりで情報を整理。" }
    }
  }
}







