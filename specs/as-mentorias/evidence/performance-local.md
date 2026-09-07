# performance-local.md — CA-13 (B3a) Cargas frias LCP/CLS, build T06

**Status:** CONCLUÍDO — B3A_CA13_DONE (relatório persistido a cada passo)

## 1. Ambiente e revisão do artefato

| Item | Valor |
|---|---|
| Comando build | `npm run build` → `[build] Complete!` (1 page built) |
| Data/hora build | 2026-09-06 17:49:37 (-03:00) |
| Emissor | Astro v7.3.1 (Astro 7) |

Artefatos relevantes em `dist/_astro/` (tamanho, SHA-256 16 hex):

- `index.DHrKk2VO.css` — 22117 B — `E5A337B72B3C5570`
- `index.astro_astro_type_script_index_0_lang.DcueF-dN.js` — 942 B — `65CEE5910F61765E`
- `index.astro_astro_type_script_index_1_lang.CRBZP7U_.js` — 2849 B — `AE736A229EBC6A3B`
- Imagens: `amanda-xadrez.*.webp` (28 500 / 56 002 / 93 438 / 1 138 696 B) e `cerebro-final.*.webp` (28 830 / 57 966 / 105 910 / 161 310 / 170 508 B)

Ambiente de host:

- Node v24.9.0 / npm 11.7.0
- Windows 11 (host), AMD Ryzen 5 5600GT with Radeon Graphics (6C/12T), 13,9 GB RAM
- Servidor: `npm run preview` (job gerenciado DSH), `http://127.0.0.1:4321`, servindo `dist/`

Perfil sintético contratado: rede 4 Mb/s↓ / 1 Mb/s↑ / RTT 150 ms (500000/125000 B/s), CPU 4×, cache desabilitado, 3 cargas frias × 2 viewports (390×844 e 1440×900), janela ≥10 s após load. Alvos: LCP ≤ 2,5 s / CLS ≤ 0,1.

## 2. Método exato

