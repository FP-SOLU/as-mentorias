# AS Mentorias — hero-v2 / emenda direta do operador

## Direção vigente para revisão G1 — 2026-09-05

**A candidata ameixa/foto + arte foi REJEITADA pelo operador. G1 NÃO aprovado.** O conteúdo T01 abaixo é histórico e não governa a revisão hero-v2 nos pontos conflitantes. O pedido atual define: cores reconhecíveis do site real; retirar a foto somente do hero; cérebro de estudo sem fundo, grande, central e atrás da leitura; preservar os textos e o posicionamento elogiados. Não gerar duas novas páginas ou outro asset.

### Implementação delimitada

- Paleta aferida na auditoria `current-site-audit.md:68`: `#070910` quase preto azulado, `#F4EFE2` marfim e `#F3D386` dourado. Tokens locais agora `--night`, `--paper`, `--reverse`, `--gold`; superfície de passagem `#E4DCC8`, apoio `#50576A`. A substituição dos tokens compartilhados também remove o lilás da transição já existente, sem alterar seu layout/conteúdo ou ampliar a página.
- Fontes **preservadas**, não trocadas pelas do site publicado: Bricolage 600 e Source Sans 3 400/600 locais, como no código parcial recebido. Não houve novo download, subset ou alteração de licença. Recibos históricos: `.playwright-mcp/t03-assets/source-receipts.json`; notices existentes mantidos. Fontes totalizam 356.160 bytes, acima do target preventivo de 150 KiB; otimização/CA-13 integral não concluídos aqui.
- Hero desktop conserva H1 em x72/y145, apoio em x906/y574,484 e CTA em x906/y746,984, em 1440×900. Copy, quebras desktop, fontes, tamanhos e larguras iguais. Retirada a figura/retrato e sua legenda; Amanda continua identificada no header e no apoio. Originais/derivado fotográficos não excluídos; biografia futura não cancelada. A emenda humana atual prevalece sobre a exigência antiga de retrato no hero.
- Cérebro é o **mesmo estudo provisório original**, PNG 1448×1086, 1.712.289 bytes, SHA256 `acfc69f4cc4443f2fa9544fdd53f7bb787463ad907b4fb730204e170a057393f`. Original e cópia em src são byte-idênticos, alpha real 0–255, não opacos. WebP responsivo também conserva alpha. Nenhuma reprodução do cérebro do site AS.
- Plano decorativo absoluto de 1100×825 em desktop, centrado em x720; `z-index:0`, texto em 1, sem eventos/alt/foco. Opacidade .68 e dois véus locais sobre a própria arte dão recuo nas áreas de título/apoio. Não há blur, backdrop-filter, sombra gigante, WebGL ou recoloração do metal. O brilho do material permanece, abaixo da força do texto.
- Mobile: arte 120vw, central, overflow decorativo recortado pelo hero; mantém silhueta reconhecível. Faixa visual de 200px antes do apoio; tablet 305px. É recomposição explícita da região antes ocupada pela foto, sem reescrever/reduzir texto. Falha da mídia recolhe esse espaço em até 1099px; desktop mantém as posições protegidas. Falha tardia mobile pode deslocar o apoio para cima — decisão de recuperação, não claim de CLS zero.

### Mecanismo e seleção de skills desta revisão

`impeccable` principal: context executado uma vez, polish e craft-floor lidos; refinamento estreito autorizado sem criar PRODUCT/DESIGN. `design-critique` + `checklist-design`: crítica das capturas locais, índice/critique/Landing Page lidos; headline/apoio/arte/CTA, sem impor prova social ou formulário. `web-accessibility`: três suportes lidos; pacote primário visual-perception-reflow e follow-up keyboard-focus/media-alternatives. Nenhuma skill requerida ausente.

`design-system` avaliada, não carregada adicionalmente: não se cria biblioteca/primitive, apenas substituição cromática diretamente prescrita. `build-awwwards-quality-sites` e `cinematic-scroll-storytelling` avaliadas, não carregadas nesta revisão estreita: não há nova narrativa ou composição integral a projetar. GSAP core/ScrollTrigger/performance/plugins e Three avaliadas, não adotadas: engine nativa existente resolve movimento do raster inteiro; nenhum modelo volumétrico/camadas independentes disponível que justifique mudar engine. Imagegen, estilos concorrentes e no-ai-slop não carregados: asset e copy devem permanecer. Sem subdelegação.

Mantido `motion.ts` existente: WAAPI para assentamento de 720ms e abertura editorial 480ms; rAF passivo para deslocamento integral limitado 10px mobile/26px desktop, cancelamento/redução/fora de contexto. Não é animação individual das lâminas nem iluminação 3D dinâmica. Motion/GSAP poderiam coordenar mais sequências, mas não acrescentam benefício concreto ao único raster desta tarefa. Three exigiria outro asset e outra decisão. Não houve nova API ou dependência: reutilizados os contratos Astro/scripts/imagens já documentados em plan §9; não se afirma consulta Context7 nova.

Referência global efetivamente revista: índices ui/landing-pages/ecommerce, ficha e PNG Electronic Materials Office (34): escala macro e luz material, sem copiar objeto/layout. A direção explícita do operador prevalece. Obsidian consultado; resultados de outro projeto descartados, nenhuma decisão específica AS recuperada.

**Resultado visual, checks, limitações e capturas atuais: `visual-checkpoint.md` e `implementation-checks.md`. STOP G1: solicitar julgamento humano da hero-v2, não promover estudo a asset final.**

---

# Histórico T01 — AS Mentorias — direção de arte candidata (superado nos pontos acima)

**T01 documental concluída para handoff ao @maestro. Direção candidata, NÃO consolidada.**

**Conceito principal: Campo de presença.** Um grande enunciado tipográfico abre a página; abaixo dele, Amanda real e uma futura escultura cerebral compartilham um campo contínuo de cor. Uma abertura entre as lâminas da escultura conduz o olhar à informação comercial, sem atravessar letras ou rosto. A composição transforma pensamento, escuta e expressão em relações de espaço, luz e ritmo. O conceito é uma ferramenta interna de direção de arte, não nome de método ou nova promessa da AS.

A candidata combina **ameixa saturada, lilás mineral, metal acetinado, Bricolage Grotesque display e Source Sans 3 de leitura**. As escolhas são propostas para confronto renderizado em T03, não tokens ou fontes aprovados. Não herda azul/dourado, não usa serifa fina como atalho para luxo e não depende de efeitos para explicar a atuação.

## 1. Autoridade, escopo e evidência desta rodada

