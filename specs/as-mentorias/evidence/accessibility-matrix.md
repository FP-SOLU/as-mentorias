# Matriz de Acessibilidade — T07a (code-level, Track B1) + T07b (render, Track B2)

- **Revisão medida (B1):** build `dist/` T05 5b (CSS emitido `index.C5KzCR0X.css`). Todas as medições estáticas valem para ESTA revisão; revalidação renderizada feita na B2 (abaixo).
- **Revisão medida (B2 render):** build `dist/` T07b — CSS emitido `index.4kke3gSc.css` (final do T06/reveals WAAPI **+ correção 1.4.1 underline** aplicada nesta rodada). Todas as medições renderizadas valem para ESTA revisão.
- **Método B1:** leitura estática de `dist/index.html`, `dist/_astro/index.C5KzCR0X.css`, `src/styles/global.css`, `src/scripts/contact-info.ts`, `src/scripts/motion.ts`. Sem render, sem leitor de tela, sem Playwright, sem servidor.
- **Método B2:** render real via Playwright contra `npm run preview` (127.0.0.1:4321); `prefers-reduced-motion: reduce` emulado para estados finais determinísticos (reveals WAAPI são decorativos e gated). Contraste por pixel com método T03 (texto `color: transparent !important` → pior pixel WCAG do bbox do texto, stride 2px, vs cor computada). Brutos e JSONs em `.playwright-mcp/t07-render/`.
- **Norma WCAG 2.2:** tentativa de acesso a `w3.org/TR/WCAG22/` e `w3.org/WAI/WCAG22/quickref/` — **ILEGÍVEL** (4 tentativas de fetch, ver log abaixo). Precedente T01 + regra plan §7: **revisão integral dos critérios contra o texto da norma = BLOCKED-pending. Nenhum status abaixo afirma conformidade WCAG.**
- **Vocabulário de status:** `PASS-code` (evidência estática no código) · `PASS-render` (evidência renderizada B2, método + bruto referenciado) · `PEND-*` · `N/A` (justificado) · `BLOCKED-norma` (depende do texto da norma, inacessível).

## Log de tentativas de acesso à norma (brutos: nada legível foi salvo)

| Tentativa | URL | Resultado |
|---|---|---|
| 1 | `https://www.w3.org/TR/WCAG22/` (readability default) | Erro: "No readable content was extracted from this URL" |
| 2 | `https://www.w3.org/TR/WCAG22/` (readability=true) | Mesmo erro |
| 3 | `https://www.w3.org/TR/WCAG22/` (readability=false) | Mesmo erro |
| 4 | `https://www.w3.org/WAI/WCAG22/quickref/` | Mesmo erro |
| 5 | `https://www.w3.org/WAI/standards-guidelines/wcag/` (página WAI leve, teste de controle) | Mesmo erro |

Interpretação honesta: nem o shell nem critérios foram legíveis; falha consistente do domínio w3.org para este fetcher. **Não foi possível citar texto da norma nesta rodada.** Raw da norma: nenhum arquivo salvo (não houve conteúdo); `.playwright-mcp/t07-a11y/` permanece sem brutos desta tentativa.

## Contraste ESTÁTICO por par de tokens (B1, fórmula WCAG; validação pixel real → B2, feita abaixo)

| Par (texto / fundo) | Hex | Razão | AA normal (≥4.5) | AA grande/UI (≥3) |
|---|---|---|---|---|
| ink / paper | `#070910` / `#f4efe2` | 17.33:1 | OK | OK |
| reverse / night (header, presença) | `#f4efe2` / `#070910` | 17.33:1 | OK | OK |
| muted / paper (provenance, footer) | `#50576a` / `#f4efe2` | 6.28:1 | OK | OK |
| muted / mineral (provenance na seção practice) | `#50576a` / `#e4dcc8` | 5.28:1 | OK | OK |
| reverse-muted / night (aviso demo) | `#d5cfbf` / `#070910` | 12.80:1 | OK | OK |
| night / gold (CTA presença, texto sobre botão) | `#070910` / `#f3d386` | 13.71:1 | OK | OK |
| night / gold-hover | `#070910` / `#ffe3a4` | 15.89:1 | OK | OK |
| night / gold-active | `#070910` / `#d8b96f` | 10.50:1 | OK | OK |
| reverse / night-hover (hover botão base) | `#f4efe2` / `#232c45` | 12.06:1 | OK | OK |
| ink / mineral (corpo na seção practice) | `#070910` / `#e4dcc8` | 14.56:1 | OK | OK |
| gold / night (span do h1) | `#f3d386` / `#070910` | 13.71:1 | OK | OK |

