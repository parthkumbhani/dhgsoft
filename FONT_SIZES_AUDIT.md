# Font Sizes & Typography Audit — DHGsoft Website

**Date:** 2026-07-14  
**Version:** 1.0  
**Status:** Complete Documentation  

---

## 📋 Overview

This document provides a comprehensive audit of all font sizes, styles, and typography implementations across:
- ✅ Home Page
- ✅ About Pages (all sub-pages)
- ✅ Insights Pages (all hub pages and sub-pages)
- ✅ Capabilities Pages (all sub-pages)
- ✅ All component cards and sections

---

## 🎯 Global Typography Configuration

### Base Font Family
```css
--font-sans: system-ui, -apple-system, sans-serif
--font-serif: Georgia, serif
--font-signature: Caveat, cursive  /* For CEO signature */
```

### Color Scheme
- **Primary Text:** `#111827` (Dark Gray — on light backgrounds)
- **Text Strong:** `#0F1420` (Very Dark)
- **Text Muted:** `#5B6270` (Neutral Gray)
- **White Text:** `#ffffff` (On dark backgrounds)

---

## 📐 Global Heading Hierarchy

### Standard HTML Tags (Page-Level)

#### h1 — Hero/Page Titles
```css
font-size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
line-height: 1.05
letter-spacing: -0.02em
font-weight: 800
```
**Usage:** Main page titles, hero headlines  
**Min:** 48px | **Max:** 64px

---

#### h2 — Section Titles
```css
font-size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
line-height: 1.1
letter-spacing: -0.015em
font-weight: 800
```
**Usage:** Major section headings, subheadings  
**Min:** 36px | **Max:** 48px

---

#### h3 — Subsection Titles
```css
font-size: clamp(1.75rem, 1.4rem + 1vw, 2.25rem)
line-height: 1.15
letter-spacing: -0.01em
font-weight: 700
```
**Usage:** Feature titles, subsection headings  
**Min:** 28px | **Max:** 36px

---

#### h4 — Card Titles (Now h5 on Home)
```css
font-size: clamp(1.25rem, 1.12rem + 0.75vw, 1.75rem)
line-height: 1.3
font-weight: 700
```
**Usage:** Card titles, medium emphasis headings  
**Min:** 20px | **Max:** 28px  
**Note:** Home page industry/service cards use h5 instead

---

#### h5, h6 — Small Headings (Card Titles on Home)
```css
font-size: clamp(1rem, 0.95rem + 0.2vw, 1.25rem)
line-height: 1.4
font-weight: 700
```
**Usage:** Card titles, smaller emphasis headings  
**Min:** 16px | **Max:** 20px

---

### Card-Context Variants

When inside `.card`, `.tight`, or `.heading-card` classes:

#### .card h1 / .heading-card h1
```css
font-size: clamp(1.5rem, 1.25rem + 0.6vw, 1.875rem)
line-height: 1.2
font-weight: 700
```
**Min:** 24px | **Max:** 30px

---

#### .card h2 / .heading-card h2
```css
font-size: clamp(1.375rem, 1.15rem + 0.5vw, 1.625rem)
line-height: 1.2
font-weight: 700
```
**Min:** 22px | **Max:** 26px

---

#### .card h3 / .heading-card h3
```css
font-size: clamp(1.125rem, 1rem + 0.35vw, 1.375rem)
line-height: 1.3
font-weight: 700
```
**Min:** 18px | **Max:** 22px

---

#### .card h4 / .heading-card h4
```css
font-size: clamp(1rem, 0.95rem + 0.2vw, 1.125rem)
line-height: 1.35
font-weight: 600
```
**Min:** 16px | **Max:** 18px

---

#### .card h5, h6 / .heading-card h5, h6
```css
font-size: clamp(0.875rem, 0.85rem + 0.1vw, 1rem)
line-height: 1.4
font-weight: 600
text-transform: uppercase
letter-spacing: 0.08em
```
**Min:** 14px | **Max:** 16px

---

## 🎨 Semantic Typography Classes

### Explicit Heading Classes

#### `.heading-hero`
```css
font-size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
line-height: 1.05
letter-spacing: -0.02em
font-weight: 700
```
**Min:** 48px | **Max:** 64px  
**Usage:** Insights hub hero, capabilities hero, main page title

