// @ts-check
import { defineConfig, envField, passthroughImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env: {
    schema: {
      SPEAKER_FORM_URL: envField.string({ context: "client", access: "public", optional: true }),
      BUY_TICKET_URL: envField.string({ context: "client", access: "public", optional: true }),
      DOMAIN: envField.string({ context: "client", access: "public", optional: true }),
      ENV: envField.string({ context: "client", access: "public", optional: true })
    }
  },
  image: {
    service: passthroughImageService()
  }
});