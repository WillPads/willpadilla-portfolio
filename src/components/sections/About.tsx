import { skills } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-white/15">
      <div className="mx-auto w-full max-w-5xl px-6 py-24">
        <SectionHeading eyebrow="About" title="A bit about me" />
        <div className="grid gap-12 sm:grid-cols-2">
          <p className="text-lg leading-relaxed text-zinc-400">
            Replace this paragraph with a short bio: your background, what you focus
            on, and what kind of work you&apos;re looking for. Keep it to two or three
            sentences — visitors will read the projects below for the details.
          </p>
          <div className="flex flex-wrap content-start gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-white/20 px-3 py-1 font-mono text-xs uppercase tracking-wider text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
