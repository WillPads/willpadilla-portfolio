@AGENTS.md

# Portfolio — Will Padilla

- Developer: Will Padilla — Software Engineer & CS Student at FEU Institute of Technology
- Tagline: "Driven by curiosity | Pushed by passion | Developing with purpose"

## Tech Stack

React, Next.js (App Router), Tailwind CSS, TypeScript. No icon library — the UI is purely typographic.

## Style

Strict black & white theme — zero gradients anywhere (accent colors only ever appear as solid hover
states, never blended). Typography is paired for contrast: Plus Jakarta Sans for headings and body
copy, JetBrains Mono for nav, tags, badges, and buttons — every UI-chrome element gets an explicit
`font-mono` class since the body default is now the sans face. Dark by default, stark and minimalist.
No decorative icons, no unnecessary animation. Project cards get a subtle backdrop-blur "frosted glass"
layer on hover, sitting between the accent glow blob and the content, for depth without gradients.

## Priority Projects

Feature these in the Projects "Bento Box" grid, in this order: PixelDerm, SkillPort, SyncSpace, EcoLog.
PixelDerm, SkillPort, and SyncSpace are "Completed / Live"; EcoLog is "In Development". Each project card
gets a distinct hover accent (defined per-project in `src/data/projects.ts`) that breaks the monochrome
theme only on hover.

## Code Guidelines

- Clean, modular, functional React components.
- Standard Tailwind utility classes — avoid custom CSS unless Tailwind can't express it.
- Keep content/config (site info, project data) in `src/data/`, not hardcoded in components.
