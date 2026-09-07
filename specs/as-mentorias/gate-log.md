# AS Mentorias — registro de gates pelo Maestro

## Product Gate — APPROVED

Autoridade: operador, nesta conversa: “Após incorporar esses ajustes, considero o PRODUCT GATE APPROVED. Prossiga então para Tech Architect / Architecture Gate. Ainda não implemente antes do Architecture Gate.”

Conferência do Maestro sobre research.md e spec.md revisados pelo Product Architect (despacho c-mtot0p9a-cnqcfpbh):

- IA extensível: spec §2.2 e CA-02 acomodam as oito funções solicitadas, sem teto de cinco seções; conteúdo ausente condicionado a [NEED: evidência] interno.
- CTA natural: §2.4 e CA-05 adotam “Conversar sobre meu momento”, com aviso de contato inativo e região informativa; sem conversa fictícia, chatbot, coleta ou canal real.
- Identidade sem prematuridade: §3.1 e CA-16 mantêm paleta, tipografia e tokens abertos para direção UI.
- Transformação comercial: §1.1 e CA-15 exigem comparação concreta com presença atual, além de beleza editorial.
- Ambição visual: RF-11–13 e CA-11/16–18 exigem arte autoral, hero memorável, ritmo, motion funcional, exploração desktop/mobile antes da implementação completa, refinamento e QA visual independente. Cérebro original somente após consolidação da direção/design system e autorização da etapa.

Resultado: condições documentais atendidas. A aprovação condicional do operador está satisfeita; autorização limitada a iniciar planejamento Tech/Architecture. Os cabeçalhos Product que indicam conferência pendente descrevem o handoff anterior; este registro consolida o resultado da conferência, sem atribuir autoaprovação ao especialista.

Routing auditado: Growth c-mtosw9qc-xfprw4no e Product c-mtot0p9a-cnqcfpbh: presets próprios, openai-codex / gpt-6-astra / medium. Sem fallback.

## Architecture Gate — APPROVED (G0)

Aprovação condicional atual do operador: “Após incorporar esses refinamentos, considero o ARCHITECTURE GATE APPROVED e autorizo o início de T01.”

Conferência Maestro: plan §4/7/10 e tasks revisados pelo Tech c-mtoxh29x-31trh7st atendem os cinco refinamentos: engine aberta em T03 (Motion/GSAP/ScrollTrigger/Three.js/WebGL/CSS/native/combinação proporcional); budgets como targets com exceção medida sem relaxar experiência/CA-13; skills UI por etapa sob demanda e registro; QA visual/comercial independente sem participação humana como pré-condição do verdict; G1 rejeita direção genérica/fraca antes de full page, G2 permanece posterior.

Routing do refinamento auditado: tech-architect / openai-codex / gpt-6-astra / low. Resultado: condições cumpridas, G0 APPROVED. Emenda humana a CA-15 vale sobre a redação anterior da spec: QA avalia independentemente; G3 humano é posterior ao QA APPROVED.

Autorização efetiva nesta rodada: T01 documental por UI Specialist. Não inclui T02/T03, instalações, servidor/protótipo, asset cerebral final, página completa ou operações remotas. G1/G2/G3 ainda pendentes.

### T01 — concluída documentalmente

UI c-mtoxq8ib-wzfgxuut entregou evidence/ui-direction.md, lido integralmente pelo Maestro. Routing auditado: ui-specialist / openai-codex / gpt-6-astra / high (decisão principal de arte/hero). Conceito candidato “Campo de presença”, alternativas comparadas, paleta/tipos candidatos, hero desktop/mobile, ritmo editorial, motion, brief preliminar cerebral, licenças/fontes e seleção de skills registrados. Nenhuma engine final, asset produzido ou validação renderizada da candidata. Checks técnicos N/A nesta task documental.

Recebimento T01 não consolida direção nem aprova G1. Limitação: skill threejs carregada contém ficha, não workflow completo; resolver documentação/capacidade pertinente se opção for selecionada em T03. Próxima etapa possível T02/T03 requer autorização do protótipo delimitado. G1 continua exigindo evidência renderizada e decisão humana; direção genérica/fraca retorna UI antes de full page.

### T02/T03 — autorizados pelo operador

Operador respondeu à solicitação de base mínima + protótipo delimitado desktop/mobile com parada G1: “Aprovado, se precisar gerar imagens pode gerar”. Maestro libera T02/T03, instalação proporcional de dependências, servidor local loopback gerenciado, inspeção renderizada e imagens exploratórias necessárias à direção. Não autoriza full page, contato real, publicação ou Git mutável. Imagens de exploração são provisórias; o cérebro final continua condicionado à consolidação G1 antes da produção G2. Não gerar retrato fictício de Amanda nem copiar arte de referências.

