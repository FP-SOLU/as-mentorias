# Evidência — Migração Tailwind (M1–M7) · Validação visual M8

**Data:** 2026-09-06 · **Executor:** @ui-specialist (escritor único do worktree na rodada) · **Build:** green (`npm test`: build + 5/5 testes após cada correção)

## 1. Versões instaladas (`npm ls`)

| Pacote | Versão |
|---|---|
| tailwindcss | 4.3.3 |
| @tailwindcss/vite | 4.3.3 (→ @tailwindcss/node 4.3.3) |

## 2. Arquivos migrados × âncoras intocadas

- **Migrados (M1–M7):** `src/styles/global.css` (novo: `@import "tailwindcss"` + @theme + @layer base + regras autorais), `src/pages/index.astro` (utilities), `src/layouts/DemoLayout.astro` (utilities). Runtime scripts intactos: `src/scripts/motion.ts`, `src/scripts/contact-info.ts`, `src/components/ContactAction.astro` (mtime 05/09 20:19–20:22).
- **Correções M8:** `global.css` (15:06) e `DemoLayout.astro` (14:51) — ver §7.
- **Âncoras intocadas:** `src/styles/base.css` — mtime **05/09 20:44:53**; `src/styles/presence.css` — mtime **06/09 11:39:07** (ambos anteriores às capturas pre de 13:01 e sem modificação durante M8).

## 3. Mapa de equivalência preflight (resumo)

- Margens de body/p/h1–h3/figure e `box-sizing` — cobertos pelo preflight v4 (`margin:0`/`border-box`); regra autoral `margin:0` da âncora não precisa de réplica.
- Reset de peso/família dos headings pelo preflight (`font-weight:inherit`, sem `font-family`) — **compensado na M8** com `h1, h2, h3 { font-family: var(--font-display); font-weight: 600 }` (equivalente byte-a-byte a base.css:9).
- `body` (font/color/background/line-height/font-synthesis), `a`, `::selection`, `:focus-visible` (3px/offset 5), `button` (min-height 3.5rem, radius 4, paleta), `.skip-link`, `.text-link`, `.contact-action`, `.open-space`, `.situations-lines` (escada byte-idêntica), `.presence*`, `.practice*`, `.next-step*`, `.contact-info*`, `.media-unavailable` e `prefers-reduced-motion` — todos presentes no compilado `index.olLTcAkD.css`.
- `provenance`, `practice-copy`, `situations-intro p`, tamanhos de headings — migrados para utilities equivalentes (`text-base mt-6`, `max-w-[48ch]`, `text-[clamp(...)]`, etc.).
- Espaçamentos responsivos (`px-gutter`, `py-12 sm:py-20 sm:pb-22`) equivalentes ao `padding` da âncora (gutter clamp 1.25–5rem).

## 4. Tabela antes/depois por viewport (medidas a–f)

Referências pré-migração do operador (base do "antes"). "Depois" = build final (após correções §7).

| Viewport | a) escada li2/li3 | b) Δ centro `ul.situations-lines` | c) right dos 4 blocos | d) h1 (x/y/w/h) | e) overflow | f) CTA / nav |
|---|---|---|---|---|---|---|
| 1920×1080 | pre 32/64 → **matrix(1,0,0,1,32,0) / (1,0,0,1,64,0)** ✓ | pre ≤0,01 → **0** ✓ | pre 1840 → **1840/1840/1840/1840** ✓ | — | pre 0 → **0** ✓ | pre 56/44 → **56,56 / 44,44** ✓ |
| 1440×900 | ✓ idem | pre ≤0,01 → **−0,008** ✓ | pre 1368 → **1368 / 1367,98 / 1368 / 1368** ✓ | pre 72/145/1257,4/320,7 → **72/145/1257,38/320,67** ✓ | **0** ✓ | **56,56 / 44,44** ✓ |
| 768×1024 | **32/64** ✓ | — (sem ref. numérica pré) | — (não-wide; `presence-field` padding-top 305px conforme range 600–1099 ✓) | — | **0** ✓ | **56,56 / 44,44** ✓ |
| 390×844 | **32/64** ✓ | Δ 0 (ul ocupa a largura do conteúdo) | — | — | **44** ⚠️ pré-existente (§8) | **56,56 / 44,44** ✓ |
| 320×844 | **32/64** ✓ | Δ 0 (li3 right 364 = 320+44) | — | — | **44** ⚠️ pré-existente (§8) | **56,56 / 44,44** ✓ |

g) **Foco (via teclado, Tab físico):** skip-link, 2 nav links e os 2 CTAs ("Conversar sobre meu momento") → `outline 3px solid, offset 5px` em todos ✓ (hero: cor reverse; closing: cor night — conforme âncora).
h) **Console:** 0 erros / 0 warnings na sessão inteira (incl. reloads, reduced-motion, fallback) ✓. **Requisições:** todas para `http://127.0.0.1:4321` (zero externas; 200/304 apenas) ✓. **Fontes:** `document.fonts.check('600 32px Bricolage')` = true em h1, h2#situacoes, h2#atuacao, h3 next-step, h2#contact-heading ✓ (pós-correção §7.2).

## 5. Reduced-motion e fallback de mídia (build final)

