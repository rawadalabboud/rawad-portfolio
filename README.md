# Rawad Al Abboud — Portfolio

Production-ready personal portfolio for **Rawad Al Abboud** — ML/AI Engineer, Data Scientist & GenAI Developer.

Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Run locally

```bash
cd rawad-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Leave `VITE_BASE_PATH` unset (defaults to `/`).

## Deploy on GitHub Pages

1. Install gh-pages (one-time):

   ```bash
   npm install -D gh-pages
   ```

2. Create `.env.production`:

   ```env
   VITE_BASE_PATH=/rawad-portfolio/
   ```

   Replace `rawad-portfolio` with your repository name.

3. Deploy:

   ```bash
   npm run deploy:gh
   ```

4. In GitHub repo **Settings → Pages**, set source to `gh-pages` branch.

## Placeholders to replace

| Item | Where to edit |
|------|----------------|
| GitHub URL | `src/data/profile.ts` → `links.github` |
| LinkedIn URL | `src/data/profile.ts` → `links.linkedin` |
| CV PDF | Add `public/cv_rawad_al_abboud.pdf` (see `public/CV_README.txt`) |
| Profile photo | Replace initials avatar in `src/components/Hero.tsx` |
| Project links | `src/data/projects.ts` → each `links` object |
| Blog URLs | `src/data/blog.ts` → `href` per post |

## Project structure

```
src/
├── data/           # Editable content (projects, skills, experience, etc.)
├── components/     # UI sections
│   └── ui/         # Reusable primitives
├── hooks/          # useCountUp, useActiveSection
├── App.tsx
├── main.tsx
└── index.css       # Theme tokens & utilities
```

## Files created

- Config: `vite.config.ts`, `package.json`, `index.html`, `.env.example`
- Data: `src/data/*.ts`
- Components: BootScreen, Navbar, Hero, Stats, Projects, ProjectCard, About, Skills, ExperienceTimeline, Writing, Contact, Footer
- UI: SectionLabel, GradientText, Tag, GlowCard, ProjectCover
- Public: `favicon.svg`, `CV_README.txt`

## License

Private portfolio — all rights reserved.
