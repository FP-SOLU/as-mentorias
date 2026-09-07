# AS Mentorias — tasks futuras

**READY_FOR_ARCHITECTURE_APPROVAL — aprovação condicional recebida; conferência do Maestro pendente antes de G0/T01. Nenhuma task executada nesta revisão.**

Operador: “Após incorporar esses refinamentos, considero o ARCHITECTURE GATE APPROVED e autorizo o início de T01.” Maestro confere matriz plan §10 antes de registrar G0/liberar T01 documental; condições cumpridas não exigem nova aprovação humana. Tech não self-approve. `plan.md` define arquitetura/contratos/método; `spec.md` e `research.md` continuam fonte de produto, aprovadas conforme `gate-log.md`, com emenda explícita atual de CA-15 registrada abaixo e em plan §7. Product/gate-log não são editados por Tech; só Maestro registra gates. Nenhuma task autoriza commit/push/merge, contato, proposta, publicação, túnel ou infraestrutura remota.

> **EMENDA 2026-09-06 — Tailwind + G2 + copy (gate-log G1/Autorizações):** T04–T07 emendadas em blocos “Emenda” dentro de cada task. Tailwind v4 substitui o CSS autoral conforme plan §2a (integração/versão confirmadas em plan §9a); escada do operador preservada 1:1; engine WAAPI e contratos do CTA inalterados; copy = spec §2.3 como única fonte (claims novos só via Product Gate). Aprovação do operador desta emenda é pré-condição de implementação. **Status: READY_FOR_OPERATOR_APPROVAL — STOP.**

## Regras de execução e evidência

