"use client";
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Code2, 
  PenTool, 
  GraduationCap, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Database, 
  Server, 
  Cpu,
  Globe,
  BookOpen
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

// 模擬數據：技能分佈 (結合科學與設計)
const skillData = [
  { name: 'Frontend Dev (Next.js/Astro)', value: 40, color: '#6366f1' }, // Indigo
  { name: 'Product Logic & PM', value: 30, color: '#8b5cf6' }, // Violet
  { name: 'Data & Science (Python)', value: 20, color: '#06b6d4' }, // Cyan
  { name: 'Visual Design', value: 10, color: '#ec4899' }, // Pink
];

// 專案數據
const projects = [
  {
    id: 1,
    title: "EduSearch 家教媒合平台",
    role: "Founder & Fullstack Developer",
    status: "Beta",
    statusColor: "bg-yellow-100 text-yellow-800",
    desc: "解決傳統家教媒合痛點，整合 Google Auth 與 Canvas LMS 的教學雙向媒合生態系。",
    tech: ["Next.js", "Cloudflare D1", "Google Auth", "Tailwind"],
    metrics: "100+ 模擬用戶 / 資料庫查詢 <50ms",
    link: "https://edusaerch.rinario.com"
  },
  {
    id: 2,
    title: "Rinario Studio Network",
    role: "Lead Developer",
    status: "Production",
    statusColor: "bg-green-100 text-green-800",
    desc: "基於 Astro 的高效能靜態網站群，包含個人作品集、部落格與家人日誌，Lighthouse 效能評分 98+。",
    tech: ["Astro", "React", "CMS Integration", "Vercel"],
    metrics: "4 Sites / SEO Optimized",
    link: "https://rinario.com"
  }
];

// 設計展示數據 (Before/After)
const designWorks = [
  {
    id: 1,
    title: "高中地科教材優化",
    category: "Information Design",
    beforeDesc: "純文字 Word 檔，缺乏重點強調，學生難以閱讀。",
    afterDesc: "結構化排版，加入圖解與視覺引導，提升閱讀專注度。",
    tags: ["Canva", "PowerPoint", "Visual Hierarchy"]
  },
  {
    id: 2,
    title: "留學申請履歷重構",
    category: "Resume Design",
    beforeDesc: "流水帳式敘述，無明確亮點。",
    afterDesc: "模組化資訊架構，強調關鍵數據與技能關鍵字。",
    tags: ["Layout", "Typography", "Personal Branding"]
  }
];

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
      active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-600 hover:bg-slate-50'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </button>
);

