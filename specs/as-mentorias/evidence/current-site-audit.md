# AS Mentorias — auditoria factual do site atual

**Estado: diagnóstico visual da landing page complementado — desktop/mobile capturados e imagens efetivamente lidas. Auditoria global permanece PARTIAL (Instagram, direitos, claims e acessibilidade integral não validados).**

> Atualização de 2026-09-05, 18:49–18:53 UTC: a seção 9 complementa e supera as limitações visuais da rodada anterior. A negativa anterior era de DESTINO em W:, não proibição de screenshots. Os registros abaixo sobre ausência de capturas descrevem exclusivamente a primeira rodada.

## Método, fontes e limites

- Data da sessão: **2026-09-05**, aproximadamente 15:41–15:45 UTC−03 (relógio do ambiente; não representa confirmação da data do evento).
- S1: https://asmentorias-beep.github.io/destrave-sua-lideranca-e-oratoria/
- S2: https://asmentorias-beep.github.io/destrave-sua-lideranca-e-oratoria/#conteudo
- S3: https://www.instagram.com/asmentorias.oficial/
- Playwright, desktop **1440 × 900 CSS px** e mobile **390 × 844 CSS px**. Mobile é viewport redimensionada, não aparelho físico nem emulação completa de navegador móvel.
- Leitura do accessibility snapshot integral, DOM, estilos computados, dimensões, rede e console. Todas as cinco sections, blockquote e footer foram percorridas por scroll em ambas as viewports. Clique apenas na âncora interna; amostra de Tab sem ativar contatos. Não houve login, formulário, mensagem, mutação remota, teste de carga ou segurança.
- **Screenshot solicitado:** `specs/as-mentorias/evidence/desktop-full.png` — **NÃO criado**. Playwright respondeu: `File access denied: W:\FP\as-mentoria-concept\specs\as-mentorias\evidence\desktop-full.png is outside allowed roots. Allowed roots: C:\Users\felip\.playwright-mcp, C:\Users\felip`. Não foi tentado contorno, cópia ou escalada. **Nenhum screenshot integra esta entrega.** Capturas mobile igualmente não executadas após essa restrição.
- Portanto não há julgamento comprovado de composição visual, corte fotográfico, conteúdo do cérebro, legibilidade sobre fotografia, consistência visual entre Instagram/site ou acabamento. Alt text e nomes de arquivos NÃO equivalem a leitura da imagem.
- AGENTS global/local lidos. No início, a raiz do worktree continha apenas AGENTS.md; `specs` não existia. O contexto institucional informado pelo Maestro é recebido como briefing, não como documentação local verificada. Sem duplicação Obsidian/Mnemon.
- Skills lidas: `C:\Users\felip\.agents\skills\impeccable\SKILL.md`, `impeccable\reference\audit.md`, `firecrawl-scrape\SKILL.md`. Aplicados os critérios de verificabilidade, acessibilidade e responsividade. Não executados setup/detector sobre código inexistente nem Firecrawl externo; nenhuma instalação ou novo artefato de produto. Não atribuído health score: evidência insuficiente para pontuação global ou conformidade WCAG.
- Runtime identificado pelas instruções como Astra; não há recibo de headers/effort inspecionado nesta execução. Sem subdelegação. A configuração `low` solicitada deve ser confirmada pelo Maestro no despacho, não inferida deste relatório.

## 1. O que o site efetivamente apresenta

O título do documento é **“Destravando sua Liderança e Oratória | Workshop Gratuito com Amanda Schurnovski”**. Trata-se da superfície pública de um workshop com conversão para WhatsApp, não de um catálogo institucional completo. A hipótese de nova experiência híbrida não foi validada por esta auditoria. Layout atual é evidência, não requisito de preservação.

### Inventário de seções e transcrição relevante (S1)

