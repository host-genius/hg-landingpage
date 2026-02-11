"use client";

import { FadeIn } from "./ui/fade-in";
import { TrendingDown, Anchor, Shuffle, Target } from "lucide-react";

export function SectionProblems() {
    const problems = [
        {
            id: "01",
            title: "Slow, inconsistent owner growth",
            description: "Growth based on luck is hard to predict, hard to sell, and impossible to step away from."
        },
        {
            id: "02",
            title: "Stuck in the business",
            description: "Transitioning from Property Manager to CEO is painful. You can't ask your parents or friends how to scale a tech-enabled STR company."
        },
        {
            id: "03",
            title: "So many roles, so little time",
            description: "You're wearing too many hats. Operations, Revenue Management, Marketing, HR, Accounting..."
        },
        {
            id: "04",
            title: "Need to be the small fish",
            description: "To grow, you need to hire people smarter than you and be in a room where you're surrounded by larger, successful operators."
        }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#050505]">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    {/* Sticky Header */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <FadeIn once={false}>
                            <span className="text-red-500 font-mono text-sm tracking-widest uppercase mb-8 block">The Reality</span>
                            <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-bold text-white mb-12 leading-[0.8] tracking-tighter">
                                The <br />
                                Struggle <br />
                                Is <br />
                                <span className="text-white/30">Real.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-md">
                                Most VRMs hit a ceiling because the playbook that got them to 50 units won't get them to 500.
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
