"use client";

import { FadeIn } from "./ui/fade-in";
import { ArrowRight, Users, BarChart3, Scale } from "lucide-react";

export function SectionWhatAreWe() {
    return (
        <section id="mission" className="py-24 md:py-32 px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 items-start">
                    <div className="lg:w-1/2 sticky top-32">
                        <FadeIn once={false}>
                            <span className="block text-accent text-sm tracking-[0.2em] uppercase mb-8 font-medium">The Mission</span>
                            <h2 className="text-6xl md:text-8xl font-bold mb-10 text-white leading-[0.85] tracking-tighter">
                                Not a <br /> mastermind. <br />
                                <span className="text-white/40">Not a course.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-lg">
                                HostGenius is a private network of professional vacation rental operators. We share data, resources, and buy together to lower costs.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2 flex flex-col lg:mt-32">
                        <FadeIn delay={0.4} once={false}>
                            {/* Block 1: Network (Full Width) */}
                            <div className="group relative border-t border-white/20 py-12 md:py-16">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:scale-110 group-hover:border-accent group-hover:text-accent transition-all duration-500 bg-[#0a0a0a]">
                                        <Users size={28} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">Private Network</h3>
                                        <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-white transition-colors max-w-lg">
                                            Connect with vetted operators who are scaling real businesses. No gurus, just operators.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2 & 3: Split Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Proprietary Data */}
                                <div className="group relative border-t border-white/20 py-12 md:py-16 md:pr-8 md:border-r border-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white mb-8 group-hover:border-blue-400 group-hover:text-blue-400 transition-all duration-500 bg-[#0a0a0a]">
                                            <BarChart3 size={20} strokeWidth={1} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">Proprietary Data</h3>
                                        <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-white transition-colors">
                                            Benchmark your performance against the top 1% of the industry.
                                        </p>
                                    </div>
                                </div>

                                {/* Purchase Power */}
                                <div className="group relative border-t border-white/20 py-12 md:py-16 md:pl-8">
                                    <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white mb-8 group-hover:border-purple-400 group-hover:text-purple-400 transition-all duration-500 bg-[#0a0a0a]">
                                            <Scale size={20} strokeWidth={1} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4">Purchase Power</h3>
                                        <p className="text-sm text-muted-foreground font-light leading-relaxed group-hover:text-white transition-colors">
                                            Leverage our collective size to negotiate enterprise-level deals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
