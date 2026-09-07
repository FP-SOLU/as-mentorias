# Research as-mentorias: refinamento Product da transformação comercial

**Status: READY_FOR_PRODUCT_APPROVAL — aprovação Product condicional recebida; incorporação documental pronta para conferência do @maestro. Não é autoaprovação ou Architecture Gate aprovado.**

A base externa conserva **2026-09-05**, data da pesquisa inicial/auditoria UI. Esta rodada é síntese dos ajustes explícitos do operador e Growth atualizado, sem nova observação dos sites, inspeção visual ou teste. Data civil desta revisão não foi aferida; não atribuir à revisão a data da pesquisa histórica.

## 1. Perguntas Investigadas

- **Transformação comercial:** como demonstrar mudança significativa de marca, autoridade e presença, em vez de apenas apresentação editorial bonita? Motivo: exigência expressa do operador.
- **IA e evidência:** como acomodar atuação, repertório e confiança sem cinco seções fixas ou catálogo fabricado? Motivo: preservar conteúdo publicado válido e distinguir publicação de resultado independente.
- **CTA:** como manter intenção comercial sem contato, coleta ou conversa fictícia? Motivo: substituir integralmente a recomendação anterior pelo contrato informativo de Growth.
- **Ambição visual:** como tornar premium/autoral/memorável e motion obrigatórios verificáveis sem escolher sistema, assets ou implementação? Motivo: handoff funcional para Architecture/UI/QA.
- **Gate:** como registrar aprovação condicional sem autoaprovação? Motivo: @maestro deve conferir o atendimento antes de encaminhar Tech.

### 1.1 Decisões do operador

| ID | Decisão confirmada | Consequência |
|---|---|---|
| O1 | Demo privada FP para futura apresentação à prospect; não site oficial AS | Objetivo comercial demonstrativo, não aquisição real ou receita alegada. |
| O2 | Demonstrar sem contato, envio, reserva ou coleta; retirar simulação de conversa | “Conversar sobre meu momento”, aviso prévio de contato inativo, região informativa e retorno. Sem chatbot/fala fictícia. |
| O3 | Sem materiais adicionais; usar evidências disponíveis | Não bloquear por catálogo ausente nem eliminar fatos publicados confiáveis automaticamente. Módulos sem evidência são condicionais internos. |
| O4 | Material do site/Instagram autorizado pelo operador para demo/apresentação; recriar cérebro após direção/design system consolidados | Autorização declarada, não auditoria de direitos ou publicação permitida. Não reutilizar cérebro atual como asset final; não produzir agora. Instagram parcial permanece limite. |
| O5 | One-page profissional/editorial Amanda + AS, reconstrução substancial, IA extensível e identidade reconhecível | Sem teto de cinco seções; paleta/fontes/tokens ABERTOS UI/Architecture. Não copiar referências. |
| O6 | Só research/spec nesta rodada; sem stack/plan/tasks/implementação/assets/publicação | Demo privada não indexável. Proposta/preço FP somente após demo e QA APPROVED em outro escopo. |
| O7 | “APPROVED WITH REQUIRED PRODUCT REFINEMENT”; “Após incorporar esses ajustes, considero o PRODUCT GATE APPROVED. Prossiga então para Tech Architect / Architecture Gate. Ainda não implemente antes do Architecture Gate.” | Product incorpora; @maestro confere condição e só então pode encaminhar Tech. Architecture mantém gate próprio; Product não aciona Tech. |
| O8 | VISUAL AMBITION e motion obrigatórios, exploração antes da implementação completa, Playwright renderizado e QA visual independente | Requisitos funcionais e critérios futuros na spec; nenhuma qualidade renderizada comprovada nesta rodada. |

Bloqueios iniciais de finalidade/CTA/material/formato foram resolvidos pelo operador. Não reabrir discovery. Capturas antigas foram movidas pelo operador para dentro do projeto e mapeadas por UI; isso não verifica configuração de futuras capturas.

## 2. Fontes Consultadas

### 2.1 Consulta desta rodada e governança

