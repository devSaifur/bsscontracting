import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import compressor from 'astro-compressor'

export default defineConfig({
  site: 'https://screwfast.uk',
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
  }
})
