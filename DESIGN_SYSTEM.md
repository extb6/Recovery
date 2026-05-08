# Cursory Design System

## Brand Identity

### Logo
- **Icon Mark:** Cursory shield/arrow logo
- **Full Logo:** Cursory wordmark with icon
- **File Locations:**
  - `/public/cursory-logo.png` (icon only)
  - `/public/cursory-logo-full.png` (with text)
  - Dimensions: 40x40px (header), 32x32px (footer), responsive

### Brand Name
- **Company Name:** Cursory
- **Tagline:** Professional Fund Recovery
- **Industry:** Financial Services / Fraud Recovery

---

## Color Palette

### Light Mode
```
Primary:           oklch(0.42 0.16 200)  // Deep Blue #1e40af
Secondary:         oklch(0.5 0.15 165)   // Teal #0891b2
Background:        oklch(0.995 0.001 0)  // White #ffffff
Foreground:        oklch(0.12 0.03 240)  // Dark Blue #1a1f35
Card:              oklch(1 0 0)           // White #ffffff
Muted:             oklch(0.93 0.005 240) // Light Gray #f0f1f3
Border:            oklch(0.9 0.005 240)  // Light Gray #e5e5e7
Input:             oklch(0.97 0.003 240) // Off-white #f8f9fa
```

### Dark Mode
```
Primary:           oklch(0.65 0.15 200)  // Bright Blue #5aa4e8
Secondary:         oklch(0.62 0.14 165)  // Bright Teal #4dd9e6
Background:        oklch(0.11 0.01 240)  // Very Dark Blue #1a1a1f
Foreground:        oklch(0.96 0.01 240)  // Off-white #f5f5f7
Card:              oklch(0.16 0.02 240)  // Dark Blue #242a35
Muted:             oklch(0.25 0.01 240)  // Dark Gray #3a3f4a
Border:            oklch(0.22 0.01 240)  // Dark Gray #353a45
Input:             oklch(0.19 0.01 240)  // Dark Blue #2a2f3a
```

### Semantic Colors
```
Success:           #10b981 (Green)
Warning:           #f59e0b (Amber)
Error:             #ef4444 (Red)
Info:              #3b82f6 (Blue)
```

---

## Typography

### Font Family
- **Sans-serif (Primary):** Geist
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  - Used for: Headers, body text, UI elements
  
- **Monospace (Secondary):** Geist Mono
  - Used for: Code, technical details, numbers

### Type Scale
```
5xl   48px  (h1 - Hero headlines)
4xl   36px  (h2 - Page titles)
3xl   30px  (h3 - Section headers)
2xl   24px  (h4 - Subheaders)
xl    20px  (h5 - Feature titles)
lg    18px  (h6 - Card titles)
base  16px  (Body text)
sm    14px  (Small text, labels)
xs    12px  (Tiny text, hints)
```

### Line Heights
```
Headings:  1.2 (tight)
Subheads:  1.4 (normal)
Body:      1.6 (relaxed)
Large:     1.8 (very relaxed)
```

### Font Weights
```
Light:     300
Regular:   400 (default)
Medium:    500
Semibold:  600
Bold:      700
Extrabold: 800
```

---

## Spacing System

### Base Unit: 4px (0.25rem)

```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 40px  (2.5rem)
3xl: 48px  (3rem)
4xl: 64px  (4rem)
```

### Common Spacing
```
Component padding:     16px
Section padding Y:     80px (desktop), 40px (mobile)
Section padding X:     24px (mobile), 48px (desktop)
Gutter (grid):         24px
Card padding:          24px
Button padding:        12px 24px
Input padding:         12px 16px
```

---

## Component Sizing

### Buttons
```
Small:      32px height, 12px 16px padding
Medium:     40px height, 12px 24px padding (default)
Large:      48px height, 16px 32px padding
```

### Icons
```
Small:      16px (sm)
Default:    20px (md)
Large:      24px (lg)
XL:         32px (xl)
```

### Cards
```
Min height:        200px
Max width:         100%
Border radius:     8px
Shadow:            0 1px 3px rgba(0,0,0,0.1)
Hover shadow:      0 10px 25px rgba(0,0,0,0.1)
```

### Inputs
```
Height:            40px
Border radius:     6px
Border width:      1px
Padding:           8px 12px
Font size:         16px
```

---

## Borders & Radius

### Border Radius
```
sm:  4px
md:  6px (default: 0.625rem)
lg:  8px
xl:  12px
2xl: 16px
full: 9999px (pills, circles)
```

### Border Widths
```
Subtle:    1px (inputs, cards)
Default:   1px (most elements)
Strong:    2px (active states)
```

---

## Shadows

### Elevation Levels
```
None:      No shadow
Subtle:    0 1px 2px rgba(0,0,0,0.05)
Default:   0 1px 3px rgba(0,0,0,0.1)
Medium:    0 4px 6px rgba(0,0,0,0.1)
Large:     0 10px 15px rgba(0,0,0,0.1)
XL:        0 20px 25px rgba(0,0,0,0.1)
```

---

## Motion & Animation

### Transition Durations
```
Instant:   immediate
Fast:      75ms
Base:      200ms (default)
Slow:      300ms
Slower:    500ms
```