---

#### `.heading-section`
```css
font-size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
line-height: 1.1
letter-spacing: -0.015em
font-weight: 700
```
**Min:** 36px | **Max:** 48px  
**Usage:** Insights category grids, capabilities sections

---

#### `.heading-large`
```css
font-size: clamp(1.75rem, 1.4rem + 1vw, 2.25rem)
line-height: 1.15
letter-spacing: -0.01em
font-weight: 700
```
**Min:** 28px | **Max:** 36px  
**Usage:** Featured story titles, spotlight sections

---

#### `.heading-md`
```css
font-size: clamp(1.375rem, 1.15rem + 0.5vw, 1.625rem)
line-height: 1.2
font-weight: 700
```
**Min:** 22px | **Max:** 26px

---

#### `.heading-sm`
```css
font-size: clamp(1.125rem, 1rem + 0.35vw, 1.375rem)
line-height: 1.3
font-weight: 700
```
**Min:** 18px | **Max:** 22px

---

#### `.heading-xs`
```css
font-size: clamp(1rem, 0.95rem + 0.2vw, 1.125rem)
line-height: 1.35
font-weight: 600
```
**Min:** 16px | **Max:** 18px

---

### Body Text Classes

#### `.text-body-md`
```css
font-family: var(--font-sans), sans-serif
font-size: clamp(1.125rem, 1rem + 0.2vw, 1.25rem)
font-weight: 400
line-height: 1.6
```
**Min:** 18px | **Max:** 20px  
**Usage:** Description text, hero subheadings, body content

---

#### `.text-body-sm`
```css
font-family: var(--font-sans), sans-serif
font-size: clamp(1rem, 0.95rem + 0.1vw, 1.125rem)
font-weight: 400
line-height: 1.6
```
**Min:** 16px | **Max:** 18px  
**Usage:** Secondary body text, smaller descriptions

---

#### `.text-label-bold`
```css
font-family: var(--font-sans), sans-serif
font-size: clamp(0.875rem, 0.85rem + 0.1vw, 1rem)
font-weight: 600
line-height: 1.5
```
**Min:** 14px | **Max:** 16px  
**Usage:** Labels, small emphasis text, captions

---

#### `.text-headline-xl`
```css
font-family: var(--font-sans), sans-serif
font-size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
font-weight: 700
line-height: 1.05
```
**Min:** 48px | **Max:** 64px  
**Usage:** Hero titles across all sections

---

---

# 🏠 HOME PAGE — Detailed Font Size Map

## Section 1: Hero Section
**File:** `src/components/Hero.tsx`  
**Height:** `min-h-[95vh] lg:min-h-screen`

### Hero Tag Badge
```
Element: <span>
Font Size: 11px (fixed)
Font Weight: 700 (extrabold)
Letter Spacing: 0.2em (widest)
Text Transform: uppercase
Class: text-[11px] font-extrabold uppercase tracking-widest
```

### Hero Main Heading
```
Element: <h1>
Class: text-headline-xl text-white
Font Size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
Font Weight: 700 (extrabold)
Line Height: 1.05
Letter Spacing: -0.02em
Responsive Min: 48px
Responsive Max: 64px
Color: white
```

### Hero Description
```
Element: <p>
Class: text-body-md text-slate-300
Font Size: clamp(1.125rem, 1rem + 0.2vw, 1.25rem)
Font Weight: 400 (medium)
Line Height: 1.6
Responsive Min: 18px
Responsive Max: 20px
Color: #cbd5e1 (slate-300)
```

### Hero CTA Button
```
Element: <button>
Font Weight: 700 (bold)
Font Size: auto (button default)
Class: px-8 py-4 h-auto rounded-xl
Icon Size: 16px (w-4 h-4)
```

### Scroll Indicator
```
Element: <span>
Font Size: 9px (fixed)
Font Weight: 700 (bold)
Letter Spacing: 0.2em
Text Transform: uppercase
Class: text-[9px] font-bold uppercase tracking-widest
```

---

## Section 2: CEO Message
**File:** `src/components/CEOMessage.tsx`