Menor par: 5.28:1 — todos os pares token ≥ AA no estático. **Não cobre** overlays/gradientes `.sculpture::after`, `opacity-[.68]` da imagem sob o h1/CTA, nem `outline currentColor` sobre cada superfície — resolvido no B2 abaixo.

## Contraste RENDER por região (B2, método T03: pior pixel vs cor computada; 1440×900 e 390×844)

| Região | Cor texto | Pior ratio 1440 | Pior ratio 390 | Threshold | Veredito |
|---|---|---|---|---|---|
| h1 sobre escultura+véus | reverse | 17.66:1 | 17.52:1 | 3.0 (grande) | PASS |
| h1 span gold | gold | 13.99:1 | 13.77:1 | 3.0 (grande) | PASS |
| apoio hero | reverse | 17.74:1 | 17.33:1 | 4.5 | PASS |
| label CTA (night sobre gold) | night | 13.71:1 | 13.71:1 | 4.5 | PASS |
| notice CTA | reverse | 17.33:1 | 17.33:1 | 4.5 | PASS |
| intro situações | ink | 17.33:1 | 17.33:1 | 4.5 | PASS |
| parágrafo abordagem (mineral) | ink | 14.56:1 | 14.56:1 | 4.5 | PASS |
| proveniência (practice, mineral) | **ink (render; não muted)** | 14.56:1 | 14.56:1 | 4.5 | PASS |
| bio Amanda (paper) | ink | 17.33:1 | 17.33:1 | 4.5 | PASS |
| proveniência (about, paper) | muted | 6.28:1 | 6.28:1 | 4.5 | PASS |
| citação | ink | 17.33:1 | 17.33:1 | 3.0 (≥24px) / 4.5 (390, 22px) | PASS |
| citação autora | muted | 6.28:1 | 6.28:1 | 4.5 | PASS |
| proveniência temas | muted | 6.28:1 | 6.28:1 | 4.5 | PASS |
| h3 next-step | ink | 14.56:1 | 14.56:1 | 3.0 (grande) | PASS |
| footer p1/p2 | muted | 6.28:1 | 6.28:1 | 4.5 | PASS |
| demo-context header | reverse-muted | 12.80:1 | 12.80:1 | 4.5 | PASS |
| link nav | reverse | 17.33:1 | 17.33:1 | 4.5 | PASS |

**36/36 medições PASS; pior geral = 6.28:1 (muted sobre paper).** Correções vs estimativa B1: `.provenance` da seção practice computa **ink** (não muted) no render → par real ink/mineral 14.56:1 (a linha "muted/mineral 5.28" da tabela B1 não corresponde a nenhum elemento renderizado). Brutos: `b2-contrast-{1440,390}-manifest.json` / `-results.json` + 18 screenshots por viewport; texto do `#contact-info` fechado = N/A nesta rodada (fundo paper, par idêntico ao já medido; estado aberto → T09).

## Inventário WCAG 2.2 A/AA (B1 code-level + B2 render)

