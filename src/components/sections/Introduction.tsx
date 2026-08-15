import { site } from "@/data/site";

export default function Introduction() {
  return (
    <section className="border-b border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-7 px-6 py-28 sm:py-40">
        <span className="border border-white/20 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
          {site.tagline}
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl">
          What&apos;s up, <span className="bg-white px-3 text-black">Will</span>?
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">{site.intro}</p>

        <div className="flex flex-col gap-6 pt-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="border border-white bg-white px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="border border-white/30 px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-3.5 py-2 transition-colors hover:border-white/40 hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-3.5 py-2 transition-colors hover:border-white/40 hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
