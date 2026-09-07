# AS Mentorias — plano técnico

**READY_FOR_ARCHITECTURE_APPROVAL — refinamentos incorporados; aprovação condicional pendente de conferência do Maestro.**

Somente planejamento. Product Gate APPROVED conforme `gate-log.md`. Emenda explícita atual do operador: “Após incorporar esses refinamentos, considero o ARCHITECTURE GATE APPROVED e autorizo o início de T01.” Maestro confere as cinco condições (§10) antes de registrar G0 e liberar T01 documental; não exigir nova aprovação humana se cumpridas. Tech não se autoaprova nem inicia tasks. O gate-log anterior permanece inalterado e não registra ainda esta conferência. Esta revisão não executa implementação, instalações, assets, servidores, Git mutável, publicação, contato ou proposta. Autor: @tech-architect; handoff exclusivo ao @maestro.

> **EMENDA 2026-09-06 — Tailwind (G1 e Autorizações do gate-log):** a diretiva do operador **“Tailwind CSS no lugar do CSS autoral”** foi incorporada como emenda material — seções novas **§2a, §3a, §7a, §8a, §9a e §10a** abaixo. A §2 original (“CSS autoral”) permanece como histórico e vale em todos os pontos não cobertos pela emenda. Astro + TS SSG, sem React/backend, engine WAAPI, contratos do CTA (§3) e CA-13 permanecem intactos; a escada do operador em `.situations-lines` é requisito de preservação 1:1. **Status desta emenda: READY_FOR_OPERATOR_APPROVAL — a aprovação do operador é pré-condição de implementação; STOP.**

## 1. Entradas e estado inspecionado

