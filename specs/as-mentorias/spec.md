# Spec as-mentorias: transformação comercial da presença Amanda + AS

**Status: READY_FOR_PRODUCT_APPROVAL — refinamento incorporado, pronto para conferência da condição pelo @maestro.**
**Aprovação Product condicional recebida; não é autoaprovação nem confirmação de condição cumprida pelo orquestrador. Architecture Gate pendente.**

Responsável: Product Architect, único escritor desta spec e research nesta rodada. Base: `research.md`, `growth-input.md` atualizado e auditoria UI existente. Nenhuma implementação, arquitetura técnica, direção final, geração de assets ou publicação por esta entrega.

## 1. Contexto e Decisões Confirmadas

### 1.1 Pedido, problema, objetivo e público

- **Pedido original:** demo privada FP Solutions para futura apresentação à prospect AS Mentorias; reconstrução substancial em one-page profissional/editorial Amanda + AS.
- **Problema:** presença auditada centrada em workshop com vigência não confirmada; não apresenta suficientemente marca, relevância situacional, atuação, autoria e próximo passo duradouros. U1 registra repetição compositiva, arte competindo com leitura e barras concorrentes no mobile.
- **Objetivo central:** demonstrar uma **transformação COMERCIAL significativa da marca, autoridade e presença digital**, com direção premium, autoral e memorável, superior à apresentação atual e apta a funcionar como peça de venda da capacidade da FP. Não basta uma página editorial bonita ou correção cosmética. Autoridade deve derivar de autoria e evidências proporcionais, não de claims fabricados.
- **Sucesso futuro:** avaliador percebe a transformação nos primeiros segundos e consegue explicar para quem é, em quais situações importa, a atuação realmente publicada, fundamentos de confiança e próximo passo comercial. Não se promete aumento de conversão, receita, promoção ou resultado de mentoria.
- **Destinatária:** prospect da FP; apresentação não presume contratação ou aprovação por AS.
- **Público provável representado:** profissionais assumindo/exercendo liderança, gestores/coordenadores e profissionais em ascensão. Recomendação evidenciada pelo público do workshop S1 e bio parcial S2, não segmentação de mercado validada. Mulheres em liderança transversalmente, sem exclusividade de gênero. Não criar vertical RH/empresas ou oferta individual/in-company a partir de snippets.
- **Posicionamento:** comunicação nas situações de liderança e carreira, com Amanda Schurnovski: clareza ao expor ideias, escuta e posicionamento no trabalho. Não é método novo ou promessa clínica.

### 1.2 Decisões confirmadas

- **O1:** demo privada FP, não site oficial AS; intenção comercial sem aquisição real nesta versão.
- **O2:** sem contato, envio, reserva, coleta ou atendimento. CTA comercial natural com aviso contextual e estado informativo; nenhum roteiro de conversa.
- **O3:** sem materiais adicionais; usar conteúdo publicado confiável proporcionalmente. Não fabricar catálogo nem eliminar automaticamente fatos publicados por ausência de validação independente.
- **O4:** operador autoriza material do site/Instagram para demo/apresentação. Autorização declarada não é auditoria da cadeia de direitos ou autorização de publicação. Instagram parcial permanece limite. Cérebro deve ser recriado após direção visual/design system consolidados, não reutilizar asset atual como solução final.
- **O5:** one-page extensível conforme conteúdo, sem teto de cinco seções ou obrigação de oito blocos isolados. UI define composição; identidade reconhecível sem cores ou fontes predefinidas.
- **O6:** nesta rodada apenas research/spec. Sem stack, plan/tasks, implementação, design system final, assets, preço/proposta FP ou ações remotas. Proposta/preço FP somente após demo e QA APPROVED, em outro escopo. Demo privada não indexável.
- **O7 — manifestação literal do operador:** “APPROVED WITH REQUIRED PRODUCT REFINEMENT” e “Após incorporar esses ajustes, considero o PRODUCT GATE APPROVED. Prossiga então para Tech Architect / Architecture Gate. Ainda não implemente antes do Architecture Gate.”
- **Aplicação de O7:** Product incorpora e apresenta matriz; @maestro verifica atendimento e, somente após essa conferência, pode encaminhar a Tech conforme a aprovação condicional. Product não declara o gate consumado nem aciona Tech.

### 1.3 Matriz de atendimento da condição

| Condição | Incorporação documental | Evidência para conferência do @maestro |
|---|---|---|
| 1. IA extensível + evidência proporcional | §2.2; RF-02–05; RN-03–05/08; CA-02–03 | Oito funções de conteúdo, não contagem fixa; atuação publicada aproveitada; módulos sem evidência condicionais internos. Research §3/5. |
| 2. CTA sem simulação/chat | §2.3–2.4; RF-06–07; RN-01–02; estados; CA-05–06 | “Conversar sobre meu momento”, contato inativo informado antes da ação, região informativa única e retorno. Research §5. |
| 3. Sistema visual aberto | RF-11; §3.1; CA-16 | Paleta/tipografia/tokens a definir por UI/Architecture, identidade reconhecível sem herança cromática obrigatória. Research §5. |
| 4. Transformação comercial | §1.1; jornada; RF-03–05/11; CA-15/17 | Situações → atuação → autoria/confiança → próximo passo, não apenas biografia ou polimento editorial. Research §4–5. |
| Ambição visual, motion, exploração e QA | RF-11–13; §3.1; CA-11/16–18; §8 | Hero principal, antitemplate, ritmo, motion obrigatório, exploração antes implementação completa e revisão renderizada/QA visual independente. Research §5–6. |

