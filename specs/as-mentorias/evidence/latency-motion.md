# Evidência — Motion & Latency (as-mentorias)

**Status:** T06_MOTION_FIXED
**Revisão:** T06-edi — reveals proporcionais em `src/scripts/motion.ts` · T06-lat — medições de latência + evidência temporal · T06-fix — motion visível (T01 §9.1): settle 900ms/64px + opacity, parallax 40/20px, reveals 32px/600ms/stagger 80ms
**Data:** 2026-09-06
**Escopo desta revisão (T06-fix):** APENAS `src/scripts/motion.ts` (escritor único @ui-specialist) + este md + brutos em `.playwright-mcp/t06-fix/`. Markup/CSS intocados (outro agente edita em paralelo). Sem Git.

## Passo 1 — Auditoria do motion atual

Fonte: `src/scripts/motion.ts` (`initPresenceMotion`). Seletores conferidos em `src/pages/index.astro`: `.presence` (section hero), `.sculpture` (div com `img`), `.open-space` (div `aria-hidden` com 2 `span`).

| Efeito | Elemento | Função | Gatilho | Duração | Reduced | Cleanup |
|---|---|---|---|---|---|---|
| Parallax sutil (translateY proporcional ao scroll) | `.sculpture` (container, `style.transform`) | `update()` via `requestAnimationFrame` | scroll da janela + IntersectionObserver marca hero visível; amplitude 10px (<600px) / 26px | contínuo (rAF por scroll) | gating em `scroll()`/`update()` (`preference.matches`); `change()` cancela e re-observa | `cancel()` (cancela rAF, `removeProperty('transform')`) |
| Entrada hero (flutuação do raster) | `img` de `.sculpture` | `animate()` (WAAPI, translateY 12px + rotate −2°→0) | init, uma vez, só se `!reduced && !document.hidden` | 720ms | skip no init; `change()` cancela | Set `animations`; `onfinish` remove do Set; `cancel()` cancela todos |
| Marcações open-space | `span` de `.open-space` (2) | `animate()` (WAAPI, translateX ±16px rotate 24°→0) | IntersectionObserver de `.open-space`, uma vez (flag `played`), só se `!reduced && !document.hidden` | 480ms | skip; `change()` cancela | idem |

Mecanismos existentes que os reveals devem seguir:

- **Reduced-motion:** `matchMedia('(prefers-reduced-motion: reduce)')` + listener `'change'` → `change()` cancela tudo e só re-observa quando `!reduced && !document.hidden`.
- **Pausa fora de contexto:** `visibilitychange` → `change()`; `blur` → `cancel()`; `pagehide` → `cleanup()` (remove listeners, desconecta observer). **Existe mecanismo de pausa** — reveals devem ser incluídos nele.
- **Easing compartilhado:** `cubic-bezier(.16,1,.3,1)` (ease-out) via helper `animate()`.
- **Gating de suporte:** early return se faltar `.sculpture`/`img`/`.presence`/`.open-space`, WAAPI na `img` ou `IntersectionObserver`.

## Passo 2 — Reveals proporcionais (T06-edi)

**Decisão de implementação: WAAPI**, não classe utilitária. Motivo: o arquivo já centraliza animação em WAAPI pelo helper `animate()` (Set `animations`, easing compartilhado `cubic-bezier(.16,1,.3,1)`, cancelamento em lote). Classe exigiria CSS novo + regra `motion-reduce` paralela + cleanup manual, duplicando o mecanismo existente. WAAPI herda de graça: mesmo easing, cancel via `cancel()` (blur/visibility/reduced), zero CSS.

**Alvos animados** (seleção via `querySelectorAll` no init; markup intocado; `contact-info.ts` intocado):

| Alvo | Elemento | Gatilho | Duração |
|---|---|---|---|
| h2 da seção practice | `.practice h2` | IntersectionObserver 20% visível | 420ms |
| h2 da seção about | `.about h2` | idem | 420ms |
| h2 da seção repertoire | `.repertoire h2` | idem | 420ms |
| linhas de situações | `ul.situations-lines` | idem | 420ms |
| citação | `.repertoire blockquote` | idem | 420ms |
| next step | `.next-step h3` | idem | 420ms |

