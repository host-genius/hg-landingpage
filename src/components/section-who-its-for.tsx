"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Check, X } from "lucide-react";

const forItems = [
    "Already run a real operation",
    "Want to grow but refuse to franchise",
    "Care about margin as much as revenue",
    "Want a company that can run without them",
];

const notForItems = [
    "Hobby hosts",
    "Underperforming managers looking for a course to fix basics",
    "Anyone unwilling to be measured",
    "Anyone who still believes property management is rocket science and they seriously have some secret sauce",
];

export function SectionWhoItsFor() {
    return (
        <section className="py-32 lg:py-40 px-4 bg-[#050505] relative overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-0 lg:gap-0 items-stretch">

                    {/* Left: Who This Is For */}
                    <FadeIn delay={0.1}>
                        <div className="p-10 lg:p-14 rounded-2xl border border-white/[0.08] bg-white/[0.02] h-full">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-3 h-3 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
                                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white uppercase">
                                    Who This Network is For
                                </h2>
                            </div>

                            <ul className="space-y-6">
                                {forItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" strokeWidth={3} />
                                        <span className="text-lg text-white/80 font-light leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    {/* Spacer */}
                    <div className="hidden lg:block w-8" />
                    <div className="lg:hidden h-6" />

                    {/* Right: Who It Is Not For */}
                    <FadeIn delay={0.2}>
                        <div className="p-10 lg:p-14 rounded-2xl border border-white/[0.08] bg-white/[0.01] h-full">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="w-3 h-3 bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-white/60 uppercase">
                                    Who It Is Not For
                                </h2>
                            </div>

                            <ul className="space-y-6">
                                {notForItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <X className="w-5 h-5 text-red-500/70 mt-0.5 shrink-0" strokeWidth={3} />
                                        <span className="text-lg text-white/40 font-light leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    );
}
