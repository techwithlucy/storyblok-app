# K75 — Product Drop Landing Page

A polished, dark-mode product launch landing page for the **K75**, a fictional premium mechanical keyboard designed for cloud engineers.

This is the **hardcoded starter version**. All marketing copy lives directly inside the React components so it can later be moved into a headless CMS (Storyblok).

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- lucide-react icons

No backend, database, authentication or API.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build
```

## Project Structure

```
app/
  layout.tsx        # Root layout, fonts, metadata (dark mode)
  page.tsx          # Composes every section
  globals.css       # Tailwind + a couple of small animations
components/
  Navbar.tsx        # Sticky navigation + Join Waitlist button
  Hero.tsx          # Headline, launch message, CTA, product image
  ProductGallery.tsx# Gallery of keyboard angles
  FeatureGrid.tsx   # Product features
  ProductDetails.tsx# Specifications + availability
  FAQ.tsx           # Frequently asked questions
  FinalCTA.tsx      # Pre-launch waitlist call to action
  Footer.tsx        # Footer
public/images/      # Local product images
```

## Notes

- Marketing content (headline, launch date, CTA text, availability, features) is intentionally hardcoded inside each component.
- Images live in `public/images` and can be swapped out easily.
- Ready to deploy to AWS Amplify from GitHub.
