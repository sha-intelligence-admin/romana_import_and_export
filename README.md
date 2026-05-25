# Romana Import & Export

Marketing site for Romana Import and Export Limited. Built with Vite + React, Tailwind CSS, and Lucide React. Contact form wired to Formspree.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploy to Vercel

### Option A — Git integration (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to https://vercel.com/new and import the repository.
3. Vercel auto-detects Vite. Settings are already pinned in `vercel.json`:
   - Framework: **Vite**
   - Build: `npm run build`
   - Output: `dist`
4. Click **Deploy**. Every push to the default branch redeploys automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel        # first run links the project
vercel --prod # deploy to production
```

## Configuration

- `vercel.json` — framework, build settings, SPA rewrites, long-term caching for `/assets/*`.
- `.vercelignore` — excludes local artefacts from upload.
- Node ≥ 18 (pinned in `package.json` engines).

## Formspree

The contact form posts to `https://formspree.io/f/xwvzroww` (see [src/components/Contact.jsx](src/components/Contact.jsx)). Update the `FORMSPREE_ENDPOINT` constant to change the destination.

No environment variables are required for deployment.
