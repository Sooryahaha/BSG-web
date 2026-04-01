# BSG Website — Master Context File

## Project Identity
- **Client:** Biz Setup Global (BSG) — corporate compliance & business setup firm (₹70k project)
- **Stack:** React 18 + TypeScript 5.5 + Vite 5.4 + Tailwind CSS 3.4 + Framer Motion + React Router 6 + Zustand
- **Dev server:** `npm run dev` → http://localhost:3001 (3000 may be taken)
- **Working dir:** `/home/royyy/Desktop/Projects/BSG website`
- **Build:** `npm run build` | **TS check:** `npx tsc --noEmit`

---

## Design System (WHITE/LIGHT THEME — current)
```ts
BG      = '#ffffff'
BG_ALT  = '#f8fafc'       // alternating sections
CARD    = '#ffffff'
BORDER  = 'rgba(11,31,58,0.08)'
SHADOW  = '0 2px 16px rgba(11,31,58,0.06), 0 1px 4px rgba(11,31,58,0.04)'
SHADOW_H= '0 20px 60px rgba(11,31,58,0.11), 0 4px 16px rgba(37,99,235,0.09)'
TEXT    = '#0B1F3A'        // deep navy — headings, body
MUTED   = '#5B7A99'        // secondary text
ACCENT  = '#2563EB'        // blue — CTAs, icons, labels only (sparingly)
CYAN    = '#0ea5e9'        // "Learn More" links on image cards
GLASS   = 'rgba(255,255,255,0.72)'  // glass cards
```

### Fonts
- `font-sans` → Inter / Manrope
- `font-serif` → Playfair Display (italic headings only)
- Body: `background:#ffffff; color:#0B1F3A`

### Button patterns
- **Primary:** `background:#2563EB, color:white, border-radius:9999px, box-shadow:0 4px 24px rgba(37,99,235,0.35)`
- **Secondary/glass:** `background:rgba(255,255,255,0.85), border:1px solid rgba(11,31,58,0.08), color:#0B1F3A`
- **Image card links:** `color:#0ea5e9` (cyan), no bg

### Section label pattern
```tsx
<div className="section-label">Label Text</div>
// CSS: .section-label in index.css — blue, uppercase, small, line before
```

---

## File Structure (ALL ACTIVE FILES)
```
/home/royyy/Desktop/Projects/BSG website/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.app.json
├── Claude.md                          ← THIS FILE (context)
├── public/
│   ├── logo.png                       ← BSG logo
│   ├── hero-bg.jpg                    ← hero background
│   ├── hero.jpg                       ← contact page
│   ├── bsg_hero.png
│   ├── service-1.jpg → service-5.jpg  ← service card images
│   ├── Clients/                       ← logo webp files (14 logos)
│   │   flyy.webp, ggvs.webp, grinz.webp, hamatico.webp, incture.webp,
│   │   indiburn.webp, kisan_supply.webp, lrelevance_ab.webp,
│   │   magtik_group.webp, ns_solution.webp, stock_ca-yon.webp,
│   │   tathasuglobal.webp, toyama.webp, vsn_technologies.webp
│   └── destinations/
│       london.png, nyc.png, singapore.png, dubai.png, india.png,
│       estonia.png, hongkong.png, canada.png, media__1773599923475.png
└── src/
    ├── main.tsx
    ├── App.tsx                        ← routing + lazy imports for ALL pages
    ├── index.css                      ← global styles, marquee keyframe, body=white
    ├── vite-env.d.ts
    ├── constants/
    │   └── routes.ts                  ← ROUTES object (all 8 routes)
    ├── hooks/
    │   ├── useLogoTransparent.ts
    │   └── usePreloadImages.ts
    ├── components/
    │   ├── navbar/
    │   │   └── Navbar.tsx             ← floating island pill, white glass, ALL nav links
    │   ├── layout/
    │   │   ├── Container.tsx
    │   │   ├── Footer.tsx             ← dark navy bg, white logo inverted
    │   │   ├── Section.tsx
    │   │   ├── ServiceLayout.tsx
    │   │   └── index.ts
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   └── index.ts
    │   └── common/
    │       └── ErrorBoundary.tsx
    └── pages/
        ├── home/
        │   ├── Home.tsx               ← named export: export function Home()
        │   └── index.ts               ← export { Home } from './Home'
        ├── contact/
        │   ├── Contact.tsx            ← default export, premium white design
        │   └── index.ts               ← export { default as Contact }
        ├── about/
        │   └── About.tsx              ← default export (untouched)
        ├── services/
        │   ├── BusinessSetup.tsx      ← named: export function BusinessSetup()
        │   ├── GlobalIncorporation.tsx← named: export function GlobalIncorporation()
        │   ├── StartupServices.tsx    ← named: export function StartupServices()
        │   ├── Compliances.tsx        ← named: export function Compliances()
        │   └── TaxReturns.tsx         ← named: export function TaxReturns() [CREATED]
        └── blog/
            └── Blog.tsx               ← named: export function Blog() [CREATED]
```

