import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths so assets load seamlessly on domain roots, subfolders, addon domains, or cPanel preview URLs
})