Entrada: opacity 0→1 + translateY(24px→0), 420ms, easing `cubic-bezier(.16,1,.3,1)`.

Mecânica:
- `revealObserver` (threshold 0.2, rootMargin `0px 0px -8% 0px`): UMA vez por elemento — `unobserve` + `disconnect()` quando todos revelados; flag `revealed` impede retrigger.
- **Sem flash:** estado inicial oculto aplicado via JS (`style.opacity='0'`) apenas quando `!reduced && !document.hidden` (via `change()`); com reduced, elementos nunca são ocultados. Ao revelar, `removeProperty('opacity')` + `animate()` na mesma task síncrona (WAAPI aplica o primeiro keyframe antes do próximo paint — sem flash entre remoção e animação). Anim `fill: none` (default) + remoção do inline não deixam estado residual.
- **Reduced-motion + change:** integrado ao listener `'change'` existente (`matchMedia('(prefers-reduced-motion: reduce)')`): ao ativar, `stopReveals()` desconecta observer e remove todos os inline `opacity` (elementos visíveis). Ao voltar para no-reduce, `watchReveals()` re-observa os ainda não revelados.
- **Pausa fora de contexto:** reutilizado o mecanismo existente — `visibilitychange` → `change()` (stop/restore reveals) e `blur` → `cancel()` (cancela animação de reveal em curso). Nada de sistema novo.
- `pagehide` → `cleanup()` inclui `stopReveals()`.

**Excluídos, com motivo:**
- **Imagens** (hero art, retrato da Amanda): entrada de raster artístico já coberta pelo efeito hero de 720ms; re-animar imagem fora do padrão "whole-object" e duplicaria custo de composição. Reveal de imagem não é texto e não ganha leitura progressiva.
- **Texto corrido** (parágrafos `.presence-action`, `.practice-copy`, `.about-grid`, blockquote footer, `.provenance`): bloco de leitura principal — revelar texto corrido atrasa conteúdo já visível acima da dobra e não há ganho de leitura proporcionado; animação de leitura contínua viola "whole-object movement" do projeto.
- **h1 / h2 da seção situations / h2 contact-info**: h1 é LCP e primeira pinta; manter estático evita qualquer flash inicial. Os demais h2 não foram pedidos e contact-info é o bloco de contato/fechamento (preferimos não animar fechamento legal/informativo).
- **`.contact-info` como bloco:** idem — conteúdo informativo sobre o próximo passo.

## Passo 3 — Checks (2026-09-06, T06-edi)

| Check | Resultado |
|---|---|
| `npm run typecheck` | 0 errors, 0 warnings, 0 hints (11 files) |
| `npm run lint` | passou, sem warnings (`--max-warnings 0`) |
| `npm test` — unit | 4/4 pass |
| `npm test` — integration | build OK + 5/5 pass |
| `npm run build` | OK — 1 page(s) built, dist gerado |

## Passo 4 — Latência (T06-lat, 2026-09-06) — CA-13 parcial

**Setup:** `npm run build` → `Complete!` (1 page). Preview `npm run preview` @ 127.0.0.1:4321 (job gerenciado, encerrado no fim da rodada — confirmado DOWN). Playwright Chromium headless, deviceScaleFactor 1, `reducedMotion: 'no-preference'`.

**Método:** `t0 = performance.now()` (relógio da página) imediatamente antes do dispatch síncrono (`el.click()`) do elemento real; detector = loop `requestAnimationFrame` que observa a PRIMEIRA mudança visual do alvo (open: `#contact-info` deixa de estar `hidden` + `rect.height>0`; close: volta a `hidden`; âncora: Δ`scrollY` ou Δ`rect.top` do alvo > 0.5); amostra = tempo até o primeiro rAF em que a mudança é observada. Todas as amostras individuais registradas (sem média).

**Incerteza registrada:** (1) resolução = 1 frame (~16,7ms @60Hz): latência visual real ≤ medido + 1 frame; (2) `el.click()` não passa pelo pipeline de input do OS (hit-test/pointer) — latência de input real adicional não incluída; (3) medição de implementador, não QA independente. Regra: PASS só se TODAS as 5 amostras ≤ 200ms; qualquer >200ms ou timeout ⇒ INCONCLUSIVE na ação (nunca PASS falso).

