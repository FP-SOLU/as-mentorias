# T04 — asset cerebral final: brief, prompt de produção, critérios de aceite e registro de recebimento (fases 1–2)

Autoria: @ui-specialist (bai/glm-5.3-flash), único escritor do worktree nesta rodada. Nenhum asset gerado nesta fase; nenhuma linha de código/spec/plan/tasks/gate-log alterada. O prompt abaixo será enviado **verbatim** pelo @maestro ao mecanismo autorizado (GPT/codex), por diretiva do operador.

## 1. Status

**T04 fase 2 — concluída (2026-09-06).** Asset final gerado via GPT/codex (`codex_connect_image_generate`, acionamento do Maestro com o prompt §3 verbatim), recebido e preservado byte-idêntico. Registro de recebimento e veredito em §6: **ACEITO** — aprovado para integração em T05, sem consumir as reinterpretações disponíveis. O estudo provisório `campo-presenca-study-01.png` permanece no histórico e **não** foi promovido a final.

## 2. Brief do asset final (§9.3 adaptado à direção hero-v2 consolidada)

Fontes: `evidence/ui-direction.md` §9.3 + G1 APPROVED (paleta AS vigente: night `#070910`, paper `#F4EFE2`, gold `#F3D386`, mineral `#E4DCC8`) + Emenda T04 (`tasks.md:81`) + inspeção do código de integração atual (`index.astro`, `presence.css`).

### Papel

Metáfora plástica de pensamento, expressão e conexão, em diálogo com a mensagem aprovada — **não** clínica, **não** prova neurocientífica, **não** método/diagnóstico, **não** imagem de IA/scanner. Objeto escultórico autoral, isolado, decorativo (sem foco/eventos/alt na integração).

### Forma

- Silhueta cerebral **instantaneamente reconhecível** em vista três-quartos oblíqua.
- Dois volumes cerebrais arredondados, **sutilmente assimétricos**, visualmente conectados, lidos como uma escultura única coerente.
- **Abertura oblíqua deliberada** entre os volumes: intervalo estreito, porém claramente legível, de espaço vazio, **alargando suavemente em direção ao canto inferior direito do frame** — pausa de escuta/expressão, não dano, não modelo explodido.
- Lâminas curvas de **relevo amplo e calmo** sugerindo dobras, sem copiar anatomia fotográfica. Superfícies largas — **nunca fios, filamentos ou strand entrelaçados** (o estudo provisório é construído de ribbons entrelaçados e o baseline publicado é rede de fios: ambos ficam excluídos como referência).
- Excluído: rosquinha, esfera genérica, flor, concha, nó de fita, blob abstrato indistinto.

### Material e luz — decisão de reflexos (materia)

**Decisão: metal neutro acetinado (base prata-cinza `#B9B8C0`, brilhos largos suaves `#ECE8EF`) com sombras profundas frias-carvão entre as lâminas; undertone morno de champanhe APENAS perceptível nas zonas especulares superiores, muito abaixo da saturação do dourado do CTA. Reflexo de ameixa banido; dourado banido.**

Justificativa:

1. **Reflexo de ameixa rejeitado:** é resíduo da direção ameixa rejeitada pelo operador (mundo `#611637` do estudo provisório). Sob o ambiente vigente night `#070910`, o violeta-burgundy lê como cast cromático estranho ao sistema aprovado e reintroduziria a paleta rejeitada no design system consolidado.
2. **Dourado rejeitado:** o CTA é o único sinal dourado saturado do hero (`--gold #F3D386`, botão sólido). Um cérebro com reflexos dourados disputaria essa exclusividade e reaproximaria o asset do problema do baseline ("fios dourados do site atual"). Portanto o tinto morno permitido é undertone de champanhe — ambientação, não cor de marca.
3. **Legibilidade do texto marfim:** o texto (`#F4EFE2`) assenta sobre a arte a 68% de opacidade com véus CSS. Exige-se luminância média controlada, contraste interno forte entre superfícies iluminadas e recesso, sem hot spots estourados; bordas superiores calmas e de baixo contraste para que o véu de topo recue a arte sob o headline sem matar a silhueta.
4. **Anti-vibe cosmética/IA:** metal prata neutro com mínimo tinto morno evita tanto o frio industrial/científico (associativa IA/scanner sob fundo quase-preto azulado) quanto o rose-gold de cosmético/joalheria — critérios de rejeição explícitos de §9.3 e G1.
5. **Luz:** uma key larga e suave do alto-esquerda desenha o relevo; fill suficiente para preservar a silhueta inteira; sombra material nos recessos. Luminância extrema não compete com texto e botão.

