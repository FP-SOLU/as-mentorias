import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 }, server: { strictPort: true }, preview: { strictPort: true } },
});
