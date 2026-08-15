import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="font-button text-sm font-bold uppercase tracking-widest text-black"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-1 font-button text-xs uppercase tracking-widest text-black/60">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 transition-all duration-300 hover:scale-105 hover:bg-black/5 hover:text-black hover:backdrop-blur-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