- `spec.md` (284 linhas) e `research.md` (206 linhas) lidos completos; `gate-log.md`, AGENTS global/local e auditoria `evidence/current-site-audit.md` §9 lidos. Growth já incorporado na spec/research, sem necessidade de nova interpretação de produto.
- Cabeçalhos Product ainda dizem conferência pendente; o gate-log explica expressamente que são o handoff anterior e consolida APPROVED pelo operador. Não é inconsistência material aberta nem autorização para editar documentos Product/Maestro. Proibições de arquitetura na entrega Product não impedem esta etapa explicitamente autorizada.
- Descoberta integral de arquivos no workspace encontrou governança, specs e evidências, **nenhum código, manifest, lockfile, configuração de framework ou design system existente**. Não há stack instalada identificada a preservar. Não foram lidos segredos. Paths absolutos fornecidos pelo operador; runtime não oferece shell/pwd, relógio ou aferição de Node/package manager instalados.
- Obsidian: busca `as-mentoria` sem resultados; ADR-038 relido (gates, ownership, escritor único, QA independente). Routing Astra local e solicitação atual prevalecem sobre mapa legado. Sem delegação/fallback. Sem nova decisão que exija escalada de raciocínio nesta fase.
- Limite herdado: governança ancestral de `W:\` não foi aferida; research registra acesso negado, não repetido. Não se infere inexistência.
- Os 15 PNGs baseline aparecem na descoberta em `.playwright-mcp`; a auditoria registra movimentação pelo operador. Não reinspecionados visualmente aqui. **Destino efetivo da próxima captura MCP ainda NÃO verificado**. Baseline não é QA da nova demo.

## 2. Decisão recomendada e alternativas

**Astro + TypeScript, saída estática SSG, componentes `.astro`, CSS autoral e scripts TS pequenos. Sem React inicialmente.** Astro é framework de composição/build, não uma escolha de página vanilla nem limitação da ambição visual. A interação aprovada não requer runtime de UI reativa, router cliente, servidor de aplicação ou banco.

Base técnica candidata: Astro **7.3.1**, observado no registry e manifest oficial; docs online são móveis e Context7 pode estar defasado (catálogo expôs 6.3.1). Não há versão instalada. Antes da primeira instalação autorizada, conferir release/segurança/compatibilidade, registrar versões exatas de Astro, TypeScript, Node e ferramentas, e gerar um único lockfile. Usar release estável compatível, nunca canary ou upgrade major silencioso.

Runtime proposto: Node LTS par suportado, mínimo documental Node 22.12.0; npm acompanha Node e evita instalar package manager adicional. O registry declara npm >=9.6.5. Versão local não verificada; preservar ferramenta local saudável caso encontrada no preflight e registrar justificativa. Não executar scaffolding que sobrescreva specs/governança nem instalar tema pronto.

| Candidata | Rendering/SEO e JavaScript | Composição, DX, imagens/fonts/motion | Operação, expansão e decisão |
|---|---|---|---|
| **Astro + TS** | HTML completo no build; sem JS de hidratação por padrão. Scripts somente para CTA/motion. SEO sem depender de execução JS. SSR disponível futuramente, desnecessário agora. | Componentes/slots, CSS local e tipos sem runtime de framework; pipeline `astro:assets` em build. Motion JS independente de React. Exige disciplina de DOM/foco nos poucos scripts. | Artefatos estáticos portáveis, sem adapter/backend. Melhor proporção para one-page editorial. Evolui para páginas editoriais/islands quando houver necessidade aprovada. **Recomendada.** |
| Astro + React seletivo | Mesmo SSG; `client:*` adiciona hidratação apenas à ilha necessária. | Útil para componente realmente reativo complexo; CTA binário não justifica. | Não instalar React preventivamente. Reavaliar somente se requisito novo demonstrar ganho líquido. |
| Next + TS/React | App Router pode exportar HTML estático; runtime React/router cliente permanece. SSR excelente se necessário. | RSC/client boundaries, ótima composição e DX; export estático não dispõe do servidor de otimização padrão de imagem: demanda pipeline/loader compatível. Fonts locais possíveis. Motion amplamente viável. | Export é portátil, mas recursos fullstack ficam indisponíveis; SSR introduziria operação/patching sem benefício atual. Não selecionado para esta interação mínima. |
| React + Vite | SPA usual depende de JS para conteúdo; SSG/SSR exigiria ferramenta adicional ou integração low-level, não vem resolvido pela escolha Vite. | Boa DX/componentização, motion viável. Otimização responsiva de imagens e prerender precisam de decisões extras. | Hosting estático simples; maior superfície cliente sem ganho aqui. Preferível para aplicação interativa, não este conteúdo. |
| Nuxt + Vue/TS | `nuxt generate` com SSR habilitado pré-renderiza HTML e payload; hidrata Vue. `ssr:false` perde HTML de conteúdo inicial. | SFCs e DX maduros; módulos de imagem/fonts e motion possíveis, porém adicionam escolhas. | SSG portátil; Nitro/SSR para expansão não necessários agora. Sem base Vue existente que compense runtime/convenções adicionais. |
| HTML/CSS/TS manual ou outro SSG | HTML estático pode ser excelente e leve. | Composição, assets e verificações teriam de ser organizados manualmente ou em outra stack. | Nenhuma vantagem demonstrada sobre Astro. Não adotar vanilla por default nem pesquisar stacks extras sem requisito. |

Todos podem entregar boa arte; nenhum framework garante premium ou CWV. A recomendação reduz JS/complexidade operacional para liberar orçamento de imagens, fontes e direção de movimento. Não restringe full-bleed, layering ou tipografia expressiva.

## §2a — Emenda Tailwind (2026-09-06): decisão de stack CSS e mapa de migração

**Autorização:** G1 APPROVED + diretiva do operador **“Tailwind CSS no lugar do CSS autoral”** + autorização da emenda (gate-log, Autorizações 1). Para a dimensão de estilização, esta seção prevalece sobre a expressão “CSS autoral” da §2 (preservada como histórico). Nada mais muda: Astro + TS SSG, sem React/backend (§2), engine WAAPI e contratos do CTA (§3–4), budgets e CA-13 (§7) permanecem. Aprovação do operador desta emenda é pré-condição de implementação.

### A. Versão e integração confirmadas (consulta 2026-09-06)

- **Integração vigente — Context7 `/tailwindlabs/tailwindcss.com` (docs oficiais tailwindcss.com; 3 queries):** Tailwind **v4 CSS-first**: plugin Vite **`@tailwindcss/vite`** registrado nos `vite.plugins` — no Astro, em `astro.config.mjs` → `vite: { plugins: [tailwindcss()] }`; entrada única de CSS com **`@import "tailwindcss"`** (substitui as antigas diretivas `@tailwind`); configuração **`@theme`** CSS-first (`--color-*`, `--font-*`, `--breakpoint-*`, `--spacing-*`, `--ease-*`); breakpoints customizados/reset (`--breakpoint-*: initial`); variantes responsivas min-width com composição (`sm:max-lg:`, `max-lg:`); **`motion-reduce:`/`motion-safe:`** combináveis com responsivas/pseudo-classes; dark mode via `@custom-variant` (**N/A — sem dark mode no projeto**).
- **Versão estável vigente — registry npm (npmjs.com/package/tailwindcss), 2026-09-06:** **tailwindcss 4.3.3**. **Divergência registrada:** o catálogo Context7 também expõe blogs v4-alpha/upgrade-guide e espelho v3; os padrões acima coincidem com a v4 estável e prevalecem os docs — **nada de `@next`/canary**. Versão exata de `@tailwindcss/vite` (linha 4.x, acompanha o core) **reconferir no registry antes da instalação**, fixando a mesma minor do core; divergência material → Maestro. O guia Astro dedicado do Tailwind não coube no limite de queries: reconferir a página de framework guides no preflight da instalação (mecanismo já confirmado: plugin Vite; nenhum `@astrojs/tailwind` da era v3).
- Nenhuma instalação nesta rodada documental; instalação somente na task liberada (T05 fase 5a), com reconferência de versões no momento de instalar.

### B. Estrutura de estilos

`base.css` + `presence.css` → **um único `src/styles/global.css`**: `@import "tailwindcss"`; `@font-face` locais no topo (fora de layers, `font-display: swap` preservado); `@theme` com os tokens; `@layer base` residual mínimo; `@layer components` (ou `@utility`) mínimo. `DemoLayout.astro` importa `global.css`; `index.astro` deixa de importar `presence.css`. Markup migra para utilities; **classes semânticas que são hooks de JS permanecem** (motion.ts lê `.sculpture`, `.presence`, `.open-space`; contact-info.ts usa IDs/data-attributes, intactos). Sem PostCSS config, sem lib de UI, sem ferramenta extra.

### C. Mapa de migração por arquivo/fluxo (preservação 1:1)

| Fluxo atual | Migração Tailwind v4 |
|---|---|
| Tokens de cor (`--night #070910`, `--paper #f4efe2`, `--mineral #e4dcc8`, `--ink`, `--muted #50576a`, `--reverse`, `--reverse-muted #d5cfbf`, `--gold #f3d386`) | `@theme` → `--color-night`, `--color-paper`, `--color-mineral`, `--color-ink`, `--color-muted`, `--color-reverse`, `--color-reverse-muted`, `--color-gold` (valores byte a byte). Estados derivados viram tokens: `--color-gold-hover #ffe3a4`, `--color-gold-active #d8b96f`, `--color-night-hover #232c45`. |
| `--gutter: clamp(1.25rem, 5vw, 5rem)` | `--spacing-gutter` em `@theme` → utilities `px-gutter`/`pl-gutter`/etc.; equivalência conferida na implementação. |
| Bricolage 600 / Source Sans 3 | `--font-display`/`--font-body` em `@theme`; `@font-face` locais inalterados. |
| **Escada do operador** (`.situations-lines`, presence.css:26-51 — “considere certo”, **não reverter**) | Grupo: `mx-auto w-fit` + tipografia display (clamp de tamanho/letter-spacing −.025em via arbitrary/token). Itens: 2º `translate-x-8` (2rem), 3º `translate-x-16` (4rem) + `text-night`; `py-[0.6rem]`. Equivalência numérica 2rem/4rem conferida no renderizado. Não há media query desligando a escada hoje — permanece global. |
| Véus do sculpture (`.sculpture::after`, 3 gradientes multi-stop com hex-alpha por faixa) | **Não expressíveis legivelmente como utilities** → regra autoral mínima em `@layer components`/`@utility` com os valores exatos; justificativa: legibilidade/manutenção, não hábito. |
| Fallback de mídia (`.presence:has(.media-unavailable) .presence-field` + `.media-unavailable`) | Seletor `:has()` relacional não é utility → autoral mínimo em layer; classe adicionada por JS (falha de imagem) inalterada. |
| Política de foco (contrato: outline 3px currentColor offset 5px; `button:focus-visible` night; `main:focus` reverse −3px) | `@layer base` autoral mínimo — replicar por utilities multiplicaria classes e arriscaria divergência do contrato. |
| Alvos/botões | nav `min-h-11 min-w-11` (44px); botão base como component layer (`min-h-14` = 56px, `px-5 py-[0.95rem]`, radius 4px, hover/active dos tokens); CTA dourado via contexto equivalente (`.presence`/utilities). |
| Media queries 599 / 600–1099 / ≥1100 / ≤1099 | `@theme`: `--breakpoint-sm: 40rem` (600px) e `--breakpoint-lg: 68.75rem` (1100px, override). Mobile-first: regras max-599 → base + `sm:`; 600–1099 → `sm:max-lg:`; ≥1100 → `lg:`; regra `:has` ≤1099 → `max-lg:` autoral. Equivalência comprovada por inspeção/medição (§7a). |
| Reduced motion | Transition do botão (wrapper `no-preference`) → `motion-safe:transition-*`. `@media (prefers-reduced-motion: reduce) { .sculpture, .sculpture img { transform: none !important; } }` → **`motion-reduce:transform-none!` (important como sufixo v4)** ou regra autoral equivalente — **o `!important` é contrato funcional**: vence o `style.transform` inline do parallax (motion.ts); perder o important é regressão de a11y. |
| Reset atual vs preflight v4 | Matriz de equivalência item a item (box-sizing, margens, `[hidden]`, `overflow-wrap: anywhere`, `::selection`, `scrollbar-color`, `font-synthesis`, line-height 1.5, underline de links) na evidência da task; divergências cobertas por `@layer base` mínimo. |
| Motion/CTA (WAAPI, contact-info.ts) | **Não mudam.** Seletores JS, estados finais (ex.: `rotate(24deg)` do `.open-space`) e fallback sem JS preservados. |