### Quote Glyph (Opening Quote Mark)
```
Element: <div>
Font Size: clamp(4.5rem, 4.5rem, 5.5rem) — varies by breakpoint
Font Family: serif
Font Weight: 400
Opacity: 0.25
Class: text-[4.5rem] lg:text-[5.5rem] font-serif text-white/25
```

### Pull Quote Heading
```
Element: <h2>
Font Size: clamp(2rem, 1.875rem + 0.5vw, 2.5rem)
Font Weight: 500 (medium) for normal text
Font Weight: 700 (bold) for emphasized spans
Line Height: 1.18
Responsive Min: 32px
Responsive Max: 40px
Color: white/85
Class: text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.18] font-medium
```

### CEO Signature
```
Element: <p>
Font Family: Caveat (cursive signature font)
Font Size: clamp(2rem, 2rem, 2.25rem) — varies by breakpoint
Font Size: text-4xl lg:text-5xl
Responsive Min: 32px
Responsive Max: 48px
Font Weight: 400 (default)
Line Height: 1.2
Color: white
```

### CEO Title/Position
```
Element: <p>
Font Size: clamp(0.875rem, 0.875rem, 0.9375rem)
Font Size: text-xs lg:text-sm
Font Weight: 400
Line Height: 1.5
Color: white/65
Style: italic
Margin Top: 0.375rem (1.5)
```

### Supporting Statement
```
Element: <p>
Font Size: clamp(0.875rem, 0.9rem, 0.9375rem)
Font Size: text-sm md:text-[0.9375rem]
Font Weight: 300 (light)
Line Height: 1.6
Color: white/80
Max Width: 340px
```

### CTA Button Text
```
Element: <button>
Font Size: auto (button default)
Font Weight: 700 (bold)
Class: font-semibold
Text: "Connect with Our Team"
Icon Size: 16px (w-4 h-4)
```

---

## Section 3: Industries Carousel
**File:** `src/components/Industries.tsx`  
**Component Layout:** Carousel with hover expansion

### Industry Card — Collapsed State
```
Container: relative height 250px

Industry Name (h5 — UPDATED to h5 from h4)
Element: <h5>
Font Size: 22px (fixed inline style)
Font Weight: 700 (bold)
Line Height: 1.25
Letter Spacing: 0 (tight)
Color: #111827 (text-strong)
Margin Bottom: 10px
Class: font-bold tracking-tight font-headline
```

### Industry Description
```
Element: <p>
Font Size: 16px (fixed inline style)
Font Weight: 400 (normal)
Line Height: 1.6
Color: #64748B (text-muted, slate-500)
Max Lines: 3 clamp
Class: font-sans line-clamp-3
```

### CTA Text
```
Element: <span>
Font Size: 15px (fixed inline style)
Font Weight: 700 (bold)
Color: #8B0036 (brand deep)
Text: "Explore Industry"
Class: font-bold font-sans
```

### Industry Card — Expanded State
```
Industry Name (h5 — UPDATED to h5)
Element: <h5>
Font Size: 22px (fixed inline style)
Font Weight: 700 (bold)
Line Height: 1.25
Margin Bottom: 10px

Overview Text
Font Size: 13px (fixed inline style)
Font Weight: 400 (normal)
Line Height: 1.5
Margin Bottom: 14px
Color: #64748B (text-muted)
```

---

## Section 4: Services Portfolio
**File:** `src/components/Services.tsx`  
**Component Layout:** Dark glassmorphic cards

### Service Card Category Badge
```
Element: <span>
Font Size: 10px (fixed inline style)
Font Weight: 600 (semibold)
Letter Spacing: 0.08em (wider)
Text Transform: uppercase
Color: #AEB7C8 (slate)
Background: rgba(0, 0, 0, 0.4) with backdrop-blur
Class: text-[10px] font-semibold tracking-wider uppercase
```

### Service Card Title (h5 — UPDATED to h5 from h4)
```
Element: <h5>
Font Size: 18px (fixed inline style)
Font Weight: 700 (bold)
Line Height: 1.25
Margin Bottom: 8px
Color: white
Class: font-bold tracking-tight font-headline
```

