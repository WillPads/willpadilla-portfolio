import type { Project } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";
import DeviceFrame from "@/components/ui/DeviceFrame";

const accentBorder = {
  mono: "hover:border-white",
  green: "hover:border-emerald-400",
  "blue-purple": "hover:border-t-blue-500 hover:border-b-purple-500",
} as const;

const accentTitle = {
  mono: "group-hover:text-white",
  green: "group-hover:text-emerald-300",
  "blue-purple": "group-hover:text-blue-300",
} as const;

const accentCta = {
  mono: "group-hover:text-white",
  green: "group-hover:text-emerald-300",
  "blue-purple": "group-hover:text-purple-300",
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const isCompleted = project.status === "completed";

  return (
    <div
      className={`group relative flex h-full flex-col gap-6 overflow-hidden border border-white/15 bg-black p-6 transition-colors duration-300 sm:p-8 ${accentBorder[project.accent]}`}
    >
      {project.accent === "mono" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/0 blur-3xl transition-colors duration-500 group-hover:bg-white/10"
        />
      )}
      {project.accent === "green" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/15"
        />
      )}
      {project.accent === "blue-purple" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-600/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-600/20"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-600/0 blur-3xl transition-colors duration-500 group-hover:bg-purple-600/20"
          />
        </>
      )}

      {/* frosted glass layer — catches the accent glow behind it on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white/0 opacity-0 backdrop-blur-none transition-all duration-500 group-hover:bg-white/[.04] group-hover:opacity-100 group-hover:backdrop-blur-md"
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h3
            className={`text-2xl font-extrabold uppercase tracking-tight transition-colors duration-300 ${accentTitle[project.accent]}`}
          >
            {project.title}
          </h3>
          <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            {project.stack.join(" / ")}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="relative text-sm leading-relaxed text-zinc-400">{project.description}</p>

      <div
        className={
          project.device === "mobile"
            ? "relative flex gap-3 overflow-x-auto pt-2"
            : "relative grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2"
        }
      >
        {project.screenshots
          ? project.screenshots.map((shot) => (
              <DeviceFrame
                key={shot.src}
                variant={project.device}
                src={shot.src}
                alt={shot.alt}
              />
            ))
          : Array.from({ length: project.screenshotCount }).map((_, i) => (
              <DeviceFrame key={i} variant={project.device} />
            ))}
      </div>

      {isCompleted && project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative mt-auto inline-flex w-fit items-center pt-1 font-mono text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors duration-300 ${accentCta[project.accent]}`}
        >
          View Project ↗
        </a>
      )}
    </div>
  );
}