Raw completo: `.playwright-mcp/t06-evidence/t06-latency-samples.json` (80 amostras + corroboradores focused/scrolled de cada amostra).

| Ação | 390×844 — 5 amostras (ms) | 1440×900 — 5 amostras (ms) | Verdict |
|---|---|---|---|
| Abrir CTA hero (`#contact-hero`) | 1.7, 0.7, 1.1, 1.2, 0.9 | 2.2, 0.8, 1.4, 0.7, 0.9 | **PASS** (pior 2.2) |
| Fechar após hero (`[data-contact-return]`) | 198.5*, 0.4, 0.7, 0.5, 0.7 | 0.8, 0.4, 0.4, 0.5, 0.4 | **PASS com ressalva** |
| Abrir CTA closing (`#contact-closing`) | 55.1, 1.7, 0.6, 0.6, 0.5 | 0.6, 0.8, 0.6, 0.5, 0.8 | **PASS** (pior 55.1 < 200) |
| Fechar após closing | 9.3, 0.4, 0.5, 0.5, 0.4 | 0.5, 0.6, 0.4, 0.6, 0.6 | **PASS** (pior 9.3) |
| Âncora `#situacoes` (nav) | 0.9, 15.3, 0.5, 0.5, 1.2 | 4.5, 15.3, 0.5, 0.6, 0.5 | **PASS** (pior 15.3) |
| Âncora `#atuacao` (nav + link hero) | 0.6, 3.1, 0.4, 0.5, 1.0 | 0.6, 0.5, 0.5, 0.4, 0.5 | **PASS** (pior 3.1) |
| Âncora `#amanda` (nav) | 0.6, 0.7, 0.5, 0.5, 0.5 | 0.6, 0.4, 0.5, 0.6, 0.5 | **PASS** (pior 0.7) |
| Âncora `#temas` (nav) | 0.7, 0.6, 0.4, 0.6, 0.4 | 0.6, 0.5, 0.5, 0.7, 0.8 | **PASS** (pior 0.8) |

\* `close-after-hero` @390, amostra 1 = 198.5ms: o primeiro rAF pós-clique só chegou ~198ms após o dispatch (stall de agendamento de frame após restauração instantânea de scroll fundo→topo); o handler é síncrono (executado no tick do clique — estado `hidden` já aplicado). Reteste imediato na mesma condição: 5/5 amostras entre 0.4–0.7ms. Classificado PASS com ressalva explícita, não PASS falso — o outlier está registrado como amostra individual no JSON.

Corroboradores (todas as amostras): open → região visível + foco em `#contact-heading` + scroll ocorrido; âncoras → foco no alvo (`tabindex="-1"`) presente; close → região oculta no primeiro rAF de detecção.

## Passo 5 — Evidência temporal de motion (T06-lat, 2026-09-06)

Runner: adaptado de `.playwright-mcp/hero-v2-motion.js` + `t03-motion-checks.js` (T03). (`hero-v2-measure.mjs` é runner de contraste, não de motion.)

| Artefato (`.playwright-mcp/t06-evidence/`) | O que demonstra |
|---|---|
| `t06-motion-timeline.json` | Timeline por frame (rAF) dos dois viewports: sequência temporal das rampas de reveal + fases reduced/change + parallax |
| `t06-motion-1440-full-raw.txt` | Output integral do runner 1440 (~450 frames) — raw completo |
| `t06-motion-390.webm` / `t06-motion-1440.webm` | Vídeo contínuo da sessão (scroll → reveals → reduced → change → reload) |
| `t06-motion-trace-390.zip` / `t06-motion-trace-1440.zip` | Trace Playwright (screenshots+snapshots) por viewport |
| `t06-filmstrip-practice-{390,1440}-f0..f4.png` | Filmstrip suplementar do reveal de `.practice h2` (~110ms entre capturas) |

