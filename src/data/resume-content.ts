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
    title: "The Architect Mindset.",
    subtitle: "Bridging Business Goals and Technical Implementation.",
    desc: "I architect the system and define the UX, then I orchestrate AI-augmented workflows to accelerate development while ensuring architectural integrity."
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
      title: "EduSaerch Platform",
      role: "Technical Product Owner",
      status: "V2 Architecture",
      statusColor: "bg-amber-100 text-amber-700",
      desc: "Built MVP in 1 month using Softr+Airtable, acquiring ~100 users. After a hiatus, I started refactoring in Nov using Cloudflare D1/R2/Workers to achieve a 'Zero Cost' architecture (excluding domain fees), addressing scalability and cost issues.",
      tech: ["Cloudflare D1/R2", "Next.js", "Zero Cost Arch.", "MVP to V2"],
      linkText: "View MVP (Legacy)",
      highlights: {
        migration: { title: "Zero Cost Architecture", text: "Migrated from SaaS to a custom Serverless stack (Cloudflare D1/R2/Workers), successfully eliminating all operational costs except for the domain name." },
        brand: { title: "Rapid Validation", text: "Built MVP in just 1 month and gathered ~100 teacher profiles by July, validating the market demand before investing in custom development." }
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
      highlights: null
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
  zh: {
    role: "技術產品負責人 (Technical PM)",
    nav: { overview: "總覽與數據", projects: "系統與技術", design: "設計實驗室" },
    hero: {
      title: "架構師思維。",
      subtitle: "連結商業目標與技術實踐的橋樑。",
      desc: "我負責規劃系統架構與定義使用者體驗，並策劃 AI 輔助的工作流程以加速開發，同時確保架構的完整性。"
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
        title: "EduSaerch 家教平台",
        role: "技術產品負責人",
        status: "V2 架構進化中",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "使用 Softr+Airtable 僅花一個月建置 MVP，至 7 月累積約 100 位教師資料。11 月啟動重構，選用 Cloudflare D1/R2/Workers 整合開發，除了網域費外，成功實現「零成本」營運架構。",
        tech: ["Cloudflare D1/R2", "Next.js", "零成本架構", "MVP 轉型"],
        linkText: "查看 MVP (舊版)",
        highlights: {
          migration: { title: "零成本架構 (Zero Cost)", text: "從 SaaS 轉移至自研 Serverless 架構 (Cloudflare D1/R2/Workers)，成功消除所有營運成本 (僅保留網域費)，展現對成本控制的極致追求。" },
          brand: { title: "快速驗證", text: "僅用一個月完成 MVP 建置，並在 7 月前累積 100+ 用戶資料，確認市場需求後才投入程式碼開發，避免過早優化。" }
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
        highlights: null
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
      title: "アーキテクト思考。",
      subtitle: "ビジネス目標と技術実装の架け橋。",
      desc: "システムの全体設計とUX定義を行い、AIを活用したワークフローを構築して開発を加速させつつ、アーキテクチャの整合性を担保します。"
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
        title: "EduSaerch プラットフォーム",
        role: "テクニカル・プロダクト・オーナー",
        status: "V2 アーキテクチャ",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "Softr+Airtableを使用し、1ヶ月でMVPを構築。7月までに約100名の講師データを獲得しました。11月からCloudflare D1/R2/Workersを用いたリファクタリングを開始し、ドメイン代以外の運用コストをゼロにする「ゼロコスト・アーキテクチャ」を実現しました。",
        tech: ["Cloudflare D1/R2", "Next.js", "ゼロコスト設計", "MVP検証"],
        linkText: "MVPを見る (旧版)",
        highlights: {
          migration: { title: "ゼロコスト・アーキテクチャ", text: "SaaSから独自のサーバーレス構成(Cloudflare D1/R2/Workers)へ移行し、ドメイン費用以外の運用コストを完全に排除しました。" },
          brand: { title: "高速な検証", text: "わずか1ヶ月でMVPを構築し、100名以上のユーザーを獲得。市場ニーズを確実に検証してから開発投資を行いました。" }
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
        highlights: null
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
};