- **Um único escritor no worktree inteiro por vez**, inclusive documentos, assets, testes e lockfile. Maestro transfere ownership entre tasks; não paralelizar escrita mesmo quando dependências parecem independentes.
- Implementadores executam checks de sua superfície **antes** do QA. Registrar comandos reais existentes, versões, revisão, resultado e evidência; ausente/não executado não é PASS. Matriz obrigatória: typecheck, lint, unit, integration, build e rendered. N/A exige motivo específico, não dispensa de falha.
- No projeto ainda não há scripts. T02 definirá scripts reais; este plano não afirma comandos executáveis/existentes. Componentes Astro requerem checker adequado além de build; scripts TS requerem typecheck. Lint deve abranger Astro/TS com configuração compatível fixada.
- UI cuida de composição, implementação frontend, conteúdo fiel, a11y e motion. **Systems N/A**: não há backend, schema, API ou integração. Não inventar task backend ou mocks.
- DevOps somente preparação local pertinente. QA independente entrega `APPROVED`, `REJECTED` ou `BLOCKED`; não corrige código de produção. Em falha, Maestro devolve ao owner e solicita reteste, sem loops automáticos do QA.
- Evidências brutas: **`W:\FP\as-mentoria-concept\.playwright-mcp\`**. Relatórios em `specs/as-mentorias/evidence/` e `qa-report.md` junto à spec. Primeira captura de cada configuração deve ter destino efetivo verificado e arquivo legível; config anterior não está testada. Preservar baseline D1–D6/M1–M9.
- Browser/testes só depois do Architecture Gate, sobre URL local autorizada. Nenhuma captura/protótipo/render/instalação agora.

## Dependências e pontos de parada

`G0 Architecture APPROVED → T01 → T02 → T03 → G1 Direção/sistema consolidados → G2 autorização específica do asset → T04 → T05 → T06 → T07 → T08 → T09 → G3 decisão humana`

G1/G2 são checkpoints distintos: G2 somente após direção/sistema consolidados em G1 e autorização específica, ainda que registrados na mesma decisão explícita. G1 humano é firme: genérico, previsível, template-like ou visualmente fraco retorna UI/T01/T03 antes de full page; não executar T04/T05. G3 humano somente após T09 QA APPROVED e não autoriza deploy por inferência. Escrita de QA é posterior à implementação/DevOps, não simultânea.

**Emenda 2026-09-06 — dependências:** T04–T07 executam somente após a aprovação do operador da emenda Tailwind e liberação do Maestro. **G2 está AUTORIZADO** pelo operador (gate-log, Autorizações 2); o disparo da produção do asset cerebral final ocorre na T04, condicionado a essa aprovação e à transferência de escrita. Ordem interna: T04 (asset) independe da migração de estilos; a migração Tailwind (T05 fase 5a) precede a expansão da one-page (T05 fase 5b). Escritor único permanece.

### Política de skills e avaliação independente

T01/T03/T07 aplicam a arquitetura de skills do preset UI conforme plan §4: CORE pertinentes `impeccable`, `design-system`, `design-critique`, `checklist-design`, `web-accessibility`; alta ambição exige avaliar explicitamente `build-awwwards-quality-sites`, `cinematic-scroll-storytelling`, `gsap-core`, `gsap-scrolltrigger`, `gsap-performance`, `gsap-plugins` quando pertinente, e `threejs`. Carregar sob demanda, não todas automaticamente. Cada task registra avaliadas/carregadas, aplicação concreta, excluídas e motivo; requerida indisponível é reportada sem inventar leitura/instalar. Skills não predeterminam engine, scroll smoother ou preloaders contra spec nem ampliam autorização. Maestro não executa skills UI.

**Emenda explícita atual do operador a CA-15:** a expressão antiga “operador/avaliador indicado” não condiciona avaliação/verdict técnico à participação do operador. QA/avaliador independente pode avaliar com critérios/rubrica aprovados. T07 autovalida e T09 avalia independentemente; nenhuma das duas aguarda operador para CA-15. Rubrica: clareza de público, situações, atuação publicada, autoria/confiança, próximo passo e contato inativo antes do clique; melhoria concreta de marca/autoridade/presença, impacto do hero, ritmo, tipografia, cropping, profundidade e originalidade frente ao baseline. Registrar observação/evidência/resultado por critério, sem alegar conversão comprovada. QA usa suas próprias skills QA pertinentes, carregadas sob demanda e registradas; não depende da leitura de skills feita por UI. Revisões humanas continuam em G1 e G3, este somente após QA APPROVED. Product permanece inalterado.

### Regras da migração Tailwind (emenda 2026-09-06)

- Plano mandatório: plan **§2a** (decisão/mapa), **§3a** (fronteiras), **§7a** (budgets/checks/verificação visual), **§8a** (riscos/rollback). Instalação somente na task liberada (T05 fase 5a), com reconferência de `tailwindcss`/`@tailwindcss/vite` no registry antes de instalar (estável vigente; nada de `@next`/canary); divergência material → Maestro.
- `base.css`/`presence.css` permanecem intactos no worktree como âncora de rollback até o aceite visual; migração com entry único `src/styles/global.css`; utilities no markup; autoral residual mínimo com justificativa (plan §2a.C); matriz de equivalência do preflight na evidência.
- **Nenhum seletor de JS pode ser removido:** `.sculpture`, `.presence`, `.open-space` (motion.ts) e IDs/data-attributes (contact-info.ts) são contratos; `.media-unavailable` permanece adicionado por JS.
- O `!important` de reduced-motion sobre o transform do sculpture é contrato funcional (vence o transform inline do parallax): preservar `motion-reduce:transform-none!` ou regra autoral equivalente, com teste de scroll em reduced-motion.

## T01 — Explorar direção autoral e narrativa visual

- **Owner:** @ui-specialist.
- **Depende:** G0 aprovado + autorização de exploração pelo Maestro.
- **Superfície:** `specs/as-mentorias/evidence/ui-direction.md`; leitura da spec/research/auditoria, índices locais `C:\Users\felip\.dsh\references\ui\landing-pages` e referências externas pertinentes. Sem alterar Product/gate-log.
- **Ação (somente documental):** avaliar/selecionar skills pela política acima e registrar avaliadas/carregadas/aplicação/excluídas/motivos em `ui-direction.md`; sem render, implementação ou produção de assets nesta T01. Documentar conceito próprio Amanda/AS e caminhos explorados com princípios de referência sem cópia. Definir proposta UI de paleta/tokens, display/body, escala responsiva, pesos/tracking/line-height, hero original, foto/cropping, composição desktop/mobile e motion com função. Mapear todas as funções editoriais sustentadas por evidência; sem teto de cinco seções, oito blocos obrigatórios ou catálogo inventado.
- **Aceite:** direção explica transformação comercial e evita proibições de spec §3.1; fontes com licença candidata documentada, comparação qualitativa com baseline, crítica de genericidade e hipóteses a comprovar no protótipo. Brief preliminar do cérebro prevê papel/composição, **sem produzir asset**.
- **Validação/evidência:** revisão documental CA-02/03/15/16, referência → princípio → aplicação/limite. Typecheck/lint/unit/integration/build/rendered N/A nesta task documental; não substitui T03.
- **Risco/retorno:** se depender de oferta/prova inexistente ou custo/licença nova, retornar Maestro; não resolver produto tecnicamente. Alternativa visual pode ser reexplorada sem perder ambição.

## T02 — Preparar base mínima autorizada para protótipo

- **Owner:** @ui-specialist.
- **Depende:** T01; autorização explícita do protótipo local delimitado.
- **Superfície esperada:** futuro manifest/único lockfile/config Astro/TS/lint, `src/pages/index.astro`, `src/layouts/`, bases `src/styles/`, testes mínimos; `evidence/implementation-checks.md`.
- **Ação:** verificar runtime/package manager reais sem ler credenciais; confirmar versões estáveis compatíveis e segurança/documentação. Registrar Astro candidato 7.3.1 versus versão fixada e motivo de eventual diferença; mudança material retorna Maestro. Criar base Astro SSG + TS sem tema/framework UI/React/router/backend. Scripts reais para typecheck/lint/unit/integration/build e execução loopback, sem sobrescrever documentação existente. Telemetria de ferramentas desativada quando disponível e mecanismo registrado.
- **Aceite:** build estático mínimo reproduzível; nenhum servidor de produto/adapter; shell não oficial pt-BR/noindex. Composição permite larguras próprias por seção, bleed/camadas/recortes e tipografia sem impor sistema visual pelo framework.
- **Validação/evidência:** scripts de typecheck/lint/build executados e saída registrada; smoke render local do shell apenas após autorização. Unit/integration de comportamento ainda N/A se controlador inexistente, motivo registrado. Nenhum script com falha chamado N/A. Registrar Node/npm/Astro/checker/lint e URL loopback, sem afirmar privacidade final antes de T08.
- **Risco/rollback:** dependência incompatível bloqueia protótipo; ajustar apenas base recém-criada, preservar specs/baseline. Não instalar segundo runtime/package manager ou migrar framework silenciosamente.

## T03 — Protótipo renderizado e checkpoint de qualidade visual

- **Owner:** @ui-specialist.
- **Depende:** T02.
- **Superfície:** protótipo delimitado do hero + transição editorial representativa + CTA; tokens/estilos e motion experimental selecionado; `evidence/ui-direction.md`, `evidence/visual-checkpoint.md`, `.playwright-mcp/`.
- **Ação:** renderizar direção desktop/mobile antes de desenvolver página inteira; validar foto real e composição que acomodará cérebro original, **sem gerá-lo nem usar fundo atual como solução final**. Estudos provisórios são internos, não demo apta à prospect. Aplicar política de skills acima e registrar avaliação/carga/aplicação/exclusões/motivos. Motion JS é candidato inicial, não restrição: comparar CSS/native, Motion, GSAP/ScrollTrigger, Three.js/WebGL ou combinação proporcional conforme direção em exploração, sem excluir high-end antecipadamente nem criar demo de efeito. UI escolhe e consolida mecanismo em G1 pelo benefício visual demonstrável, manutenção, a11y, mobile e performance reais. Consultar Context7/documentação oficial atual de APIs/licenças/versões antes da adoção, sem inventar preços/licenças. Medir bundle real como target preventivo, nunca veto absoluto: documentar exceção para direção aprovada e comprovar requisitos reais em T07/T09 sem relaxar CA-13. Manter Astro + TS SSG sem React/backend sem requisito. Tokens/fontes finais são decisão UI neste checkpoint.
- **Aceite:** hero memorável, clareza de Amanda/AS/mensagem/ação/contato inativo, linguagem própria e ritmo representativo; nada de template default 2col/cards/blobs. Documentar conceito, tokens, fontes/recortes, motion normal e estático reduzido, antes/depois comercial. Maestro/operador podem rejeitar direção; ausência de decisão não é consolidação.
- **Validação/evidência:** screenshots em 320/390/768/1440 com alturas/DPR/estados registrados; confirmar path efetivo e legibilidade da primeira captura. Vídeo/trace de scroll/transições/feedback e redução, não apenas PNG; teclado/focus/reflow/contraste preliminar e console. Typecheck/lint/build e testes da interação existente; unit/integration N/A somente para partes não implementadas. Medição exploratória de peso/custo identifica risco CA-13, sem alegar aprovação de performance completa.
- **Parada G1:** apresentar evidência ao Maestro/operador para validação explícita de direção e design system consolidados. Se genérico, previsível, template-like ou visualmente fraco, retornar UI para refinar/reconsiderar T01/T03, mesmo com checks verdes. **Não seguir full page.**
- **Parada G2:** somente depois de G1, obter autorização específica da produção do cérebro original; ferramenta disponível não basta.

## T04 — Produzir/selecionar assets autorizados e validar integração

- **Owner:** @ui-specialist (brief, curadoria e incorporação). Maestro disponibiliza mecanismo autorizado de produção; indisponibilidade retorna BLOCKED, sem fallback/delegação automática.
- **Depende:** G1 e G2 explicitamente registrados.
- **Superfície:** futuros originais/derivados em `src/assets/`, fontes/licenças locais, `evidence/asset-register.md`; evidências visuais em `.playwright-mcp/`.
- **Ação:** produzir cérebro original alinhado ao sistema consolidado, metáfora não clínica; jamais pessoa fictícia, fundo antigo final ou cópia de referência. Inspecionar retratos reais candidatos e marca; registrar origem/autorização/limites/hash/dimensões/transformações/alt. Validar licenças reais das fontes selecionadas e distribuição local; manter notices. Derivar tamanhos/formats via pipeline do framework, sem hotlinks/runtime externo.
- **Aceite:** integração desktop/mobile coerente, pessoa identificável, sem competição com texto/CTA ou buraco quando arte falha. Cérebro não precisa ser secundário, mas hierarquia precisa sustentar autoria e leitura. Fonte falha com fallback legível e layout estável. Se qualidade do asset enfraquecer direção, refinar antes de full page.
- **Validação/evidência:** screenshots normais e bloqueio controlado de imagens/fontes; alt/decorativo, contraste real, cropping, dimensões/pesos e orçamento; build/typecheck/lint. Unit N/A para arquivos binários sem lógica; integration/rendered aplicável ao pipeline/renderização e falhas. Direito/publicação não é presumido por acesso ao arquivo.
- **Risco/rollback:** asset reprovado retorna curadoria, não se substitui pelo fundo antigo/foto gerada. Pode manter composição anterior interna enquanto refina; não entregar demo final incompleta. Custo/licença/restrição material retorna ao Maestro.

### Emenda T04 (2026-09-06): G2 autorizado e produção do asset cerebral final

- **G2 AUTORIZADO** pelo operador (“Autorizo agora”, gate-log). Produzir o asset cerebral final sob o brief vigente `evidence/ui-direction.md` §9.3: metáfora plástica não clínica; silhueta legível com dois volumes assimétricos em vista três-quartos e abertura oblíqua; lâminas curvas de relevo amplo sem anatomia fotográfica; metal neutro acetinado com estrias grandes e reflexos controlados de ameixa; luminância não compete com pele e botão; volume principal no campo inferior central com abertura orientada à área limpa do CTA; sem cérebro de fios do baseline, sem pessoa fictícia, sem filamentos sob letras/conexões do rosto/auréola; sem headline, CTA, monograma, números ou pessoas no asset; funcionar completo no desktop e reconhecível em fragmento no mobile; poster/fallback derivados.
- Qualidade controlada aqui: se o asset enfraquecer a direção consolidada, refinar **antes** da página completa; nunca substituir pelo fundo antigo nem por foto gerada.
- A integração (T05) consumirá o asset em markup Tailwind (plan §2a); hierarquia, contraste e fallback valem igualmente sobre utilities e autoral residual.

## T05 — Compor one-page completa com claims rastreáveis

- **Owner:** @ui-specialist.
- **Depende:** T04 com direção preservada; liberação de desenvolvimento completo pelo Maestro.
- **Superfície:** `src/pages/index.astro`, layout/componentes/estilos/assets, `evidence/content-traceability.md`.
- **Ação:** implementar hero/situações/abordagem/atuação/frentes comprovadas/Amanda/repertório/provas condicionais/CTA final, agrupados conforme direção. Representar atuação além da bio sem ampliar catálogo; atribuir fatos publicados proporcionalmente. Omitir módulos/títulos/âncoras sem prova e NEEDs. Head demonstrativo sem canonical/domínio/structured claims inventados. Navegação interna para destinos reais; sem barra fixa inferior.
- **Aceite:** leitura completa SSG, identidade/contexto FP desde abertura, ritmo variado e continuidade de direção; fontes/assets locais otimizados e fallback intencional. Sem nenhum botão/link contato real, embed, coleta ou operação externa.
- **Validação/evidência:** CA-01–04/09/10/12/15–17 com matriz copy/componente → fonte → qualificação; teste de links/IDs/ausência de placeholders e recursos externos; revisão de semântica/ordem/zoom/foto. Typecheck/lint/build, unit para validações se existirem, integration do HTML gerado/links, rendered em quatro larguras.
- **Risco/rollback:** UI não edita spec/research para adequar a implementação; divergência material retorna Maestro. Reverter apenas fatia problemática por edição controlada, preservando baseline e artefatos aprovados.

### Emenda T05 (2026-09-06): migração Tailwind + one-page completa

- **Fase 5a — migração 1:1 da base existente** (pré-requisito da expansão): instalar Tailwind estável vigente (reconferir registry) via `@tailwindcss/vite` em `astro.config.mjs`; criar `src/styles/global.css` (plan §2a.B/C) migrando hero-v2, Situações (**escada do operador preservada exatamente**: grupo centralizado `mx-auto w-fit`, `translate-x-8`/`translate-x-16` (2rem/4rem, conferidos no renderizado), `text-night` no 3º item), practice, next-step, contact-info, header/footer, skip-link, política de foco, véus do sculpture, fallback de mídia e reduced-motion. Verificação before/after em **1920/1440/768/390/320** + escada + foco 3px + reduced-motion com scroll + console limpo (plan §7a) antes de expandir.
- **Fase 5b — one-page completa:** implementar as funções da spec §2.2 (hero/posicionamento, situações, abordagem/atuação, frentes comprovadas, Amanda, repertório, provas condicionais — omitidas quando sem material — e CTA final), agrupadas/desdobradas conforme direção consolidada.
- **Copy:** spec §2.3 é a **única fonte de conteúdo** (emenda do operador “copy aprovada basta”); refinos de superfície sem novo claim são registrados em evidência; claims/números/cases novos voltam ao Product Gate.
- Aceites/validações originais da T05 permanecem, acrescidos da matriz de equivalência do preflight (plan §2a.C) na evidência.

## T06 — Concluir CTA acessível e motion funcional

- **Owner:** @ui-specialist.
- **Depende:** T05 (interações parciais T03 são reutilizadas, não segunda implementação concorrente).
- **Superfície:** `src/scripts/contact-info.ts`, `motion.ts`, região/acionadores/componentes/estilos e testes locais.
- **Ação:** cumprir plan §3 e spec §2.4: aviso prévio, região única não modal, foco no início, retorno ao acionador/posição correta, abrir/fechar/reabrir/recarregar sem persistência. Texto exato, sem conversa fictícia. Motion consistente da direção aprovada, separado do controlador do CTA; reduced motion desde carga e após mudança da preferência. Sem leitura esperando efeitos.
- **Aceite:** ambos os acionadores e retorno corretos; estado idempotente, zero contato/coleta/network da ação. Falha de engine não quebra CTA; falha JS oferece informação estática honesta, mas falha normal reproduzível impede aceite. Sem scroll hijack/flashes ou bloqueio mobile.
- **Validação/evidência:** unit do estado/foco/repetição e cleanup; integration/E2E dos dois CTAs, âncoras, redução, erros controlados e recarga. Rede/armazenamento/console limpos de operação externa; teclado/leitor de tela. Typecheck/lint/build/rendered e evidência temporal de movimento normal/reduzido; primeira rodada de latência conforme CA-13.
- **Risco/rollback:** não remover motion obrigatório para contornar falha; reduzir custo/revisar implementação preservando função. Mudança material da experiência retorna Maestro.

### Emenda T06 (2026-09-06): CTA e motion sob Tailwind

Estados do CTA (base night, dourado no contexto presence, hover `#ffe3a4`/active `#d8b96f` via tokens, foco reverse 3px, transition 140 ms) migram para utilities/component layer conforme plan §2a sem alterar o contrato de plan §3/spec §2.4; reduced-motion do CTA via `motion-safe:`/`motion-reduce:` equivalente 1:1. Engine de motion (WAAPI em motion.ts) **não muda**; seletores JS preservados; nenhum estilo inline novo; fallback sem JS intacto.