const StatCard = ({ title, value, subtext, icon: Icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h3 className="text-2xl font-bold text-slate-800 mt-2">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
    {subtext && <p className="text-xs text-slate-400 mt-2">{subtext}</p>}
  </div>
);

export default function DashboardResume() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">R</div>
            <div>
              <h1 className="font-bold text-lg tracking-tight">Rina Hsu</h1>
              <p className="text-xs text-slate-500">Solutions Engineer</p>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Overview" 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <SidebarItem 
            icon={Code2} 
            label="Dev Projects" 
            active={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')} 
          />
          <SidebarItem 
            icon={PenTool} 
            label="Design Lab" 
            active={activeTab === 'design'} 
            onClick={() => setActiveTab('design')} 
          />
        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <div className="bg-indigo-600 rounded-lg p-4 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <GraduationCap size={20} />
              <span className="font-bold text-sm">Next Step</span>
            </div>
            <p className="text-xs opacity-90 mb-1">Exchange Student</p>
            <p className="text-xs font-semibold">University of Hawaiʻi at Mānoa</p>
            <p className="text-[10px] opacity-75 mt-2">Spring 2026</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile Header */}
        <header className="md:hidden bg-white p-4 border-b border-slate-200 flex items-center justify-between">
           <div className="h-8 w-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">R</div>
           <span className="font-bold text-slate-700">Rina's Dashboard</span>
        </header>

        <div className="p-6 max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {activeTab === 'overview' && 'Dashboard Overview'}
                {activeTab === 'projects' && 'Technical Projects'}
                {activeTab === 'design' && 'Information Design Lab'}
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Bridging Education & Technology with Scientific Logic.
              </p>
            </div>
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="p-2 text-slate-600 hover:bg-white hover:shadow rounded-full transition-all">
                <Github size={20} />
              </button>
              <button className="p-2 text-slate-600 hover:bg-white hover:shadow rounded-full transition-all">
                <Linkedin size={20} />
              </button>
              <button className="flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                <Mail size={16} />
                <span className="text-sm font-medium">Contact Me</span>
              </button>
            </div>
          </div>

          {/* Content Area */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                  title="Total Projects" 
                  value="4+" 
                  subtext="Full-stack & Static Sites"
                  icon={Globe}
                  color="bg-blue-500"
                />
                <StatCard 
                  title="Learning Agility" 
                  value="High" 
                  subtext="Self-taught Next.js in 3 mos"
                  icon={Cpu}
                  color="bg-indigo-500"
                />
                <StatCard 
                  title="Domain Expertise" 
                  value="EdTech" 
                  subtext="EduSearch & Course Design"
                  icon={BookOpen}
                  color="bg-emerald-500"
                />
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Skill Distribution */}
                <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Skill Composition (Hybrid Talent)</h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={skillData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0"/>
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12}} />
                        <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                          {skillData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                    <p className="text-sm text-indigo-800">
                      <strong>Why this mix?</strong> I combine <span className="font-semibold">scientific logic</span> (Atmospheric Sci.) with <span className="font-semibold">design intuition</span> to build products that are both functional and beautiful.
                    </p>
                  </div>
                </div>

                {/* Tech Stack Badge Cloud */}
                <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js 14', 'React', 'Astro', 'Tailwind CSS', 'Python', 'Cloudflare D1', 'Vercel', 'Git', 'Figma', 'Google API'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h3 className="font-bold text-slate-800 mb-4">Languages</h3>
                    <div className="space-y-3">
                       <div>
                         <div className="flex justify-between text-xs mb-1">
                           <span>Mandarin (Native)</span>
                           <span>100%</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-1.5">
                           <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
                         </div>
                       </div>
                       <div>
                         <div className="flex justify-between text-xs mb-1">
                           <span>English (TOEFL 85+)</span>
                           <span>Professional</span>
                         </div>
                         <div className="w-full bg-slate-100 rounded-full h-1.5">
                           <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-colors group">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                          <span className={`px-2 py-0.5 text-xs font-bold uppercase tracking-wide rounded-full ${project.statusColor}`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-slate-500 mb-4">{project.role}</p>
                      </div>
                      <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center space-x-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 mb-4 md:mb-0">
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    
                    <p className="text-slate-600 mb-6 max-w-3xl leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex items-center space-x-2 text-sm text-slate-500 mb-6 bg-slate-50 p-3 rounded-lg w-fit">
                      <Database size={16} />
                      <span className="font-medium">Metric:</span>
                      <span>{project.metrics}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded border border-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          )}

          {/* Design Lab Tab */}
          {activeTab === 'design' && (
            <div className="space-y-6">
              <div className="bg-indigo-600 text-white p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <h3 className="text-2xl font-bold mb-2">Information Design Lab</h3>
                  <p className="opacity-90">
                    This is where I translate "Messy Data" into "Clear Insights". 
                    My background in Atmospheric Science helps me structure complex information logically.
                  </p>
                </div>
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-indigo-500 to-transparent opacity-50"></div>
                <PenTool className="absolute right-8 top-8 text-indigo-400 opacity-20" size={120} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designWorks.map(work => (
                  <div key={work.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                         <h4 className="font-bold text-lg">{work.title}</h4>
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{work.category}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                          <span className="text-xs font-bold text-red-500 mb-1 block uppercase">Before</span>
                          <p className="text-sm text-slate-500">{work.beforeDesc}</p>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                          <span className="text-xs font-bold text-emerald-600 mb-1 block uppercase">After (My Solution)</span>
                          <p className="text-sm text-slate-700 font-medium">{work.afterDesc}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {work.tags.map(tag => (
                          <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}