- Workspace confirmado por `pwd`: `W:\FP\as-mentoria-concept`.
- Única saída autoral: `specs/as-mentorias/evidence/ui-direction.md`. O arquivo não apareceu na descoberta anterior à criação. Nenhum Product, plan, tasks, gate-log, código, manifest, lockfile ou asset editado.
- G0 APPROVED e autorização somente T01 conferidos em `../gate-log.md`, linhas 19–27. Os cabeçalhos anteriores de Product/Architecture não reabrem esse gate. G1, G2 e G3 permanecem pendentes.
- Lidos integralmente: AGENTS global/local, `../gate-log.md`, `../tasks.md` (T01 e política de skills), `../plan.md` (especialmente §4/7), `../spec.md`, `../research.md` e `current-site-audit.md` (especialmente §9). Growth utilizado pela incorporação em spec/research; `growth-input.md` não foi relido nesta execução.
- Descoberta local: somente governança, documentos e baseline; nenhum design system implementado, manifest ou código a preservar. AGENTS local é o único encontrado no workspace; nenhum CLAUDE encontrado nele. A limitação ancestral em `W:\` registrada por Product não foi reaberta nem contornada.
- Obsidian consultado antes da exploração: busca simples trouxe material de outro projeto, descartado; busca de paths AS/Amanda não encontrou notas específicas. ADR-038 foi lido via MCP, preservando ownership, escritor único, gates e QA independente. Routing local atual e skills sob demanda prevalecem sobre referências legadas do ADR. Nenhuma escrita de memória.
- Data aferida na consulta de fontes: **2026-09-05, 19:17 UTC−03**. Datas dos PNGs identificam coletas antigas, não nova renderização.
- Runtime informa GPT Astra. HIGH é justificável **somente para a decisão principal de direção de arte/hero**, pela conciliação entre originalidade, autoria real, IA comercial e composição mobile. Leituras, licenças e escrita documental são trabalho rotineiro; não justificam max. Não houve delegação, fallback de modelo ou auditoria de headers; este documento não certifica mudanças efetivas de effort durante a sessão.

**Limites mantidos:** sem T02/T03, instalações, servidor, protótipo, mockup renderizado, captura da demo, produção de assets, cérebro final, Git mutável, contato, publicação ou proposta comercial. Brief de arte abaixo não é prompt de produção. Nenhuma engine final escolhida.

## 2. Skills avaliadas e aplicação efetiva

Skills foram carregadas via `skill` antes das respectivas análises. A aplicação é delimitada a T01; exemplos de código, recomendações de stack e workflows de geração não são autorização de execução.

| Skill avaliada | Carregada? | Aplicação efetiva em T01 / exclusão ou limite |
|---|---|---|
| `impeccable` | Sim | Skill principal de direção. Lidos `shape.md` e `new-work.md`: modo Persuade, substituir mundo visual preservando verdade, conceito reconhecível, composição antes de implementação. Spec/research suprem o briefing já resolvido. Sem scripts de setup/seeding, decision page, PRODUCT/DESIGN, comps ou finish subagents: ampliariam a superfície documental autorizada. `craft-floor` não carregado, pois não há edição de UI. |
| `design-system` | Sim | Inventário do existente e proposta de papéis cromáticos, tipos, spacing, controles e estados. Não inventado score de sistema inexistente nem package/API de componentes. |
| `design-critique` | Sim | Primeira impressão, hierarquia, consistência e relação pessoa/CTA aplicadas aos PNGs baseline; comparação crítica dos conceitos. Não é verdict visual da futura candidata. |
| `checklist-design` | Sim | Lidos índice, modo critique e checklist Website/Landing Page. Crítica estreita das capturas antigas em §3; headline, contexto, hero tangível, ação e fechamento usados como perguntas de revisão. Prova social/FAQ não viram obrigações contra conteúdo aprovado; dicas sobre conversão não são evidência de resultado AS. Revisão renderizada da candidata fica para T03/T07. |
| `web-accessibility` | Sim | Lidos os três documentos de suporte obrigatórios. Pacote primário preventivo `visual-perception-reflow`: arte versus leitura, contraste, zoom e redução; teclado/foco do CTA como follow-up obrigatório. Matriz manual/automatizável em §10. Sem declaração WCAG por documento. |
| `build-awwwards-quality-sites` | Sim, claramente pertinente | Ambição coesa entre mídia/tipo/motion, hero mais forte que seções de apoio, primeiro frame completo e origem honesta dos assets. Skill de design compatível: `impeccable`. As prescrições de GSAP, smooth-scroll engine, geração e página completa são adiadas/não vinculantes diante de T01/G1/G2. Awwwards é barra de acabamento, não claim de prêmio. |
| `cinematic-scroll-storytelling` | Sim | Vocabulário e diferença entre movimento disparado por entrada e ligado ao progresso; narrativa em momentos e pausas. Não adota anatomy pronta, preloader, stack de cards, Lenis, pin ou texto escondido até reveal. |
| `gsap-core` | Sim | Critérios documentais para coreografia interrompível e estados finais estáticos; confrontar coordenação entre camadas em T03. Sem uso de API, código, licença ou preferência automática por GSAP. |
| `gsap-scrolltrigger` | Sim | Distinguir entrada discreta de progressão ligada ao scroll; registrar risco de pin/refresh/reflow e retorno. Nenhuma API adotada ou alegação de integração pronta. |
| `gsap-performance` | Sim | Limitar trabalho simultâneo, preferir deslocamento/opacidade a mudanças de layout, encerrar trabalho fora de contexto e evitar camadas promovidas indiscriminadamente. Custos são hipóteses para profiling, não garantia de compositor/FPS. |
| `gsap-plugins` | Não | Avaliada pelo catálogo: sem necessidade documental concreta de Flip, drag, física, scramble, morph ou smoother. Plugins adicionais não justificam carga nesta etapa. Reavaliar se um experimento T03 realmente precisar. |
| `threejs` | Sim, **entrada limitada** | O conteúdo carregado é apenas ficha que aponta ao bundle upstream; não contém workflow completo de cenas/materiais/shaders. **Workflow completo indisponível nesta instalação.** Nenhum upstream instalado e nenhuma leitura completa alegada. A hipótese espacial permanece aberta; T03 deverá resolver documentação/skill necessária se testar Three. T01 pode definir material/luz sem fingir implementação. |
| `gsap-react` | Não | Não há React nem integração React aprovada para este recorte. |
| `documentation` | Sim | Documento organizado para próximo owner: proposta primeiro, rastreabilidade e alternativas, sem duplicar integralmente Product/Architecture. |
| `no-ai-slop` | Sim | Leitura crítica da copy pública já fornecida: preservar especificidade de reunião, responsabilidades e equipe; nenhum claim novo de transformação garantida. Headline/CTA/aviso e citação aprovados preservados, sem reescrita estratégica. Não executado workflow de edição integral: não há novo draft comercial a substituir. |
| `imagegen-frontend-web`, `brandkit`, `image-to-code` | Não | Avaliadas como produção visual: T01 pede brief, não geração nem comp. Carga não é necessária para executar geração proibida; G2 vem depois de G1. |
| `redesign-existing-projects`, `firecrawl-website-design-clone`, estilos concorrentes | Não | Auditoria existente + `impeccable` cobrem direção. Não extrair sistema para clonagem, não combinar presets estéticos nem instalar ferramentas. |

Context7 **não utilizado**: não se adotou API nova. As consultas oficiais realizadas foram de licença/proveniência de fontes, não implementação prematura de motion.

## 3. O que o baseline permite afirmar

Proveniência abreviada: **S1** = [site publicado AS](https://asmentorias-beep.github.io/destrave-sua-lideranca-e-oratoria/), **U1** = `current-site-audit.md`. Usos e qualificações seguem research §3: P é publicação própria, IDX é snippet e IND é comprovação independente. As fotografias candidatas são `amanda-xadrez.jpeg` e `amanda-reflexao.jpg`, relativas à URL S1; não foram baixadas nesta rodada.

**Revisando capturas antigas em modo critique, com apoio do checklist Landing Page.** Os títulos têm hierarquia clara e os dois retratos tornam Amanda identificável no percurso. O CTA preenchido é fácil de localizar. Esses acertos devem sobreviver à reconstrução.

O principal problema visual aparece em D1/M1: a rede cerebral ocupa a mesma região das letras e do apoio. A arte tem presença, mas disputa a atenção que deveria apresentar Amanda e a atuação. D2/D3 repetem quase a mesma matriz de quatro textos; M3 transforma essa repetição em um corredor de caixas. Em M6, a frase passa sobre o rosto. A nova direção deve dar à fotografia um espaço próprio, variar a cadência e usar a arte para compor o percurso, não como papel de parede.

### Amostra efetivamente aberta com visão nesta T01

Todos os caminhos abaixo pertencem à raiz `W:\FP\as-mentoria-concept\.playwright-mcp\`. São **8 dos 15 shots preservados**; os outros sete não foram reinspecionados nesta rodada. Coordenadas de scroll são as registradas no relatório original.

| ID | Arquivo existente / viewport / y | Evidência visual usada |
|---|---|---|
| D1 | `page-2026-09-05T18-49-14-555Z.png` · 1440×900 · 0 | Serifa clara/dourada, cérebro frontal de fios e tecido azul, mensagem/CTA sobre a arte, rosto ausente da abertura. |
| D2 | `page-2026-09-05T18-49-29-720Z.png` · 1440×900 · 800 | Título dominante e grid 2×2 de públicos, bordas e grande pausa superior. |
| D3 | `page-2026-09-05T18-49-44-479Z.png` · 1440×900 · 1600 | Segundo grid 2×2 semelhante, onda separadora e início da faixa fotográfica. |
| D5 | `page-2026-09-05T18-50-12-374Z.png` · 1440×900 · 2900 | Retrato com blazer escuro/blusa vermelha, rosto inclinado e mão apoiada; parte do tabuleiro. Bio e linha de credenciais. |
| M1 | `page-2026-09-05T18-50-47-816Z.png` · 390×844 · 0 | Agenda fragmentada, arte atravessando título, CTA inferior fixo cobrindo parte do secundário. |
| M3 | `page-2026-09-05T18-51-17-471Z.png` · 390×844 · 1300 | Quatro públicos em caixas verticais; barras superior e inferior persistentes. |
| M6 | `page-2026-09-05T18-52-03-837Z.png` · 390×844 · 3160 | Amanda sentada em banco, roupa clara, rosto de perfil; frase atravessa a fotografia; início do retrato de xadrez. |
| M9 | `page-2026-09-05T18-52-46-876Z.png` · 390×844 · 5021 | Fechamento em painel, etiquetas da campanha, marca pequena e contatos. Nenhum contato acionado. |

Não foram medidos contraste, motion, performance ou legibilidade em zoom desses PNGs. Não houve nova renderização do site AS ou da demo. O nome e identidade dos retratos vêm de S1/U1, não de reconhecimento facial independente. Instagram não foi reaberto, seus posts não foram visualmente presumidos.

### Hipótese de transformação comercial

| Antes observado | Intervenção candidata | O que o avaliador deverá conseguir explicar depois |
|---|---|---|
| Abertura de workshop, data e urgência dominantes | Abrir com Amanda/AS, mensagem aprovada e retrato cedo; iniciativa divulgada aparece depois, contextualizada | Quem conduz, qual campo de atuação e por que isso importa no trabalho. |
| Arte cerebral como textura sob texto | Objeto cerebral autoral com silhueta legível, luz dirigida e corredor de leitura limpo | Lembrar uma composição específica sem confundir AS com plataforma de IA ou clínica. |
| Públicos/assuntos em matrizes repetidas | Situações em sequência aberta; atuação em composição editorial distinta | Relacionar a página a uma reunião, nova responsabilidade ou conversa com equipe, sem inventar diagnóstico. |
| Bio e badges concentram autoridade tardia | Pessoa na abertura; trajetória atribuída em leitura clara; mentoria declarada explicada antes da bio | Distinguir atuação, biografia publicada e prova independente ausente. |
| Conversão de vaga repetida em barras | CTA único em intenção, repetido no hero/final, aviso visível e região informativa acessível | Identificar próximo passo e saber antes de clicar que o contato está inativo. |

A hipótese é de **melhor compreensão, lembrança e força de apresentação comercial da FP**. Nenhuma taxa de conversão, receita, demanda ou eficácia de mentoria foi medida ou prometida.

## 4. Referências selecionadas e limites

Lidos os índices `ui/README.md`, `ui/landing-pages/README.md` e `ui/ecommerce/README.md` antes da seleção das respectivas fichas. O índice geral `references/README.md` também foi consultado, posteriormente. O link aninhado de ecommerce no índice não corresponde ao diretório utilizado; a coleção efetivamente lida está em `C:\Users\felip\.dsh\references\ui\ecommerce\`.

Foram lidas **sete fichas e suas sete imagens**, não a biblioteca inteira. Cinco referências ampliam as duas capas de Product. Seleção: tipografia em escala arquitetônica, objeto/material com presença, pessoa e alternância de densidade. Coleções de SaaS/ecommerce não definem IA, catálogo ou identidade da AS.

### Matriz referência → princípio → aplicação / limite

| Referência / fonte | Conteúdo efetivamente visto | Princípio extraído | Aplicação AS / limite |
|---|---|---|---|
| **Hyer** · [site](https://www.flyhyer.com/) · `ui/ecommerce/39-hyer.md` e `.png` | Capa 800×450: marca gigantesca, avião diagonal atravessando espaço central, texto curto e ações no limite inferior | Um assunto visual dominante pode coexistir com mensagem curta e ação fora de sua silhueta | Escultura e retrato em campo inferior, informação protegida. Não copiar avião diagonal, logotipo oversize, azul, alinhamentos ou cápsulas. Capa antiga não é site atual; não inspecionado ao vivo nesta T01. |
| **Mouthwash** · [site](https://mouthwash.co/) · `ui/ecommerce/36-mouthwash.md` e `.png` | Capa 800×450: masthead monumental, issue/date, três entradas com fotografia e títulos; “Issue 03 / Spring Summer 2021” | Tipografia pode sustentar autoria e criar hierarquia sem ornamentação | Nome e assunto com escala decidida; repertório assinado, sem simular revista/acervo. Não importar três colunas, wordmark ou edição. Somente capa histórica. |
| **Supercut** · [site](https://supercut.ai/) · `ui/landing-pages/04-supercut.md` e `.png` | Imagem longa 830×4853: retratos integrados a contextos de gravação, grandes demonstrações intercaladas com faixas de texto, final com fotografias deslocadas | Imagem e texto podem variar densidade mantendo uma gramática | Alternar campo de presença, situações, atuação e trajetória. Não usar UI de software, clientes, terminais, caixas de vídeo, vermelho ou cards como modelo. Visão da composição geral; não auditoria de detalhes pequenos, motion ou interação. |
| **Dia** · [site](https://www.diabrowser.com/) · `ui/landing-pages/08-dia.md` e `.png` | Imagem longa 830×4650: abertura preta com rosto expressivo grande, mudança para corpo claro, demonstrações e fechamento | Contraste de massas e presença humana dão um corte de ritmo inequívoco | Abertura cromática intensa → situações claras; rosto real reconhecível cedo. Não reproduzir grito, cena de vídeo, centralização, wordmark, gradiente arco-íris ou grade de features. Nada de comportamento inferido do PNG. |
| **Dinamo** · [site](https://abcdinamo.com/) · `ui/ecommerce/28-dinamo.md` e `.png` | Capa 800×450: grande imagem de edifício com “REPRO” ocupando a fachada curva; menu simples deslocado à margem | Letras podem ser matéria espacial, não só legenda decorativa | Display com massa e escala próprias; escultura responde ao espaço aberto pelo texto. Não deformar texto essencial em perspectiva, copiar fachada ou tratar a navegação densa como padrão. Não inferir família pela aparência. |
| **Electronic Materials Office** · [site](https://electronicmaterialsoffice.com/) · `ui/ecommerce/34-electronic-materials-office.md` e `.png` | Capa 800×450: teclado macro em diagonal, textura fosca, recorte muito próximo e parágrafo grande abaixo | Materialidade legível nasce de luz, escala e superfície, sem glow de interface | Cérebro em lâminas acetinadas com relevo e sombra próprios. Não importar objeto, diagonais, monocromia ou layout. Capa não comprova WebGL/3D interativo. |
| **Giellygreen** · [site](https://giellygreen.co.uk/) · `ui/ecommerce/07-giellygreen.md` e `.png` | Capa 800×450: frascos vinho e metal rosado em alturas e eixos distintos sobre fundo claro | Cor comprometida + iluminação material + assimetria dão presença ao objeto | Avaliar ameixa/lilás e metal neutro na arte AS, em composição completamente própria. Não transportar cosméticos, embalagem, rose-gold, logotipo ou hierarquia de loja. Risco de glamour cosmético é critério explícito de rejeição. |

As sete imagens são previews locais de SaaS Landing Page/Curated, com coleta declarada em **2026-09-02**. Licenças de reprodução de identidade/assets não foram obtidas: uso restrito a referência visual, sem importar conteúdo. URLs oficiais acima são identificação de origem, **não alegação de que todos esses sites foram abertos nesta sessão**.

Dorie Clark, Marshall Goldsmith e Conquer permanecem referências **textuais históricas de Product**, por atribuição a research §2.2: autoria, oferta compreensível e aprofundamento. Não foram vistas visualmente nesta T01, não fundamentam luz/crop/motion e não autorizam transferir catálogo ou prestígio.

### Fontes oficiais públicas consultadas agora

Pesquisa passiva de licenças/proveniência, sem baixar binários, instalar fontes, abrir contato ou reconstruir páginas. Conteúdo abaixo é **textual**, não specimen renderizado da candidata.

| Fonte oficial | Resultado lido / limite |
|---|---|
| [Bricolage Grotesque — autores](https://raw.githubusercontent.com/ateliertriay/bricolage/main/README.md) | HTTP 200. Mathieu Triay; descrição de fontes grotescas britânicas/francesas, larguras comprimidas e tamanhos ópticos mais neutros. Esta caracterização é do autor, não teste visual AS. |
| [Bricolage — OFL no repositório Google Fonts](https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/OFL.txt) | HTTP 200, texto OFL 1.1 completo; copyright 2022 dos autores. Não declara RFN no cabeçalho lido. |
| [Bricolage — metadados](https://raw.githubusercontent.com/google/fonts/main/ofl/bricolagegrotesque/METADATA.pb) | HTTP 200. Variável normal; peso 200–800, largura 75–100, óptico 12–96; latin/latin-ext. Fonte de origem vinculada ao commit `84745e5b96261ae5f8c6c856e262fe78d1d6efdd`. Não prova arquivo instalado ou render de cada glifo. |
| [Source Sans 3 — Adobe](https://raw.githubusercontent.com/adobe-fonts/source-sans/release/README.md) e [licença](https://raw.githubusercontent.com/adobe-fonts/source-sans/release/LICENSE.md) | Ambos HTTP 200. README nomeia Source Sans 3 e uso em ambientes UI. OFL 1.1 lida integralmente, copyright 2010–2024 Adobe, **Reserved Font Name “Source”**. |
| [Source Sans 3 — metadados](https://raw.githubusercontent.com/google/fonts/main/ofl/sourcesans3/METADATA.pb) | HTTP 200. Normal/itálico, peso 200–900, latin/latin-ext; origem `272b22b02e097e8eff1372111f88b5ab6063499f`. Não seleciona versão/binário definitivo. |
| [Bodoni Moda — OFL](https://raw.githubusercontent.com/google/fonts/main/ofl/bodonimoda/OFL.txt) e [metadados](https://raw.githubusercontent.com/google/fonts/main/ofl/bodonimoda/METADATA.pb) | HTTP 200. OFL 1.1, autores do projeto, normal/itálico, peso 400–900, óptico 6–96, latin/latin-ext. Origem `30ce6cdc354ef179a3b72ba0f0e71826e599348c`. Candidata apenas da alternativa B. |

**Condição de uso das três famílias:** OFL permite embedding/redistribuição conforme condições, com notices e licença; fontes não podem ser vendidas isoladamente. Derivação/subset/conversão requer conferir RFN, especialmente “Source”, e obrigações da cópia efetivamente obtida. Preferir distribuição oficial não modificada quando couber. Nenhuma licença comercial paga foi proposta; nenhuma família foi instalada ou aprovada nesta execução. Português, rasterização, fallback e peso de entrega ainda precisam de teste.

**Limites de ferramenta:** navegação Playwright para texto oficial de licença retornou referência automática de snapshot do serviço; a tentativa de ler texto e a consulta seguinte via request tiveram timeout. Não houve screenshot solicitado, demo ou protótipo. A referência automática não está no workspace segundo a descoberta posterior e não é evidência visual utilizada aqui. Consultas HTTP oficiais foram concluídas em memória via PowerShell com parsing não interativo; a primeira tentativa sem esse modo falhou por prompt indisponível, não por autorização. Nenhum arquivo de fonte/asset salvo. Configuração de capturas futuras MCP continua não verificada.

## 5. Decisão principal e alternativas

### A. Campo de presença — candidata recomendada para exploração

**Tese:** Amanda ocupa o campo como pessoa; a tipografia dá corpo à mensagem; a escultura cerebral introduz espaço entre pensamento e expressão. O vazio entre suas lâminas representa escuta, não falha a ser curada. A narrativa sai de uma abertura concentrada e se abre para situações de trabalho, atuação e autoria.

**Mundo visual:** ameixa em campos grandes, superfícies claras frias, fotografia natural preservada, metal neutro acetinado. Display sans com personalidade e peso, corpo humanista confortável. Sem padrão de rede, auréola, neon, partícula permanente, selo ou simbologia de método.

**Assinatura reconhecível:** enunciado em faixa larga superior, campo inferior assimétrico com foto e cérebro sem molduras de card, abertura oblíqua da escultura apontando para uma área limpa de apoio/ação. Ao passar às situações, a linha dessa abertura se resolve em um alinhamento editorial estático. Não é linha conectando “etapas de um método”.

**Risco honesto:** sem silhueta cerebral bem resolvida, vira escultura genérica; com brilho ou pose excessivos, vira anúncio de cosmético. Se a composição lembrar beauty, wellness, IA ou joalheria mais que comunicação/liderança, deve ser reexplorada, não defendida pelo acabamento.

### B. Retrato em contraponto — alternativa competitiva, não líder

- **Tese e composição:** grande retrato vertical fora do centro; headline em banda horizontal abaixo dos olhos, inteiramente fora da área facial; citações e narrativa em aberturas de página editorial. Cérebro em baixo-relevo integrado a uma passagem larga entre atuação e Amanda, com menos domínio no primeiro frame.
- **Paleta candidata:** verde profundo `#163C35`, porcelana `#F3F0E9`, carvão `#202821`, latão mate `#B6A373` somente material. Display Bodoni Moda 600/700 + corpo Source Sans 3 400/600; h1 76–100 desktop, 38–46 mobile, line-height 1,02–1,10, tracking −0,02 a 0. Fotografia com tom natural, sem duotone de pele.
- **Força:** autoria humana muito imediata e tipografia de contraste evidente; retratos existentes favorecem tratamento editorial.
- **Por que não lidera:** proximidade com consultoria premium genérica e editorial de luxo, além de menos transformação frente à serifa atual. O cérebro perde a chance de ser um gesto reconhecível do hero. Não rejeitada por performance, e sim por menor diferença específica percebida.
- **O que A deve aprender sem copiar:** tratar o rosto com a mesma importância da arte. Não aceitar escultura enorme e Amanda reduzida a thumbnail.