| Critério | Método | Evidência | Status |
|---|---|---|---|
| 1.1.1 Non-text Content | leitura HTML | retrato `alt="Amanda Schurnovski, mentora de comunicação, liderança e carreira"` (factual, sem inferir competência); escultura `alt` vazio dentro de `.sculpture[aria-hidden="true"]`; `.open-space[aria-hidden="true"]` | PASS-code |
| 1.2.1–1.2.5 (mídia) | inspeção de assets | página sem `<audio>`/`<video>`/track | N/A — sem mídia |
| 1.3.1 Info and Relationships | leitura HTML | `header`/`nav[aria-label]`/`main#conteudo`/`footer`; 1×`h1#titulo`; h2 ×5 (`#situacoes,#atuacao,#amanda,#temas,#contact-heading`) + 1 h3, sem salto; `section[aria-labelledby]`; `ul/li`, `blockquote>footer` | PASS-code |
| 1.3.2 Meaningful Sequence | leitura DOM | ordem DOM = fluxo visual (header→h1→conteúdo→seções→footer); `br` no h1 só visual | PASS-code |
| 1.3.3 Sensory Characteristics | leitura de copy | instruções não dependem de forma/cor/posição | PASS-code |
| 1.3.4 Orientation | render 768×1024 (retrato) vs 1024×768 (paisagem) | 6 seções + 5 h2 completos nos dois eixos; `scrollWidth=768` e `=1024` (sem scroll horizontal); brutos `b2-orient-*.png` | PASS-render |
| 1.3.5 Identify Input Purpose | leitura HTML | nenhum `<input>`/form na página | N/A — sem campos |
| 1.4.1 Use of Color | render: getComputedStyle + pixel-scan | **ANTES:** `.text-link` e nav `text-decoration-line: none` (preflight Tailwind removera o default UA do design base.css) — cor `#f4efe2` idêntica ao parágrafo adjacente = falha. **CORREÇÃO:** `text-decoration: underline` + offset `.24em` + thickness `1px` em `a` no `@layer base` de `global.css`; removido `no-underline hover:underline` dos 4 links do nav (decisão: underline persistente em TODOS os links — cue não-cor permanente, não apenas hover). **DEPOIS:** underline computado em `.text-link`, 4 nav, skip-link; linha contínua de 122px @y32 no pixel-scan (bruto `b2-step2-underline-pixelproof.json`); re-run build+test OK | CORRIGIDO (era FALHA) |
| 1.4.2 Audio Control | inspeção | sem áudio | N/A — sem mídia |
| 1.4.3 Contrast Minimum | B1 cálculo estático + B2 render T03 | B1: 11 pares ≥5.28:1. B2: 36/36 regiões ≥6.28:1 com gradientes/`opacity .68` reais (tabela acima); results `b2-contrast-*-results.json` | PASS-render |
| 1.4.4 Resize Text | render: `html{font-size:32px}` (200%) @1440 | sem overlap h1/CTA/nav/bio (rects sem interseção); alvos ≥44px (nav 88px de altura); CTA acionável por teclado (foco→heading). Nota honesta: h1 dimensionado por `clamp(...,7.35vw,...)` — não escala proporcionalmente ao root (121.6px no teste, já ≥2× base); textos rem escalam integralmente | PASS-render |
| 1.4.10 Reflow | render 320×1024 (=1280@400%) | `scrollWidth=320=clientWidth` (sem scroll horizontal); 0 elementos de texto com clipping (`scrollWidth>clientWidth`); bruto `b2-reflow-320.png` | PASS-render |
| 1.4.11 Non-text Contrast | render foco em 8/8 interativos ×2 viewports + estático | outline 3px `currentColor` legível por superfície: reverse/night 17.33:1 (header), night/paper 17.33:1, night/mineral 14.56:1, reverse sobre night junto ao CTA gold (13.71:1) — foco nunca invisible (elementFromPoint + screenshots); borda `border-muted` ≥5.28:1 (estático) | PASS-render |
| 1.4.12 Text Spacing | render: injeção WCAG (`line-height:1.5 !important; letter-spacing:.12em; word-spacing:.16em; p,li{margin-bottom:2em}`) | 0 elementos com clipping em 1440 e 390; sem scroll horizontal; h1 cresce para 635px sem cortar; brutos `b2-spacing-*.png` | PASS-render |
| 1.4.13 Content on Hover or Focus | leitura | sem tooltip/hover-reveal | PASS-code |
| 2.1.1 Keyboard | leitura HTML/JS + render | só `<button>`/`<a>` nativos; CTAs acionados por Enter (verificado) | PASS-code |
| 2.1.2 No Keyboard Trap | leitura JS + render Tab×8×2 | sem trap (ciclo de 8 interativos fecha); região in-flow; retorno de foco verificado | PASS-code |
| 2.4.1 Bypass Blocks | leitura HTML + render | `.skip-link`→`#conteudo`; ao focar fica visível (rect 16,8 171×48, outline 3px) — bruto `b2-focus-1440-skiplink.png` | PASS-code |
| 2.4.2 Page Titled | leitura head | `<title>AS Mentorias — conceito FP Solutions</title>` + meta description | PASS-code |
| 2.4.3 Focus Order | render Tab×8 em 1440 e 390 | ordem real: skip-link → nav×4 → CTA hero → text-link → CTA closing (ordem DOM=visual, sem tabindex positivo) — `b2-step3-focus-results.json` | PASS-render |
| 2.4.4 Link Purpose (In Context) | leitura | links com rótulos próprios ("Conhecer a atuação", nav) | PASS-code |
| 2.4.5 Multiple Ways | contexto | página única com nav in-page | N/A — one-page |
| 2.4.6 Headings and Labels | leitura | títulos descritivos | PASS-code |
| 2.4.7 Focus Visible | leitura CSS + render | outline 3px solid offset 5px computado em TODOS os 8 interativos ×2 viewports (cores por superfície); skip-link e "Voltar à página" com outline verificado em screenshot | PASS-render |
| 2.4.11 Focus Not Obscured | render Tab×8×2 + elementFromPoint + inspeção | 0/16 focos obscurecidos; 0 elementos `fixed`/`sticky` no documento; header `position:static`; foco sempre 100% no viewport | PASS-render |
| 2.5.1 Pointer Gestures | leitura JS | sem multipoint/path/path-based | N/A — sem gestos |
| 2.5.2 Pointer Cancellation | leitura JS | ações em `click`, não em down/up | PASS-code |
| 2.5.3 Label in Name | leitura HTML | texto visível = accessible name | PASS-code |
| 2.5.8 Target Size (Minimum) | leitura CSS + render 200% | links `min-h-11 min-w-11` (44px); a 200% todos ≥88px | PASS-code |
| 3.1.1 Language of Page | leitura head | `<html lang="pt-BR">` | PASS-code |
| 3.1.2 Language of Parts | leitura copy | todo conteúdo pt-BR | N/A — sem partes em outro idioma |
| 3.2.1 On Focus | leitura JS | foco não dispara mudança de contexto | PASS-code |
| 3.2.2 On Input | leitura JS | sem autosubmit | PASS-code |
| 3.2.3 Consistent Navigation | contexto | página única, nav única | PASS-code (trivial) |
| 3.2.4 Consistent Identification | leitura | mesmos rótulos nos 2 CTAs | PASS-code |
| 3.3.1–3.3.3 (erros) | leitura HTML | sem formulário/campos | N/A — sem erros possíveis |
| 4.1.2 Name, Role, Value | leitura HTML/JS + render | botões nativos nomeados; `aria-expanded` sincronizado (abrir/fechar verificado em render); `[hidden]{display:none!important}` | PASS-code |
| 4.1.3 Status Messages | render: disclosure exercitado ×2 viewports | abrir → foco vai a `#contact-heading` (h2 com tabindex=-1, outline visível); fechar → foco restaura ao gatilho. **Anúncio real por leitor de tela NÃO executado → QA T09 decide método** | PASS-render (mecanismo; AT → T09) |
| — **Revisão integral dos critérios vs texto da norma** | — | w3.org ilegível (log acima); T01 + plan §7 | **BLOCKED-norma** |