### Service Card Description
```
Element: <p>
Font Size: 13px (fixed inline style)
Font Weight: 400 (normal)
Line Height: 1.6
Color: #C7CEDD (slate-300)
Max Lines: 2
Class: font-sans line-clamp-2
```

### Arrow Button
```
Element: SVG icon
Size: 18x18px (w-[18px] h-[18px])
Color: white
Background: gradient (linear-gradient(135deg, #B4123F 0%, #A10E38 100%))
```

---

## Section 5: Service Delivery (8-Step Journey)
**File:** `src/components/ServiceDelivery.tsx`  
**Layout:** Timeline with numbered steps

### Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 700
Line Height: 1.1
Letter Spacing: -0.015em
Responsive Min: 36px
Responsive Max: 48px
Color: text-strong
```

### Step Number (Circle)
```
Element: <span>
Font Size: 24px (fixed)
Font Family: monospace
Font Weight: 800 (black)
Color: brand (#B4123F)
Background: circular, dark
```

### Step Title
```
Element: <h4>
Font Size: auto (inherited)
Font Weight: 700 (bold)
Class: font-extrabold
Color: text-strong
```

### Step Description
```
Element: <p>
Font Size: auto (inherited body size)
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
```

---

## Section 6: Technology Ecosystem
**File:** `src/components/Ecosystem.tsx`

### Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 700
Line Height: 1.1
```

### Technology Stack Card Title
```
Element: <h3>
Font Weight: 700
Class: font-bold
Color: brand (#B4123F)
```

---

## Section 7: Case Studies
**File:** `src/components/CaseStudies.tsx`

### Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
```

### Case Study Card Title
```
Element: <h3>
Font Weight: 700 (bold)
Line Height: 1.2
Font Size: auto
Class: font-bold tracking-tight
```

### Case Study Meta Text
```
Element: <p>
Font Size: 13px
Font Weight: 400
Color: text-muted
```

---

## Section 8: Why Choose Us
**File:** `src/components/WhyChooseUs.tsx`

### Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
```

### Benefit Item Title
```
Element: <h4>
Font Weight: 700
Class: font-bold
```

---

## Section 9: Careers
**File:** `src/components/Careers.tsx`

### Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
```

---

## Section 10: Contact Section
**File:** `src/components/ContactSection.tsx`

### Main Heading
```
Element: <h1>
Class: text-headline-xl
Font Size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
```

---

---

# 📄 ABOUT PAGE — Font Size Map

**File:** `src/app/about/page.tsx`

## Hero Section
### h1 Title
```
Font Size: clamp(3.5rem, 2.5rem + 2vw, 4.5rem)
Font Weight: 800 (black)
Line Height: 1.05
Letter Spacing: -0.02em
Responsive Min: 56px
Responsive Max: 72px
Color: white
```

### Subtitle
```
Font Size: clamp(1.125rem, 1rem + 0.2vw, 1.25rem)
Font Weight: 400 (medium)
Line Height: 1.6
Responsive Min: 18px
Responsive Max: 20px
Color: slate-300
```

---

## Who We Are Section
### h2 Section Title
```
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 800 (black)
Line Height: 1.1
Responsive Min: 36px
Responsive Max: 48px
Color: text-strong
```

### Expertise Badges
```
Element: <span>
Font Size: 12px
Font Weight: 600 (semibold)
Class: text-xs font-semibold
```

---

## Core Values Section
### h2 Section Title
```
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 800 (black)
```

### Value Card Title (h4 — UPDATED to h4)
```
Element: <h4>
Font Size: 18px
Font Weight: 700 (extrabold)
Line Height: 1.4
Color: text-strong
Class: font-extrabold text-lg tracking-tight
```

### Value Tag (Italic)
```
Font Size: 12px
Font Weight: 500 (medium)
Style: italic
Color: brand/50 (muted)
Class: text-xs italic font-medium
```

### Value Description
```
Font Size: 14px
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
Class: text-sm leading-relaxed
```

---

## Vision/Mission Section
### h2 Vision Heading
```
Font Size: clamp(2rem, 1.75rem + 1.2vw, 2.125rem)
Font Weight: 700 (extrabold)
Line Height: 1.2
Responsive Min: 32px
Responsive Max: 34px
```

### Mission Items
### h3 Section Title
```
Element: <h3>
Font Size: 20px
Font Weight: 700 (bold)
Line Height: 1.5
Color: text-strong
```

### Mission Item Number
```
Font Size: 16px
Font Weight: 800 (extrabold)
Font Family: monospace
Color: brand (#8C123B)
```

### Mission Item Text
```
Font Size: 14px-16px (responsive)
Font Weight: 600 (semibold)
Line Height: 1.5
```

---

## Leadership Section
### h2 Section Title
```
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 800 (black)
```

### Executive Card Title (h3)
```
Element: <h3>
Font Size: 20px
Font Weight: 700 (extrabold)
Line Height: 1.4
Color: text-strong
```

### Executive Role
```
Font Size: 12px
Font Weight: 700 (bold)
Text Transform: uppercase
Letter Spacing: 0.08em
Color: brand
```

### Executive Description
```
Font Size: 12px
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
```

### Leadership Mindset (h2 — UPDATED)
```
Element: <h2>
Font Size: clamp(2rem, 1.75rem + 1.2vw, 2.125rem)
Font Weight: 800 (black)
Line Height: 1.4
Responsive Min: 32px
Responsive Max: 34px
```

---

# 💡 INSIGHTS PAGE — Font Size Map

**File:** `src/components/insights/shared/InsightsHero.tsx`

## Hero Section (90vh height — UPDATED from 75vh)
```
Min Height: min-h-[90vh]
```

### h1 Title
```
Element: <h1>
Class: heading-hero
Font Size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
Font Weight: 700
Line Height: 1.05
```

### Subtitle
```
Element: <p>
Font Size: clamp(1.125rem, 1rem + 0.2vw, 1.25rem)
Font Weight: 400 (medium)
Line Height: 1.6
```

### Stats Row
### Stat Value
```
Element: <div>
Font Size: 20px-24px
Font Weight: 800 (extrabold)
Color: brand-hot (#E11D5C)
```

### Stat Label
```
Font Size: 10px
Font Weight: 700 (bold)
Text Transform: uppercase
Letter Spacing: 0.08em
Color: white/60
```

---

## Category Grid
### h2 Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
Font Weight: 700
```

### Category Card Title
```
Element: <h3>
Font Weight: 700 (bold)
Color: text-strong
```

---

## Featured Story
### Story Title (h2 — UPDATED from h4)
```
Element: <h2>
Font Size: clamp(1.5rem, 1.375rem + 0.5vw, 1.875rem)
Font Weight: 700 (black)
Line Height: 1.2
Responsive Min: 24px
Responsive Max: 30px
```

### Story Excerpt
```
Font Size: 14px-16px
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
```

---

## Subpage Hero (Screen height — UPDATED from calc(100vh-80px))
**File:** `src/components/insights/subpages/shared/SubPageHero.tsx`

```
Min Height: min-h-screen
Padding: pt-28 pb-16
```

### h1 Title
```
Element: <h1>
Class: text-headline-xl
Font Size: clamp(3rem, 2.5rem + 1.5vw, 3.5rem)
Font Weight: 700 (extrabold)
```

### Eyebrow Badge
```
Font Size: 11px
Font Weight: 700 (extrabold)
Text Transform: uppercase
Letter Spacing: 0.08em
```

---

# 🎯 CAPABILITIES PAGE — Font Size Map

**File:** `src/components/capabilities/landing/01_Hero.tsx`

## Hero Section
### h1 Title
```
Element: <h1>
Class: heading-hero
Font Size: clamp(3rem, 2.25rem + 1.5vw, 4rem)
Font Weight: 700
```

### Eyebrow Chip
```
Font Size: 10px
Font Weight: 700 (extrabold)
Text Transform: uppercase
Letter Spacing: 0.08em
```

---

## Core Capabilities Section
**File:** `src/components/capabilities/landing/03_CoreCapabilities.tsx`

### h2 Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
```

### Section Subtitle
```
Font Size: clamp(1rem, 0.95rem + 0.1vw, 1.125rem)
Font Weight: 400 (medium)
Line Height: 1.6
```

### Capability Card Title (h3)
```
Element: <h3>
Class: card-title
Font Weight: 700
Line Height: 1.2
```

### Capability Card Description
```
Font Size: auto (inherited)
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
```

---

## Delivery Journey
**File:** `src/components/capabilities/ProcessJourney.tsx`

### Step Title (h3 — UPDATED from h4)
**Desktop:**
```
Element: <h3>
Font Weight: 700 (extrabold)
Font Size: 18px
Line Height: 1.4
Color: text-strong
```

**Mobile:**
```
Element: <h3>
Font Weight: 700 (extrabold)
Font Size: 16px
Line Height: 1.4
Color: text-strong
```

### Step Description
```
Font Size: 14px (desktop) / 12px (mobile)
Font Weight: 400 (normal)
Line Height: 1.6
Color: text-muted
```

---

## Capability Sub-Page Hero
**File:** `src/components/capabilities/sub/CapHero.tsx`

### h1 Title
```
Element: <h1>
Class: heading-hero
Font Size: clamp(3rem, 2.5rem + 1.5vw, 3.5rem)
Font Weight: 700
```

---

## Capability Benefits
**File:** `src/components/capabilities/sub/CapBenefits.tsx`

### h2 Section Title
```
Element: <h2>
Class: heading-section
Font Size: clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
```

### Benefit Card Title (h3)
```
Element: <h3>
Class: card-title
Font Weight: 700 (bold)
Font Size: auto
```

---

---

# 🔧 Font Size Responsive Breakpoints

All `clamp()` sizes use this responsive formula:
```
clamp(MIN, BASE + VW%, MAX)
```

### Common Breakpoints Used:
- **Mobile:** 320px (base min)
- **Tablet:** 768px (md)
- **Desktop:** 1024px (lg)
- **Large Desktop:** 1440px (xl+)

### Formula Examples:

#### Hero Heading (h1)
```
clamp(3rem, 2.25rem + 1.5vw, 4rem)
= clamp(48px, 2.25rem + 1.5vw, 64px)

At 320px:  ≈ 48px
At 768px:  ≈ 60px
At 1440px: ≈ 64px
```

#### Section Heading (h2)
```
clamp(2.25rem, 1.75rem + 1.2vw, 3rem)
= clamp(36px, 1.75rem + 1.2vw, 48px)

At 320px:  ≈ 36px
At 768px:  ≈ 41px
At 1440px: ≈ 48px
```

#### Body Text
```
clamp(1.125rem, 1rem + 0.2vw, 1.25rem)
= clamp(18px, 1rem + 0.2vw, 20px)

At 320px:  ≈ 18px
At 768px:  ≈ 18px
At 1440px: ≈ 20px
```

---

# 📝 Notes & Best Practices

## Color Consistency
- All headings use `text-txt-strong` by default
- Body text uses `text-txt-muted` for secondary content
- Links and emphasis use `text-brand` (#B4123F)
- White text on dark backgrounds uses `text-white`

## Font Weights Used
- **300:** Light (body text, supporting statements)
- **400:** Normal (default body text)
- **500:** Medium (semi-emphasis)
- **600:** Semibold (labels, badges)
- **700:** Bold (headings, card titles)
- **800:** Extrabold (major headings)
- **800-900:** Black (hero titles)

## Line Height Standards
- **1.05:** Tight (hero titles)
- **1.1-1.15:** Compact (section headings)
- **1.2-1.3:** Normal (card titles)
- **1.4-1.6:** Relaxed (body text, descriptions)

## Letter Spacing Standards
- **-0.02em:** Tight (h1 headings)
- **-0.015em:** Normal (h2 headings)
- **-0.01em:** Loose (h3 headings)
- **0.08em:** Wide (all caps labels)
- **0.2em:** Widest (badge text, decorative)

---

# ✅ Summary

| Level | Tag | Min Size | Max Size | Usage |
|-------|-----|----------|----------|-------|
| Hero | h1 | 48px | 64px | Main page titles |
| Section | h2 | 36px | 48px | Section headings |
| Subsection | h3 | 28px | 36px | Feature titles |
| Card | h4 | 20px | 28px | Card headings |
| Small Card | h5 | 16px | 20px | Small card titles |
| Body | p | 16px | 20px | Descriptive text |
| Small | span | 14px | 16px | Labels, badges |

---

**End of Document**  
*Last Updated: 2026-07-14*
