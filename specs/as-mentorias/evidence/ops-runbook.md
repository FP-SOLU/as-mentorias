# Runbook — Build & Preview Local (AS Mentorias concept)

**Owner:** @devops-specialist | **Frequency:** As needed (entrega local apenas)
**Last Updated:** 2026-09-06 | **Last Run:** 2026-09-06 18:37 (dry-run T08, PASS)

## 1. Propósito
Preparação operacional **exclusivamente local** do site estático Astro (demo privada). Cobre build, preview em loopback, health checks mínimos de entrega e parada. **Não é QA** — T09 (qa-report) permanece pendente de revisão do operador.

## 2. Pré-requisitos
- Node `>=24.9.0 <25`, npm `>=11.7.0 <12` (engines do `package.json`; verificar com `node -v` / `npm -v`).
- Workspace: `W:\FP\as-mentoria-concept`.
- Sem operações Git nesta fase (estado atual do projeto: nenhum commit/push autorizado).
- Porta TCP 4321 livre em 127.0.0.1. **Nunca** usar a porta 3080 (host do DSH).

## 3. Build
```powershell
npm run build   # node scripts/astro.mjs build
```
**Esperado:** `[build] Complete!` e `dist/` contendo `index.html`, `_astro/*` (9× `.webp` otimizados, 2× `.js`, 1× `.css` único e 3× `.woff2` bundlados com hash — fonts não vão mais para `dist/fonts/`).
**Se falhar:** ver §6 Troubleshooting.

## 4. Preview local (loopback apenas)
```powershell
npm run preview   # astro preview --host 127.0.0.1 --port 4321
```
URL: **http://127.0.0.1:4321/** — bind somente loopback.
- `strictPort: true` ativo (astro.config.mjs): se 4321 estiver ocupada, o preview **falha** — não troca de porta silenciosamente.
- Diagnóstico de ocupação: `Get-NetTCPConnection -LocalPort 4321 -State Listen` → `OwningProcess` → encerrar o PID legítimo (ou o job que o originou). Nunca deixar bind órfão.
- Usar outra porta somente com decisão registrada do operador. **NUNCA** `--host 0.0.0.0` nem qualquer bind em LAN.

## 5. Health checks mínimos (operacional, não QA)
```powershell
$r = Invoke-WebRequest http://127.0.0.1:4321/ -UseBasicParsing
```
Confirmar no conteúdo:
- [ ] HTTP 200 em `/`
- [ ] `<title>` contém "AS Mentorias"
- [ ] Nav com 4 âncoras: `#situacoes` `#atuacao` `#amanda` `#temas`
- [ ] `id="contact-info"` presente
- [ ] `<meta name="robots" content="noindex, nofollow">`
- [ ] CSS emitido único (1 `<link rel="stylesheet">`)
- [ ] 0 referências externas (`src`/`href` `http(s)://` ≠ 127.0.0.1)
- [ ] `Get-NetTCPConnection -OwningProcess <pid> -State Listen` → somente `127.0.0.1:4321` (0 binds `0.0.0.0`)

## 6. Parada
- Terminal interativo: `Ctrl+C`. Job gerenciado: `job_kill <job_id>`.
- Confirmar porta livre: `Get-NetTCPConnection -LocalPort 4321 -State Listen` sem resultado.

## 7. Troubleshooting
| Sintoma | Causa provável | Correção |
|---|---|---|
| Preview falha ao iniciar | 4321 ocupada (strictPort) | Identificar PID via `Get-NetTCPConnection -LocalPort 4321`, encerrar dono legítimo, reexecutar |
| Mudança não aparece | Cache do build | Apagar/reexecutar `npm run build` antes do preview |
| Fontes 404 | `src/fonts/` ausente/incompleto (fonts são bundladas, não mais `public/`) | Verificar `src/fonts/*.woff2` e refs `url('../fonts/...')` em `global.css`; rebuild |
| Imagens webp faltando | Cache de otimização corrompido | `npm run build` limpo (remover `dist/` e cache de assets se necessário) |

## 8. Restrições duras
- **Demo privada noindex,nofollow** — NUNCA publicar, push, deploy, indexar, expor em domínio/DNS ou túnel.
- Sem formulário/contato real; sem analytics.
- Proibido sem autorização explícita do operador: commit, push, merge, deploy, alteração de ambiente, túnel, bind não-loopback.
- Porta 3080 pertence ao host DSH — nunca tocar.
- QA independente (T09) pendente de revisão do operador; este runbook não o substitui nem o aprova.

## 9. Registro de dry-run (evidência de entrega operacional — T08)
| Data/hora | Ação | Resultado |
|---|---|---|
| 2026-09-06 18:37 | `npm run build` | `[build] Complete!` (1 page, 2.18s); `dist/`: index.html + 9 webp + 2 js + 1 css + fonts |
| 2026-09-06 18:37 | `npm run preview` (job pwsh-12) | Listener apenas `127.0.0.1:4321` (pid 15176) |
| 2026-09-06 18:37 | Health checks | HTTP 200; title "AS Mentorias — conceito FP Solutions"; 4 âncoras OK; `id="contact-info"` OK; robots `noindex, nofollow` OK; 1 CSS; 0 refs externas; 0 binds `0.0.0.0` |
| 2026-09-06 18:37 | `job_kill pwsh-12` | Porta 4321 livre confirmada |

## 10. Apêndice — Deploy GitHub Pages (D1a, autorizado pelo operador)

**Destino:** Pages do repo `Kamilyszg/as-mentorias` (público — exigência do plano free). URL final: **https://kamilyszg.github.io/as-mentorias/**

**O que o workflow (`.github/workflows/deploy-pages.yml`) faz:**
1. Trigger: push em `main` ou `workflow_dispatch`.
2. Build com env `DEPLOY_SITE=https://kamilyszg.github.io` e `DEPLOY_BASE=/as-mentorias` — `astro.config.mjs` só aplica `site`/`base` quando essas vars existem.
3. `actions/configure-pages@v5` com `enablement: true` (ativa o Pages no repo sem ação manual na UI).
4. Upload de `dist/` como artifact Pages + `actions/deploy-pages@v4`.

**Re-deploy:** `git push` na `main`, ou rodar o workflow manualmente (Actions → "Deploy to GitHub Pages" → Run workflow).

**Preview local intacto:** sem as env vars, `base`/`site` ficam `undefined` → `npm run dev`/`preview` continuam servindo na raiz (`http://127.0.0.1:4321/`). Verificado em D1a: build local sem prefixo; build com env gera `url(/as-mentorias/_astro/*.woff2)` (3 refs) e assets HTML prefixados (12 refs).

**Nota fonts:** `public/fonts/` → `src/fonts/` + CSS relativo (`url('../fonts/...')`) porque assets de `public/` com URL absoluta **não** recebem o prefixo `base` no Pages (quirk conhecido Astro).

**Status D1a:** repo remoto **não criado** — token MCP GitHub sem escopo para `POST /user/repos` (403). Workflow escrito com owner `kamilyszg` (conta confirmada pelo operador), a confirmar quando o repo existir.