---

## Routing (App.tsx — all routes active)
```
/                     → Home
/about                → About
/business-setup       → BusinessSetup
/global-incorporation → GlobalIncorporation
/startup-services     → StartupServices
/compliances          → Compliances
/tax-returns          → TaxReturns  ✓ active
/blog                 → Blog        ✓ active
/contact              → Contact
```

---

## Navbar NAV_LINKS (Navbar.tsx)
```ts
[
  { label: 'Services', children: [
    { path: '/business-setup',       label: 'Business Setup India'      },
    { path: '/global-incorporation', label: 'Global Incorporation'      },
    { path: '/startup-services',     label: 'Startup Services'          },
    { path: '/compliances',          label: 'Compliances & Secretarial' },
    { path: '/tax-returns',          label: 'Tax Returns & GST'         },
  ]},
  { path: '/about', label: 'About' },
  { path: '/blog',  label: 'Blog'  },
]
```
- **Island pill:** `height:56px, border-radius:9999px, max-width:5xl`
- **Glass:** `rgba(255,255,255,0.62)` → `rgba(255,255,255,0.88)` on scroll, `blur(32px) saturate(200%)`
- **Logo:** `<img src="/logo.png" style={{filter:'brightness(0)'}} />` (dark on light)
- **CTA:** solid blue pill, "Get Started" → `/contact`

---

## Home.tsx Sections (in order)
1. **HeroSection** — hero-bg.jpg, white-left gradient, navy headline, italic blue "Business Setup", glass stats card (right)
2. **LogoStripSection** — `logo-marquee-container` + `logo-marquee-track` CSS classes, logos natural color opacity:0.65
3. **FocusSection** — BG_ALT, "we focus on:" + italic navy Playfair "precision in corporate compliance."
4. **ExpertiseSection** — BG, 4 cards (Building2, Globe2, Receipt, GitBranch)
5. **ServicesSection** — BG_ALT, 6 full-bleed image cards h:320px (service-1 to 5), dark gradient overlay, text at bottom
6. **WhySection** — BG, 3 cards (BadgeCheck, Shield, Headphones) + 4-cell stats bar
7. **PresenceSection** — BG_ALT, media__1773599923475.png full-width card h:400px, flags overlay
8. **DestinationsSection** — BG, 8 full-bleed destination cards h:260px (from /destinations/)
9. **ProcessSection** — BG_ALT, 4 step cards (Lightbulb, FileCheck2, Settings2, Rocket)
10. **ContactSection** — BG, split: info left, form right

---

