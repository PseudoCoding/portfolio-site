import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { LikeC4VitePlugin } from 'likec4/vite-plugin'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), LikeC4VitePlugin({}), cloudflare(), Sitemap({ hostname: 'https://pseudocoding.xyz' })],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },

  build: {
    /**
     * Split vendor libraries into separate chunks so the browser can cache
     * them independently from application code.
     *
     * framer-motion is the largest dep (~250 KB gz); isolating it means that
     * code changes to components don't bust the animation library cache.
     */
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'vendor-react', test: /node_modules[\\/](react|react-dom)[\\/]/, priority: 20 },
            { name: 'vendor-motion', test: /node_modules[\\/]framer-motion[\\/]/, priority: 10 },
            { name: 'vendor-icons', test: /node_modules[\\/]lucide-react[\\/]/, priority: 10 },
          ],
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