**Situação de todas as linhas:** incorporadas documentalmente por Product; **conferência do @maestro pendente**, sem teste visual ou aprovação de execução implícitos.

### 1.4 Hipóteses ainda existentes

Relevância situacional + atuação compreensível + autoria/evidência + direção autoral e próximo passo natural tornarão a reconstrução comercialmente mais útil que a campanha datada. Público e eficácia da comunicação exigem avaliação qualitativa futura; não são resultados de pesquisa de mercado. Escolhas visuais concretas continuam abertas, não bloqueiam este refinamento.

## 2. Jornada do Usuário

### 2.1 Fluxo

- **Estado inicial:** visitante acessa ambiente privado autorizado; identifica Amanda/AS, proposta e contexto demonstrativo desde a abertura.
- **Ação:** explora o percurso ou navega por âncoras para conteúdo existente; pode acionar “Conversar sobre meu momento” no hero ou fechamento.
- **Fluxo principal:** posicionamento → situações reais de liderança/comunicação/carreira → abordagem/atuação e frentes publicadas → Amanda → repertório e fundamentos de confiança disponíveis → próximo passo comercial.
- **Resultado esperado:** compreensão de relevância, atuação e autoria; ao acionar CTA, informação honesta sobre contato inativo, sem atendimento ou solicitação de dados.
- **Fluxos alternativos:** conhecer atuação diretamente, ir à bio/temas, abrir/fechar/reabrir informação, sair ou recarregar sem cadastro, progresso ou dados a perder.

### 2.2 Arquitetura de informação extensível

Funções editoriais, não wireframe ou número fixo de seções. Podem ser agrupadas, desdobradas ou intercaladas conforme conteúdo e ritmo; não restringir a cinco seções, nem fabricar oito blocos obrigatórios. Navegação acompanha somente destinos existentes. Identificação FP desde abertura e proveniência no rodapé, sem transformar toda a narrativa em explicação da demo.

| Função | Conteúdo disponível / papel comercial | Condições e limites |
|---|---|---|
| Hero / posicionamento | Amanda + AS, campo de atuação, relevância e CTA; peça principal da experiência | Clareza de pessoa, mensagem e ação preservada na arte autoral. |
| Situações REAIS de liderança, comunicação e carreira | Expor ideia em reunião, assumir novas responsabilidades, escutar/conversar com equipe; mudança profissional como contexto | Situações editoriais plausíveis derivadas de S1, não relatos de clientes, diagnóstico ou promessa de promoção. |
| Abordagem e formas de atuação | Foco publicado em posicionamento, presença na fala e escuta; explicar o campo que se pode explorar com AS | Não converter temas em método, processo, frequência ou acompanhamento. Formatos específicos: [NEED: evidência de escopo e fonte direta]. |
| Mentorias, serviços e frentes comprovadas | Mentoria como atuação declarada de Amanda; workshop como iniciativa divulgada, não oferta ativa; pode compartilhar composição com abordagem | Não chamar publicação de prova de realização. Individual/in-company, preços, duração, disponibilidade ou outras frentes: [NEED: evidência de escopo e fonte direta]. |
| Amanda | Nome, retrato real autorizado, bio e trajetória atribuídas à fonte própria | Formação publicada pode integrar a narrativa com atribuição fiel; não selo de certificação auditada. |
| Temas / conteúdo / repertório | Posicionamento, presença na fala e escuta ativa com origem no workshop; pensamento assinado publicado pode ser usado | Obras/artigos/acervo adicional: [NEED: evidência de publicação/autoria]. Não fabricar biblioteca. |
| O encontro (§2.3b) | Encontro conduzido por Amanda: apresenta posicionamento, presença na fala e escuta ativa (workshop vigente “Destravando sua Liderança e Oratória”); quem conduz (bio completa §2.3b) e filosofia | Duração, formato, datas, periodicidade e condições de participação: [NEED: evidência]. Não inventar. |
| Provas / credenciais / cases / depoimentos verificáveis | Evidência proporcional, contexto e proveniência; autoria/bio não são resultados | Credencial verificada: [NEED: evidência documental]. Cases/depoimentos/resultados: [NEED: evidência específica, contexto e autorização]. Sem material, omitir módulo, não inventar logos/números. |
| CTA final | Retoma relevância para o momento profissional e mesmo próximo passo do hero | Sem urgência, gratuidade, vaga, resposta garantida ou canal ativo. |