1. **Cabeçalho:** imagem com alt “A|S Mentorias”, texto da marca e “Garantir vaga”. Cabeçalho sticky.
2. **Hero:** “📅 Sábado, 12 de setembro · 10h · Online e ao vivo”; “Workshop gratuito · Vagas limitadas”; H1 “Destravando sua Liderança e Oratória”. Texto: “Com Amanda Schurnovski. Em 50 minutos, ao vivo, você recebe as chaves práticas para falar com segurança, influenciar pessoas e destravar a sua presença executiva, sem gravação, sem enrolação.” CTAs “Garantir minha vaga no WhatsApp” e “Ver o que você vai aprender”. Apoio: “100% gratuito · Encontro ao vivo, sem gravação disponível depois.” O ano e o fuso horário do encontro não aparecem nesse texto.
3. **“Para quem é este workshop”** — H2 “Este encontro é para você que sente que a sua voz pesa menos do que o seu trabalho”. Apoio: “Se você se identifica com pelo menos um dos pontos abaixo, este é o seu lugar.” Quatro H3:
   - “Gestores, Líderes e coordenadores”: “Você lidera uma equipe, mas sente que precisa se posicionar com mais clareza e menos ruído nas reuniões.”
   - “Profissionais em ascensão”: “Mudou de cargo recentemente ou está buscando a próxima promoção e quer que sua comunicação acompanhe o seu valor técnico.”
   - “Mulheres executivas”: “Quer transmitir autoridade e elegância antes mesmo de falar, alinhando presença e discurso.”
   - “Quem sente a voz travar”: “Sabe muito, mas na hora da reunião trava ou não se posiciona e sente que isso já custou oportunidades.”
4. **“Assuntos abordados”**, id `conteudo` — H2 “O que você vai levar do encontro”. Apoio: “50 minutos ao vivo, direto ao ponto, com aplicação prática.” Quatro H3:
   - “O ruído que apaga o brilho”: “Como a comunicação agressiva ou a falta de posicionamento destroem a harmonia de uma equipe ou de uma carreira.”
   - “Os 3 pilares da comunicação magnética”: “Presença e estética da fala, livre-arbítrio e influência, e escuta ativa, os fundamentos práticos para liderar com elegância.”
   - “Diagnóstico prático”: “Um exercício rápido para você identificar, na hora, onde a sua comunicação está falhando hoje.”
   - “Próximos passos”: “Como aplicar o que foi visto na sua rotina e um convite para quem quiser aprofundar a transformação com Amanda.”
5. **Citação entre conteúdo e biografia:** “\"Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.\"” — atribuída a Amanda Schurnovski. Não é depoimento de cliente.
6. **“Quem conduz o encontro”** — H2 “Amanda Schurnovski”. Foto com alt “Amanda Schurnovski jogando xadrez, representando visão estratégica”. Biografia integral relevante:
   > Mentora de comunicação, liderança e carreira, Amanda ajuda profissionais a vencerem o medo do julgamento e a usarem a voz para ocupar os lugares que sempre desejaram. Formada em Letras e Educação Física, com pós-graduações em Ensino de Línguas e em Neuropsicopedagogia, sua jornada começou em mais de 13 anos de sala de aula.
   > Hoje, como fundadora da A|S Mentorias, escritora e colunista, ela ensina profissionais a se comunicarem com elegância, clareza e autoridade. Guiada pela filosofia de que, quando a sua voz muda, a sua vida acompanha.
   Badges: “Membra · Sociedade Brasileira de PNL”; “Colunista · Revista A Cúpula”; “Escritora”; “+13 anos em sala de aula”.
7. **Conversão final:** “📅 Sábado, 12 de setembro · 10h”; H2 “Garanta seu lugar na sala”. “O encontro é ao vivo e não haverá gravação disponível depois, a transformação acontece em tempo real, junto com o grupo.” Marcadores “Gratuito”, “Ao vivo”, “Sem gravação”, “Vagas limitadas”. CTA “Falar com a Amanda no WhatsApp”.
8. **Rodapé:** logo, links WhatsApp, e-mail comercial e Instagram; “© 2026 A|S Mentorias. Todos os direitos reservados.” Mobile também expõe CTA “Garantir minha vaga”.

**Serviços:** workshop gratuito explicitamente ofertado; comunicação, liderança e carreira como atuação autodeclarada. Não há no texto lido pacotes de mentoria, preços pagos, duração de programa, método formal documentado, portfólio detalhado, cases identificáveis ou prova de resultados. Não converter os quatro tópicos do workshop em serviços independentes sem confirmação de Product/Growth.

## 2. CTAs e destinos

O telefone do WhatsApp não é repetido aqui por minimização; o destino exato continua verificável no `href` público de S1. Todos os CTAs de vaga compartilham o mesmo destinatário e mensagem.