- **Reduced-motion (emulado + reload + scroll 600/800/1400):** `.sculpture` e `.sculpture img` com computed transform `none`; **nenhum transform inline aplicado** pelo parallax (o `!important` do media query da âncora — replicado em global.css — vence; a utilitária `motion-reduce:transform-none!` no img reforça). CTA continua com outline 3px ✓.
- **Fallback (img com `error` despachado):** classe `media-unavailable` aplicada ao `.sculpture` ✓; `visibility: hidden` ✓; `.presence-field` padding-top **200px → 0px** em <1100 (regra `:has` ✓); CTA habilitado/funcional ✓; undo via reload — classe removida, estado restaurado ✓.

## 6. CSS compilado raw/gzip

| Estado | Raw | Gzip |
|---|---|---|
| M7 (referência do operador) | 20.933 B | 5.405 B |
| Pós-M8 (build final, `dist/_astro/index.olLTcAkD.css`) | **21.095 B** | **5.433 B** |

Δ +162/+28 B — integralmente explicado pelas correções §7 (`.leading-normal` utility, `padding-top:1rem`, regra `h1,h2,h3`). Nenhuma inch unexpected.

## 7. Correções aplicadas na M8 (regressões reais detectadas)

1. **Hero h1 deslocado −9px** (y 136 vs ref 145 em 1440): (a) `global.css .presence` `padding-top: .5rem` → **`1rem`** (âncora presence.css:1 tinha `1rem`); (b) header 128→129 px: `text-sm` do Tailwind aperta line-height para 20px (âncora: 21px) → adicionada `leading-normal` ao parágrafo do header em `DemoLayout.astro`. Resultado: h1 **x72/y145/1257,38/320,67 = referência exata**.
2. **Bricolage 600 perdido em 3 headings** (h2#atuacao, h3 do next-step, h2#contact-heading — o preflight reseta weight e não replica `font-family`): adicionado `h1, h2, h3 { font-family: var(--font-display); font-weight: 600; }` em `global.css @layer base` (equivale a base.css:9). Verificado `fonts.check` = true nos 5 headings.
- Após cada correção: `npm test` (build + 5/5), todas as medidas re-executadas e as 5 capturas `post-*` re-tomadas sobre o build final.

## 8. Observação pré-existente (não é regressão da migração) — decisão pendente do operador

Em **≤599px** a escada transborda à direita: li2 +12px, li3 +44px (scrollWidth−innerWidth = 44 em 390 e 320). As regras são **byte-idênticas** às da âncora (presence.css:96–97 ≡ global.css:97–98, com `transform: translateX(32/64px)` + `width: fit-content` sobre texto de ~350px) — o comportamento é o do pré-Tailwind. A referência "overflow 0" vale para ≥768. Corrigir aqui **alteraria o visual congelado do pré** — fora do escopo M8; sugerido: decisão do operador (ex.: reduzir escalada ou permitir clip em mobile) em rodada própria.

## 9. Leitura visual (modlens)

- Lidas com sucesso: **pre-1440 vs post-1440** (build pré-correção de fonte e re-leitura do final: estrutura, copy, ordem de blocos, escada, CTA dourado, rodapé — **sem diferenças visíveis**) e **pre-1920 vs post-1920** ("no obvious layout regression versus the pre-migration wide desktop capture is visible: header brand-left/nav-right, dark hero with gold-accented headline, ivory right column with gold CTA, three-line ladder, mineral two-column section, and footer all match"). 1 retry consumido em post-1440 (503→OK).
- **post-320: modlens falhou 2× (503 persistente)** — registrado e seguido conforme protocolo; coberto numericamente (§4) e por regras idênticas às âncoras.
- Obs. de OCR: "Que momento" transcrito "que momento" em uma leitura — variação de OCR do glifo Q; copy é HTML estático inalterado.

## 10. Capturas (verificadas por tamanho)

Pre (13:01, pré-migração): `W:\FP\as-mentoria-concept\.playwright-mcp\tailwind-mig\pre-{1920x1080,1440x900,768x1024,390x844,320x844}.png` (147–805 KB).
Post (15:08–15:09, build final): `...\tailwind-mig\post-{1920x1080,1440x900,768x1024,390x844,320x844}.png` (236–805 KB). Todos os 10 arquivos confirmados em disco.

## 11. Skills

- **Avaliadas, não carregadas:** `browser-debugging`/`playwright-interactive` (Playwright MCP nativo foi suficiente), `design-critique`/`checklist-design` (M8 é validação de paridade 1:1, não crítica de design), `web-accessibility` (acessibilidade integral fora de escopo). Nenhuma skill carregada; nenhuma exclusão indevida.

## 12. Limitações (o que a M8 NÃO valida)

WCAG integral (contraste, ordem de leitura, landmarks completos); critério CA-13; leitor de tela (NVDA/VoiceOver); DPR > 1 (screenshots em scale css, DPR 1); variantes de browser fora do Chromium do Playwright; renderização com fontes do sistema (fallback 'Segoe UI') sem Bricolage; overflow pré-existente em ≤599px foi caracterizado, não corrigido (§8).

## 13. Estado do servidor/job

Preview `npm run preview` (127.0.0.1:4321) executado como **job de fundo gerenciado** (`pwsh-3` → reiniciado como `pwsh-4` após rebuild da correção 1). Encerrado ao final da rodada via `job_kill` + verificação `Get-NetTCPConnection -LocalPort 4321` = **0 listeners**. Browser Playwright fechado.

## 14. Status

**MIGRATION_1TO1_VERIFIED** — com 2 correções mínimas documentadas (§7) e 1 observação pré-existente pendente de decisão do operador (§8).
