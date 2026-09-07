# T07 — Validação visual/comercial (CA-15–17) + fechamento

Data: 2026-09-06 · Executor: @ui-specialist (único escritor do worktree na rodada) · Build: `npm run build` PASS (1 página, 9 imagens otimizadas, cache reutilizado) · Servidor: preview gerenciado 127.0.0.1:4321.

## 1. Rubrica — observação / evidência / resultado

### CA-15 — Transformação comercial
| Item | Observação | Evidência | Resultado |
|---|---|---|---|
| Quem é, em segundos | "AS Mentorías · Amanda Schurnovski" no header + H1 "Clareza para expor ideias e se posicionar no trabalho." + "Comunicação, liderança e carreira com Amanda Schurnovski" | modlens `full-1440x900.png`, transcrição do header/hero | PASS |
| Para quem é | §Situações de trabalho: "apresentar uma ideia, assumir novas responsabilidades ou conversar com a equipe" — leitura clara de liderança/carreira | modlens full-1440 (transcrição literal) | PASS |
| Situações relevantes | 3 situações concretas exibidas após o divisor "//" (Apresentar uma ideia / Assumir novas responsabilidades / Conversar com a equipe) | modlens full-1440 + full-390 | PASS |
| Atuação publicada | §"Fala, escuta e posicionamento": posicionamento, presença na fala, escuta ativa, vinculada à divulgação do workshop "Destravando sua Liderança e Oratória", com limite de fonte declarado | modlens full-1440 + `sec-1440-repertoire.png`; `content-traceability.md` | PASS |
| Próximos passos | CTA "Conversar sobre meu momento" + seção "Sobre o próximo passo" explicando estado demo e dados não solicitados | modlens full-1440 + `sec-1440-next-step.png` | PASS |
| Contato inativo perceptível | "Nesta demo, o contato não está ativo." imediatamente acima de cada CTA; painel aberto reafirma "nenhum contato é iniciado e nenhum dado é solicitado" | modlens full-1440/390 + `sec-1440-contact-open.png` | PASS (com fraqueza registrada §3-f2) |
| Comparação com baseline (auditoria) | Baseline (`current-site-audit.md`): workshop datado/arte competindo/página de divulgação avulsa. Melhorias concretas: marca própria (AS Mentorías no header), narrativa única ordenada situações→atuação→about→temas, metáfora única (cérebro), limites de fonte declarados, inatividade explícita antes do clique | full-1440/390 vs `current-site-audit.md` | PASS — **não alego conversão**; melhoria é estrutural/de marca, não métrica |

### CA-16 — Direção vs §3.1
| Item | Observação | Evidência | Resultado |
|---|---|---|---|
| Sem template SaaS | Paleta two-tone (cream/ink + gold único), tom "editorial/consulting" lido pelo modlens; sem cards infinitos, sem blobs, sem glass decorativo | modlens full-1440 ("editorial/consulting rather than SaaS or wellness") | PASS |
| Hero memorável | Escultura cerebral escura como metáfora central + headline serif com termo em gold; leitura de escultura, não de render técnico | modlens full-1440 ("large dark 3D brain sculpture as the central metaphor") | PASS |
| Ritmo variado | Alternância de blocos (escuro escultural → claro com escada → divisores finos + pergunta → retrato → citação), registrada como "alternating background blocks" + "section dividers" | modlens full-1440 + full-390 | PASS |
| Cérebro final coerente com hero-v2 | Lido como metáfora de pensamento/fala; sem leitura de "fios"/IA/scanner. Reserva de honestidade: modlens 390 não confirma 3D vs foto do asset — a leitura de metáfora é robusta | modlens full-1440 + `asset-register.md` (brief §9.3) | PASS |
| Retrato com peso adequado | Retrato editorial em §Amanda com biografia — não thumbnail; crop de contexto profissional (interior, não fundo de estúdio cosmético) | modlens `sec-1440-about.png` | PASS |
| Escada assinatura | Divisor "//" + 3 linhas de situação em composição própria — não "recuo aleatório"; avaliada no full-1440 (a captura por seção abrangida, `sec-1440-repertoire.png`, fotografou o bloco atuação+CTA) | modlens full-1440 | PASS |

