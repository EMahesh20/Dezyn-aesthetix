import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace this with your actual repo name on GitHub
const repoName = '/Dezyn-aesthetix/'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
  server: { port: 3000, open: false },
  preview: { port: 3000 }
})

