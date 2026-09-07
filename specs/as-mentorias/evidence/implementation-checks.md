# T03 hero-v2 — checks reais da revisão

**UI_IMPLEMENTATION_COMPLETE — refinamento hero-v2, STOP G1. Não QA APPROVED, fullpage ou asset final.** Data: 2026-09-05, rodada final ~20:54 UTC−03. Histórico T02 abaixo preservado, sem usá-lo como prova desta revisão.

## Estado conferido e arquivos alterados

Workspace confirmado via pwd. AGENTS global/local lidos, nenhum CLAUDE localizado. Obsidian consultado sem contexto AS relevante; gate-log, tasks, plan, recortes pertinentes spec/research/auditoria e ui-direction/visual-checkpoint/checks existentes consultados. Código parcial já continha Astro7.3.1, imagens/fontes locais, hero, transição, CTA e engine WAAPI/rAF: reutilizados, não reimplementados. `package.json`/lockfile/dependências e scripts TS preservados. Não houve subdelegação nem mudança de modelo; runtime declara Astra, effort não certificado por auditoria desta sessão.

Alterações desta revisão:
- `src/pages/index.astro`: foto retirada SOMENTE do hero; estudo movido para plano decorativo, tamanhos responsivos ampliados; seletor de fallback acompanha nova posição. Copy e CTA preservados.
- `src/styles/presence.css`: cérebro central grande, opacidade/véus localizados sem filtros caros; grid desktop protegido; tratamento mobile/tablet e fallback recolhido em falha.
- `src/styles/base.css`: paleta prescrita pelo operador, token --night substitui --plum, --gold para CTA/ênfase. Tokens compartilhados também recolorem a transição já existente; sem mudança de layout/copy fora hero.
- `src/layouts/DemoLayout.astro`: comentário de direção atualizado; nenhuma mudança na identidade textual.
- `tests/integration/build.test.mjs`: regressão hero sem retrato, arte decorativa e headline preservada.
- Três documentos UI de evidence atualizados no topo, histórico preservado; capturas/runners/resultados `hero-v2-*` dentro de `.playwright-mcp`. Nenhuma edição de spec/research/plan/tasks/gate-log.

## Checks executados (não herdados)

| Comando | Resultado final |
|---|---|
| npm run typecheck | exit0, 11 arquivos, 0 errors/warnings/hints |
| npm run lint | exit0, max-warnings0 |
| npm run test:unit (via npm test) | 4 passed, 0 failed/skipped |
| npm run test:integration (via npm test) | build + 5 passed, 0 failed/skipped |
| npm test | exit0, unit/integration acima |
| npm run build | exit0, uma página estática; última execução 378ms de ferramenta, não UX |
| Impeccable detect nos quatro arquivos UI | [] em uma execução; antes da correção final de fallback, não selo visual |
| Playwright no preview existente | 320/390/768/1440, duas rodadas visuais delimitadas; detalhes em visual-checkpoint |

SHA256 final de `dist/index.html`: **0CC3BC835604041B5E1F8755B1BFB24D44C4A2CD8B5F5A8F273605192DECB7CC**.

Pesos locais exploratórios: JS 942+2137 bytes, gzip486+930 = **1416 bytes**; CSS primeira revisão 8092 bytes/gzip2424 (regra de fallback final acrescenta pequeno bloco, não recontado). WebP widths480/780/1100/1448: **29886/65776/121876/188266 bytes**. Mobile DPR1 carregou480; desktop1100. Fontes existentes **356160 bytes**, acima do target150KiB, preservadas para manter textos elogiados; otimização fica pendente, não exceção CA-13 aprovada. Original cerebral1.712.289 bytes fora da entrega direta. Sem blur/backdrop-filter/sombra gigante; apenas opacidade, gradientes locais e transform nativo. Não se afirma profiling completo/compositor60fps ou aprovação de CA-13.

## Falhas e correções transparentes

1. `git status --short` read-only retornou fatal: workspace não é repositório Git. Nenhuma operação mutável tentada; revisão identificada por conteúdo/hash.
2. Primeira captura antes da edição não aguardou decode da arte: não usada como imagem saudável anterior; usada a captura histórica completa lida + medição DOM atual.
3. Primeira verificação de contraste sofreu MCP Connection closed antes de gerar arquivos. Reconexão normal, descoberta confirmou nenhum background PNG criado; repetida mesma inspeção local com sucesso. Não foi negativa de autorização nem erro do produto.
4. Teste novo inicialmente esperava literalmente `alt=""`; Astro minimiza atributo vazio como `alt`. DOM confirmou alt vazio. Assertion ajustada para ambas as serializações equivalentes, sem relaxar decoração. Rodada completa final passou.
5. Falha controlada de imagem/fontes mostrou espaço reservado vazio em mobile; CSS de erro recolhe padding de mídia. Retestado render/CTA/fallback e scripts. Se falha ocorrer tarde, apoio pode subir; não ocultado como CLS zero.
6. Runner browser histórico usa seletor antigo para mídia; resultado desse campo não tomado como prova. Validação complementar verificou visibility hidden/classe de falha no pai real e screenshot final.

