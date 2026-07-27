import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Let's work together" />
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-black/[.08] p-8 dark:border-white/[.145] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          {site.email}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
