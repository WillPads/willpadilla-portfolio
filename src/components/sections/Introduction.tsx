import { ArrowRight, Briefcase, Code, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]"
      />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
        <span className="rounded-full border border-white/[.145] bg-white/[.03] px-4 py-1.5 font-mono text-xs text-zinc-400 sm:text-sm">
          {site.tagline}
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          What&apos;s up with{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-sky-300 bg-clip-text text-transparent">
            Will
          </span>
          ?
        </h1>

        <p className="max-w-2xl text-lg text-zinc-400">{site.intro}</p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-white/[.145] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[.06]"
          >
            Contact Me
            <MessageCircle size={16} />
          </a>

          <div className="ml-1 flex items-center gap-2">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[.145] text-zinc-400 transition-colors hover:bg-white/[.06] hover:text-white"
            >
              <Code size={18} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[.145] text-zinc-400 transition-colors hover:bg-white/[.06] hover:text-white"
            >
              <Briefcase size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