| ID | Fonte / tipo | Consulta e evidência relevante |
|---|---|---|
| G1 | `W:\FP\as-mentoria-concept\AGENTS.md`; `C:\Users\felip\.dsh\AGENTS.md` / governança | Lidos nesta revisão: Astra obrigatório, ownership, gates, limites. Descoberta no workspace encontrou apenas AGENTS local; CLAUDE global e AGENTS/CLAUDE em `W:\FP` não encontrados. Acesso a AGENTS/CLAUDE em `W:\` negado pelo MCP; sem retry/escalada, não inferir inexistência. |
| G2 | Obsidian `04-Engineering/ADRs/ADR-017-spec-kit-sdd.md` / institucional | Leitura registrada na síntese anterior, reutilizada por atribuição: artefatos specs, rastreabilidade, YAGNI. Não relido nesta revisão. |
| G3 | Obsidian `40-governanca/ADRs/ADR-038-pipeline-global-subagentes-codex.md` / institucional | Relido nesta revisão: Product → gate → Tech → Architecture Gate; escritor único e QA independente; evidência para claims. Routing local prevalece sobre mapa legado. |
| G4 | Obsidian busca `as-mentoria` / contexto institucional | Consulta nesta revisão sem resultados; não comprova inexistência de notas, ADRs ou Known Issues em todo o vault. Nenhuma memória escrita. |
| P1 | `specs/as-mentorias/spec.md` e `research.md` anteriores / produto | Lidos integralmente antes de substituir: identificados limites de cinco seções, conversa fictícia, paleta sugerida e motion tratado como dispensável; decisões substituídas pela presente revisão. |
| GR1 | `specs/as-mentorias/growth-input.md` atualizado / Growth | Lido integralmente: objetivo comercial, oito funções de IA, CTA/estado informativo, sistema aberto, motion obrigatório e aprovação condicional. Insumo incorporado, não aprovação independente. |
| U1 | `specs/as-mentorias/evidence/current-site-audit.md` / auditoria UI | §9, mapa/localização atual e conclusões lidos nesta revisão. Diagnóstico anterior reutilizado por atribuição, não nova inspeção Product dos PNGs. UI registra 15 D1–D6/M1–M9 movidos pelo operador, nomes/tamanhos confirmados em `W:\FP\as-mentoria-concept\.playwright-mcp\`. Configuração futura MCP não validada. |
| L0 | `C:\Users\felip\.dsh\references\README.md`, `ui\README.md`, `ui\landing-pages\README.md` / índices | Relidos: referências inspiram sem cópia; landing-pages predominantemente SaaS, não modelo AS. Link ecommerce do índice diverge do diretório real anteriormente registrado `ui\ecommerce`. |
| L1 | `ui\ecommerce\39-hyer.md` e `.png` / ficha/capa | Evidência inicial textual/visual reutilizada, coleta declarada 2026-09-02. Não reinspecionadas agora; capa não equivale a site atual. |
| L2 | `ui\ecommerce\36-mouthwash.md` e `.png` / ficha/capa | Evidência inicial reutilizada; “Issue 03 / Spring Summer 2021”, não design vigente presumido. |
| L3 | `ui\landing-pages\04-supercut.md` / triagem Growth anterior | Ficha textual, PNG não inspecionado; SaaS não adotado como modelo AS. |
| O | Pedido atual do operador / decisão primária | O7/O8 e quatro ajustes obrigatórios; não são pesquisa externa ou prova comercial. |

Runtime informa Astra; medium solicitado para síntese explícita, sem auditoria de headers/effort por esta sessão. Sem subdelegação. Não existe shell disponível para aferir cwd/data; caminhos absolutos fornecidos delimitam os dois arquivos escritos.

### 2.2 Fontes públicas e referências externas — evidência histórica, não reabertas

Consulta original: **2026-09-05**, salvo coleta local identificada acima. S1/S2 por U1; S3–S5/R1–R6 pela pesquisa inicial preservada. Não houve necessidade de repetir pesquisa web nesta síntese de decisões explícitas.

| ID | Fonte / tipo | Evidência relevante e limite |
|---|---|---|
| S1 | https://asmentorias-beep.github.io/destrave-sua-lideranca-e-oratoria/ — própria via U1 | Workshop, públicos, temas, biografia, CTAs/assets; comprova publicação, não resultado independente. |
| S2 | https://www.instagram.com/asmentorias.oficial/ — própria parcial + snippets | Bio auditada/indexada divergem. Posts/destaques não lidos integralmente; não fundir versões ou inferir catálogo. |
| S3 | https://br.linkedin.com/in/amanda-schurnovski — snippet | Nome/comunicação/Instituto Brasileiro de Mentoring; fetch 999, perfil não lido, identidade cruzada sem link recíproco confirmado. |
| S4 | https://www.linkedin.com/posts/amanda-schurnovski_morning-activity-7483821554066325504--eyc — snippet | Títulos/associação AS; post/credenciais não validados. |
| S5 | https://www.instagram.com/reel/Da2jHlPgeAZ/ — snippet | “Esperar acontecer ou fazer acontecer? A escolha é única e exclusivamente nossa”; reel não assistido, sem prova de serviço/resultado. |
| R1 | https://dorieclark.com/ — oficial, texto extraído | Pessoa/proposta, speaking/courses/books/resources/contact, depoimentos nomeados; sem inspeção visual. |
| R2 | https://www.marshallgoldsmith.com/ — oficial, texto extraído | Missão, executive coaching, recursos/livros e depoimentos atribuídos; sem inspeção visual. |
| R3 | https://escolaconquer.com.br/ — oficial, texto extraído | Profissionais/empresas, categorias e aprofundamento/contato; sem inspeção visual. |
| R4 | https://www.flyhyer.com/ — oficial, texto extraído | “Flights, stays and personalised experiences”; versão textual diferente da capa L1. Não unir versões. |
| R5 | https://www.dalecarnegie.com/pt-br e https://www.dalecarnegie.com/pt-br/topics/leadership-development — busca oficial | Referência setorial secundária; home sem extração legível, não página integralmente analisada. |
| R6 | https://www.lailavanetti.com.br/ e https://www.lailavanetti.com.br/qualificacao — busca/extração parcial | Qualificação indexada sobre linguagem/argumentação; home shell/placeholder, insuficiente para jornada/aparência. |
| N1 | https://www.w3.org/TR/WCAG22/ e https://www.w3.org/WAI/WCAG22/quickref/ — normativa pretendida | Tentativas anteriores retornaram “No readable content”. Não afirmar norma integralmente lida/validada. Conferência oficial futura exigida para WCAG 2.2 AA, além dos CAs concretos. |

Histórico preservado: DuckDuckGo trouxe resultados Amanda; Bing falhou com 301; buscas AS/Cúpula e Amanda/colunista sem confirmação na amostra, não inexistência. `https://www.escoladeoratoria.com.br/` não resolveu e não integra benchmark. Sem login, bypass ou contato.

