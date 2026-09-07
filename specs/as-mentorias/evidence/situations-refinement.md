# Evidência — Refino da seção Situações (rodada de validação + evidência)

Rodada: **VALIDAÇÃO + EVIDÊNCIA** (executada por @ui-specialist, único escritor do worktree nesta rodada).
Data: 2026-09-06 (checks 11:02–11:07, medições 11:06–11:07, horário local).

## 1. Proveniência honesta

- As edições deste refino foram **aplicadas na rodada anterior** de @ui-specialist, que terminou **antes de validar e documentar**.
- Nesta rodada o estado do worktree foi **validado como está**: nenhuma reedição de código de produção foi feita. **Exceções: nenhuma.**
- Todos os checks, medições e leituras desta rodada foram executados nesta sessão, com saídas literais registradas na seção 5 e na seção 6.
- Esta é uma rodada de evidência: **não** edita spec/research/plan/tasks/gate-log, não aprova gates, não executa QA, não publica.

## 2. Conteúdo (strings verbatim)

### 2.1 `src/pages/index.astro:25` (parágrafo de introdução)

**Antes:**

> Ao apresentar uma ideia, assumir novas responsabilidades ou conversar com a equipe, o que você diz — e como escuta — faz parte do seu trabalho.

**Depois (estado atual verificado no arquivo):**

> Ao apresentar uma ideia, assumir novas responsabilidades ou conversar com a equipe, o que você diz e como escuta faz parte do seu trabalho.

**Declaração explícita:** a diferença é **somente a remoção dos dois travessões** (pontuação). Nenhuma palavra, claim ou termo foi adicionado ou removido. As três frases da lista (`Apresentar uma ideia.` / `Assumir novas responsabilidades.` / `Conversar com a equipe.`) não foram alteradas.

### 2.2 `src/styles/presence.css` (estado "antes" documental → estado atual)

Estado **antes** (extraído do CSS original, pré-refino):

- `.situations-lines { padding: 0; margin: 0; … }`
- `.situations-lines li:nth-child(2) { margin-left: 12%; }`
- `.situations-lines li:nth-child(3) { margin-left: 30%; color: var(--night); }`
- Mobile ≤599px: `li:nth-child(2) { margin-left: 1rem; }` e `li:nth-child(3) { margin-left: 2rem; }`

Estado **atual** verificado (`presence.css` linhas 26–28):

```css
.situations-lines { list-style: none; padding: 0; margin: 0 auto; width: fit-content; font: 600 clamp(2rem, 3.7vw, 3.5rem)/1.18 Bricolage, 'Segoe UI', sans-serif; letter-spacing: -.025em; }
.situations-lines li { padding-block: .6rem; }
.situations-lines li:nth-child(3) { color: var(--night); }
```

- Grupo centralizado (`margin: 0 auto; width: fit-content;`); recuos escalonados desktop (`12%`/`30%`) e mobile (`1rem`/`2rem`) **removidos**.
- `li:nth-child(3) { color: var(--night); }` **preservado**.
- A regra `@media (min-width: 1100px)` (blocos ancorados à direita) permanece **intocada**.
- Refino não introduz nova dependência, engine, animação ou terceiro.

## 3. Medições renderizadas (Playwright MCP, `http://127.0.0.1:4321/`, fontes carregadas)

Condições: `document.fonts.status = "loaded"`, `document.fonts.check('600 32px Bricolage') = true`, DPR 1. "Coluna de conteúdo" = bbox da `section.situations` menos o padding lateral (gutter) medido por viewport. Δ = centro horizontal de `ul.situations-lines` − centro da coluna.

| Viewport | Gutter | Centro da coluna | Centro do `ul` | **Δ (px)** | Largura `ul` |
|---|---|---|---|---|---|
| 1920×1080 | 80 | 960.00 | 960.00 | **0.00** | 780.59 |
| 1440×900 | 72 | 720.00 | 719.99 | **−0.01** (arredondamento subpixel) | 742.67 |
| 768×1024 | 38.4 | 384.00 | 384.00 | **0.00** | 446.06 |
| 390×844 | 20 | 195.00 | 195.00 | **0.00** | 350.00 (coluna integral) |
| 320×844 | 20 | 160.00 | 160.00 | **0.00** | 280.00 (coluna integral) |

Bbox x/largura de cada `li` (o `ul` é `fit-content`; os `li` compartilham a largura do item mais largo e ficam alinhados à esquerda do bloco central — sem recuos escalonados):

