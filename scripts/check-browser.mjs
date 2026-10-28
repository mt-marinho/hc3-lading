import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('test-results', {recursive:true});
const browser = await chromium.launch();
const errors = [];
try {
 for (const reducedMotion of ['no-preference', 'reduce']) {
  for (const width of [390, 1440]) {
   const page = await browser.newPage({ viewport: {width, height:900}, reducedMotion });
   page.on('pageerror', e => errors.push(e.message));
   page.on('console', m => { if(m.type() === 'error') errors.push(m.text()); });
   await page.goto('http://127.0.0.1:5173/', {waitUntil:'networkidle'});
   await page.evaluate(() => document.fonts.ready);
   await page.waitForTimeout(2200);
   assert.equal(await page.locator('h1').count(),1);
   const pinCount = await page.locator('.pin-spacer').count();
   assert.equal(pinCount, width >= 900 && reducedMotion === 'no-preference' ? 1 : 0);
   await page.screenshot({path:`test-results/hero-${width}-${reducedMotion}.png`});
   for(const section of ['sobre','servicos','projetos','contato']) {
    await page.locator(`#${section}`).evaluate(el => window.scrollTo({top:el.getBoundingClientRect().top + scrollY - 105,behavior:'instant'}));
    await page.waitForTimeout(1500);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),false,`Overflow ${width} ${section}`);
    await page.screenshot({path:`test-results/${section}-${width}-${reducedMotion}.png`});
   }
   if (reducedMotion === 'reduce') await page.screenshot({path:`test-results/full-${width}.png`, fullPage:true});
   await page.getByRole('button',{name:/Reformas e modernizações/}).click();
   assert.equal(await page.locator('#service-panel-2').isVisible(),true);
   assert.equal(await page.locator('#service-panel-0').isVisible(),false);
   const project = page.getByRole('button',{name:'Ampliar imagem: Forma & presença'});
   await project.click();
   assert.equal(await page.locator('.media-dialog').evaluate(d => d.open),true);
   assert.equal(await page.evaluate(() => document.documentElement.classList.contains('dialog-open')),true);
   await page.keyboard.press('Escape');
   assert.equal(await project.evaluate(el => el === document.activeElement),true);
   assert.equal(await page.locator('.media-dialog').evaluate(d => d.open),false);
   await page.getByRole('button',{name:'Conheça nosso olhar'}).click();
   await page.waitForFunction(() => document.querySelector('video')?.readyState >= 1);
   assert.equal(await page.locator('video').evaluate(v => v.videoWidth),720);
   await page.locator('video').evaluate(v => v.play());
   await page.waitForFunction(() => document.querySelector('video')?.currentTime > .1);
   await page.getByRole('button',{name:'Fechar visualização'}).click();
   assert.equal(await page.locator('video').count(),0);
   if(width < 768) {
    await page.getByRole('button',{name:'Abrir menu'}).click();
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('button',{name:'Abrir menu'}).evaluate(el => el === document.activeElement),true);
    await page.getByRole('button',{name:'Abrir menu'}).click();
    await page.locator('.menu-dialog').getByRole('link',{name:'Projetos'}).click();
   } else await page.getByRole('navigation',{name:'Navegação principal'}).getByRole('link',{name:'Projetos'}).click();
   await page.waitForTimeout(2300);
   const position = await page.locator('#projetos').evaluate(el=>el.getBoundingClientRect().top);
   assert.ok(position >= 0 && position < 150,`Anchor position ${position}`);
   for(const link of await page.locator('a[href*="wa.me"]').all()) assert.equal(new URL(await link.getAttribute('href')).pathname,'/5567998037643');
   assert.equal(await page.evaluate(()=>document.documentElement.classList.contains('dialog-open')),false);
   console.log(`${width}px / ${reducedMotion}: sections, pin, dialogs, video, services, anchors, WhatsApp OK`);
   await page.close();
  }
 }
 const page = await browser.newPage({reducedMotion:'reduce'});
 await page.goto('http://127.0.0.1:5173/',{waitUntil:'networkidle'});
 for(const width of [375,390,768,1024,1280,1440,1920,2560]){
  await page.setViewportSize({width,height:1000});
  const result=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth > innerWidth,broken:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash), lines:Math.round(document.querySelector('h1').getBoundingClientRect().height / parseFloat(getComputedStyle(document.querySelector('h1')).lineHeight))}));
  assert.equal(result.overflow,false,`Overflow at ${width}`);assert.deepEqual(result.broken,[]);assert.ok(result.lines<=3,`Heading wraps: ${width}`);
 }
 await page.close();
 assert.deepEqual(errors,[]);
 console.log('Eight viewport sizes and browser console: OK');
} finally {await browser.close();}
