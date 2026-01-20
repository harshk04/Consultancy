## ShreeGuru Leadership & Learning

Next.js (App Router) + TypeScript + Tailwind CSS website for **ShreeGuru Leadership & Learning**.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Content & Editing

- Central content store: `src/content/content.ts`
- Update placeholders: `site.contactPlaceholders` in `src/content/content.ts`
- Update canonical base URL: `site.url` in `src/content/content.ts`

## Pages

- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Services: `src/app/services/page.tsx`
- Service detail: `src/app/services/[slug]/page.tsx`
- IB World Schools: `src/app/ib-world-schools/page.tsx`
- Impact / Case Studies: `src/app/impact/page.tsx`
- Case study detail: `src/app/case-studies/[slug]/page.tsx`
- Founder’s Message: `src/app/founder/page.tsx`
- Contact: `src/app/contact/page.tsx`