**O que a evidência temporal demonstra (modo normal):**
- Reveals disparam ao rolar às seções e têm rampa completa por frame, ex.: `[0,24] → [0.23,18.5] → [0.41,14.1] → [0.56,10.6] → [0.67,8] → [0.75,6] → [0.81,4.5] → [0.86,3.4] → [0.89,2.6] → [0.92,2] → … → [1,0]` (opacity 0→1 + translateY 24px→0, ~420ms, ease-out). Sequências observadas: practice h2 (@y=600/800), about h2 (@y=900/1600), situations-lines (@y=1500/1600), blockquote + next-step em paralelo (@y=2381+), repertoire h2 — disparos sequenciais conforme o elemento cruza o threshold 20% + rootMargin −8%.
- Parallax proporcional confirmado: `.sculpture` translateY 0→4.1→8.3→10px (390, amplitude 10px) e 0→13.2→26px (1440, amplitude 26px), voltando a 0 quando o hero sai do viewport.

**Achado (registrado, sem mudança de código):** com saltos programáticos grandes (degrau de 300–400px que leva um alvo em animação de "20% visível" para fora do viewport), o `cancel()` preexistente da saída do hero (limpeza do parallax, T03) varre o Set global de animações e cancela também reveals T06-edi em curso; `document.getAnimations()` zera no frame seguinte e os alvos terminam em opacity 1 / translateY 0 pelo reflow pós-salto (não pela animação). **Estado final sempre correto (nada fica oculto); o movimento é pulado** nesse edge. Com rolagem contínua de usuário a janela de colisão é mais estreita (não quantificada aqui). Mechanism é do T03/T06-edi — sugerido para revisão futura (escopo do `cancel()` ou `fill:'forwards'`); severidade: observação.

## Passo 6 — Reduced-motion & change em sessão (T06-lat, 2026-09-06)

| Verificação | 390×844 | 1440×900 |
|---|---|---|
| Load já em reduce (`reducedLoad`) | anim=0; 6/6 computed opacity 1; inline opacity vazia — conteúdo já visível, nada oculto, nada anima | idem |
| Change no-pref → reduce com reveals em curso (`reduceAfterChange`) | anim=0; `.sculpture` transform `none` (parallax parado); inline opacity removida; 6/6 opacity 1 | idem (via `changeCancelsHidden`) |
| Change com reveals PENDENTES (`changeCancelsHidden`) | 6 alvos com inline `opacity:0` (pré-reveal) → após change: inline removida, computed 1, anim 0 | idem (tops pré-reveal registrados no JSON) |
| Reduce → no-pref (`backToNoPref`) | sem re-animação (flag `revealed` respeitada), sem re-ocultação | idem |
| Filmstrip `.practice h2` | f0–f4; f3/f4 idênticos por tamanho (frame estável); captura (~110ms + jitter) não alcança opacity≈0 — evidência quantitativa é a timeline + vídeo | idem |

## Estado do servidor/job (T06-lat)

- `npm run build`: **Complete!** (1 page(s) built) antes das medições.
- Preview `npm run preview` @ 127.0.0.1:4321 (job `pwsh-6`): usado durante as medições e **encerrado** no fim da rodada — probe confirma servidor DOWN.
- Contextos Playwright de medição fechados; nenhum job residual.

## Limitações

- **CA-13 é parcial por desenho:** cargas frias LCP/CLS ficam para **B3**; leitor de tela é **T09**.
- Medições são de **implementador, não QA independente**.
- Granularidade do método = 1 frame (~16,7ms): latência visual real ≤ amostra + 1 frame; dispatch sintético não inclui pipeline de input do OS.
- Outlier documentado: 198.5ms (close hero @390) com reteste 5/5 ≤ 0.7ms — ver Passo 4.
- Stall de rAF ~6s no meio da timeline 1440 (t≈5070→10992, reveals já concluídos; rampas antes/depois íntegras) — artefato do ambiente emulado (pausa por blur/throttle), sem efeito nas medições de latência (contextos dedicados).
- Filmstrip: capturas ~110ms com jitter do pipeline de screenshot; não alcança opacity≈0 do início do reveal — PNG isolado não é evidência de movimento (por isso timeline JSON + webm).
- Achado `cancel()` varrendo reveals em saltos grandes — registrado no Passo 5, sem mudança de código nesta rodada.

## Passo 7 — T06-fix: motion visível (2026-09-06)

**Diagnóstico herdado do Maestro (preview, T01 §9.1 — parâmetros tratados como hipóteses):** scripts carregam (0 erros), gating correto (reduced=false anima), reveals disparam (opacity 0→1 medido), parallax funciona mas cap 10/26px — **H3: funcional e imperceptível**. Operador exige motion VISÍVEL. Esta rodada implementa os valores.

