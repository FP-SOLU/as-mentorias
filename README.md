# AS Mentorias — conceito demo (FP Solutions)

Protótipo de site one-page criado pela FP Solutions como **conceito/demo** para a AS Mentorias. Não é o site oficial da AS e não contém claims comerciais.

## Stack

- [Astro](https://astro.build) 7.x (output estático / SSG)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Animações via Web Animations API (motion), com respeito a `prefers-reduced-motion`
- Fontes locais (Bricolage Display, Source Sans 3 — OFL, licenças em `src/fonts/`)

## Comandos

```bash
npm ci
npm run dev        # http://127.0.0.1:4321 (raiz)
npm run build      # gera dist/
npm run preview    # serve o build em http://127.0.0.1:4321
npm test           # unit + integration
```

## Deploy (GitHub Pages)

`.github/workflows/deploy-pages.yml` publica `dist/` no Pages a cada push em `main`
(ou `workflow_dispatch`). O build usa `DEPLOY_BASE=/as-mentorias` e
`DEPLOY_SITE=https://fpsolu.github.io` via env — o preview local continua na raiz.

## Privacidade

Página de demo com `robots: noindex,nofollow` — não indexável.
