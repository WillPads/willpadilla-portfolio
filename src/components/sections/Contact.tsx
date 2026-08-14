import { site } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-5xl px-6 py-20">
        <SectionHeading eyebrow="Contact" title="Let's work together" />
        <div className="flex flex-col items-start gap-6 border border-white/20 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-zinc-400">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="border border-white bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-black hover:text-white"
          >
            {site.email} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