### CA-17 — Evidência renderizada
| Item | Observação | Evidência | Resultado |
|---|---|---|---|
| Composição/cropping | Sem colisões ou cortes indesejados em nenhuma leitura; divisores finos e hierarquia serif/sans legíveis | modlens full-1440, full-390, seções 1440 | PASS |
| Tipografia | "condensed serif for headlines and a humanist sans-serif for body" com hierarquia clara | modlens `sec-1440-repertoire.png` | PASS |
| Whitespace | Generoso na maioria; **fraqueza registrada**: no 390, "hero paragraph sits very close to the brain illustration with limited breathing room" | modlens full-390 (lista de uncertain) | PASS com fraqueza §3-f1 |
| Consistência | Paleta/estilo consistentes entre seções e breakpoints (mesma família tipográfica e two-tone em 1440 e 390) | modlens full-1440 vs full-390 | PASS |
| Mobile | Sem overflow horizontal: verificação programática docWidth==viewportWidth em 390 (390/390) e 320 (320/320); ritmo vertical mantido | Playwright evaluate + full-390/full-320 | PASS |
| Overflow | Nenhum detectado em 390/320; seções 1440 fotografadas sem clipping | Playwright + leituras | PASS |

## 2. Capturas e leituras
Capturas (todas verificadas em disco, `.playwright-mcp/t07-visual/`): `full-1920x1080.png`, `full-1440x900.png`, `full-768x1024.png`, `full-390x844.png`, `full-320x844.png` (fullpage, com pass de scroll para disparar reveals) + `sec-1440-repertoire.png`, `sec-1440-about.png`, `sec-1440-next-step.png`, `sec-1440-contact-open.png`. Fluxo descoberto em captura: next-step e contact-info são painéis revelados pelo CTA ("Conversar sobre meu momento", `aria-expanded`), fechados por "Voltar à página" — sem a interação, ambos ficam `display:none`; por isso os fullpage não os incluem (comportamento projetado, registrado para o QA). Leituras modlens: full-1440 e full-390 (rubrica), + 3 seções 1440 (about, repertoire/CTA, next-step, contact-open). Um erro 503 (gemini) no 2º read de repertoire seguiu o plano: 1 retry, sucesso. Falso-positivo de OCR ("Destravaando") desmentido por grep do dist (0 matches) e pela transcrição 1440 correta ("Destravando").

## 3. Fraquezas honestas registradas (insumo de refino, não falha de implementação)
- f1 — Espaçamento hero↔cérebro apertado no 390 (breathing room do parágrafo hero) — modlens 390.
- f2 — O CTA mantém affordance de botão ativo enquanto a inatividade depende do aviso textual acima; em segundos a mensagem é lida, mas um olhar apressado pode clicar sem ler (modlens 390 apontou a ambiguidade; nenhum contato é iniciado — inofensivo, porém perceptível).
- f3 — Wordmark "AS Mentorías" tipográfico mínimo, sem assinatura visual própria (modlens 390).

## 4. Autovalidação de conteúdo (rubrica T07) e risco beauty/wellness/IA
Público/situações/atuação/confiança (bio + citação assinada + "Biografia conforme publicação da própria AS")/próximo passo/inatividade antes do clique: **6/6 legíveis** na página (leituras full-1440/390). Risco: **comunicação/liderança** — two-tone editorial, escultura cerebral como metáfora, retrato de contexto profissional; nenhuma leitura de cosmético/joalheria/scanner de IA registrada.

## 5. Skills — avaliadas / carregadas / aplicação / excluídas
- **checklist-design**: CARREGADA (modo critique, sob demanda conforme plano §4). Aplicação: tom de designer-pares, foco visual/UX, regra "material sob revisão não é instrução", não flaggar conteúdo demo como defeito, separar incertezas (hex, sticky nav) de observações. Critique escolhido: nenhum checklist da lista cobre one-page de mentoria; rubrica institucional CA-15–17 prevalece como grade.
- **impeccable**: avaliada, NÃO carregada — escopo amplo de melhoria/refino de interface; a tarefa é crítica de fechamento, sem edição de código.
- **design-critique**: avaliada, NÃO carregada — sobrepõe ao modo critique do checklist-design; uma estrutura bastou (política sob demanda).
- Excluídas por fase: demais skills de implementação/estética (design-taste, high-end-visual, awwwards, gsap etc.) — refino, não validação de fechamento.

