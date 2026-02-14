import { Hero } from "@/components/hero";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionWhatAreWe } from "@/components/section-what-are-we";
import { SectionProblems } from "@/components/section-problems";
import { SectionHowWeHelp } from "@/components/section-how-we-help";
import { SectionHowItWorks } from "@/components/section-how-it-works";
import { SectionTeam } from "@/components/section-team";
import { SectionMovement } from "@/components/section-movement";
import { SectionCTA } from "@/components/section-cta";
import { SectionWhoItsFor } from "@/components/section-who-its-for";
import { SectionEconomics } from "@/components/section-economics";

export default function Page() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">


      <Hero />
      <SectionWhatAreWe />
      <SectionProblems />
      <SectionHowWeHelp />
      <SectionHowItWorks />
      <SectionTeam />
      <SectionMovement />

      <SectionEconomics />
      <SectionWhoItsFor />
      <SectionCTA />

      <footer className="py-12 border-t border-white/5 bg-black/40 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
          <a href="/admin" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <img
              src="/logo.png"
              alt="HostGenius"
              className="w-6 h-6 object-contain grayscale opacity-80"
            />
            <span className="text-sm">HostGenius Network &copy; {new Date().getFullYear()}</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