Sem claims novos; nenhum relaxamento de CA-13; nenhuma dependência além de `tailwindcss` + `@tailwindcss/vite` (devDependencies).

## 3. Estrutura e fronteiras previstas

Estrutura proposta, **não criada nesta fase**:

- `src/pages/index.astro`: composição editorial explícita e extensível; funções da spec §2.2, agrupadas/desdobradas conforme direção e conteúdo.
- `src/layouts/DemoLayout.astro`: documento pt-BR, head, contexto FP, skip link e landmarks. Não impõe largura universal.
- `src/components/`: hero, navegação, trechos editoriais, retrato, CTA e região informativa. Extrair por responsabilidade/reutilização real, não criar oito componentes por formalismo.
- `src/styles/`: tokens definidos por UI, bases acessíveis e regras compositivas. Cada bloco decide largura/bleed/ritmo. Slots/camadas decorativas não mudam ordem semântica do DOM.
- `src/scripts/contact-info.ts` e `motion.ts`: controladores independentes; motion não inicializa nem bloqueia CTA.
- `src/assets/`: imagens locais inspecionadas e aprovadas para processamento no build; `public/fonts/` e licenças para arquivos locais distribuíveis. Nada remoto no runtime.
- `tests/`: testes locais do controlador/contratos e jornada. `specs/as-mentorias/evidence/`: relatórios textuais de direção, claims/assets, checks e QA. Capturas/traces/medições brutas somente em `.playwright-mcp/`.

Não criar CMS, content collections, engine genérica de blocos, design-system package, store global, client router ou arquitetura em camadas. Copy estática pode residir nos componentes; manter matriz documental `trecho/componente → claim → S1/U1 e qualificação` sem expor NEEDs/fontes internas no bundle. Atribuição pública proporcional continua na narrativa/rodapé; não criar links externos de navegação por conveniência.

**Ownership:** UI implementa toda a experiência. Não há task Systems: sem API, backend, domínio transacional, endpoints, eventos, login, autorização de produto ou dados persistentes. DevOps apenas valida preparação local/runbook/segurança do servidor estático. QA independente não altera produção.

### Contrato do CTA

- Hero e fechamento usam rótulos, aviso prévio e texto informativo **exatos da spec §2.4**. Nunca URL WhatsApp/mailto, contato real, pergunta respondível ou simulação.
- Uma única região não modal, nomeada por heading, no fluxo da página; nenhum dialog/focus trap ou overlay que interrompa a leitura. UI escolhe posição visual preservando foco/contexto em ambos os extremos.
- Estado apenas em memória: `closed`/`open`, referência ao acionador e posição de scroll anterior. Abrir é síncrono: exibir região, atualizar estados acessíveis e focar título/início com foco programático. Identificadores únicos e relação `aria-controls`; `aria-expanded` coerente nos acionadores. Não anunciar novamente todo o texto via live region redundante.
- Voltar: ocultar, restaurar foco no acionador correto e posição anterior sem animação obrigatória. Repetir idempotentemente; abrir enquanto aberta não cria outra região nem sobrescreve contexto arbitrariamente. Recarregar não preserva estado.
- Controlador TS mínimo separado do motion; não esperar imports pesados, imagem ou animação. A primeira mudança visual ocorre imediatamente, eventual transição é complementar.
- Fallback de JS indisponível: informação permanece legível no HTML, sem alegar envio nem deixar a leitura bloqueada; controles sem funcionalidade não se apresentam como contato ativo. UI explicita/testa modo sem JS e erro controlado. Esse fallback não aprova falha do fluxo JS normal.
- Âncoras continuam navegação nativa; destinos existentes e acessíveis, compensação de cabeçalho se houver. Sem scroll hijack, barra inferior fixa, armazenamento, fetch/beacon ou histórico de conversa.

### §3a — Emenda Tailwind (2026-09-06): fronteiras de estilos

`src/styles/` passa a ter `global.css` (entry único Tailwind, §2a.B); `base.css` e `presence.css` permanecem intactos no worktree como âncora de rollback até o aceite visual (§8a). Componentes `.astro` usam utilities no markup; sobrevive autoral mínimo, cada item com justificativa de legibilidade: `@font-face`, tokens `@theme`, política de foco, véus `::after`, `:has()` do fallback, `::selection`/scrollbar e coberturas eventuais do preflight. Sem CSS-in-JS, sem estilo inline novo (o transform do parallax permanece em motion.ts), sem lib de UI.

## 4. Direção visual e mecanismo de motion

Paleta, famílias, escala, pesos/tracking/line-height, tokens, easing/durações e hierarquia do cérebro **pertencem à UI**, não estão selecionados por Tech. Base técnica oferece CSS Grid/Flex, tamanhos fluidos, slots, camadas posicionadas, recortes e limites por seção. Não impor hero default duas colunas, container universal, cards em série, biblioteca visual pronta, blobs/gradientes filler ou glass sem função.

