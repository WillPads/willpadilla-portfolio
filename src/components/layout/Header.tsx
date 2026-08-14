import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-sm font-bold uppercase tracking-widest text-white">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-400">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