### C. Assembleia tipográfica — explorada e rejeitada como direção principal

- **Tese e composição:** grandes palavras em campo claro com barras de cor de um programa cultural; retratos pequenos e recortes documentais interrompem a composição; cérebro como impressão/alto-relevo em passagem posterior.
- **Paleta candidata:** branco óptico `#F7F7F3`, tinta `#20251E`, verde ácido `#CADD3A`; Bricolage Grotesque 700/800 display e Source Sans 3 400/600 corpo. H1 104–124 desktop, 42–48 mobile; line-height 0,98–1,06; tracking −0,025 desktop, −0,01 mobile.
- **Força:** energia pública e sensação de voz presente, muito distante do workshop escuro.
- **Motivo de rejeição:** aproxima a AS de festival/conferência ou estúdio tipográfico e deixa autoria humana pequena; pode sugerir agenda/programação que não existe. Exige material documental amplo indisponível para sustentar o ritmo.
- **O que A deve aprender sem copiar:** coragem de escala e de campo cromático. Não converter A em fundo neutro com pequenos acentos tímidos.

As alternativas mudam composição, tipo, hierarquia da pessoa/arte e experiência, não apenas cor. São comparações documentais; nenhuma foi renderizada. A recomendação A não representa escolha humana G1.

## 6. Sistema visual candidato de A

