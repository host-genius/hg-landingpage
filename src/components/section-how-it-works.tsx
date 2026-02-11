"use client";

import { FadeIn, SlideIn } from "./ui/fade-in";

export function SectionHowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Meet with VP of Ops & RevMan",
            description: "Roadmap a proven process to hit your goals faster. We audit where you are and map out exactly how to get to where you want to go."
        },
        {
            id: "02",
            title: "Get into Slack",
            description: "Join the conversation in channels focused on Homeowner Acquisitions, Portfolio Acquisitions, Cleaning Ops, Accounting, and more."
        },
        {
            id: "03",
            title: "Connect CEO Dashboard",
            description: "Hook up your PMS. See all metrics, leading indicators, and KPIs. Visualize the community leaderboards."
        },
        {
            id: "04",
            title: "Start Executing",
            description: "See who is ranked #1 in specific metrics so you know exactly who to reach out to for advice."
        },
        {
            id: "05",
            title: "Accountability",
            description: "Our team has full visibility to ensure you are on track. We don't let you fail."
        }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <FadeIn>
                    <div className="mb-24">
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-6 block">The Process</span>
                        <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-[0.85] tracking-tighter">
                            How it works.
                        </h2>
                    </div>
                </FadeIn>

                <div className="flex flex-col border-t border-white/10">
                    {steps.map((step, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="group py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors relative">
                                <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
                                    <div className="flex items-baseline gap-6 md:w-1/3">
                                        <span className="font-mono text-xl md:text-2xl text-blue-500/50 group-hover:text-blue-400 transition-colors">
                                            {step.id}
                                        </span>
                                        <h3 className="text-xl md:text-3xl font-bold text-white group-hover:text-blue-100 transition-colors leading-tight">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-1/2">
                                        <p className="text-muted-foreground leading-relaxed font-light text-lg group-hover:text-white transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
