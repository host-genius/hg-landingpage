"use client";

import { FadeIn } from "./ui/fade-in";
import { TrendingDown, Anchor, Shuffle, Target } from "lucide-react";

export function SectionProblems() {
    const problems = [
        {
            id: "01",
            title: "Owner Growth Is Slow and Inconsistent",
            description: "New doors come from referrals and luck. No predictable acquisition engine. Hard to step away. Hard to sell."
        },
        {
            id: "02",
            title: "You Are Stuck Between PM and CEO",
            description: "You manage cleaners. You handle guest issues. You answer owner calls."
        },
        {
            id: "03",
            title: "No One to Talk to on How to Build the Company",
            description: "You cannot ask your parents or friends how to scale a short-term rental portfolio. The key to growth is to surround yourself with equals who have walked the path before you."
        },
        {
            id: "04",
            title: "Too Many Roles. Not Enough Depth",
            description: "Revenue management. Hiring. Operations & AI. Accounting. Homeowner Acquisition. You need people smarter than you in each area. But hiring that level of talent alone is expensive and risky at your size."
        },
        {
            id: "05",
            title: "The Tradeoff We No Longer Agree to",
            description: "You started this business for freedom and ownership. As it grows, you become more essential to it. Growth without structure increases responsibility, not leverage."
        }
    ];

    return (
        <section className="py-32 px-4 relative bg-[#050505]">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
                    {/* Sticky Header */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <FadeIn once={false}>
                            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-8 block">The Reality</span>
                            <h2 className="text-6xl md:text-[6rem] lg:text-[7rem] font-bold text-white mb-12 leading-[0.9] tracking-tighter">
                                The Problems <br />
                                We Solve <br />
                                <span className="text-white/30">Together.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
                                To join this network, you already have to be a strong vacation rental manager. We are here to grow faster, more profitably, and with fewer costly mistakes.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Editorial List (Redesigned) */}
                    <div className="lg:w-1/2 lg:mt-[20vh]">
                        <div className="flex flex-col group/list">
                            {problems.map((problem, i) => (
                                <FadeIn key={i} delay={0.5 + (i * 0.1)} once={false}>
                                    <div className="group/item relative py-8 border-t border-white/20 transition-all duration-500 hover:bg-white/[0.02] -mx-4 px-4 lg:px-0 lg:mx-0">
                                        <div className="flex flex-col md:flex-row gap-6 md:items-baseline">
                                            <span className="font-mono text-red-500/80 text-sm tracking-widest w-12 shrink-0">
                                                {problem.id}
                                            </span>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight group-hover/item:text-red-500 transition-colors duration-300">
                                                    {problem.title}
                                                </h3>
                                                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md group-hover/item:text-white transition-colors duration-300">
                                                    {problem.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
