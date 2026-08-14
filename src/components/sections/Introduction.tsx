import { site } from "@/data/site";

export default function Introduction() {
  return (
    <section className="border-b border-white/15">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:py-32">
        <span className="border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest text-zinc-400 sm:text-sm">
          {site.tagline}
        </span>

        <h1 className="max-w-3xl text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl">
          What&apos;s up with <span className="bg-white px-2 text-black">Will</span>?
        </h1>

        <p className="max-w-2xl text-lg text-zinc-400">{site.intro}</p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="border border-white bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
          >
            View Projects →
          </a>
          <a
            href="#contact"
            className="border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:border-white hover:bg-white/5"
          >
            Contact Me
          </a>

          <div className="ml-1 flex items-center gap-3 text-xs uppercase tracking-widest">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-4 py-3 text-zinc-400 transition-colors hover:border-white hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-4 py-3 text-zinc-400 transition-colors hover:border-white hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
