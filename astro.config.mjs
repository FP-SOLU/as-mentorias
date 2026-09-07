import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Pages build usa env vars; undefined preserva comportamento local (raiz /).
const site = process.env.DEPLOY_SITE || undefined;
const base = process.env.DEPLOY_BASE || undefined;

export default defineConfig({
  output: 'static',
  site,
  base,
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 }, server: { strictPort: true }, preview: { strictPort: true } },
});
