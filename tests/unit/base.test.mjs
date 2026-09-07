import test from 'node:test';
import assert from 'node:assert/strict';
import { initContactInfo } from '../../src/scripts/contact-info.ts';

function fixture() {
  let focus;
  const element = () => ({ hidden: false, attrs: {}, listeners: new Map(), setAttribute(k,v) { this.attrs[k]=v; }, addEventListener(k,v) { this.listeners.set(k,v); }, removeEventListener(k) { this.listeners.delete(k); }, focus() { focus=this; }, scrollIntoView() {}, click() { this.listeners.get('click')?.({ currentTarget:this }); } });
  const region=element(), heading=element(), back=element(), hero=element(), closing=element();
  const nodes={'#contact-info':region,'#contact-heading':heading,'[data-contact-return]':back};
  const doc={querySelector:s=>nodes[s],querySelectorAll:()=>[hero,closing]};
  const view={scrollX:0,scrollY:250,scrollTo({left,top}) { this.scrollX=left;this.scrollY=top; }};
  return {doc,view,region,heading,back,hero,closing,getFocus:()=>focus};
}
for (const origin of ['hero','closing']) test(`CTA ${origin}: abrir, foco, retorno, reabrir e cleanup`,()=>{
  const f=fixture();const cleanup=initContactInfo(f.doc,f.view);
  assert.equal(f.region.hidden,true); assert.equal(f[origin].hidden,false);
  f[origin].click();assert.equal(f.region.hidden,false);assert.equal(f.getFocus(),f.heading);
  assert.equal(f.hero.attrs['aria-expanded'],'true');assert.equal(f.closing.attrs['aria-expanded'],'true');
  f.view.scrollY=900;f.back.click();assert.equal(f.region.hidden,true);assert.equal(f.getFocus(),f[origin]);assert.equal(f.view.scrollY,250);
  f[origin].click();assert.equal(f.region.hidden,false);f.back.click();f.back.click();assert.equal(f.getFocus(),f[origin]);
  cleanup();assert.equal(f.region.hidden,false);assert.equal(f.hero.hidden,true);assert.equal(f.back.hidden,true);assert.equal(f.hero.listeners.size,0);
});
test('inicialização e abertura idempotentes preservam primeira origem',()=>{
  const f=fixture();const cleanup=initContactInfo(f.doc,f.view);assert.equal(initContactInfo(f.doc,f.view),cleanup);
  f.hero.click();f.view.scrollY=1000;f.closing.click();f.back.click();assert.equal(f.getFocus(),f.hero);assert.equal(f.view.scrollY,250);
  cleanup();initContactInfo(f.doc,f.view);assert.equal(f.region.hidden,true);
});
test('DOM incompleto conserva fallback sem falha',()=>{
  assert.doesNotThrow(()=>initContactInfo({querySelector:()=>null,querySelectorAll:()=>[]},{})());
});
