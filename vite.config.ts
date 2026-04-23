import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('react-router')) return 'vendor-router'
          if (
            id.includes('react-dom') ||
            id.includes('scheduler') ||
            id.includes('/react/')
          ) {
            return 'vendor-react'
          }
          return undefined
        },
      },
    },
  },
})
