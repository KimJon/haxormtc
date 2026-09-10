import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Use root-absolute paths so assets resolve cleanly from all routes (/services, /software, etc.) on domain
})