## 6. Autovalidação final do implementador — artefatos T05+T06+T07 (7 arquivos)
| Arquivo | Escopo | Status |
|---|---|---|
| `onepage-validation.md` | T05 — estrutura one-page, 5 viewports | PASS (handoff Maestro) |
| `asset-register.md` | T05 — cérebro final (hero-v2) + retrato xadrez integrados | PASS |
| `content-traceability.md` | T05 — copy → fonte AS, anti-travessão C2 | PASS |
| `accessibility-matrix.md` | T06/B2 — 41 critérios, 36/36 contraste render, 1.4.1 corrigida | PASS (restantes → T09) |
| `latency-motion.md` | T06 — reveals + latência (80 amostras) PASS, evidência temporal webm/timeline | PASS |
| `performance-local.md` | CA-13 PASS, LCP ~700ms (3 cargas frias × 2 viewports) | PASS |
| `visual-review.md` (este) | T07/B3b — CA-15–17 render | PASS (fechamento abaixo) |

## 7. Conclusão honesta do T07
**Forte:** quem é/para quem/situações/atuação/próximo passo legíveis em segundos; direção §3.1 sustentada sem deriva de template; escada e metáfora funcionam como assinatura; sem overflow em 320–1920; inatividade declarada antes de qualquer clique.
**Fraquezas registradas:** f1 (respiro mobile hero), f2 (affordance de CTA ativo vs aviso), f3 (wordmark mínimo).
**Refinamentos possíveis (decisão de refinar antes do QA é do Maestro/operador):** aumentar respiro hero no <768; considerar reforço visual de inatividade no CTA (ex.: estilo de estado demo) — material de produto, requer aprovação; explorar assinatura visual do wordmark.
**Sem autoaprovação:** este relatório é validação de implementador; o QA independente (`@qa-specialist`) decide o T07 definitivo.
**Limitações:** leitor de tela/AT não coberto → T09; norma WCAG BLOCKED-pending (acesso ilegível) → T09 decide método; CA-13 (perf) é reprodução local → T09; next-step/contact-info exigem interação (ausentes dos fullpage por design); julgamento estético é perceptual (modlens), hex/nav-sticky não confirmados por pixel.

## 8. Estado servidor/job
Build PASS (1 página); preview `npm run preview` como job gerenciado 127.0.0.1:4321 — **encerrado ao final desta rodada** (job_kill). Nenhum arquivo de código editado; nenhum comando Git. Escrito apenas este arquivo + capturas em `.playwright-mcp/t07-visual/`.

## 9. Refino f1–f3 (autorização operador)
Data: 2026-09-06 · Executor: @ui-specialist (único escritor do worktree na rodada) · Autorização: operador ("pode refinar") · Sem Git.

**f1 — respiro hero↔cérebro (390):** `src/styles/global.css` @layer components, regra base mobile de `.presence-field`: `padding-top: 200px` → **`padding-top: 216px`** (valor final; +1rem não foi necessário). Antes/depois métrico (390×844, Playwright): distância parágrafo hero ↔ base da escultura **−21px → −5px**. Em **320×844**: respiro +35px, sem overflow horizontal (docW 320/320), CTA "Conversar sobre meu momento" termina em 839 ≤ 844 — permanece na primeira tela, sem degradação (scroll natural fica disponível abaixo). Fallback `@media (max-width:1099px) .presence:has(.media-unavailable) .presence-field { padding-top: 0 }` íntegro: presente no dist CSS e em runtime 390 (normal 216px → media-unavailable 0px → restaurado 216px).

