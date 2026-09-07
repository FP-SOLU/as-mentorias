# One-page — validação visual estrutural + leitura (T05 5b-8)

- **Data:** 2026-09-06 · **Owner:** @ui-specialist (único escritor da rodada) · **Base:** build 5b-7 green (typecheck 0, lint 0, test 4/4+5/5, build OK, CSS 5.600 B gzip). `dist/index.html` (15:41:52) mais novo que todo `src/` (último 15:37:23) — build corrente confirmado por mtime.
- **Escopo da página:** one-page T05 5b completa — presence (h1 + sculpture cerebro-final + CTA hero + link) → situations (escada 3 linhas) → practice (bg-mineral + provenance) → next-step (div em practice, CTA closing) → about (retrato Amanda-xadrez lazy) → repertoire (citação) → contact-info (região única dos CTAs). Tailwind v4 + autorais M4–M6.
- **Ambiente:** `npm run preview` (job DSH `pwsh-5`) em http://127.0.0.1:4321 — HTTP 200; Chromium via Playwright MCP; DPR 1.

## Estrutura por viewport

| Check | 1920×1080 | 1440×900 | 768×1024 | 390×844 | 320×844 |
|---|---|---|---|---|---|
| Overflow (scrollWidth−innerWidth, doc/body) | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| Overflow após ciclo CTA | — | — | 0 | 0 | 0 |
| Ordem DOM (main) | presence→situations→practice→about→repertoire→contact-info (idem em 1440; scripts depois) | idem | idem | idem | idem |
| next-step dentro de practice | sim | sim | — | — | — |
| Escada li (translateX computado) | 0/32/64 px | 0/32/64 px | 0/32/64 px | **0/8/16 px** (fix 5b-0 ≤599px) | **0/8/16 px** |
| Âncoras 4/4 (clique/Enter, foco no h2 + scroll muda) | 4/4 | 4/4 | 4/4 | 4/4 | 4/4 |
| Nav links altura (min 44) | 44 | 44 | 44 | 44 | 44 |
| Botões CTA altura (56) | 56 | 56 | 56 | 56 | 56 |
| CTA abrir→foco `#contact-heading`, região visível; fechar→foco no trigger, região hidden, aria-expanded sincronizado | ✓ (hero e closing, 2× cada) | ✓ (2× cada) | ✓ | ✓ | ✓ |
| Requisições durante ação CTA | 0 | 0 | 0 | 0 | 0 |
| Console erros/warnings | 0 | 0 | 0 | 0 | 0 |
| Requisições 100% 127.0.0.1 (9/9) | ✓ | ✓ | ✓ | ✓ | ✓ |
| Fontes (fonts.check Bricolage 600 / SS3 400) | ✓/✓ | ✓/✓ | ✓ | ✓ | ✓ |

- **Foco visível (via teclado Shift+Tab/Tab):** outline `3px solid`, offset 5px, cor reverse `rgb(244,239,226)` no CTA em presence — medido em 1920, 1440 e 320 (pior caso). Nota de método: foco programático sem teclado não ativa `:focus-visible` (style `none` esperado); evidência válida é o caminho por teclado.
- **Imagens:** sculpture = webp derivado de `cerebro-final.png` **1536×1024 base** (IHDR verificado); srcset escolhe 1100 (1440/1920), 467 (390). Retrato Amanda carrega lazy ao rolar (nw 480/351/288 por viewport).
- **Repetição CTA:** idempotente (rodada 2 igual à 1). Nota: no closing, rodada 1 marca `scrollRestored=false` apenas porque o Playwright auto-scrollou até o trigger antes do clique; o retorno é para a posição do trigger na abertura (contrato implementado) e a rodada 2 restaura exatamente.

## Reduced motion e fallbacks de mídia

- **Reduced-motion (emulado, 1440 e 390):** transform inline do `.sculpture` vazio após scroll (300px e 900px), `transform: none` computado no img (`motion-reduce:transform-none!` presente), sem animação do seam; página legível. Capturas `reduced-1440.png` / `reduced-390.png`.
- **Fallback escultura (bloqueio `cerebro-final*`):** 1440 e 390 — classe `media-unavailable`, `presence-field` padding-top **0px** (ramo ≤1099: 200→0 confirmado no 390), overflow 0, CTA abre/fecha com foco correto; **recuperado** após desbloqueio (nw 1100 / 467, overflow 0). Capturas `fallback-sculpture-1440.png` / `fallback-sculpture-390.png`.
- **Fallback retrato Amanda (bloqueio `amanda-xadrez*`, 1440):** alt íntegro (“Amanda Schurnovski, mentora de comunicação, liderança e carreira”), nome visível, about-grid 531px / seção 769px (sem buraco gigante), overflow 0; **recuperado** (nw 480). Captura `fallback-amanda-1440.png`.
- Entradas de console durante os bloqueios são apenas o ruído esperado de resource abortado; loads limpos = 0 erros/warnings.

## Capturas e leitura visual (modlens)

Base absoluta: `W:\FP\as-mentoria-concept\.playwright-mcp\onepage\` (12 arquivos verificados existentes).

| Arquivo | Conteúdo | Leitura visual |
|---|---|---|
| `full-1920x1080.png` / `full-768x1024.png` | fullpage | não lidas por modlens (bateria estrutural completa) |
| `full-1440x900.png` | fullpage desktop | **LIDA**: ritmo claro, escada legível, retrato íntegro, citação legível, CTA visível, sem texto cortado/sobreposto; única ressalva: arte sobrepõe área do título por trás — texto permanece legível (véus previstos) |
| `full-390x844.png` | fullpage mobile | **LIDA**: coluna única com ritmo ok, escada presente, retrato íntegro, citação legível, CTA visível, sem corte horizontal/sobreposição |
| `sec-1440-about.png` / `sec-1440-repertoire.png` / `sec-1440-next-step.png` | seções | **LIDAS** about (retrato sem distorção, sem sobreposição foto/texto) e repertoire (citação/atribuição/provenance legíveis); next-step capturada |
| `reduced-*.png`, `fallback-*.png` | estados | capturadas como evidência |

## Critérios de rejeição — nenhum ocorrido

Sem texto sobreposto/cortado; retrato sem distorção (aspect ratio natural, rosto íntegro nas leituras); sobreposição da arte apenas a prevista (véus, texto legível); citação legível; CTAs visíveis; overflow 0 em todos; foco visível 3px; console limpo. **Correções de código: nenhuma.**

## Skills avaliadas

- `checklist-design` / `design-critique`: **avaliadas, não carregadas** — a micro-task fixou rubrica própria de rejeição (equivalente ao modo critique) e não pede decisão de direção/audit integral; leitura das capturas seguiu a rubrica + modlens. Reavaliar em T07 (autovalidação integral) conforme política de skills do tasks.md.

## Limitações (esta validação NÃO cobre)

WCAG 2.2 integral (contraste total, reflow 400%, zoom 200%); CA-13 (perf/latência); leitor de tela; DPR>1/retina; QA independente (T09). Firewalls de método: 1 rodada, DPR 1, Chromium único.

## Servidor

- `npm run preview` subiu como job gerenciado DSH `pwsh-5` (127.0.0.1:4321, HTTP 200 confirmado); **encerrado via job_kill ao final** + verificação de porta livre (ver resposta ao Maestro).