Todos os **[NEED: evidência] são internos e condicionais**, nunca placeholders públicos. A falta de provas sociais não elimina atuação e trajetória publicadas válidas nem impede esta demo. Ampliação material de oferta requer retorno ao @maestro.

### 2.3 Base de copy incorporada de Growth

Ajustes editoriais futuros podem preservar sentidos e limites; mudanças materiais retornam ao gate.

- Identificação: **“AS Mentorias · Amanda Schurnovski”.**
- Contexto desde abertura: **“Conceito demonstrativo FP Solutions · não é o site oficial da AS.”** Discreto e legível, não só no rodapé.
- Hero: **“Clareza para expor ideias e se posicionar no trabalho.”** Aspiração, não resultado medido.
- Apoio: “Comunicação, liderança e carreira com Amanda Schurnovski. Conheça sua atuação e os temas que conectam a fala, a escuta e o posicionamento profissional.”
- Situações: “Ao apresentar uma ideia, assumir novas responsabilidades ou conversar com a equipe, o que você diz — e como escuta — faz parte do seu trabalho.”
- Bio: “Amanda Schurnovski é apresentada no site da AS como mentora de comunicação, liderança e carreira e fundadora da AS Mentorias.” Proveniência discreta, não ressalvas repetidas em cada parágrafo.
- Temas: “Posicionamento, presença na fala e escuta ativa.” Origem: “Temas da divulgação do workshop ‘Destravando sua Liderança e Oratória’.”
- Fechamento: “Que momento da sua vida profissional pede mais clareza?” Não há campo de resposta.
- Rodapé: apresentação demonstrativa FP baseada em conteúdo publicado AS; não atendimento ou oferta ativa.

### 2.3b — Emenda de enriquecimento 2026-09-06, autorização operador

Aditiva, autorizada na revisão do site (“enriqueça o site, coloque informações reais, sobre o evento dela, sobre o que ela apresenta, o que o encontro atual apresenta”). Fonte: transcrição da seção “QUEM CONDUZ O ENCONTRO” do site oficial da AS, autorizada por O4 para a demo; uso atribuído por RN-03 (apresentar, não ampliar nem defender); sem claims fabricados (RN-04). Copy nova é para a demo, sem promessa de conversão (§1.1). Aviso “não é o site oficial da AS” permanece no header (O1).

**Trajetória/Amanda — bio completa (verbatim, conforme site oficial da AS):**

> Amanda Schurnovski
> Mentora de comunicação, liderança e carreira, Amanda ajuda profissionais a vencerem o medo do julgamento e a usarem a voz para ocupar os lugares que sempre desejaram.
> Formada em Letras e Educação Física, com pós-graduações em Ensino de Línguas e em Neuropsicopedagogia, sua jornada começou em mais de 13 anos de sala de aula.
> Hoje, como fundadora da [A]JS Mentorias, escritora e colunista, ela ensina profissionais a se comunicarem com elegância, clareza e autoridade. Guiada pela filosofia de que, quando a sua voz muda, a sua vida acompanha.

**Credenciais/badges (conforme site oficial da AS; RN-03 — apenas apresentar, atribuídas à fonte):**

- Membro · Sociedade Brasileira de PNL
- Colunista · Revista A Cúpula
- Escritora
- +13 anos em sala de aula

**O encontro:** conduzido por Amanda; apresenta posicionamento, presença na fala e escuta ativa — temas do workshop vigente “Destravando sua Liderança e Oratória”; quem conduz: bio acima; filosofia: “quando a sua voz muda, a sua vida acompanha”. Citação assinada disponível: “Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.” — Amanda Schurnovski (pensamento assinado, nunca depoimento ou resultado — RN-04). Duração, formato, datas, periodicidade e condições: [NEED: evidência].

**Nota de discrepância de marca:** o site oficial grafa “AJS Mentorias” (transcrição “[A]JS Mentorias”); o projeto usa “AS Mentorias”. Decisão do operador pendente; “AS Mentorias” permanece canônico em toda copy até decisão. A bio verbatim preserva a grafia da fonte com atribuição.

**Proveniência geral da emenda:** O4 (material do site autorizado para demo), RN-03 (atribuição, não defesa), RN-04 (claims não fabricados), RF-05 (concretude comercial: atuação e encontro publicados); contato inativo e aviso seguem RF-01/RN-01/O1.

### 2.4 Contrato de ações

| Ação | Comportamento |
|---|---|
| **Conversar sobre meu momento** — hero e fechamento | Antes do clique, aviso junto ao CTA: **“Nesta demo, o contato não está ativo.”** Acionar revela uma única região informativa na própria página e move foco ao início identificado. |
| **Conhecer a atuação** — secundário do hero | Âncora para abordagem/atuação existente; título e contexto acessíveis. |
| Navegação para situações, Amanda, temas e outros conteúdos existentes | Destinos internos nomeados, sem âncoras vazias, arquivos ou canais externos. |
| **Voltar à página** | Oculta região informativa; restaura posição e foco no acionador correto. |