## index.css Key Rules
- `body { background: #ffffff; color: #0B1F3A; }`
- `.logo-marquee-container` — overflow:hidden, mask-image fade edges
- `.logo-marquee-track` — `display:flex; flex-direction:row; flex-wrap:nowrap; animation:marquee 32s linear infinite`
- `@keyframes marquee` — `translateX(0)` → `translateX(-50%)`
- `.section-label` — blue, uppercase, 0.68rem, letter-spacing 0.18em, line before via ::before

---

## Footer.tsx
- Background: `#0B1F3A` (dark navy — stays dark intentionally)
- Logo: `filter: brightness(0) invert(1)` (white)
- Links: Services (5) + Company (4) + Office info + jurisdiction tags
- Top CTA strip: "Schedule a Call" blue button

---

## Contact.tsx
- White page, `pt-36 pb-20`
- Hero: BG_ALT section with light hero.jpg overlay
- Left col: 4 contact info blocks (MapPin, Mail, Phone, Clock) + Global reach card + 3 bullets
- Right col: form with name, email, phone, service select, message, submit (mailto handler)
- submitted state shows success screen
- export default (NOT named)

---

## TaxReturns.tsx (`/src/pages/services/TaxReturns.tsx`)
- Hero, stats bar (5000+ returns, 99.8% on-time, ₹0 penalties, 11+ years)
- 6 service cards (Receipt, Calculator, FileText, Shield, TrendingUp, Users)
- Inclusions list + consultation CTA card
- `export function TaxReturns()`

## Blog.tsx (`/src/pages/blog/Blog.tsx`)
- Hero, category filter pills, 6 article cards with color bands by category
- Newsletter CTA
- `export function Blog()`

---

## Key Rules / Constraints
1. **Named exports:** Home, BusinessSetup, GlobalIncorporation, StartupServices, Compliances, TaxReturns, Blog
2. **Default exports:** Contact, About, Navbar
3. **Image cards** (service/destination): dark gradient overlay IS intentional — images need it for text readability
4. **Blue accent** — only for CTAs, icon backgrounds, section labels. NOT section backgrounds.
5. **Logo strip** — use CSS classes `logo-marquee-container` + `logo-marquee-track`, never inline animation styles
6. **Glass buttons** — `background:rgba(255,255,255,0.85), backdropFilter:blur(12px), border:1px solid rgba(11,31,58,0.08)`
7. `npx tsc --noEmit` → 0 errors (only pre-existing TS6133 in App.tsx allowed)

---

## User Preferences (feedback)
- Design like a $100k UI/UX project — premium, clean, no clutter
- Transparent glass everywhere — white glass, NOT dark glass (except footer + image overlays)
- Blue only when needed — pinch of blue, rest is white/navy
- No dark backgrounds on sections (only footer and image card overlays)
- Context dumps here so Claude doesn't re-read all files each session

---

## Session History Summary
- Started as dark theme (#07111f) — migrated to white/light
- Removed all CPA (Center for Performing Arts) files — BSG only
- Navbar: evolved from static dark → floating island white glass pill
- Logo strip was broken (stacking vertically) — fixed by explicit flex-direction:row in CSS class
- Service cards: evolved to full-bleed image cards
- All 9 routes now active including /tax-returns and /blog
- Contact page fully redesigned with premium white layout
- **Dynamic Service Architecture (Mar 31):** Migrated 48+ services into a data-driven structure (`src/data/servicePages.ts`) and implemented a single dynamic `ServiceDetail.tsx` component to render all content (text, lists, steps, tables). All services are now reachable via `/service/:slug` routing.
- **Navbar Mega-Menu Integration (Mar 31):** Expanded the primary navigation to fully include all 48 services cleanly organized under Services, Startup, Compliance, and Tax & More dropdowns. Added dual custom scrollbar styling to sustain the vertical height of these expansive menus while maintaining the premium design.
- **Hero Video Integration (Mar 31):** Replaced the static hero background with a performance-optimized autoplay video. Implemented a subtle glass-morphism overlay with a 100deg white gradient to ensure text contrast and maintain the white/light theme's premium institutional feel.
