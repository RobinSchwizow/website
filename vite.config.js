import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/website/', // Change to '/rs-tech/' if deploying to GitHub Pages subfolder
})