## T07 — Autovalidação integral UI e refinamento antes do QA

- **Owner:** @ui-specialist.
- **Depende:** T06.
- **Superfície:** correções UI sob sua ownership, `evidence/implementation-checks.md`, `evidence/performance-local.md`, `evidence/accessibility-matrix.md`, `evidence/visual-review.md`, `.playwright-mcp/`.
- **Ação:** aplicar política de skills UI acima, registrar avaliadas/carregadas/aplicação/excluídas/motivos em `visual-review.md` e executar protocolo do plan §7 integralmente na candidata build. Conferir targets preventivos e eventuais exceções documentadas/medidas da direção aprovada: não vetar tamanho/engine; exigir LCP/CLS, responsiveness, a11y, mobile, latência e ausência de regressões reais, sem relaxar CA-13. Comparar baseline com nova página em marca/autoridade/presença, hero/ritmo/tipo/recortes/profundidade e valor comercial. Refinar antes de QA se template/sem conceito, mesmo com checks técnicos verdes. Registrar revisão candidata para QA.
- **Aceite:** CA-01–18 têm evidência de implementador, nenhum PASS presumido; checks técnicos verdes não substituem qualidade. Falhas críticas de direção retornam G1 pelo Maestro, não simples patch cosmético. UI registra autovalidação de público/situação/atuação/confiança/CTA e inatividade pela rubrica acima, sem aguardar participação do operador; verificação independente cabe a T09 conforme emenda CA-15.
- **Validação real obrigatória:**
  - 320/390/768/1440, todos os blocos/estados; zoom 400% a partir de 1280, texto 200%, espaçamento WCAG 1.4.12, orientação pertinente.
  - Norma WCAG 2.2 A/AA acessível e revisão integral de critérios aplicáveis com N/A fundamentados; leitor de tela, teclado/focus, contraste real e alvos 44 px. Falha de acesso à norma/evidência resulta BLOCKED para a conferência, não conformidade inferida.
  - CA-13 exato: 390×844 e 1440×900; 4 Mb/s down, 1 Mb/s up, RTT 150 ms, CPU 4×; três cargas frias por viewport, seis resultados e duas medianas LCP <=2,5 s/CLS <=0,1. Todos os parâmetros/ambiente/data/revisão registrados e perfil verificado em loopback.
  - Cinco amostras por ação/viewport de abertura por origem, retorno e cada âncora; <=200 ms até início visual em **cada** amostra. Trace com input/primeiro frame e incerteza, não duração de handler nem INP campo. Sem telemetria; coletor apenas local no runner.
  - Vídeo/trace separado do ensaio de performance para motion normal/reduzido e troca de preferência; PNG não prova movimento. Console/rede/storage/links e bloqueio de arte/fonte.
  - Typecheck/lint/unit/integration/build/rendered executados; testes backend/migration N/A por inexistência, não dispensar testes DOM.