| Local / trecho exato | Destino observado | Verificação / limite |
|---|---|---|
| Cabeçalho: “Garantir vaga” | `https://wa.me/<destinatário comercial>?text=…` | href lido; `_blank`; não aberto |
| Hero: “Garantir minha vaga no WhatsApp” | Mesmo WhatsApp com mensagem | Não há comprovação de reserva automática |
| Hero: “Ver o que você vai aprender” | `#conteudo` | Clicado; URL mudou para S2 e scroll chegou ao alvo |
| Final: “Falar com a Amanda no WhatsApp” | Mesmo WhatsApp com mensagem | Não aberto |
| Mobile: “Garantir minha vaga” | Mesmo WhatsApp com mensagem | Visível por dimensão DOM; não ativado |
| Rodapé: “WhatsApp” | `https://wa.me/<mesmo destinatário>` sem mensagem | href lido; não aberto |
| Rodapé: e-mail comercial | `mailto:` para o endereço comercial mostrado | Não ativado; endereço omitido por minimização |
| Rodapé: “@asmentorias.oficial” | `https://instagram.com/asmentorias.oficial` | Perfil www acessado diretamente em S3 |

Mensagem predefinida decodificada: **“Olá, Amanda! Quero garantir minha vaga no Workshop gratuito Destravando sua Liderança e Oratória 🙌”**. Não enviada. Nenhum formulário local foi encontrado (`document.forms.length = 0`). Não foram verificados status de destinos WhatsApp/mailto, entrega, disponibilidade de vagas ou atendimento.

## 3. Identidade e assets — fatos técnicos, não interpretação visual

Estilos computados de S1: fundo do body `#070910`; texto principal `#F4EFE2`; CTA do cabeçalho `#F3D386` com texto escuro; CTAs WhatsApp `#3FAE5C` com texto branco; links de rodapé `#9AA2C0`. H1/H2: **Cormorant Garamond**, fallback Georgia/serif; corpo e links: **Jost**, fallback Segoe UI/sans-serif. Fontes Google e arquivos woff2 retornaram 200; `document.fonts.status = loaded`.

H1: 73,6 px desktop e 40 px mobile. H2 principais desktop: 43,2 px; biografia 35,2 px; fechamento 41,6 px. Hero contém imagem de fundo com gradiente escuro 40%→97%; outro bloco usa fundo fotográfico com gradiente escuro 55%→85%; há também gradiente de `rgb(19,26,51)` para `rgb(28,22,7)`. Isso documenta recursos presentes, não define estética futura.

Todos os caminhos abaixo são relativos à base S1.

| Asset / fonte | Evidência observada | Uso e limite de reutilização |
|---|---|---|
| `logo-as.png` | IMG header/footer; 1536×1024 natural; render desktop 48×32 e 36×24; alt “A|S Mentorias”; HTTP 200 | Marca candidata apenas após **[NEED: evidência de autorização e arquivo oficial]**. Desenho não lido visualmente |
| `amanda-xadrez.jpeg` | IMG 4592×6769 natural; desktop ~387×571; alt associa Amanda, xadrez e visão estratégica; HTTP 200 | Foto candidata, não licença: **[NEED: evidência de direitos do fotógrafo e autorização de uso de imagem]**. Não confirmar aparência pelo alt |
| `fundo-metodo-pv.jpg` | Background CSS do hero, HTTP 200 | **[NEED: leitura visual e origem/licença]**. Não afirmar que contém cérebro apenas pelo nome/contexto |
| `amanda-reflexao.jpg` | Background CSS de DIV com overlay escuro; HTTP 200 | **[NEED: leitura visual, autoria e autorização]** |
| Cérebro referido no briefing | Sem leitura efetiva da imagem nesta execução | Conceito a documentar posteriormente, **não copiar**. Não atribuir significado neurocientífico, método ou credencial ao recurso sem evidência |
| Instagram | Perfil público parcialmente disponível, com interposição de cadastro | Fotos/miniaturas não lidas visualmente, não selecionadas para reutilização; **[NEED: evidência]** de direitos para qualquer uso |

A resolução natural elevada da foto biográfica em relação ao tamanho renderizado é oportunidade de investigação de entrega de imagens; não prova, sozinha, peso em bytes excessivo ou lentidão.

## 4. Desktop/mobile, teclado e acessibilidade

### Observações verificadas