### Composição

- Volume principal **centralizado** no frame, nada clipado, margem generosa e uniforme em todos os lados.
- Abertura orientada à **área limpa à direita/baixo-direita** — onde hoje assentam apoio e CTA (coluna 3 em x906 @1440) e para onde a leitura flui rumo a Situações. Massa mais presente no centro/baixo-centro; topo mais recolhido.
- Funciona completo no desktop e reconhecível em fragmento no mobile (uso atual 120vw com overflow recortado: silhueta deve sobreviver a corte horizontal parcial e a ~180px de largura).

### Integração prevista

Mesma arquitetura vigente, sem mudança de contrato: plano absoluto atrás do texto (`z-index:0`, texto em 1), véus por gradientes CSS locais, opacidade .68, WebP responsivo via pipeline Astro (srcset atual `480/780/1100/1448`), fallback de mídia intacto. **Dimensão sugestiva: ≥1448px no maior eixo** — cobre o uso atual de 1100px @1x com folga e os derivados mobile (390px × 120vw @DPR3 ≈ 1404 device px). Observação para T05: cobertura mais nítida em DPR2 desktop beneficiar-se-ia de original maior (ex. ~2048px), se o default do serviço permitir; decisão de derivados é da integração.

### Alpha

**Alpha real é o desfecho preferível** (padrão já validado no estudo e na integração: permite posicionar a arte livremente em T05 sem costura de cor). Se o mecanismo não entregar alpha real, o fallback é **fundo perfeitamente uniforme `#070910`** (idêntico a `--night` do `.presence`), sem vinheta, gradiente, sombra de chão ou glow. Essa dualidade está codificada no prompt como fallback controlado prescrito pelo operador — não é indecisão de direção; os critérios de aceite cobrem ambos os desfechos.

## 3. Prompt de produção final (verbatim — enviar exatamente este texto)

```text
Create one original standalone sculptural image of a single object: an abstract cerebral sculpture for the dark hero of an editorial landing page. It is a plastic metaphor for thought, expression and listening — NOT a medical illustration, NOT a neuroscientific model, NOT artificial-intelligence imagery. Render a clearly recognizable brain silhouette in a three-quarter oblique view, built from broad curved satin-metal lamellae with wide, calm relief suggesting folds; the lamellae must be broad surfaces, never thin wires, strands or filaments. Form two subtly unequal rounded cerebral volumes that remain visually connected and read as one coherent sculpture, with one deliberate oblique opening between them: a narrow but clearly readable interval of empty space, widening gently toward the lower right of the frame, suggesting a pause for listening and expression rather than damage, diagnosis or an exploded anatomical model. The overall silhouette must stay instantly recognizable as a brain; it must never become a donut, a sphere, a flower, a shell, a ribbon knot or a generic abstract blob. Material: neutral satin silver-grey metal, base around #B9B8C0, broad soft highlights around #ECE8EF, and deep cool charcoal shadows resting in the recesses between lamellae; allow only a barely perceptible warm champagne undertone on the uppermost specular zones, far weaker and far less saturated than gold — the metal must read as neutral silver, never golden, never plum or violet, never rose gold, never mirror chrome, glass, translucent resin, neon or glitter. Lighting: one large soft key light from upper left draws the relief across the broad surfaces; add enough soft fill to preserve the whole silhouette, with controlled contrast, no clipped white hot spots, and calm, low-contrast upper edges so the top of the object recedes gently; the object has tangible weight, depth and surface, with mid-range luminance and strong internal form contrast so it remains legible when displayed at reduced opacity over a very dark blue-black background. The complete object must be visible, centered on its canvas with generous even breathing room on all four sides, nothing cropped or cut off, and its broad readable forms must survive display at 180 pixels wide. Isolate it on a genuinely transparent background with real alpha, with absolutely no checkerboard pattern; if real transparency is unavailable, place it on a perfectly uniform flat #070910 background with no vignette, no gradient, no ground shadow and no glow. Strictly exclude: any person, face, body part or portrait; any text, letters, numbers, logo, watermark or signature; any frame, border, mockup or device; any neural-network filaments, circuitry, wires, scanning effects, halos or glows.
```

