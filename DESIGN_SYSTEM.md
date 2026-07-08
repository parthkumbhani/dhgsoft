# Design System - Spacing & Layout

This document defines the spacing guidelines, naming conventions, tokens, layout primitives, and constraints to ensure visual consistency across the DHGsoft website.

## Spacing & Layout Tokens

We use a centralized set of spacing tokens defined inside the `@theme` block of `src/app/globals.css` (Tailwind CSS v4). These are the **only** spacing and container width boundaries allowed for top-level section elements.

### Container Max-Widths
- **Site (Default)**: `1280px` (maps to utility class `max-w-site`)
- **Site-Wide**: `1440px` (maps to utility class `max-w-site-wide`)
- **Prose**: `70ch` (maps to utility class `max-w-prose`)

### Gutters & Paddings
- **Gutter (Mobile Horizontal Gutter)**: `1.5rem` / `24px` (maps to utility class `gutter`)
- **Gutter MD (Desktop Horizontal Gutter)**: `2rem` / `32px` (maps to utility class `gutter-md`)
- **Section Y (Mobile Top/Bottom Padding)**: `4rem` / `64px` (maps to utility class `sec-y`)
- **Section Y MD (Desktop Top/Bottom Padding)**: `5rem` / `80px` (maps to utility class `sec-y-md`)
- **Section Y LG (Hero/CTA bands Padding)**: `6rem` / `96px` (maps to utility class `sec-y-lg`)

---

## Layout Primitives

We have built two layout primitives in `src/components/ui/` to enforce alignment and spacing consistencies. All layout sections must route through them.

### 1. `<Container>`
A responsive content container that automatically aligns columns and elements, enforcing max-width caps and uniform padding.

**Location**: `src/components/ui/Container.tsx`

**Props**:
- `size` (`"default" | "wide" | "prose"`): Enforces the respective max-width configuration. Defaults to `"default"` (`max-w-site`).
- `as` (`keyof JSX.IntrinsicElements`): The underlying HTML tag to render. Defaults to `"div"`.

**Example**:
```tsx
import { Container } from "@/components/ui/Container";

export default function MyCustomComponent() {
  return (
    <Container size="default">
      <div>My aligned content</div>
    </Container>
  );
}
```

### 2. `<Section>`
The primary container for page sections. It handles background variations, vertical rhythm paddings, and wraps children with `<Container>`.

**Location**: `src/components/ui/Section.tsx`

**Props**:
- `variant` (`"white" | "mist" | "ink" | "brandTint" | "gradient"`): The design variant specifying backgrounds and text colors. Defaults to `"white"`.
- `size` (`"default" | "hero" | "compact"`): Controls the top/bottom padding scale. Defaults to `"default"`.
- `containerSize` (`"default" | "wide" | "prose"`): Passed directly to the inner `<Container>`. Defaults to `"default"`.
- Supports all standard motion/framers props (extends `HTMLMotionProps<"section">`).

**Example**:
```tsx
import { Section } from "@/components/ui/Section";

export default function ServicesSection() {
  return (
    <Section
      id="services"
      variant="mist"
      size="default"
      containerSize="wide"
    >
      <h2>Our Core Capabilities</h2>
      {/* Grid items go here, aligned within max-w-site-wide */}
    </Section>
  );
}
```

---

## Coding Rules & Conventions

To maintain pixel-perfect alignment across viewports:

1. **Every Section is a `<Section>`**: Every top-level section on the site must be wrapped in a `<Section>` element. Raw `<section>` tags are prohibited.
2. **No Custom Padding/Margin on Section Wrappers**: Do not define custom `pt-*`, `pb-*`, `py-*`, `mt-*`, or `mb-*` on the outer wrappers of sections. That responsibility belongs exclusively to the `<Section>` primitive.
3. **No Arbitrary Max-Widths**: Do not apply custom `max-w-7xl`, `max-w-6xl`, etc., on section layout containers. Use `containerSize="default"` or `containerSize="wide"` on `<Section>`.
4. **Absolute Decorations Outside Container**: Decorative elements (dots, mesh gradients, grids) should be children of `<Section>` using absolute positioning relative to the section's coordinate space. Ensure `overflow-hidden` is applied to `<Section>` to prevent elements from bleeding into the viewport edge.
---

## Typography Sizing Rules

Headings render at their default large scale on page-level content: hero titles, section headings, and section sub-headings.

Inside cards and tight components, add `class="card"` (or `class="tight"`) to the container. All headings inside automatically shrink to card-appropriate sizes.

If you need to force a specific visual size regardless of context, use one of the explicit utility classes:

- `.heading-hero`
- `.heading-section`
- `.heading-large`
- `.heading-md`
- `.heading-sm`
- `.heading-xs`

For body copy, use:

- `.text-body-md`
- `.text-body-sm`
- `.text-label-bold`

**Never override heading sizes with Tailwind `text-*` utilities.** Use the utility classes above, or nest headings inside a `.card` container for automatic contextual sizing.
