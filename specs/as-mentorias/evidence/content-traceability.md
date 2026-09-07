# T05 5b — Matriz de rastreabilidade de conteúdo (content-traceability)

Autoria: @ui-specialist, único escritor do worktree nesta rodada (micro task 5b-7, 2026-09-06). Escopo: **todo texto visível** da página renderizada (`index.astro` + `DemoLayout.astro` + `ContactAction.astro` embutido), bloco → string exata → fonte → qualificação. Copy base: **spec §2.3/§2.4 são a única fonte de conteúdo** (emenda do operador "copy aprovada basta", gate-log); refinos de superfície sem claim novo registrados como emendas operacionais. Fontes consultadas: `spec.md` (§1.1:18, §2.2, §2.3, §2.4, §4.1), `research.md` (S1/U1, linhas 88–105), `evidence/ui-direction.md` §8, `evidence/asset-register.md` §8, `gate-log.md`.

## Header (DemoLayout)

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| Contexto demo | `Conceito demonstrativo FP Solutions · não é o site oficial da AS.` | spec §2.3 (Contexto desde abertura) verbatim | Contexto de demo; discreto e legível, não é claim comercial (O1). |
| Identidade | `AS Mentorias` · `Amanda Schurnovski` (um parágrafo: `AS Mentorias · Amanda Schurnovski`) | spec §2.3 Identificação verbatim | Identidade/expectativa; fato de identidade S1/U1, sem credencial auditada (RN-03). |
| Nav — Situações | `Situações` | ui-direction §8 (microcopy de organização; rótulo listado "Situações de trabalho") | Microcopy de organização, sem claim (T01 §8); forma curta no nav = **emenda operacional vigente (gate-log)**. Destino `#situacoes` existente. |
| Nav — Atuação | `Atuação` | ui-direction §8 (microcopy de organização) | Microcopy de organização, sem claim (T01 §8); destino `#atuacao` existente. |
| Nav — Amanda | `Amanda` | ui-direction §8 (microcopy de organização) | Ídem; destino `#amanda` existente. |
| Nav — Encontro | `Encontro` | emenda §2.3b (section "O encontro"); forma curta no nav, mesmo padrão dos irmãos | Microcopy de organização, sem claim; destino `#encontro` existente (section `id="encontro"` com `tabindex="-1"`; h2 usa `id="encontro-titulo"`). Adicionado na validação combinada (2026-09-06). |
| Nav — Temas | `Temas` | ui-direction §8 (microcopy de organização) | Ídem; destino `#temas` existente (section `.repertoire`, h2 `id="temas"`). |
| Skip-link | `Pular para o conteúdo` | acessibilidade (spec RF-09; ui-direction §8) | Microcopy funcional de navegação por teclado; sem claim. |

## Hero — section `.presence` (index.astro)

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h1 | `Clareza para expor ideias e se posicionar no trabalho.` (quebras `<br>` visuais; `no trabalho.` em `<span class="text-gold">`) | spec §2.3 Hero verbatim | Aspiração, não resultado medido (spec §2.3). |
| Apoio | `Comunicação, liderança e carreira com Amanda Schurnovski. Conheça sua atuação e os temas que conectam a fala, a escuta e o posicionamento profissional.` | spec §2.3 Apoio verbatim | Descrição do campo publicado, sem promessa/resultado. |
| CTA label | `Conversar sobre meu momento` | spec §2.4 verbatim | CTA natural; sem canal real, chatbot ou coleta (O2, RN-01, RN-02). |
| Aviso | `Nesta demo, o contato não está ativo.` | spec §2.4 verbatim (aviso junto ao CTA, antes do clique) | Estado informativo honesto; RN-01/RN-02. |
| Secundário | `Conhecer a atuação` | spec §2.4 verbatim | Âncora interna para `#atuacao` existente; sem canal externo. |
| Cérebro (img) | alt vazio `""` (decorativa, contêiner `aria-hidden`) | asset-register §8.1 | Decorativa; metáfora, não prova neurocientífica (spec §3.1). Sem claim. |

## Situações — section `.situations`

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `Situações de trabalho` | ui-direction §8 (microcopy de organização; T01 §8) | Microcopy de organização, sem claim. |
| Intro | `Ao apresentar uma ideia, assumir novas responsabilidades ou conversar com a equipe, o que você diz e como escuta faz parte do seu trabalho.` | spec §2.3 Situações com travessões removidos | Divergência literal de §2.3 (`o que você diz — e como escuta —`) pela remoção dos travessões, **mesmas palavras**: **emenda operacional vigente (gate-log)** — ratificada pelo operador em G1. |
| Frase 1 | `Apresentar uma ideia.` | spec §2.2 (situações reais, derivadas de S1) | Situação editorial plausível de S1; não relato de cliente, diagnóstico ou promessa (RN-04). |
| Frase 2 | `Assumir novas responsabilidades.` | spec §2.2 (S1) | Ídem. |
| Frase 3 | `Conversar com a equipe.` | spec §2.2 (S1) | Ídem. |