Notas de mecanismo (para o Maestro, fora do prompt): tamanho e estilo são defaults do serviço — o prompt não trava proporção de canvas; se o default sair abaixo de 1448px no maior eixo, tratar pelo critério de aceite (não ampliar artificialmente). Não reencodar sobre o original.

## 4. Critérios de aceite (lista de rejeição objetiva)

O asset é **rejeitado** se qualquer item falhar:

1. **Silhueta** não reconhecível como cérebro quando exibida a ~180px de largura (inspeção em escala reduzida, não só no original).
2. **Dois volumes** assimétricos + **abertura oblíqua** não claramente visíveis (ou abertura lendo como dano/explosão).
3. Presença de **anatomia clínica/fotográfica**, fios/rede de filamentos, neon, glitter, pessoa, rosto, texto, números ou logo.
4. **Bordas íntegras** — objeto completo, sem clip/corte em qualquer borda.
5. **Alpha real não confirmado** (verificar 0–255, não opaco, sem halo composto) **e** fundo não perfeitamente uniforme `#070910` (qualquer vinheta/gradiente/sombra de fundo reprova).
6. **Material** com vibe cosmética/joalheria: rose-gold, dourado saturado, espelho, vidro/resina translúcida, brilho plástico.
7. **Dimensão:** maior eixo < 1448px (reportar dimensões reais ao Maestro; não aceitar silenciosamente, não upscaling artificial).
8. **Pluralidade:** mais de um objeto, múltiplas variações no mesmo frame, board ou composição de página.
9. **Orientação:** abertura não apontando ao setor inferior/direito do frame (área limpa do CTA).

**Tratamento de falha:** refinar o prompt e/ou gerar novamente — **máximo de 2 reinterpretações** — antes de escalar ao Maestro com evidência do que falhou. Nunca: substituir pelo estudo provisório como final, nem pelo fundo de fios do baseline, nem por foto gerada. Direitos/limites do serviço não são inferidos do acesso à ferramenta.

## 5. Caminhos planejados

- **Original preservado:** `.playwright-mcp/t04-assets/` — sugerido `t04-presenca-final-01-original.<ext-real>` (extensão real do serviço; byte-idêntico ao retorno, sem reencode). O Maestro registra path/bytes/SHA-256/dimensões no recebimento.
- **Cópia de build:** `src/assets/` — path exato definido na integração T05 (hoje o consumo é `src/assets/explorations/campo-presenca-study-01.png`; o final ocupará seu próprio arquivo, sem sobrescrever o estudo).
- **Derivados:** via pipeline Astro (srcset/format WebP), sem hotlinks ou runtime externo.

## 6. Registro do recebimento (fase 2 — preenchido por @ui-specialist, 2026-09-06)

