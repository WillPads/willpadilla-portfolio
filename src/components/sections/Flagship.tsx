import { Code, Download, ImagePlus, PlayCircle, Sparkles } from "lucide-react";
import { flagship } from "@/data/flagship";

export default function Flagship() {
  return (
    <section id="flagship" className="mx-auto w-full max-w-5xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/[.08] bg-white/[.02] p-8 sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-[100px]"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 font-mono text-sm text-indigo-300">
              <Sparkles size={16} />
              Flagship Project
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {flagship.title}
              </h2>
              <p className="max-w-xl text-zinc-400">{flagship.tagline}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {flagship.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-white/[.06] px-2.5 py-1 text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="flex flex-col gap-3">
              {flagship.highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[.1] bg-white/[.03] text-indigo-300">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm text-zinc-400">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={flagship.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-zinc-300"
              >
                View GitHub Repo
                <Code size={16} />
              </a>
              <a
                href={flagship.demoUrl}
                className="flex items-center gap-2 rounded-full border border-white/[.145] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[.06]"
              >
                Watch Demo
                <PlayCircle size={16} />
              </a>
              <a
                href={flagship.apkUrl}
                className="flex items-center gap-2 rounded-full border border-white/[.145] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/[.06]"
              >
                Download APK
                <Download size={16} />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 rounded-2xl border border-dashed border-white/[.15] bg-white/[.02] p-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="relative aspect-[9/19] w-full max-w-[110px] rounded-[1.5rem] border-2 border-dashed border-white/[.15] bg-white/[.02]"
              >
                <span className="absolute left-1/2 top-2.5 h-1.5 w-8 -translate-x-1/2 rounded-full bg-white/[.1]" />
                <div className="flex h-full flex-col items-center justify-center gap-2 px-2 text-center text-zinc-600">
                  <ImagePlus size={20} />
                  <span className="text-[10px] leading-tight">
                    Screenshot {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
