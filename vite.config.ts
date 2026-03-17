import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    /**
     * Split vendor libraries into separate chunks so the browser can cache
     * them independently from application code.
     *
     * framer-motion is the largest dep (~250 KB gz); isolating it means that
     * code changes to components don't bust the animation library cache.
     */
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
          'vendor-utils': ['react-intersection-observer'],
        },
      },
    },
    /**
     * Raise the warning threshold slightly — our app bundle is ~250 KB gz
     * after chunking, which is reasonable for a portfolio with rich animations.
     */
    chunkSizeWarningLimit: 600,
  },
})
