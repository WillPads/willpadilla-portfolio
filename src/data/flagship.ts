import { BadgeCheck, Database, ScanEye, type LucideIcon } from "lucide-react";

export type Highlight = {
  icon: LucideIcon;
  text: string;
};

export const flagship = {
  title: "PixelDerm",
  tagline:
    "Android-based Mobile Platform for Longitudinal Skin Damage Analysis & Monitoring",
  stack: ["Android", "Java", "Image Processing", "SQLite", "ISO/IEC 25010"],
  highlights: [
    {
      icon: ScanEye,
      text: "Algorithmic image processing pipeline to isolate and track UV-induced skin damage over time.",
    },
    {
      icon: Database,
      text: "Local data persistence using SQLite for private, on-device longitudinal tracking.",
    },
    {
      icon: BadgeCheck,
      text: "Evaluated under ISO/IEC 25010 software quality standards.",
    },
  ] satisfies Highlight[],
  repoUrl: "https://github.com/yourhandle/pixelderm",
  demoUrl: "#",
  apkUrl: "#",
};