## Practice — section `.practice`

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `Fala, escuta e posicionamento.` | **Composição de fragmentos aprovados**: spec.md:18 (posicionamento — "clareza ao expor ideias, escuta e posicionamento no trabalho") + spec §2.3 Temas ("Posicionamento, presença na fala e escuta ativa") | Título de organização derivado dos fragmentos aprovados; sem claim novo; sentidos e limites preservados (spec §2.3, nota introdutória). |
| Abordagem | `Posicionamento, presença na fala e escuta ativa são o campo que pode ser explorado com a AS. Comunicação, liderança e carreira: clareza ao expor ideias, escuta e posicionamento no trabalho.` | 1ª frase: composição de spec §2.2 abordagem + §2.3 Temas. 2ª frase: fragmentos de spec.md:18 + §2.3 Temas | Sem claim novo; sentidos e limites preservados. Dois-pontos no lugar do travessão = **emenda operacional vigente (gate-log)** (diretiva anti-travessão, C2 5b-7). |
| Proveniência | `Posicionamento, presença na fala e escuta ativa são temas da divulgação do workshop “Destravando sua Liderança e Oratória”. Uma iniciativa divulgada pela AS, não uma oferta ativa nesta demonstração.` | spec §2.3 Temas/Origem + §2.2 abordagem + §4.1 (Workshop) | **RN-05**: iniciativa divulgada, não oferta ativa; sem realização, vagas, gratuidade ou agenda vigente (S1/U1 P, sem vigência). |
| (removido em 5b-7) | ~~`Amanda Schurnovski é apresentada no site da AS como mentora...` (parágrafo da practice)~~ | — | Bio duplicada REMOVIDA da practice (C1); a bio existe APENAS na section `.about` (ver abaixo). Sem alteração de copy aprovada. |

## Next-step — bloco `.next-step` (dentro de practice)

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h3 | `Que momento da sua vida profissional pede mais clareza?` | spec §2.3 Fechamento verbatim | Pergunta de fechamento; **não há campo de resposta** (RN-01). |
| CTA closing | `Conversar sobre meu momento` + aviso `Nesta demo, o contato não está ativo.` | spec §2.4 verbatim (mesmo contrato do hero) | Mesma região informativa única (`#contact-info`); sem conversa fictícia, formulário ou envio (RF-06/07). |

## About — section `.about`

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `Amanda Schurnovski` | spec §2.2 função Amanda + S1/U1 (nome) | Identificação; fato publicado atribuído, não credencial auditada (RN-03). |
| Bio §1 (destaque) | `Mentora de comunicação, liderança e carreira, Amanda ajuda profissionais a vencerem o medo do julgamento e a usarem a voz para ocupar os lugares que sempre desejaram.` | spec §2.3b bio verbatim (site oficial, O4) | **RN-03**: atribuição à fonte via proveniência da bio; apresentação, não verificação independente. Substitui a frase de atribuição §2.3 na bio (emenda de enriquecimento, ver Notas). |
| Bio §2 | `Formada em Letras e Educação Física, com pós-graduações em Ensino de Línguas e em Neuropsicopedagogia, sua jornada começou em mais de 13 anos de sala de aula.` | spec §2.3b bio verbatim (site oficial, O4) | **RN-03**: credenciais acadêmicas e tempo de sala atribuídos à fonte; apresentados como publicados, não auditados. |
| Bio §3 | `Hoje, como fundadora da AS Mentorias, escritora e colunista, ela ensina profissionais a se comunicarem com elegância, clareza e autoridade. Guiada pela filosofia de que, quando a sua voz muda, a sua vida acompanha.` | spec §2.3b bio verbatim; `[A]JS Mentorias` → `AS Mentorias` | Grafia da fonte corrigida para o canônico do projeto: **decisão do operador (gate-log, emenda §2.3b)** — spec grafa verbatim `[A]JS`; atribuição à fonte preservada pela proveniência. |
| Proveniência | `Conforme site oficial da AS.` | spec §2.3b proveniência + RN-03/O4 | Substitui `Biografia conforme publicação da própria AS.`; atribuição única, discreta, após a bio completa. |
| Badge 1 | `Membro · Sociedade Brasileira de PNL` | spec §2.3b badges verbatim (site oficial) | **RN-03**: credencial apresentada, atribuída à fonte, não auditada. |
| Badge 2 | `Colunista · Revista A Cúpula` | spec §2.3b badges verbatim | Ídem. |
| Badge 3 | `Escritora` | spec §2.3b badges verbatim | Ídem. |
| Badge 4 | `+13 anos em sala de aula` | spec §2.3b badges verbatim | Ídem. |
| Alt do retrato | `Amanda Schurnovski, mentora de comunicação, liderança e carreira` | spec §2.3 Bio + research S1/U1; O4 | Identifica sem inferir competência/resultado (xadrez não comprova nada); registro asset-register §8.2 (alt aprovado). |

