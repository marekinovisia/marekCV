# Marek Kellner — CV

Source for [marek.inovisia.agency](https://marek.inovisia.agency): a print-friendly online CV.

Built with Next.js 16, TypeScript and Tailwind CSS.

## getting started

```bash
pnpm install
pnpm dev
# open http://localhost:3000
```

All content lives in `src/data/resume-data.ts`.

## scripts

```bash
pnpm dev          # start development server
pnpm build        # build for production
pnpm start        # start production server
pnpm lint         # run biome linting checks
pnpm lint:fix     # run biome linting with auto-fix
pnpm format       # check code formatting with biome
pnpm format:fix   # format code with biome
pnpm check        # run both linting and formatting checks
pnpm check:fix    # run both linting and formatting with auto-fix
```

## project structure

```
src/
├── app/                # next.js app router
│   ├── components/     # page-level components
│   │   ├── education.tsx
│   │   ├── header.tsx
│   │   ├── projects.tsx
│   │   ├── skills.tsx
│   │   ├── summary.tsx
│   │   └── work-experience.tsx
│   ├── layout.tsx      # root layout with metadata
│   └── page.tsx        # main resume page
├── components/         # shared components
│   ├── icons/          # social icon components
│   └── ui/             # shadcn/ui components
├── data/               # resume data configuration
│   └── resume-data.ts
└── lib/                # utilities and types
    ├── structured-data.ts
    ├── types.ts
    └── utils.ts
```

## customization

all resume content lives in a single file:

```typescript
// src/data/resume-data.ts
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

styling uses tailwind css — customize colors in `tailwind.config.js` and global styles in `src/app/globals.css`.

## docker

```bash
docker compose build     # build the container
docker compose up -d     # run the container
docker compose down      # stop the container
```

## license

MIT. Based on the open-source [minimalist cv](https://github.com/BartoszJarocki/cv) template; see `LICENSE`.