## Evidências / limites

`hero-v2-browser-checks.json`: teclado/retorno por duas origens e quatro larguras, sem requests acionados pelo CTA, sem storage/cookies, zero erros/warnings normais. `hero-v2-final-geometry.json`: copy desktop nas mesmas coordenadas e sem overflow/foto. `hero-v2-contrast-results.json`: pior fundo real sob cada linha, mínimo4,59 grande/5,52 apoio. `hero-v2-motion.json`, webm/zip390 e1440: normal, troca de preferência e nova carga reduzida. Capturas finais e leitura visual indexadas em visual-checkpoint.

Não executados nesta revisão: AT real, matriz WCAG integral, zoom400/texto200/espaçamento integral, CA-13 com seis cargas e perfil exato/latências, QA independente, headers/CSP/logs/T08 ou revisão de direitos de publicação. Engine nativa e fontes provisórias preservadas. Não reivindicar aprovação integral, performance de campo, conversão ou aptidão para prospect.

## Jobs/processos — todos da revisão

| Identificação | Resultado/ownership |
|---|---|
| pwsh-25 | typecheck/lint/test/build inicial, completed exit0, coletado |
| pwsh-26 | checks após fallback/teste novo, completed exit1 por assertion alt, coletado e corrigido |
| pwsh-27 | repetição completa final, completed exit0, coletado |
| PID21928 / pai3412 / npm15648 | Astro preview preexistente neste workspace, 127.0.0.1:4321; reutilizado e preservado ativo, job proprietário desconhecido nesta sessão |
| PID19036 | DSH web 127.0.0.1:3080, identificado e intocado |

Nenhum job de servidor criado nesta revisão, nenhum processo morto. Não se oferece controle de um job alheio. URL útil: **http://127.0.0.1:4321/** (refresh recebe build revisado). Se estiver parado e porta livre, comando exato no workspace: `npm run preview`. Nenhum remoto/Git mutável/coleta/contato.

**STOP G1 — handoff ao maestro/operador, sem chamar QA ou executar T04.**

---

# Histórico T02 — base mínima AS Mentorias

**UI_IMPLEMENTATION_COMPLETE — somente T02. Pronta para T03; não é QA APPROVED, G1 ou entrega à prospect.**

Execução: 2026-09-05, aproximadamente 19:53–20:05 UTC−03. Workspace confirmado por `pwd`: `W:\FP\as-mentoria-concept`. Escritor único, sem subdelegação. Runtime declarado Astra; não foi auditado nem alterado effort por esta sessão.

## Escopo e entradas

Lidos AGENTS global/local, gate-log (G0/T01 e autorização T02/T03), tasks/regras/T02, plan (base, contrato, privacidade), spec, research e resumo/limites/direção candidata de ui-direction. Busca Obsidian inicial retornou conteúdo de outro projeto, descartado. Limitação ancestral W:\ registrada anteriormente não foi contornada. Governança/Product/T01/baseline preservados; nenhum scaffolder executado.

Criados manifest, único `package-lock.json`, Astro/TS/ESLint configs, `.gitignore`, `.npmrc` sem credenciais, runner CLI, layout/documento, CSS utilitário, shell e testes. Sem React, adapter, backend, biblioteca UI, router cliente, analytics, fonte baixada, engine, hero, fullpage ou asset de produto. Os dois PNGs são evidência do shell, não assets.

Layout usa slot, main sem largura universal e estilos próprios da seção provisória. CSS não consolida paleta, tipografia ou direção T01: system-ui/preto/branco são apenas legibilidade da base interna. Texto explícito PROTÓTIPO INTERNO, pt-BR, noindex/nofollow, contexto FP não oficial e contato inativo. CTA de produto ainda não implementado, conforme recorte T02; não há botão falso.

## Preflight, fontes e versões

Ferramentas locais: Node **24.9.0**, npm **11.7.0**, pnpm **10.33.2**. Escolhido npm já disponível, conforme plano, sem instalar runtime/package manager. Node 24 é linha par compatível com engines adotadas; o patch local não foi atualizado nem certificado como patch de segurança mais recente. Recomenda-se ao Maestro/operador avaliar atualização do runtime em escopo próprio antes da entrega final.

