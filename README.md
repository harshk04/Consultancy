# ShreeGuru Leadership & Learning — Marketing Site

Multi-page marketing website built with Next.js (App Router) + TypeScript + Tailwind CSS + a tiny editable content layer in `src/content`. All brand colors are controlled by CSS variables driven from a single theme file.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit content (no component changes)

All copy, nav items, cards, FAQs, and marquee items live in `src/content/*`.

- Header nav + CTA: `src/content/navigation.ts`
- Home page content (hero, marquee, pinned services, about, approach, FAQs, CTA): `src/content/home.ts`
- Other pages:
  - `src/content/about.ts`
  - `src/content/services.ts`
  - `src/content/ibWorldSchools.ts`
  - `src/content/foundersMessage.ts`
  - `src/content/contact.ts`
  - Resources (blogs/case studies/impact): `src/content/resources.ts`
- Brand text (name/taglines): `src/content/brand.ts`
- Footer content: `src/content/footer.ts`

## Change colors / theme

Theme tokens live in `src/theme/theme.ts` and are applied to CSS variables in `src/app/globals.css`.

Gradient variables (editable via Theme Studio):
- `--brand-blue-1`, `--brand-blue-2`
- `--brand-gold-1`, `--brand-gold-2`
- `--gradient-angle`
- `--gradient-blue`, `--gradient-gold`, `--gradient-gold-soft`

Other key variables:
- `--radius-card`, `--radius-pill`
- `--border`, `--border-gold`
- `--noise-opacity` (hero subtle noise)

- Update default tokens: edit `src/theme/theme.ts`
- Theme Studio (Preview vs Save): visit `http://localhost:3000/theme`

### Theme Studio: Preview vs Save

- **Preview** applies your draft theme only to the preview panel on `/theme` (it does not change the rest of the site).
- **Save** applies the theme site-wide by updating `:root` and persists it to localStorage.
- **Reset** restores the draft back to the saved theme.

LocalStorage key: `siteThemeV1` (see `src/theme/theme.ts`).

## Change the logo

The header logo uses `public/darkbg.jpeg` (`src/components/Header.tsx`).

- Replace `public/darkbg.jpeg` with your own image (same filename), or
- Update the image path in `src/components/Header.tsx`.

## Add a new page

1. Create a route: `src/app/<your-route>/page.tsx`
2. Add the page’s editable copy to `src/content/<yourPage>.ts`
3. Add a nav entry (optional): `src/content/navigation.ts`

## Home: pinned Services scroll scene

The Home page Services section is a scroll-driven “pinned” scene:
- On desktop, the Services block stays sticky while you scroll through 4 service categories, then releases to the next section.
- On mobile, it degrades to a clickable tab layout (no pinning).

Edit the Services scene content here:
- `src/content/home.ts` → `services.categories[*].title`, `services.categories[*].blurb`, `services.categories[*].items` (the 2×2 pills)

## Deploy

Any Next.js host works (Vercel recommended).

- Build: `npm run build`
- Start: `npm run start`

Vercel: import the repo, then deploy (defaults work).
