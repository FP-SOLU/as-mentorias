# T03 hero-v2 — revisão renderizada para decisão G1

**UI_IMPLEMENTATION_COMPLETE — somente este refinamento. STOP G1: sem aprovação humana, QA ou G2.**

## Resultado atual — 2026-09-05, ~20:54 UTC−03

Preview existente reutilizado: **http://127.0.0.1:4321/**. A direção ameixa/foto + arte foi REJEITADA pelo operador. A hero-v2 aplica sua emenda: quase preto azulado, marfim/dourado reconhecíveis da AS; sem fotografia no hero; cérebro de estudo grande, central e atrás da leitura. Não há nova página, novo asset ou claim.

### Capturas para o operador

Todos os paths abaixo pertencem a `W:\FP\as-mentoria-concept\.playwright-mcp\`, foram abertos com `read_image` e inspecionados visualmente. DPR1, HeadlessChrome152/Windows, scroll0, estado normal após assentamento:

| Viewport/estado | Evidência |
|---|---|
| 1440×900 | `.playwright-mcp/hero-v2-1440-final.png` |
| 390×844 | `.playwright-mcp/hero-v2-390-final.png` |
| 320×844 | `.playwright-mcp/hero-v2-320-final.png` |
| 768×1024 | `.playwright-mcp/hero-v2-768-final.png` |
| 1440×900, foco CTA | `.playwright-mcp/hero-v2-focus.png` |
| 390×844, mídia/fontes bloqueadas | `.playwright-mcp/hero-v2-fallback-final.png` |

Primeira captura `hero-v2-before-1440.png`: destino confirmado por leitura antes das demais; pegou a arte antes da decodificação e NÃO representa a candidata anterior saudável. Comparação visual completa usa `t03-a-1440-final.png`, também relida. Coordenadas anteriores medidas no DOM antes da edição. Evidências antigas preservadas. Capturas hero-v2 sem sufixo final são primeira inspeção, não rodada final.

### Textos preservados objetivamente

1440×900, fonte carregada, mesmos valores antes/depois:

| Elemento | x / y / largura / altura CSS px |
|---|---|
| H1 | 72 / 145 / 1257,375 / 320,672 |
| Apoio | 906 / 574,484 / 416 / 116 |
| CTA | 906 / 746,984 / 416 / 56 |

Headline/apoio/CTA/aviso/link sem reescrita, tamanho e quebras desktop iguais. Legenda da figura removida com o retrato; Amanda segue nomeada no header/apoio. Fotos originais/derivada não apagadas, bio futura não cancelada. A emenda humana prevalece sobre retrato obrigatório no hero. Mobile/tablet: recomposição explícita da região visual, sem diminuir a letra; geometrias em `hero-v2-final-geometry.json`.

### Crítica renderizada — checklist-design / design-critique

Revisando capturas do localhost em modo **critique**, apoiado na checklist Website/Landing Page. A headline continua a primeira leitura, e o CTA conserva agrupamento/aviso. Um único cérebro ocupa o campo antes fragmentado em foto e objeto: a composição deixa de parecer três peças desconectadas. Preto/marfim/dourado recuperam reconhecimento sem copiar o cérebro de fios do site publicado.

O relevo aparece nas áreas livres e perde luz junto ao título/apoio. Em 320/390 a silhueta continua legível; não há retângulo de fundo ou scroll horizontal de conteúdo. No tablet o assunto central é maior; é intencional, não outra direção. A extremidade inferior desktop aproxima-se do corte do hero, mantendo o volume principal. O metal não foi recolorido nem atribuído a fotografia real.

**Limite:** melhora específica de coesão/escala, não prova de conversão ou aprovação de hero “espetacular”. G1 humano decide se esta integração atende à expectativa. A arte permanece estudo raster provisório; sem lamelas independentes ou iluminação 3D dinâmica.

## Validação atual

- Quatro larguras sem overflow, foto ausente hero, H1/apoio/CTA/aviso completos. Arte com `alt=""`, pai `aria-hidden="true"`, sem foco/eventos. Alpha do original e cópia src confirmado 0–255, não opaco, byte-idênticos: 1448×1086, 1.712.289 bytes, SHA256 `acfc69f4cc4443f2fa9544fdd53f7bb787463ad907b4fb730204e170a057393f`. WebP do pipeline também tem alpha.
- Teclado nas quatro larguras: skip, Tab/Enter, âncoras situações/atuação, abrir hero/fechamento, foco no título informativo, retorno ao acionador/scroll, repetição Space, recarga limpa. Controles ≥44×44, botões56px. `hero-v2-browser-checks.json`: zero erros/warnings normais, somente GET local, delta de rede0 nas ações, cookies/storage vazios na amostra.
- Runner histórico reutilizado; seu seletor `.presence-field img` ficou vazio e não comprova fallback novo. Verificação complementar feita no pai real `.sculpture`: classe media-unavailable, visibility hidden, sem overflow, CTA funcional. A primeira captura de falha deixou faixa vazia; única correção pós-inspeção recolhe padding mobile/tablet. `hero-v2-fallback-final.png` prova leitura contínua sem imagem quebrada e com fonte fallback. Falha tardia pode deslocar apoio para cima: recuperação intencional, não CLS zero.
- Sem JS: informação estática visível, controles inoperantes escondidos. Sem WAAPI: CTA funcional. Controladores TS não alterados.
- **Contraste composto real:** screenshot com textos temporariamente transparentes; pior pixel em cada retângulo de linha contra cor computada. Evidências `hero-v2-contrast-input.json`, `hero-v2-background-{1440,390,320,768}.png`, `hero-v2-contrast-results.json`, runner `hero-v2-measure.mjs`. Mínimos título grande **4,59/4,65/5,44/5,81:1**, apoio **5,52/8,08/14,88/11,71:1**, ordem1440/390/320/768. Aviso mínimo6,21. CTA default13,71, hover15,89, active10,50. Foco3px marfim/offset5px visível no screenshot lido. Método estático conservador; não certifica todos os frames nem WCAG integral.
- **Motion temporal:** `hero-v2-motion-{390,1440}.webm` e `.zip`, `hero-v2-motion.json`. Cinco amostras normais: deslocamento do raster mobile1,532→7,660px e desktop3,643→18,217px; texto/CTA não animados. Mudança para redução, três scrolls reduzidos e carga reduzida: transform none, zero animações. `hero-v2-motion-filmstrip.png` extraído com ffmpeg e lido como complemento; PNG sozinho NÃO prova movimento. Vídeo/trace não são benchmark de FPS ou CA-13.

A11y: pacote primário visual-perception-reflow, follow-up keyboard-focus/media-alternatives. Leitor de tela real, matriz WCAG integral, zoom400/texto200/espaçamento integral, outros browsers/dispositivos e CA-13 completo **não executados aqui**; sem falsa aprovação AT/QA.

## Handoff e operação

Base parcial já continha hero/assets/engine/testes, apesar dos docs antigos ainda descreverem T02/bloqueio. Inspecionada antes de editar, sem duplicar implementação. Skills/fontes/engine/referências na emenda de `ui-direction.md`; scripts/falhas/jobs no topo de `implementation-checks.md`.

Preview pré-existente PID **21928**, pai **3412**, ancestral npm **15648**, listener **127.0.0.1:4321** preservado ativo. Job proprietário não disponível nesta sessão; NÃO alegado como novo job gerenciado. DSH PID **19036**, porta3080, intocado. Nenhum servidor criado nem processo encerrado. Se o preview parar: no workspace, `npm run preview`, somente após confirmar porta livre.

Jobs desta revisão: **pwsh-25 exit0**, **pwsh-26 exit1** (assertion de serialização alt, corrigida), **pwsh-27 exit0** final; saídas coletadas. Nenhum job desta revisão em execução.

**STOP G1.** Próxima decisão é do operador/maestro. Sem T04/cérebro final/fullpage/Git mutável/remoto/coleta/contato; não chamar QA diretamente.

---

# Histórico anterior — T03 dependência de imagem exploratória (superado pela retomada acima)

**BLOCKED — pré-condição de UI não satisfeita: estudo imagético provisório necessário para testar a candidata A.**

Este é um pacote de destravamento, NÃO um checkpoint renderizado concluído, GO de revisão humana, G1 APPROVED ou autorização G2. Nenhum código de produção foi alterado nesta rodada. STOP de escrita após este pacote até receber o asset.

## Contexto conferido

Workspace confirmado por `pwd`: `W:\FP\as-mentoria-concept`. AGENTS global/local, gate-log, tasks (incluindo T03), plan, spec, implementation-checks e **ui-direction completo (409 linhas)** lidos. Os três arquivos reais de src e package.json foram lidos. A base permanece Astro 7.3.1 / TS 6.0.3 SSG sem React/backend; versões são as declaradas no manifest, não uma nova aferição da instalação. Nenhum CLAUDE encontrado no workspace. Limite ancestral anteriormente registrado não reaberto. Obsidian consultado: resultados de outro projeto descartados. Não houve subdelegação, Git mutável ou alteração de Product/Architecture/gates.

Autorização vigente: gate-log §T02/T03 e pedido atual permitem imagens exploratórias provisórias. Não permitem cérebro final consolidado nem pessoa sintética. Embora o runtime enumere uma ferramenta de geração, ela não integra a superfície autorizada deste preset UI; o anexo restringe as ferramentas desta fase. Não tentei acioná-la nem contornar por shell. O Maestro dispõe do mecanismo autorizado pelo operador.

## Decisão delimitada, ainda não validada

Manter **A — Campo de presença** como candidata a provar: headline ampla acima de um campo assimétrico pessoa / escultura / ação. A arte precisa ter silhueta cerebral reconhecível, lâminas e abertura espacial; uma esfera ou wireframe procedural não prova isso. Um grande espaço reservado provaria apenas ausência de arte. Portanto, solicitar **um único estudo raster original provisório**, não fullpage nem imagem de UI.

**B — Retrato em contraponto** permanece alternativa: autoria fotográfica dominante, verde profundo e Bodoni Moda; menos protagonismo cerebral. Não escolher B só para fugir da dependência de A. Após o asset, confrontar o mesmo conteúdo, retrato e recorte hero/transição quando útil, não produzir duas páginas completas. Nenhuma candidata foi renderizada nesta sessão; não há vencedor demonstrado.

## Brief de produção para o Maestro

**Objetivo:** produzir uma imagem isolada que permita testar volume, silhueta, cor e ocupação da arte no hero A antes de G1. Uso exclusivamente interno exploratório. Não tratar como asset final T04.

**Quantidade:** uma imagem, uma escultura, uma vista. Não gerar board, múltiplas variações no mesmo frame, screenshot de página ou pessoa.

### Prompt completo para `codex_connect_image_generate`

> Create ONE original standalone sculptural image for an INTERNAL, PROVISIONAL web art-direction experiment called “Campo de presença”. This is an exploratory art asset, NOT a finished brand asset, NOT a website mockup, NOT a medical illustration. Render a clearly recognizable cerebral silhouette in a three-quarter oblique view, as a deliberately crafted sculpture made of broad curved satin-metal lamellae. Two subtly unequal rounded cerebral volumes retain an unmistakable brain-like overall silhouette with a restrained suggestion of large folds. The sculpture must not become a sphere, donut, flower, shell, ribbon knot or generic abstract blob. Introduce one deliberate oblique opening between the two volumes: a narrow but clearly readable interval of empty space, widening gently toward the lower right, suggesting a pause for listening and expression rather than damage, diagnosis or an exploded anatomical model. Keep the volumes visually related and close enough to read as one coherent sculpture. Use neutral silver-grey satin metal, base around #B9B8C0, broad soft highlights around #ECE8EF and deep material shadows; only a restrained plum reflection on the undersides. No gold, rose gold, mirror chrome, glass, translucent resin, neon or glitter. A large soft key light from upper left reveals the wide curved surfaces and their thickness; use enough soft fill to retain the silhouette, controlled contrast, no clipped white hot spots. The object should have tangible weight, depth and surface, with broad readable forms that survive being displayed at 180 pixels wide. Show the complete object without clipping, centered in a landscape 4:3 canvas if supported, occupying roughly 75 percent of width and 80 percent of height, with clean breathing room around all edges. Isolate on a genuinely transparent background if the renderer supports real alpha; do not draw a checkerboard. If real transparency is unavailable, use a perfectly uniform solid plum background #611637 with no vignette, no horizon, no platform and no cast shadow extending far beyond the object. Keep the image sharp across the sculpture; no depth-of-field blur. This object will be placed separately from a real human portrait and separately from live HTML headline and controls. Do not include any people, faces, hands, eyes, heads, portraits, skin, photographic human elements, typography, letters, words, numbers, labels, logos, UI, buttons, borders, frames or watermark. Do not copy any existing artwork or any reference-site asset. Avoid the familiar frontal gold-wire brain, neural-network webs, glowing synapses, particles, scan lines, grids, tech interfaces, anatomical labels and clinical imagery. The result should feel like an authored spatial metaphor of thought and a pause in communication, not an AI product illustration, a cosmetic advertisement or a jewellery campaign. Deliver a single clean high-quality raster image of the original sculpture, no presentation board.

### Arquivo e recibo solicitados

- Preservar o **original exato** retornado pelo serviço, com extensão real; não reencodar sobre ele. Destino sugerido no workspace: `.playwright-mcp/t03-assets/campo-presenca-study-01-original.<ext-real>`.
- Se a ferramenta preservar original em outro local, devolver o path absoluto real e disponibilizar uma cópia byte-a-byte no workspace. Não confundir preview da conversa com original.
- Preferência de composição: 4:3, aproximadamente 1536×1152 ou maior. Tamanho/estilo são defaults do serviço: isso é uma solicitação no prompt, não parâmetro garantido. Aceitar o retorno real para inspeção, sem fingir dimensões ou alpha.
- Devolver: path do original e cópia, dimensões, formato/MIME, presença real de alpha, bytes, SHA256, data, ferramenta/modelo se informado e prompt exato. Direitos/limites do serviço não devem ser inferidos de acesso à ferramenta.
- Não gerar Amanda, não enviar sua foto ao gerador e não produzir marca ou fontes. Não fazer geração adicional automática se o primeiro resultado falhar; entregar a imagem para curadoria UI e registrar a limitação.

### Contrato de integração futura pela UI

1. Ler o original com visão antes de qualquer integração. Rejeitar esfera/filler, silhueta ilegível, metal cosmético, fios/neon, anatomia clínica ou bordas cortadas. Avaliar reconhecimento em escala próxima de 180 px, não apenas no original grande.
2. Manter original fora do build. Derivado provisório sugerido `src/assets/explorations/campo-presenca-study-01.png` ou formato real apropriado; processamento responsivo pelo pipeline Astro após consulta de API vigente. Registrar transformação/hash/origem. Nenhum arquivo de asset foi criado agora.
3. Desktop: área aproximada de 390–470 px no campo inferior, entre retrato real e apoio/CTA, sem ocupar letras nem rosto. `contain` inicialmente preserva a silhueta; não ampliar para cobrir o hero inteiro. Fundo com alpha é preferível. Se sólido, comparar junção de cor real: sem resolver discrepância com glow, mix-blend que destrua material ou wash sobre todo o hero.
4. Mobile: faixa visual com fotografia e arte em regiões distintas, aproximadamente 150–190 px de altura; preservar cabeça/rosto/mão na fotografia e silhueta recognoscível da arte. Em 320, reduzir área da arte antes de reduzir fonte/aviso. Não miniaturizar a composição desktop inteira.
5. Arte decorativa com `alt=""`, dimensões/aspect ratio reservados, sem foco. Identidade e CTA permanecem HTML legível independentemente de imagem. Falha controlada não deve deixar imagem quebrada ou buraco enorme.
6. **Um raster achatado não oferece movimento independente das lâminas.** Não alegar luz/oclusão volumétrica dinâmica. Pode provar assentamento espacial do objeto inteiro e continuidade para um acento editorial nativo. Separação física animada exige assets em camadas ou modelo próprio e nova decisão focada; não desenhar cérebro procedural como substituto.
7. Motion normal ainda deve narrar “abrir espaço”: deslocamento decorativo limitado do campo ao sair do hero e assentamento do alinhamento editorial na transição; retrato, headline e controles estáveis. Reduced motion remove movimento integralmente e mantém composição completa. Controlador CTA independente de engine.
8. Fonte display Bricolage / corpo Source Sans 3 continuam candidatas, licenças textuais de T01 não equivalem a arquivos baixados. Não consolidar tokens antes do render. G1 humano permanece posterior às evidências.

## Referências efetivamente reinspecionadas

Índices ui, landing-pages e ecommerce lidos antes da seleção; fichas e imagens locais abertas:

- `C:\Users\felip\.dsh\references\ui\ecommerce\34-electronic-materials-office.md` e `.png`: luz/material/escala macro tornam a superfície tangível; não copiar teclado, diagonal ou composição.
- `C:\Users\felip\.dsh\references\ui\ecommerce\39-hyer.md` e `.png`: assunto dominante e ação em área separada; não copiar avião, wordmark gigante ou layout.

Somente previews históricos, não sites ao vivo, licença de reprodução não obtida. Não enviados ao gerador.

Baseline lido efetivamente com `read_image`:
- `.playwright-mcp/page-2026-09-05T18-49-14-555Z.png` — 1440×900: arte de fios atrás do texto, rosto ausente da abertura.
- `.playwright-mcp/page-2026-09-05T18-50-47-816Z.png` — 390×844: arte atravessa título/apoio e CTA inferior fixo compete com o percurso.

A candidata pretende separar arte/leitura e trazer Amanda cedo; **melhoria ainda não demonstrada**. Não foi efetuada auditoria renderizada nova por checklist-design nem medição de contraste.

## Skills e mecanismo — estado real deste pacote

| Skill | Carga/aplicação nesta rodada |
|---|---|
| impeccable | Carregada; context.mjs executado uma vez e new-work lido. Spec/T01 suprem briefing delimitado. Não criar PRODUCT/DESIGN/decision page, seeding ou subagentes que ampliem esta etapa; craft-floor pendente até edição efetiva de UI. |
| design-system | Carregada; inventário confirmou shell utilitário sem tokens de marca implementados; propostas T01 não promovidas a sistema final. |
| design-critique | Carregada; crítica estreita aos dois PNGs baseline, não verdict de candidata inexistente. |
| checklist-design | Carregada; revisão formal renderizada e leitura dos suportes/checklist ficam pendentes após destravamento. Não alegar aplicação concluída. |
| web-accessibility | Carregada; riscos de reflow/arte e foco identificados no contrato. Suportes e pacote de verificação ainda pendentes; nenhum claim WCAG. |
| build-awwwards-quality-sites | Carregada; asset honesto, materialidade e primeiro frame completo. Prescrições de GSAP/smoother/fullpage não prevalecem sobre escopo/engines abertas. |
| imagegen-frontend-web | Carregada para brief de arte, sem chamada de geração. Solicitação explícita de asset isolado prevalece sobre comps/seções default; não produzir fullpage ou retrato sintético. |
| cinematic-scroll-storytelling | Avaliada pelo catálogo, não carregada neste pacote de dependência: coreografia executável depende da imagem recebida. Reavaliar na retomada. |
| gsap-core / gsap-scrolltrigger / gsap-performance | Avaliadas pelo catálogo, não carregadas nem adotadas antes de resolver mídia; comparar na mesma passagem se timeline/scroll trouxer benefício. |
| gsap-plugins / gsap-react | Não carregadas: nenhum plugin específico necessário; React fora da base. |
| threejs | Avaliada, não carregada agora: raster solicitado não prova volumetria interativa. T01 registra ficha limitada; consultar docs oficiais se a opção espacial for retomada. Não excluída por peso. |
| estilos concorrentes | Não carregados: impeccable + direção T01 suficientes; sem mistura de sistemas. |

CSS/native, Motion, GSAP/ScrollTrigger, Three/WebGL e combinação permanecem abertos. Nenhuma engine instalada, API adotada ou licença nova afirmada: Context7 ainda não acionado. Comparação real de benefício/bundle/performance fica para implementação, não há vencedor por presunção de tamanho.

## Validação, jobs e retomada

- **Typecheck / lint / unit / integration / build:** não executados nesta rodada documental. Os PASS de T02 são históricos e não validam T03.
- **Render 320/390/768/1440, CTA/foco/retorno, teclado, console, overflow, contraste, normal/reduced motion temporal, bundle/perf:** pendentes; nenhuma captura da candidata, vídeo ou trace criado. Sem bugs de produção corrigidos agora.
- **Jobs iniciados nesta sessão: nenhum. Processos de servidor iniciados: nenhum. URL de preview ativa por esta sessão: nenhuma.** Apenas comandos síncronos pwd/context; nenhum servidor DSH ou projeto tocado. Não se afirma inventário de processos de outras sessões.
- Escrita única: este arquivo. `src`, manifest/lockfile, ui-direction, implementation-checks, spec/research/plan/tasks/gate-log e baseline preservados.

**Próxima ação Maestro:** gerar e devolver o estudo provisório pelo prompt acima, com paths e recibo; então retomar UI como único escritor para implementação + validação T03. Ainda não há GO para G1. Não acionar QA, T04, G2 ou fullpage. A aprovação da imagem para estudo não consolidará direção nem tornará o estudo asset final.