| Campo | Valor |
|---|---|
| Path original | `.playwright-mcp/t04-assets/cerebro-final-original.png` (preservado pelo Maestro, byte-idêntico ao retorno do serviço; nome difere do sugerido em §5 — fato do recebimento, sem impacto) |
| SHA-256 | `96b5e967196b1d7b977cae97e18605b78dfc756a1db02cec14b723b04dd7dcac` — recomputado por mim (`Get-FileHash`), confere com o reportado |
| Bytes | 2.219.920 |
| Dimensões (px) | 1536×1024, paisagem 3:2 (IHDR lido diretamente; maior eixo 1536 ≥ 1448) |
| Formato/MIME | PNG (`image/png`), 8-bit, RGBA — colorType 6 |
| Alpha (real? faixa) | **Alpha real confirmado** por grid-scan do Maestro (System.Drawing, passo 8–16px): ~51% das amostras A=0, ~47% A≥250, ~1,3% semi-alfa (antialiasing de borda). Cantos ≤1,7% de contaminação, alpha máx ~249 — sem halo composto. A "vinheta/gradiente" descrita pelo leitor visual é dado RGB sob alpha=0 — invisível em compositor de navegador. |
| Data de recebimento | 2026-09-06 12:26 (-03) — mtime do arquivo original; aceite registrado 12:38 (-03) |
| Ferramenta/modelo | GPT/codex via `codex_connect_image_generate`, acionado pelo @maestro (tamanho/estilo defaults do serviço, conforme notas de §3) |
| Prompt exato enviado | O bloco de código do §3, enviado verbatim (atestado do Maestro no acionamento; conferência byte a byte não reexecutável por mim nesta fase) |
| Veredito UI sobre critérios de aceite (§4) | **ACEITO** — ver §6.2/§6.3 |

### 6.1 Leituras visuais (fase 2)

**Leitura visual própria (@ui-specialist, ponte modlens — full-size original, passagem focada em geometria e passagem no check 180px):**

- Full-size: escultura cerebral única, centrada, vista lateral; giros/sulcos como dobras metálicas largas e fluidas; material lido como prata acetinada/escovada; **sem texto, fios, circuitos, neon, dourado ou joalheria**; margens livres generosas em todos os lados.
- Foco geométrico: forma lida como "sculptural and artistic rather than anatomically precise"; estrutura descendente inferior tipo brainstem/cerebelo integrada ao corpo no mesmo estilo metálico; nenhum indício de dano, modelo explodido, pluralidade ou clipagem.
- Check 180px: silhueta reconhecível como cérebro estilizado; convoluções legíveis; fundo lido como escuro/transparência; sem texto.
- Ressalvas honestas da leitura: (1) minhas passagens de máquina **não verbalizaram espontaneamente** a abertura oblíqua entre dois volumes (descreveram vista lateral com dobras fluidas) — a abertura está confirmada na leitura full-size do Maestro (cleft oblíquo profundo abrindo à direita/inferior-direito) e **nenhuma das minhas leituras a contradiz** (nenhuma descreve abertura ausente, invertida ou como dano); (2) o leitor usou o vocabulário "ribbon-like flowing folds" para as dobras — avaliado como não-violação: as leituras descrevem superfícies largas, calmas e fluidas, sem fios/filamentos entrelaçados, e o Maestro confirmou "sem fios".

**Leitura visual do Maestro (ponte modlens, full size):** cérebro reconhecível em vista lateral; dois volumes arredondados separados por cleft oblíquo profundo abrindo à direita/inferior-direito; metal prata acetinado sem dourado saturado, sem fios, sem neon; objeto completo, centrado, sem corte; seção posterior tipo cerebelo curvando para baixo (estilizada, não anatômica); extensão inferior tipo brainstem presente.

**Check 180px do Maestro (`cerebro-final-180px-check.png`):** silhueta reconhecível; dois volumes visíveis; abertura lê como "vale sutil" nessa escala.

### 6.2 Veredito por critério (§4)