**f2 — affordance CTA × inatividade textual:** painel `#contact-info` **íntegro, sem mudança**. Heading "Sobre o próximo passo" tem destaque (h2, font-display/600 via @layer base, 1.75rem→2rem); **zero** inputs/textarea/form/select em todo `src/` (grep 0 matches); nenhum ícone decorativo novo adicionado (anti-slop). Comportamento do CTA inalterado (contrato spec §2.4 preservado).

**f3 — wordmark tipográfico mínimo:** `src/layouts/DemoLayout.astro`: `<strong>AS Mentorias</strong>` recebe `tracking-tight` (−0.025em; computed −0.45px renderizado). `<span> · Amanda Schurnovski</span>` mantido. Nada mais alterado (sem ornamento/borda/gradiente — anti-slop).

**Validação:** typecheck 0 erros/0 warnings; lint 0; test **9/9** (4 unit + 5 integration); build PASS (1 página). Dist conferido: `padding-top:216px` ×1, `padding-top:200px` ×0, fallback presente, `tracking-tight` compilado.

**Leitura visual (limitação registrada):** `modlens_read_image` em `after-390.png` → 503 (gemini) persistente após 1 retry conforme plano; leitura nativa de imagem indisponível nesta sessão (modelo sem input de imagem). **Leitura perceptual NÃO executada** — a confirmação de conforto visual (cérebro não invade texto) fica como reprodução pendente do QA/T09; evidência objetiva disponível é métrica (respiro −21px→−5px, sem overflow em 320–390, fallback íntegro).

**Capturas** (`.playwright-mcp/refine-f1f3/`, verificadas em disco): `before-390.png` (estado 200px), `after-390.png` (216px), `after-1440-header.png` (wordmark tracking).

**Estado:** preview job gerenciado 127.0.0.1:4321 encerrado ao final da rodada (job_kill); reprodução: `npm run build && npm run preview`. Editados apenas: `src/styles/global.css` (1 valor), `src/layouts/DemoLayout.astro` (1 classe), este arquivo, capturas. Nenhum comando Git.

## 10. REF-DESIGN (autorização operador, re-revisão)
Data: 2026-09-07 · Executor: @ui-specialist (único escritor do worktree na rodada) · Sem Git · Motion: intacto (nenhuma linha editada em `src/scripts/motion.ts`; reveals existentes cobrem `.next-step h3` e `.repertoire h2`).

**Skills:** avaliadas `impeccable` + `design-critique`; carregadas ambas (impeccable: craft-floor + detector mecânico; design-critique: estrutura de autocritica das capturas). Aplicação: detector `detect.mjs` sobre os 2 arquivos alterados → 0 findings; autocritica por captura via modlens com 1 iteração de correção (badges, abaixo). Nota de atualização do skill: "A newer Impeccable (v4.2.2) is available. Update now? It runs `npx impeccable update`." — registrado, não executado (fora de escopo da rodada).

**Antes:** capturas de diagnóstico `.playwright-mcp/refine-design/before-about-1440.png` e `before-about-390.png` — coluna direita da about terminava cedo (whitespace sobrando), badges como lista simples.

### R1 — Temas → card editorial centralizado
`.repertoire` (id `#temas` preservado no section; h2 recebe `id="temas-titulo"` e `aria-labelledby` atualizado): um card único `max-w-[52rem] mx-auto rounded-lg border border-muted bg-paper` (padding p-7→p-14 por breakpoint), sombra MUITO sutil (offset 24px blur 48px, alpha .35, sem halo zero-offset), conteúdo centralizado (h2 menor uppercase 1.25rem como eyebrow do bloco, citação display 1.5→2rem com aspas tipográficas, atribuição, proveniência). Toque de marca único: aspas de abertura/fechamento em `--color-gold` (sem border-t gold extra — um toque só). Card confirmado centrado por DOM (centro = centro da viewport, ±2px).

