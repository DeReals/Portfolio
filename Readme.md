# David Ogunbanjo — Portfolio

A single-page portfolio built with React, Vite, Tailwind CSS, and Framer
Motion. Content (bio, experience, projects, skills) lives in one file so
you can update it without touching any component code.

## Before you deploy — 3 things to fill in

1. **Project links.** Open `src/data/content.js` and find the `projects`
   array. Each project has a `github` (and optional `live`) URL — these are
   placeholders right now. Point them at your real repos and, if you've
   deployed Ledger or the Security+ platform live, add those URLs too. Set
   `live: ""` to hide the Live Demo button for a project that isn't
   deployed.
2. **Project screenshots (optional).** Project cards currently use a
   colored tag instead of a screenshot. To add real images, drop a
   screenshot or GIF in `public/projects/`, then add an `image` field to
   that project in `content.js` and reference it in `ProjectCard` (see the
   comment in `src/components/Projects.jsx`).
3. **Contact form.** The form works out of the box by opening a pre-filled
   email — no setup required. To have it submit silently instead, create a
   free form at [formspree.io](https://formspree.io), then paste your form
   ID into `formspreeId` in `src/data/content.js`.

## Run it locally

\`\`\`bash
npm install
npm run dev
\`\`\`

Opens at `http://localhost:5173`. Edit any file and the page hot-reloads.

To sanity-check the production build before deploying:

\`\`\`bash
npm run build
npm run preview
\`\`\`

## Deploy

This is a static site — no server needed. Pick whichever host you like;
all three work with zero extra config beyond what's noted below.

### Vercel (easiest)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite. Click Deploy.

### Netlify

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" →
   "Import an existing project".
3. Build command: `npm run build`. Publish directory: `dist`. Deploy.

### GitHub Pages

A ready-to-go workflow is already included at
`.github/workflows/deploy.yml`.

1. Push this repo to GitHub.
2. If it's a **project** repo (URL will be
   `username.github.io/repo-name`), open `vite.config.js` and uncomment
   the `base` line, replacing `your-repo-name` with your actual repo name.
   Skip this step if you're deploying to a **user** site
   (`username.github.io`) or a custom domain.
3. In the repo, go to **Settings → Pages → Source** and select
   **GitHub Actions**.
4. Push to `main` — the workflow builds and deploys automatically. Check
   the **Actions** tab for progress and the live URL.

## Project structure

\`\`\`
src/
├── data/content.js      All copy: bio, experience, projects, skills
├── components/          One file per section (Hero, Projects, etc.)
├── hooks/                useActiveSection.js powers the nav scroll-spy
└── index.css             Design tokens, fonts, base styles
\`\`\`

Everything reads from `content.js`, so updating your bio, adding a new
job, or swapping a project doesn't require touching JSX.

## Stack

React 18 · Vite · Tailwind CSS · Framer Motion · lucide-react

Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono) are self-hosted via
`@fontsource`, latin subset only, so there's no external font request at
runtime. Production build is ~780 KB total including the resume PDF.
