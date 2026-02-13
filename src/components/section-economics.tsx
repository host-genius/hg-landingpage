"use client";

import { FadeIn } from "@/components/ui/fade-in";

const impactAreas = [
    {
        number: "01",
        title: "Revenue Growth",
        description: "Clear tracking of owner leads, conversion, retention, and average commission per property.",
    },
    {
        number: "02",
        title: "Margin Expansion",
        description: "Better payroll targets. Vendor leverage. Reduced software redundancy.",
    },
    {
        number: "03",
        title: "Faster Execution",
        description: "Less trial and error. Fewer expensive experiments.",
    },
];

export function SectionEconomics() {
    return (
        <section className="py-32 lg:py-40 px-4 bg-[#050505] relative overflow-hidden">
            {/* Top Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            {/* Subtle Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/5 blur-[200px] rounded-full pointer-events-none" />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_10px_1px_rgba(255,255,255,0.05)] pointer-events-none z-10" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header Block */}
                <FadeIn delay={0.1}>
                    <div className="mb-20">
                        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                            The Economics of Not Doing This Alone
                        </h2>
                        <p className="text-2xl lg:text-3xl text-white/60 font-light mb-8">
                            Growing alone is expensive.
                        </p>
                        <p className="text-lg text-white/40 font-light leading-relaxed max-w-3xl">
                            Wrong hires cost months. The wrong software stack compounds inefficiency. Unoptimized commission structures shrink margin. Untracked owner acquisition slows growth.
                        </p>
                    </div>
                </FadeIn>

                {/* Impact Areas */}
                <FadeIn delay={0.2}>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-10 font-medium">
                        Inside the network, members typically see impact in three areas
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    {impactAreas.map((area, i) => (
                        <FadeIn key={i} delay={0.3 + i * 0.1}>
                            <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] h-full">
                                <span className="text-5xl font-extralight text-white/10 block mb-4">{area.number}</span>
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{area.title}</h3>
                                <p className="text-base text-white/40 font-light leading-relaxed">{area.description}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Closing Statement */}
                <FadeIn delay={0.6}>
                    <div className="border-t border-white/[0.08] pt-8 max-w-3xl">
                        <p className="text-lg text-white/40 font-light leading-relaxed mb-10">
                            The result is not dramatic overnight change. It is measurable compounding.
                        </p>
                        <p className="text-3xl lg:text-5xl text-white font-bold leading-tight tracking-tight mb-6">
                            That is why we offer a 60-day break-even guarantee.
                        </p>
                        <p className="text-3xl lg:text-5xl text-white/40 font-bold leading-tight tracking-tight">
                            If the network does not produce enough value to cover the cost, you do not stay.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