**Região revelada — título: “Sobre o próximo passo”.**

“Em uma versão publicada e autorizada, este botão poderá levar ao canal de contato aprovado. Nesta demonstração, nenhum contato é iniciado e nenhum dado é solicitado ou enviado por esta ação.”

Reabrir mostra a mesma informação, sem duplicação, histórico ou persistência. Não há fala fictícia, chatbot, avatar, pergunta respondível, seletor de problema, indicador de digitação, resposta de Amanda, mensagem preparada, formulário ou confirmação de envio. Não usar “Simular uma primeira conversa” ou “Simular primeira conversa”. O estado informativo é limite da demo, não etapa comercial obrigatória de um produto futuro.

Canal real apenas após autorização futura específica de alvo, destino, consentimentos aplicáveis e operação. Nenhuma preferência por WhatsApp ou integração está aprovada.

## 3. Requisitos Funcionais

- **RF-01 — Identidade/expectativa:** AS/Amanda e contexto FP não oficial desde abertura; contato inativo perceptível antes de cada CTA principal, sem dominar a mensagem comercial.
- **RF-02 — IA extensível e navegação:** one-page com funções de §2.2, organização conforme evidência e composição, não contagem fixa; âncoras nomeadas por teclado/toque. Sem barra fixa inferior de conversão; elementos persistentes não ocultam leitura, títulos ou foco.
- **RF-03 — Relevância situacional:** liderança, comunicação e carreira em situações concretas de trabalho; sem patologizar dificuldade de fala ou inventar cases.
- **RF-04 — Autoria e confiança:** Amanda identificável cedo; retrato real autorizado e biografia/trajetória publicadas com atribuição proporcional; credenciais verificadas só com evidência correspondente.
- **RF-05 — Concretude comercial:** explicitar atuação declarada, abordagem temática, iniciativa de workshop divulgada e repertório rastreável; acomodar serviços/frentes/provas apenas quando sustentados. Não reduzir AS a bio nem fabricar catálogo.
- **RF-06 — CTA honesto:** ambas as ações principais cumprem §2.4, com uma região informativa e nenhuma operação externa.
- **RF-07 — Retorno/repetição:** preservar foco/contexto do acionador, sem duplicação, histórico ou impedimento de saída.
- **RF-08 — Privacidade:** sem formulários, coleta, analytics, pixels, eventos persistidos, gravação de sessão, CRM, embeds sociais ou integrações. Ambiente privado e não indexável; não confundir não indexação com controle de acesso. Proteção e limites de logs definidos posteriormente por Tech, sem domínio/canonical oficial fictício.
- **RF-09 — Acessibilidade/mobile:** WCAG 2.2 AA nos estados aplicáveis; conteúdo completo sem depender de hover, cor, som, animação ou arrasto; foco/semântica/reflow e reduced motion conforme §7.
- **RF-10 — Estabilidade/performance:** identidade, leitura e CTA utilizáveis sem aguardar arte/motion; falhas de imagem não impedem jornada. Alvos futuros CA-13, sem benchmark fictício.
- **RF-11 — VISUAL AMBITION:** experiência premium, autoral, memorável, contemporânea, altamente polida, com forte direção de arte e transformação comercial perceptível. Hero principal e linguagem própria; sistema visual aberto e antitemplate conforme §3.1, avaliados por CA-16–18.
- **RF-12 — Motion obrigatório:** direção de movimento consistente na experiência normal, com função declarada de hierarquia, narrativa, orientação, personalidade, feedback ou profundidade. Não basta aplicar fades repetidos; performance, mobile, leitura e composição estática equivalente com reduced motion são obrigatórios.
- **RF-13 — Exploração e evidência:** UI deve definir e validar direção/tokens/tipografia/hero/motion/foto/composição desktop + mobile antes da implementação completa; criticar genericidade e reconsiderar direção fraca. Inspeção renderizada e QA visual independente são condições futuras, não resultados desta spec.

### 3.1 Contrato de ambição visual, sem sistema final

