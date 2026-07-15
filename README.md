# rawad.ai — Portfolio

Personal site for **Rawad Al Abboud**, ML/AI engineer and data scientist in Paris.

Production work (voice AI, RAG, predictive ML) plus open-source research repos, all in one place.

**Live site:** deploy from this repo (Vercel or GitHub Pages)

## Stack

- React 19 + TypeScript + Vite  
- Tailwind CSS v4 · Framer Motion · Lucide  
- Instrument Serif + DM Sans + IBM Plex Mono  

## Run locally

```bash
git clone https://github.com/rawadalabboud/rawad-portfolio.git
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

## Deploy

### Vercel (recommended)

1. Import repo on [vercel.com](https://vercel.com)  
2. Framework: **Vite** · Build: `npm run build` · Output: `dist`  

### GitHub Pages

```bash
# .env.production
VITE_BASE_PATH=/rawad-portfolio/
npm run deploy:gh
```

Enable **Pages** from the `gh-pages` branch.

## Content structure

| Path | Purpose |
|------|---------|
| `src/data/profile.ts` | Bio, links, CV path |
| `src/data/projects.ts` | Featured production projects |
| `src/data/openSource.ts` | Public GitHub repositories |
| `src/data/skills.ts` | Skills by domain and depth |
| `src/data/experience.ts` | Work history |
| `src/data/certifications.ts` | Credentials |
| `src/data/blog.ts` | Blog metadata |
| `src/content/blog/` | Blog MDX-style content |
| `public/brand/` | Logo SVGs and brand notes |

## Related repositories

| Repo | Topic |
|------|-------|
| [partema-eeg-analysis](https://github.com/rawadalabboud/partema-eeg-analysis) | EEG / rTMS research |
| [bank-rag-lbp](https://github.com/rawadalabboud/bank-rag-lbp) | French banking RAG |
| [bank-nlp-assistant](https://github.com/rawadalabboud/bank-nlp-assistant) | Intent + RAG NLP |
| [mlops-fake-news](https://github.com/rawadalabboud/mlops-fake-news) | MLOps API demo |
| [InternshipM2](https://github.com/rawadalabboud/InternshipM2) | Parkinson's EEG ML |
| [ftrsgt-online](https://github.com/rawadalabboud/ftrsgt-online) | Online neuropsych task |
| [tdbrain_dl](https://github.com/rawadalabboud/tdbrain_dl) | TDBrain CNN features |

## Author

**Rawad Al Abboud**  

- GitHub: [@rawadalabboud](https://github.com/rawadalabboud)  
- LinkedIn: [rawad-al-abboud](https://www.linkedin.com/in/rawad-al-abboud/)

## License

© Rawad Al Abboud. All rights reserved.
