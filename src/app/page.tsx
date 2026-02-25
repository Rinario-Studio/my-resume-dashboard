
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
import RinarioDetail from '@/components/RinarioDetail';
import { content } from '@/data/resume-content';

// --- Data ---
const translations = content

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
  onToggle: (lang: any) => void;
}

const LanguageSwitcher = ({ currentLang, onToggle }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-white/40 backdrop-blur-md border border-slate-200/50 shadow-sm">
      {['en', 'zh', 'ja'].map((l) => (
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
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

// --- Main Page ---

export default function BentoPortfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [lang, setLang] = useState<'zh' | 'en' | 'ja'>('zh');

  // Load language preference from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('resume-lang');
    if (savedLang === 'zh' || savedLang === 'en' || savedLang === 'ja') {
      setLang(savedLang);
    }
  }, []);

  const handleLangChange = (newLang: 'zh' | 'en' | 'ja') => {
    setLang(newLang);
    localStorage.setItem('resume-lang', newLang);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  const t = content[lang];
  const eduSearchData = t.projects.find(p => p.id === 1);

  // Construct projects array based on current language
  const projects = [
    {
      id: 'edusearch',
      title: eduSearchData?.title,
      subtitle: eduSearchData?.subtitle,
      description: eduSearchData?.desc,
      highlight: 'Full Lifecycle Ownership.',
      tags: eduSearchData?.tech,
      content: eduSearchData?.content
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-4 md:p-8 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

        {/* Fixed Language Switcher */}
        <div className="fixed top-4 right-4 z-50">
          <LanguageSwitcher currentLang={lang} onToggle={handleLangChange} />
        </div>

        {/* 1. Hero Section (2x1) */}
        <BentoCard colSpan={2} className="justify-between bg-gradient-to-br from-white to-slate-50 relative">
          {/* Language Switcher - Relocated to Fixed Position */}
          {/* <div className="absolute bottom-6 right-6 z-20">
            <LanguageSwitcher currentLang={lang} onToggle={setLang} />
          </div> */}

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
              {[
                { Icon: Github, href: t.hero.social.github },
                { Icon: Linkedin, href: t.hero.social.linkedin },
                { Icon: Mail, href: t.hero.social.email }
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  {eduSearchData?.tag}
                </span>
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">{eduSearchData?.name}</span>
              </div>
              <motion.h3 layoutId="edusearch-title" className="text-3xl font-bold text-slate-900 mb-2 font-serif">{eduSearchData?.title}</motion.h3>
              <p className="text-slate-600 max-w-sm mb-6">
                {eduSearchData?.desc}
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-blue-700 group-hover:gap-3 transition-all">
              {eduSearchData?.cta} <ArrowUpRight size={16} />
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
            <a
              href={t.hire.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <Download size={16} />
              {t.hire.download}
            </a>
            <a
              href={t.hire.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition-colors flex items-center justify-center"
            >
              {t.hire.book}
            </a>
          </div>
        </BentoCard>

        {/* 6. Rinario Content Network (Small Feature) */}
        <BentoCard
          className="justify-between group cursor-pointer"
          onClick={() => setSelectedId('rinario')}
          layoutId="rinario-card"
        >
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
          <EduSearchDetail onClose={() => setSelectedId(null)} data={eduSearchData} />
        )}
        {selectedId === 'rinario' && (
          <RinarioDetail
            onClose={() => setSelectedId(null)}
            data={t.projects.find(p => p.id === 2)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}