### Checkpoint obrigatório antes da página completa

Após Architecture aprovado e autorização da etapa: UI explora conceito autoral e valida direção, design system, hero, fotografia/cropping, ritmo representativo e motion em desktop **e** mobile. Consultar índices locais landing-pages e referências externas pertinentes sem copiar nem herdar modelo SaaS. Um protótipo local delimitado pode cobrir hero + transição editorial + CTA, não antecipar full page. Sem gerar cérebro nesse protótipo; estudo compositivo interno deve prever sua integração sem reutilizar fundo antigo como solução final e sem placeholder voltado à prospect.

Maestro/operador avaliam evidência renderizada, comparação com baseline e crítica explícita de genericidade. G1 firme: se genérico, previsível, template-like ou visualmente fraco, voltar à UI/T01–T03 antes de full page — não seguir por conveniência ou checks técnicos verdes. Consolidar direção/sistema e registrar aprovação antes de autorizar produção do cérebro original. Ferramenta disponível no Maestro não é autorização; Tech não gera nada. UI responde pelo brief, incorporação e qualidade; mecanismo de produção será disponibilizado pelo Maestro somente na etapa autorizada, sem subdelegação automática.

### Skills UI por etapa (T01/T03/T07)

UI aplica a arquitetura de skills do seu preset: avaliar CORE pertinentes `impeccable`, `design-system`, `design-critique`, `checklist-design`, `web-accessibility`. Para a alta ambição, avaliar explicitamente `build-awwwards-quality-sites`, `cinematic-scroll-storytelling`, `gsap-core`, `gsap-scrolltrigger`, `gsap-performance`, `gsap-plugins` quando pertinente, e `threejs`. Seleção/carregamento sob demanda, não carregar todas automaticamente. Em T01 registrar estudo documental; T03 registrar aplicação à exploração/decisão; T07 registrar crítica/refino/verificação.

Em cada etapa, registrar skill avaliada, carregada ou não, aplicação concreta, exclusão e motivo em evidência da task. Se requerida indisponível no preset/runtime, reportar ao Maestro sem inventar leitura nem instalar. Skills não predeterminam engines, scroll smoother ou preloaders contra critérios da spec e não ampliam autorização da etapa. Maestro coordena, não executa skills UI. Tech carregou somente `architecture` para este refinamento documental; não executa trabalho UI.

### Motion proporcional, obrigatório no modo normal

**Motion JavaScript é candidato inicial, não restrição nem engine final escolhida.** T03, sob ownership UI, compara e escolhe conforme direção em exploração; consolida a escolha em G1. Permitir CSS/native, Motion, GSAP/ScrollTrigger, Three.js/WebGL ou combinação proporcional com benefício demonstrável. Não excluir high-end antes da exploração nem adotar tecnologia para demo de efeito. Manter Astro + TS SSG, sem React/backend sem requisito. Conteúdo essencial visível inicialmente; decoração/ênfase não pode atrasar leitura ou CTA.

| Opção a avaliar em T03 | Hipótese a confrontar com a direção e evidência |
|---|---|
| CSS + APIs nativas | Expressar feedback/coreografia com simplicidade; não reduzir narrativa a fades repetidos. |
| Motion (mini/hybrid conforme necessidade) | Candidato inicial para coreografia seletiva; comparar utilidade e bundle real, sem preferência automática por tamanho. |
| GSAP/ScrollTrigger | Avaliar coreografia/timelines/scroll quando a direção justificar, sem pressupor adoção. |
| Three.js/WebGL | Avaliar profundidade/interação autoral quando trouxer ganho visual real, incluindo fallback estático e custo mobile. |
| Combinação proporcional | Justificar responsabilidades não redundantes, integração, manutenção e ganho frente a uma solução única. |

T03 registra comparação de impacto visual, manutenção, acessibilidade, mobile e performance reais, decisão e alternativas excluídas com motivos. Consulta Context7 e documentação oficial atual de APIs, compatibilidade e licenças antes de adotar cada dependência; registra versões/fontes/notices. As consultas históricas de Motion em §9 não certificam adoção futura nem outras engines. Não afirmar preços/licenças não verificados. Mudança material de custo, segurança, experiência ou escopo retorna ao Maestro; a escolha entre estas opções dentro dos critérios aprovados pertence a T03/G1, não exige reabrir Architecture só pelo nome da engine.

UI documenta por efeito: elemento, função, gatilho, duração/easing, custo, comportamento mobile, cleanup e equivalente reduzido. Avaliar reveals/masks, parallax sutil, transições, sticky e feedback, não usar tudo. Sticky só se não encobrir foco/ler; nenhuma roda/touch capturada. Preferir transform/opacity; masks, filtros e camadas grandes precisam de profiling. Pausar/desconectar fora de contexto, evitar listeners com layout reads/writes por frame, `will-change` indiscriminado e loops permanentes.

`prefers-reduced-motion` desde primeiro paint e mudança durante sessão: composição final estática completa, cancelar efeitos e subscriptions, sem parallax, pulsação ou smooth scroll. Fallback de API/browser também é composição legível, não conteúdo invisível. CSS/TS da redução não pode depender de download da engine.

## 5. Assets, fontes e conteúdo confiável

