// @ts-check
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, envField, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@shared': fileURLToPath(new URL('../../packages/shared', import.meta.url)),
        'tailwind-merge': fileURLToPath(new URL('./node_modules/tailwind-merge', import.meta.url))
      }
    }
  },
  env: {
    schema: {
      BUY_TICKET_URL: envField.string({ context: "client", access: "public", optional: true }),
      DOMAIN: envField.string({ context: "client", access: "public", optional: true }),
      ENV: envField.string({ context: "client", access: "public", optional: true })
    }
  },
  image: {
    service: passthroughImageService()
  }
});
