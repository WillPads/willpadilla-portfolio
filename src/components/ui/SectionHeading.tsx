export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <p className="text-xs uppercase tracking-widest text-zinc-500">/ {eyebrow}</p>
      <h2 className="text-2xl font-bold uppercase tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