| Pacote fixado | Versão | Motivo |
|---|---|---|
| Astro | 7.3.1 | `latest` estável confirmado no registry e manifest do tag oficial; coincide com candidato do plan, não adotado por presunção |
| @astrojs/check | 0.9.10 | Checker de `.astro` e TS; peer TS ^5 ou ^6 |
| TypeScript | 6.0.3 | Último patch 6 consultado, compatível com checker/typescript-eslint; latest 7.0.2 não atende peers |
| ESLint | 10.10.0 | Estável e engines compatíveis com Node local |
| @eslint/js | 10.0.1 | Recommended JS para configs, runner e testes |
| eslint-plugin-astro | 1.7.0 | Linha publicada compatível com Node 24.9; versões 2/3 exigem Node ^24.16.0 ou equivalentes superiores |
| typescript-eslint | 8.69.0 | Parser Astro/TS e recommended TS; peer TS <6.1 e ESLint 10 permitido |

Não instalado jsx-a11y: opcional para regras a11y do plugin, não usado na configuração mínima. Acessibilidade desta base foi inspecionada no browser, não certificada por lint.

Consultas antes/na adoção:
- Context7 `/withastro/docs`: setup manual, strict tsconfig, `astro check`, Node >=22.12.0; catálogo ainda fala v6, portanto não comprova v7 sozinho. https://github.com/withastro/docs/blob/main/src/content/docs/en/install-and-setup.mdx e guides/typescript.mdx.
- Context7 `/ota-meshi/eslint-plugin-astro`: flat recommended, parser TS, requisitos atuais (mais altos que Node instalado).
- `npm view` para dist-tags/engines/peers e versões Astro/checker/TS/ESLint/plugin/typescript-eslint/@eslint/js; nenhum config de credenciais lido.
- https://registry.npmjs.org/astro/latest — 7.3.1, Node >=22.12.0/npm >=9.6.5, sem deprecated no objeto consultado.
- https://raw.githubusercontent.com/withastro/astro/astro%407.3.1/packages/astro/package.json — HTTP 200, MIT, versão e bin `./bin/astro.mjs` confirmados.
- https://raw.githubusercontent.com/ota-meshi/eslint-plugin-astro/v1.7.0/README.md — HTTP 200, flat config e Node compatível. README ainda chama plugin experimental; compatibilidade prática aferida pelos checks, não promessa de suporte futuro.
- https://raw.githubusercontent.com/withastro/astro/main/packages/telemetry/README.md — HTTP 200; mecanismo reconferido no pacote instalado `@astrojs/telemetry/dist/index.js` linhas 25–26/65–69.

Telemetria Astro desativada via `ASTRO_TELEMETRY_DISABLED=1` no ambiente de instalação e, permanentemente nos scripts do projeto, pelo runner `scripts/astro.mjs`. Runner usa Node/spawnSync com stdio inherit, propaga falha do CLI; sem alterar preferência global. `devToolbar.enabled=false`. npm audit consulta registry de dependências, não eventos de visitantes. Não se declara ausência universal de logs de ferramentas.

## Scripts e resultados reais

| Comando | Resultado final |
|---|---|
| `npm ci --no-fund` (ASTRO_TELEMETRY_DISABLED=1) | exit 0; instalação limpa do lockfile, 389 pacotes adicionados, audit 390, zero vulnerabilidades reportadas |
| `npm run typecheck` | exit 0; Astro check 8 arquivos, 0 errors, 0 warnings, 0 hints |
| `npm run lint` | exit 0; ESLint `.` com max-warnings 0, cobre Astro/TS/JS |
| `npm run test:unit` | exit 0, **N/A explícito: 1 skipped, 0 passed**; não existe controlador/lógica cliente de produto isolável. Não chamado PASS unitário |
| `npm run test:integration` | exit 0; executa build antes de testar: 3 passed, 0 failed/skipped |
| `npm run build` | exit 0; static, 1 página, saída `dist/`; última execução 336 ms reportados pelo build (não métrica de UX) |
| `npm test` | exit 0; agrega unit N/A e integration real |
| `npm audit --json` | zero advisories reportados; não prova segurança integral nem audita Node |
| detector Impeccable nos três arquivos UI | `[]`; executado uma vez, não equivale a aprovação visual |
| `npm run preview` | shell servido em loopback no job abaixo; não é servidor de produto |
| `npm run dev` | script definido com bind explícito, **não executado** nesta rodada; smoke usa build/preview sem HMR |