## Política de foco (citação do CSS, fonte `src/styles/global.css` §base)

```css
:focus-visible, [tabindex='-1']:focus { outline: 3px solid currentColor; outline-offset: 5px; }
button:focus-visible { outline-color: var(--color-night); }
main:focus { outline-color: var(--color-reverse); outline-offset: -3px; }
```

Emitida integralmente no CSS (`incl. .presence button:focus-visible{outline-color:var(--color-reverse)}`); comportamento confirmado no render B2 (8/8 interativos ×2 viewports com outline 3px legível).

## Reduced-motion (dupla camada verificada no emitido)

```css
@media (prefers-reduced-motion:reduce){.motion-reduce\:transform-none\!{transform:none!important}}
@media (prefers-reduced-motion:no-preference){button{transition:...}}
```

JS (`motion.ts`): todo parallax/animação gated por `preference.matches` (+ `change` listener, `cancel()` restaurando transform). `contact-info.ts` usa `behavior:'instant'`/`preventScroll`. **B2:** `reduce` emulado — página inteiramente legível/operável sem animações (reveals nunca ocultam conteúdo; estados finais imediatos).

## Achados code-level relevantes (B1)

1. **Positivo — disclosure acessível:** `contact-info.ts` faz `region.hidden=false` → `expanded(true)` → `heading.focus({preventScroll:true})`; fechar restaura foco no gatilho e scroll. **B2 confirmou o ciclo inteiro no render (1440/390).**
2. **Positivo — alvos e foco:** nenhum tabindex positivo; política 3px/offset 5px; alvos ≥44px. **B2 confirmou em render.**
3. **Observação (RESOLVIDA na B2):** `.text-link` sem underline por padrão — confirmado como falha 1.4.1 e corrigido (ver linha 1.4.1).
4. **Observação (não-gate):** sem handler Escape em `#contact-info`; região é in-flow e não-modal, 2.1.2 não é implicado; registrar como conveniência para B2/B3. — Não endereçado nesta rodada (não é falha de critério).
5. **Observação:** contraste do `outline currentColor` e do texto sobre gradientes/`opacity .68` — resolvido no B2 (todas ≥6.28:1).