- **Risco/rollback:** ambiente/métrica não comparável retorna Maestro. Não mudar alvo ou ocultar falhas com média. Correção invalida evidências afetadas: repetir antes de handoff.

### Emenda T07 (2026-09-06): verificação pós-migração Tailwind

- Verificação visual comparativa before/after em **1920/1440/768/390/320** (rotina adicional da migração; CA-10/CA-13 mantêm suas larguras oficiais): escada do operador, foco 3px+offset, hover/active do CTA, véus nas três faixas, fallback `.media-unavailable`, alvos 44px/botão 56px, reduced-motion com parallax cancelado sob scroll e troca de preferência em sessão, overflow 0, console sem erros/warnings.
- **Footprint CSS medido no build** (gzip) vs target 35 KiB; exceder → exceção documentada/medida conforme plan §7, sem relaxar CA-13. Registrar também delta de JS (nenhum runtime Tailwind esperado).
- Matriz de equivalência do preflight e justificativas do autoral residual (plan §2a.C) anexadas à evidência; `base.css`/`presence.css` preservados até o aceite visual.

## T08 — Preparação operacional LOCAL e segurança da entrega

- **Owner:** @devops-specialist.
- **Depende:** T07; transferência exclusiva de escrita pelo Maestro.
- **Superfície:** `specs/as-mentorias/local-runbook.md`, configuração/scripts locais mínimos de entrega se necessários, `evidence/local-delivery-checks.md`. Sem Docker/CI/cloud por formalismo.
- **Ação:** conferir build reproduzível com lockfile e ferramentas fixadas; servir apenas saída estática em loopback, registrar URL/porta/processo e encerramento. Verificar listener, ausência de exposição LAN/túnel/directory listing/specs/evidências, source maps/arquivos internos. Documentar logs e defaults efetivos, noindex, CSP/headers compatíveis e ausência de dependência de terceiros. Não expor credenciais nem ler configs secretas.
- **Aceite:** runbook permite operar/repetir/parar candidata local, sem claim de privacidade baseado em noindex. Artefato hash/revisão, health `/` e assets necessários retornam corretamente; processo somente loopback. Preparação de deploy é recomendação futura com acesso real, nunca provisionamento/publicação.
- **Validação/evidência:** build limpo e smoke HTTP local; headers e negações de caminhos internos, bind/URL/processo, ausência de coleta/terceiros no build. Lint/typecheck dos arquivos alterados se aplicável; unit N/A se apenas runbook/config sem lógica; integration da entrega/rendered smoke obrigatórios. Se mudar serving/compressão/caching, repetir CA-13 na entrega final via retorno ao UI/QA, sem escrita simultânea.
- **Risco/rollback:** exposição involuntária → parar servidor imediatamente, reportar ao Maestro; não iniciar outro host. Rollback local para artefato anterior validado/encerramento, sem Git destrutivo. Runbook não autoriza release.

