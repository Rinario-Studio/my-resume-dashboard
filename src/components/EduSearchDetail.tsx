import React from 'react';
import { motion, Variants } from 'framer-motion';
import { X, ArrowRight, Heart, MessageCircle, Share2, CheckCircle2 } from 'lucide-react';
import MermaidChart from './MermaidChart';
import { cn } from '@/lib/utils';

interface EduSearchDetailProps {
    onClose: () => void;
    t: any; // Using any for now to avoid strict type checks on the dictionary structure, can be refined later
}

const EduSearchDetail: React.FC<EduSearchDetailProps> = ({ onClose, t }) => {
    // Animation variants
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl overflow-y-auto">
            {/* Close Button - Sticky/Fixed */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-600 transition-all backdrop-blur-md shadow-sm"
            >
                <X size={24} />
            </button>

            <div className="w-full max-w-5xl min-h-screen bg-white shadow-2xl overflow-hidden relative">
                {/* Scroll Container */}
                <div className="h-full overflow-y-auto scrollbar-hide">

                    {/* --- Section A: The Why (Intro) --- */}
                    <section className="px-8 md:px-16 py-24 md:py-32 bg-slate-50">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full">
                                    Case Study
                                </span>
                                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif leading-tight mb-6">
                                    Redefining <br />
                                    <span className="text-blue-600">Tutor Matching.</span>
                                </h1>
                                <p className="text-xl font-medium text-slate-600 leading-relaxed border-l-4 border-blue-500 pl-6">
                                    "A self-sustaining ecosystem where trust is verified, not assumed."
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-10">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">The Problem</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        {t.edusearch.content.proposal.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">The Insight</h3>
                                    <p className="text-lg text-slate-700 leading-relaxed">
                                        {t.edusearch.content.proposal.insight}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* --- Section B: The How (Architecture) --- */}
                    <section className="px-8 md:px-16 py-24 bg-white">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif mb-4">Zero-Cost Architecture</h2>
                                <p className="text-slate-500 max-w-2xl mx-auto">
                                    Leveraging edge computing to deliver high performance without the overhead.
                                </p>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-inner mb-12">
                                <MermaidChart chart={t.edusearch.content.architecture.diagram} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { title: "Cloudflare D1", desc: "SQLite at the edge for sub-10ms reads." },
                                    { title: "Next.js SSR", desc: "Dynamic OG tags for social sharing." },
                                    { title: "R2 Storage", desc: "Zero egress fees for profile images." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* --- Section C: The Timeline (Journey) --- */}
                    <section className="px-8 md:px-16 py-24 bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900"></div>

                        <div className="max-w-3xl mx-auto relative z-10">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-bold font-serif mb-16 text-center"
                            >
                                Development Journey
                            </motion.h2>

                            <div className="relative border-l border-slate-700 ml-4 md:ml-0 space-y-16">
                                {[
                                    { phase: "Phase 1: Inception", date: "Q3 2024", title: "Identifying the Gap", desc: "Realized the inefficiency in local tutor matching groups." },
                                    { phase: "Phase 2: MVP", date: "Q4 2024", title: "The 'Zero-Cost' Challenge", desc: "Successfully deployed the first version using only free-tier services." },
                                    { phase: "Phase 3: Iteration", date: "Q1 2025", title: "Performance Tuning", desc: "Optimized D1 queries and implemented edge caching." },
                                    { phase: "Phase 4: Future", date: "Roadmap", title: "AI Matching", desc: "Planning to integrate vector search for better student-teacher pairing." }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative pl-12 md:pl-16"
                                    >
                                        {/* Dot */}
                                        <div className="absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                            <span className="text-blue-400 font-bold text-sm tracking-widest uppercase">{item.phase}</span>
                                            <span className="text-slate-500 text-xs font-mono">{item.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed max-w-lg">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* --- Section D: Dev Logs (Social Proof) --- */}
                    <section className="px-8 md:px-16 py-24 bg-slate-50 overflow-hidden">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-3xl font-bold text-slate-900 font-serif">Dev Logs</h2>
                                <a href="#" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                                    Follow on Threads <ArrowRight size={16} />
                                </a>
                            </div>

                            {/* Horizontal Scroll / Masonry-ish feel */}
                            <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide">
                                {[
                                    { text: "Finally migrated the database to Cloudflare D1. The latency drop is insane! ⚡️ #nextjs #cloudflare", likes: 42, date: "2d ago" },
                                    { text: "Spent the whole weekend tweaking the matching algorithm. It's not just about subjects; it's about teaching style. 🧠", likes: 128, date: "1w ago" },
                                    { text: "Designing the new profile page. Trying to keep it clean but informative. What do you think? 🎨 #uiux #design", likes: 85, date: "2w ago" },
                                    { text: "Just shipped the verification badge feature! Trust is everything in this platform. ✅", likes: 210, date: "3w ago" }
                                ].map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 snap-center"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-lg">👨‍💻</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm">Rina Hsu</div>
                                                <div className="text-xs text-slate-500">@rinario_dev</div>
                                            </div>
                                            <div className="ml-auto text-xs text-slate-400">{log.date}</div>
                                        </div>
                                        <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                                            {log.text}
                                        </p>
                                        <div className="flex items-center gap-6 text-slate-400 text-xs">
                                            <div className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                                                <Heart size={14} /> {log.likes}
                                            </div>
                                            <div className="flex items-center gap-1 hover:text-blue-500 transition-colors cursor-pointer">
                                                <MessageCircle size={14} /> 12
                                            </div>
                                            <div className="flex items-center gap-1 hover:text-green-500 transition-colors cursor-pointer">
                                                <Share2 size={14} />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-12 text-center text-slate-400 text-xs uppercase tracking-widest bg-white">
                        End of Case Study
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default EduSearchDetail;