- Desktop: documento 1440 px de largura/4337 px de altura; scrollWidth 1440. Mobile: largura/scrollWidth 390 px, altura 5865 px. Na checagem mobile de bounding boxes não houve elemento com caixa ultrapassando horizontalmente a viewport em mais de 1 px. Isso não cobre todas as larguras, zoom ou estados.
- Alturas aproximadas desktop/mobile: hero 865/931; público 737/1113; conteúdo 640/1045; biografia 616/1114; fechamento 640/694 px. Mobile estende significativamente o percurso. Não concluir que a densidade visual é boa ou ruim sem captura.
- Hierarquia no snapshot: um H1, H2 para seções e H3 para tópicos/públicos. Header e footer possuem landmarks; **não existe elemento `main`**.
- Header sticky; âncora interna posicionou topo de `#conteudo` em −0,4 px, com header ainda presente. Possível sobreposição do início do bloco deve ser conferida visualmente; não comprovada ocultação de título (há espaçamento interno).
- Amostra de oito Tabs no mobile percorreu CTA final, links do rodapé, CTA mobile, saída para body e retorno ao cabeçalho/hero. Não se observou aprisionamento nessa amostra; não foi ensaio integral de leitor de tela ou ordem desde carga limpa.
- Links focados apresentaram outline computado dourado `2px solid rgb(243,211,134)`; CSS define `outline-offset: 3px`. Isso comprova regra e aplicação computada, não visibilidade visual em todos os fundos.
- CSS para `prefers-reduced-motion: reduce` muda scroll para auto e desliga transitions. Preferência não emulada nesta rodada.
- Alvos: cabeçalho ~147×40; hero WhatsApp desktop ~351×54/mobile 334×74; final mobile 284×74; CTA mobile 350×48. Links do rodapé têm caixas de texto com 20 px de altura. Há oportunidade de conforto tátil; 20 px isoladamente não comprova violação WCAG 2.2 AA, pois espaçamento e exceções não foram auditados.
- Todas as três IMG possuem alt. Backgrounds CSS não oferecem alt equivalente; adequação depende da função/conteúdo ainda não visualmente lido.

### Oportunidades para Discovery, não decisões de implementação

| Prioridade indicativa | Evidência | Impacto / questão a resolver |
|---|---|---|
| P2 | Data sem ano/fuso no texto do evento | Evitar ambiguidade temporal na próxima comunicação; confirmar evento vigente |
| P2 | “Garantir vaga” leva a conversa, não confirmação local | Confirmar com Growth como reserva se conclui; alinhar expectativa do CTA |
| P2 | Ausência de `main` | Considerar landmark principal na futura experiência; não é parecer global WCAG |
| P2 | Links de contato de 20 px de altura e header de 40 px | Validar toque/espaçamento real em aparelho e zoom |
| Investigação | Branco sobre verde nos CTAs; textos sobre backgrounds com overlay | Medir contraste e conferir pixels antes de aprovação; não declarar conformidade |
| Investigação | Foto 4592×6769 usada menor | Verificar bytes/formato/variantes e carregamento antes de estabelecer orçamento |
| P3 | Favicon 404 | Ausência de recurso de identificação da aba; conferir na nova superfície |
| Discovery | Oferta pública é um workshop, não catálogo | Levantar serviços reais, escopo, público e provas antes de estruturar institucional/portfólio |

Positivos observados: oferta primária explícita, conteúdo do encontro discriminado, títulos hierárquicos, CTA interno funcionando, destino de contato consistente, alt presente, foco definido e ausência de overflow horizontal no mobile amostrado. Não há aprovação visual, de acessibilidade ou de produto.

## 5. Claims: observado não é comprovado

Todos os trechos S1 abaixo foram encontrados no site. “Observado” comprova a publicação da frase, **não sua veracidade**. Nenhum claim teve validação independente nesta execução.

| Trecho exato | Fonte/local | Classificação e evidência necessária |
|---|---|---|
| “Workshop gratuito · Vagas limitadas” | S1 hero | Oferta/escassez autodeclarada; **[NEED: evidência]** de condições/capacidade e vigência |
| “12 de setembro” / “10h” / “Online e ao vivo” | S1 hero | Informação de agenda publicada; **[NEED: evidência]** de ano, fuso e realização |
| “Em 50 minutos, ao vivo, você recebe as chaves práticas para falar com segurança, influenciar pessoas e destravar a sua presença executiva” | S1 hero | Promessa de benefício autodeclarada; não resultado comprovado |
| “100% gratuito · Encontro ao vivo, sem gravação disponível depois.” | S1 hero | Condição autodeclarada; não conferida por participação |
| “Mentora de comunicação, liderança e carreira” | S1 biografia | Posicionamento profissional autodeclarado |
| “Formada em Letras e Educação Física, com pós-graduações em Ensino de Línguas e em Neuropsicopedagogia” | S1 biografia | Formação autodeclarada; **[NEED: evidência]** documental antes de tratar como validada |
| “mais de 13 anos de sala de aula” / “+13 anos em sala de aula” | S1 biografia/badge | Experiência autodeclarada; **[NEED: evidência]** temporal |
| “fundadora da A\|S Mentorias, escritora e colunista” | S1 biografia | Papéis autodeclarados; **[NEED: evidência]** de fundação, publicações e coluna |
| “Membra · Sociedade Brasileira de PNL” | S1 badge | Filiação autodeclarada; **[NEED: evidência]** vigente; não implica certificação clínica |
| “Colunista · Revista A Cúpula” | S1 badge | Autodeclaração; **[NEED: evidência]** de autoria/publicação |
| “a transformação acontece em tempo real, junto com o grupo” | S1 fechamento | Claim promocional, não prova de transformação |
| “Liderança não é sobre falar mais alto; é sobre falar com elegância, clareza e autoridade.” | S1 citação | Frase atribuída à própria profissional, não testemunho independente |
| “Comunicação Executiva & Presença de Liderança 👑 Lidero A Cúpula 📍” | S3 bio parcial | Autodeclaração do perfil; não valida títulos/afiliação |