| Viewport | li 1 (x / largura) | li 2 (x / largura) | li 3 (x / largura) | Observação |
|---|---|---|---|---|
| 1920 | 569.70 / 780.59 | 569.70 / 780.59 | 569.70 / 780.59 | 1 linha cada |
| 1440 | 348.66 / 742.67 | 348.66 / 742.67 | 348.66 / 742.67 | 1 linha cada |
| 768 | 160.97 / 446.06 | 160.97 / 446.06 | 160.97 / 446.06 | 1 linha cada |
| 390 | 20 / 350 | 20 / 350 | 20 / 350 | li 2 quebra em 2 linhas (h 92 vs 56) |
| 320 | 20 / 280 | 20 / 280 | 20 / 280 | li 2 e li 3 quebram em 2 linhas (h 92 vs 56) |

Parágrafo de introdução (linhas contidas por viewport, altura/line-height medidos):

| Viewport | Font-size / line-height | Altura | **Linhas** |
|---|---|---|---|
| 1920 | 22px / 33px | 99px | **3** |
| 1440 | 22px / 33px | 99px | **3** |
| 768 | 22px / 33px | 132px | **4** |
| 390 | 18px / 27px | 108px | **4** |
| 320 | 18px / 27px | 135px | **5** |

Overflow horizontal do documento (`scrollWidth − innerWidth`): **0 px em todos os viewports, inclusive 320** (1920/1920, 1440/1440, 768/768, 390/390, 320/320).

## 4. Comportamento interativo (regressão mínima de teclado/foco, 1440×900)

| Verificação | Resultado |
|---|---|
| CTA hero (`contact-hero`): abrir → foco em `#contact-heading`, `aria-expanded=true`, região visível, scroll restaurado (1565) | **PASS** |
| CTA hero: fechar → trigger refocado, `aria-expanded=false`, região oculta, scroll restaurado (0) | **PASS** |
| CTA closing (`contact-closing`): mesmo ciclo | **PASS** (foco no heading 1565; retorno ao trigger, scroll 0) |
| Âncora header `#situacoes` | **PASS** — foco movido ao alvo (scrollY 994) |
| Âncora header `#atuacao` | **PASS** — foco movido ao alvo (scrollY 1245; primeira passada registrou `false` por navegação de fragmento encadeada no mesmo evaluate; nova execução com hash limpo confirmou `focusMoved: true`) |
| Região oculta ao final (`#contact-info`) | **PASS** |

Console: **0 erros, 0 warnings** (sessão completa, antes e após interações). Requisições a terceiros: **nenhuma** (todas as requisições em `http://127.0.0.1:4321`).

## 5. Matriz de checks reais

| Check | Comando | Resultado | Versões |
|---|---|---|---|
| Typecheck | `npm run typecheck` | **PASS** — "Result (11 files): 0 errors, 0 warnings, 0 hints" | Node v24.9.0, npm 11.7.0, Astro 7.3.1, TypeScript 6.0.3 |
| Lint | `npm run lint` (`eslint . --max-warnings 0`) | **PASS** — sem saída, exit 0 | ESLint 10.10.0 |
| Testes (unit + integration) | `npm test` | **PASS** — unit 4/4 (`✔` CTA hero, CTA closing, idempotência, DOM incompleto); integration 5/5 (build embutido + 5 asserções, incluindo "protótipo inclui runtime local, sem coleta ou destinos externos") | Node test runner nativo |
| Build | `npm run build` | **PASS** — "1 page(s) built in 516ms", 4 imagens otimizadas (cache), "Complete!" | Astro 7.3.1 |

Saídas literais completas constam no transcript desta rodada; os resumos acima preservam os valores-chave verbatim. Nenhum teste não executado foi tratado como PASS.

## 6. Capturas e leitura visual

Capturas existentes (timeline coerente: before 23:07–23:09 antes das edições 23:10; after 23:12–23:14; rodada anterior):

| Caminho absoluto | Status de leitura visual |
|---|---|
| `W:\FP\as-mentoria-concept\.playwright-mcp\situations-ref-1440-before.png` | **Leitura visual pendente — conferência do Maestro** (modlens 503) |
| `W:\FP\as-mentoria-concept\.playwright-mcp\situations-ref-1440-after.png` | **Leitura visual pendente — conferência do Maestro** (modlens 503) |
| `W:\FP\as-mentoria-concept\.playwright-mcp\situations-ref-1920-after.png` | **Leitura visual pendente — conferência do Maestro** (modlens 503) |
| `W:\FP\as-mentoria-concept\.playwright-mcp\situations-ref-320-after.png` | **Leitura visual pendente — conferência do Maestro** (modlens 503) |
| `…\situations-ref-1920-before.png`, `…\situations-ref-768-before.png`, `…\situations-ref-768-after.png`, `…\situations-ref-390-before.png`, `…\situations-ref-390-after.png`, `…\situations-ref-320-before.png` | Existentes, não priorizadas para leitura nesta rodada |