Integration verifica documento demonstrativo/pt-BR/noindex, h1 único, skip target, ausência de scripts/form/input/iframe/destinos externos/canonical e ausência de documentos internos/maps no dist. Não substitui testes DOM do futuro CTA. Wrapper operacional exercitado por typecheck/build/preview; testes unitários de controlador serão necessários quando ele existir.

### Falhas e correções, sem ocultação

1. Instalação inicial usou ESLint 9.39.5: npm avisou EOL/deprecated. Substituído por 10.10.0 e @eslint/js 10.0.1 antes do resultado final; mesmo lockfile atualizado, nenhum segundo lockfile.
2. Primeiro lint falhou com 3 `no-undef` para URL em runner/testes. Imports de `node:url` adicionados; rodada completa repetida e verde.
3. Primeiro browser registrou favicon.ico 404. Head recebeu favicon vazio `data:,` (sem gerar arte); build/checks repetidos e nova navegação sem erros.
4. Probe de porta sem listener retornou exit 1 sem saída antes do servidor — ausência naquele momento, não falha do app.
5. Probe HTTP com `-SkipHttpErrorCheck` falhou porque o PowerShell efetivo não suporta esse parâmetro; repetido com try/catch compatível, resultados abaixo. Não foi falha de autorização.
6. `npm ls --depth=0` lista sete dependências WASM/opcionais como extraneous mesmo após `npm ci`: @emnapi/core/runtime/wasi-threads, @img/sharp-wasm32, @napi-rs/wasm-runtime, @tybys/wasm-util, tslib. Pacotes não foram adicionados ao manifest para silenciar o diagnóstico. Instalação/build/audit concluíram; registrar como peculiaridade pendente de npm/árvore opcional, não árvore perfeitamente limpa.

## Smoke renderizado e entrega local

URL inspecionada: **http://127.0.0.1:4321/**. Job **pwsh-10**, comando `npm run preview`, Astro 7.3.1. Listener verificado **127.0.0.1:4321**, PID **4344**, processo node, `C:\Program Files\nodejs\node.exe`. Não tocado DSH 3080. Servidor encerrado após smoke; T03 deverá iniciar seu próprio job gerenciado.

Browser: HeadlessChrome **152.0.0.0**, Windows; DPR **1**. Viewports **1440×900 e 320×844**, scroll inicial 0. Snapshots/DOM, teclado e screenshots inspecionados. Sem overflow horizontal em ambos. H1 e avisos completos, wrapping mobile sem cortes. Shell deliberadamente utilitário, não julgado como hero final.

Teclado desktop: Tab alcançou “Pular para o conteúdo”; retângulo 180.83×49.59, foco 3px #202020 visível dentro da viewport. Enter moveu foco para MAIN#conteudo e hash correto. Texto #202020 sobre #fff: contraste calculado **16.29:1**. Corpo 16px/1.6. Nenhuma animação ou dependência de JS; reduced-motion de engine N/A por inexistência, não aceitação de CA-11 final.

Após correção do favicon: console **0 erros/0 warnings**, document.scripts=0, resource entries=[], localStorage/sessionStorage vazios e cookie vazio na amostra. HTTP: `/` 200; `/specs/as-mentorias/spec.md`, `/AGENTS.md`, `/.playwright-mcp/t02-shell-desktop.png`, `/package.json` retornaram **404** no preview. São probes delimitados, não validação final de privacidade/T08. Noindex não é controle de acesso.

### Capturas e destino real

Primeiro screenshot solicitado com path absoluto dentro do projeto. MCP imprimiu caminho relativo `as-mentoria-concept\\.playwright-mcp\\...`; leitura posterior pelo path absoluto confirmou arquivo real e legível no destino exigido, antes da segunda captura. Nenhuma negativa de acesso ou movimentação de captura.

- `.playwright-mcp/t02-shell-desktop.png` — 1440×900, 25.765 bytes; SHA256 ec44eabb7967874c73011138d6b2c5502a147852277db00da242cb75d4a569cc.
- `.playwright-mcp/t02-shell-mobile.png` — 320×844, 22.001 bytes; SHA256 23aa6cf3440cf753806113569eef7f88d09990a383cbb20d7926db7c3b2e68f4.

Ambos abertos com read_image. Snapshots/logs automáticos referenciados pelo MCP não são tratados como arquivos locais verificados. Baseline não sobrescrito.

## Skills — aplicação limitada à base

