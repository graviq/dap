# Graviq Design System

Graviq.ai helps organizations find where AI belongs — surfacing, scoring, and prioritizing the workflows across a company that are the best fit for AI automation. The product is a B2B SaaS platform: teams connect their tools, Graviq scans workflows, and returns a ranked list of "opportunities" (score, effort, impact) that leadership and ops teams can act on.

**Sources provided:** a single brand asset, `uploads/Graviq Logo.jpg` (wordmark: charcoal "GRAV" + teal ".Q" with a swoosh tail, teal underline). No codebase, Figma file, or existing product screens were attached — colors, type, and the one UI kit below were derived from the logo and the company description ("vibrant and professional") rather than an existing product. If a codebase or Figma file exists, attach it and this system should be rebuilt/reconciled against it.

## Index

- `styles.css` — root stylesheet, imports everything in `tokens/`
- `tokens/colors.css`, `typography.css`, `spacing.css`, `effects.css` — design tokens
- `assets/logo.jpg` — primary wordmark (only brand asset provided)
- `guidelines/*.card.html` — foundation specimen cards (Colors, Type, Spacing, Brand groups)
- `components/core/` — Button, Badge, Tag, Card
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/navigation/` — Tabs
- `components/feedback/` — Dialog, Toast, Tooltip
- `ui_kits/platform/` — Graviq Platform: login → sidebar dashboard → opportunity list → opportunity detail dialog → team view
- `SKILL.md` — portable skill file for use in Claude Code

## Components

Badge, Button, Card, Tag (core) · Input, Select, Checkbox, Radio, Switch (forms) · Tabs (navigation) · Dialog, Toast, Tooltip (feedback).

**Intentional additions:** no source defined a component inventory, so this is a from-scratch standard set sized to what an opportunity-scoring SaaS dashboard needs (list/detail views, status, forms, light overlay feedback). Omitted: Avatar, complex DataTable, Stepper — none were needed for the one UI kit built; add them if a second surface needs them.

## Content fundamentals

- **Voice:** direct and outcome-oriented. Talks about *workflows*, *opportunities*, *fit score*, *effort/impact* — operational language, not hype. "Where AI belongs" is the core positioning phrase; it frames AI adoption as a placement problem, not a magic trick.
- **Person:** second person ("you"), addressing the operator/leader looking to adopt AI. Example: "Find the highest-leverage AI opportunity."
- **Casing:** sentence case for headings and buttons ("Get started", "Book a demo"), not Title Case.
- **Tone:** confident, calm, consultative — a strategy-advisor register, not a startup-hype register. No exclamation points, no forced excitement.
- **Emoji:** none. Keep it out of UI copy and marketing copy alike.
- **Numbers:** shown precisely and matter-of-factly (fit score "84/100", "6–9 hrs/week") — data is a supporting proof point, not decoration.

## Visual foundations

- **Colors:** teal (`--teal-500`, from the logo's ".Q") is the primary brand/action color; charcoal (`--charcoal-*`, from the "GRAV" wordmark) is the neutral/text scale, used for dark surfaces (sidebar) and body text. One additional accent, amber, was added via oklch to give the palette the "vibrant" quality the brand asked for without inventing an unrelated hue — teal and charcoal alone read as cool and reserved; amber is used sparingly (a single CTA or highlight per screen), never as a base color.
- **Type:** two-family pairing. Space Grotesk (display) is a geometric sans that echoes the logo's geometric G/Q construction, used for headings and large numerals. Plus Jakarta Sans (body) is a warmer, highly legible grotesk for paragraphs and UI copy. JetBrains Mono for scores/technical values. **Substituted from Google Fonts** — no font files were provided; flag this and send real font files if the brand has them.
- **Spacing:** 4px base unit (4/8/12/16/24/32/48/64...). Generous padding inside cards and forms (24px+) to keep a calm, professional density — not cramped/dashboard-dense.
- **Backgrounds:** flat colors only. No photography, no illustration, no gradients, no repeating textures/patterns — the brand asset gave us none, so we didn't invent any. Surfaces are plain white/canvas/charcoal blocks.
- **Corner radii:** soft but restrained — 10px default (`--radius-md`) for buttons/inputs, 16px (`--radius-lg`) for cards, full pill only for badges/tags/switches.
- **Cards:** white surface, 1px hairline border (`--border-default`), small soft shadow (`--shadow-sm`), 16px radius. No colored left-border accent (explicitly avoided).
- **Shadows:** soft, low-opacity, neutral-tinted (not colored) — sm/md/lg scale plus a teal focus ring for keyboard/focus states.
- **Animation:** minimal and functional only — 120–200ms ease transitions on hover/focus/toggle state changes (color, box-shadow, switch thumb position). No bounce, no entrance choreography, no page transitions.
- **Hover states:** primary/secondary/accent buttons darken one step; outline/ghost buttons gain a light neutral fill. No lightening-on-hover.
- **Press/active states:** rely on the same darker-shade step as hover (no scale/shrink effects) to keep interactions calm rather than bouncy.
- **Borders:** thin (1–1.5px), neutral charcoal at low opacity by default; teal only for focus or brand-emphasis borders.
- **Transparency/blur:** used only for the modal overlay scrim (`--surface-overlay`, ~55% opacity dark charcoal). No frosted-glass/blur effects elsewhere.
- **Imagery color vibe:** n/a — no photography was provided or used; if product imagery is added later, keep it cool-neutral to sit with the teal/charcoal palette rather than warm/orange tones (reserve warmth for the amber accent only).

## Iconography

No icon set, icon font, or SVG sprite was provided in the source material. **None has been added yet.** The one UI kit built here avoids iconography entirely (text labels, color, and badges carry meaning instead) rather than hand-drawing icons. If/when an icon direction is chosen, Lucide (thin 1.5–2px stroke, matches the logo's geometric line weight) is the recommended CDN-available match — flag this as a substitution once adopted. No emoji or unicode-glyph icons are used anywhere in this system.

## Caveats & ask

- **No codebase or Figma was attached** — every color, type choice, component, and the one UI kit here is inferred from a single logo file plus the "vibrant and professional" brief, not copied from an existing product. If Graviq has an existing site, app, or Figma file, please attach it (Import menu) so this system can be reconciled against real screens instead of built from scratch.
- **Fonts are Google Fonts substitutes** (Space Grotesk / Plus Jakarta Sans / JetBrains Mono) — if Graviq has licensed brand fonts, send the files and I'll swap them in.
- **Only one UI kit exists** (the Platform dashboard) since no other product surface (marketing site, mobile app, docs) was described — tell me if there's a second surface to build.
- **No iconography yet** — tell me if you have a preferred icon system, or I'll propose Lucide.

Please review the Design System tab and tell me what to fix first — colors, type, the dashboard's layout, or something else. I'll iterate.