### 6.1 Cor com função

Cenário de uso: profissional lê entre atividades de trabalho, em monitor claro ou celular, procurando reconhecer relevância rapidamente. O hero terá cor comprometida e texto claro em área uniforme; o percurso alternará para leitura clara, em vez de manter toda a página escura.

| Papel candidato | Valor proposto | Aplicação / restrição |
|---|---|---|
| Campo de presença | `#611637` | Hero e fechamento; cor ocupa regiões inteiras, não pequenos adereços. Não significa emergência/erro. |
| Campo profundo | `#301D2D` | Profundidade localizada atrás da escultura, sem véu sobre todo o hero. |
| Superfície de leitura | `#F6F2F7` | Situações e trechos de trajetória; branco com viés frio, não papel creme padrão. |
| Superfície de passagem | `#D8C6E3` | Atuação/repertório em massas pontuais; evitar aparência infantil/pastel genérica por contraste com tipografia pesada e foto natural. |
| Tinta principal | `#291F2C` | Corpo e headings sobre superfícies claras. |
| Tinta de apoio | `#625466` | Legendas/proveniência em claro, sem torná-las invisíveis. |
| Tinta reversa | `#FFF8FC` | Mensagem e avisos no campo ameixa. |
| Tinta de apoio reversa | `#E9DDE7` | Apoio no hero/fechamento. Não usar transparência reduzida automaticamente. |
| Metal da arte | Base `#B9B8C0`, luz `#ECE8EF` | Cores de material, não tokens de texto. Reflexo ameixa discreto; sem ouro herdado ou chrome espelhado. |
| Ação em campo escuro | Fundo `#FFF8FC`, texto `#611637` | CTA sólido com contraste de massa. Hover: superfície `#E9DDE7`; pressionado: mudança discreta de tom, sem deslocar leitura. |
| Ação em campo claro | Fundo `#611637`, texto `#FFF8FC` | Mesma ação, versão cromática contextual. Hover proposto `#451026`. |
| Foco | Anel claro + anel escuro, 3 px de indicação e afastamento 3 px | Par candidato `#FFF8FC` / `#291F2C`, conforme superfície; validar contorno real e não ocultação. |

**Nenhum par foi medido nesta T01.** Os valores permitem começar o estudo, não constituem PASS de contraste. Testar texto normal ≥4,5:1; grande ≥3:1; informação necessária de controles ≥3:1, inclusive fotografia, hover e foco. O CTA não recebe verde WhatsApp. Não há cores de sucesso/envio porque a ação só revela informação.

Proporção compositiva indicativa: hero majoritariamente ameixa; abaixo, mais área clara de leitura que escura. A proporção total depende de conteúdo e alturas, não meta matemática de pintura. Graduação de luz só no objeto/fotografia quando justificada; nenhum gradiente filler de seção.

### 6.2 Tipografia: força sem sacrificar fala e leitura

**Display principal candidata:** Bricolage Grotesque. O contraste entre larguras e personalidade das formas permite uma voz tipográfica forte sem recorrer à serifa fina/dourada do baseline. Sua licença e eixos foram confirmados textualmente; sua adequação ao português e à composição ainda é hipótese visual.

**Corpo candidato:** Source Sans 3. Família desenhada para UI segundo a Adobe; assume apoio, bio, avisos e controles. Duas famílias no máximo na candidata A; nenhuma mono decorativa ou fonte de assinatura inventada. Não usar itálico sintético em Bricolage, cujo arquivo observado é normal.

| Papel | 1440 px, proposta | 768 px, proposta | 390 / 320 px, proposta | Peso / tracking / entrelinha |
|---|---|---|---|---|
| H1 | 94–108 px, 3 linhas previstas | 66–78 px, 3–4 linhas | 42–46 / 36–40 px, 4–5 linhas conforme métrica real | Bricolage 650–700; −0,025 em desktop, −0,012 em mobile; 0,98–1,03 desktop, 1,05–1,10 mobile. |
| Palavra focal “Clareza” dentro do H1 | Até 112 px se não quebrar a frase | Até 80 px | Mesma escala principal, sem palavra estourando a tela | Mesmo peso ou 700; não virar wordmark separado nem duplicar H1. |
| H2 / situações | 52–64 px | 42–50 px | 30–36 / 28–32 px | Bricolage 600–650; −0,02 a −0,005 em; entrelinha 1,08–1,16. |
| Nome Amanda em sua seção | 64–76 px | 48–58 px | 34–40 / 30–34 px | Bricolage 600; sobrenome não truncado; 1,08–1,15. |
| Citação assinada | 38–46 px | 32–38 px | 26–30 / 24–28 px | Bricolage 500, romana; tracking −0,01 a 0; entrelinha 1,18–1,28. |
| Apoio hero | 20–22 px | 19–21 px | 18–19 / 17–18 px | Source Sans 3 400; tracking 0; entrelinha 1,45–1,55. |
| Corpo / bio | 18–20 px | 18–19 px | 17–18 px | Source Sans 3 400; tracking 0; entrelinha 1,55–1,65; linha de 48–66 caracteres desktop, 30–40 mobile. |
| CTA / navegação | 17–18 / 16–17 px | 17 / 16 px | 16–17 px | Source Sans 3 600; tracking 0; entrelinha 1,25–1,40; frase em caixa normal. |
| Contexto FP, aviso e proveniência | 14–16 px | 14–16 px | 14–15 px | Source Sans 3 400/600; tracking 0; entrelinha 1,4–1,55. Informação funcional não vira microtexto de luxo. |

