import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center px-6 py-8 font-button text-xs uppercase tracking-widest text-black/60 sm:justify-end">
        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full px-3 py-3.5 transition-all duration-300 hover:scale-105 hover:bg-black/5 hover:text-black hover:backdrop-blur-sm"
          >
            Email
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-3.5 transition-all duration-300 hover:scale-105 hover:bg-black/5 hover:text-black hover:backdrop-blur-sm"
          >
            GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-3.5 transition-all duration-300 hover:scale-105 hover:bg-black/5 hover:text-black hover:backdrop-blur-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
