This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Portfolio Improvement Log

Each improvement is recorded here with its date, changed behavior, and verification result.

### 2026-11-09: Make `/projects` a project index

- Replaced the slug-dependent page at `/projects` with a browsable list of all projects.
- Added links from each project to its `/projects/[slug]` detail page.
- Kept the index consistent with the site's dark visual theme and added keyboard-visible focus states.
- This fixes the projects URL previously falling through to the not-found page because it had no project slug.
- Verification: editor diagnostics report no errors in the updated route.

### 2026-11-09: Apply the configured Geist font

- Updated `src/app/globals.css` to use the Geist font variable loaded in `src/app/layout.tsx` instead of overriding it with Arial.
- Verification: editor diagnostics report no errors in the updated stylesheet.

### 2026-11-09: Show only real project links

- Added optional `liveUrl` and `repositoryUrl` fields to the project data model.
- Moved the known portfolio website URL into its project entry and render action buttons only when a URL is provided.
- Removed the generic GitHub homepage link that was previously shown for every project.
- Verification: editor diagnostics report no errors in the updated project data or detail page.

### 2026-11-09: Remove empty project preview panels

- Removed the gradient placeholder that claimed no preview was available from each project detail page.
- Project details now lead directly into the available description and technology stack instead of an empty visual block.
- Real project screenshots are still needed to add visual case-study previews.
- Verification: editor diagnostics report no errors in the updated detail page.

### 2026-11-09: Make skill animations deterministic

- Replaced render-time random positions and durations in `src/components/Skills.tsx` with stable values derived from each item's index.
- This avoids different animation props between server and client renders while keeping the same staggered visual effect.
- Verification: editor diagnostics report no errors in the updated component.

### 2026-11-09: Respect reduced-motion preferences

- Updated the hero and header animations to avoid entrance and pulse motion when the visitor prefers reduced motion.
- Set section navigation to scroll instantly for those visitors while preserving smooth scrolling for others.
- Verification: editor diagnostics report no errors in the updated components.

### 2026-11-09: Add project-specific page metadata

- Added server-generated title and description metadata for each `/projects/[slug]` page, using the existing project data.
- Added a fallback title for unknown project slugs.
- Verification: editor diagnostics report no errors in the new route layout.
