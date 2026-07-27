import type { ProjectStatus } from "@/data/projects";

const styles: Record<
  ProjectStatus,
  { label: string; dot: string; text: string; ring: string }
> = {
  "in-development": {
    label: "In Development",
    dot: "bg-amber-400",
    text: "text-amber-300",
    ring: "border-amber-400/30 bg-amber-400/10",
  },
  "coming-soon": {
    label: "Coming Soon",
    dot: "bg-sky-400",
    text: "text-sky-300",
    ring: "border-sky-400/30 bg-sky-400/10",
  },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const s = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap ${s.ring} ${s.text}`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${s.dot}`}
        />
        <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.dot}`} />
      </span>
      {s.label}
    </span>
  );
}
