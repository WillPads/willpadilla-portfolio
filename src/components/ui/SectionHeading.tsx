export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">/ {eyebrow}</p>
      <h2 className="text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