## Pendentes para B3/T09 (abertos após B2)

- **Leitor de tela real — NÃO EXECUTADO** (limitação honesta): anúncio de abertura/fechamento de `#contact-info`, qualidade do alt do retrato, sincronia `aria-expanded` (método decidido pelo QA T09).
- **Revisão integral vs texto da norma — BLOCKED-norma** (w3.org ilegível; permanece para T09 decidir método/norma).
- Conveniência Escape em `#contact-info` (não-gate, UX).
- CA-13 conforme plano.

## B2 render (T07b — registro da rodada)

- **Data:** 2026-09-06 · **Revisão:** build `dist/` T07b, CSS `index.4kke3gSc.css` (T06 final + correção 1.4.1) · **Ambiente:** `npm run preview` 127.0.0.1:4321, Playwright, `prefers-reduced-motion: reduce` emulado.
- **Correção aplicada (única, mínima, 1.4.1):** `src/styles/global.css` (`@layer base`: `a { color: inherit; text-decoration: underline; text-underline-offset: .24em; text-decoration-thickness: 1px; }`) + `src/layouts/DemoLayout.astro` (removido `no-underline hover:underline` dos 4 links do nav — decisão registrada: underline persistente em todos os links é o cue não-cor mais seguro; hover deixa de ser o único momento do cue no nav). Sem outras mudanças de código. `skip-link` herda underline (sem efeito adverso).
- **Checks pós-correção:** `npm run typecheck` 0 erros · `npm run lint` 0 warnings · `npm test` (unit + integration) pass · `npm run build` OK.
- **Evidências (`.playwright-mcp/t07-render/`):** contraste — `b2-contrast-{1440,390}-{manifest,results}.json`, 36 screenshots de região + 2 fullPage; 1.4.1 — `b2-step2-underline-{before,after}.json`, `*-before-heroaction.png`, `*-after-{header,heroaction}.png`, `*-after-textlink-1x1.png`, `*-pixelproof.json`; foco — `b2-step3-focus-results.json`, `b2-focus-{1440,390}-skiplink.png`, `b2-focus-1440-backbutton.png`, `b2-focus-390-region-open.png`; zoom/reflow/spacing/orientação — `b2-reflow-320.png`, `b2-zoom200-1440.png`, `b2-zoom200-cta-focus.png`, `b2-spacing-{1440,390}.png`, `b2-orient-{768-portrait,1024-landscape}.png`; ferramentas reproduzíveis — `tools/contrast-analyze.ps1`, `tools/scan-underline.ps1`.
- **Limitações honestas:** contraste amostrado com stride 2px dentro do bbox do texto (pior pixel de fundo, texto removido) — aproximação do método T03, não varredura exaustiva por glifo; DPR 1; underline 1px não resolúvel por inspeção visual de modelo — provado por pixel-scan; leitor de tela real e revisão integral da norma continuam para T09; estado aberto do `#contact-info` medido apenas para foco/mecanismo (contraste do estado aberto usa os mesmos pares paper).

## Skills

- `web-accessibility`: **avaliada** — relevante (pacote de auditoria/roteamento). **Carregada** — sim (B1 e B2). **Aplicação** — roteamento por superfície, separação automatizado × verificação manual, e a regra "evidência code-level não prova acessibilidade" — incorporada nas colunas método/status; na B2 guiou a separação mecanismo-render × verificação-AT (4.1.3). Correção de código proposta pela rodada B2: apenas a de 1.4.1 (falha real confirmada).

## Limitações

Medições B1 válidas apenas para a revisão T05 5b; medições B2 válidas para a revisão T07b (CSS `index.4kke3gSc.css`); contraste B2 = pior pixel por região (método T03, stride 2px); leitor de tela não executado; revisão integral vs norma BLOCKED. **Este documento não afirma conformidade WCAG 2.2.**
