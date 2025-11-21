
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Download,
  Calendar,
  Cpu,
  Zap,
  Globe,
  Database,
  Code2,
  Microscope,
  Layers,
  X,
  Server,
  Smartphone,
  Cloud
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar
} from 'recharts';
import { cn } from '@/lib/utils';
import EduSearchDetail from '@/components/EduSearchDetail';

// --- Data ---
const translations = {
  ZH: {
    hero: {
      name: "Rina Hsu",
      role: "Design Engineer",
      headline: <>Bridging Scientific Logic & <br className="hidden md:block" /><span className="text-blue-600">Creative Design.</span></>,
      description: "Transforming real-world problems into deployed products. From NTU Atmospheric Science to Full-stack execution."
    },
    science: {
      tag: "Core",
      title: "Scientific Rigor",
      description: "Data Interpretation & Complex Logic Visualization."
    },
    edusearch: {
      tag: "Featured Project",
      name: "EduSearch",
      title: "Solo-Dev Execution.",
      subtitle: "Solo-Dev Execution.",
      description: <>Identified market asymmetry. Built a scalable matching platform using Cloudflare D1 & Next.js.<br /><span className="font-semibold text-blue-700 mt-1 block">Full Lifecycle Ownership.</span></>,
      cta: "View Case Study",
      content: {
        proposal: {
          problem: "As a tutor, I noticed scattered resources and inefficient matching processes in the local market, leading to missed opportunities for both students and teachers.",
          insight: "The market lacked a centralized, data-driven platform that could transparently showcase teacher credentials while maintaining privacy.",
          solution: "I designed a self-sustaining ecosystem where teachers can build verifiable profiles and students can filter by specific needs, all powered by a low-latency edge network."
        },
        architecture: {
          description: "Leveraging Cloudflare D1 for edge capability and Next.js for SSR performance, achieving a 'Zero Cost' operational model (excluding domain).",
        },
        features: [
          "Real-time Teacher Filtering with sub-100ms response times.",
          "Server-side rendered profiles for optimal SEO and shareability.",
          "Edge-cached static assets via Cloudflare R2 for lightning-fast loads.",
          "Automated verification workflow to ensure platform trust."
        ]
      }
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
    }
  },
  EN: {
    hero: {
      name: "Sample Title",
      role: "Placeholder Role",
      headline: <>This is a placeholder <br className="hidden md:block" /><span className="text-blue-600">for English version.</span></>,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    science: {
      tag: "Core",
      title: "Scientific Rigor",
      description: "Data Interpretation & Complex Logic Visualization."
    },
    edusearch: {
      tag: "Featured Project",
      name: "EduSearch",
      title: "Solo-Dev Execution.",
      subtitle: "Solo-Dev Execution.",
      description: <>Identified market asymmetry. Built a scalable matching platform using Cloudflare D1 & Next.js.<br /><span className="font-semibold text-blue-700 mt-1 block">Full Lifecycle Ownership.</span></>,
      cta: "View Case Study",
      content: {
        proposal: {
          problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          insight: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          solution: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        architecture: {
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        features: [
          "Excepteur sint occaecat cupidatat non proident.",
          "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
          "Accusantium doloremque laudantium, totam rem aperiam."
        ]
      }
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
    }
  },
  JP: {
    hero: {
      name: "ここにタイトルが入ります",
      role: "役職プレースホルダー",
      headline: <>これは日本語の <br className="hidden md:block" /><span className="text-blue-600">プレースホルダーテキストです。</span></>,
      description: "これは日本語のプレースホルダーテキストです。ここに自己紹介や経歴などの詳細な情報が入ります。"
    },
    science: {
      tag: "コア",
      title: "科学的厳密さ",
      description: "データ解釈と複雑なロジックの可視化。"
    },
    edusearch: {
      tag: "注目プロジェクト",
      name: "EduSearch",
      title: "単独開発の実行力",
      subtitle: "単独開発の実行力",
      description: <>市場の非対称性を特定。Cloudflare D1とNext.jsを使用してスケーラブルなマッチングプラットフォームを構築。<br /><span className="font-semibold text-blue-700 mt-1 block">ライフサイクル全体のオーナーシップ。</span></>,
      cta: "ケーススタディを見る",
      content: {
        proposal: {
          problem: "家庭教師として、リソースが散在し、マッチングプロセスが非効率であることを痛感しました。",
          insight: "教師の資格を透明性を持って示しつつ、プライバシーを保護できるデータ駆動型のプラットフォームが不足していました。",
          solution: "教師が検証可能なプロフィールを作成し、学生がニーズに合わせてフィルタリングできる、自己持続型のエコシステムを設計しました。"
        },
        architecture: {
          description: "Cloudflare D1のエッジ機能とNext.jsのSSRパフォーマンスを活用し、「ゼロコスト」運用モデル（ドメインを除く）を実現。",
        },
        features: [
          "100ms以下の応答時間でのリアルタイム教師フィルタリング。",
          "SEOと共有性のためのサーバーサイドレンダリングプロフィール。",
          "Cloudflare R2によるエッジキャッシュされた静的アセット。",
          "プラットフォームの信頼性を確保するための自動検証ワークフロー。"
        ]
      }
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
    }
  }
};

const skillsData = [
  { subject: 'Product', A: 90, fullMark: 100 },
  { subject: 'System', A: 85, fullMark: 100 },
  { subject: 'Data', A: 80, fullMark: 100 },
  { subject: 'Next.js', A: 75, fullMark: 100 },
  { subject: 'UX', A: 88, fullMark: 100 },
  { subject: 'AI Ops', A: 92, fullMark: 100 },
];

// --- Components ---

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  onClick?: () => void;
  layoutId?: string;
  href?: string;
}

const BentoCard = ({ children, className, colSpan = 1, rowSpan = 1, onClick, layoutId, href }: BentoCardProps) => {
  const Component = motion.div;

  const content = (
    <Component
      layoutId={layoutId}
      onClick={onClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md border border-slate-100",
        colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
        rowSpan === 2 ? "md:row-span-2" : "md:row-span-1",
        onClick || href ? "cursor-pointer" : "",
        className
      )}
      whileHover={onClick || href ? { scale: 1.02 } : { scale: 1.005 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </Component>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full w-full">{content}</a>;
  }

  return content;
};

const TechBadge = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-slate-100 group-hover:text-slate-900">
    <Icon size={24} strokeWidth={1.5} />
    <span className="text-[10px] font-medium tracking-tight">{label}</span>
  </div>
);

interface LanguageSwitcherProps {
  currentLang: string;
  onToggle: (lang: string) => void;
}

const LanguageSwitcher = ({ currentLang, onToggle }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/40 backdrop-blur-md border border-slate-200/50 shadow-sm">
      {['EN', 'ZH', 'JP'].map((l) => (
        <button
          key={l}
          onClick={(e) => { e.stopPropagation(); onToggle(l); }}
          className={cn(
            "px-2 py-0.5 rounded-full text-[10px] font-bold transition-all",
            currentLang === l
              ? "bg-white text-slate-900 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

// --- Main Page ---

export default function BentoPortfolio() {
  const [selectedId, setSelectedId] = useState(null);
  const [lang, setLang] = useState('ZH');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  const t = translations[lang as keyof typeof translations];

  // Construct projects array based on current language
  const projects = [
    {
      id: 'edusearch',
      title: t.edusearch.title,
      subtitle: t.edusearch.subtitle,
      description: t.edusearch.description,
      highlight: 'Full Lifecycle Ownership.', // This could also be translated if needed
      tags: ['Cloudflare D1', 'Next.js', 'Zero Cost Arch.'],
      content: {
        proposal: t.edusearch.content.proposal,
        architecture: {
          description: t.edusearch.content.architecture.description,
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
        features: t.edusearch.content.features
      }
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-4 md:p-8 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

        {/* 1. Hero Section (2x1) */}
        <BentoCard colSpan={2} className="justify-between bg-gradient-to-br from-white to-slate-50 relative">
          {/* Language Switcher - Relocated to Bottom Right */}
          <div className="absolute bottom-6 right-6 z-20">
            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 font-serif">
                {t.hero.name}
              </h1>
              <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
                {t.hero.role}
              </p>
            </div>
            <div className="flex gap-2 mr-0">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-4 text-slate-800 font-serif">
              {t.hero.headline}
            </h2>
            <p className="text-slate-600 max-w-lg leading-relaxed">
              {t.hero.description}
            </p>
          </div>
        </BentoCard>

        {/* 2. Science Background (1x1) - With Radar Chart */}
        <BentoCard className="bg-slate-900 text-white relative overflow-hidden p-0">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Background Noise or Pattern could go here */}
          </div>

          <div className="flex justify-between items-start z-10 relative p-6 pb-0">
            <Microscope className="text-blue-400" size={28} />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{t.science.tag}</span>
          </div>

          <div className="flex-1 w-full h-[200px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="65%" data={skillsData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="z-10 relative p-6 pt-0">
            <h3 className="text-lg font-bold mb-1 font-serif">{t.science.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.science.description}
            </p>
          </div>
        </BentoCard>

        {/* 3. EduSearch Feature (2x2) - The "Product Shot" (Expandable) */}
        <BentoCard
          colSpan={2}
          rowSpan={2}
          className="relative overflow-hidden bg-blue-50 border border-blue-100 cursor-pointer"
          layoutId="edusearch-card"
          onClick={() => setSelectedId('edusearch')}
        >
          <motion.div className="relative z-10 h-full flex flex-col justify-between" layoutId="edusearch-content">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  {t.edusearch.tag}
                </span>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">{t.edusearch.name}</span>
              </div>
              <motion.h3 layoutId="edusearch-title" className="text-3xl font-bold text-slate-900 mb-2 font-serif">{t.edusearch.title}</motion.h3>
              <p className="text-slate-600 max-w-sm mb-6">
                {t.edusearch.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-blue-700 group-hover:gap-3 transition-all">
              {t.edusearch.cta} <ArrowUpRight size={16} />
            </div>
          </motion.div>

          {/* Abstract UI Visualization */}
          <motion.div
            layoutId="edusearch-visual"
            className="absolute right-[-20px] bottom-[-20px] w-3/5 h-3/5 bg-white rounded-tl-3xl shadow-2xl border border-slate-100 p-4 rotate-[-3deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
            </div>
            <div className="space-y-3">
              <div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
              <div className="h-24 w-full bg-blue-50 rounded-lg border border-blue-100"></div>
              <div className="flex gap-2">
                <div className="h-8 w-1/2 bg-slate-100 rounded-lg"></div>
                <div className="h-8 w-1/2 bg-slate-100 rounded-lg"></div>
              </div>
            </div>
          </motion.div>
        </BentoCard>

        {/* 4. Tech Stack (1x1) */}
        <BentoCard className="justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">{t.tech.title}</h3>
            <Zap size={16} className="text-yellow-500" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <TechBadge icon={Code2} label="Next.js" />
            <TechBadge icon={Globe} label="Astro" />
            <TechBadge icon={Database} label="Cloudflare" />
            <TechBadge icon={Layers} label="Tailwind" />
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-4 font-medium uppercase tracking-wider">
            {t.tech.subtitle}
          </p>
        </BentoCard>

        {/* 5. Hire Me / CTA (1x1) */}
        <BentoCard className="justify-center items-center gap-4 bg-slate-50 border border-slate-200">
          <div className="text-center mb-2">
            <div className="inline-block p-3 rounded-full bg-green-100 text-green-600 mb-3">
              <Calendar size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">{t.hire.title}</h3>
            <p className="text-xs text-slate-500">{t.hire.subtitle}</p>
          </div>

          <div className="w-full flex flex-col gap-2">
            <button className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              <Download size={16} />
              {t.hire.download}
            </button>
            <button className="w-full py-2.5 px-4 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors">
              {t.hire.book}
            </button>
          </div>
        </BentoCard>

        {/* 6. Rinario Content Network (Small Feature) */}
        <BentoCard className="justify-between group" href="https://rinario.com">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Cpu size={20} className="text-indigo-500" />
              <ArrowUpRight size={16} className="text-slate-300 group-hover:text-slate-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">{t.network.title}</h3>
            <p className="text-xs text-slate-500 mt-1">{t.network.subtitle}</p>
          </div>
          <div className="mt-4 flex gap-1">
            <div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
            <div className="h-1 w-2 bg-slate-200 rounded-full"></div>
            <div className="h-1 w-2 bg-slate-200 rounded-full"></div>
          </div>
        </BentoCard>

      </div>

      <footer className="max-w-6xl mx-auto mt-12 text-center text-slate-400 text-xs font-medium uppercase tracking-widest">
        © 2025 Rina Hsu. Designed with Scientific Rigor.
      </footer>

      {/* Expanded View Modal */}
      <AnimatePresence>
        {selectedId === 'edusearch' && (
          <EduSearchDetail onClose={() => setSelectedId(null)} t={t} />
        )}
      </AnimatePresence>
    </div>
  );
}