# AKS Portfolio Design System

Creative direction: restrained cinematic game UI. Ghost-inspired ink, negative space, and slow reveals lead the language; field-note texture and compact uppercase navigation support it. No literal game assets, logos, or copied chrome are used.

## Color

- `ink.base` `#080b0d`: page base.
- `ink.raised` `#11181c`: elevated bands and nav.
- `ink.panel` `#172024`: mission cards and stat sheets.
- `steel` `#7da7b5`: primary accent for active states, progress, and HUD lines.
- `brass` `#a48552`: restrained secondary rule color.
- `bone` `#efe8dc`: primary text; `bone.soft` and `bone.muted` for hierarchy.
- `hairline`: low-contrast borders.

## Typography

- Display: Cormorant Garamond, used for hero and chapter headings.
- UI/body: Space Grotesk, used for readable interface copy.
- Mono: JetBrains Mono, used for tags, counters, specs, and labels.
- Scale: small labels at 11-12px, body 16-18px, section titles clamp from 40-76px, hero display clamp from 64-142px.

## Layout

- 8pt spacing base.
- Sections use generous vertical rhythm with `py-24` to `py-32`.
- Content max width is 1180px with mobile-first padding.
- Cards use sharp 6-8px radii, hairline borders, clipped corners, and no nested-card stacks.

## Motion

- Section reveal: 0.65s ease-out, staggered children, once per viewport.
- Hero sequence: nav, badge, headline, body, CTAs, spec sheet within roughly 1.5s.
- Interaction spring: stiffness 360, damping 28.
- Reduced motion: components use opacity-only or instant fallbacks through Framer Motion's `useReducedMotion`.

## Texture

- Global grain, vignette, and thin HUD corner rules are applied consistently through CSS pseudo elements.
- Background motion is slow parallax/ink drift, never a looping distraction behind body copy.