Fluidez proposta: interpolar dentro dessas faixas entre larguras, respeitando mínimo de leitura e sem reduzir corpo para acomodar a composição. Valores finais em unidade relativa, sem travar crescimento com zoom. Quebras editoriais desktop são hipótese; abaixo de tablet, liberar wrapping por largura real. Não separar sílabas de “Schurnovski” manualmente. Testar “Comunicação”, “liderança”, “posição”, “escuta”, “Amanda Schurnovski” e a headline integral.

Largura de Bricolage candidata: 90–100 desktop; 85–100 mobile **somente se a leitura continuar natural**. Óptico display 72–96 e menor nas chamadas intermediárias são hipóteses dentro dos eixos documentados. Não animar peso/largura do texto essencial nem escalar letras por transformação geométrica para fazê-las caber.

Fallback proposto: Segoe UI e sans-serif para ambas as famílias nesta plataforma, com hierarquia de peso e tamanho preservada. Não se afirma equivalência métrica; T03 deve comparar wraps e reservar altura do H1 sem caixa rígida. Fonte carregada ou ausente não pode ocultar frase, cortar acento ou deslocar CTA de forma instável. Entrega futura local; sem Google Fonts CDN em runtime.

### 6.3 Espaço, contornos e controles

- Escala candidata de espaçamento: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144 px, convertida depois em unidades relativas. Hierarquia de espaço, não obrigação de quantizar toda geometria da arte.
- Margens editoriais: 64–80 px desktop; 32–40 tablet; 20–24 em 390 e 16–20 em 320. Fotografia/arte podem sangrar a borda; texto não.
- Distância de blocos: 96–144 desktop, 56–80 mobile. Entre assunto e explicação: 12–24. Pausas longas só quando mudam função, sem telas vazias entre todas as seções.
- Grid invisível de referência: 12 colunas desktop e 4 mobile; não existe container universal. Larguras de texto, imagem, título e campo mudam por passagem.
- Bordas de 1 px apenas para separar itens/proveniência quando o espaço não basta. Sem caixa contornando cada situação. Raio de botão candidato 4–6 px; fotografia sem pill, círculo ou card. Sombra apenas no objeto para materialidade, não em todas as superfícies.
- Botão principal: altura confortável 52–56 px desktop e 52–60 mobile, permitindo duas linhas e altura automática em 320/zoom; largura por conteúdo no desktop e útil disponível no mobile. Alvos de navegação e botões ≥44×44 CSS px pelo contrato de produto.
- Secundário “Conhecer a atuação”: link sublinhado claro, área de toque própria, sem competir como segundo botão preenchido. Foco tão legível quanto no principal. Sem botão magnético, cursor customizado ou texto indispensável no hover.
- Marca real preservada como asset candidato sem redesenho/recoloração silenciosa. Nome “AS Mentorias · Amanda Schurnovski” sempre em texto legível; não depender do monograma minúsculo. Detalhes do logo precisam de inspeção do original em T03/T04 antes de definir redução mínima.

## 7. Hero original: composição, rosto, cérebro e ação

### 7.1 Desktop de referência — 1440×900

**Uma composição em dois registros horizontais conectados, não hero de duas colunas texto/imagem.** O título ocupa a largura superior; a metade inferior relaciona retrato, escultura e bloco comercial em posições desiguais, sem cards e sem trilho vertical dividindo texto de imagem.

1. **Topo de serviço, cerca de 100–120 px no conjunto:** identificação AS/Amanda; navegação curta para Atuação, Amanda e Temas, apenas se destinos existirem; contexto FP em linha legível. Sem terceiro CTA de contato no header, preloader ou faixa inferior fixa. Header inicialmente no fluxo; persistência não é requisito.
2. **Enunciado, aproximadamente y=160–440:** headline aprovada, “Clareza para expor ideias e se posicionar no trabalho.” em faixa de 1120–1240 px de largura útil. Hipótese de quebra: “Clareza para expor” / “ideias e se posicionar” / “no trabalho.” A primeira linha parte de x≈72; a última pode ter pequeno recuo editorial, mantendo leitura contínua. Não misturar palavras com o rosto nem transformá-las em imagem. A acomodação real dependerá da fonte, não dessas coordenadas indicativas.
3. **Campo inferior, aproximadamente y=455–840:** retrato real à esquerda, área útil aproximada de 300×360 px; escultura futura no centro, de 390–470 px no maior eixo; apoio/ação na direita, coluna de leitura de 340–390 px. As massas têm alturas distintas e pertencem ao mesmo campo, não a três slots/cartões iguais. A cabeça da escultura pode avançar para o vazio abaixo da linha curta do H1, **nunca para dentro das letras**.
4. **Pessoa:** foto de xadrez é a primeira candidata, vista em D5. Manter rosto, cabelo e mão apoiada; um fragmento do tabuleiro pode permanecer como contexto, sem afirmar estratégia/competência a partir dele. Identificação “Amanda Schurnovski” próxima e legível. Não inventar olhar para a câmera: o olhar existente é inclinado para baixo.
5. **Arte:** objeto cerebral em vista oblíqua, orientado de modo que o espaço entre lâminas abra em direção à área de leitura. Sem colocar o cérebro dentro da cabeça de Amanda, conectá-lo à testa ou criar efeito de escaneamento. Ambos são sujeitos distintos da composição.
6. **Ação:** apoio aprovado, CTA “Conversar sobre meu momento”, aviso “Nesta demo, o contato não está ativo.” imediatamente junto ao botão e secundário “Conhecer a atuação”. O aviso pode anteceder o botão dentro do agrupamento; permanece visível antes de agir e vinculado ao controle. Contraste uniforme, sem escultura/fotografia atrás. CTA não espera motion.
7. **Saída:** a superfície clara das situações entra logo após o campo, com título já sugerindo continuidade. Não impor hero de 100vh: ele pode crescer se a copy/zoom exigir. Em 1440×900 sem zoom, testar se ação e pessoa cabem com conforto; se não couberem, ajustar escala/intervalos e geometria, nunca eliminar aviso ou conteúdo.

**Ordem semântica futura:** identificação/contexto → H1 → identificação/retrato contextual → apoio → ações → situações. Posicionamento visual não deve produzir sequência de leitura contraditória. Decoração não cria conteúdo interativo nem foco.

### 7.2 Mobile — 390×844 e adaptação a 320

A composição muda para uma **sequência vertical curta com faixa visual horizontal**, não encolhe a cena desktop.

- Identificação e contexto FP ocupam o topo, com navegação interna pequena em quantidade, grande em área de toque. Pode quebrar em segunda linha no fluxo; nenhum menu complexo é necessário para três destinos.
- H1 ocupa a largura útil, cerca de 4–5 linhas a depender da métrica. Não copiar quebras desktop nem usar seis palavras gigantes fora da viewport. Primeiro foco visual é a mensagem; nome AS/Amanda já está disponível acima.
- Uma faixa de imagem de aproximadamente 150–190 px sucede o título: rosto/mão em recorte de um lado, porção reconhecível da escultura do outro; espaços separados, sem texto entre as duas silhuetas. É imagem+arte, não coluna de texto ao lado da foto. O cérebro precisa manter volume suficiente para ser reconhecido, não uma textura de fios ilegível.
- Apoio em largura total, CTA em largura confortável, aviso junto e secundário abaixo com intervalo de 12–16 px. Se não couber tudo na primeira viewport, o scroll revela normalmente; não usar sobreposição, altura fixa ou fonte pequena para simular uma dobra perfeita. Em 390, buscar CTA primário ainda no primeiro percurso curto; medir a composição real em T03.
- Em 320, priorizar rosto reconhecível, mensagem e ação; reduzir amplitude/recorte da escultura, não removê-la automaticamente. O objeto completo poderá reaparecer na passagem editorial posterior. Reflow/zoom podem estender a altura sem perda.
- Tablet não é desktop comprimido: título amplo, faixa visual de altura moderada e apoio/ação abaixo, até haver largura suficiente para o campo inferior desktop.
- Touch não exige inclinação, drag ou hover. Foto e texto ficam imóveis; eventual movimento decorativo usa amplitude menor ou variante adequada, sem movimento obrigatório para revelar assunto.

### 7.3 Tratamento fotográfico proposto