- Retratos reais candidatos `amanda-xadrez.jpeg` / `amanda-reflexao.jpg` e marca conforme research §3.4. UI inspeciona os arquivos antes de incorporar. Não hotlink, gerar pessoa fictícia, substituir autoria por cérebro ou importar assets de referências.
- Registro por asset: URL de origem, arquivo/versão/hash após obtenção, autorização O4 e seu limite privado, autoria/licença disponível, uso, transformações, dimensões/peso e alt/decorativo. Autorização do operador não audita direitos universais. Se restrição concreta surgir, parar uso e retornar ao Maestro.
- Cérebro original apenas após checkpoint de direção/sistema **e autorização explícita de produção**; metáfora de pensamento/expressão/conexão, não prova neurocientífica. Revisar qualidade desktop/mobile antes de integrar. Guardar original e derivados separadamente após autorização; sem produção agora.
- Usar `astro:assets` Image/Picture para raster local, tamanhos responsivos `srcset/sizes`, AVIF/WebP quando vantajosos com fallback, dimensões/aspect-ratio reservados. Foto candidata a LCP não lazy; prioridade alta somente quando confirmada como crítica. Abaixo da dobra lazy. Otimizar no build, não criar endpoint de imagem.
- Arte/foto ausente: manter nome/bio/CTA e composição intencional, ocultar decoração quebrada; não reservar enorme buraco, exibir lorem ipsum ou uma pessoa substituta. Respeitar estabilidade e testar bloqueio de cada asset. Falha de retrato não dispensa retrato real na candidata saudável.
- UI escolhe famílias display/body, não Tech; seleção com licença comprovada de self-hosting/distribuição. Preferir arquivos WOFF2 locais; começar com até duas famílias e somente pesos/glifos necessários, garantindo português. OFL 1.1 é alternativa de licença, não presunção sobre qualquer fonte. Manter notices e conferir Reserved Font Names antes de subset/conversão/modificação. Licença comercial/custo novo exige autorização.
- `font-display` e fallback com métricas compatíveis, verificar swap/CLS e legibilidade. Preload somente fonte crítica comprovada; nenhuma Google Fonts API/CDN em runtime. Se fonte falhar, fallback íntegro sem texto invisível.
- Módulos sem prova omitidos com título/âncora/espaço; não descartar atuação/biografia publicadas válidas. Fontes/snippets não viram credencial auditada, case, método, catálogo ou workshop ativo.

## 6. Privacidade, SEO e operação

**Default exclusivamente local:** build estático servido por ferramenta local com bind explícito `127.0.0.1` (ou `::1` verificado), nunca `0.0.0.0`, túnel, LAN ou preview público. Registrar URL/porta real e processo, verificar listeners e impedir distribuição inadvertida. Loopback limita rede, não protege contra outro usuário/processo da máquina; máquina/sessão e arquivos devem permanecer sob controle do operador. Nenhum login de produto é necessário.

- Servir somente diretório de saída, jamais workspace/specs/evidências. Sem directory listing, source maps públicos, arquivos internos, segredos, service worker ou integração. Conferir requisições desde carga até retorno/repetição: somente entrega de recursos locais; sem terceiros, pixels, analytics, embeds, persistência ou requests acionados pelo CTA.
- Ferramentas de dev podem usar HMR local; medição/QA de entrega usam build sem HMR/toolbar. Desativar telemetria das ferramentas quando disponível, verificar mecanismo vigente antes do uso. Não adicionar instrumentação de visitantes.
- Logs: não criar access/event log da jornada; preferir servidor sem persistência de access logs e documentar defaults efetivos. Logs de ferramenta/servidor não auditados não são declarados inexistentes. Evidências de QA apenas locais, sem cookies/PII; não copiar logs alheios. Retenção/remoção de artefatos sob decisão do operador, sem apagar baseline.
- Head: título/description fiéis à demo, lang pt-BR, viewport e `robots noindex,nofollow`; sem sitemap público/canonical/domínio oficial inventado. Não indexação é defesa auxiliar, **não acesso restrito**. Social metadata proporcional (título/descrição demonstrativos); omitir URLs absolutas/og:url e imagem social que exigiriam domínio ou asset ainda não aprovado. Não JSON-LD de credenciais/resultados ou organização oficial.
- Preparação DevOps avalia headers na entrega local: CSP restritiva compatível com build (self para recursos necessários, `connect-src 'none'`, `form-action 'none'`, `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'` em header), `Referrer-Policy: no-referrer`, `X-Content-Type-Options: nosniff` e não indexação também por header quando servidor permitir. Evitar liberar inline scripts indiscriminadamente; externalizar/hash se necessário. Não presumir headers implementados pelo preview. Sem HSTS artificial em HTTP loopback. Sem container/CI/cloud apenas para demonstrar.

**Deploy recomendado, somente candidato futuro:** distribuição estática atrás de controle de acesso real do ambiente aprovado. Não GitHub Pages público por conveniência nem confiar em URL difícil/noindex. Provedor não selecionado: depende de autorização de alvo exato, identidade/acesso, logs/retenção, cache, domínio e direitos. Depois de QA APPROVED + gate humano específico, DevOps pode propor host estático protegido, sem backend de produto. Futuro site oficial requer novo escopo SEO/contato/legal/consentimentos; não simples remoção do aviso.

Rollout local: validar build isolado, executar URL loopback registrada, apresentar somente candidata aprovada localmente. Rollback: parar servidor/candidata problemática, restaurar artefato local anterior validado e registrar nova revisão; sem Git destrutivo ou downgrade não auditado. Refinar assets/motion preservando requisitos, não eliminá-los para ganhar métricas. Qualquer release remoto/rollback remoto requer autorização própria.

## 7. Performance e evidência reproduzível

### Targets preventivos (não são limites absolutos de produto)

- JS total da jornada gzip: target <=35 KiB; alerta acima de 50 KiB, incluindo mecanismo escolhido em T03, sem React/router/analytics. Comparar bundles reais das opções pertinentes ao protótipo, sem veto por engine ou tamanho.
- Targets: CSS inicial gzip <=35 KiB; fontes transferidas <=150 KiB; imagem crítica mobile <=250 KiB; primeira viewport agregada <=600 KiB. Não são medidas existentes nem autorização para diminuir qualidade.
- Exceção documentada e medida é possível para direção aprovada: registrar target excedido, benefício visual, alternativas, impacto de manutenção e medições comparáveis. Aceitar somente com LCP/CLS, responsiveness, a11y, mobile, latência e ausência de regressões REAIS atendidos. CA-13 permanece integral e não é relaxado; nenhum PASS apenas por ficar abaixo destes targets. T03 explora; T07 e T09 conferem candidata real.
- Somente preload crítico; arte abaixo da dobra não compete com LCP. Profiling orienta refino proporcional, não veto automático por tamanho.

### CA-13: laboratório local, sem telemetry