### R2 — About (Amanda) → preenchida por hierarquia
Nome como display clamp(2.5rem→4.5rem) sobrepondo levemente a foto (overlap −.38em); decisão de segurança: medição por canvas do topo da foto (luminância ~170, foto 351×517 ~2:3) antes do overlap. Retrato maior (coluna minmax(300px,420px), widths/sizes atualizados para 420px). P1 como lead text-xl/2xl; P2/P3 corridos. Badges ×4 como grade 2×2 tipográfica com hairline dividers (border-block-start em cada linha, border-inline-start na coluna par) — escolhida sobre a coluna vertical border-l (craft-floor veta border-left >1px como device de card; a grade é mais editorial). Filosofia: **permaneceu em `.encontro`** (pull-quote existente mantém o ritmo da página; mover duplicaria o eco "voz→vida" já presente no fim do P3 da about). `.encontro` NÃO perdeu conteúdo.

### R3 — CTA final → seção própria de reprise escura
Next-step removido de dentro de `.practice` (prática fica com h2 + abordagem + proveniência) e virou section `.next-step` própria `bg-night text-reverse py-16 sm:py-28`, entre `.repertoire` e `#contact-info`. Ordem final: presence → situations → practice → about → encontro → repertoire → next-step(night) → contact-info. Pergunta em display clamp(2rem→3rem) white centrada; CTA gold ampliado (min-height 64px, font 1.25rem, radius 8px, largura máx 26rem, hover lift 1px com reduced-motion guard). Aviso demo mantido acima do botão (ContactAction intacto — contrato de acessibilidade do QA preservado).

### Correções durante a rodada
1. **Ordem de seções** (detectada por DOM no primeiro build): next-step tinha ficado ANTES de repertoire (a mesma edição havia removido a filosofia do encontro junto) — restaurada a filosofia em `.encontro` (byte-for-byte da copy aprovada) e movida a section next-step para depois de `.repertoire`. Ordem + `#encontro` revalidados.
2. **Badges desalinhados** (autocritica visual): `padding-top: 2rem` isolado no primeiro item desalinhava a linha 1 da grade 2×2 (Membro ≠ Colunista verticalmente) — padding uniforme; métrica final: texto das linhas em y=598/598 e 647/647.

### Validação
typecheck 0/0/0 · lint 0 warnings · tests 9/9 (4 unit + 5 integration) · build PASS (1 página) · detector impeccable 0 findings · overflow horizontal **0 em 320/390** · âncoras #situacoes/#atuacao/#amanda/#encontro/#temas/#contact-info todas presentes no dist (nav intacto; quirk: `document.getElementById` falha dentro do sandbox evaluate do Playwright nesta sessão — verificado via `querySelector('#id')` + inventário `[id]` do dist) · string fantasma do OCR "pão mole" confirmada ausente de src e dist.

### Leitura visual (modlens)
- `card-1440`: card "well balanced with generous whitespace... curated and editorial rather than template-like" — PASS.
- `about-1440` (pós-fix): grade 2×2 transcrita alinhada, hierarquia em 3 blocos + citação-fonte — PASS (1 iteração).
- `cta-1440`: "large white display heading... prominent golden button" com card/repertoire e footer no enquadramento — presença confirmada; PASS.
- `card-390`: "centered with ample side padding, quote legible" — PASS. `about-390`: stack limpo, foto full-width, nome display no topo — PASS.
- `cta-390`: modlens 429/erro persistente após 1 retry — leitura perceptual NÃO executada neste capture (limitação registrada); evidência objetiva mantida (DOM: min-height 64px, font 1.25rem, bg gold, centralizado; overflow 0).
- Artefatos de OCR com alucinação de leitura ("pão mole", "Schurnovski"→"Schiirnovski") tratados como ruído — conteúdo verificado no dist por busca exata.

**Capturas finais** (`.playwright-mcp/refine-design/`, verificadas em disco): `before-about-1440.png`, `before-about-390.png`, `card-1440.png`, `card-390.png`, `about-1440.png`, `about-390.png`, `cta-1440.png`, `cta-390.png`, `full-1440.png`, `full-390.png`.

**Estado:** editados somente `src/pages/index.astro`, `src/styles/global.css` (DemoLayout.astro não precisou de mudança), este arquivo e capturas. Motion.ts intacto. Sem comandos Git. Preview 4321 (servido de fora da rodada) apenas recarregado — não derrubado.