- **Hero:** `amanda-xadrez.jpeg`, origem relativa ao site S1; candidato visto no baseline, original isolado ainda não inspecionado nesta T01. Recorte inicial quase quadrado/vertical curto, mantendo cabelo, rosto e mão. Não cortar no queixo, nos dedos ou na testa. Aferir resolução útil do crop antes de considerar o arquivo adequado.
- **Trajetória:** `amanda-reflexao.jpg`, candidata vista em M6. Recuperar contexto do banco/roupa clara em proporção vertical ou 4:3; rosto separado da citação. Pode ser usada como imagem única da seção, não repetida para encher espaço.
- Cor natural, contraste local suave e balanço de branco coerente. Preservar pele, expressão, roupa e marcas identificáveis. Sem rejuvenescimento, face sintética, troca de roupa, outpainting de corpo ou fundo fictício apresentado como local real.
- Preferir crop fotográfico simples; recorte de fundo é hipótese secundária e só se preservar cabelo/mãos com qualidade real. Se houver halo, manter fundo original e compor sua janela como fotografia, em vez de esconder defeito com glow.
- Sem texto sobre olhos/rosto ou wash ameixa sobre pele. Luz da arte pode dialogar com a foto, mas não fingir que ambos foram fotografados juntos. A demo deve preservar a pessoa antes de maximizar efeito.
- O4 autoriza site/Instagram para demo/apresentação, não publicação universal. Marca/fotos não serão importadas de referências externas. Material Instagram novo depende de inspeção acessível, sem bypass.

## 8. Ritmo da one-page inteira, condicionado à evidência

A sequência abaixo cobre **todas as funções** aprovadas. Não representa oito cards nem oito componentes obrigatórios. T03 prova somente hero + transição representativa + CTA; a página completa depende das etapas posteriores.

| Momento / função | Conteúdo e fonte | Composição e ritmo candidatos | Mobile / limite |
|---|---|---|---|
| **Abertura: posicionamento** | Headline/apoio de spec §2.3; nome/atuação S1/U1 | Campo cromático e tipografia de grande escala; foto/arte/ação em relação assimétrica, §7 | Sequência vertical e faixa visual. Arte não suspende mensagem. |
| **Situações de trabalho** | Apresentar ideia, assumir responsabilidades, conversar/escutar equipe; spec §2.2–2.3, S1 | Mudança decidida para superfície clara. Texto de entrada curto e três situações em linhas abertas com comprimentos diferentes, apoiadas por verbos já presentes no conteúdo. Uma pode ocupar faixa mais larga; não repetir quatro células contornadas | Linhas de leitura empilhadas, espaçamento 24–32 px. Sem carrossel, teste de perfil, resposta ou diagnóstico. Não transformar situações em casos reais. |
| **Abordagem + atuação declarada** | Comunicação, liderança e carreira; posicionamento, presença na fala e escuta. Mentora/fundadora conforme S1 | Passagem lilás mineral: título menor que hero, parágrafo principal em largura confortável, termos temáticos como margens editoriais. Mostrar claramente que há atuação de mentoria declarada, além da biografia, sem apresentar método | Uma coluna. Os termos não são tabs nem passos 1/2/3. Não inventar duração, acompanhamento ou formato individual/in-company. |
| **Frente publicada** | Divulgação do workshop “Destravando sua Liderança e Oratória”, research §3.2 | Registro editorial integrado ao fim da atuação, com título próprio e origem dos temas. Uma faixa de evidência, sem card de oferta, preço, data de venda ou botão de inscrição | Texto curto “Iniciativa divulgada pela AS”, qualificado como publicação. Não dizer realizado/ativo. Outras frentes só entram com evidência e retorno ao Maestro quando material. |
| **Amanda / trajetória** | Nome, retrato real, mentora/fundadora; formação e trajetória atribuídas à bio S1 | Nome grande em banda própria, retrato sentado em janela vertical deslocada, texto ao lado/abaixo com largura mais estreita que situações. Formação em prosa; nenhum wall de badges. A fotografia é pausa humana, não fundo de citação | Nome antes da foto, bio próxima para evitar longa imagem sem autoria. Formação pode permanecer atribuída; não selo verificado. “13 anos” só no contexto docente e atribuído, se usado, nunca contador gigante ou experiência executiva. |
| **Repertório / pensamento assinado** | Posicionamento, presença na fala e escuta ativa como temas da divulgação; citação de Amanda S1 | Fechamento da passagem de trajetória com citação em área de leitura própria, sem foto atrás. A frase pode ocupar escala intermediária e atribuição imediatamente abaixo. Não duplicar todos os temas já explicados: remeter à origem e aprofundar somente com texto publicado disponível | Citação contínua, sem truncar em slider ou “ler mais”. Nenhum livro, artigo, podcast ou assinatura visual inventado. |
| **Provas condicionais** | Cases/depoimentos/clientes/resultados ausentes; filiações/obras não verificadas | **Sem módulo público agora**, incluindo título, âncora e espaço. Confiança vem de pessoa e trajetória atribuída. Se evidência futura surgir, prever inserção entre repertório e fechamento com contexto de cada prova, não logo wall automático | Nenhum empty state, “em breve”, número falso ou placeholder. Falta de IND não apaga os fatos P válidos da bio. |
| **CTA final** | “Que momento da sua vida profissional pede mais clareza?” + contrato spec §2.4 | Retorno à ameixa, frase com escala menor que H1 mas largura ampla; botão/aviso imediatamente associados. Sem painel cercado por borda dourada, agenda, etiquetas ou cérebro duplicado em tamanho integral | Pergunta é retórica, sem campo. CTA e aviso inteiros; não barra fixa. |
| **Proveniência e saída** | Contexto demonstrativo FP e base em conteúdo publicado AS | Rodapé enxuto, tipografia legível, marca acompanhada de nome. Somente navegação interna realmente útil | Não links de WhatsApp, email ou Instagram; não newsletter, catálogo ou permissões. |

**Citação disponível, preservada:** “Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.” Atribuição Amanda Schurnovski, conforme publicação S1. É pensamento da própria profissional, não depoimento. Não usar a frase para tornar aparência/elegância condição de liderança.

Microcopy sugerida para organização, sem nova promessa: “Situações de trabalho”, “Atuação”, “Amanda”, “Temas”. Preservar headline, apoio e CTAs de Product; a força comercial deve vir de composição e clareza, não de slogans hiperbólicos.

### Região informativa do CTA

Uma única região não modal no fluxo, proposta próxima ao fechamento. Ambos os acionadores levam a ela com foco no início identificado; retornar restaura origem e posição, sem rolagem animada obrigatória. A distância desde o hero deve ser testada em T03, não resolvida com segunda região ou chatbot.

- Título: **“Sobre o próximo passo”.**
- Texto exato: **“Em uma versão publicada e autorizada, este botão poderá levar ao canal de contato aprovado. Nesta demonstração, nenhum contato é iniciado e nenhum dado é solicitado ou enviado por esta ação.”**
- Retorno: **“Voltar à página”.**
- Tratamento: superfície clara de leitura, título inequívoco, texto de 17–20 px e retorno sublinhado/controle visível. Sem avatar, dialog, balão de conversa, “online”, indicador de digitação, check de envio, seletor de assunto ou campo.
- Aviso junto aos dois CTAs: **“Nesta demo, o contato não está ativo.”** Contexto de abertura: **“Conceito demonstrativo FP Solutions · não é o site oficial da AS.”**
- Repetição idempotente, sem persistência; JS ausente oferece informação estática honesta. A primeira mudança visual não espera coreografia. Contrato técnico integral permanece em plan §3, não redefinido aqui.

## 9. Linguagem de movimento e brief cerebral preliminar

### 9.1 Verbo da direção: abrir espaço

O movimento desloca discretamente uma relação espacial e depois cede à leitura. Não faz tudo aparecer por fade, não repete a mesma entrada por seção e não transforma palavra em espetáculo. Conteúdo essencial já nasce visível. A composição estática deve ser deliberada, não uma imagem incompleta da animação.

Parâmetros abaixo são **hipóteses visuais**, não chamadas de API nem especificação de engine. Ease de entrada: desaceleração contínua sem overshoot; progressão por scroll: vínculo previsível ao deslocamento; feedback: rápido e sem elasticidade.