## 3. Fatos Confirmados

### 3.1 Taxonomia

- **P:** publicação em fonte própria confiável; permite narrativa proporcional atribuída, não certifica resultado independente.
- **IDX:** snippet intermediado, potencialmente desatualizado; não confirma perfil/post completo, serviço ou credencial.
- **IND:** comprovação independente específica. Nenhuma obtida para claims AS nesta base; redes próprias não são independentes.
- **INF:** inferência/recomendação; não validação de mercado.
- **AUS:** ausente na amostra, não prova de inexistência.
- **O:** declaração do operador, não evidência independente sobre AS.
- **[NEED: evidência]:** condição interna; nunca copy pública, espaço reservado ou obrigação de inventar material. Omitir módulo sem evidência, não todo conteúdo P válido.

### 3.2 Matriz de claims e decisão de uso

| Claim / conteúdo observado | Fonte / classificação | Uso proporcional e condição interna |
|---|---|---|
| Mentora de comunicação, liderança e carreira; fundadora AS | S1/U1 P, sem IND | Incluir atuação/bio atribuídas; não credencial auditada. Mentoria como atuação declarada, não pacote comprovado. |
| Workshop “Destravando sua Liderança e Oratória” | S1/U1 P | Pode demonstrar iniciativa divulgada e origem de temas; não prova de realização, operação atual ou catálogo. |
| “Workshop gratuito · Vagas limitadas”; “Sábado, 12 de setembro · 10h · Online e ao vivo” | S1/U1 P, sem vigência | Omitir campanha/agenda/escassez. [NEED: ano, fuso, vigência, capacidade e condições] para futura ativação; copyright 2026 não resolve data. |
| “Em 50 minutos”; sem gravação posterior | S1/U1 P | Condições daquela divulgação, não mentoria geral; não integrar oferta demonstrada. |
| Falar com segurança, influenciar pessoas, destravar presença executiva | S1/U1 P promocional | Clareza/presença como intenção, nunca garantia/resultado contratado ou medido. |
| Gestores/líderes/coordenadores, ascensão, mulheres executivas, voz travada | S1 P, público do workshop | Sustenta público provável; situações editoriais de liderança/comunicação/carreira sem exclusividade de gênero, patologização ou validação de demanda. |
| Posicionamento, presença na fala e escuta ativa | S1/U1 P | Temas rastreáveis, abordagem temática e repertório com origem; não serviços, exercícios ou etapas de método. |
| Formação em Letras/Educação Física; pós-graduações em Ensino de Línguas/Neuropsicopedagogia | S1/U1 P, sem IND | Pode integrar trajetória com atribuição fiel à bio, quando pertinente. [NEED: documentos] para chamar de verificada; sem inferir habilitação clínica/eficácia. Não omitir automaticamente por ausência de IND. |
| “mais de 13 anos de sala de aula” | S1/U1 P | Eventual menção atribuída ao texto publicado, preservando natureza docente; nunca “13 anos de mentoria executiva”. [NEED: período/base] para número atual não atribuído. |
| Escritora/colunista, Revista A Cúpula, Sociedade Brasileira de PNL | S1/U1 P, sem IND | Eventual menção fiel e atribuída à bio não equivale a filiação vigente auditada. [NEED: obra/artigo/registro vigente] para exibição específica ou selo verificado; sem acervo inventado. |
| “Comunicação Executiva & Presença de Liderança”; “Lidero A Cúpula” | S2/U1 P parcial | Primeiro trecho apoia eixo editorial; não fundir bios. Cargo específico depende de contexto direto suficiente antes de uso. |
| “Comunicação para empreendedores e futuros líderes In-company \| Individual” | S2 IDX | Omitir formatos/CTA empresarial; [NEED: fonte direta e escopo]. Não prova inexistência desses serviços. |
| “Mentora \| Professora \| Método PV™” | S2 IDX | Omitir método; [NEED: definição, autoria, escopo e evidência]. ™ não comprova registro/eficácia. |
| Neuro-Oratória/Perfil DISC, Proprietária AS, Oratória para Mulheres | S4 IDX, identidade provável não validada | Omitir títulos/programa; [NEED: identidade, qualificação, oferta vigente]. |
| Instituto Brasileiro de Mentoring (IBM) | S3 IDX | Omitir; não inferir diploma/curso concluído nem vínculo com empresa de tecnologia IBM. |
| “Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.” | S1/U1 P, atribuída a Amanda | Pode integrar pensamento assinado/repertório. Nunca depoimento ou prova social; não impor aparência/elegância como condição de autoridade. |
| Cases, resultados, clientes, métricas, depoimentos | AUS; destaque “Resultados” insuficiente | Módulo condicional omitido enquanto sem prova. [NEED: evidência específica, contexto e autorização]; sem logos, números ou depoimentos simulados. |
| “Garantir minha vaga no WhatsApp” | S1/U1 P; href observado | Link atual inicia conversa, não prova reserva. Substituir pelo contrato informativo sem canal real da spec §2.4. |

