# Trevor Clifton — Personal Portfolio

A mobile-first portfolio for Trevor Clifton, focused on marketing and communications. Phase 1 establishes the complete visual and technical foundation while clearly separating confirmed facts from content that Trevor still needs to supply.

## Stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- GSAP, ScrollTrigger, and `@gsap/react`
- Lucide React
- Vitest and Testing Library

The output is a static `dist/` directory suitable for Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite. Other commands:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Updating content

All portfolio content and organization themes live in `src/data/portfolio.ts`. Optional TypeScript fields deliberately remain empty when facts have not been confirmed. Update this file rather than scattering personal copy through components.

- **Biography:** set `portfolio.person.biography`, then replace the marked block in `About.tsx` with the confirmed copy.
- **Experience:** add roles, dates, descriptions, achievements, and links to each experience object. The type already supports every field.
- **Projects:** replace placeholder objects with confirmed case studies. Image records use `{ src, alt }`.
- **Skills:** replace every “to confirm” entry with Trevor-approved capabilities.
- **Contact:** set real email and LinkedIn destinations. Controls remain visibly disabled until destinations exist.
- **Résumé:** add the PDF under `public/` and set `portfolio.contact.resume` to its public path.

## Replacing the portrait

1. Add an optimized portrait to `public/images/` (WebP or AVIF preferred).
2. Set `portfolio.person.portrait` to the public path.
3. Replace the intentional placeholder block in `Hero.tsx` with an `<img>` using a descriptive alt such as `Portrait of Trevor Clifton`.
4. Preserve the existing mobile `4 / 3` and desktop `3 / 4` art direction, or adjust `.portrait-placeholder` in `src/styles/global.css`.

No stock image or generated person is used in Phase 1.

## Themes and motion

The declarative `data-theme-bg` and `data-theme-fg` values on sections are consumed by `useScrollThemes.ts`. A single ScrollTrigger measures section positions and interpolates one fixed background layer near chapter boundaries. That central controller handles reverse scrolling, restored page positions, anchor navigation, and cleanup without React state updates on scroll.

Reduced-motion visitors get a static presentation, while a `<noscript>` fallback keeps the document readable if JavaScript is unavailable.

Brand values are kept in `src/data/portfolio.ts`, separate from the portfolio’s neutral design tokens. Confirmed sources:

- [SUNY Geneseo color palette](https://www.geneseo.edu/comm_mark/color-palette/) — Geneseo Blue `#003087` and Flame Gold `#DAAA00`.
- [Saint Peter’s University brand standards](https://www.saintpeters.edu/wp-content/uploads/blogs.dir/98/files/2013/01/brand.pdf) — Pantone 541 and Pantone 285; the accessible web conversions in this project are `#003B70` and `#0072CE`.
- [Stevens branding resources](https://www.stevens.edu/page-chapter/branding-resources) — confirms maroon and gray as the institutional palette, but the detailed guide is access-restricted. The current maroon is a temporary token pending an official digital value.
- [DS+CO](https://dixonschwabl.com/about/) — the organization uses a flexible identity. The warm neutral and orange are portfolio-specific temporary tokens, not claimed as official brand values.

No logos or copyrighted organization artwork are included, and the site does not imply organizational endorsement.

## Deployment to Vercel

Import the GitHub repository into Vercel. The detected framework should be Vite, with `npm run build` as the build command and `dist` as the output directory. No environment variables are required. Deployment and custom-domain setup are intentionally outside Phase 1.

Before production, replace the placeholder URL in `public/sitemap.xml` with the final canonical domain and add matching `og:url` / social preview metadata.

## Content still needed from Trevor

- Portrait and preferred image crop
- Personal biography and short introduction approval
- Job titles, dates, responsibilities, and achievements for all three organizations
- Confirmed project case studies, images, links, and outcomes
- Confirmed skills, tools, channels, and specialties
- Degrees, fields of study, and attendance or graduation dates
- Preferred email, LinkedIn URL, other professional links, and résumé PDF
- Final production domain and social-sharing image
