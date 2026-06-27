import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project is served from https://masonchoey.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
