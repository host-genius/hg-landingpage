"use client";

import { useState } from "react";
import { FadeIn } from "./ui/fade-in";
import { LayoutDashboard, Users, UserCog, TrendingUp, Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SectionHowWeHelp() {
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    {/* Sticky Header */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <FadeIn>
                            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-6 block">The Solution</span>
                            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.85] tracking-tighter">
                                How we help you <br />
                                <span className="text-white/40">hit your goals.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-md">
                                We don't just give you advice; we give you the data, the people, and the leverage to execute.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Scrolling Content */}
                    <div className="lg:w-1/2 space-y-16">
                        {/* Feature 1: CEO Dashboard */}
                        <div className="space-y-6">
                            <FadeIn>
                                <div
                                    onClick={() => setVideoUrl("https://www.loom.com/embed/87c953b33e08401391ead85add3eb99d")}
                                    className="group relative aspect-video w-full max-w-md bg-black rounded-3xl border border-white/10 overflow-hidden cursor-pointer shadow-2xl"
                                >
                                    <img
                                        src="https://cdn.loom.com/sessions/thumbnails/87c953b33e08401391ead85add3eb99d-484b7ba76a46a228.gif"
                                        alt="CEO Dashboard"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-300">
                                            <Play size={20} fill="currentColor" className="ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                        <LayoutDashboard size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">CEO Dashboard</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                    We have all the numbers and data on your business. See exactly where you stand against the community in real-time.
                                </p>
                            </FadeIn>
                        </div>

                        {/* Feature 2: Collective Intelligence */}
                        <div className="space-y-6">
                            <FadeIn>
                                <div
                                    onClick={() => setVideoUrl("https://www.loom.com/embed/7fc871dafa64482a9084b5bc94f9f587")}
                                    className="group relative aspect-video w-full max-w-md bg-black rounded-3xl border border-white/10 overflow-hidden cursor-pointer shadow-2xl"
                                >
                                    <img
                                        src="https://cdn.loom.com/sessions/thumbnails/7fc871dafa64482a9084b5bc94f9f587-817829d54f986424.gif"
                                        alt="Collective Intelligence"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-accent group-hover:text-black group-hover:scale-110 transition-all duration-300">
                                            <Play size={20} fill="currentColor" className="ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                        <Users size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Collective Intelligence</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                                    Get insights you can't get anywhere else. See who is #1 for each metric and reach out to them directly for advice.
                                </p>
                            </FadeIn>
                        </div>


                    </div>
                </div>
            </div>

            <AnimatePresence>
                {videoUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setVideoUrl(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setVideoUrl(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
