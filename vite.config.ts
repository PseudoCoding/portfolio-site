import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare(), Sitemap({ hostname: 'https://pseudocoding.xyz' })],

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