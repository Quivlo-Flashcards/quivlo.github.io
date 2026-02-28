import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: set base to your repo name when deploying (e.g. in CI: VITE_BASE_PATH=/QuivloWebsite/).
// Default '/' works for local dev and custom domains; CI overrides this.
const BASE_PATH = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  build: {
    outDir: 'dist',
  },
})
