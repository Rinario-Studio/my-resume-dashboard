"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Code2, 
  PenTool, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  ShieldCheck,
  ArrowRightLeft,
  Lightbulb,
  Info,
  Sparkles,
  Layout,
  Languages,
  Globe
} from 'lucide-react';
import { ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

// --- 多語言內容資料庫 (Content Database) ---
const content = {
  en: {
    role: "Technical Product Owner",
    nav: { overview: "Overview", projects: "System & Tech", design: "UX & Design" },
    hero: {
      title: "The Architect Mindset.",
      subtitle: "Bridging Business Goals and Technical Implementation.",
      desc: "I architect the system and define the UX, then I guide AI to build the code."
    },
    stats: {
      migration: { title: "Strategic Migration", value: "100%", sub: "Cost reduction (SaaS to Custom)" },
      security: { title: "Security First", value: "Aware", sub: "Refactoring for Data Integrity" },
      design: { title: "UX Design", value: "Expert", sub: "Flow & Visual Hierarchy" }
    },
    skills: [
      { name: 'Product Planning', value: 40, color: '#f472b6' }, 
      { name: 'System Arch.', value: 30, color: '#818cf8' }, 
      { name: 'Data Logic', value: 20, color: '#2dd4bf' }, 
      { name: 'Next.js Impl.', value: 10, color: '#fbbf24' }, 
    ],
    projects: [
      {
        id: 1,
        title: "EduSaerch Platform",
        role: "Technical Product Owner",
        status: "Refactoring Phase",
        statusColor: "bg-amber-100 text-amber-700",
        desc: "Initially launched MVP at 'edusearch.rinario.com' using Softr. During beta testing, I identified critical scalability issues and limitations in the No-code environment. I am now re-architecting the platform as 'EduSaerch' (edusaerch.com) using a custom Serverless stack to address these technical debts.",
        tech: ["Architecture Migration", "MVP Iteration", "DB Schema Design", "Next.js"],
        linkText: "View MVP (Legacy)",
        highlights: {
          migration: { title: "Strategic Migration", text: "During MVP testing, I ignored some scalability issues to ship fast. In the refactoring phase (V2), I am specifically addressing these technical debts by moving to a robust Serverless architecture." },
          brand: { title: "Brand Story", text: "\"EduSearch\" was taken, so I strategically secured \"EduSaerch\" to create a unique brand identity." }
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
        { stage: "Step 1", title: "MVP Validation", desc: "Launched MVP on Softr to verify user needs." },
        { stage: "Step 2", title: "The Pivot", desc: "Migrated from SaaS to Custom Code to reduce costs." },
        { stage: "Step 3", title: "Re-Architecture", desc: "Designing V2 with a focus on Security and Scalability." }
      ]
    },
    designLab: {
      title: "Scientific Aesthetic",
      desc: "I believe in \"Comfortable Data\". My goal is to make complex information approachable through whitespace and visual hierarchy.",
      legacy: { title: "Legacy Design", sub: "Too many borders, dense text", desc: "Typical engineer-made dashboard. Functional but intimidating." },
      soft: { title: "My Approach (Soft Tech)", sub: "Card layout & Breathing room", desc: "Prioritizing cognitive ease. Information is grouped logically." }
    }
  },
  zh: {
    role: "技術產品負責人 (Technical PM)",
    nav: { overview: "總覽與數據", projects: "系統與技術", design: "設計實驗室" },
    hero: {
      title: "架構師思維。",
      subtitle: "連結商業目標與技術實踐的橋樑。",
      desc: "我負責規劃系統架構與定義使用者體驗，並指導 AI 協作完成程式碼開發。"
    },
    stats: {
      migration: { title: "策略性遷移", value: "100%", sub: "成本降低 (SaaS 轉自研)" },
      security: { title: "資安意識", value: "Aware", sub: "為資料完整性進行重構" },
      design: { title: "UX 設計", value: "Expert", sub: "動線規劃與視覺階層" }
    },
    skills: [
      { name: '產品規劃 & UX', value: 40, color: '#f472b6' }, 
      { name: '系統架構設計', value: 30, color: '#818cf8' }, 
      { name: '數據邏輯 (科學)', value: 20, color: '#2dd4bf' }, 
      { name: 'Next.js 實作', value: 10, color: '#fbbf24' }, 
    ],
    projects: [
      {
        id: 1,
        title: "EduSaerch 家教平台",
        role: "技術產品負責人",
        status: "重構階段 (Refactoring)",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "最初使用 No-code 工具 (Softr) 快速驗證 MVP。在測試過程中，我意識到訂閱成本過高且資料掌控度不足。目前正在進行架構重構，將平台遷移至自研的 Serverless 架構 (Next.js + Cloudflare)，以解決這些技術債。",
        tech: ["架構遷移", "MVP 迭代", "資料庫設計", "Next.js"],
        linkText: "查看 MVP (舊版)",
        highlights: {
          migration: { title: "策略性遷移", text: "在 MVP 階段，為了求快我暫時忽略了擴展性問題。現在進入 V2 重構階段，我正透過遷移至 Serverless 架構來償還這些技術債，並大幅降低營運成本。" },
          brand: { title: "品牌故事", text: "由於 \"EduSearch\" 已被註冊，我策略性地選擇了 \"EduSaerch\" 作為品牌名稱，以確保網域與品牌識別的獨特性。" }
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
        { stage: "Step 1", title: "MVP 驗證", desc: "使用 Softr 快速上線，低成本驗證用戶需求。" },
        { stage: "Step 2", title: "轉折點", desc: "意識到 SaaS 擴展成本過高，決定轉向自研開發。" },
        { stage: "Step 3", title: "架構重組", desc: "專注於資安與擴展性，使用 Next.js 設計 V2 版本。" }
      ]
    },
    designLab: {
      title: "科學美學",
      desc: "我相信「舒適的數據」。我的目標是透過留白與視覺階層，讓複雜的資訊變得平易近人。",
      legacy: { title: "傳統工程介面", sub: "邊框過多、文字密集", desc: "典型的工程師思維儀表板。功能齊全但令人卻步。" },
      soft: { title: "我的設計 (Soft Tech)", sub: "卡片式佈局 & 呼吸感", desc: "優先考慮認知負荷。利用柔和的視覺提示將資訊邏輯分組。" }
    }
  },
  ja: {
    role: "テクニカル・プロダクト・オーナー",
    nav: { overview: "概要", projects: "システム開発", design: "UXデザイン" },
    hero: {
      title: "アーキテクト思考。",
      subtitle: "ビジネス目標と技術実装の架け橋。",
      desc: "システムの全体設計とUX定義を行い、AIを活用してコード実装を指揮します。"
    },
    stats: {
      migration: { title: "戦略的移行", value: "100%", sub: "コスト削減 (SaaSから自社開発へ)" },
      security: { title: "セキュリティ意識", value: "Aware", sub: "データ整合性のための再構築" },
      design: { title: "UXデザイン", value: "Expert", sub: "動線設計と視覚階層" }
    },
    skills: [
      { name: '製品企画 & UX', value: 40, color: '#f472b6' }, 
      { name: 'システムアーキテクチャ', value: 30, color: '#818cf8' }, 
      { name: 'データ論理 (科学)', value: 20, color: '#2dd4bf' }, 
      { name: 'Next.js 実装', value: 10, color: '#fbbf24' }, 
    ],
    projects: [
      {
        id: 1,
        title: "EduSaerch プラットフォーム",
        role: "テクニカル・プロダクト・オーナー",
        status: "リファクタリング段階",
        statusColor: "bg-amber-100 text-amber-800",
        desc: "当初はNo-codeツール(Softr)でMVPを立ち上げ、市場ニーズを検証しました。ベータテスト中にスケーラビリティの課題を特定し、現在は技術的負債を解消するため、Next.js + Cloudflareを用いたサーバーレス構成へ移行しています。",
        tech: ["アーキテクチャ移行", "MVP改善", "DB設計", "Next.js"],
        linkText: "MVPを見る (旧版)",
        highlights: {
          migration: { title: "戦略的マイグレーション", text: "MVP段階ではスピードを優先し、一部の課題を許容していました。V2では堅牢なサーバーレス設計へ移行し、技術的負債を根本から解決しています。" },
          brand: { title: "ブランドストーリー", text: "\"EduSearch\"という商標が既に存在したため、独自のブランドアイデンティティを確立するために戦略的に\"EduSaerch\"を選択しました。" }
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
        { stage: "Step 1", title: "MVP 検証", desc: "SoftrでMVPを立ち上げ、ユーザーニーズを低コストで検証。" },
        { stage: "Step 2", title: "転換点", desc: "SaaSのコスト課題に直面し、自社開発への切り替えを決断。" },
        { stage: "Step 3", title: "再設計", desc: "セキュリティと拡張性を重視し、Next.jsでV2を設計中。" }
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

// --- 共用組件 ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
      active 
        ? 'bg-white text-indigo-600 shadow-lg shadow-indigo-100 scale-100 font-semibold' 
        : 'text-slate-500 hover:bg-white/60 hover:text-slate-700 hover:scale-[1.02]'
    }`}
  >
    <Icon size={20} className={`transition-colors ${active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
    <span>{label}</span>
    {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600"></div>}
  </button>
);

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 ${className}`}>
    {children}
  </div>
);

export default function GlobalResume() {
  const [activeTab, setActiveTab] = useState('overview');
  const [lang, setLang] = useState('en'); // 預設語言：英文

  const t = content[lang]; // 獲取當前語言的翻譯內容

  return (
    <div className="flex h-screen bg-[#f3f4f6] font-sans text-slate-600 overflow-hidden selection:bg-indigo-100 selection:text-indigo-900 relative">
      {/* 背景裝飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Sidebar */}
      <aside className="w-80 flex-col hidden md:flex z-10 p-6">
        <div className="h-full bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[2.5rem] shadow-xl flex flex-col p-6">
          <div className="flex items-center space-x-4 mb-8 px-2 pt-2">
            <div className="relative">
               <div className="h-14 w-14 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-indigo-200">R</div>
               <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                 <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
               </div>
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-slate-800">Rina Hsu</h1>
              <p className="text-[10px] font-medium text-indigo-500 bg-indigo-50/80 px-2 py-1 rounded-lg inline-block mt-1 backdrop-blur-sm">{t.role}</p>
            </div>
          </div>
          
          {/* Language Switcher */}
          <div className="mb-6 flex p-1 bg-white/50 rounded-xl mx-2 border border-white/60">
            {['en', 'zh', 'ja'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  lang === l ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          
          <nav className="flex-1 space-y-2">
            <p className="px-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Navigation</p>
            <SidebarItem 
              icon={LayoutDashboard} 
              label={t.nav.overview} 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')} 
            />
            <SidebarItem 
              icon={Code2} 
              label={t.nav.projects} 
              active={activeTab === 'projects'} 
              onClick={() => setActiveTab('projects')} 
            />
            <SidebarItem 
              icon={PenTool} 
              label={t.nav.design} 
              active={activeTab === 'design'} 
              onClick={() => setActiveTab('design')} 
            />
          </nav>

          <div className="mt-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-5 text-white relative overflow-hidden shadow-2xl group cursor-pointer transition-transform hover:scale-[1.02]">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-3 opacity-80">
                  <Sparkles size={16} className="text-yellow-300" />
                  <span className="font-bold text-xs tracking-wide">MY ROLE</span>
                </div>
                <p className="text-sm font-medium leading-relaxed text-slate-200">
                  "{t.hero.desc}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto relative z-10">
        {/* Mobile Header */}
        <header className="md:hidden bg-white/80 backdrop-blur-md p-4 sticky top-0 z-30 border-b border-slate-100">
           <div className="flex items-center justify-between">
             <div className="flex items-center space-x-3">
               <div className="h-10 w-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-bold">R</div>
               <span className="font-bold text-slate-700">Rina's Portfolio</span>
             </div>
             <div className="flex space-x-1">
                {['en', 'zh', 'ja'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      lang === l ? 'bg-indigo-100 text-indigo-700' : 'text-slate-400'
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
             </div>
           </div>
        </header>

        <div className="p-6 md:p-12 max-w-6xl mx-auto space-y-10">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-3">
                {t.hero.title}
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="flex space-x-3">
               {[Github, Linkedin, Mail].map((Icon, i) => (
                 <button key={i} className="p-3 bg-white/60 hover:bg-white border border-white/50 rounded-2xl shadow-sm hover:shadow-md text-slate-600 transition-all">
                   <Icon size={20} />
                 </button>
               ))}
            </div>
          </div>

          {/* Content Area */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
              
              {/* Highlight Card: The "Architect" Trait */}
              <GlassCard className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-indigo-100/50">
                 <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="p-4 bg-white rounded-2xl shadow-sm text-indigo-600">
                       <Lightbulb size={32} />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-slate-800 mb-2">{t.role}</h3>
                       <p className="text-slate-600 leading-relaxed">
                         {t.hero.desc}
                       </p>
                    </div>
                 </div>
              </GlassCard>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard>
                   <div className="flex items-center gap-3 mb-2 text-amber-500">
                      <ArrowRightLeft size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider">{t.stats.migration.title}</span>
                   </div>
                   <div className="text-3xl font-bold text-slate-800">{t.stats.migration.value}</div>
                   <p className="text-sm text-slate-400 mt-1">{t.stats.migration.sub}</p>
                </GlassCard>
                <GlassCard>
                   <div className="flex items-center gap-3 mb-2 text-indigo-500">
                      <ShieldCheck size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider">{t.stats.security.title}</span>
                   </div>
                   <div className="text-3xl font-bold text-slate-800">{t.stats.security.value}</div>
                   <p className="text-sm text-slate-400 mt-1">{t.stats.security.sub}</p>
                </GlassCard>
                <GlassCard>
                   <div className="flex items-center gap-3 mb-2 text-pink-500">
                      <PenTool size={20} />
                      <span className="text-xs font-bold uppercase tracking-wider">{t.stats.design.title}</span>
                   </div>
                   <div className="text-3xl font-bold text-slate-800">{t.stats.design.value}</div>
                   <p className="text-sm text-slate-400 mt-1">{t.stats.design.sub}</p>
                </GlassCard>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Skill Distribution */}
                <div className="lg:col-span-2">
                  <GlassCard className="h-full">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="font-bold text-xl text-slate-800">Skill Matrix</h3>
                    </div>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={t.skills} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9"/>
                          <XAxis type="number" hide />
                          <YAxis dataKey="name" type="category" width={160} tick={{fontSize: 12, fontWeight: 500, fill: '#64748b'}} />
                          <Tooltip 
                            cursor={{fill: '#f8fafc'}} 
                            contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px -5px rgb(0 0 0 / 0.1)' }} 
                          />
                          <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={36}>
                            {t.skills.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </GlassCard>
                </div>

                {/* Learning Path (Vertical Timeline) */}
                <div className="lg:col-span-1">
                   <GlassCard className="h-full bg-white/50">
                      <h3 className="font-bold text-xl text-slate-800 mb-6">{t.learning.title}</h3>
                      <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:h-full before:w-0.5 before:bg-slate-200">
                         {t.learning.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-8">
                               <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white bg-indigo-400 shadow-sm"></div>
                               <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">{step.stage}</span>
                               <h4 className="font-bold text-slate-700 text-sm">{step.title}</h4>
                               <p className="text-xs text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                            </div>
                         ))}
                      </div>
                   </GlassCard>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
              {t.projects.map(project => (
                <GlassCard key={project.id} className="group border-l-4 border-l-transparent hover:border-l-indigo-400">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                        <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full ${project.statusColor}`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-slate-400 mb-5 flex items-center">
                        <Code2 size={14} className="mr-1"/> {project.role}
                      </p>
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center space-x-1 text-sm font-bold text-indigo-500 hover:text-indigo-600 bg-indigo-50/50 px-4 py-2 rounded-xl transition-colors">
                      <span>{project.linkText}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <p className="text-slate-600 mb-6 max-w-3xl leading-7 text-base">
                    {project.desc}
                  </p>

                  {/* Highlights */}
                  {project.highlights && (
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                       <div className="p-4 bg-indigo-50/80 rounded-xl border border-indigo-100 flex gap-3">
                          <ArrowRightLeft className="text-indigo-500 shrink-0" size={20} />
                          <div className="text-sm text-indigo-900">
                             <strong>{project.highlights.migration.title}:</strong> {project.highlights.migration.text}
                          </div>
                       </div>
                       <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-100 flex gap-3">
                          <Info className="text-amber-500 shrink-0" size={20} />
                          <div className="text-sm text-amber-900">
                             <strong>{project.highlights.brand.title}:</strong> {project.highlights.brand.text}
                          </div>
                       </div>
                     </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-white text-slate-500 text-xs font-bold rounded-lg border border-slate-100 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          )}

          {/* Design Lab Tab */}
          {activeTab === 'design' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
               <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                     <h3 className="text-3xl font-bold mb-4">{t.designLab.title}</h3>
                     <p className="text-indigo-100 max-w-xl text-lg leading-relaxed">
                        {t.designLab.desc}
                     </p>
                  </div>
                  <div className="absolute right-0 top-0 h-full w-1/2 bg-white opacity-10 rounded-l-full transform translate-x-10"></div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <GlassCard>
                     <h4 className="font-bold text-lg text-slate-800 mb-2">{t.designLab.legacy.title}</h4>
                     <div className="h-32 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 mb-4 text-sm">
                        {t.designLab.legacy.sub}
                     </div>
                     <p className="text-sm text-slate-500">{t.designLab.legacy.desc}</p>
                  </GlassCard>
                  <GlassCard className="border-indigo-100 bg-indigo-50/30">
                     <h4 className="font-bold text-lg text-indigo-900 mb-2">{t.designLab.soft.title}</h4>
                     <div className="h-32 bg-white rounded-xl border border-indigo-100 shadow-sm flex items-center justify-center text-indigo-400 mb-4 text-sm">
                        <Layout className="mr-2"/> {t.designLab.soft.sub}
                     </div>
                     <p className="text-sm text-slate-600">{t.designLab.soft.desc}</p>
                  </GlassCard>
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}