### Histórico — proposta anterior à aprovação condicional

Tech Architect entregou plan.md e tasks.md (despacho c-mtotfq08-ss4tfqav). Routing auditado: tech-architect, openai-codex / gpt-6-astra / medium, sem fallback. Maestro leu ambos integralmente e conferiu aderência à Product refinada, ownership, checkpoints visuais, critérios e limites de autorização.

Recomendação submetida: Astro + TypeScript SSG, sem React/backend inicialmente; CSS autoral e Motion JS seletivo conforme estudo UI. Versões candidatas documentais não equivalem a instalações verificadas. data-model.md não aplicável. Nenhum servidor, teste, dependência ou asset criado nesta fase.

Sequência proposta após aprovação: exploração UI → protótipo renderizado delimitado desktop/mobile → validação explícita direção/design system → autorização específica do cérebro original → composição completa → checks/refino → preparação operacional local → QA independente técnico/visual/comercial. Capturas futuras no .playwright-mcp local com destino efetivo verificado. Sem publicação.

Pendente: aprovação explícita do operador de plan.md/tasks.md e da sequência proposta. Não executar tasks enquanto Architecture Gate não for aprovado.

Sem autorização de implementação, instalação de dependências, geração de assets, commit, push, merge, deploy, contato real ou proposta comercial nesta etapa. Gate arquitetural exige aprovação explícita posterior do operador.

## T03 — refino "Situações de trabalho" (pós-feedback do operador) — validado; G1 em APPROVAL_REQUIRED

Contexto: com T01–T03 e a hero-v2 no worktree, o operador pediu dois refinos estreitos na seção Situações: centralizar como grupo as três frases grandes e remover travessões artificiais/sinais de AI slop da microcopy visível, sem alterar hero, cérebro, paleta, tipografia, textos/claims aprovados, mobile ou demais blocos. Sem autorização para G2/T04/QA/release; não é repo Git; rota vigente bai/glm-5.3-flash (obrigatoriedade Astra removida pelo operador; preset/persona preservados).

Execução: UI Specialist em três despachos (bai/glm-5.3-flash, sem reasoning effort). Dois primeiros falharam (o 2º aplicou as edições e morreu na ponte de visão; integridade do worktree conferida pelo Maestro entre falhas). O 3º completou validação/evidência como único escritor, sem reeditar código. Edições: `src/pages/index.astro:25` travessões removidos (mesmas palavras, apenas pontuação); `src/styles/presence.css` `.situations-lines` centralizado (`margin: 0 auto; width: fit-content`), recuos escalonados desktop (12%/30%) e mobile (1rem/2rem) removidos, cor do 3º item e regra wide 1100px preservadas. `.open-space` intocado.

