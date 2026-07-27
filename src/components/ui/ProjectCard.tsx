import { Code, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";

export default function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/[.08] bg-white/[.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[.04] hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.35)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/0 blur-2xl transition-colors duration-300 group-hover:bg-indigo-500/20"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[.1] bg-white/[.03] text-indigo-300 transition-colors duration-300 group-hover:border-indigo-400/30 group-hover:bg-indigo-500/10">
          <Icon size={20} />
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="relative flex flex-col gap-1.5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm text-zinc-400">{project.tagline}</p>
      </div>

      <p className="relative text-sm text-zinc-500">{project.description}</p>

      <div className="relative mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[.06] px-2.5 py-0.5 text-xs text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.href || project.repo) && (
        <div className="relative flex gap-4 pt-2 text-sm font-medium">
          {project.href && (
            <a
              href={project.href}
              className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
            >
              Live <ExternalLink size={14} />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-white"
            >
              Code <Code size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
