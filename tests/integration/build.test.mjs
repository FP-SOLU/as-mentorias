import test from 'node:test';
import { URL } from 'node:url';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const html = await readFile(new URL('../../dist/index.html', import.meta.url), 'utf8');

test('build contém documento pt-BR demonstrativo e não indexável', () => {
  assert.match(html, /<html lang="pt-BR"/);
  assert.match(html, /name="robots" content="noindex,nofollow"/);
  assert.match(html, /não é o site oficial da AS/);
  assert.match(html, /PROTÓTIPO INTERNO/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.match(html, /href="#conteudo"/);
  assert.match(html, /<main id="conteudo" tabindex="-1"/);
});

test('protótipo inclui runtime local, sem coleta ou destinos externos', () => {
  assert.match(html, /<script[^>]*src="\/_astro\//);
  assert.doesNotMatch(html, /<(form|iframe|input)\b/i);
  assert.doesNotMatch(html, /(?:href|src)="(?:https?:|\/\/|mailto:|tel:)/i);
  assert.doesNotMatch(html, /rel="canonical"/i);
});

test('contrato CTA, destinos e mídia responsiva constam no HTML', () => {
  assert.equal((html.match(/<button[^>]*data-contact-open/g) ?? []).length, 2);
  assert.equal((html.match(/id="contact-info"/g) ?? []).length, 1);
  assert.match(html, /Sobre o próximo passo/);
  assert.match(html, /nenhum dado é solicitado ou enviado por esta ação/);
  assert.match(html, /<noscript>/);
  assert.match(html, /id="atuacao"/);
  assert.match(html, /id="situacoes"/);
  assert.match(html, /srcset=/);
  assert.doesNotMatch(html, /NEED:|mailto:|wa\.me|Simular.*conversa/);
});

test('hero-v2 preserva copy e usa somente arte decorativa, sem retrato', () => {
  const hero = html.match(/<section class="presence"[\s\S]*?<\/section>/)?.[0];
  assert.ok(hero);
  assert.doesNotMatch(hero, /class="portrait"|amanda-hero|<figcaption/);
  assert.match(hero, /class="sculpture" aria-hidden="true"/);
  assert.match(hero, /\salt(?:="")?(?=\s|>)/); // Astro may serialize an empty attribute without quotes.
  assert.equal((hero.match(/<img\b/g) ?? []).length, 1);
  assert.match(hero, /Clareza para expor/);
  assert.match(hero, /ideias e se posicionar/);
  assert.match(hero, /no trabalho\./);
  assert.match(hero, /Comunicação, liderança e carreira com Amanda Schurnovski\./);
});

test('saída não contém documentos internos ou source maps', async () => {
  const files = await readdir(new URL('../../dist/', import.meta.url), { recursive: true });
  assert.ok(files.includes('index.html'));
  assert.ok(files.every((file) => !/specs|AGENTS|playwright|\.map$|\.md$/.test(file)));
});