**Mudanças em `src/scripts/motion.ts`** (mesmo helper `animate()`, mesmo easing `cubic-bezier(.16,1,.3,1)`, gating reduced/hidden/visibility intocado):

| Mecanismo | Antes | Depois |
|---|---|---|
| Hero settle (`img` de `.sculpture`) | translateY 12px→0 + rotate −2°→0, 720ms, sem opacity | translateY **64px**→0 + opacity **0→opacidade computada da `img` (0.68)**, 900ms, mesmo rotate. Destino = `getComputedStyle(image).opacity` (evita snap 1→0.68 no último frame; final = estado natural) |
| Parallax `.sculpture` | amplitude 10px (<600px) / 26px | **20px / 40px**, mesma rAF e progress `scrollY/heroHeight` |
| Reveals (6 alvos) | translateY 24px→0, 420ms, sem stagger | translateY **32px**→0 + opacity, **600ms**, **stagger 80ms** entre alvos do mesmo batch do `revealObserver` |
| Stagger (novo) | — | helper `animate()` ganha parâmetro `delay` (`fill: 'backwards'` quando delay>0 — segura o keyframe inicial durante o delay, sem flash); IO coleciona `pending[]` no callback e dispara com `i*80ms` |
| Reduced-motion | gating existente (nunca oculta) | **intocado** |

**Validação de bordas do asset (parallax 40px desktop):** PNG `cerebro-final` renderizado 1100×733 (webp), sondeado via canvas (`getImageData` por linha): linhas 0–29 **100% transparentes** (margem top ≈30px natural) e ~37px transparentes antes da borda inferior (último conteúdo opaco ~y=693). Com +40px, o PNG desloca para DENTRO do clip: margem top absorve o shift e, no extremo, a borda inferior fica ~12px acima do fundo do hero + ~52px de folga até o seam (véus `::after` inset-0 acompanham o container — não expõem corte). Mobile: 20px absorvidos com folga (img termina ~282px acima do seam). **Valor final mantido: 40px desktop / 20px mobile.**

**Evidência (`.playwright-mcp/t06-fix/`, Playwright Chromium, reducedMotion no-preference, preview 4321 job `pwsh-15` do Maestro — não derrubado):**

| Rampa | Medição por frame |
|---|---|
| Settle no load (1440×900) | 85 frames: `t=6.6 opacity=0 ty=64px` → t=154 (0.47, 20.1px) → t=320 (0.62, 5.4px) → t=654 (0.68, 0.2px) → t≈854–937 (0.68, 0px). Rampa visível ~900ms, opacity final = 0.68 (estado natural, sem snap) |
| Parallax desktop | scrollY 98→785 (heroH 785): ty 5→10→15→20→25→30→35→**40.0px** (proporcional exata) |
| Parallax mobile (390×844) | scrollY 185→739: ty 5→10→15→**20.0px** |
| Reveals 600ms | 6/6 alvos revelados; rampas ~600ms ease-out (primeiro frame amostrado o≈0.16/ty≈26.7, coerente com início 32px; maxTy observado 30.9) |
| Stagger 80ms | Batch duplo (`repertoire h2` + `blockquote`, cruzamento simultâneo): delays registrados via instrumentação `Element.animate` = **0 e 80ms**, dur 600 ambos; probe de opacity: quote **held 0.00 durante o delay** (fill backwards) enquanto rep já em 0.53; convergem juntas |

Screenshots extremo-vs-repouso: `t06-fix/parallax-rest-1440.png`, `t06-fix/parallax-extreme-1440.png`, `t06-fix/parallax-extreme-390.png` (geometria corroborada por medição de rect: extremo desktop img.bottom=117 vs hero.bottom=129.2 → dentro do hero; top strip do PNG = fundo puro).

**Checks (T06-fix):** `npm run typecheck` 0 errors/0 warnings/0 hints (11 files) · `npm run lint` passou (`--max-warnings 0`) · `npm test` passou (unit + integração 5/5, build interno OK) · `npm run build` OK — 1 page(s), dist servida pelo preview 4321.

