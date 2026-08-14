import { Code, Link as LinkIcon, Mail, Send } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.1]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            <Code size={18} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-black dark:hover:text-white"
          >
            <LinkIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