1. Medir **build**, não dev. Registrar hash/revisão do artefato, servidor/URL, Node/npm, SO, CPU/RAM, navegador/build e ferramentas, data/hora/timezone, viewport/DPR, energia/carga da máquina, extensões desativadas. Fixar condições entre execuções.
2. Viewports **390 × 844 e 1440 × 900**. Rede sintética **4 Mb/s download, 1 Mb/s upload, RTT 150 ms; CPU 4×** em ambos. Configurar perfil customizado real via DevTools/CDP compatível com o navegador. Se API expressa bytes/s: 500.000 down e 125.000 up, não 4 MB/s. Registrar unidade/método; validar aplicação efetiva também em loopback e documentar RTT observado. Não usar preset Lighthouse mobile diferente como substituto.
3. **Três cargas frias por viewport**, cache desabilitado/limpo, contextos limpos e sem SW, nenhuma interação antes de finalizar métricas de carga. Observar pelo menos janela fixa de 10 s após load/estabilização, registrar duração e completar finalização de LCP; não encerrar ao primeiro paint. Preservar seis execuções individuais e mediana separada por viewport: **LCP <=2,5 s, CLS <=0,1**.
4. Preferir métricas do trace Performance do navegador ou coletor local dev-only baseado em `web-vitals`, injetado pelo teste, não no bundle entregue. LCP deve identificar elemento/tempo; CLS deve usar definição de janelas de sessão/exclusão de input recente, não soma ingênua. Callback apenas retorna valores ao runner local; nunca copiar exemplo de analytics/beacon das docs. Confrontar resultado com trace; rolagem/jornada adicional procura shifts tardios sem substituir ensaio de carga.
5. **Cinco acionamentos por ação**, por viewport e mesmo perfil: abrir via hero, abrir via fechamento, fechar/restaurar cada origem e cada destino de âncora existente. Estado preparado antes de cada amostra, registrar todas, não só média. Limite **<=200 ms por acionamento até início da mudança visual**, não duração total da animação nem INP de campo.
6. Usar timestamps de input e primeiro frame apresentado com alteração correspondente em trace/filmstrip para demonstrar latência; marca de handler, DOM mutation ou `requestAnimationFrame` isolada não prova pixel apresentado. Event Timing pode auxiliar, não substituir este contrato. Preservar amostras e incerteza temporal; granularidade incapaz de comprovar <=200 ms resulta inconclusivo/BLOCKED para esse critério, não PASS. Automatizar interação sem introduzir espera artificial e revisar frames próximos ao limite.
7. Capturas/vídeos pesados de motion em rodada separada para não distorcer medições; documentar overhead do trace mínimo usado. Sem RUM, CrUX, PageSpeed remoto ou tráfego de visitantes. Lighthouse pode diagnosticar, nunca substituir perfil exato/medianas/actions. Ambiente não comparável ou impossibilidade de emulação precisa retorna ao Maestro.

### Acessibilidade, visual e regressão