Evidência: `specs/as-mentorias/evidence/situations-refinement.md`. Checks reais: typecheck 0 erros (11 arquivos), lint PASS, test 4/4 unit + 5/5 integration, build PASS (Astro 7.3.1, Node 24.9.0, npm 11.7.0, TS 6.0.3). Medições Playwright nas cinco viewports (1920/1440/768/390/320): Δ centro do grupo vs centro da coluna ≤ 0,01 px; overflow 0 em todas; console 0 erros/warnings; teclado/foco dos dois CTAs e âncoras OK. Capturas before/after nas cinco viewports em `.playwright-mcp\` (destino verificado no projeto).

Conferência visual do Maestro (ponte modlens): 1440-before confirmada (frases escalonadas + travessões presentes), 1440-after e 320-after confirmadas (grupo centralizado, sem travessões, legível sem corte). 1920-after: leitura visual pendente (503 intermitente do provider de visão; rota glm-5.3-flash sem visão nativa), amparada por medições numéricas (Δ 0,00 px, overflow 0 px) e coerência com 1440.

Divergência superficial registrada para decisão do operador: a string visível da intro difere literalmente de spec §2.3 pela remoção dos travessões (emenda humana autorizada nesta rodada; mesmas palavras e sentido). Spec não foi editada por UI/Maestro.

**G1 segue APPROVAL_REQUIRED**: apresentar evidências ao operador (hero-v2 + Situações refinada) e obter aprovação explícita de direção/design system antes de G2/T04. Sem QA/T04/G2/release nesta etapa.

## G1 — APPROVED (2026-09-06)

Operador: **"Mais que aprovado"** — direção hero-v2 + seção Situações refinada consolidadas; design system vigente (paleta AS, Bricolage 600 / Source Sans 3, tokens `--night/--paper/--reverse/--gold`) aprovado como base da landing-page completa.

- **Emenda ratificada:** remoção dos travessões da intro (divergência superficial vs spec §2.3, mesmas palavras) considerada correta pelo operador. Spec permanece inalterada; este registro vale como emenda humana vigente.
- **Edição manual do operador em `.situations-lines`** (presence.css): grupo segue centralizado (`margin: 0 auto; width: fit-content`) com **efeito de escada** via `transform: translateX(2rem)` / `translateX(4rem)` nos itens 2/3; `color: var(--night)` preservado no 3º. Operador: "considere certo". **Não reverter** em refinos nem migrações (a migração Tailwind deve reproduzir o efeito, ex. utilitários translate-x equivalentes).
- **Diretiva nova do operador (mudança arquitetural material):** **Tailwind CSS no lugar do CSS autoral** ("preciso de Tailwind aqui e não CSS puro"). Não é fast-path: retorna ao **Tech Architect** para emenda de plan/tasks — dependência e integração com Astro 7.3.1 (verificação de docs vigentes antes de instalar), estratégia de migração de tokens/estilos (base.css, presence.css, foco/estados, media queries existentes), impacto nos budgets preventivos (CSS gzip ≤35 KiB é target, exceção documentada se necessário) e ajustes de lint/check. Aprovação do operador da emenda antes de qualquer implementação. Sem React/backend; engine de motion (WAAPI atual) não muda por essa diretiva.
- **Copy:** base aprovada em spec §2.3 cobre as seções restantes (bio, proveniência, temas, fechamento, rodapé, região informativa). Novos claims/números/cases voltam ao Product. Refinos de superfície sem novo claim são trabalho de implementação, registrados em evidência.
- **Sequência a partir daqui:** emenda Tech (Tailwind + landing-page T04–T07) → aprovação do operador → G2 (autorização específica do asset cerebral final) → T04 → T05 → T06 → T07 → T08 → T09 → G3. Escritor único; sem QA/release até os gates correspondentes.

### Autorizações do operador nesta rodada (2026-09-06, via seleção estruturada)

1. **Emenda Tailwind: AUTORIZADA.** Tech Architect autorizado a emendar plan/tasks com a migração Tailwind + landing-page; aprovação do operador exigida antes de implementação.
2. **G2: AUTORIZADO.** Produção do asset cerebral final autorizada pelo operador ("Autorizo agora"). Brief vigente: `evidence/ui-direction.md` §9.3 (metáfora não clínica, silhueta legível, paleta AS, sem cérebro de fios do site atual, sem pessoa fictícia). Qualidade controlada em T04: se o asset enfraquecer a direção, refina antes da página completa.
3. **Copy: aprovada basta.** Spec §2.3 como única fonte de conteúdo; refinos de superfície sem novo claim permitidos em evidência; claims novos só via Product Gate.

### Emenda de arquitetura Tailwind — RECEBIDA, conferida pelo Maestro; APPROVAL_REQUIRED do operador

Tech Architect (bai/glm-5.3-flash) emendou `plan.md` (banner + §2a/§3a/§7a/§8a/§9a/§10a, histórico preservado) e `tasks.md` (banner + Emendas T04–T07, T01–T03/T08–T09 intocados). Conferência Maestro contra §2a.C do plan:

- **Stack:** Tailwind **v4.3.3** + plugin Vite `@tailwindcss/vite` (`astro.config.mjs` → `vite.plugins`), entry único `src/styles/global.css` com `@theme` (tokens byte a byte), config CSS-first; fonte Context7 docs oficiais + registry npm, datadas; sem canary; reconferência obrigatória no preflight da instalação. Nada instalado nesta rodada.
- **Preservação 1:1 conferida:** escada do operador (`mx-auto w-fit` + `translate-x-8`/`translate-x-16` = 2rem/4rem com verificação no renderizado + `text-night` no 3º); foco como política autoral mínima; véus do sculpture e `:has()` fallback autorais com justificativa; reduced-motion `!important` tratado como contrato funcional; breakpoints 600/1100 mapeados; hooks de JS (`.sculpture`, `.presence`, `.open-space`, IDs/data-attrs) intactos; WAAPI e contrato do CTA inalterados; CA-13 integral; CSS gzip ≤35 KiB segue target com estimativa documental (medição real em T07).
- **Rollback:** `base.css`/`presence.css` permanecem no worktree até aceite visual; aceites objetivos definidos (zero regressão nas 5 viewports, escada idêntica, foco/estados, console limpo, checks verdes).
- **T04 (G2):** produção do asset cerebral final sob brief `ui-direction.md` §9.3, refinamento obrigatório se enfraquecer a direção. **T05:** fase 5a (migração 1:1 com verificação before/after em 1920/1440/768/390/320) → fase 5b (one-page completa, copy spec §2.3 como fonte única, sem claims novos).
- Routing auditado: tech-architect / bai / glm-5.3-flash, sem reasoning effort, sem fallback. Instalação/implementação/execução: nenhuma nesta rodada.

**Status: `READY_FOR_OPERATOR_APPROVAL`** — aprovação explícita do operador desta emenda é pré-condição de implementação (T04 → T05 5a/5b → T06 → T07 → T08 → T09 → G3, escritor único).

### Emenda de arquitetura Tailwind — APPROVED (2026-09-06)

Operador: **"Aprovado"**. Emenda plan §2a/§3a/§7a/§8a/§9a/§10a + tasks Emendas T04–T07 vigentes. Autorizada a implementação na sequência: T04 (asset final) → T05 5a (migração Tailwind 1:1, verificação before/after nas 5 viewports) → T05 5b (one-page completa, copy spec §2.3) → T06 → T07 → T08 → T09 → G3. Escritor único; base.css/presence.css preservados como âncora de rollback até aceite visual; sem commit/push/deploy.

**Diretiva do operador — produção do asset:** "para produção do asset, use o gpt". Interpretação registrada: o mecanismo de geração de imagem do runtime é o codex/GPT (`codex_connect_image_generate`), acionado pelo Maestro na etapa autorizada; roteamento dos especialistas permanece bai/*. Brief vigente: `ui-direction.md` §9.3 adaptado à direção consolidada hero-v2 (paleta night/paper/gold).

### T04 — CONCLUÍDA (2026-09-06)

- **Fase 1 (UI):** `evidence/asset-register.md` criado com brief adaptado à direção hero-v2, prompt de produção final e critérios de aceite (9 itens + máx. 2 reinterpretações). Decisão material da UI: metal prata neutra acetinada com undertone champanhe restrito ao especular — dourado banido do asset para preservar a exclusividade do CTA `#F3D386` e evitar eco dos "fios dourados" do baseline.
- **Geração (Maestro, mecanismo autorizado GPT/codex por diretiva do operador):** prompt enviado verbatim; 1 imagem, PNG RGBA 1536×1024, 2.219.920 bytes, SHA-256 `96b5e967196b1d7b977cae97e18605b78dfc756a1db02cec14b723b04dd7dcac`. Original byte-idêntico preservado em `.playwright-mcp/t04-assets/cerebro-final-original.png` (hash conferido contra o storage do serviço).
- **Verificação objetiva do Maestro:** alpha real por grid-scan (51% fundo A=0, 47% objeto A≥250, ~1,3% bordas; cantos limpos); "vinheta" descrita pelo leitor visual eram dados RGB sob alpha=0 (invisíveis em compositor); teste 180px com silhueta reconhecível.
- **Fase 2 (UI):** veredito **ACEITO 9/9** (0 reinterpretações consumidas), registro §6 preenchido com leituras próprias + observações de integração para T05 (fit paisagem 3:2, brainstem sob véus, sem cast dourado sob headline, srcset sem upscale, flatten sobre #070910 se fallback). O estudo provisório permanece no histórico; o asset final NÃO é o fundo de fios do baseline; sem pessoa/texto/claims no asset.
- Routing auditado: ui-specialist / bai / glm-5.3-flash (fases 1 e 2), sem reasoning effort. Nenhum código de produção alterado nesta task.

### T05 fase 5a — MIGRAÇÃO TAILWIND 1:1 CONCLUÍDA (2026-09-06)

Execução em micro tasks (M0–M8) após duas runs que estouraram limite de tokens (estado parcial conferido pelo Maestro entre falhas; nenhuma escrita perdida: M0 install/config veio da 2ª run; capturas pre-* da 1ª). Routing: ui-specialist / bai / glm-5.3-flash, sem reasoning effort.

- **Instalado:** `tailwindcss@4.3.3` + `@tailwindcss/vite@4.3.3` (devDeps, registry reconferido); plugin Vite em `astro.config.mjs`. Sem PostCSS, sem lib de UI, sem canary.
- **Estrutura:** entry único `src/styles/global.css` (`@import "tailwindcss"` + `@font-face` locais + `@theme` byte a byte + `@layer base` reset/foco/botões + `@layer components` residuais justificados: véus do sculpture com 3 variantes de media query exatas, `:has()` fallback, escada do operador byte a byte, next-step/contact-action overrides, skip-link). Markup em utilities; hooks de JS preservados (`.presence`, `.sculpture`, `.open-space`, IDs/data-attrs); `base.css`/`presence.css` intactos como âncora de rollback, sem referências no build.
- **Verificação M8 (5 viewports 1920/1440/768/390/320):** escada `matrix(…,32,0)`/`matrix(…,64,0)` em todas; direitas 1840/1368 exatas nos 4 blocos; H1 1440 = referência exata (72/145/1257,38/320,67); overflow 0 (exceto achado abaixo); foco 3px/offset 5; reduced-motion `transform none` vencendo parallax inline; fallback `media-unavailable` ok; console 0/0; requisições 100% loopback; fontes Bricolage carregadas.
- **Correções reais durante a validação (2):** padding-top do `.presence` + line-height do header (H1 y136→145 = referência); regra `h1,h2,h3 { Bricolage 600 }` restaurada (preflight a comia). `npm test` 5/5 após cada. Revalidação completa no build final.
- **Footprint:** CSS emitido 21.095 B raw / **5.433 B gzip** vs target 35 KiB (15%). Checks finais: typecheck 0/0, lint 0, unit 4/4, integration 5/5, build Complete.
- **ACHADO PRÉ-EXISTENTE para decisão do operador (não-regressão):** overflow horizontal de 44px em viewports ≤599px — a escada `translateX(2rem/4rem)` do operador sobre grupo `fit-content` extrapolaa largura em 390/320. Regras byte-idênticas à âncora aprovada ("considere certo"); correção (ex.: reduzir/remover translate em telas pequenas) é decisão estética do operador, 1 linha em CSS. Migration NÃO alterou esse comportamento.
- Evidência: `evidence/tailwind-migration.md` (completa, com capturas pre/post verificadas e leituras modlens: sem diferenças visíveis 1440/1920).

### Emenda operacional — paralelismo limitado autorizado pelo operador (2026-09-06)

Operador: "Se puder disparar varias ao mesmo tempo era o ideal". Autorização registrada para a rodada 5b: **até 2 escritores simultâneos com arquivos estritamente disjuntos** (Track-1: `index.astro` + `src/assets/*` + `asset-register.md`; Track-2: `DemoLayout.astro` apenas), **um único dono de build/dist** (Track-1; Track-2 roda só lint — sem build/typecheck concorrente). Nada de escrita concorrente no mesmo arquivo; gate-log/spec/evidence ficam fora dos dois tracks. Regra geral de escritor único permanece para todo o resto (validação 5b-8 sequencial, gates subsequentes). Correção do overflow escada (≤599px translate 0.5rem/1rem) e retrato xadrez autorizados pelo operador na mesma decisão.

### T05 fase 5b — ONE-PAGE COMPLETA CONSTRUÍDA E VALIDADA (2026-09-06)

- **5b-0 (correção autorizada):** overflow 44px ≤599px resolvido — escada com translateX 0.5rem/1rem em ≤599px (desktop/tablet mantêm 2rem/4rem).
- **Track-1 (paralelo):** cérebro final integrado (`src/assets/cerebro-final.png`, hash `96b5e967…` conferido, mesmos widths ≤1536 sem upscale; estudo provisório preservado); seção **Amanda** nova (retrato xadrez `c6c2f300…`, 4592×6769, webp lazy 480/780/1100, alt aprovado, proveniência discreta); **repertório/citação** nova (citação assinada §2.3/T01 §8 + temas com origem); practice expandida com parágrafo de abordagem. asset-register §8 registra integração e hashes.
- **Track-2 (paralelo):** nav do header com 4 âncoras (Situações · Atuação · Amanda · Temas), padrão utilitário existente, lint limpo.
- **5b-7 (consolidação, escritor único):** bio consolidada 1× (seção Amanda); travessão artificial da abordagem → dois-pontos (diretiva vigente); comentário do DemoLayout atualizado (T05 5b); `content-traceability.md` criado — matriz completa bloco → string → fonte (spec §2.2/2.3/2.4/4.1, research S1/U1, RN-03/04/05, O4) com emendas operacionais marcadas. Checks: typecheck 0/0 · lint 0 · unit 4/4 · integration 5/5 · build Complete · CSS 5.600 B gzip (~16% do target).
- **5b-8 (validação renderizada):** 5 viewports — overflow 0 em todas (incl. 320/390 pós-fix); escada computada 0/32/64px desktop e 0/8/16px mobile; 4 âncoras com foco no h2 (clique e Enter); CTAs abrir/focar/fechar/retornar idempotentes, zero rede na ação; alvos 44/56px; foco 3px; reduced-motion transform none; fallbacks de escultura e retrato ok; console 0/0; 100% loopback; leitura visual (modlens) sem cortes/sobreposições/distorção; 13 capturas em `.playwright-mcp/onepage/` verificadas. Evidência: `evidence/onepage-validation.md`.
- **Estado da one-page:** presence (cérebro final) → situations (escada) → practice/Atuação (abordagem + proveniência workshop) → Amanda (retrato + bio) → Temas/repertório (citação assinada) → next-step (CTA closing) → contact-info. Módulos sem evidência continuam OMITIDOS (provas/cases; RN-08) — sem títulos/âncoras vazias.
- Routing auditado: ui-specialist / bai / glm-5.3-flash em todas as micro tasks, sem reasoning effort, sem fallback.
- **Pendentes:** T06 (CTA/motion funcionais completos + latência CA-13 primeira rodada) e T07 (autovalidação integral: WCAG 2.2 A/AA, leitor de tela, CA-13 exato, refinamento visual) — autorizadas pelo operador na emenda; T08/T09/G3 aguardam operador.

### T06/T07 — AUTORIZADOS (2026-09-06, "pode seguir") + plano de micro tasks

Rodada em execução: **Track A** (T06: motion.ts — reveals proporcionais com reduced-motion/limpeza, latência CA-13 parcial 5 amostras/ação em 390+1440, evidência temporal de movimento; dono de build/servidor) **∥ Track B1** (T07a: acesso à norma WCAG 2.2 — T01 registrou falhas prévias; se ilegível → BLOCKED honesto do critério, sem conformidade inferida — + inventário code-level a partir de dist/index.html estático; sem servidor/build). Sequencial depois: **B2** (contraste pixel real, zoom 400%, texto 200%, espaçamento 1.4.12, orientação, sobre build final do T06) e **B3** (CA-13 exato: 390+1440, 4Mb/s+1Mb/s+RTT150ms+CPU4×, 3 cargas frias/viewport, LCP≤2,5s/CLS≤0,1 via PerformanceObserver local; validação visual/comercial CA-15–17; correções mínimas). Paralelismo novamente com territórios disjuntos (A: motion.ts/tests/latency-motion.md; B1: accessibility-matrix.md + .playwright-mcp/t07-a11y/).

### T06 + T07 — CONCLUÍDOS (2026-09-06) — autovalidação integral do implementador

**T06 (motion + latência)** — após 4 falhas de run (todas sem escrita parcial; worktree conferido entre falhas), resolvido dividindo em T06-edi (código) e T06-lat (medição):
- Reveals WAAPI via IntersectionObserver (threshold .2, uma vez, disconnect) em 6 alvos (h2 practice/about/repertoire, .situations-lines, blockquote, next-step h3); reduced-motion nunca oculta conteúdo; matchMedia change cancela/reverte; reusa helpers existentes (cancel por blur/visibility). Markup e contact-info.ts intocados. Excluídos com motivo: imagens/texto corrido/h1 (risco leitura/LCP).
- Latência CA-13 parcial: **80 amostras individuais** (8 ações × 5 × 2 viewports) — pior 55,1 ms (open closing) e outlier 198,5 ms em close@390 (stall de frame; reteste 5/5 ≤0,7 ms) — **nenhuma ação inconclusiva**. Evidência temporal: webm ×2 + timeline JSON por frame + traces; filmstrip suplementar.
- Achado menor registrado (não-gate): cancel() preexistente do hero varre reveals em saltos programáticos grandes (estado final correto, movimento pulado) — revisão futura do escopo do cancel().

**T07 (autovalidação integral)** — em 4 blocos:
- **B1/T07a:** norma WCAG 2.2 NÃO legível (5 fetches w3.org) → **1 critério BLOCKED-norma** (sem conformidade inferida); matriz de 41 critérios: 22 PASS-code · 9 PEND-render · 9 N/A justificados · 1 BLOCKED; contraste estático de 11 pares token ≥5,28:1.
- **B2 (render):** contraste pixel real **36/36 PASS** (pior: 6,28 muted/paper; h1 s/ escultura 17,5+; CTA 13,71); **1.4.1 FALHA confirmada e corrigida** — preflight Tailwind removera o underline UA do qual o base.css original dependia; correção: underline + offset .24em + thickness 1px em `a` no @layer base (pixel-proof registrado); foco/ordem/2.4.11 ok (0/16 obscurecidos); zoom 200% (html 32px), reflow 320, text-spacing 1.4.12, orientação retrato/paisagem — todos ok; checks re-run verdes (9/9 testes).
- **B3a (CA-13 exato):** perfil CDP validado (RTT 150 ms, 500000/125000 B/s, CPU 4×, cache off — ~91% do alvo observado); **LCP mediana 704 ms (390) / 696 ms (1440); CLS 0,0041 / 0,0053 — PASS** (alvos 2500 ms / 0,1); LCP element = webp do cérebro final; coletor PerformanceObserver injetado fora do bundle; zero requests externas.
- **B3b (rubrica CA-15–17):** PASS nos 3 eixos (transformação comercial legível em segundos, inatividade perceptível; sem template/blobs/glass; escada+citação como assinatura; composição/tipografia sólidas); **fraquezas honestas f1–f3**: respiro hero↔cérebro apertado em 390; inatividade depende do aviso textual (affordance ativa); wordmark tipográfico mínimo. Risco beauty/wellness/IA: veredito **comunicação/liderança**. Falso-positivo OCR ("Destravaando") desmentido por grep. Skills: checklist-design carregada (critique); impeccable/design-critique avaliadas, não carregadas.
- Evidências T07: `latency-motion.md` · `accessibility-matrix.md` · `performance-local.md` · `visual-review.md` + brutos em `.playwright-mcp/t07-{a11y,render,perf,visual}/`.

**Estado:** T01–T07 concluídos; checks 9/9; sem autoaprovação de gates. **Aguardando operador:** T08 (DevOps local), refinamentos f1–f3 (se desejados), T09 (QA independente), G3.

### Refino f1–f3 + decisões do operador (2026-09-06, "1 - Pode refinar; 2 - Sim; 3 - Não, antes quero ver o site antes do QA independente")

- **REF-f1f3 DONE:** f1 respiro mobile `.presence-field` 200→216px (sobreposição parágrafo↔cérebro −21px→−5px; 320 íntegro, CTA na 1ª tela); f3 wordmark `tracking-tight`; f2 íntegro sem mudança (0 inputs; contrato CTA intocado). Checks 9/9. Leitura perceptual do after-390 bloqueada por 503 persistente — confirmação perceptual fica para QA/operador (limitação honesta). Evidência: `visual-review.md` §9; capturas `refine-f1f3/`.
- **Decisões:** T08 AUTORIZADO. **T09 condicionado:** o operador verá o site antes do QA independente — a visualização do operador é pré-condição para despachar T09. G3 segue após T09.

### Diretivas do operador na revisão (2026-09-06) — enriquecimento + bug de motion

- **Enriquecimento de conteúdo (product):** operador aprovou o design system/tema e hero/situações/atuação, mas considerou a seção Amanda "vazia" ("escassez de informação sobre a dona da landing page") frente ao site oficial (ANEXO: seção "QUEM CONDUZ O ENCONTRO", legível via ponte de visão). Diretiva: "enriqueça o site, coloque informações reais, sobre o evento dela, sobre o que ela apresenta, o que o encontro atual apresenta… ela tá vendendo o peixe dela". Material real autorizado: bio expandida (medo do julgamento, voz para ocupar lugares), formação (Letras + Educação Física; pós Ensino de Línguas + Neuropsicopedagogia), +13 anos sala de aula, fundadora, escritora e colunista, membro Sociedade Brasileira de PNL, colunista Revista A Cúpula, filosofia "quando a sua voz muda, a sua vida acompanha". **Discrepância factual a resolver com o operador:** o site oficial grafa **"AJS Mentorias"**; todo o projeto usa **"AS Mentorias"** (iniciais Amanda Schurnovski). Encaminhado ao Product Architect (emenda spec, proveniência RN-03/04 + O4) e questionado ao operador.
- **Bug de motion reportado:** "motion não tá funcionando, vejo animação nenhuma". Prioridade de correção. Hipóteses sob diagnóstico pela UI (reduced-motion no SO do operador vs amplitude insuficiente vs regressão). T06 tinha validado reveals/parallax em perfil normal (Playwright) — confirmação objetiva pendente do ambiente do operador.

### Enrichment §2.3b + Motion FIX — CONCLUÍDOS (2026-09-06, noite) — COMBINED_VALIDATED

- **Decisão de marca (operador): "AS Mentorias"** canônico (correção aplicada sobre a grafia "[A]JS" da fonte; atribuição "conforme site oficial da AS" mantida).
- **Product (spec §2.3b):** emenda aditiva completa — bio verbatim (3 parágrafos: medo do julgamento/voz, formação Letras+Educação Física, pós Ensino de Línguas + Neuropsicopedagogia, +13 anos, fundadora, escritora e colunista), credenciais ×4 (Membro SBPNL · Colunista Revista A Cúpula · Escritora · +13 anos), "O encontro" (posicionamento/presença/escuta — workshop vigente) e filosofia "quando a sua voz muda, a sua vida acompanha". Proveniência O4/RN-03/RN-04; duração/datas/formato: [NEED] fora da página (nada inventado).
- **UI (implementação):** .about enriquecida (bio 3¶, P1 destaque, badges tipográficos sem chips/ícones), nova section `.encontro` (bg mineral, filosofia em display ~53px), ritmo paper→mineral alternado, rastreabilidade atualizada. Nav: **Encontro** adicionado (5 âncoras).
- **Motion (diagnóstico Maestro + fix UI):** H1/H2/H4 descartados com medições (scripts carregam, gating correto, reveals disparam); **H3 confirmado — funcional mas imperceptível** (parallax cap ~10px, settle 720ms 1×, fades curtos). Fix: settle **64px/900ms** (opacity converge ao estado natural .68 sem snap), parallax **40px desktop/20px mobile** (bordas do asset validadas transparentes 30/37px — sem corte), reveals **32px/600ms + stagger 80ms** (fill backwards, sem flash). Reduced-motion intocado. Rampas por frame medidas pós-integração.
- **Validação combinada:** checks 9/9 · console 0/0 · 35/35 requests loopback · overflow 0 @320 · âncora #encontro foca · leitura visual full-1440 (ritmo, credenciais, filosofia, nada cortado) · full-390 não lida por 503 (cobertura por métricas DOM — limitação registrada).
- **Servidor:** preview rodando (pwsh-15) com build novo — revisão do operador em andamento. T09 permanece condicionado à aprovação do operador.

### REF-DESIGN — refinos da 2ª revisão do operador (2026-09-06, noite) — DONE

Operador: "animação ok" + três refinos (temas em card bonito centralizado; biografia extraordinária, direita vazia; CTA final mais forte). Implementação (impeccable + design-critique carregadas; zero copy nova; ids de âncora preservados):
- **Temas:** card editorial único (max-w 52rem, mx-auto, rounded-lg, border hairline, sombra sutil, aspas gold como único toque de marca), citação display centralizada; `#temas` movido ao section (nav intacto).
- **About:** nome display 2.5→4.5rem com overlap −0.38em sobre a foto (aprovado por medição de luminância), retrato ampliado (300–420px), P1 lead, badges ×4 em grade 2×2 tipográfica com hairline dividers; filosofia permaneceu em .encontro (contrapeso do grid — mover duplicaria; eco já existe no P3).
- **CTA final:** next-step virou seção própria `bg-night` após repertoire — pergunta display ~3rem white centrada, CTA gold 64px/1.25rem com hover lift (reduced-motion guard), aviso demo mantido; practice aliviada. Ordem final: presence → situations → practice → about → encontro → repertoire → next-step(night) → contact-info.
- **Validação:** checks 9/9 · impeccable detector 0 findings · overflow 0 (320/390) · âncoras íntegras · leituras modlens ("editorial rather than template-like") · autocritica com 1 iteração real (alinhamento grade 2×2) + correção de ordem. Limitação: cta-390 não lido (429 persistente; evidência por DOM). Capturas em `.playwright-mcp/refine-design/`. Preview segue no ar para a 3ª revisão do operador.

### G3 — PROJETO FECHADO (2026-09-07) — decisão humana final

Operador: "Pode marcar como fechado, eu mesmo ja validei o site online". **G3: APPROVED/CLOSED** — a demo foi validada pelo próprio operador na URL de produção `https://fp-solu.github.io/as-mentorias/` (entrega técnica verificada pelo Maestro: HTTP 200, assets 200, noindex, zero refs externas).

- **T09 (QA independente): DISPENSADO** pelo operador — não executado; a validação humana direta na produção substituiu o ciclo de QA nesta rodada. Registro honesto: WCAG integral, leitor de tela e CA-13 reproduzido permanecem não certificados; se a demo evoluir para produção real da AS, reabrir como requisito.
- **Ciclo completo:** Product Gate → G0 → T01–T03 → G1 → G2 → T04–T08 → 4 refinos do operador → deploy (Git local + remoto FP-SOLU/as-mentorias) → **NO AR** → validação do operador → fechamento.
- Fora de escopo e pendentes de novo requisito: proposta/preço FP (spec O6), publicação oficial da AS, contato real, analytics, backend.

### REF-WOW — ajustes da 3ª revisão (2026-09-06, noite) — DONE

Operador: about com "o texto comendo a foto" + temas "dá pra melhorar muito mais / espetacular". Implementação (impeccable + design-critique):
- **About:** overlap do título sobre a foto medido **27.4px → 0px** (1440; nome 100% acima da foto, display preservado `margin-block-end 1.75rem`); rosto 100% visível confirmado por leitura; coluna direita continua preenchida; retrato/lead/badges 2×2 preservados; zero copy nova (rascunho com figcaption revertido).
- **Temas:** card elevado — citação display `clamp(2→3.25rem)`, card 52→56rem, **aspas-glyph dourada `clamp(5.5→8rem)` em camada sob a citação** (recuo calibrado −.56em em 1 iteração), linha-assinatura gold 2px, atribuição em small-caps, borda muted fina. Guardrails anti-slop respeitados (zero gradient/glow/borda dupla/ícone); leitura "refined editorial, não motivational-poster".
- Checks 9/9 · overflow 0 · âncoras íntegras · preview recarregado. Evidência `visual-review.md` §REF-WOW + capturas `.playwright-mcp/refine-wow/`.