- **Linguagem própria:** derivada da identidade Amanda e dos conceitos comunicação, liderança, pensamento, presença e transformação. UI deve consultar índices `~/.dsh/references/ui/landing-pages` e referências externas fortes pertinentes; selecionar princípios, registrar limites e não copiar. Hyer/Mouthwash oferecem composição/ritmo nas capas anteriormente analisadas; Dorie Clark, Goldsmith e Conquer oferecem referência textual, não motion ou conversão auditados.
- **Sistema aberto:** paleta, famílias display/body, escala, pesos, tracking, line-height, tipografia responsiva e tokens ficam para UI/Architecture. Não fixar azul/acento quente; não adotar Inter/Arial automaticamente. Reconhecimento de Amanda/AS não exige herdar cores, fontes ou estrutura atuais.
- **Hero como peça principal:** explorar relação entre retrato real, display expressiva, cérebro original e profundidade/layering/luz/assimetria/interação. São possibilidades a avaliar, não obrigação de somar todos os efeitos. Mensagem, pessoa e CTA continuam claros; arte não compete com leitura. Não impor ao cérebro papel meramente secundário: sua hierarquia será resolvida na direção, sem substituir autoria humana.
- **Cérebro:** recriar após direção/design system consolidados e autorização de produção da etapa; não usar o fundo atual como asset final. Metáfora autoral de pensamento/expressão/conexão, nunca prova neurocientífica. Não gerar nesta rodada. Exploração anterior ao asset final pode validar composição sem placeholder público; ausência temporária não dispensa a decisão futura sobre sua integração.
- **Motion:** UI documenta intenção e coerência. Pode avaliar reveals, masks, parallax sutil, transições, scroll, sticky, hover e feedback de CTA; não é lista obrigatória de efeitos. Sem scroll sequestrado, espera artificial para leitura, flashes perigosos ou conteúdo dependente de animação.
- **Ritmo:** variar escala, whitespace, overlap, full bleed, oversized, pausas, densidade, recortes e composição vertical conforme narrativa. Não exigir cada recurso; proibir container fixo universal e repetição mecânica de seções.
- **Proibidos como solução visual:** genericidade SaaS/AI template; hero default texto à esquerda/imagem à direita; cards infinitos/grids previsíveis; fundos sólidos homogêneos em todo o percurso; blobs/gradientes aleatórios; glass sem função; ícones genéricos; bordas excessivas; aparência de biblioteca exposta. Não proibir função útil isolada por seu nome, mas exigir justificativa contextual e originalidade da composição.
- **Assets originais:** somente com conceito e papel narrativo/comercial definidos; nenhum filler decorativo, retrato fictício de Amanda ou material copiado de referências. `amanda-xadrez.jpeg` e `amanda-reflexao.jpg` são candidatos reais identificados em U1, não recortes finais obrigatórios.
- **Exploração antes da implementação completa:** após Architecture Gate e autorização da etapa, UI valida direção e composição desktop/mobile, confronta com site atual e referências, e refina antes de QA se parecer template, sem conceito, hero memorável, ritmo, autoridade proporcional ou transformação evidente nos primeiros segundos.

## 4. Regras de Negócio

- **RN-01:** demo sem contato, mensagem, e-mail, agendamento, reserva, pagamento ou atendimento, inclusive rodapé/mobile. Estado informativo não representa conversa.
- **RN-02:** sem entrada de dados ou armazenamento/transmissão de eventos de visitante pela jornada. Instrumentação local de QA não autoriza analytics. Aviso público sobre não envio se limita à ação; logs do ambiente não auditados não são declarados inexistentes.
- **RN-03:** fonte própria confiável comprova publicação e permite uso proporcional atribuído, não comprovação independente de resultado. Snippets não confirmam serviço, identidade cruzada ou credencial. Não apagar todos os fatos publicados válidos por falta de IND.
- **RN-04:** não inventar serviços, metodologia, exercícios, métricas, clientes, logos, cases, depoimentos, obras ou resultados. Citação própria é pensamento assinado, não prova social. “13 anos de sala de aula” nunca vira experiência em mentoria executiva.
- **RN-05:** workshop pode demonstrar iniciativa divulgada e origem de assuntos; sem afirmar realização, vagas, gratuidade atual ou agenda vigente. Formatos individual/in-company, PV™, Neuro-Oratória, DISC e IBM não são confirmados pelos snippets disponíveis.
- **RN-06:** O4 é autorização declarada delimitada; sem bypass Instagram, uso de material não inspecionado ou cópia de assets de referências. Direitos e distribuição pública exigem revisão própria.
- **RN-07:** aprovação condicional é verificada pelo @maestro; não aprova Architecture, implementação, QA ou release. Nenhuma publicação autorizada; proposta/preço FP só após demo e QA APPROVED em escopo futuro.
- **RN-08:** NEEDs apenas internos; módulo sem evidência é omitido junto de título, âncora e espaço vazio, sem “em breve”, lorem ipsum ou prova simulada. Não é proibição permanente de módulos comprovados.
- **RN-09:** ambição visual e motion são requisitos, não extras sacrificáveis por conveniência. Solução fraca retorna ao refinamento UI; compromissos materiais com performance/acessibilidade ou escopo retornam ao @maestro.

### 4.1 Matriz operacional de conteúdo

| Conteúdo | Evidência / uso permitido | Condição interna |
|---|---|---|
| Nome, atuação, fundação, retrato | S1/U1 + O4; incluir com proveniência | Não chamar de credencial auditada. |
| Situações/público/temas | S1; situações editoriais e tópicos com origem | Não alegar demanda validada, método ou garantia. |
| Workshop | S1; iniciativa divulgada, não ativa | [NEED: vigência/ano/fuso/capacidade/condições] para campanha futura. |
| Formação e experiência docente | S1; podem integrar trajetória atribuída fielmente à bio publicada, se pertinentes | [NEED: documentos/período] para certificação verificada ou número atualizado sem atribuição. Sem habilitação clínica inferida. |
| Citação de Amanda | S1; pode integrar pensamento/repertório assinado | Nunca depoimento ou resultado de cliente. |
| Escritora/colunista/filiação | S1; eventual menção atribuída à bio, sem selo de vigência ou obra inventada | [NEED: obra/artigo/registro vigente] para exibir publicação específica ou filiação verificada. |
| Formatos/métodos/títulos de snippets | S2–S4 IDX; omitir enquanto insuficientes | [NEED: fonte direta, identidade e escopo]. |
| Cases/depoimentos/clientes/resultados | Ausentes na amostra; omitir módulo enquanto sem material | [NEED: evidência específica, contexto e autorização]. |

