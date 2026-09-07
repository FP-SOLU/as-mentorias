# AS Mentorias — handoff completo para nova sessão

**Estado (2026-09-07 — FECHADO):** ciclo completo encerrado pelo operador. **G3 APPROVED/CLOSED** ("eu mesmo já validei o site online"); **T09 QA independente DISPENSADO** (não executado — validação humana direta na produção; WCAG integral/leitor de tela/CA-13 reproduzido permanecem não certificados — reabrir se a demo evoluir para produção real). **NO AR:** `https://fp-solu.github.io/as-mentorias/` (noindex; host Pages preserva o hífen; quirk registrado em ERR-050 e no hub da KB). Git main @cb56208 sincronizado com `FP-SOLU/as-mentorias` (revisão final de conteúdo/desenvolvimento; última alteração de doc local pode estar 1 commit atrás — conferir `git status`). Evidências: `specs/as-mentorias/evidence/` (12 arquivos) + gate-log completo. Fora de escopo sem novo requisito: proposta/preço FP (O6), publicação oficial da AS, contato real, analytics, backend. KB: hub `projects/as-mentoria-concept` + patterns (Tailwind base-safe, runs flaky) + ERR-050.

## 1. Como retomar

1. Confirme o workspace: `W:\FP\as-mentoria-concept`.
2. Leia `C:\Users\felip\.dsh\AGENTS.md` e as instruções locais aplicáveis. O antigo `AGENTS.md` local que exigia GPT Astra foi removido pelo operador; não o recrie nem presuma que o override Astra ainda existe.
3. Leia este handoff e, nesta ordem, os artefatos abaixo:
   - `specs/as-mentorias/gate-log.md`
   - `specs/as-mentorias/spec.md`
   - `specs/as-mentorias/research.md`
   - `specs/as-mentorias/plan.md`
   - `specs/as-mentorias/tasks.md`
   - `specs/as-mentorias/evidence/ui-direction.md`
   - `specs/as-mentorias/evidence/visual-checkpoint.md`
   - `specs/as-mentorias/evidence/right-alignment-fix.md`
4. Consulte Obsidian de forma direcionada para regras/ADRs institucionais relevantes; o projeto AS não possui histórico próprio anterior.
5. Verifique estado real dos arquivos, scripts, versões instaladas e processo local antes de alterar ou iniciar qualquer serviço. O diretório não é um repositório Git no momento (`git status` retornou “not a git repository”); não inicialize Git, faça commit ou publique sem nova autorização explícita.
6. Para qualquer biblioteca/API adicional, consulte Context7; para dados mutáveis, use fontes oficiais.

## 2. Routing e ownership

- Preservar os presets/personas: Product → product-architect; arquitetura → tech-architect; visual/frontend → ui-specialist; backend/dados → systems-developer; operações → devops-specialist; qualidade → qa-specialist; Growth → growth-specialist.
- O operador retirou a obrigatoriedade global de Astra. Após isso, solicitou GPT Luna apenas para um ajuste de UI, mas o dispatch avançado não estava exposto naquela sessão e nenhum trabalho Luna ocorreu. **Não trate Luna como novo override global.**
- Aplicar o routing vigente configurado no runtime na sessão nova, salvo instrução direta do operador. Auditar preset/provider/model antes de aceitar handoffs.
- Um único escritor no worktree. O Maestro não implementa trabalho de UI/QA/DevOps para acelerar etapas.

## 3. Gates e autorizações atuais

### Concluídos

- **Product Gate: APPROVED.** Uma one-page profissional/editorial extensível para Amanda + AS Mentorias; conteúdo somente com evidência; demo privada da FP Solutions; sem integrações/publicação.
- **Architecture Gate / G0: APPROVED.** Astro + TypeScript + SSG; sem React/backend enquanto não houver requisito real; CSS autoral; engine de motion permanece aberta para decisão UI proporcional.
- **T01:** direção de arte documentada.
- **T02:** base Astro criada e validada.
- **T03 protótipo:** hero, transição editorial e CTA demonstrativo implementados/validados localmente.