Registro da falha: `modlens_read_image` retornou **503 "high demand" (Gemini UNAVAILABLE)** nas duas primeiras tentativas (1440-before, 1440-after). Seguindo a regra dura da delegação: **nenhum loop de retry**, falha registrada, execução seguiu. Consequência: nenhuma captura foi lida visualmente nesta rodada; a validação visual da rodada anterior do Maestro (captura 1440 lida por ele) permanece a referência visual vigente. Nenhuma captura pendente foi tratada como verificada.

## 7. Skills avaliadas / carregadas / aplicação / exclusões

| Skill | Avaliada | Carregada | Aplicação | Exclusão |
|---|---|---|---|---|
| `web-accessibility` | Sim | Sim | Enquadrou a regressão mínima no pacote `keyboard-focus` (foco inicial/retorno nos CTAs, âncoras para headings com `tabindex="-1"`) e `visual-perception-reflow` (overflow 0 em 320, medições por viewport); separou verificação automatizada da manual (leitor de tela fica explícito como não executado) | Pacotes `routed-navigation-feedback` e `media-alternatives` não aplicáveis (página única estática; imagens decorativas com `alt=""` fora do escopo do refino) |
| `checklist-design` | Sim | Sim | Modo **critique** sobre as capturas (nenhuma checklist do catálogo cobre esta seção isolada); rotina interrompida pelo 503 — sem imagem lida, a crítica visual fica limitada aos números medidos (centro/larguras/linhas/overflow) | Modo audit não usado (escopo é um refino pontual de validação, não auditoria item a item) |
| Demais skills de UI/design (p.ex. `impeccable`, `design-critique`, `design-system`) | Sim, no catálogo | Não | — | Não pertinentes: rodada é validação de um refino já aplicado, não direção visual nova nem governança de tokens |

## 8. Limitações explícitas

- **Não executados nesta rodada:** WCAG integral, auditoria de contraste formal, verificação de leitor de tela (AT), QA independente (@qa-specialist), teste em dispositivos físicos reais.
- **Leituras visuais pendentes (503):** todas as 4 capturas-chave (seção 6). A conferência visual final cabe ao Maestro.
- Medições feitas em DPR 1 no Chromium do Playwright; renderização em DPR >1 / navegadores distintos não verificada.
- A quebra em 2 linhas dos `li` 2 e 3 em 320px (e do li 2 em 390px) é comportamento esperado de texto contido (`width: fit-content` saturado na coluna), sem overflow — registrado como observação, não como defeito.
- Âncora `#atuacao`: primeira medição exibiu `focusMoved: false` por artefato do método (navegação de fragmento encadeada na mesma página); reexecução limpa confirmou funcionamento. Ambas as passadas estão registradas para honestidade.

## 9. Estado do servidor / job

- `npm run preview` subiu como **job de fundo gerenciado** (`pwsh-1`) com bind **127.0.0.1:4321**; confirmado: HTTP 200 (4948 bytes) e listener TCP 127.0.0.1:4321 (PID 19304).
- Porta 3080 (DSH) não foi tocada. Nenhum bind em 0.0.0.0, túnel ou LAN.
- Encerramento: **o job `pwsh-1` foi encerrado ao final desta rodada** (somente o job iniciado aqui; `job_kill` executado após a coleta das evidências). Nenhum listener remanescente em 4321 por ação desta rodada.

## 10. Arquivos tocados nesta rodada

- Criado: `specs/as-mentorias/evidence/situations-refinement.md` (este arquivo).
- Código de produção: **nenhum** (nenhuma reedição; exceção mínima não aplicada — não houve check falho).
- Outros arquivos de evidência: não reescritos.

---

## Conferência do Maestro (recebimento, 2026-09-06)

- Evidência lida integralmente pelo @maestro; checks, medições e proibições conferidos contra a delegação.
- Leituras visuais próprias do Maestro (ponte modlens): **1440-before ✓** (frases escalonadas, travessões presentes — estado original confirmado), **1440-after ✓** (grupo centralizado, sem travessões), **320-after ✓** (legível, sem corte horizontal). **1920-after: pendente** (503 intermitente do provider de visão; rota glm-5.3-flash sem visão nativa) — coberta numericamente (Δ 0,00 px, overflow 0 px, ul 780,59 px) e pela coerência com 1440-after.
- Registro de gate: `gate-log.md` §T03 refino Situações — **G1 APPROVAL_REQUIRED**.
- Recebimento: `UI_IMPLEMENTATION_COMPLETE` aceito para este refino; nenhuma autoaprovação de G1 pelo especialista ou pelo Maestro.
