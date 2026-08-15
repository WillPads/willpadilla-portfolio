export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <p className="font-body text-xs uppercase tracking-[0.2em] text-black/50">/ {eyebrow}</p>
      <h2 className="font-heading text-3xl font-bold uppercase leading-[0.95] tracking-tight text-black sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
