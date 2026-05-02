# BLUMAA DESIGN SYSTEM v1.0
Strategic Branding for Founders Who Refuse to Blend In
blumaagrowth.com · Bilingual ES/EN · Solo founder (always "I" / "yo", never "we")

---

## 01 · COLORS

| Name | Hex | Role |
|------|-----|------|
| Blumaa Blue | #2642FF | Primary hero — use freely as bg or text |
| Butter Yellow | #FFF3C4 | Primary hero — swaps with Blue |
| Pink | #FF62A1 | Accent only · logo star color |
| Citrus Orange | #FF8231 | Accent only |
| Pool Blue | #B6ECFF | Accent only |
| Crema | #FFF7EE | Light bg · logo text on dark |
| Café | #452925 | Warm dark text |
| Gris Oscuro | #231F20 | Body text · darkest neutral |

**Rules:**
- Blue (#2642FF) ↔ Butter (#FFF3C4) are the two hero colors — they swap freely as bg/fg
- Max 1 accent color per piece (Pink, Orange, Pool)
- Never use pure white (#FFF) — use Crema (#FFF7EE)
- Never use the same color for card and its section background

**Approved pairings:**
- Blue bg + Crema text ✓
- Butter bg + Blue text ✓
- Blue bg + Pink accent ✓
- Butter bg + Orange accent ✓
- Pink bg + Crema text ✓
- Orange bg + Crema text ✓

**Card contrast rule:**
- Section Blue → cards in Butter or Crema
- Section Butter → cards in Blue or Crema (Crema card gets border: 1.5px solid #2642FF)
- Section Crema → cards in Blue or Butter

---

## 02 · LOGO

**4 variants:** Logo Principal (horizontal) · Logo Secundario (stacked Blu★maa) · B★ icon · Star standalone

**Logo text colors (approved):** Negro #231F20 · Azul #2642FF · Amarillo #FFF3C4 · Crema #FFF7EE

**Star color (always an accent, never same as text):** Crema · Amarilla · Naranja #FF8231 · Rosada #FF62A1

**Rules:**
- Star has 6 points, organic/irregular shape — never recreate with typography
- Star always contrasts with logo text — never same color
- Icon B★ and standalone star: circle crop only, never square
- Never distort, rotate, or change logo proportions
- To recolor: use original SVG files and change fill value

---

## 03 · TYPOGRAPHY

| Level | Font | Size | Weight | Case |
|-------|------|------|--------|------|
| H1 / Display | Instrument Serif | 48–72px (web) · 52–64px (social) | Regular | ALL CAPS |
| H2 / Heading | Instrument Serif | 28–40px (web) · 36–42px (social) | Regular | Flexible |
| H3 / Subheading | DM Sans | 18–20px | 500 | Flexible |
| H4 / Card title | DM Sans | 16px | 500 | Flexible |
| Eyebrow / Label | Roboto Mono | 10–12px | 500 | UPPERCASE + spaced |
| Body Large | DM Sans | 17px | 400 | Sentence case |
| Body | DM Sans | 15px | 400 | Sentence case |
| Body Small | DM Sans | 13px | 400 | Sentence case |
| Handwritten | Biro Script Plus | 18–24px | Regular | As-is, never CAPS |
| Caption | Roboto Mono | 9–10px | 400 | UPPERCASE + spaced |
| Button | DM Sans | 12–16px | 500 | Sentence case |

**CSS Font Stack:**
```
--font-display:  'Instrument Serif', Georgia, serif;
--font-body:     'DM Sans', system-ui, sans-serif;
--font-mono:     'Roboto Mono', 'Courier New', monospace;
--font-script:   'Biro Script Plus', cursive;
```

**Rules:**
- Never mix more than 2 font families per layout piece
- Biro Script: accent only, never for body text. Best at 18–22px.
- Roboto Mono: always UPPERCASE for labels, tags, captions
- H1 + key highlights → ALL CAPS. Everything else → flexible.

---

## 04 · COMPONENTS

### Buttons (all pill shape — border-radius: 99px)

| Variant | Background | Text | Border | Use |
|---------|-----------|------|--------|-----|
| Primary | #FFF3C4 Butter | #2642FF Blue | none | Main CTA |
| Dark | #2642FF Blue | #FFF7EE Crema | none | On light sections |
| Secondary | #FFF7EE Crema | #2642FF Blue | 1.5px #2642FF | Secondary action |
| Ghost | transparent | #FFF3C4 Butter | 1.5px #FFF3C4 | On blue sections |
| Disabled | background-secondary | muted | none | Not available |

Font: DM Sans 500 · sentence case
Hover: opacity 0.85 + translateY(-1px)
Transition: 200ms ease-in-out

### Tags (all pill shape — border-radius: 99px)
Font: Roboto Mono 9px UPPERCASE
Variants: Blue fill · Butter fill · Outline · Pink fill · Pool fill · Orange fill

### Cards (border-radius: 8px)
Border: subtle, same tone as bg (e.g. Crema card on Butter section → 1.5px solid #2642FF)
Never: same color as section background

### Form Inputs
- Input: border-radius 99px · border 1.5px #2642FF · DM Sans 14px
- Textarea: border-radius 16px · same color rules
- Focus: box-shadow 0 0 0 3px rgba(38,66,255,0.12)
- Error: border-color #FF62A1

---

## 05 · ILLUSTRATION SYSTEM

**19 icons (SVG files):**
Coffee Mug · Kindle · Star Blumaa Polaroid · Drink · Phone · Spark · Arrow Doodle · Sunglasses · Coffee Cup · Star · Sun · Mini Star · B Blumaa Polaroid · Books · iPad · Mac · Candle · Shelf · Doodle

**Style:** Hand-drawn line art · single-weight stroke (1.2–1.8px) · no fill (except Mini Star = solid fill)

**Rules:**
- Always monochrome — one color per piece
- Illustration color always contrasts with background — never same
- Main combo: Blue (#2642FF) on Butter or Crema
- On accent bgs (Pink, Orange): use Crema (#FFF7EE)
- As pattern: 15–25% opacity, repeat on section background
- As loose element: max 2–3 per piece, always as accent
- Never: gradients, fills, shadows on illustrations
- Mini Star is the exception — solid fill, not outline

---

## 06 · VOICE & TONE

**Tone attributes:** Bold · Direct · Witty · Irreverent · Human · Anti-corporate

**Never:** Passive · Corporate · Vague · Salesy · Generic

### Real copy examples (from blumaagrowth.com)

**EN Headlines:**
- "Your work is excellent. Your brand doesn't show it."
- "How the magic happens. (Spoiler: it's not magic. It's method.)"
- "No sales pitch. No cookie-cutter packages."

**ES Headlines:**
- "Tu trabajo es excelente. Tu marca no lo demuestra."
- "Así es como ocurre la magia. (Spoiler: no es magia. Es método.)"
- "Sin discurso de ventas. Sin paquetes genéricos."

### Writing rules
1. Always first person singular: "I" / "yo" — NEVER "we" / "nosotros"
2. Name the pain first, then the solution (Minto Pyramid)
3. Short sentences with impact — the period is a weapon
4. Parentheses = signature voice move for the irreverent comment
5. Banned words: passion, solutions, deliverables, holistic, synergy, comprehensive
6. Bilingual = real translation, same tone — not literal word-for-word
7. CTAs: "Let's Talk" · "Start Your Project" · "Hablemos" — never "Learn More About Our Services"

---

## 07 · PHOTOGRAPHY

**Mood:** Summer · vacation · freedom · fun · tranquility · enjoyment

**Rules:**
- Full color, no filters, no treatment — natural and authentic
- Subject: real founders + lifestyle (coffee, laptops, workspaces, outdoors)
- Mood: summer, vacation, freedom, enjoyment — NEVER corporate office
- Can combine with illustration overlays or brand color frames
- Captions: Roboto Mono 10px UPPERCASE in brand color
- Avoid: generic stock, corporate headshots, boring offices, forced poses

---

## 08 · GRID & LAYOUT

| Breakpoint | Columns | Gutter | Margin |
|-----------|---------|--------|--------|
| Mobile 0–767px | 4 | 16px | 20px |
| Tablet 768–1023px | 8 | 20px | 40px |
| Desktop 1024–1279px | 12 | 24px | 60px |
| Wide 1280px+ | 12 | 24px | max-width 1280px |

Content lives in columns 3–10 on desktop (8 of 12 cols).

**CSS tokens:**
```
--grid-max:     1280px
--grid-gutter:  24px
--bp-tablet:    768px
--bp-desktop:   1024px
--bp-wide:      1280px
```

---

## 09 · SPACING

| Token | Value | Use |
|-------|-------|-----|
| --space-1 | 4px | Micro gaps |
| --space-2 | 8px | Tags, tight elements |
| --space-4 | 16px | Default padding |
| --space-6 | 24px | Component gaps |
| --space-10 | 40px | Section spacing |
| --space-16 | 64px | Layout blocks |
| --space-24 | 96px | Hero sections |

**Border radius:**
```
--r-none: 0px
--r-xs:   4px
--r-md:   8px   ← cards, containers
--r-lg:   16px
--r-pill: 99px  ← buttons, tags, inputs
```

---

## 10 · CSS TOKENS REFERENCE

```css
/* Colors */
--color-blue:    #2642FF;
--color-butter:  #FFF3C4;
--color-pink:    #FF62A1;
--color-orange:  #FF8231;
--color-pool:    #B6ECFF;
--color-crema:   #FFF7EE;
--color-cafe:    #452925;
--color-dark:    #231F20;

/* Typography */
--font-display:  'Instrument Serif', Georgia, serif;
--font-body:     'DM Sans', system-ui, sans-serif;
--font-mono:     'Roboto Mono', 'Courier New', monospace;
--font-script:   'Biro Script Plus', cursive;

/* Radius */
--r-md:    8px;
--r-pill:  99px;

/* Grid */
--grid-max:    1280px;
--grid-gutter: 24px;
--bp-tablet:   768px;
--bp-desktop:  1024px;
```

---

## 11 · DO & DON'T — QUICK REFERENCE

### DO
- Blue + Butter as hero pair — swap freely
- Pill buttons (99px) always
- 8px radius on cards
- Cards always contrast with section bg
- Crema card on Butter → add 1.5px blue border
- Instrument Serif for all titles
- Roboto Mono for all labels, UPPERCASE
- Biro Script as accent only
- ALL CAPS for H1 and key highlights
- Monochrome illustrations, one color only
- Star = 6 organic points — use SVG file, never fake it
- "I" / "yo" always in copy
- Name pain before solution
- Bilingual with real tone, not literal translation

### DON'T
- Never more than 1 accent color per piece
- Never pure white (#FFF) — use Crema
- Never card same color as section bg
- Never square buttons
- Never gradients or drop shadows
- Never system fonts (Arial, Inter, Helvetica)
- Never mix more than 2 font families
- Never Biro Script as body text
- Never Roboto Mono in lowercase for labels
- Never 2 colors in one illustration
- Never recreate the logo star with a character
- Never "we" / "nosotros" in copy
- Never: passion, solutions, deliverables, holistic
- Never literal translation between EN and ES