## O encontro — section `.encontro` (nova, emenda §2.3b)

Seção criada entre `.about` e `.repertoire` (emenda §2.3b, autorização operador 2026-09-06). Fondo `bg-mineral` escolhido para ritmo (about=paper → encontro=mineral → repertoire=paper). Estrutura IA: quem conduz (referência à Amanda, bio na `.about`) → o que apresenta (temas do workshop, §2.3b/§2.2) → filosofia em display tipográfico. Duração/formato/datas/preço: `[NEED: evidência]` fica FORA da página (RN-04 — nada inventado); pendência registrada na spec, não na UI. `#encontro` é o destino de âncora (section com `tabindex="-1"`, aria-labelledby → h2 `id="encontro-titulo"`; id único — não se usa `id="encontro"` no h2 porque a section já o carrega).

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `O encontro` | spec §2.3b (fonte: seção “QUEM CONDUZ O ENCONTRO”; forma curta da emenda) | Título de organização; sem claim. |
| Condução | `O encontro é conduzido por Amanda Schurnovski, fundadora da AS Mentorias.` | spec §2.3b O encontro (conduzido por Amanda) + bio §2.3b (fundadora, grafia canônica AS Mentorias — decisão operador) | Referência de 1 linha à condução; bio completa permanece na `.about` (sem duplicação). **RN-03/O4**. |
| O que apresenta | `Apresenta posicionamento, presença na fala e escuta ativa: temas da divulgação do workshop “Destravando sua Liderança e Oratória”.` | spec §2.3b O encontro (temas do workshop vigente) + §2.2 IA (temas) | **RN-05**: divulgação, não oferta ativa; composição dos fragmentos aprovados, dois-pontos no lugar do travessão (C2, emenda operacional vigente). |
| Proveniência | `Temas conforme divulgação oficial da AS. Uma iniciativa divulgada pela AS, não uma oferta ativa nesta demonstração.` | spec §2.3b proveniência + §4.1/RN-05 | Atribuição à fonte; iniciativa divulgada, sem oferta/realização/vigência (S1/U1 P). |
| Filosofia | `Quando a sua voz muda, a sua vida acompanha.` | spec §2.3b (filosofia da marca) | Display tipográfico SEM aspas de citação (filosofia, não depoimento — RN-04); fragmento também presente dentro da bio §3 (recorte intencional em destaque). |
| (omitido da página) | Duração, formato, datas, periodicidade, condições | spec §2.3b `[NEED: evidência]` | Omitido por decisão: sem evidência, sem fabricação (RN-04); pendência fica na spec, não na UI. |

## Repertório — section `.repertoire`

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `Temas` | ui-direction §8 (microcopy de organização; T01 §8) | Microcopy de organização, sem claim. |
| Citação | `“Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.”` | research S1/U1 (linha 103; atribuída a Amanda) + spec §4.1 (Citação de Amanda) | **Pensamento assinado, NÃO depoimento** (RN-04); pode integrar repertório; não prova social, não resultado de cliente. |
| Atribuição | `Amanda Schurnovski` (footer do blockquote) | S1/U1 | Assinatura da citação própria; não depoimento (RN-04). |
| Proveniência | `Temas da divulgação do workshop “Destravando sua Liderança e Oratória”: posicionamento, presença na fala e escuta ativa.` | spec §2.3 (Temas + Origem — composição das duas frases aprovadas, sentidos e limites preservados) | **RN-05**: iniciativa divulgada, origem rastreável a S1; sem oferta ativa/campanha. |

## Sobre o próximo passo — section `.contact-info`

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| h2 | `Sobre o próximo passo` | spec §2.4 verbatim (título da região revelada) | Região informativa única da página; sem canal ativo. |
| Texto | `Em uma versão publicada e autorizada, este botão poderá levar ao canal de contato aprovado. Nesta demonstração, nenhum contato é iniciado e nenhum dado é solicitado ou enviado por esta ação.` | spec §2.4 verbatim | RN-01/RN-02: sem contato, coleta ou envio; limite da demo, não etapa comercial. |
| Botão | `Voltar à página` (atributo `hidden`; controlado por script) | spec §2.4 (ação Voltar à página) | Microcopy de controle; oculta região e restaura foco ao acionador correto (RF-07). Sem envio. |