| Momento / elemento | Função e gatilho | Proposta normal | Mobile / equivalente reduzido | Custo e confronto T03 |
|---|---|---|---|---|
| Hero, luz/abertura da escultura | Tornar legível a separação entre pensamento e expressão, após primeiro frame completo | Um assentamento de 600–800 ms: deslocamento visual de lâminas/luz limitado; nenhum texto aguardando. Só uma ocorrência, sem pulsação infinita | Touch: amplitude menor, sem requisito de interação. Reduzido: objeto na posição final, luz fixa, texto intacto | Composição 2,5D versus volumetria; custo de máscara/iluminação/material. Sem cérebro final em T03: comprovar relação espacial provisória e registrar limite da prova. |
| Campo visual ao sair do hero | Profundidade e passagem ao contexto de trabalho, pelo scroll natural | Deslocamento relativo máximo inicial de 16–28 px da arte decorativa durante a saída; foto, H1 e controles estáveis | Em mobile testar 8–12 px ou movimento discreto por entrada. Reduzido: nenhum deslocamento ou smooth scroll | Paint de área grande, memória de camada, necessidade real de scroll-linked versus triggered. Sem capturar wheel/touch. |
| Hero → situações | Orientar mudança de escala/papel, quando a nova passagem entra | Uma linha/margem decorativa alinhada ao vazio da escultura se assenta em 350–500 ms; situações já legíveis. O campo claro entra com scroll, não por cortina cobrindo conteúdo | Reduzido: alinhamento final estático. Mobile mantém intervalo curto, sem pin | Comparar percepção de continuidade com e sem efeito; rejeitar máscara de viewport cara sem ganho. Não desenhar ilustração cerebral por código. |
| Situações → atuação | Conectar contexto a campo profissional | Um único acento de margem percorre a transição entre os blocos; 300–450 ms por entrada. Não destaca palavras como se fossem testes/pilares certificados | Reduzido: acento parado; nenhuma perda de informação. Mobile sem trilho horizontal | Custo pequeno esperado, ainda não medido; evitar dezenas de listeners/elementos. |
| Retrato de trajetória | Pausa humana, na entrada do bloco | Fotografia permanece estática. Legenda pode receber mudança curta de ênfase; nenhum zoom de rosto ou parallax sobre pessoa | Mesmo tratamento estático em ambos os modos | Controle contra motion gratuito: o momento deve funcionar precisamente por ser pausa. |
| CTA hover/focus/press | Feedback inequívoco, a partir de ação real | 120–180 ms para cor/sublinhado; foco aparece imediatamente. Sem magnetismo, som, tremor, inversão espacial ou delay de acionamento | Touch tem estado pressionado claro; reduzido mantém feedback estático imediato | Latência até início visual ≤200 ms por amostra no ensaio futuro; duração de acabamento não é latência. |
| Informação abrir/retornar | Localizar estado e recuperar contexto | Exibir e focar imediatamente; acabamento cromático opcional de 120–160 ms. Sem animar altura longa ou viajar pela página | Reduzido: mudança imediata, scroll/restauração sem animação | Medir deslocamento, foco, layout e latência de ambos os acionadores. Engine não controla sucesso do CTA. |
| Fechamento | Concluir percurso | Reprise estática da cor/abertura espacial do hero, sem segunda grande animação da escultura | Equivalente completo | Não manter canvas ou timelines ativos abaixo do viewport. |

Na candidata normal há coreografia de entrada, profundidade/transição e feedback com funções diferentes; não apenas fades. Pinning não é necessário à proposta inicial, mas **não é banido por nome**: um ensaio T03 poderá compará-lo se houver benefício narrativo, com saída natural, reflow e foco preservados. Nada justifica preloader, scrollbar substituída, scroll hijack ou conteúdo oculto por padrão.

Interrupções: fora da viewport, aba oculta, blur ou preferência reduzida devem pausar/encerrar trabalho decorativo conforme contexto. Ao mudar para redução durante a sessão, aplicar estado final estático e remover subscriptions pertinentes; não reiniciar a abertura automaticamente ao voltar. Fallback de erro de engine/WebGL mantém texto, pessoa, composição e ações. A redução não depende de download da engine.

### 9.2 Mecanismos abertos, sem vencedor técnico

| Opção a confrontar | Pergunta concreta para T03 | Motivo legítimo de preferência futura / limite |
|---|---|---|
| CSS / APIs nativas | Conseguem dar continuidade entre abertura e passagem sem virar fades genéricos? | Simplicidade é ganho apenas se a composição e os estados mantiverem ambição. Não selecionar só por bundle pequeno. |
| Motion | Coordenação de poucas camadas/feedback traz ganho sobre nativo neste desenho? | Candidato inicial do plan, sem privilégio automático; medir resultado/manutenção reais. |
| GSAP / ScrollTrigger | Coreografia interrompível e progressão espacial melhoram a leitura da passagem? | Timeline/scroll podem justificar controle adicional. Não escolher porque a skill manda ou porque uma referência parece animada. |
| Three.js / WebGL | A luz/oclusão volumétrica demonstra diferença perceptível que camadas/poster não alcançam? | Forte candidato se profundidade for parte reconhecível da direção. Precisa fallback, manejo de contexto/performance e documentação suficiente; entrada de skill atual é limitada. |
| Combinação proporcional | Cada mecanismo tem responsabilidade distinta e não disputa a mesma propriedade/scroll? | Aceitável com ganho demonstrável. Não instalar engines redundantes nem escolher smoother por ritual. |

T03 consulta Context7/docs oficiais de APIs e licenças antes de adoção, com versões reais. Não há comparação medida de bundles, custo ou compatibilidade nesta T01. Não atribuir performance a engine pelo nome.

### 9.3 Brief preliminar do cérebro — NÃO produzir agora

- **Papel:** sinal reconhecível de pensamento/expressão/conexão, em diálogo com a pessoa e a mensagem. Metáfora plástica não clínica; não “método neurocientífico”, diagnóstico ou mapa do cérebro de Amanda.
- **Forma:** silhueta cerebral legível com dois volumes assimétricos em vista três-quartos. Lâminas curvas de relevo amplo sugerem dobras sem copiar anatomia fotográfica. Uma abertura oblíqua entre os volumes deixa espaço visível, como pausa na fala/escuta. Evitar rosquinha, esfera abstrata indistinta ou cérebro frontal de fios reproduzindo o baseline.
- **Composição:** volume principal no campo inferior central; abertura orientada à área limpa do CTA. Precisa funcionar completo no desktop e em fragmento reconhecível no mobile. Não colocar pequenos filamentos sob letras, não fazer conexões saindo do rosto, não criar auréola atrás da cabeça.
- **Material:** metal neutro acetinado, estrias grandes suficientes para leitura mobile, reflexos controlados de ameixa. Entre lâminas, sombra material; evitar resina brilhante, rose-gold cosmético, plástico neon, partículas e vidro transparente como shortcut premium.
- **Luz:** uma luz larga lateral/superior desenha relevo; preenchimento suficiente para não perder a silhueta; borda iluminada apenas onde ajuda separação. Sombra de contato/plano coerente, sem glow espalhado no texto. Luminância extrema não compete com pele e botão.
- **Integração futura:** fundo/separação permitirão controlar a posição da arte sem manipular a fotografia. Reservar proporção e área; prever versões/crops desktop/mobile e poster estático. O tipo continua texto; o asset não contém headline, CTA, monograma, números ou pessoas.
- **Fallback:** ausência da arte mantém o campo cromático intencional, retrato, nome, frase e CTA em posições estáveis; sem ícone de imagem quebrada ou buraco gigante. Poster será derivado do original autorizado posteriormente. O fallback não dispensa cérebro original na candidata final saudável.
- **Aceite posterior:** reconhecer cérebro, perceber abertura e profundidade sem sugerir scanner/IA; preservar hierarquia e contraste em quatro larguras; arte original não rastreável a asset de referência; direitos/proveniência e derivados registrados em T04. Se imagem muito cara/detalhada enfraquecer mobile, refinar a arte, não trocar pelo fundo antigo.
- **Dependência firme:** G1 humano consolida direção/sistema; **só então G2 autoriza produção específica**. T03 pode estudar geometria/ocupação interna sem asset final e sem placeholder apresentado à prospect. Este texto não autoriza ferramenta de geração e não fornece prompt para disparo.

## 10. Acessibilidade e desempenho: pacote preventivo

**Superfície:** one-page demonstrativa; tarefa crítica compreender autoria/atuação e acessar informação de contato inativo. **Pacote primário:** `visual-perception-reflow`. **Sinal atual:** PNGs baseline e risco da composição proposta; confiança alta na existência de competição visual no baseline, nenhuma medição de conformidade da candidata. Owner UI, posterior QA independente via Maestro.

Primeira fatia preventiva: criar zonas de leitura sem imagem/arte, preservar tamanhos/contraste dos avisos e testar reflow da headline longa. Follow-up de maior risco interativo: foco na região única e retorno correto a cada origem; não considerar esse fluxo resolvido por desenho.

| Verificação futura | Método e evidência necessários | O que T01 não prova |
|---|---|---|
| Semântica, IDs, nomes e estados | Checks automatizáveis + inspeção do HTML; um H1, landmarks e destinos reais, controles nativos | Não há DOM da candidata. |
| Foco e teclado | Percurso manual, abrir hero/final, retornar/reabrir, foco não oculto, ausência de trap; filmstrip/trace quando pertinente | PNG/documento não prova foco/restauração. |
| Leitor de tela | Nome/papel/estado dos acionadores e compreensão da região; headline sem duplicação anunciada; alt contextual | Prescrição de ARIA não equivale a experiência AT. |
| Contraste, reflow e redução | Pixels/fundos/estados reais; 320/390/768/1440; zoom 400% de 1280, texto 200%, espaçamento 1.4.12; redução desde carga e em sessão | Paleta e medidas candidatas não são PASS. |
| Imagens e alternativas | Alt de retrato identifica Amanda sem inferir competência; arte decorativa sem anúncio redundante; bloqueio de foto/arte/fontes | Originais/derivados finais não inspecionados. |
| Motion e performance | Vídeo/trace de comportamento separado do ensaio de carga; profiling de camadas, máscara, canvas e interrupções | Referências PNG não provam motion, budgets não são medições. |

