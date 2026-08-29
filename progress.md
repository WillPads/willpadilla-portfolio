# Progress Log

## 2026-08-30 — Trim Projects to PixelDerm & SyncSpace

- Removed "SkillPort" and "EcoLog" entries from [src/data/projects.ts](src/data/projects.ts), leaving
  only "PixelDerm" and "SyncSpace".
- No changes needed to [src/components/sections/ProjectsSection.tsx](src/components/sections/ProjectsSection.tsx)
  or [src/components/ui/ProjectCard.tsx](src/components/ui/ProjectCard.tsx) — the bento grid
  (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) renders two cards cleanly since PixelDerm keeps its
  `span: "wide"` (`lg:col-span-2`) and SyncSpace stays `span: "normal"` (`lg:col-span-1`), filling one
  row at the `lg` breakpoint with no leftover gaps.
- Updated the "Priority Projects" section in [CLAUDE.md](CLAUDE.md) to drop references to SkillPort and
  EcoLog so project docs match the live data.
- Verified with `npx tsc --noEmit` — no type errors, no broken imports.
