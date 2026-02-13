"use client";

import { Play, ArrowRight, X } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SubmissionModal } from "@/components/submission-modal";

export function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className="relative min-h-[95vh] flex flex-col justify-end pb-32 px-4 md:px-12 overflow-hidden">
                {/* Cinematic Background Element - Subtle Gradient Mesh or Abstract Shape */}
                <div className="absolute top-0 right-0 w-3/4 h-full pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent backdrop-blur-3xl" />
                    <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-[150px] mix-blend-screen" />
                </div>

                <div className="max-w-[1400px] w-full mx-auto relative z-10">
                    <FadeIn delay={0.2}>
                        <div className="flex flex-col items-start max-w-5xl">
                            {/* "Editorial" Label */}


                            {/* Massive Editorial Headline */}
                            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter text-white leading-[0.9] mb-12">
                                Built by & for VRMs <br />
                                <span className="text-white/40">who are tired of doing this alone.</span>
                            </h1>

                            {/* Split Content at Bottom of Hero */}
                            <div className="flex flex-col md:flex-row gap-8 md:justify-between w-full border-t border-white/10 pt-8">
                                <p className="text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed">
                                    A private network for independent vacation rental operators who want to grow without joining a franchise.
                                </p>

                                <div className="flex items-start gap-6">
                                    <div className="flex flex-col items-center gap-3">
                                        <button
                                            onClick={() => setIsModalOpen(true)}
                                            className="group h-16 px-10 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-4"
                                        >
                                            Apply Now
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-xs text-muted-foreground/80 font-light text-center max-w-[280px]">
                                            Monthly membership. 60-day break-even guarantee. Application required.
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="group h-16 w-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors"
                                    >
                                        <Play size={20} fill="currentColor" className="ml-1 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <SubmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition backdrop-blur-sm"
                            >
                                <X size={24} />
                            </button>

                            <iframe
                                src="https://www.loom.com/embed/674a96221b294bca84c920f4f8588504"
                                frameBorder="0"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