### Pendentes e obrigatórios

- **G1 — consolidar direção visual/design system:** o operador aprovou verbalmente a direção e pediu dois refinamentos já aplicados: hero sem foto, arte cerebral grande atrás do texto, paleta do site real; e alinhamento dos blocos direitos em telas largas. O Maestro precisa apresentar as evidências atuais e obter/registrar aprovação explícita de G1 antes de tratar a direção como consolidada.
- **G2 — asset cerebral final:** somente após G1. O cérebro em uso é um estudo exploratório provisório, não asset final. É permitida geração de imagem quando necessária, mas não gerar pessoa sintética de Amanda nem copiar o cérebro/fundo do site atual. Produzir/autorizar o asset final somente em G2.
- **T04–T07:** página completa, refino renderizado e checks de UI, somente após G1/G2 conforme `tasks.md`.
- **T08:** preparação DevOps local, depois da UI.
- **T09:** QA independente técnico/visual/comercial. O QA deve dar `APPROVED`, `REJECTED` ou `BLOCKED`; não corrigir código. A participação do operador não é pré-condição do verdict técnico.
- **G3:** decisão humana final somente depois de QA `APPROVED`. Não autoriza commit, push, deploy, publicação, domínio, DNS, contato, credenciais ou proposta por inferência.

## 4. Produto aprovado e limites comerciais

- Destino: demonstração privada FP Solutions para futura apresentação à prospect, não site oficial AS.
- Público representado: profissionais em liderança, gestores/coordenadores e profissionais em ascensão, com base no conteúdo publicado.
- Posicionamento: comunicação nas situações de liderança e carreira; clareza ao expor ideias, escuta e posicionamento no trabalho.
- IA extensível, sem obrigar cinco seções: Hero; situações; abordagem/atuação; mentorias/serviços/frentes somente comprovados; Amanda; temas/repertório; provas/credenciais/cases/depoimentos somente verificáveis; CTA final.
- Sem catálogo inventado, números, clientes, resultados, garantias, metodologia proprietária, cases/depoimentos falsos ou provas sociais simuladas. Lacunas permanecem internas como `[NEED: evidência]`, não como placeholders públicos.
- CTA: **“Conversar sobre meu momento”**. Nesta demo, há aviso de que contato não está ativo; a ação revela uma região informativa, sem chatbot, conversa fictícia, WhatsApp, formulário, coleta, envio, reservas, analytics, pixels ou embeds sociais.
- O operador declarou que materiais públicos do site/Instagram podem ser usados na demo/apresentação. Isso não é autorização universal para publicação nem auditoria documental de direitos.

## 5. Direção visual e feedback do operador

### Aprovado como direção

- Transformação comercial nítida, premium e autoral; não basta página bonita/editorial.
- Hero expressivo, assimétrico e tipográfico.
- Paleta derivada da presença real: quase preto azulado, marfim e dourado. Não retornar à candidata ameixa/lilás rejeitada.
- Sem fotografia de Amanda **no hero**; sua identidade textual continua presente. Fotografias poderão ser tratadas em seções futuras, respeitando autorização e direção consolidada.
- Estudo cerebral grande, central, com alpha, atrás de tudo; tratamento recuado/de profundidade; não competir com leitura; nunca cérebro de fios dourados copiado do site atual.
- Motion deve ter propósito narrativo/hierárquico, respeitar mobile, performance e `prefers-reduced-motion`; não usar scroll hijack, preloader, cards repetidos, glassmorphism/blobs/gradientes decorativos ou template SaaS/AI.

### Correções mais recentes já aplicadas

1. Hero corrigido conforme o operador: foto removida, cérebro de estudo grande e ao fundo, paleta real da AS; headline, apoio e CTA preservados.
2. Ajuste wide responsive: os quatro blocos direitos agora acompanham a margem direita do conteúdo em 1440 e 1920, preservando espaço central e blocos esquerdos.