## 5. Estados e Casos de Borda

| Estado | Comportamento esperado |
|---|---|
| Carregamento | Texto, identidade, avisos e CTAs utilizáveis sem aguardar arte/motion; layout estável. |
| Pronto | Conteúdo comprovado disponível, informação de próximo passo recolhida, aviso de contato inativo antes de agir. |
| Sucesso da ação | Uma região “Sobre o próximo passo”, texto de §2.4 e retorno; foco no início. Sucesso é revelar informação, nunca enviar mensagem. |
| Cancelamento/retorno | “Voltar à página” oculta informação e restaura acionador, sem confirmação de abandono. |
| Repetição/reabertura | Mesmo conteúdo, sem duplicação ou histórico. |
| Recarregar | Estado inicial, sem interação persistida; âncora explícita válida preserva acesso interno sem contato. |
| Vazio | Não há tela vazia de catálogo/provas: módulos condicionais sem material não são renderizados nem deixam lacunas. Conteúdo publicado válido permanece. |
| Erro de retrato/arte | Identidade textual, bio e CTA preservados, alternativa adequada e sem substituição por pessoa fictícia; decoração não gera ruído. |
| Falha da ação | Não confirmar envio/sucesso falso; permitir continuar leitura/retornar e informar indisponibilidade. Falha reproduzível do fluxo impede aceite. |
| Envio/reserva/validação | Não aplicáveis: não existem campos ou integração; não simular falha externa. |
| Bloqueio/permissão | Sem login de produto/papéis/permissões de dispositivo. Controle do ambiente privado pertence à arquitetura posterior. |
| Instagram indisponível | Sem impacto: jornada não depende de embeds, login ou acesso externo. |
| Mobile/zoom | Sem perda de texto, foco, avisos ou retorno; recorte preserva identificação; sem overflow horizontal de leitura. |
| Reduced motion | Composição estática equivalente, conteúdo/ações completos; sem rolagem animada, parallax, pulsação ou movimento não essencial. Não elimina direção de motion normal. |
| Teclado/leitor de tela | Destinos/controles nomeados, ordem coerente e entrada/saída da região informativa compreensíveis, sem armadilha. |
| Arte original em exploração | Não produzir aqui; desenvolvimento posterior respeita sequência de direção/sistema antes do cérebro. Nenhum placeholder público. |

## 6. Fora de Escopo

- Site oficial, publicação/deploy, canais reais, SEO público, domínio/canonical oficial, aquisição e indexação: demo privada e autorização futura específica.
- Catálogo inventado, pacotes, preços, formatos não comprovados, campanha ativa do workshop: faltam evidência/escopo. **Atuação publicada e módulos comprovados não estão genericamente fora de escopo.**
- Chatbot, simulação de conversa, fala fictícia, formulário, CRM, agenda, newsletter, pagamento, login de produto: não necessários e contrários ao contrato demo.
- Analytics, pixels, A/B, UTMs, campanhas e coleta: avaliação qualitativa local.
- Provas sociais ou acervo fabricados; método/diagnóstico/tratamento/promessa neurocientífica: sem fundamento. Provas reais continuam condicionais conforme matriz.
- Sistema visual final, fontes/tokens finais e produção de assets nesta rodada: ownership futuro UI/Architecture; não significa excluir motion ou ambição da experiência.
- Stack, schema, migrations, plan/tasks, código, dependências, infraestrutura, commit/push/merge/deploy: fora de Product e desta entrega.
- Proposta/preço FP: somente após demo e QA APPROVED, em outro escopo.
- Bypass de plataformas, pesquisa indiscriminada ou memória institucional nova: não autorizados/necessários.

## 7. Critérios de Aceite

**Contrato para validação futura, não testes executados.** Toda divergência material retorna ao @maestro.

- **CA-01 — Identidade (RF-01):**
  - Given: abertura desktop/mobile.
  - When: avaliador lê antes de agir.
  - Then: identifica AS/Amanda, relevância e contexto FP não oficial; contato inativo é perceptível junto ao CTA, sem busca no rodapé.
- **CA-02 — IA e concretude (RF-02–05):**
  - Given: conteúdo final e matriz de evidência.
  - When: percurso completo é revisado.
  - Then: funções de §2.2 sustentadas por conteúdo estão representadas, agrupadas ou desdobradas justificadamente, sem teto de cinco seções; atuação não se reduz à bio. Módulos sem prova não deixam âncoras/títulos vazios ou NEEDs públicos.
