@AGENTS.md

# Portfolio — Will Padilla

- Developer: Will Padilla — Software Engineer & CS Student at FEU Institute of Technology
- Tagline: "Driven by curiosity | Pushed by passion | Developing with purpose"

## Tech Stack

React, Next.js (App Router), Tailwind CSS, TypeScript. No icon library — the UI is purely typographic.

## Style

Strict black & white theme — zero gradients anywhere. Brutalist, monospace typography (Space Mono by
default; swap in local fonts via `next/font/local` if added later). Dark by default, stark and
minimalist. No decorative icons, no unnecessary animation.

## Priority Projects

Feature these in the Projects "Bento Box" grid, in this order: PixelDerm, SkillPort, SyncSpace, EcoLog.
PixelDerm, SkillPort, and SyncSpace are "Completed / Live"; EcoLog is "In Development". Each project card
gets a distinct hover accent (defined per-project in `src/data/projects.ts`) that breaks the monochrome
theme only on hover.

## Code Guidelines

- Clean, modular, functional React components.
- Standard Tailwind utility classes — avoid custom CSS unless Tailwind can't express it.
- Keep content/config (site info, project data) in `src/data/`, not hardcoded in components.
