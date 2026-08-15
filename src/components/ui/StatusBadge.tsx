import type { ProjectStatus } from "@/data/projects";

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const isCompleted = status === "completed";

  return (
    <span
      className={`inline-block whitespace-nowrap border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${
        isCompleted ? "border-white bg-white text-black" : "border-white/30 text-zinc-400"
      }`}
    >
      {isCompleted ? "Completed / Live" : "In Development"}
    </span>
  );
}
