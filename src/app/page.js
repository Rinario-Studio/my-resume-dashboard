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
  Globe,
  Server,
  FileJson,
  BookOpen,
  GraduationCap,
  Microscope,
  Activity,
  Cpu
} from 'lucide-react';
import { ResponsiveContainer, Tooltip, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// --- 內容資料庫 ---
const content = {
  en: {
    role: "Technical Product Owner / Educator",
    nav: { overview: "Lab Overview", projects: "Project Syllabus", design: "Research Notes" },
    hero: {
      title: "Rina Hsu",
      subtitle: "The Architect & The Educator.",
      desc: "Merging the precision of system architecture with the clarity of educational methodology. I build systems that scale and teams that learn."
    },
    stats: {
      migration: { title: "Migration Success", value: "100%", sub: "SaaS to Custom Arch." },
      security: { title: "Security Protocol", value: "Strict", sub: "Data Integrity First" },
      design: { title: "UX Logic", value: "Scientific", sub: "Cognitive Load Mgmt" }
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
        code: "PROJ-001",
        type: "Full-Stack Architecture",
        role: "Technical Product Owner",
        status: "Phase 2: V2 Architecture",
        desc: "A case study in lean startup methodology and architectural evolution. From a rapid No-code MVP to a scalable Serverless solution.",
        syllabus: [
          { week: "Phase 1", topic: "MVP Validation", desc: "Built with Softr+Airtable. Acquired ~100 users." },
          { week: "Phase 2", topic: "Strategic Pause", desc: "Cost/Benefit Analysis. Decision to pivot to custom code." },
          { week: "Phase 3", topic: "Zero Cost V2", desc: "Refactoring with Cloudflare D1/R2/Workers." }
        ],
        tech: ["Cloudflare D1/R2", "Next.js", "Zero Cost Arch."],
        linkText: "View Legacy MVP",
        link: "https://edusearch.rinario.com",
        matrix: [
          { name: 'Planning', value: 40 },
          { name: 'Dev', value: 30 },
          { name: 'Ops', value: 30 },
        ]
      },
      {
        id: 2,
        title: "Rinario Content Network",
        code: "PROJ-002",
        type: "Static Site Generation",
        role: "Lead Developer",
        status: "Phase 3: Maintenance",
        desc: "Orchestrating a family of high-performance static sites using AI-augmented workflows.",
        syllabus: [
          { week: "Phase 1", topic: "Content Strategy", desc: "Defining visual hierarchy and information architecture." },
          { week: "Phase 2", topic: "AI Implementation", desc: "Building pipelines for AI-assisted code generation." },
          { week: "Phase 3", topic: "Optimization", desc: "Achieving 100/100 Lighthouse scores." }
        ],
        tech: ["Astro", "AI Workflow", "Performance"],
        linkText: "Visit Network",
        link: "https://rinario.com",
        matrix: [
          { name: 'Design', value: 50 },
          { name: 'Dev', value: 20 },
          { name: 'Content', value: 30 },
        ]
      }
    ],
    notes: {
      title: "Field Notes & Soft Skills",
      items: [
        { title: "Japanese Communication", tag: "N1 Certified", desc: "Bridging cultural and technical gaps in cross-border teams." },
        { title: "Technical Writing", tag: "Documentation", desc: "Transforming complex logic into clear, actionable specifications." },
        { title: "Mentorship", tag: "Education", desc: "Applying pedagogical methods to team growth and code reviews." }
      ]
    }
  },
  zh: {
    role: "技術產品負責人 / 專業教育者",
    nav: { overview: "實驗室總覽", projects: "專案教學大綱", design: "研究筆記" },
    hero: {
      title: "Rina Hsu",
      subtitle: "架構師的精準 × 教育者的清晰",
      desc: "我將系統架構的嚴謹度與教育方法的清晰度結合。我不只構建可擴展的系統，更打造能持續學習的團隊。"
    },
    stats: {
      migration: { title: "遷移成功率", value: "100%", sub: "SaaS 轉自研架構" },
      security: { title: "資安協定", value: "Strict", sub: "資料完整性優先" },
      design: { title: "UX 邏輯", value: "Scientific", sub: "認知負荷管理" }
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
        code: "PROJ-001",
        type: "全端架構開發",
        role: "技術產品負責人",
        status: "Phase 2: V2 架構進化",
        desc: "精實創業 (Lean Startup) 與架構演進的教案。從快速驗證的 No-code MVP 到可擴展的 Serverless 解決方案。",
        syllabus: [
          { week: "Phase 1", topic: "MVP 快速驗證", desc: "Softr+Airtable 建置，累積 100+ 用戶。" },
          { week: "Phase 2", topic: "策略性暫停", desc: "成本效益分析。決定轉向自研開發。" },
          { week: "Phase 3", topic: "零成本 V2", desc: "使用 Cloudflare D1/R2/Workers 進行重構。" }
        ],
        tech: ["Cloudflare D1/R2", "Next.js", "零成本架構"],
        linkText: "查看 MVP (舊版)",
        link: "https://edusearch.rinario.com",
        matrix: [
          { name: '規劃', value: 40 },
          { name: '開發', value: 30 },
          { name: '維運', value: 30 },
        ]
      },
      {
        id: 2,
        title: "Rinario 內容網站群",
        code: "PROJ-002",
        type: "靜態網站生成 (SSG)",
        role: "主導開發者",
        status: "Phase 3: 維運與優化",
        desc: "策劃一系列高效能靜態網站，並導入 AI 輔助工作流以提升產出效率。",
        syllabus: [
          { week: "Phase 1", topic: "內容策略", desc: "定義視覺階層與資訊架構 (IA)。" },
          { week: "Phase 2", topic: "AI 導入實作", desc: "建立 AI 輔助程式碼生成的工作流程。" },
          { week: "Phase 3", topic: "效能優化", desc: "達成 Lighthouse 100/100 滿分效能。" }
        ],
        tech: ["Astro", "AI 工作流", "極致效能"],
        linkText: "造訪網站",
        link: "https://rinario.com",
        matrix: [
          { name: '設計', value: 50 },
          { name: '開發', value: 20 },
          { name: '內容', value: 30 },
        ]
      }
    ],
    notes: {
      title: "田野筆記 & 軟技能",
      items: [
        { title: "日語溝通", tag: "N1 檢定", desc: "跨越文化與技術的鴻溝，促進跨國團隊協作。" },
        { title: "技術寫作", tag: "文件化", desc: "將複雜的邏輯轉譯為清晰、可執行的規格書。" },
        { title: "導師制度", tag: "教育傳承", desc: "運用教育學方法進行代碼審查與團隊成長指導。" }
      ]
    }
  },
  ja: {
    role: "テクニカル・プロダクト・オーナー / 教育者",
    nav: { overview: "ラボ概要", projects: "プロジェクト要項", design: "研究ノート" },
    hero: {
      title: "Rina Hsu",
      subtitle: "アーキテクトの精密さ × 教育者の明晰さ",
      desc: "システムアーキテクチャの厳密さと教育手法の分かりやすさを融合。スケーラブルなシステムと、学習するチームを構築します。"
    },
    stats: {
      migration: { title: "移行成功率", value: "100%", sub: "SaaSから自社開発へ" },
      security: { title: "セキュリティ", value: "Strict", sub: "データ整合性最優先" },
      design: { title: "UXロジック", value: "Scientific", sub: "認知的負荷の管理" }
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
        code: "PROJ-001",
        type: "フルスタック・アーキテクチャ",
        role: "テクニカル・プロダクト・オーナー",
        status: "Phase 2: V2 アーキテクチャ",
        desc: "リーンスタートアップ手法とアーキテクチャ進化のケーススタディ。高速検証用No-code MVPから、スケーラブルなサーバーレス構成へ。",
        syllabus: [
          { week: "Phase 1", topic: "MVP 高速検証", desc: "Softr+Airtableで構築。100+ユーザー獲得。" },
          { week: "Phase 2", topic: "戦略的休止", desc: "費用対効果分析。自社開発への転換を決断。" },
          { week: "Phase 3", topic: "ゼロコスト V2", desc: "Cloudflare D1/R2/Workersによるリファクタリング。" }
        ],
        tech: ["Cloudflare D1/R2", "Next.js", "ゼロコスト設計"],
        linkText: "MVPを見る (旧版)",
        link: "https://edusearch.rinario.com",
        matrix: [
          { name: '企画', value: 40 },
          { name: '開発', value: 30 },
          { name: '運用', value: 30 },
        ]
      },
      {
        id: 2,
        title: "Rinario コンテンツネットワーク",
        code: "PROJ-002",
        type: "静的サイト生成 (SSG)",
        role: "リードデベロッパー",
        status: "Phase 3: 運用・最適化",
        desc: "AIを活用したワークフローで構築された、高パフォーマンスな静的サイト群。",
        syllabus: [
          { week: "Phase 1", topic: "コンテンツ戦略", desc: "視覚的階層と情報アーキテクチャ(IA)の定義。" },
          { week: "Phase 2", topic: "AI 導入", desc: "AI支援によるコード生成パイプラインの構築。" },
          { week: "Phase 3", topic: "最適化", desc: "Lighthouseスコア 100/100 の達成。" }
        ],
        tech: ["Astro", "AI ワークフロー", "パフォーマンス"],
        linkText: "サイトへ",
        link: "https://rinario.com",
        matrix: [
          { name: '設計', value: 50 },
          { name: '開発', value: 20 },
          { name: '内容', value: 30 },
        ]
      }
    ],
    notes: {
      title: "フィールドノート & ソフトスキル",
      items: [
        { title: "日本語コミュニケーション", tag: "N1 認定", desc: "文化と技術のギャップを埋め、多国籍チームの協業を促進。" },
        { title: "テクニカルライティング", tag: "ドキュメント化", desc: "複雑なロジックを明確で実行可能な仕様書へ変換。" },
        { title: "メンターシップ", tag: "教育", desc: "教育学的手法を用いたコードレビューとチーム育成。" }
      ]
    }
  }
};