## T09 — QA independente técnico, visual e comercial

- **Owner:** @qa-specialist.
- **Depende:** T08 + checks/evidências atuais da candidata; autorização de QA local pelo Maestro. Nenhum implementador escrevendo em paralelo.
- **Superfície:** `specs/as-mentorias/qa-report.md`, evidências locais `.playwright-mcp/`; somente relatório/testes autorizados, **não corrigir código de produção**.
- **Ação:** verificar revisão/artefato/ambiente e reproduzir jornada/CA-01–18 independentemente; não aceitar baseline, relatório UI ou screenshots antigos como prova da candidata. Confirmar destino de captura. Avaliar qualidade visual/comercial independentemente pela rubrica aprovada acima e CA-15–17, não só checks verdes, sem participação do operador como condição para verdict técnico. Selecionar/carregar próprias skills QA pertinentes sob demanda, registrar aplicação/exclusões/motivos e reportar indisponibilidade sem inventar leitura. Conferir exceções documentadas/medidas aos targets preventivos sem veto de engine/tamanho, exigindo requisitos reais, ausência de regressões e CA-13 integral.
- **Aceite:** relatório com um status `APPROVED`, `REJECTED` ou `BLOCKED`, matriz de requisitos e WCAG 2.2 A/AA integral aplicável, métodos/versões/revisão/paths legíveis, falhas e N/A justificados. APPROVED somente com evidência suficiente técnica **e** visual/comercial; sem prometer conversão ou field CWV.
- **Validação:** reprodução independente dos dois CTAs/retornos/repetição/recarga, âncoras/teclado/leitor de tela, contraste/foco/zoom/reflow, assets/redução/motion temporal, console/rede/storage/privacidade e entrega local. Reproduzir CA-13 no perfil exato (seis cargas, medianas por viewport e cinco amostras por ação/viewport); não substituir por Lighthouse preset, rAF ou tempo de navegação. Confirmar checks implementadores reais e repetir os relevantes. Comparação antes/depois com público/situações/atuação/autoria/próximo passo e antitemplate.
- **Risco/handoff:** REJECTED → Maestro distribui correções ao owner e agenda reteste; BLOCKED → Maestro resolve acesso/ambiente/evidência. QA não modifica prod nem aciona implementadores. Depois de APPROVED, **STOP em G3**; proposta comercial e deploy são outros escopos/gates humanos com alvo exato.

