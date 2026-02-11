import { Hero } from "@/components/hero";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionWhatAreWe } from "@/components/section-what-are-we";
import { SectionProblems } from "@/components/section-problems";
import { SectionHowWeHelp } from "@/components/section-how-we-help";
import { SectionHowItWorks } from "@/components/section-how-it-works";
import { SectionTeam } from "@/components/section-team";
import { SectionMovement } from "@/components/section-movement";
import { SectionCTA } from "@/components/section-cta";

export default function Page() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">

      {/* Navigation / Header */}
      <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="font-bold text-lg md:text-xl tracking-tighter flex items-center gap-2 group cursor-pointer">
            <img
              src="/logo.png"
              alt="HostGenius"
              className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform duration-300"
            />
            <span>HostGenius</span>
          </div>

        </div>
      </header>

      <Hero />
      <SectionWhatAreWe />
      <SectionProblems />
      <SectionHowWeHelp />
      <SectionHowItWorks />
      <SectionTeam />
      <SectionMovement />

      <SectionCTA />

      <footer className="py-12 border-t border-white/5 bg-black/40 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <a href="/admin" className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
            <img
              src="/logo.png"
              alt="HostGenius"
              className="w-6 h-6 object-contain grayscale opacity-80"
            />
            <span className="text-sm">HostGenius Network &copy; {new Date().getFullYear()}</span>
          </a>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

