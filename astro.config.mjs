import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'

import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://bsscontracting.us',

  image: {
    domains: ['images.unsplash.com']
  },

  prefetch: true,

  integrations: [
    tailwind(),
    sitemap(),
    compressor({
      gzip: false,
      brotli: true
    })
  ],

  experimental: {
    svg: true
  },

  output: 'server',
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: [320, 640, 1280]
    }
  })
})
