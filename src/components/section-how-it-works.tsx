"use client";

import { FadeIn, SlideIn } from "./ui/fade-in";

export function SectionHowItWorks() {
    const steps = [
        {
            id: "01",
            title: "Get Full Visibility",
            description: (
                <div className="space-y-4">
                    <p>Connect your PMS and financials. Track the 15 metrics that drive growth.</p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                        <li>Owner leads</li>
                        <li>Conversion rate</li>
                        <li>Retention</li>
                        <li>Revenue per unit</li>
                        <li>Margin</li>
                    </ul>
                    <p className="font-medium text-white">See exactly where you stand.</p>
                </div>
            )
        },
        {
            id: "02",
            title: "Plug Into the Private Network",
            description: (
                <div className="space-y-4">
                    <p>Join focused Slack channels across:</p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                        <li>Homeowner acquisition</li>
                        <li>Revenue management</li>
                        <li>Operations</li>
                        <li>Hiring</li>
                        <li>Finance</li>
                    </ul>
                    <p className="font-medium text-white">You see who is leading each metric. You know exactly who to reach out to.</p>
                </div>
            )
        },
        {
            id: "03",
            title: "Get your own team of VP who have already walked the path",
            description: (
                <div className="space-y-4">
                    <p>They review your numbers and push you toward clear targets.</p>
                    <ul className="list-disc pl-5 space-y-2 text-white/80">
                        <li>VP of Revenue</li>
                        <li>VP of Operations</li>
                        <li>VP of Homeowner Growth</li>
                    </ul>
                    <p className="font-medium text-white">You stay in control. You move faster.</p>
                </div>
            )
        },
        {
            id: "04",
            title: "Collective Leverage to keep profits up as you scale",
            description: (
                <div className="space-y-4">
                    <p>Enterprise pricing on key software and vendors. Lower OPEX while scaling.</p>
                </div>
            )
        }
    ];

    return (
        <section className="py-32 px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto relative z-10">
                <FadeIn>
                    <div className="mb-24">
                        <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-6 block">The Process</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[0.9] tracking-tighter max-w-4xl">
                            How This Actually Works By Stopping Building Alone
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
                            You can keep trying to figure it out yourself, or you can leverage a network of peers.
                        </p>
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
                                        <div className="text-muted-foreground leading-relaxed font-light text-lg group-hover:text-white transition-colors">
                                            {step.description}
                                        </div>
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