### 3.3 Diagnóstico visual e oportunidade comercial

Por atribuição a U1 §9 (D1–D6/M1–M9), não nova inspeção:

- Landing atual: workshop → públicos → assuntos → citação → biografia → conversão. Sem catálogo institucional/acervo/cases verificáveis na amostra.
- Identidade observada: escuro/azul, serifas claras/douradas, bordas, CTA verde, retratos e cérebro. **Descrição do existente, não paleta/tipografia futura recomendadas.**
- Fricções: cérebro atrás de texto/CTAs compete com leitura; agenda fragmentada no mobile; CTA secundário parcialmente sob barra fixa na primeira dobra, recuperável por scroll; grids repetidos alongam percurso; marca/rodapé muito pequenos.
- Oportunidade: transformar campanha datada em presença comercial com marca, relevância, atuação, autoria, repertório, confiança proporcional e próximo passo. Não limitar ambição a corrigir as fricções.
- Limites U1: sem contraste medido, zoom integral, leitor de tela, motion, aparelho físico ou benchmark. Ausência de overflow apenas nas duas larguras amostradas. Tempos de navegação não são Core Web Vitals/baseline; favicon 404 não define estratégia. Instagram parcial, sem extrapolar visual de posts.

### 3.4 Materiais e direitos

Base dos arquivos: S1. O4 autoriza uso no contexto demo/apresentação, não audita direitos.

