import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel and Netlify: leave `base` as-is, they auto-detect Vite.
  // GitHub Pages PROJECT site (username.github.io/repo-name): uncomment
  // the line below and swap in your actual repo name.
  // base: '/your-repo-name/',
})