## Handoff do planejamento

- Saídas desta fase: `plan.md` e `tasks.md`; `data-model.md` não aplicável.
- Stack recomendada: Astro/TS SSG sem React/backend sem requisito; Motion JS candidato inicial, escolha aberta UI em T03 e consolidada G1, não engine final agora.
- Matriz de atendimento dos cinco ajustes: `plan.md` §10; rastreio neste documento: (1) T03/este handoff; (2) T03/T07/T09; (3) política de skills e T01/T03/T07; (4) emenda CA-15 e T07/T09/G3; (5) dependências e T01/T03/T04.
- G0 pendente de conferência do Maestro da aprovação condicional já recebida. Se condições cumpridas, registrar G0 e liberar T01 documental sem exigir nova aprovação humana. G1 visual/sistema humano e G2 autorização do cérebro final continuam obrigatórios antes de full page; G3 só após QA APPROVED. Nenhuma evidência de implementação/teste/QA foi produzida por Architecture.
- Recomendação: **READY_FOR_ARCHITECTURE_APPROVAL — refinamentos incorporados, conferência pendente, sem self-approve. STOP — não executar estas tasks nesta revisão.**
- **Handoff da emenda 2026-09-06: READY_FOR_OPERATOR_APPROVAL** — plan/tasks emendados (Tailwind + G2 + copy §2.3); aprovação do operador é pré-condição de implementação; sem instalação/implementação nesta rodada documental. **STOP.**