- **CA-03 — Claims (RN-03–05/08):**
  - Given: copy, imagens e rótulos confrontados com research §3 e spec §4.1.
  - When: cada afirmação é revisada.
  - Then: há fonte e qualificação proporcional; publicação não é chamada de resultado independente; fatos publicados válidos não são descartados automaticamente. Sem catálogo, depoimento, credencial verificada ou experiência executiva inventados.
- **CA-04 — Navegação (RF-02):**
  - Given: âncoras e “Conhecer a atuação”.
  - When: acionados por teclado/toque.
  - Then: destino interno correto, título/contexto acessíveis e foco não encoberto; nenhum destino externo ou vazio.
- **CA-05 — CTA completo (RF-06–07):**
  - Given: estado inicial e aviso de contato inativo.
  - When: cada CTA principal é acionado separadamente.
  - Then: revela uma única região com título/texto/retorno de §2.4 e foco inicial; sem conversa fictícia, resposta, formulário ou confirmação de envio.
  - When: retorna, reabre, repete e recarrega.
  - Then: foco volta ao acionador correto; sem duplicação, histórico, persistência ou janela externa.
- **CA-06 — Não operação/coleta (RF-08; RN-01–02):**
  - Given: inspeção futura de todos os controles, rede e armazenamento desde carga até abrir/fechar/repetir informação.
  - When: exercitada jornada desktop/mobile/rodapé.
  - Then: sem contato, reserva, dados solicitados/enviados pela ação, rastreamento, embeds sociais ou eventos persistidos. Requisições de entrega são distinguidas de coleta; não alegar ausência universal de logs não auditados.
- **CA-07 — Privacidade (RF-08):**
  - Given: ambiente futuro antes de distribuir acesso.
  - When: configuração e superfície são revisadas.
  - Then: há evidência de acesso/distribuição restritos e não indexação, sem domínio oficial fictício; não indexação isolada não prova privacidade. Nenhuma publicação foi testada nesta rodada.
- **CA-08 — Semântica/foco (RF-09):**
  - Given: teclado e leitor de tela, estados aberto/fechado.
  - When: percurso completo é exercitado.
  - Then: caminho ao conteúdo principal, título principal e hierarquia coerentes, nomes/papéis/estados dos controles, foco visível e ordem lógica, sem armadilha/ocultação; decoração não é anunciada como essencial.
- **CA-09 — Contraste e alvos (RF-09):**
  - Given: estados/fundos/imagens reais.
  - When: medidos contraste e dimensões.
  - Then: texto normal ≥ 4,5:1, grande ≥ 3:1 conforme definição WCAG, informação necessária de controles ≥ 3:1 onde aplicável; ação não depende só de cor. Botões/links de navegação ≥ 44 × 44 CSS px como conforto do produto, não mínimo universal AA; texto essencial não vira imagem.
- **CA-10 — Reflow (RF-09):**
  - Given: larguras 320, 390, 768 e 1440 CSS px; orientação pertinente; zoom 400% em viewport inicial de 1280 CSS px; texto 200% e espaçamento WCAG 1.4.12.
  - When: página/região informativa são percorridas.
  - Then: sem rolagem horizontal para leitura, truncamento, sobreposição, foco oculto ou controle inacessível; retrato preserva identificação. Não exigir todas as ações na primeira dobra em qualquer zoom.
- **CA-11 — Motion e redução (RF-09/12):**
  - Given: direção documentada e experiência normal/reduced motion.
  - When: carga, scroll, âncoras, transições, hover e CTA aplicáveis são exercitados.
  - Then: experiência normal implementa linguagem consistente com funções documentadas, não apenas fades repetidos; redução oferece composição estática equivalente sem movimento não essencial; leitura/ações nunca esperam animação. Sem flashes perigosos ou scroll sequestrado.
- **CA-12 — Falhas/estabilidade (RF-10):**
  - Given: rede limitada e bloqueio controlado de fotos/arte.
  - When: carrega e usa jornada.
  - Then: identidade, bio, avisos e CTA utilizáveis, alternativa adequada, sem pessoa fictícia/placeholder ou falso envio; falha reproduzível do fluxo impede aceite.
- **CA-13 — Performance (RF-10/12):**
  - Given: ambiente/navegador/máquina registrados, extensões desativadas; 390 × 844 e 1440 × 900; rede sintética 4 Mb/s download, 1 Mb/s upload, RTT 150 ms e CPU 4×; três cargas frias por viewport.
  - When: medidos carregamento/layout.
  - Then: mediana por viewport LCP ≤ 2,5 s e CLS ≤ 0,1, execuções individuais preservadas. Alvos do produto, não medições existentes ou benchmark do site antigo.
  - When: abrir/fechar informação e navegar por âncoras são medidos cinco vezes por ação sob mesmo perfil.
  - Then: início da mudança visual de estado em até 200 ms por acionamento, sem espera artificial; alvo local, não INP de campo. Sem telemetria de visitantes. Ambiente não comparável ou mudança de alvo retorna ao @maestro, nunca aprovação presumida.