| Material | Evidência e tratamento |
|---|---|
| `logo-as.png`, nome/marca | Vistos header/footer U1; candidatos de reconhecimento, nome legível. Não impor redesenho ou herança cromática. |
| `amanda-xadrez.jpeg` | U1 D5/M7; retrato candidato real. Preservar identificação; xadrez não comprova competência/resultado. Recorte final por UI. |
| `amanda-reflexao.jpg` | U1 faixa com retrato sentado; candidato disponível, sem obrigar módulo duplicado ou texto sobre rosto. |
| `fundo-metodo-pv.jpg` / cérebro atual | U1 viu fios/pontos dourados e ondas em textura azul. Não usar como asset final; recriar depois de direção/sistema consolidados e autorização da etapa. Metáfora, não prova neurocientífica. |
| Textos, bio e citação | S1 rastreável; selecionar/parafrasear com atribuição proporcional. |
| Fotos/posts Instagram | Acesso parcial; autorização não substitui inspeção/evidência, nenhum material novo selecionado. |
| Cormorant Garamond/Jost atuais | Identificados em U1, não seleção futura ou validação de licença/distribuição. |
| Capas/assets de referências | Inspiração, nunca importação de marca, imagem, texto ou layout proprietário. |

Privacidade não resolve direitos automaticamente. Restrição concreta ou uso público exige revisão com operador/titulares; não há publicação autorizada.

## 4. Hipóteses

- **Público provável:** profissionais em liderança/ascensão, mulheres transversalmente. S1/S2 apoiam recorte, não pesquisa de compra. Evidência necessária: avaliação qualitativa e eventual pesquisa em escopo futuro.
- **Valor comercial:** situações concretas + atuação compreensível + autoria/evidência + próximo passo natural e direção visual própria tornarão a apresentação mais útil e convincente como peça FP. Evidência necessária: comparação qualitativa renderizada, não alegação de conversão ou receita.
- **Posicionamento:** clareza, escuta e posicionamento no trabalho conectam comunicação/liderança/carreira sem ampliar oferta. Não é superioridade competitiva comprovada.
- **Formato:** one-page extensível concentra leitura sem inventar acervo multipágina. Workshop ativo exigiria vigência; institucional multipágina exigiria conteúdo adicional; híbrido genérico não acrescenta requisito. Isso não proíbe atuação/serviços comprovados dentro da one-page.
- **Referências:** Hyer L1/R4 ajuda foco e relação sujeito/leitura; Mouthwash L2, autoria/ritmo; Dorie Clark R1, pessoa/proposta/aprofundamentos; Goldsmith/Conquer, substância e distinção descobrir/contatar. Não transferir catálogo/autoridade, copiar layout ou unir versões. R5/R6 insuficientes para aparência/jornada.
- **Limite visual:** só capas L1/L2 foram analisadas visualmente na pesquisa inicial; R1–R3 são texto. Motion, interações e conversão das referências não foram auditados. **Motion é obrigatório por decisão do operador, não por benchmark inventado.**

## 5. Impacto na Especificação

### 5.1 Matriz de atendimento dos quatro ajustes e ambição