- CA-01–18 rastreados a testes/inspeção. Desktop/mobile **320/390/768/1440 CSS px**; registrar altura, DPR, scroll e estados. Cobrir hero, percurso inteiro, final, região aberta/fechada, imagens/fontes bloqueadas, teclado, links, focus e console/rede/armazenamento.
- WCAG **2.2 A/AA integral aplicável**, com inventário de critérios, método, evidência, resultado e N/A justificado. Scanner não basta. Inclui landmarks/heading/alt, leitor de tela, nome/papel/estado, ordem/foco não oculto, skip link, teclado sem armadilha, contraste em fundos/imagens/estados reais e conteúdo que não depende de hover/cor/movimento.
- Contraste conforme CA-09: texto normal 4,5:1, grande 3:1, informação necessária de controles 3:1 onde aplicável; alvos de navegação/botões **44 × 44 CSS px** por produto. Testar zoom **400% partindo de 1280 CSS px**, texto 200%, espaçamento 1.4.12 e orientação pertinente, sem overflow de leitura/truncamento.
- Motion normal e reduzido, carga/scroll/hover/focus/CTA/transições: vídeo ou trace com sequência temporal e registro de função/resultado. Screenshot isolado não comprova movimento; modo reduzido deve ser verificado também em mudança de preferência em sessão.
- Antes da primeira captura, confirmar destino efetivo do MCP e ler o arquivo resultante em **`W:\FP\as-mentoria-concept\.playwright-mcp\`**. Se sair em outro lugar/faltar permissão, parar captura e solicitar ajuste ao Maestro; não afirmar config testada nem mover silenciosamente. Índice com paths legíveis, viewport/estado e revisão; não sobrescrever baseline.
- Avaliação visual/comercial independente: QA/avaliador independente compara antes/depois usando a rubrica aprovada CA-15–17: público, situações, atuação publicada, autoria/confiança, próximo passo e reconhecimento do contato inativo antes do clique; transformação concreta de marca/autoridade/presença nos primeiros segundos; hero, ritmo, tipografia, cropping, profundidade e linguagem própria superiores ao template, sem prometer conversão. Registrar por critério observação, evidência e resultado, não só gosto ou checks verdes. UI faz autovalidação em T07; QA reproduz independentemente em T09 com suas próprias skills QA.
- **Emenda explícita do operador a CA-15:** a redação Product antiga “operador/avaliador indicado” não exige participação do operador para avaliação/verdict técnico. QA pode avaliar independentemente pelos critérios/rubrica aprovados. Esta instrução atual prevalece; Tech não edita spec/research. T07/T09 não aguardam avaliação humana de CA-15. Revisão humana permanece G1 e G3; G3 somente após QA APPROVED, nunca condição para o verdict QA.

### §7a — Emenda Tailwind (2026-09-06): impacto em budgets e checks

- **CSS inicial gzip ≤35 KiB segue target preventivo** (não veto; exceção documentada e medida conforme §7). Comparação documental: CSS atual (base + presence ≈ 5,5 KiB brutos) vs migrado (preflight v4 + tokens `@theme` + utilities usadas + autoral residual). Estimativa preventiva ≈ 6–12 KiB gzip — **estimativa documental, não medição**; medição real no build pela T07 com o método dos demais budgets. JS não aumenta (Tailwind v4 é build-time; nenhum runtime cliente).
- **Checks: nenhum comando muda.** `typecheck` (`astro check` via wrapper), `lint` (`eslint . --max-warnings 0`), `build`, `test:unit`, `test:integration` (roda build). Tailwind compila dentro do pipeline Vite do Astro em dev/build; sem passo de CSS adicional e sem PostCSS config. **eslint: nenhum ignore novo necessário** — v4 não emite arquivos CSS no workspace (saída via pipeline). Falso-positivo eventual: documentar na evidência, sem adicionar ignore sem necessidade demonstrada e sem relaxar `--max-warnings 0`. `tsconfig`/strict, `assetsInlineLimit: 0`, strictPort e devToolbar desativada permanecem.
- **Imports/caching:** import único de `global.css` no `DemoLayout.astro`; `index.astro` deixa de importar `presence.css`; caching segue o pipeline Vite (HMR em dev, build limpo em preview/QA).
- **Verificação visual pós-migração (obrigatória do implementador, além dos protocolos CA-10/CA-13 que mantêm 320/390/768/1440):** before/after comparativo em **1920/1440/768/390/320** cobrindo escada `.situations-lines` (centralização, offsets 0/2rem/4rem, cor do 3º item), foco 3px+offset em CTA/links/main, hover/active do CTA, véus nas três faixas, fallback `.media-unavailable`, alvos ≥44px, botão 56px, reduced-motion com scroll (parallax ausente) e troca de preferência em sessão, overflow 0, console sem erros/warnings. Capturas em `.playwright-mcp/` com destino verificado.

## 8. Sequência, riscos e gate

Ordem detalhada em `tasks.md`: aprovação Architecture → exploração UI → preparação mínima/protótipo delimitado → **checkpoint visual desktop/mobile e consolidação** → **autorização do asset** → asset/integracão → página completa/CTA/motion → checks e refino UI → preparação local DevOps → QA independente → decisão humana. Um escritor por vez em todo o worktree, inclusive documentos/testes. Independência lógica não permite execução concorrente de escrita.

| Risco | Controle / tratamento |
|---|---|
| Premium genérico ou transformação só cosmética | Checkpoint renderizado cedo, rubrica CA-15–18 e retorno UI antes da página completa/QA. |
| Arte/fontes/motion prejudicarem LCP, CLS, leitura ou redução | Budgets, protótipo, profiling no perfil exato, fallback estático íntegro; conflitos materiais voltam ao Maestro. |
| CTA parecer atendimento ou perder foco entre extremos | Região única, aviso antes de agir, contrato síncrono e testes de ambos os acionadores/retornos. |
| Credenciais/catálogo inflados ou conteúdo válido eliminado | Matriz claim → fonte e qualificação; omitir somente módulos sem prova. |
| Privacidade confundida com noindex | Loopback verificado, servir apenas build, sem terceiros/log de eventos; distribuição futura exige acesso real e autorização. |
| Licença/arquivo selecionado sem inspeção | Registro de direitos e derivados; nenhum asset/font aprovado apenas pelo nome. |
| Documentação móvel/versões divergentes | Matriz abaixo; versões exatas, APIs e segurança reconferidas antes de instalar. Não adotar main/canary por parecer mais novo. |
| WCAG oficial sem extração nesta sessão | Exigir acesso à norma e matriz integral na implementação/QA; jamais declarar conformidade com base neste plano. |
| Métrica ou pasta de evidência não verificável | Check do perfil/destino e BLOCKED no critério se não comprovável; não adaptar alvo silenciosamente. |

**Dados/migrations: não aplicáveis.** Estado efêmero de interface e copy estática não justificam banco/entidades; não produzir `data-model.md`.

**Decisões materiais abertas: nenhuma nova de produto.** Paleta/direção e intensidade de motion são decisões UI nos checkpoints, não lacunas que exijam inventar escopo. Provedor/deploy permanece fora da autorização. A decisão humana condicional do Architecture Gate já foi recebida nesta solicitação; falta conferência das condições pelo Maestro, não nova aprovação humana se atendidas. Versões locais, compatibilidade e execução de testes são verificações futuras explícitas.

### §8a — Emenda Tailwind (2026-09-06): riscos e rollback da migração

- **Revertível por arquivo:** `base.css` e `presence.css` preservados intactos no worktree até o aceite visual (não é repo Git — rollback por edição controlada: restaurar os imports originais e o markup da âncora before; capturas before/after das cinco viewports são a referência objetiva; sem Git destrutivo por inaplicável).
- **Critérios objetivos de aceite da migração:** zero regressão visual nas 5 viewports; escada idêntica ao estado “considere certo”; foco/estados do CTA idênticos; reduced-motion com parallax cancelado (inclui scroll e troca de preferência); fallback de mídia recolhe padding; console limpo; typecheck/lint/unit/integration/build verdes; footprint CSS medido e registrado; nenhum seletor JS quebrado.
- **Riscos novos:** divergência preflight vs reset atual (matriz de equivalência §2a.C); perda do `!important` de reduced-motion (contrato funcional — teste com scroll obrigatório); tokens duplicados ou regras residuais referenciando vars antigas; especificidade utilities vs component layer; docs móveis → reconferir versão/plugin no registry no preflight da instalação; nenhuma instalação nesta rodada.

## 9. Matriz documental desta consulta

Proveniência: consultas da sessão Architecture original, posterior ao Product Gate registrado, preservadas neste refinamento; não foram repetidas agora. A sessão original não aferiu data civil. Não atribuir 2026-09-05 (baseline) à consulta. Registrar data civil e versões efetivas no preflight futuro. Nenhuma execução de API local foi feita nesta revisão. Reutiliza-se o registro institucional ADR-038 já consultado (§1), sem nova busca histórica desnecessária, conforme autorização do operador.

| Fonte / URL | Versão/alcance observado | Evidência e decisão |
|---|---|---|
| Context7 `/withastro/docs`: https://github.com/withastro/docs/blob/main/src/content/docs/en/concepts/islands.mdx e https://github.com/withastro/docs/blob/main/src/content/docs/en/guides/client-side-scripts.mdx | docs main, não fixadas; catálogo também listou Astro 6.3.1 | Confirmado HTML sem hidratação por padrão e scripts TS processados/bundled; sustenta SSG sem React. |
| https://registry.npmjs.org/astro/latest ; https://raw.githubusercontent.com/withastro/astro/main/packages/astro/package.json | 7.3.1 observado; manifest MIT, registry engines Node >=22.12.0/npm >=9.6.5 | Candidato a fixar/reconferir, não instalado. Divergência de catálogo explicitada. |
| https://docs.astro.build/en/install-and-setup/ | docs vigentes não versionadas, leitura parcial | Requisito Node par >=22.12.0; não certifica ambiente local. |
| https://docs.astro.build/en/guides/images/ | docs vigentes, leitura parcial; Picture desde 3.3.0/responsivo desde 5.10.0 | Confirmado processamento local em src no build, public sem otimização e dimensões contra CLS. APIs finais reconferidas na versão fixada. |
| Context7 `/vercel/next.js`: https://nextjs.org/docs/app/building-your-application/deploying/static-exports ; trechos oficiais canary | catálogo até v16.2.9; trechos canary, nenhum pin proposto | Export estático e limitações de servidor; código consultado inclui runtime/router cliente. Comparação, não escolha de versão canary. |
| Context7 `/websites/nuxt_4_x`: https://nuxt.com/docs/4.x/getting-started/deployment ; https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle | Nuxt 4.x | SSG com SSR habilitado e payload; ssr:false não produz conteúdo pré-renderizado. Alternativa comparada. |
| https://vite.dev/guide/ssr.html | docs vigentes não versionadas, leitura parcial | SSR low-level requer integração; SPA React não recebe SSG automaticamente. Sem versão Vite/React escolhida. |
| https://motion.dev/docs/animate ; https://motion.dev/docs/scroll | docs vigentes, leituras parciais | Mini/hybrid, tamanhos anunciados, scroll-linked/triggered e sticky nativo. Mecanismo condicional ao estudo UI e bundle real. |
| https://raw.githubusercontent.com/motiondivision/motion/main/LICENSE.md ; https://raw.githubusercontent.com/motiondivision/motion/main/packages/motion/package.json | MIT lida completa; main 13.2.0 | Licença core confirmada, preservar notice; versão estável publicada a conferir antes de instalar. |
| https://openfontlicense.org/open-font-license-official-text/ | OFL 1.1, 26/02/2007; texto extraído quase integral | Embedding/redistribuição e notices/RFN. Não seleciona família nem atesta licença de fonte específica. |
| https://developers.google.com/fonts/faq → https://fonts.google.com/faq | extração apenas shell | Insuficiente; não usada para autorizar famílias. |
| https://web.dev/articles/vitals | extração redirecionada a tradução zh-cn, atualização informada 31/10/2024 | Distinção laboratório/campo e métricas; não usar exemplo de envio analytics. Método local a validar contra trace e implementação oficial do coletor. |
| https://chromedevtools.github.io/devtools-protocol/tot/Network/ | protocolo tip-of-tree, extração parcial | Métodos de emulação/cache existem; alguns deprecated/experimentais. Compatibilidade exata e aferição do perfil são preflight do ensaio, não confirmadas aqui. |
| https://www.w3.org/TR/WCAG22/ ; https://www.w3.org/WAI/WCAG22/quickref/ | ambas tentativas sem conteúdo legível | Norma não conferida integralmente aqui; futura revisão A/AA obrigatória, sem PASS presumido. |

Limite Context7 respeitado: três resolves e três queries focadas (Astro rendering/scripts, Next static export, Nuxt prerender). Web oficial complementou imagens, runtime, motion, licenças e aferição sem repetir discovery.

### §9a — Emenda Tailwind (2026-09-06): consultas desta rodada

| Fonte / URL | Versão/alcance observado | Evidência e decisão |
|---|---|---|
| Context7 `/tailwindlabs/tailwindcss.com` (docs oficiais tailwindcss.com espelhadas no GitHub; 3 queries: integração Vite/`@import`/`@theme`; breakpoints/variantes responsivas; `motion-reduce`/dark/`@custom-variant`) — 2026-09-06 | Conteúdo v4 vigente; catálogo também expõe blogs v4-alpha e espelho v3 | Integração confirmada: `@tailwindcss/vite` + `@import "tailwindcss"` + `@theme` CSS-first + variantes responsivas/motion. Blogs alpha ignorados como recomendação de versão. |
| Registry npm — npmjs.com/package/tailwindcss (busca web apontando npm oficial), 2026-09-06 | **tailwindcss 4.3.3** estável vigente | Versão candidata a fixar na instalação (T05 fase 5a), reconferida no momento de instalar; `@tailwindcss/vite` idem; sem `@next`/canary. |
| Limite/divergência | Guia Astro dedicado do Tailwind não coube no limite de queries | Reconferir framework guides no preflight; o mecanismo confirmado (plugin Vite) não depende de integração Astro adicional; licença/notice a reconferir no momento da instalação. |

## 10. Matriz dos cinco refinamentos — conferência do Maestro pendente

| Ajuste explícito | Atendimento documental / trechos para conferência |
|---|---|
| 1. Motion candidato, exploração aberta | §4 e T03: Motion/CSS/native/GSAP/ScrollTrigger/Three.js/WebGL/combinação; comparação e docs/licenças antes da adoção; escolha UI consolidada G1, sem engine final agora. |
| 2. Budgets targets, CA-13 intacto | §7 e T03/T07/T09: exceção medida/documentada para direção aprovada, sem veto de tamanho; requisitos reais e protocolo CA-13 preservados. |
| 3. Skills do preset UI | §4 e T01/T03/T07: CORE pertinente e avaliação explícita high-end; registro por etapa, carga sob demanda, indisponibilidade reportada; sem ampliar autorização. |
| 4. QA independente sem dependência humana | §7 e T07/T09: emenda explícita CA-15, rubrica aprovada e próprias skills QA; operador não condiciona verdict; G3 só após QA APPROVED. |
| 5. G1 firme e G2 posterior | §4–5 e dependências/T01/T03/T04: genérico/previsível/template-like/fraco volta UI antes de full page; cérebro final após G1 + autorização G2; T01 documental. |

**Handoff: READY_FOR_ARCHITECTURE_APPROVAL.** Aprovação condicional recebida; atendimento documental acima ainda pendente de conferência do Maestro. Se satisfeito, Maestro registra G0 e libera T01 conforme autorização já dada, sem exigir reaprovação humana. Não self-approve, não alterar Product/gate-log, não executar tasks nesta sessão. Demais gates, privacidade, claims e evidência local preservados. **STOP.**

## §10a — Handoff da emenda Tailwind (2026-09-06)

Emenda documental concluída: decisão de stack e mapa de migração (§2a), fronteiras de estilos (§3a), budgets/checks e verificação visual (§7a), riscos/rollback (§8a), consultas com fonte/data (§9a). Astro + TS SSG, sem React/backend, engine WAAPI, contratos do CTA e CA-13 intactos; escada do operador preservada 1:1 como requisito de migração; sem claims novos.

**Handoff: READY_FOR_OPERATOR_APPROVAL.** Aprovação do operador desta emenda é pré-condição de qualquer implementação (gate-log, Autorizações 1). Nenhuma instalação, implementação, servidor, Git ou asset nesta rodada. **STOP.**