| # | Critério | Veredito | Evidência |
|---|---|---|---|
| 1 | Silhueta reconhecível a ~180px | **PASSA** | Minha leitura do check 180px: cérebro estilizado reconhecível; check do Maestro: silhueta + dois volumes visíveis |
| 2 | Dois volumes assimétricos + abertura oblíqua, sem ler dano/explosão | **PASSA** (com ressalva registrada) | Cleft oblíquo profundo confirmado na leitura full-size do Maestro; minhas leituras não contradizem e não lêem dano/explosão/explodido. A 180px lê "vale sutil" — aceitável: o brief pede intervalo **estreito** por design, e o uso real mínimo é ~384px, onde o vale permanece legível |
| 3 | Sem anatomia clínica/fotográfica, fios/rede, neon, glitter, pessoa, rosto, texto, números, logo | **PASSA** | "Sculptural and artistic rather than anatomically precise"; sem texto/fios/circuitos/neon em todas as passagens; vocabulário "ribbon-like" avaliado como não-violação (superfícies largas, não filamentos) |
| 4 | Bordas íntegras — objeto completo, sem clip | **PASSA** | Objeto completo, centrado, margens generosas; grid-scan: cantos essencialmente limpos (≤1,7%, alpha máx ~249) |
| 5 | Alpha real (0–255, não opaco, sem halo) E fundo uniforme `#070910` | **PASSA** | Alpha real confirmado (~51% A=0 / ~47% A≥250 / ~1,3% semi-alfa de borda, sem halo composto). O ramo "fundo uniforme" só se aplica na ausência de alpha real; o gradiente relatado é RGB sob alpha=0, invisível em compositor |
| 6 | Material sem vibe cosmética/joalheria (rose-gold, dourado saturado, espelho, vidro, plástico) | **PASSA** | Prata acetinada neutra; leve tinte morno no brilho superior-esquerdo = undertone champanhe permitido (possivelmente luz quente do estúdio), abaixo da saturação do dourado do CTA |
| 7 | Maior eixo ≥ 1448px, sem upscale artificial | **PASSA** | 1536px confirmado no IHDR; sem reencode/upscale |
| 8 | Objeto único, sem variações/board | **PASSA** | Todas as leituras: um único objeto centrado |
| 9 | Abertura apontando inferior/direito (área limpa do CTA) | **PASSA** | Cleft "abrindo à direita/inferior-direito" (leitura do Maestro, full size); nenhuma leitura contraditória |

### 6.3 Decisão final

**ACEITO** — seguir para T05. Nenhuma das 2 reinterpretações foi consumida.

Pontos de atenção julgados (registrados sem reprovar o asset):

- **(a) Extensão inferior tipo brainstem:** estilizada, integrada à escultura, não clínica. Julgo que **enriquece**: dá peso/base ao objeto, reforça a leitura escultórica (não médica) e a identidade da silhueta em escala reduzida. Vigia de integração (§6.4), não defeito.
- **(b) Abertura sutil a 180px:** compatível com o brief aprovado ("intervalo estreito, porém claramente legível" — a estreiteza é feature); legível no uso real (≥384px, hero a 1100px). Recusar por sutileza em 180px seria exigir mais do que o spec pede.
- **(c) Material/vibe:** prata acetinada neutra com tinte morno confinado ao especular superior — dentro da decisão de reflexos do §2; sem cosmético/joalheria.
- **(d) 1536×1024 paisagem vs hero:** comporta o plano absoluto de 1100px @1x e o derivado mobile (390px×120vw @DPR3 ≈ 1404 device px ≤ 1536). Cobertura nítida em DPR2 desktop (2200 device px) exigiria upscale — limitação conhecida, já antecipada em §5; não é gate (critério é ≥1448).

### 6.4 Observações de integração para T05

1. **Proporção/fit:** paisagem 3:2 no plano absoluto de 1100px. Preferir `object-fit: contain`, ou `cover` com `object-position` ajustado; se `cover` em plano mobile mais alto que 3:2 recortar laterais, é aceitável (o brief exige sobrevivência a corte horizontal parcial) — validar em inspeção que massa central e cleft permanecem no frame em 1440 e 390.
2. **Extensão inferior (brainstem-like):** sob os véus de topo e opacidade .68 lê como massa escultórica. Se em renderização real aproximar demais a zona do CTA (coluna 3 @1440), um nudge de `object-position` vertical resolve — não é motivo de rejeição nem de regeneração.
3. **Tinte morno:** confinado ao brilho especular superior-esquerdo; sob o véu de topo deve permanecer abaixo da saturação do dourado do CTA. Verificar em inspeção renderizada que nenhum cast dourado aparece sob o headline.
4. **Pipeline de derivados:** manter srcset 480/780/1100/1448 (1448 ≤ 1536 — sem upscale na cadeia); alpha real dispensa costura de cor em T05; sem reencode do original antes dos derivados.
5. **Fallback achatado (se T05 produzir):** achatar sobre `#070910` uniforme e conferir cantos — o RGB sob alpha=0 carrega um gradiente invisível no compositor, mas um flatten para fallback opaco o tornaria visível.