| Ajuste / descoberta | Incorporação | Requisitos/aceite afetados |
|---|---|---|
| 1. Não restringir a cinco seções | IA extensível: Hero/posicionamento; situações reais; abordagem/formas; mentorias/serviços/frentes comprovadas; Amanda; temas/repertório; provas verificáveis condicionais; CTA final. Não obrigar oito blocos, não criar placeholders. P válido aproveitado proporcionalmente. | Spec §2.2/4.1; RF-02–05; RN-03–05/08; CA-02–03 |
| 2. Retirar conversa fictícia/chat | CTA “Conversar sobre meu momento” hero/final; aviso de contato inativo antes do clique; região informativa única com foco, retorno correto e reabertura sem histórico. Sem dados/contato/envio. | Spec §2.3–2.4/5; RF-06–08; RN-01–02; CA-05–06 |
| 3. Paleta/tipografia/sistema abertos | UI/Architecture definirão paleta, display/body, escala/pesos/tracking/line-height responsivos e tokens. Sem azul/acento quente fixos ou Inter/Arial automáticos; reconhecimento não é cópia. | Spec §3.1; RF-11/13; CA-16 |
| 4. Transformação COMERCIAL central | Marca/autoridade proporcional/presença e próximo passo, não só editorial bonita ou biografia. Demo como peça de venda FP sem promessa de resultado AS/receita. | Spec §1.1/2; RF-03–05/11; CA-15/17 |
| VISUAL AMBITION e motion | Premium autoral memorável contemporâneo altamente polido, arte forte, hero principal e linguagem própria; motion consistente obrigatório com função, reduced motion equivalente. Exploração/refino e QA visual. | Spec §3.1; RF-09–13; RN-09; CA-11/13/16–18 |
| Aprovação condicional | Declaração O7 e matriz espelhadas; @maestro confere antes de encaminhar Tech, Architecture Gate próprio | Spec §1.2–1.3/8; nenhum gate executado por Product |

**Todas as linhas incorporadas documentalmente; atendimento ainda sujeito à conferência do @maestro.** Não se registra autoaprovação, implementação ou teste.

### 5.2 Contrato informativo incorporado

- Contexto inicial: **“Conceito demonstrativo FP Solutions · não é o site oficial da AS.”**
- Principal: **“Conversar sobre meu momento”**; junto a cada ação: **“Nesta demo, o contato não está ativo.”** Secundário: **“Conhecer a atuação”**, âncora existente.
- Ação revela uma região **“Sobre o próximo passo”** com foco no início e texto: **“Em uma versão publicada e autorizada, este botão poderá levar ao canal de contato aprovado. Nesta demonstração, nenhum contato é iniciado e nenhum dado é solicitado ou enviado por esta ação.”**
- **“Voltar à página”** oculta e restaura foco/contexto ao acionador correto. Reabertura igual, sem duplicação/histórico/persistência.
- Não há fala fictícia, avatar, chatbot, indicador de digitação, resposta Amanda, seletor de problema, formulário, mensagem preparada ou confirmação de envio. Não usar rótulo de simulação de primeira conversa.
- Canal real só mediante autorização futura de alvo/destino/consentimentos/operação; nenhuma preferência por WhatsApp. Estado informativo não é etapa comercial obrigatória futura.

### 5.3 Ambição e validação futura