- **CA-14 — WCAG (RF-09):**
  - Given: candidata e evidências futuras.
  - When: revisada integralmente contra WCAG 2.2 A/AA aplicável.
  - Then: relatório registra métodos, evidências, não aplicáveis justificados e falhas; scanner/checks resumidos não substituem revisão integral ou autorizam falhas silenciosas.
- **CA-15 — Transformação comercial (RF-03–05/11):**
  - Given: revisão qualitativa pelo operador/avaliador indicado, comparando candidata com evidência do site atual.
  - When: observa abertura nos primeiros segundos e depois percorre a página.
  - Then: consegue explicar público, situações relevantes, atuação publicada, autoria/fundamentos de confiança e próximo passo; reconhece contato inativo antes do clique. Registro compara melhorias concretas de marca, autoridade proporcional e presença, não só beleza. Sem alegação de conversão/receita comprovada.
- **CA-16 — Exploração prévia (RF-11–13):**
  - Given: etapa UI autorizada após Architecture Gate, antes da implementação completa.
  - When: direção é avaliada desktop/mobile.
  - Then: documenta conceito/referências sem cópia, paleta/tokens, display/body e escala responsiva, pesos/tracking/line-height, hero, foto/recortes, composição e motion; critica genericidade contra §3.1 e reconsidera se fraca. Cérebro original só é produzido depois da consolidação de direção/sistema e autorização correspondente.
- **CA-17 — Evidência visual renderizada (RF-11–13):**
  - Given: exploração/candidata renderizada nas larguras de CA-10 e estados de CA-11.
  - When: UI inspeciona com Playwright.
  - Then: screenshots e registro de interação/motion/transições cobrem composição, impacto do hero, ritmo, cropping, tipografia, whitespace, consistência, mobile, overflow e reduced motion. Captura estática isolada não prova motion. Relatório compara antes/depois e aponta violações de §3.1; UI refina antes de QA se template, sem conceito/hero memorável/ritmo/autoridade ou transformação evidente.
- **CA-18 — Evidências locais e QA independente (RF-13):**
  - Given: futura rodada de captura e candidata para QA.
  - When: primeira captura é produzida e conjunto é revisado.
  - Then: destino efetivo é verificado como `W:\FP\as-mentoria-concept\.playwright-mcp\`, com arquivos legíveis mapeados no relatório. Os 15 shots antigos movidos pelo operador/U1 são referência, não teste da candidata nem prova de configuração futura. QA independente avalia qualidade visual/comercial de CA-15–17 além de funcionamento, acessibilidade/performance e requisitos técnicos; falhas visuais não são aprovadas por testes técnicos verdes.

## 8. Dependências e Restrições

- **@maestro:** conferir matriz §1.3 contra ajuste do operador; registrar cumprimento ou ressalvas. Só então encaminhar Tech nos limites de O7. Product termina aqui.
- **Architecture Gate:** pendente; Tech define viabilidade, execução privada e aferição sem implementação antes de aprovação arquitetural explícita. Nenhuma biblioteca ou mecanismo escolhido nesta spec.
- **UI:** direção/design system/tipografia/motion/composição e exploração nas etapas autorizadas; geração do cérebro posterior à consolidação, não agora. Qualidade visual obrigatória não é sistema final aprovado.
- **QA futuro independente:** funcional, visual, mobile, acessibilidade e performance; evidência antiga não aprova nova demo. Pasta local obrigatória, destino de novas capturas ainda a verificar.
- **Conteúdo:** S1/U1 e Growth suficientes para este recorte. Público provável continua hipótese; catálogo adicional/provas dependem de fonte e autorização. Sem pesquisa de catálogo obrigatória ou novas perguntas materiais.
- **Restrições externas:** fontes parciais não confirmam serviços/credenciais; O4 não prova direitos universais. WCAG 2.2 AA exige conferência oficial integral futura; extração normativa anterior N1 não foi legível.
- **Riscos:** template disfarçado de premium; arte/motion prejudicando leitura/mobile/performance; autoridade inflada; CTA parecer contato real; privacidade confundida com não indexação. Mitigações: RF/RN/CA, exploração/refino antes de QA e avaliação independente.
- **Limite de consulta desta rodada:** AGENTS/CLAUDE na raiz `W:\` tiveram acesso negado pelo MCP; não houve retry/escalada. AGENTS global/local lidos; nenhum CLAUDE no workspace foi encontrado. Não se infere inexistência na raiz inacessível; @maestro pode conferir governança ancestral se necessário.
- **Perguntas materiais novas:** nenhuma. Pendências são conferência da condição, gates próprios e evidências futuras, não reabertura de discovery.

**Handoff exclusivo ao @maestro: READY_FOR_PRODUCT_APPROVAL — pronto para verificação da aprovação condicional. Não self-approve; não iniciar Tech nesta sessão, implementar ou publicar.**