// --- 組件 ---

const SectionHeader = ({ title, num }) => (
  <div className="flex items-center space-x-4 mb-8 group cursor-default">
    <div className="text-xs font-mono text-indigo-400 font-bold tracking-widest">
      {num}
    </div>
    <div className="h-px flex-1 bg-slate-200 group-hover:bg-indigo-200 transition-colors"></div>
    <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest">
      {title}
    </h2>
  </div>
);

const StatCard = ({ title, value, sub, icon: Icon }) => (
  <div className="bg-white border border-slate-100 p-6 hover:border-indigo-600 transition-all duration-300 group relative overflow-hidden">
    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</h3>
      <Icon size={16} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
    </div>
    <div className="text-3xl font-mono font-bold text-slate-800 mb-2">{value}</div>
    <p className="text-xs text-slate-500 font-medium">{sub}</p>
  </div>
);

const SyllabusCard = ({ project }) => (
  <div className="bg-white border border-slate-200 p-0 hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
    {/* Header */}
    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-[10px] font-mono text-indigo-500 font-bold mb-1">{project.code}</div>
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{project.title}</h3>
        </div>
        <span className="px-2 py-1 bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          {project.status}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-1">
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Syllabus Body */}
    <div className="p-6 flex-1">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Syllabus / Roadmap</h4>
      <div className="space-y-6 relative before:absolute before:left-[5px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-200">
        {project.syllabus.map((item, idx) => (
          <div key={idx} className="relative pl-6 group/item">
            <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-white border-2 border-slate-300 group-hover/item:border-indigo-500 group-hover/item:scale-110 transition-all z-10"></div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-1 sm:mb-0">{item.week}</span>
              <span className="text-xs font-bold text-slate-700">{item.topic}</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Resource Matrix */}
    <div className="p-6 border-t border-slate-100 bg-slate-50/30">
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Resource Matrix</h4>
      <div className="h-24 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={project.matrix}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
            <Line type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3, fill: '#4f46e5' }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Footer */}
    <div className="p-4 border-t border-slate-100 flex justify-end">
      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
        <span>{project.linkText}</span>
        <ExternalLink size={12} />
      </a>
    </div>
  </div>
);

