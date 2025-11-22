import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Layers } from 'lucide-react';
import { ProjectData } from '@/types';

interface RinarioDetailProps {
    onClose: () => void;
    data: ProjectData;
}

const RinarioDetail: React.FC<RinarioDetailProps> = ({ onClose, data }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-xl overflow-y-auto">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-600 transition-all backdrop-blur-md shadow-sm"
            >
                <X size={24} />
            </button>

            <div className="w-full max-w-5xl min-h-screen bg-white shadow-2xl overflow-hidden relative">
                <div className="h-full overflow-y-auto scrollbar-hide">

                    {/* Header Section */}
                    <section className="px-8 md:px-16 py-24 bg-slate-50">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100 rounded-full">
                                Network
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight mb-6">
                                {data.title}
                            </h1>
                            <p className="text-xl font-medium text-slate-600 leading-relaxed max-w-2xl">
                                {data.desc}
                            </p>

                            <a
                                href="https://rinario.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                            >
                                {data.linkText} <ExternalLink size={18} />
                            </a>
                        </motion.div>
                    </section>

                    {/* Gallery Section */}
                    <section className="px-8 md:px-16 py-24 bg-white">
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 font-serif mb-2">Project Gallery</h2>
                            <p className="text-slate-500">A collection of side projects and experiments.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {data.gallery && data.gallery.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg transition-all"
                                >
                                    {/* Placeholder Image Area */}
                                    <div className="aspect-video bg-slate-200 relative overflow-hidden">
                                        {/* If we had real images, we'd use next/image here. For now, a colored placeholder. */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-100 to-indigo-100' : 'from-emerald-100 to-teal-100'} group-hover:scale-105 transition-transform duration-500`} />
                                        <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                            <Layers size={48} />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="py-12 text-center text-slate-400 text-xs uppercase tracking-widest bg-slate-50">
                        © Rinario Network
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default RinarioDetail;