**Targets preventivos do plan preservados:** JS gzip ≤35 KiB, alerta >50 KiB; CSS inicial ≤35 KiB; fontes ≤150 KiB; imagem crítica mobile ≤250 KiB; primeira viewport agregada ≤600 KiB. **São targets, não veto de engine ou qualidade.** Exceção requer benefício visual, alternativas, manutenção e medidas comparáveis documentados, sem relaxar requisitos reais.

CA-13 permanece: build local, 390×844 e 1440×900, 4 Mb/s down, 1 Mb/s up, RTT 150 ms, CPU 4×, três cargas frias por viewport; seis resultados individuais e medianas separadas de LCP ≤2,5 s / CLS ≤0,1. Cinco amostras por ação/viewport para abertura de cada origem, retorno e âncoras; **cada** acionamento inicia mudança visual em ≤200 ms. Não usar média para esconder falha, handler como pixel, Lighthouse preset diferente ou métrica de campo. Aplicar o protocolo completo de plan §7 nas etapas próprias.

Não relaxados: leitura imediata, mobile, WCAG 2.2 A/AA aplicável, reduced motion, latência e ausência de regressões. Norma integral e comportamento real ainda serão conferidos; nenhum scan/contraste/render executado nesta T01.

## 11. Crítica documental e critérios de confronto T03

### Checklist crítico da candidata — perguntas de rejeição, não selos de aprovação

| Critério | Compromisso concreto / risco | Evidência exigida depois |
|---|---|---|
| **Genérico / template** | Se trocar Amanda por qualquer consultora e o cérebro por uma esfera não alterar o conceito, a direção falhou. Ameixa + tipo bonita sozinhas não bastam | Descrever a assinatura da abertura e sua continuidade sem usar somente “premium/elegante”. |
| **Hero** | Mensagem atravessa largura superior; campo inferior assimétrico. Se resultar em texto esquerda/imagem direita convencional ou em três cards iguais, recompor | Desktop/mobile renderizados, primeiro frame normal e reduzido, comparação com D1/M1. |
| **Autoria** | Amanda aparece cedo e em escala legível; foto não pode ser sacrificada à escultura | Avaliador identifica nome/pessoa e atuação, sem buscar a bio para descobrir quem é. |
| **Transformação comercial** | Situações e atuação explícitas antes da trajetória; próxima ação compreensível, com inatividade informada | Respostas qualitativas a público/situações/atuação/confiança/próximo passo; sem prometer conversão. |
| **Ritmo integral** | Campo intenso → situações abertas → passagem temática → fotografia/traço biográfico → pensamento → fechamento | Não repetir grid/margem/altura/reveal por hábito. T03 avalia amostra; T07/T09 conferem percurso inteiro. |
| **Tipo** | Massa tipográfica sem truncar headline, sobrenome ou acentos; corpo/aviso nunca miniaturizados | Comparar Bricolage com fallback real e composição alternativa, 320–1440 e zoom. |
| **Foto/crop** | Rosto/mão preservados e texto fora da imagem facial. Não inventar contato visual ou manipular a pessoa | Originais inspecionados e crops renderizados em escala real. |
| **Arte/profundidade** | Cérebro reconhecível, material/luz com função; sem neurorreferência clínica, rede AI ou aura | T03 testa ocupação/linguagem provisória; integração final só após G2/T04. |
| **Cor** | Campo cromático comprometido sem vibe cosmética dominante; metal não vira decoração de luxo | Comparação A/B com mesma copy/foto e contraste medido. |
| **Motion** | Abertura, passagem e feedback têm funções distintas; pausas estáticas reais | Vídeo/trace normal/reduzido, incluindo mudança de preferência e falhas. |
| **Honestidade** | Sem catálogo, client logos, cases, agenda vigente ou métricas não provados | Matriz claim → S1/U1/qualificação; omissão completa dos módulos condicionais. |
| **CTA** | Aviso antes de agir e informação depois; nada parece conversa ativa | Ambos os acionadores, retorno, repetição, foco, ausência de operação externa. |

### Experimentos delimitados para T03, apenas após autorização própria

1. **Composição A versus B:** mesma headline e copy aprovada, mesmos retratos reais e CTA; confrontar distribuição da pessoa/arte, clareza e lembrança. Não construir duas full pages. C é contraponto documental, não terceiro protótipo automático.
2. **Foto dominante versus escultura dominante dentro de A:** variar área relativa sem alterar o conteúdo, mantendo rosto legível e corredor limpo. Se nenhuma relação funcionar sem asset final, registrar a limitação e retornar ao Maestro; não antecipar G2.
3. **Provar uma transição editorial representativa:** hero → situações → início de atuação em recorte delimitado, sem catálogo/fullpage. A transição deve demonstrar ritmo e orientação, não somente outro fundo e fade.
4. **Comparar mecanismos pertinentes:** nativo/CSS, Motion, GSAP/ScrollTrigger e, se a volumetria trouxer ganho concreto, Three/WebGL ou combinação. Não montar cinco demos de efeito por obrigação; usar a mesma pergunta visual, documentar por que uma opção não precisou de implementação experimental. Engine final somente pela evidência T03/G1.
5. **Estático e falhas antes do espetáculo:** primeiro frame com tipografia/arte ainda ausente, redução, fontes/imagens bloqueadas, teclado e CTA com foco/retorno. Sem pessoas fictícias ou arte atual como solução final.
6. **Registrar evidências:** 320/390/768/1440, alturas/DPR/estado/revisão; verificar destino da primeira captura futura dentro de `.playwright-mcp` e legibilidade. Vídeo/trace para motion; profiling exploratório sem chamar de CA-13 completo.

**Critério de escolha:** primeiro, compreensão e verdade comercial; depois, memorabilidade e coerência autoral; em conjunto, mobile/a11y/latência/desempenho/manutenção reais. Não há opção vencedora só por tamanho de bundle nem por efeito mais complexo. Tampouco aprovação por checks técnicos verdes com visual fraco.

G1 é humano e obrigatório. Direção genérica, previsível, template-like ou fraca volta a UI/T01/T03 antes de fullpage. Ausência de resposta humana não consolida direção/sistema. G2 é posterior e específico para o cérebro. QA T09 avalia independentemente com sua própria evidência/skills; o operador **não é pré-condição do verdict técnico/comercial do QA**. G3 humano vem após QA APPROVED e não autoriza publicação por inferência.

## 12. Revisão documental, limitações e handoff

| Check / requisito | Resultado real nesta T01 |
|---|---|
| CA-02 / funções editoriais | Cobertura documental em §8, incluindo atuação além de bio e provas condicionais omitidas. Não testado em página. |
| CA-03 / conteúdo fiel | Limites S1/U1/IDX e qualificações preservados; nenhuma oferta/case/credencial independente inventada. Matriz de implementação futura continua necessária. |
| CA-15 / transformação | Hipótese e comparação concreta com baseline em §3/11. **Não comprovada em candidata renderizada.** Emenda de QA independente aplicada. |
| CA-16 / exploração | Conceito, alternativas, referências vistas, paleta, tipos/licenças, hero desktop/mobile, motion e brief documentados. Consolidação/validação visual permanece T03/G1. |
| Typecheck | **N/A — somente Markdown; nenhum código/configuração alterado, nenhum script existente executável identificado.** |
| Lint | **N/A — não há lint de projeto configurado; revisão documental manual não é lint aprovado.** |
| Unit | **N/A — nenhuma lógica implementada ou modificada.** |
| Integration | **N/A — nenhum contrato executável/integração criado ou alterado.** |
| Build | **N/A — sem manifest, compilação ou produto implementado nesta task.** |
| Rendered | **N/A — T01 documental proíbe protótipo/render da demo. PNGs antigos/referências não validam a candidata.** |
| Assets | **Não produzidos.** Retratos/marca apenas candidatos de material autorizado; cérebro é brief preliminar, sem prompt de produção. |

**Riscos materiais para o próximo handoff:**

- A leitura cerebral/material pode parecer cosmética ou IA; resolver por composição original e avaliação renderizada, não por adjetivos.
- Headline longa + foto + cérebro + CTA em mobile precisa de prova espacial real. A altura pode crescer; legibilidade e aviso não cedem.
- Família Bricolage pode resultar lúdica ou habitual demais na aplicação concreta; comparar pesos/larguras e alternativa B sem antecipar tipografia final.
- Skill `threejs` completa não está disponível no conteúdo carregado. Se T03 depender dela, Maestro resolve disponibilidade/documentação antes do teste, sem instalação silenciosa. Isso não bloqueia a direção documental nem elimina a opção.
- Originais isolados/crops, distribuição final de fontes, contraste, motion e desempenho ainda não verificados. Licenças candidatas textualmente conferidas não equivalem a assets finais aprovados.
- Navegador de pesquisa apresentou timeouts; nenhuma evidência renderizada futura ou path de captura foi validado. Não transportar esse estado como aprovação Playwright.

**Perguntas materiais novas de produto:** nenhuma. G1 e G2 são decisões futuras já previstas, não motivo para reabrir discovery ou inventar catálogo. A próxima ação cabe ao @maestro: receber T01 e, se pertinente, autorizar separadamente T02/T03. Não acionar QA diretamente.

**Estado de handoff: PARTIAL no ciclo de UI — T01 documental concluída; nenhuma implementação ou aprovação visual. STOP T01.**
