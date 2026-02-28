# Quivlo: Marketing Website

Marketing site for the Quivlo iOS app. Built with React, TypeScript, Vite, and Tailwind CSS. Deployable to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). In development the base path is `/` so the app loads at the root. For production (e.g. GitHub Pages), the build uses base path `/QuivloWebsite/` unless overridden. To test a different base locally, create a `.env` file:

```env
VITE_BASE_PATH=/
```

Then run `npm run dev` again.

## Replace App Store link

1. **Option A: env (recommended)**  
   Create `.env` in the project root:
   ```env
   VITE_APP_STORE_URL=https://apps.apple.com/app/quivlo/idYOUR_APP_ID
   ```

2. **Option B: code**  
   Edit `src/config.ts` and set `APP_STORE_URL` to your App Store URL.

Rebuild after changing: `npm run build`.

## Add screenshots

1. **Gallery (3 screenshots):** Add under `public/screenshots/`:
   - `screenshot-1.png`: Home screen
   - `screenshot-2.png`: Preview of a flashcard
   - `screenshot-3.png`: My Cards library

2. **Hero:** Rolling carousel of flashcards. No image required.

3. To change filenames or add more gallery items, edit `src/data/screenshots.ts`.

## Deploy to GitHub Pages

### Option 1: GitHub Actions (recommended)

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` will build and deploy.

The site will be available at:

`https://<your-username>.github.io/<repo-name>/`

Example: `https://myuser.github.io/QuivloWebsite/`

The workflow sets `VITE_BASE_PATH=/${{ github.event.repository.name }}/` so the base path always matches your repo name. To use a fixed path (e.g. `/quivlo/`), edit the `env` block in `.github/workflows/deploy.yml` and set `VITE_BASE_PATH: '/quivlo/'`.

### Option 2: Manual deploy with `gh-pages`

1. Install and build:
   ```bash
   npm install
   npm run build
   ```

2. Deploy the `dist` folder to the `gh-pages` branch:
   ```bash
   npx gh-pages -d dist
   ```

3. In GitHub: **Settings → Pages**, set **Source** to the `gh-pages` branch (root or `/ (root)`).

For a project site (e.g. `username.github.io/QuivloWebsite`), the build must use the same base path. Set it before building:

- Windows (PowerShell): `$env:VITE_BASE_PATH="/QuivloWebsite/"; npm run build`
- macOS/Linux: `VITE_BASE_PATH=/QuivloWebsite/ npm run build`

Then run `npx gh-pages -d dist` as above.

## Change base path

- **Vite (build):** In `vite.config.ts`, change the default in:
  `const BASE_PATH = import.meta.env.VITE_BASE_PATH ?? '/QuivloWebsite/'`
  or set `VITE_BASE_PATH` when running `npm run build` (e.g. in GitHub Actions or in your shell).
- **GitHub Actions:** In `.github/workflows/deploy.yml`, the build step uses:
  `VITE_BASE_PATH: /${{ github.event.repository.name }}/`
  So the base path follows the repo name. To force a fixed path, replace that with e.g. `VITE_BASE_PATH: '/quivlo/'`.

## Scripts

| Command        | Description                |
|----------------|----------------------------|
| `npm run dev`  | Start dev server           |
| `npm run build`| Production build to `dist` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and push to `gh-pages` (manual deploy) |

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Responsive, mobile-first layout
- Dark/light theme toggle
- SEO meta tags and OpenGraph placeholders in `index.html`

## License

Private / All rights reserved.
