import type { Project } from "@/data/projects";
import StatusBadge from "@/components/ui/StatusBadge";
import DeviceFrame from "@/components/ui/DeviceFrame";

const accentBorder = {
  mono: "hover:border-black",
  green: "hover:border-emerald-500",
  "blue-purple": "hover:border-t-blue-500 hover:border-b-purple-500",
} as const;

const accentTitle = {
  mono: "group-hover:text-black",
  green: "group-hover:text-emerald-600",
  "blue-purple": "group-hover:text-blue-600",
} as const;

const accentCta = {
  mono: "group-hover:text-black",
  green: "group-hover:text-emerald-600",
  "blue-purple": "group-hover:text-purple-600",
} as const;

export default function ProjectCard({ project }: { project: Project }) {
  const isCompleted = project.status === "completed";

  return (
    <div
      className={`group relative flex h-full flex-col gap-6 overflow-hidden border border-black/10 bg-white/40 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.10)] hover:backdrop-blur-xl sm:p-8 ${accentBorder[project.accent]}`}
    >
      {project.accent === "mono" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/0 blur-3xl transition-colors duration-500 group-hover:bg-black/[.06]"
        />
      )}
      {project.accent === "green" && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-400/30"
        />
      )}
      {project.accent === "blue-purple" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-500/0 blur-3xl transition-colors duration-500 group-hover:bg-blue-500/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/0 blur-3xl transition-colors duration-500 group-hover:bg-purple-500/25"
          />
        </>
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <h3
            className={`font-heading text-2xl font-bold uppercase tracking-tight text-black transition-colors duration-300 ${accentTitle[project.accent]}`}
          >
            {project.title}
          </h3>
          <p className="font-body text-[11px] uppercase tracking-widest text-black/45">
            {project.stack.join(" / ")}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="relative font-body text-sm leading-relaxed text-black/65">
        {project.description}
      </p>

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
          className={`relative mt-auto inline-flex w-fit items-center gap-1 pt-1 font-button text-xs font-bold uppercase tracking-widest text-black/50 transition-all duration-300 hover:scale-105 ${accentCta[project.accent]}`}
        >
          View Project ↗
        </a>
      )}
    </div>
  );
}