### Easing
```
In:        cubic-bezier(0.4, 0, 1, 1)
Out:       cubic-bezier(0, 0, 0.2, 1)
InOut:     cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Animations
```
Hover effects:      opacity, transform, color (200ms)
Loading spinners:   360deg rotation (1s, infinite)
Fade in:            opacity 0→1 (300ms)
Slide in:           transform + opacity (300ms)
```

---

## Responsive Design

### Breakpoints
```
Mobile:    0px       (default)
Tablet:    768px (md)
Desktop:   1024px (lg)
Wide:      1280px (xl)
Ultra:     1536px (2xl)
```

### Mobile-First Approach
- Base styles for mobile
- `md:` prefix for tablet and up
- `lg:` prefix for desktop and up
- `xl:` prefix for wide screens

### Container Widths
```
Mobile:    100% - 24px padding
Tablet:    90% max
Desktop:   1280px (80rem) max
```

---

## Accessibility Standards

### Color Contrast
```
AAA (Enhanced):   7:1 ratio (preferred)
AA (Normal):      4.5:1 ratio (minimum)
Large text:       3:1 ratio
```

### WCAG 2.1 Level AA Compliance
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Color not sole differentiator
- ✅ Screen reader support
- ✅ Alt text for images
- ✅ Form labels associated

---

## Component Examples

### Button Variants
```
Primary:   bg-primary, text-primary-foreground
Secondary: bg-secondary, text-secondary-foreground
Outline:   border-2 border-primary, text-primary
Ghost:     transparent, text-primary on hover
Danger:    bg-destructive, text-destructive-foreground
```

### Card Variants
```
Elevated:  shadow-md, border-none
Outlined:  border-1 border-border, shadow-none
Flat:      bg-muted, border-none
```

### Text Variants
```
Display:   5xl, bold, tight leading
Headline:  4xl, bold, tight leading
Title:     3xl, semibold, normal leading
Body:      base, regular, relaxed leading
Label:     sm, medium, normal leading
Caption:   xs, regular, tight leading
```

---

## Interactive States

### Button States
```
Default:   Primary color, normal opacity
Hover:     Darker shade, shadow increase
Active:    Even darker, inset shadow
Disabled:  50% opacity, cursor-not-allowed
Loading:   Spinner animation, disabled
Focus:     2px outline ring-offset
```

### Form States
```
Default:   Border color: border
Hover:     Border color: border, subtle shadow
Focus:     Border color: primary, ring 2px primary
Error:     Border color: destructive, error message
Disabled:  Opacity 50%, cursor-not-allowed
```

---

## Dark Mode Considerations

### Implementation
- Uses CSS custom properties (variables)
- Automatic with `prefers-color-scheme`
- Manual toggle with `.dark` class
- Consistent across all components

### Color Adjustments
- Increase lightness in dark mode
- Increase saturation slightly for vibrancy
- Maintain contrast ratios (AAA standard)
- Smooth transitions between modes

---

## Usage Guidelines

### When to Use Each Color
```
Primary (Blue):     CTAs, active states, focus rings
Secondary (Teal):   Accents, secondary CTAs
Success (Green):    Confirmations, successful actions
Warning (Amber):    Warnings, pending states
Danger (Red):       Errors, destructive actions
```

### Spacing Guidelines
```
Between sections:   80px (lg), 40px (sm)
Between components: 24px
Within components:  16px
Text inside button: 12px 24px
```

### Typography Guidelines
```
Headings:    Use 5xl-2xl, bold, tight leading
Subheads:    Use xl-lg, semibold, normal leading
Body:        Use base, regular, relaxed leading
Labels:      Use sm, medium, uppercase optional
```

---

## Design Assets

### Logo Files
- `/public/cursory-logo.png` (icon mark)
- `/public/cursory-logo-full.png` (full logo with text)

### Icons
- Library: Lucide React
- Size: 16px, 20px, 24px, 32px
- Color: Inherits text color

### Illustrations
- Premium financial service aesthetic
- Modern, clean style
- Used in hero sections
- SVG preferred, PNG fallback

---

## Code Examples

### CSS Variables
```css
color: var(--primary);
background: var(--background);
border-color: var(--border);
padding: var(--spacing-md);
border-radius: var(--radius-lg);
```

### Tailwind Classes
```html
<!-- Colors -->
<div class="text-primary bg-background border-border"></div>

<!-- Spacing -->
<div class="px-6 py-12 gap-4 mb-8"></div>

<!-- Typography -->
<h1 class="text-5xl font-bold leading-tight"></h1>

<!-- Responsive -->
<div class="p-4 md:p-8 lg:px-12"></div>

<!-- Interactive -->
<button class="hover:opacity-90 transition duration-200 focus:ring-2"></button>
```

---

## Version History

| Version | Date       | Changes |
|---------|-----------|---------|
| 1.0     | 2026-05-08 | Initial design system |

---

## Contact & Support

For design questions or updates, refer to:
- Design token definitions: `globals.css`
- Component implementations: `/components`
- Page layouts: `/app`

---

**Last Updated:** May 8, 2026
**Status:** Production Ready
