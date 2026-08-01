# ESIKA INFOTECH — Company Website

A modern, multi-page marketing website for **ESIKA INFOTECH PVT LTD**, built as a
pure [Next.js](https://nextjs.org/) application (App Router) with no UI frameworks —
just React and hand-crafted CSS Modules using the brand's red + blue identity.

## Tech

- **Next.js 15** (App Router)
- **React 19**
- **CSS Modules + CSS variables** (no Tailwind / component libraries)
- Fully responsive, accessible and SEO-friendly (per-page metadata)

## Pages

| Route         | Description                                         |
| ------------- | --------------------------------------------------- |
| `/`           | Home — hero, services, process, tech, testimonials  |
| `/about`      | About — story, mission/vision, values, timeline     |
| `/services`   | Services — detailed offerings & engagement models   |
| `/portfolio`  | Portfolio — selected projects & industries          |
| `/careers`    | Careers — perks & open roles                         |
| `/contact`    | Contact — info cards, message form & map            |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
app/            # App Router pages, layout, global styles
components/     # Reusable UI (Navbar, Footer, Logo, ContactForm, ...)
lib/content.js  # Central site content (services, jobs, portfolio, etc.)
public/         # Logo and static assets
```

## Brand

- **Colors:** Red `#e11b22`, Blue `#1c5ca8`, Navy `#0b2440`
- **Contact:** info@esika.in · 080 6897 0818
- **Address:** 3rd Floor, Esares Building, 80 Feet Road, Koramangala, Bengaluru – 560034, India

---

© ESIKA INFOTECH PVT LTD
