import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: '../postcss.config.js'
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://scd-guide-404532287411.us-central1.run.app'
          : 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})