**Limitações desta rodada:** (1) modelo da rodada sem input de imagem — screenshots persistidos como evidência visual, bordas validadas por sondeio de alpha por linha (mais quantitativo que olho); (2) com rolagem realista, alvos adjacentes raramente cruzam o threshold no mesmo callback do IO (entram lotes unitários, stagger=0 — mecanismo pronto, efeito só ocorre no cruzamento simultâneo, ex. repertoire h2 + blockquote em scroll denso); (3) medição de implementador, não QA independente; (4) granularidade 1 frame (~16.7ms).

## Passo 8 — Validação combinada (§2.3b + T06-fix, pós-integração, 2026-09-06)

**Setup:** mesma sessão de job preview `pwsh-15` (Maestro) @ 127.0.0.1:4321 servindo o dist do build NOVO (nav com `#encontro` + seção `.encontro` visíveis no DOM renderizado; build executado nesta rodada antes da validação). Playwright Chromium, perfil normal (reducedMotion no-preference). Escopo: `DemoLayout.astro` (âncora nav, único edit desta rodada) + confirmação pós-integração do motion T06-fix. Brutos visuais em `.playwright-mcp/enriched/` (`full-1440.png`, `full-390.png`, `sec-1440-encontro.png`).

**Rampas pós-integração (medidas por frame, 1440×900):**

| Rampa | Evidência pós-integração |
|---|---|
| Settle hero | 70 frames: t=5ms (opacity 0.08, ty 56.9px) → t=388 (0.65, 2.8) → t=872 (0.68, 0) → t=1156 settled (opacity 0.68 = estado natural, 0 animações). Log WAAPI: `animate` dur 900, delay 0. Sem snap |
| Parallax desktop | `translateY` proporcional exato: scrollY 0/150/300/450/635 → 0/7.64/15.29/22.93/32.36px (heroH 785; rampa 0→40px mantida) |
| Parallax mobile (390×844) | 0→20.0px @ scrollY 739 (heroH 739) |
| Reveals 600ms | rampa amostrada de `.repertoire blockquote`: t=374 (o 0, ty 32) → 440 (0.53, 15) → 657 (0.96, 1); 6/6 alvos com dur 600 no log WAAPI |
| Stagger 80ms | batch simultâneo reproduzido por degrau único: repertoire h2 delay 0 + blockquote delay 80, ambos dur 600, t idêntico (1668ms) |

**Itens funcionais desta rodada:**

| Verificação | Resultado |
|---|---|
| Nav | Ordem renderizada: Situações · Atuação · Amanda · **Encontro** · Temas (link `#encontro` no padrão dos existentes) |
| Âncora #encontro | Clique → foco no `section#encontro` (`tabindex="-1"`), rect.top=0, scrollY 2858 |
| Encontro no DOM | Entre `.about` e `.repertoire`; filosofia em display (Bricolage ~53px @1440) |
| About | bio 3 parágrafos + 4 badges (PNL, A Cúpula, Escritora, +13 anos) |
| Estrutura main | presence → situations → practice (next-step interno) → about → encontro → repertoire → contact-info |
| Console / rede | 0 erros / 0 warnings; 35/35 requisições loopback (127.0.0.1:4321) |
| Overflow 320×844 | html/body scrollWidth 320 = viewport (0 overflow) |

**Checks (pós-integração):** `npm run typecheck` 0 errors/0 warnings/0 hints (11 files) · `npm run lint` passou (`--max-warnings 0`) · `npm test` unit 4/4 + integration 5/5 (build interno OK; "hero-v2 preserva copy" verde) · `npm run build` OK — 1 page(s), dist servida pelo preview.

**Leitura visual:** `full-1440.png` lida via modlens — ritmo de fundos alternando (cream/taupe ≈ paper/mineral), bio enriquecida legível com 4 credenciais, encontro com filosofia em destaque, nav completo com Encontro; nada cortado/sobreposto relatado na leitura. `full-390.png`: leitura NÃO realizada — modlens falhou 2× (gemini-api 503 + provedor alternativo com saída não-JSON); persistindo após retry único, registrado e seguido. Evidência mobile desta rodada: métricas de DOM/métricas acima (overflow 0, parallax 20px, estrutura) + PNG persistido para leitura posterior.