- Servidor: `npm run preview` (job DSH) em `http://127.0.0.1:4321`, servindo o **build** (dist/), não dev.
- Cada carga fria = **contexto de browser novo** (cache limpo) + CDP session na página: `Network.enable`, `Network.setCacheDisabled {cacheDisabled:true}`, `Network.emulateNetworkConditions {offline:false, latency:150, downloadThroughput:500000, uploadThroughput:125000}`, `Emulation.setCPUThrottlingRate {rate:4}` — **tudo ativo ANTES do goto**.
- Coletor injetado via `addInitScript` (evaluateOnNewDocument) ANTES da navegação (runner-side, NUNCA no bundle — nenhum arquivo `src/` alterado): PerformanceObserver `largest-contentful-paint` (buffered, último entry = LCP final) e `layout-shift` com janelas de sessão (reset em `hadRecentInput`, gap ≥5 s ou janela ≥5 s; CLS = maior janela), registrando sources por shift (tag+#id).
- Coleta: `goto(waitUntil:'load')` → janela fixa de 10 s (setTimeout no contexto da página) → leitura de `window.__perf` + `loadEventEnd`/FCP. Hosts das requests verificados via CDP `Network.requestWillBeSent`.
- Viewports: 390×844 e 1440×900; 3 cargas frias por viewport; mediana por viewport; alvos LCP ≤2,5 s / CLS ≤0,1.

## 3. Validação do perfil (Passo 2)

CDP session (`page.context().newCDPSession(page)`): `Network.enable` → `Network.setCacheDisabled {cacheDisabled:true}` → `Network.emulateNetworkConditions {offline:false, latency:150, downloadThroughput:500000, uploadThroughput:125000}` → `Emulation.setCPUThrottlingRate {rate:4}`. Sem erros na aplicação; fetch de verificação em página dedicada (viewport 1440×900, cache no-store):

| Asset | Bytes | Tempo observado | Teórico (bytes/500000 + 150 ms RTT) | Throughput derivado |
|---|---|---|---|---|
| `cerebro-final…ZS1HVc.webp` | 105 910 | 382,7 ms | ~362 ms | **455 135 B/s** (~91% de 500k) |
| `cerebro-final…1fdlTu.webp` | 28 830 | 230,4 ms | ~208 ms | 358 582 B/s (payload pequeno: RTT domina) |

**Conclusão: perfil APLICA de verdade.** Asset grande entrega ~91% do throughput contratado (overhead conhecido do shaper do Chrome); tempos batem com 4 Mb/s + RTT 150 ms. A expectativa do contrato (60–90 KiB ≈ 130–200 ms + RTT) é confirmada pela proporção observada.

## 4. Resultados — 3 cargas frias × 2 viewports

JSONs individuais: `.playwright-mcp/t07-perf/load-{m1,m2,m3}-{390x844}` e `load-{d1,d2,d3}-{1440x900}.json`

**Mobile 390×844** (LCP em ms; CLS unitless):

| Carga | LCP (ms) | CLS | LCP element | load (ms) | FCP (ms) |
|---|---|---|---|---|---|
| m1 | 676 | 0,0041 | `img.block.w-full [cerebro-final…1fdlTu.webp]` | 1311 | 656 |
| m2 | 712 | 0,0041 | idem | 1311 | 680 |
| m3 | 704 | 0,0041 | idem | 1313 | 684 |
| **Mediana** | **704** | **0,0041** | — | — | — |

**Desktop 1440×900** (LCP em ms; CLS unitless):

| Carga | LCP (ms) | CLS | LCP element | load (ms) | FCP (ms) |
|---|---|---|---|---|---|
| d1 | 704 | 0,0053 | `img.block.w-full [cerebro-final…ZS1HVc.webp]` | 1356 | 688 |
| d2 | 688 | 0,0053 | idem | 1357 | 668 |
| d3 | 696 | 0,0053 | idem | 1331 | 680 |
| **Mediana** | **696** | **0,0053** | — | — | — |

Zero requests externas em todas as cargas (hosts observados: nenhum host de rede; apenas data:/blob: inline).

## 5. LCP element por carga

- **Mobile (m1–m3):** `<img class="block w-full">` do hero — `cerebro-final.D4E1Uapi_1fdlTu.webp` (28,8 KiB, srcset menor). Shifts CLS: 4 eventos ~0,0018–0,002 em `<a>`/`#text` (reflow de texto/padding) — acumulado 0,0041.
- **Desktop (d1–d3):** mesmo `<img class="block w-full">` do hero, agora com srcset desktop `cerebro-final.D4E1Uapi_ZS1HVc.webp` (105,9 KiB). Shifts CLS: 4 eventos — maior 0,00355 num `<div>` (t≈0,67 s, antes do LCP) + 0,00163 em `#text`; demais ≤0,0001 — acumulado 0,0053.

## 6. Veredito vs alvos

| Métrica | Mobile (mediana) | Desktop (mediana) | Alvo | Veredito |
|---|---|---|---|---|
| LCP | **704 ms** | **696 ms** | ≤ 2 500 ms | **PASS** (folga ~3,5×) |
| CLS | **0,0041** | **0,0053** | ≤ 0,1 | **PASS** (folga ~19×) |

**CA-13: PASS.** Nenhum dos 6 resultados individuais estoura alvo (pior LCP: 712 ms m2; pior CLS: 0,0053 d1–d3). **Exceções medidas: nenhuma** — não houve violação a reportar; não houve ocultação por média (individual preservado em JSON).

## 7. Limitações e estado do servidor

**Limitações (declaração honesta):**
- Janela de medição fixa de 10 s pós-`load` (contrato); interações/timing dinâmico além disso não capturados (sem input = sem reset de janela CLS).
- Local loopback (127.0.0.1:4321) com emulação CDP de rede/CPU — não substitui rede real; sem RUM; sem Lighthouse.
- Medições de **implementador** (B3a); reprodução por QA independente fica para **T09**.
- Throughput efetivo do shaper Chrome ≈ 91% do alvo em payload grande (validado na seção 3).
- Coletor injetado exclusivamente pelo runner Playwright (`addInitScript`); verificação `grep` em `dist/` (`__perf|largest-contentful-paint`): **0 matches** — bundle limpo.
- Fonte de variância reduzida: cargas sequenciais no mesmo host; disk cache zerado por contexto novo + `setCacheDisabled`.

**Estado do servidor/job:** job DSH do `npm run preview` (pwsh-9) encerrado ao fim da coleta; porta 4321 liberada.

**Status final: B3A_CA13_DONE** (perfil CDP validado; 6/6 cargas coletadas; mediana mobile LCP 704 ms / CLS 0,0041; desktop LCP 696 ms / CLS 0,0053; PASS nos alvos).

## 6. Veredito vs alvos

(será preenchido no Passo 4)

## 7. Limitações e estado do servidor

(será preenchido no Passo 5)