const NoteCard = ({ note }) => (
  <div className="bg-white p-6 border border-slate-200 hover:border-indigo-400 transition-all duration-300 group h-full flex flex-col">
    <div className="flex justify-between items-start mb-3">
      <BookOpen size={20} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
      <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-1 uppercase tracking-wider">{note.tag}</span>
    </div>
    <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-indigo-700 transition-colors">{note.title}</h3>
    <p className="text-xs text-slate-500 leading-relaxed flex-1">
      {note.desc}
    </p>
  </div>
);

// --- 主程式 ---
export default function GlobalResume() {
  const [lang, setLang] = useState('zh');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">

      {/* Top Navigation / Language */}
      <header className="fixed top-0 w-full bg-[#fafafa]/90 backdrop-blur-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-indigo-900 flex items-center justify-center text-white font-bold font-mono text-sm">R</div>
            <span className="font-bold text-sm tracking-widest uppercase text-slate-800 hidden sm:block">Rina Hsu / Portfolio</span>
          </div>
          <div className="flex space-x-1">
            {['en', 'zh', 'ja'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${lang === l ? 'bg-indigo-900 text-white' : 'text-slate-400 hover:text-indigo-900'
                  }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">

        {/* Hero Section: Identity Fusion */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 mb-6">
              <span className="h-px w-8 bg-indigo-600"></span>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{t.role}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {t.hero.title}
              <span className="block text-slate-400 text-2xl md:text-3xl mt-2 font-light">{t.hero.subtitle}</span>
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-8 border-l-2 border-indigo-100 pl-6">
              {t.hero.desc}
            </p>
            <div className="flex space-x-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="p-3 bg-white border border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Scientific Stats */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <StatCard icon={ArrowRightLeft} {...t.stats.migration} />
            <StatCard icon={ShieldCheck} {...t.stats.security} />
            <StatCard icon={Microscope} {...t.stats.design} />
          </div>
        </section>

        {/* Skills Radar (The "Lab Data") */}
        <section className="mb-24">
          <SectionHeader title={t.nav.overview} num="01" />
          <div className="bg-white border border-slate-200 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Skill Matrix Analysis</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-8">
                  Visualizing the balance between Product Strategy, Technical Architecture, and User Experience.
                  Data indicates a strong bias towards holistic system design and AI-augmented operations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 border-l-2 border-indigo-500">
                    <div className="text-2xl font-bold text-indigo-900">92%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">AI Operations</div>
                  </div>
                  <div className="p-4 bg-slate-50 border-l-2 border-indigo-500">
                    <div className="text-2xl font-bold text-indigo-900">90%</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Product Planning</div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] w-full relative">
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={t.skills}>
                    <PolarGrid stroke="#cbd5e1" />
                    <PolarAngleAxis dataKey="name" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600, letterSpacing: '0.05em' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#3730a3"
                      strokeWidth={2}
                      fill="#4f46e5"
                      fillOpacity={0.2}
                    />
                    <Tooltip
                      contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      itemStyle={{ color: '#3730a3', fontWeight: 'bold', fontFamily: 'monospace' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Projects as Syllabus */}
        <section className="mb-24">
          <SectionHeader title={t.nav.projects} num="02" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.projects.map(project => (
              <SyllabusCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Teaching & Notes */}
        <section>
          <SectionHeader title={t.nav.design} num="03" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.notes.items.map((note, i) => (
              <NoteCard key={i} note={note} />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xs font-mono text-slate-500 mb-2">SYSTEM STATUS: ONLINE</div>
            <div className="text-sm font-bold text-slate-200">© 2025 Rina Hsu. All Rights Reserved.</div>
          </div>
          <div className="flex space-x-6 text-xs font-bold tracking-widest uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">Github</span>
            <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition-colors">Email</span>
          </div>
        </div>
      </footer>
    </div>
  );
}