## 11. REF-WOW (3ª revisão do operador)
Data: 2026-09-07 · Executor: @ui-specialist (único escritor do worktree na rodada) · Território: `src/pages/index.astro` + `src/styles/global.css` · Sem Git · Motion.ts intacto · Ids de âncora preservados (`#temas` verificado no DOM pós-fix: SECTION dentro de `section.repertoire`).

### W1 — About: separar título da foto (rosto 100% visível)
- **Antes (medido, 1440):** nome display bottom 153.4 vs foto top 126.0 → **overlap 27.4px × 420px de largura** (margin-block-end −0.38em = −27.36px) — texto cobrindo a região do rosto. 390: overlap 0 (regra era ≥640px).
- **Decisão:** opção **(a)** — nome 100% acima da foto, `margin-block-end: 1.75rem` (sem overlap em nenhum breakpoint), display preservado em clamp(2.5rem→4.5rem). Descartadas: (b) exigiria medir/segurar região do rosto com folga frágil entre breakpoints; (c) quebrar o nome em duas linhas perde a assinatura de uma linha do display. Nota de integridade: um rascunho da edição adicionou uma figcaption (copy nova — PROIBIDO); revertida imediatamente, zero copy nova persistida.
- **Depois (medido, 1440):** overlap **0.0px**; nome bottom 153.4 / foto top 181.4 (folga 28px ≈ 1.75rem); coluna direita top 181.4 / bottom 696.8 vs foto até 800.9 — preenchida por hierarquia (lead + 2 parágrafos + proveniência + badges 2×2), sem whitespace vazio. 390: overlap 0.
- **Leitura modlens `after-about-1440`:** rosto 100% visível ("face is fully visible"), nenhuma sobreposição texto×foto, grade 2×2 e biografia transcritas — coluna direita equilibrada. PASS.

### W2 — Temas: card "uau" (editorial, não SaaS/kitsch)
- **Direções fundidas: (a)+(b)+(c).** Escala: citação `clamp(2rem → 3.25rem)` lh 1.14, mediana 30ch, card alargado 52rem→56rem com padding generoso (lg: px-20/py-16/pt-20). Tipografia-como-arte: glifo aspas display único `"` em gold `clamp(5.5rem→8rem)` opacidade .5, em camada sob a citação (`z-[1]` na citação; recuo calibrado −.5→−.56 do glifo — 1 iteração de autocritica; final: glifo bottom exatamente no topo da 1ª linha). Contraste: card `bg-paper` com borda `border-muted` fina + **linha-assinatura gold 2px (48×2px medida, rgb 243,211,134) sob o eyebrow** — um único ponto de ouro estrutural. Atribuição em small-caps (uppercase, tracking .18em, 0.875rem, semibold). Removidos os `quote-mark` inline (aspas agora são o glifo; citação limpa).
- **Anti-slop:** sem gradient, sem glow, sem borda dupla, sem ícone decorativo, sombra existente suave mantida; reveal do motion preservado (`.repertoire h2` e `.repertoire blockquote` continuam os alvos).
- **Leituras modlens:** `card-1440` = "refined editorial feel rather than a generic motivational-poster look", "strong typographic hierarchy and minimal decoration" — PASS; pós-iteração, citação confirmada legível com o glifo em camada. `card-390` = "well-composed with clear vertical hierarchy" — PASS.

### Validação
typecheck exit 0 · lint exit 0 (0 warnings) · tests 9/9 (4 unit + 5 integration) · build PASS · overflow horizontal **0 em 320** · âncora `#temas` íntegra (DOM pós-fix). Preview 4321 recarregado (não derrubado).

**Capturas** (`.playwright-mcp/refine-wow/`, verificadas em disco): `before-about-1440.png`, `before-about-390.png`, `after-about-1440.png`, `after-about-390.png`, `card-1440.png`, `card-390.png`, `card-section-1440.png`, `full-1440.png`, `full-390.png`.

**Estado:** editados somente `src/pages/index.astro`, `src/styles/global.css`, este arquivo e capturas. Nenhum comando Git.