- **impeccable:** contexto executado uma vez, new-work/craft-floor lidos antes do código. Detect não encontrou sinais mecânicos. Init/PRODUCT/DESIGN, seeding, geração e finish subagents não executados: contrariariam escopo T02, governança e escritor único. Spec/T01 fornecem contexto; não consolidar mundo visual no shell. Ferramenta avisou atualização 4.2.0 disponível (instalada 4.1.1); não atualizada durante a execução.
- **design-system:** inventário sem sistema implementado; layout com slot e sem container universal. Nenhum package de tokens/componentes ou direção candidata promovida a sistema final.
- **web-accessibility:** três suportes lidos. Pacote preventivo principal **semantics-structure**, página/shell, owner UI; landmarks, heading, link nativo. Follow-up keyboard-focus/reflow inspecionado. Leitor de tela/zoom integral não executados nesta base; necessários nas etapas integrais.
- **checklist-design:** índice/audit e checklist Accessibility (Design system) lidos. Revisão do fonte e capturas locais, limitada à base, tabela abaixo.
- High-end/motion/Three/imagegen, estilos concorrentes e design-critique adicional: não carregados; não se decide engine, arte, copy comercial ou direção em T02. Reavaliar em T03, não excluir opções antecipadamente.

### Checklist Accessibility — base T02

Fonte: https://www.checklist.design/design-system/accessibility. Presença não significa conformidade global.

| Item (descrição da checklist) | Estado / evidência |
|---|---|
| Target conformance level — The WCAG conformance target the team has committed to documented and referenced in contribution guidelines. AA as a baseline for most products, with AAA achievable for specific criteria such as text contrast. | Presente no contrato spec: WCAG 2.2 AA; não certificado nesta rodada |
| Colour contrast standards — The contrast ratios verified across all text and interactive element colour combinations (4.5:1 for normal text, 3:1 for large text and UI components) | Presente apenas no shell: par único texto/foco 16.29:1 |
| Focus indicator design — A visible, high-contrast focus indicator designed for every interactive component | Presente: único link com foco visível; main focalizado por âncora |
| Keyboard navigation patterns — Standard keyboard interaction patterns documented and applied consistently e.g. arrow keys for menus and listboxes, Enter and Space for activation, Escape for dismissal | Presente no recorte: Tab/Enter nativos; nenhum menu/dialog |
| ARIA pattern library — Attributes that make web content accessible to those who use assistive technologies with roles, states, and properties defined for every interactive component pattern | Biblioteca N/A: sem componentes interativos compostos; HTML nativo e região nomeada |
| Screen reader testing — Components tested with at least VoiceOver on Safari and NVDA on Chrome before shipping | Não executado; pendente etapas integrais, sem claim AT |
| Accessibility annotations in design — A shared annotation kit used in design files to specify ARIA labels, roles, reading order, and focus behaviour | Kit N/A no shell técnico; sem arquivos de design finais, ordem documentada no código/evidência |
| Accessibility in contribution guidelines — Ensuring accessibility requirements are part of the component contribution checklist | Presente em spec/tasks/AGENTS; sem nova governança paralela |

## Jobs ALL e revisão

| Job | Trabalho | Resultado |
|---|---|---|
| pwsh-6 | instalação inicial | completed exit 0; aviso ESLint EOL corrigido depois |
| pwsh-7 | atualização ESLint + checks | completed exit 1 por lint; corrigido |
| pwsh-8 | npm ls/audit/baseline/hash | completed exit 0; audit zero; extraneous documentados |
| pwsh-9 | npm ci + typecheck/lint/test/build | completed exit 0 |
| pwsh-10 | preview 127.0.0.1:4321, PID 4344 | **killed**, saída coletada; 0 listeners na porta 4321 após encerramento |
| pwsh-11 | checks completos após favicon | completed exit 0; evidência final |

Revisão por conteúdo (sem commit): `dist/index.html` SHA256 **268752C20ED3E7983219970A1EC78346AA6762F3A44C1252585930D08D06CF91**; `package-lock.json` SHA256 **A027FD158A825D31BE38316702CAB2475DE1B271A372DEF88CDFA1B1AF10E2CA**.

## Handoff ao Maestro

T02 concluída. T03 pode substituir somente o aviso utilitário e desenvolver protótipo delimitado, com exploração real de direção/fontes/motion, seus testes e parada G1. Nenhum gate alterado aqui. Não há backend necessário.

Limitações: Node patch antigo preservado; plugin Astro 1.7 por compatibilidade local; extraneous opcionais npm; dev não executado; sem AT/CA-13/QA integral, headers/CSP e logs finais aguardam T08. Não há risco novo que autorize ampliar esta tarefa. Nenhum Git mutável, publicação, contato ou produção de assets finais.