Não foram encontrados no texto da landing page depoimentos de clientes, resultados mensuráveis, empresas atendidas ou estudos de caso. Não inventar esses elementos para preencher uma reconstrução.

## 6. Instagram: acesso público parcial

S3 carregou o título **“Amanda Schurnovski | Comunicação | Carreira | Liderança (@asmentorias.oficial) • Fotos e vídeos do Instagram”**. O snapshot expôs a bio parcial:

> Você entrega muito. Sua voz já entrega o mesmo? Comunicação Executiva & Presença de Liderança 👑 Lidero A Cúpula 📍

Havia “mais” e link exibido para a landing page “e mais 1”; bio completa e segundo destino não abertos. Destaques nomeados: **Treinamentos; A Cúpula 🦅 📚; Guias; Comece aqui; Serviços; Mentoria; Resultados**. Nomes são observados, não validação do conteúdo desses destaques. Grade com links de posts/reels foi detectada, sem leitura de legendas ou imagens.

Um dialog de cadastro sobrepôs o perfil: **“Veja fotos, vídeos e muito mais de asmentorias.oficial”** / **“Cadastre-se e não perca nenhum post de asmentorias.oficial.”** Botões “Cadastre-se” e “Entrar”. A inspeção foi encerrada nesse limite, sem login nem tentativa de contorno. Contadores de seguidores não usados como prova de autoridade. Nenhuma conclusão sobre paleta, retratos, tipografia dos posts, resultados ou identidade visual do Instagram é sustentada por esta rodada.

## 7. Carregamento e console — somente observação desta sessão

S1 retornou 200; as quatro imagens identificadas, CSS Google Fonts e três woff2 retornaram 200. Console: **1 erro**, `Failed to load resource: the server responded with a status of 404 ()` em `https://asmentorias-beep.github.io/favicon.ico`; nenhum warning observado na landing page.

Navigation Timing da única navegação inicial, sem throttling controlado: responseEnd ~158,3 ms; DOMContentLoaded ~169,6 ms; load ~784,1 ms. São tempos locais do navegador, **não benchmark**, Core Web Vitals, mediana, SLA ou experiência típica. Página estava disponível para consulta após navegar; carregamento visual aparente não foi validado por frames/screenshots. Sem Lighthouse, carga, medidas LCP/CLS/INP, rede móvel real, bytes auditados ou avaliação de cache.

## 8. Handoff e pendências

- Saída criada: este relatório apenas. Sem código, stack escolhida, plano/tasks de produto, assets gerados, commit/push/deploy ou mutação remota.
- **[NEED: evidência]**: execução autorizada de screenshots no worktree e leitura efetiva de todas as imagens, inclusive cérebro; inspeção de composição desktop/mobile e contraste sobre fundos; autorização de reutilização de marca/fotos; validação de credenciais/ofertas/agenda; eventual acesso público complementar ao Instagram sem contornar cadastro.
- A prioridade é completar a evidência visual, não definir direção de arte final. Product/Growth podem usar o inventário textual e as questões acima, sem tratar hipóteses como requisitos aprovados.
- **Status da primeira rodada: PARTIAL. Complemento visual e estado atualizado abaixo.**

## 9. Complemento visual — capturas efetivamente inspecionadas

### Método e proveniência

