# AKS Portfolio Design System

Creative direction: Professional Liquid Glass. The site uses translucent, softly blurred surfaces over an ambient gradient field. The tone is polished and credible for hiring managers and senior engineers, with no game-HUD, dossier, mission, field-note, or chapter language.

## Color Tokens

- `bg.base` `#060912`: near-black cool base.
- `bg.radial` `#0d1726`: deep blue-tinted glow layer.
- `glass.fill` `rgba(255,255,255,0.075)`: default surface fill.
- `glass.strong` `rgba(255,255,255,0.12)`: stronger panel fill.
- `glass.border` `rgba(255,255,255,0.18)`: default glass hairline.
- `glass.highlight` `rgba(255,255,255,0.42)`: top-edge/specular highlight.
- `accent.primary` `#54d6ff`: electric cyan-blue for active states and CTAs.
- `accent.violet` `#a78bfa`: secondary glow only.
- `text.primary` `#f7fbff`, `text.secondary` `#c9d7e6`, `text.muted` `#8796a8`.

## Glass Tokens

- Default blur: `18px`.
- Strong blur: `24px`.
- Radius: `28px` for panels, `999px` for nav/buttons, `20px` for smaller cards.
- Shadow: `0 24px 80px rgba(0,0,0,.32), 0 8px 26px rgba(84,214,255,.08), inset 0 1px 0 rgba(255,255,255,.22)`.
- All elevated surfaces use one reusable glass class or `GlassPanel` component.

## Typography

- Display/headlines: Cormorant Garamond.
- UI/body: Space Grotesk.
- Mono: JetBrains Mono, limited to tech tags and code-adjacent labels.
- Scale: label 12px, body 16-18px, section title 44-76px, hero display 72-148px.

## Layout

- 8pt spacing base.
- Max content width: 1184px.
- Generous vertical rhythm, fluid grids, and large rounded glass surfaces.
- Mobile layout keeps all glass panels readable by increasing opacity and reducing blur cost.

## Motion

- Reveal: 0.7s ease-out with staggered children.
- Interaction: soft spring, stiffness 260, damping 24.
- Ambient background: slow morphing blob drift; disabled/frozen for reduced motion.