## 7. Skills — avaliadas nesta fase

| Skill | Carregada? | Aplicação / exclusão |
|---|---|---|
| `imagegen-frontend-web` | Não | É skill de DIREÇÃO de páginas (uma imagem por seção, composição de landing completa). O brief já está consolidado por §9.3 + G1 + Emenda T04; carregá-la acrescentaria prescrições de multi-seção que conflitam com o brief de objeto único, sem relaxar ou aperfeiçoar este prompt. |
| `brandkit` | Não | Direção de brand boards/sistemas de identidade. Não há board, logo system ou identidade a projetar nesta fase — apenas prompt de um asset a partir de direção aprovada. |
| `impeccable` / `no-ai-slop` | Não | Não há UI editada nem copy redigida nesta fase; craft-floor e edição de texto não se aplicam. |
| Visão (ponte modlens) | Aplicada (leitura) | Uma leitura do estudo provisório `campo-presenca-study-01.png` para embasar exclusões de forma (ribbons entrelaçados) e a decisão de reflexos (ameixa presente no estudo → banida no final). Nenhuma geração. |

Nenhuma skill técnica de implementação/carregamento de dependências foi necessária: esta fase é documental e de curadoria de direção já aprovada.

## 8. Integração (T05 — rodada 5b, preenchido por @ui-specialist em 2026-09-06)

### 8.1 Cérebro final — integrado em T05 5b

| Campo | Valor |
|---|---|
| Cópia de build | `src/assets/cerebro-final.png` — copiada byte-a-byte de `.playwright-mcp/t04-assets/cerebro-final-original.png` (Copy-Item, sem reencode) |
| SHA-256 da cópia | `96b5e967196b1d7b977cae97e18605b78dfc756a1db02cec14b723b04dd7dcac` — idêntico ao original (§6); confere |
| Dimensões | 1536×1024 (confirmadas na cópia) |
| Data | 2026-09-06 15:26 (-03) |
| Uso | `index.astro` — import `sculpture` do `.presence`; `<Image>` inalterado: widths `[480, 780, 1100, 1448]` (todos ≤1536, sem upscale), sizes, format webp, quality 85, loading eager |
| Alt | `""` (decorativa, aria-hidden no contêiner) — estudo provisório de explorations permanece no histórico |

### 8.2 Retrato Amanda (xadrez) — integrado em T05 5b

| Campo | Valor |
|---|---|
| Cópia de build | `src/assets/amanda-xadrez.jpg` — copiada byte-a-byte de `.playwright-mcp/t03-assets/amanda-xadrez-original.jpeg` (Copy-Item, sem reencode) |
| SHA-256 | `c6c2f3000dab1716f4c8b8cf0488bf9ee5d399256c4ce87998c04fbfcabbe6a3` |
| Dimensões | 4592×6769 (retrato vertical) |
| Origem | S1/U1 via O4 — retrato real publicado; uso demonstrativo nesta demo |
| Data | 2026-09-06 15:26 (-03) |
| Uso | `index.astro` — seção `.about` (Amanda Schurnovski), `<Image>` widths `[480, 780, 1100]`, sizes `(min-width: 600px) 480px, 90vw`, format webp, quality 82, loading lazy |
| Alt | "Amanda Schurnovski, mentora de comunicação, liderança e carreira" — aprovado (identifica sem inferir competência) |