- Inspeção somente leitura de S1 em 2026-09-05, 18:49–18:53 UTC. Nenhuma alteração do site, contato, login, instalação, delegação ou ação remota de escrita. Único arquivo documental alterado: este relatório.
- Todas as capturas usaram `browser_take_screenshot` **sem filename**, `scale: css`, viewport (não fullPage). O destino padrão funcionou em todas as 15 capturas. Não houve nova tentativa de screenshot em W:, cópia ou ampliação de permissões.
- **Leitura visual efetiva:** as 15 imagens foram retornadas inline pela ferramenta e lidas diretamente pelo modelo com visão, não inferidas por DOM/alt. Não foi necessário chamar `read_image` nem abrir os assets isoladamente: cérebro e ambos os retratos são distinguíveis nas capturas renderizadas.
- Os caminhos na tabela são **exatamente os caminhos relativos retornados pelo MCP**, relativos ao ambiente de saída do servidor, não ao worktree. A raiz absoluta não foi confirmada. Uma consulta de metadados ao candidato `C:\Users\felip\.playwright-mcp\page-2026-09-05T18-49-14-555Z.png` retornou `ENOENT: no such file or directory`; esse candidato NÃO é declarado localização real. Os anexos retornados pelo MCP permanecem a referência verificável; não houve tentativa de localizar/copiar para destino negado.
- Regras locais relidas; consulta Obsidian por AS Mentorias trouxe apenas resultado de outro projeto, não usado como decisão visual. Skills Impeccable e audit lidas; trecho de critique consultado como critérios de composição. Não é execução integral do comando critique: avaliação em contexto único, sem detector/score/dupla avaliação, em respeito ao escopo sem delegação e sem implementação. Nenhuma direção visual foi definida; biblioteca de referências externas não foi necessária para esta observação do existente.
- Routing solicitado: Astra low; identidade Astra informada pelo runtime. Sem inspeção de headers de despacho, portanto esforço não certificado por este relatório.

### Índice de evidências lidas

`y` representa scroll vertical em CSS px. Segmentos sobrepostos cobrem header, cinco sections, citação e footer. As barras fixas permanecem nas capturas e não foram removidas artificialmente.

| ID | Viewport / y | Conteúdo lido | Caminho retornado pelo MCP |
|---|---|---|---|
| D1 | 1440×900 / 0 | Header e hero, cérebro, CTAs | `.playwright-mcp\page-2026-09-05T18-49-14-555Z.png` |
| D2 | 1440×900 / 800 | Público completo | `.playwright-mcp\page-2026-09-05T18-49-29-720Z.png` |
| D3 | 1440×900 / 1600 | Assuntos completos e transição fotográfica | `.playwright-mcp\page-2026-09-05T18-49-44-479Z.png` |
| D4 | 1440×900 / 2300 | Citação e início da biografia | `.playwright-mcp\page-2026-09-05T18-49-59-441Z.png` |
| D5 | 1440×900 / 2900 | Retrato de xadrez, biografia e credenciais | `.playwright-mcp\page-2026-09-05T18-50-12-374Z.png` |
| D6 | 1440×900 / 3437 | Conversão final e footer completos | `.playwright-mcp\page-2026-09-05T18-50-28-373Z.png` |
| M1 | 390×844 / 0 | Header, hero, cérebro e CTA primário | `.playwright-mcp\page-2026-09-05T18-50-47-816Z.png` |
| M2 | 390×844 / 680 | CTA secundário, apoio e título do público | `.playwright-mcp\page-2026-09-05T18-51-05-749Z.png` |
| M3 | 390×844 / 1300 | Quatro públicos completos | `.playwright-mcp\page-2026-09-05T18-51-17-471Z.png` |
| M4 | 390×844 / 1980 | Separador, título e primeiros assuntos | `.playwright-mcp\page-2026-09-05T18-51-35-914Z.png` |
| M5 | 390×844 / 2560 | Assuntos restantes e transição | `.playwright-mcp\page-2026-09-05T18-51-51-572Z.png` |
| M6 | 390×844 / 3160 | Citação, retrato sentado e início da foto de xadrez | `.playwright-mcp\page-2026-09-05T18-52-03-837Z.png` |
| M7 | 390×844 / 3700 | Foto de xadrez e primeiro parágrafo biográfico | `.playwright-mcp\page-2026-09-05T18-52-16-977Z.png` |
| M8 | 390×844 / 4350 | Biografia restante, credenciais e abertura da conversão | `.playwright-mcp\page-2026-09-05T18-52-32-132Z.png` |
| M9 | 390×844 / 5021 | Conversão restante, contatos e copyright | `.playwright-mcp\page-2026-09-05T18-52-46-876Z.png` |

### Localização atual verificada — atualização documental após movimentação

