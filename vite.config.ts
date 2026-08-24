import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set BASE_PATH=/your-repo-name/
const basePath = process.env.BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
})