**Não reverter esses ajustes.**

### Pedido ainda não implementado

O operador pediu, na seção **“Situações de trabalho”**:
- centralizar melhor, como grupo, as três frases grandes: “Apresentar uma ideia.”, “Assumir novas responsabilidades.” e “Conversar com a equipe.”;
- remover travessões artificiais e qualquer formulação visível que soe como AI slop, sem reescrever posicionamento aprovado.

Isso é um refinamento estreito de UI em T03/G1. Deve ser realizado pelo UI Specialist, validado nas larguras 1920×1080, 1440×900, 768×1024, 390×844 e 320×844, e não pode alterar hero, paleta, cérebro, textos/claims aprovados ou outros blocos sem nova autorização.

## 6. Estado técnico verificado

- Stack instalada: Astro `7.3.1`, TypeScript `6.0.3`, npm `11.7.0`; ver `package.json`.
- Scripts reais:
  - `npm run dev` — loopback `127.0.0.1:4321`
  - `npm run preview` — loopback `127.0.0.1:4321`
  - `npm run typecheck`
  - `npm run lint`
  - `npm run build`
  - `npm test`
- Último ajuste de alinhamento passou: typecheck, lint, 4 testes unitários, 5 integrações e build.
- Preview local foi observado em `http://127.0.0.1:4321/`, porém era processo preexistente com PID 21928 (ancestrais 3412/15648) e não job gerenciado. **Verificar se está ativo e a origem antes de reutilizar, encerrar ou iniciar outro.** Nunca tocar DSH em `3080`.
- Evidências Playwright devem permanecer em `W:\FP\as-mentoria-concept\.playwright-mcp\`. O operador moveu essa pasta para dentro do projeto. Em sessões anteriores, screenshots relativos às vezes saíram em `W:\FP`; use destino absoluto no projeto e confirme o arquivo antes de afirmar que a configuração está estável.

## 7. Evidências mais úteis

- Hero final em 1440: `.playwright-mcp/hero-v2-1440-final.png`
- Hero final em mobile: `.playwright-mcp/hero-v2-390-final.png`, `hero-v2-320-final.png`, `hero-v2-768-final.png`
- Hero wide após alinhamento: `.playwright-mcp/right-align-1920-hero.png`
- Seção/rodapé wide após alinhamento: `.playwright-mcp/right-align-1920-bottom.png`
- Evidências, bbox e checks do alinhamento: `evidence/right-alignment-fix.md`
- Evidência hero, contraste, motion e a11y parcial: `evidence/visual-checkpoint.md`
- Estudo cerebral provisório: fonte original SHA-256 `acfc69f4cc4443f2fa9544fdd53f7bb787463ad907b4fb730204e170a057393f`, 1448×1086, PNG com alpha. Não promovê-lo a asset final sem G2.

## 8. Próxima ação recomendada

1. Delegar ao **UI Specialist** somente o refinamento pendente da seção Situações.
2. Exigir revisão renderizada e evidência com screenshots/medidas antes/depois nas cinco larguras; manter testes reais.
3. Maestro apresenta G1 ao operador com o hero e a seção Situações atualizados, pergunta aprovação explícita de direção/design system e para.
4. Somente com G1 aprovado: solicitar G2 para o asset cerebral final; depois executar T04 em sequência, sem escritores concorrentes.

## 9. O que não fazer

- Não pular G1/G2/QA/G3.
- Não implementar a página inteira antes de G1/G2.
- Não usar o estudo cerebral provisório como se fosse o asset final.
- Não criar React, backend, banco, integrações, analytics, contatos reais ou publicação sem novo requisito/gate.
- Não fazer commit, push, deploy, DNS, domínio, contas, credenciais ou proposta comercial agora.
- Não alegar QA, WCAG integral, LCP/CLS finais ou produção validada: ainda não foram concluídos.