## Rodapé (DemoLayout)

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| Linha 1 | `PROTÓTIPO INTERNO · estudo visual provisório.` | contexto demo (spec §2.3 Rodapé + O1) | Marca o status interno; sem claim. |
| Linha 2 | `Conceito FP Solutions baseado em conteúdo publicado pela AS. Sem atendimento ou oferta ativa.` | spec §2.3 Rodapé (apresentação demonstrativa FP baseada em conteúdo publicado AS; não atendimento ou oferta ativa) | RN-01/O3; sem atendimento ou oferta ativa. |

## Anexo — head (não visível na página; registrado por completude e pela exceção C2)

| Bloco | String exata | Fonte | Qualificação |
|---|---|---|---|
| `<title>` | `AS Mentorias — conceito FP Solutions` | spec §2.3 Identificação + contexto demo | **Tab do browser, não microcopy — travessão NÃO editado** (exceção C2, instrução do operador 5b-7); registrado como ocorrência vigente. |
| `<meta name="description">` | `Conceito demonstrativo FP Solutions para AS Mentorias. Não é o site oficial.` | spec §2.3 contexto (paráfrase) | Head demonstrativo sem canonical/domínio (spec §8/plan); sem claim. |

## Conformidade anti-travessão (C2 — 5b-7)

Varredura pós-edição sobre todo texto visível da página (index.astro, DemoLayout.astro, ContactAction.astro):

- **Abordagem (practice):** `carreira — clareza` → `carreira: clareza` (C2, mesmas palavras).
- **Nenhum outro `—` ou `--` em microcopy visível.** Ocorrências restantes de `--`/`---` no `src/` são sintaxe (variáveis CSS, delimitadores de frontmatter), não texto da página.
- **Ocorrência registrada, não editada:** `<title>` `AS Mentorias — conceito FP Solutions` — tab do browser, exceção C2 (instrução do operador).
- Intro de Situações já sem travessões (emenda ratificada em G1, gate-log) — confirmada vigente.

## Notas de manutenção

- Qualquer string nova ou alterada que introduza claim/número/case retorna ao Product Gate (tasks T05 Emenda; gate-log "Copy: aprovada basta").
- Divergências literais vs spec §2.3 vigentes nesta página, todas registradas como emendas operacionais: (1) intro de Situações sem travessões; (2) dois-pontos na abordagem; (3) forma curta `Situações` no nav. A spec NÃO foi editada nesta rodada.
- Consulta: nav `#temas` ↔ section `.repertoire` (`aria-labelledby="temas"`, h2 `id="temas"`) confirmada em 5b-7/C4 sem edição.

## Emenda de enriquecimento §2.3b (2026-09-06)

Fonte autorizada: spec §2.3b (linhas 89–111; transcrição da seção “QUEM CONDUZ O ENCONTRO” do site oficial da AS; O4 + RN-03 + RN-04 + RF-05). Aprovação: operador. Alterações na página:

1. **Bio completa** (`.about`): os 3 parágrafos verbatim de §2.3b substituem a frase de atribuição de §2.3 (`Amanda Schurnovski é apresentada no site da AS como mentora...`), que deixa de existir na página; a atribuição à fonte migra para a proveniência única `Conforme site oficial da AS.` Tipografia: §1 destaque `text-lg sm:text-xl`, §2/§3 `text-base sm:text-lg`.
2. **Correção canônica AS Mentorias**: a fonte grafa `[A]JS Mentorias`; **decisão do operador (gate-log)** mantém `AS Mentorias` canônico em toda a copy — aplicado na bio §3, na condução do Encontro e onde mais ocorrer. Atribuição à fonte preservada.
3. **Badges ×4** (`.about`, pós-bio): lista tipográfica `text-sm font-semibold tracking-[0.08em] uppercase`, sem chips/logos/gradientes; hierarquia com linha fina `border-t border-muted pt-4`. Strings verbatim de §2.3b.
4. **Nova section "O encontro"** (`.encontro`, `#encontro`, entre `.about` e `.repertoire`): decisão de ritmo — `bg-mineral` (about=paper → encontro=mineral → repertoire=paper),`grid 1.2fr/1fr` com filosofia em display na coluna direita. Quem conduz (1 linha) + o que apresenta + filosofia em destaque. `[NEED: evidência]` (duração/formato/datas/preço) omitido da página.
5. **Pendência de nav (RESOLVIDA na validação combinada, 2026-09-06)**: âncora `Encontro` → `#encontro` adicionada ao nav do `DemoLayout.astro` (entre Amanda e Temas, mesmo padrão dos links existentes); ver item "Nav — Encontro" na tabela Header e Passo 8 de `latency-motion.md` (foco no section confirmado). Destino focável (`tabindex="-1"` na section, padrão de foco existente).
6. Sem alteração de `motion.ts`, `DemoLayout.astro`, spec, research ou gate-log nesta rodada. Build/teste/preview NÃO executados (fora do território; validação combinada posterior).