- O operador informou ter movido `.playwright-mcp` para dentro do projeto e prefere evidências locais. **Arquivos movidos pelo operador, não recapturados.**
- A listagem local confirmou **todos os 15 PNGs D1–D6/M1–M9 do índice acima**, com nomes exatamente correspondentes e tamanhos não nulos. Para localização atual, cada caminho da tabela deve ser resolvido relativamente a `W:\FP\as-mentoria-concept\`: a raiz verificada é `W:\FP\as-mentoria-concept\.playwright-mcp\`. Assim, D1 está em `W:\FP\as-mentoria-concept\.playwright-mcp\page-2026-09-05T18-49-14-555Z.png` e M9 em `W:\FP\as-mentoria-concept\.playwright-mcp\page-2026-09-05T18-52-46-876Z.png`, com a mesma regra exata para todas as demais linhas. As datas/horas 2026-09-05 18:49–18:52 são as registradas nos nomes originais.
- Auxiliares também confirmados: `W:\FP\as-mentoria-concept\.playwright-mcp\console-2026-09-05T18-49-02-991Z.log` (142 bytes) e `W:\FP\as-mentoria-concept\.playwright-mcp\page-2026-09-05T18-49-03-576Z.yml` (6728 bytes); conteúdo não relido nesta atualização.
- Os destinos originais retornados pelo MCP e a tentativa histórica com `ENOENT` ficam preservados como **proveniência histórica**. A ressalva anterior de raiz absoluta não confirmada descreve a rodada original, não a localização atual dos arquivos movidos.
- Verificação limitada a presença, nomes e tamanhos locais, sem comparação de hashes com anexos originais. **Nenhuma ausência ou divergência de nomes encontrada** no conjunto esperado. Não houve nova inspeção visual, pesquisa, navegador ou captura; **nenhuma nova configuração MCP foi validada**. Conclusões e limites da auditoria permanecem inalterados.

### Composição e hierarquia observadas — desktop

- **D1:** conteúdo alinhado à esquerda, com ampla área vazia acima e à direita; título serifado em duas linhas domina a leitura. A segunda linha é dourada e itálica. Data em caixa fina antecede eyebrow espaçado. CTA verde preenchido tem maior saliência que o secundário transparente; cabeçalho usa CTA dourado, criando duas codificações cromáticas para o mesmo destino. Não é proposta de mudança.
- **Cérebro realmente observado em D1/M1:** ilustração frontal de cérebro com dois hemisférios, construída por fios dourados entrecruzados e pontos luminosos; ondas finas horizontais saem para os lados. Ao redor, textura azul-marinho semelhante a tecido dobrado, veios dourados nas bordas e partículas. No desktop o cérebro ocupa a região inferior central, **atrás de parte do título, parágrafo e CTAs**, e sua base chega ao limite inferior da primeira viewport. Não é fotografia anatômica nem prova de método/neurociência. A relação com comunicação é interpretação possível, não significado institucional confirmado.
- **D1, legibilidade:** título claro/dourado continua distinguível sobre a arte, mas os fios competem localmente com as letras; parágrafo azul-acinzentado e nota pequena têm menor destaque, sobretudo onde cruzam o cérebro. Leitura foi possível na captura; isso não equivale a contraste WCAG medido.
- **D2/D3:** público e assuntos usam o mesmo grid 2×2 com bordas finas, sem ícones. Cabeçalhos dourados serifados e descrições menores azuladas estabelecem hierarquia consistente. Coluna geral larga, título do público com três linhas e espaço vazio à direita; intervalos verticais generosos desaceleram o percurso. Uma onda dourada fina separa os blocos. Ambos cabem integralmente nos respectivos segmentos.
- **D4:** faixa fotográfica full-bleed interrompe os grids. Citação grande, branca, itálica e centralizada em duas linhas, com atribuição dourada. Retrato lateral ao fundo, escurecido; o enquadramento horizontal privilegia cabeça/rosto e corta o restante do corpo. Texto atravessa cabelo/testa; permanece legível no segmento, mas a fotografia não tem contraste uniforme.
- **D4/D5:** biografia em duas colunas: foto vertical à esquerda, nome e texto à direita. A foto mostra a pessoa apresentada como Amanda pelo site, blazer escuro, blusa vermelha, mão junto ao rosto e tabuleiro com peças de xadrez no primeiro plano. O tabuleiro é parcial no enquadramento; não afirmar gesto de mover uma peça ou resultado de partida. A foto é mais clara e cromaticamente mais viva que a faixa anterior. Credenciais aparecem como texto dourado pequeno sob uma linha, não selos certificados visualmente.
- **D6:** fechamento centralizado dentro de grande retângulo com borda dourada discreta e fundo azul/escuro levemente quente. Data, título, parágrafo, quatro etiquetas e CTA formam sequência vertical clara. Rodapé é visualmente secundário, com marca minúscula e contatos pequenos alinhados à direita. Monograma dourado é perceptível, mas detalhes do logo não são legíveis em sua escala renderizada.

### Experiência mobile e cortes efetivos

- **M1:** marca quebra em duas linhas ao lado do monograma; CTA do cabeçalho cabe sem colisão. Há grande intervalo entre header e data. A data quebra internamente: calendário/dia, dia do mês e modalidade se distribuem em múltiplas linhas, enquanto a hora fica curta. É legível, mas fragmenta a leitura da agenda em comparação ao desktop (**P2 indicativo**).
- **M1:** cérebro aparece proporcionalmente menor e centrado atrás do título e começo do parágrafo; as ondas cruzam o título. A textura de tecido domina o alto do hero. O H1 mantém duas linhas; parágrafo passa a cinco linhas. CTA primário quebra em duas linhas e ocupa quase toda a largura útil.
- **M1/M2:** CTA secundário não fica integralmente disponível na primeira tela: sua parte inferior passa sob a barra fixa de conversão. O scroll em M2 o revela por inteiro junto à nota de gratuidade. Não é conteúdo permanentemente inacessível; é perda de descoberta na primeira dobra (**P2 indicativo**). Três acessos de conversão coexistem no hero (header, primário e fixo), com dois verdes visíveis ao mesmo tempo.
- **M2–M5:** grids passam a uma coluna, com padding interno amplo e blocos separados por linha. Todas as descrições foram lidas nos segmentos sobrepostos, sem truncamento horizontal observado. Cabeçalhos maiores quebram naturalmente; o título do público ocupa quatro linhas. O ritmo torna o percurso longo, com áreas vazias relevantes nas transições hero/público e público/assuntos.
- **M3–M9:** header e faixa inferior de CTA permanecem visíveis. A faixa inferior cobre aproximadamente 72 px da viewport; o header ocupa aproximadamente outros 72 px. Sobram cerca de 700 px entre ambos para leitura. A passagem de texto por baixo dessas barras é visível, mas o scroll permite recuperá-lo nos segmentos seguintes. No final, copyright e contatos estão acima da barra — não foi observado rodapé permanentemente encoberto.
- **M6:** a faixa da citação mostra mais corpo e contexto do que no desktop: pessoa sentada em banco, roupa clara e pernas cruzadas, fundo com grades/estrutura vertical. A frase ocupa três linhas e atravessa o retrato; overlay escurece o corpo. Essa diferença é um **recorte responsivo real observado**, não uma foto presumida pelo nome do arquivo.
- **M6/M7:** foto de xadrez vem antes da identificação textual da biografia; enquadramento preserva rosto, mão apoiada e parte do tabuleiro. Blusa vermelha e blazer escuro continuam distinguíveis. Texto biográfico abaixo ocupa várias linhas, sem coluna lateral; a leitura exige mais de uma tela.
- **M8/M9:** credenciais quebram em linhas sem se sobrepor. Painel final mantém margem lateral, título em duas linhas, etiquetas em duas filas e CTA em duas linhas. Contatos do footer também quebram; Instagram fica em linha separada. Logo e copyright seguem muito pequenos (**P3 indicativo de legibilidade da marca**, sem conclusão de falha WCAG).

### Síntese e limites remanescentes

A landing mantém linguagem consistente de fundo quase preto/azul, serifas claras e douradas, bordas discretas e CTA verde. Hierarquia dos títulos, continuidade dos grids e reflow em coluna funcionam nas duas larguras lidas. As fricções visuais mais claras são agenda fragmentada no mobile, descoberta reduzida do CTA secundário na primeira dobra, competição da arte do cérebro com texto e escala muito pequena da marca/rodapé. Não há evidência nesta rodada de corte horizontal de conteúdo ou quebra impeditiva da jornada de leitura.

**Pendências visuais anteriores resolvidas:** composição de todas as seções desktop/mobile, conteúdo do cérebro, aparência dos retratos, recorte responsivo e leitura visual dos textos sobre fotografia. A exigência anterior de screenshots especificamente no worktree deixa de ser pendência: os anexos do destino padrão são a evidência desta rodada.

**Permanecem limites:** sem medição de contraste por pixels, zoom/text resize, aparelho físico, leitor de tela, novo ensaio completo de teclado, avaliação de motion, benchmark de performance, verificação de direitos ou claims. Instagram não foi reaberto nem contornado; a limitação de cadastro da seção 6 permanece integralmente. Não há comparação visual comprovada Instagram/site. Acesso público às imagens não autoriza reutilização. Não foram escolhidas direção final, stack, spec, plan ou tasks de produto.

**Handoff: diagnóstico visual solicitado concluído; estado global PARTIAL pelos limites acima. Sem implementação e sem aprovação QA.**