- UI deve derivar linguagem própria de Amanda, comunicação, liderança, pensamento, presença e transformação, consultando índices locais landing-pages e referências externas fortes pertinentes, sem copiar. Referências atuais não limitam a ambição.
- Hero é a peça principal: explorar retrato + display expressiva + cérebro original e profundidade/layering/luz/assimetria/interação, sem impor soma de efeitos e preservando clareza. Cérebro só recriado após direção/sistema consolidados; não asset atual nem produção nesta rodada.
- Ritmo variado em escala, whitespace, overlap, full bleed, oversized, pausas/densidade, recortes e verticalidade; sem container fixo universal ou repetição mecânica.
- Rejeitar genericidade SaaS/AI template, hero default texto esquerda/imagem direita, cards infinitos/grids previsíveis, fundos sólidos homogêneos, blobs/gradientes aleatórios, glass sem função, ícones genéricos, bordas excessivas e aparência de biblioteca. Assets originais somente com conceito/papel definido, sem filler.
- Motion obrigatório com função de hierarquia/narrativa/orientação/personalidade/feedback/profundidade; UI pode avaliar reveals/masks/parallax sutil/transições/scroll/sticky/hover/CTA, não todos obrigatórios. Sem scroll sequestrado ou conteúdo/ação esperando animação. Mobile, performance, acessibilidade e composição equivalente reduced motion obrigatórios.
- Antes da implementação completa, na etapa autorizada após Architecture Gate, UI define e valida direção/tokens/tipografia/hero/motion/foto/composição desktop+mobile; critica genericidade e reconsidera direção fraca.
- Inspeção renderizada futura com Playwright, múltiplas larguras, screenshots e registro de interações/transições: composição/impacto/ritmo/motion/cropping/tipo/whitespace/consistência/mobile/overflow/reduced motion. Screenshot estático não prova movimento.
- UI refina antes de QA se template, sem conceito, hero memorável, ritmo, autoridade ou transformação evidente nos primeiros segundos. QA independente inclui qualidade visual/comercial, não só testes técnicos.
- Evidências em **`W:\FP\as-mentoria-concept\.playwright-mcp\`**; U1 já mapeia 15 shots movidos pelo operador. Verificar destino efetivo de novas capturas e mapear arquivos legíveis; movimentação antiga não valida configuração MCP futura.

## 6. Lacunas

| Informação não confirmada | Tratamento / responsável |
|---|---|
| Catálogo, individual/in-company, preços, duração, método | [NEED: fonte direta/escopo]; não incluir enquanto ausentes. AS/operador em eventual ampliação. Atuação publicada permanece utilizável. |
| Vigência/realização/condições workshop | Não apresentar campanha ativa ou realizado. AS confirma em outro escopo. |
| Diplomas/filiações/obras/experiência atual verificados | Trajetória publicada pode ser atribuída; verificação/documentos necessários apenas para afirmação mais forte/exibição específica. AS/operador. |
| Cases/depoimentos/resultados | Omitir módulo sem evidência/contexto/autorização. Não bloqueia demo; AS/operador. |
| Direitos documentais e Instagram completo | O4 não audita direitos ou supera acesso parcial; operador/titulares se houver restrição ou uso público. |
| Sistema final/hero/motion/cérebro | Abertos UI/Architecture nas etapas autorizadas. Nenhuma produção por Product. |
| Ambiente privado/não indexação/performance | Tech definirá mecanismos após conferência Product; Architecture Gate antes de implementação. Não indexação não basta como controle de acesso. |
| Conformidade WCAG e qualidade visual | Conferência normativa integral e testes futuros UI/QA. N1 anterior sem extração legível; nenhum teste realizado aqui. |
| Destino efetivo de próximas capturas | UI/QA verificarão primeira captura dentro da raiz local exigida; U1 comprova localização do conjunto antigo por atribuição, não configuração futura. |
| AGENTS/CLAUDE em `W:\` | Consulta negada pelo MCP, sem retry. @maestro pode verificar governança ancestral se necessário; não se afirma leitura ou inexistência. |
| Conferência da condição O7 | @maestro verifica matriz e ressalvas antes de encaminhar Tech. Product não confirma cumprimento em nome do orquestrador. |

### Riscos e controles

- **Autoridade inflada ou conteúdo esvaziado:** matriz P/IDX/IND e uso atribuído; nem transformar publicação em resultado, nem eliminar atuação/biografia válidas.
- **Contato aparente:** aviso prévio contextual, região informativa e testes de ausência de operação/coleta; não declarar ausência universal de logs.
- **Premium genérico:** critérios antitemplate, hero principal, direção própria e comparação qualitativa com site atual; refino UI antes de QA.
- **Arte/motion versus leitura/mobile/performance:** exploração prévia, alvos mensuráveis, reduced motion equivalente; conflitos materiais retornam ao @maestro.
- **Evidência antiga como aprovação nova:** manter proveniência e limites, verificar destino das novas capturas e exigir QA visual independente da candidata.
- **Escopo/gates:** aprovação Product condicional não autoriza arquitetura aprovada, implementação, proposta/preço ou release. Somente dois documentos alterados, sem memória institucional nova.

**Perguntas materiais novas: nenhuma.** Sem exigência de material adicional para este recorte; módulos condicionais permanecem internos.

**Handoff exclusivo ao @maestro: READY_FOR_PRODUCT_APPROVAL — pronto para conferência da aprovação condicional, com matriz de atendimento.** Após conferência positiva, @maestro pode encaminhar Tech / Architecture Gate nos termos de O7. Esta sessão não inicia Tech, não implementa, não define stack, não gera assets e não publica.
