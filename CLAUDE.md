@AGENTS.md

# Portfolio — Will Padilla

- Developer: Will Padilla — Software Engineer & CS Student at FEU Institute of Technology
- Tagline: "Driven by curiosity | Pushed by passion | Developing with purpose"

## Tech Stack

React, Next.js (App Router), Tailwind CSS, TypeScript. No icon library — the UI is purely typographic.

## Style

Light theme: background is soft off-white (`#FAF9F6`), all text solid black (opacity variants for
hierarchy, never a different hue/gray palette) — zero gradients anywhere. Three-way typography split:
`font-heading` (Space Grotesk) for h1/h2/h3, `font-body` (JetBrains Mono, the body default) for
paragraphs/descriptions/taglines, `font-button` (Space Mono) for nav, buttons, badges, tags, and contact
links. Surfaces are flat: thin `border-black/10` borders on `bg-background`, no persistent blur or translucency
(decided 2026-10-15). Hover effects (lift, shadow, per-project accent) stay — never via gradients. Project cards additionally lift on hover (`-translate-y-2`)
and pick up their per-project accent glow (see below). Buttons/links get a "frosted bubble" hover: a
translucent `bg-black/5` fill fades in with `backdrop-blur-md` plus `scale-105` (note: Tailwind v4's
`scale-*` sets the native CSS `scale` property, not `transform` — check `getComputedStyle(el).scale`
when debugging, not `.transform`). Sections wrap their content in `src/components/ui/Reveal.tsx`, a
client component that fades content in/out via `IntersectionObserver` as it crosses the (margin-shrunk)
viewport edges — respects `prefers-reduced-motion`. No decorative icons.

## Priority Projects

Feature these in the Projects "Bento Box" grid, in this order: PixelDerm, SyncSpace. PixelDerm is
"Completed / Live"; SyncSpace is "In Development" until it is deployed (then flip its status and add `liveUrl`). Each project card gets a distinct hover accent (defined per-project in
`src/data/projects.ts`) that breaks the monochrome theme only on hover: PixelDerm stays black/white,
SyncSpace splits blue (top border)/purple (bottom border).

## Code Guidelines

- Clean, modular, functional React components.
- Standard Tailwind utility classes — avoid custom CSS unless Tailwind can't express it.
- Keep content/config (site info, project data) in `src/data/`, not hardcoded in components.
