import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
await mkdir('test-results', { recursive: true });
const browser = await chromium.launch();
try {
  for (const width of [390, 768, 899, 900, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'no-preference' });
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    const position = () => page.evaluate(() => ['.hero-backdrop', '.hero-heading'].map(selector => {
      const el = document.querySelector(selector);
      return new DOMMatrixReadOnly(getComputedStyle(el).transform).m42;
    }));
    const before = await position();
    await page.mouse.wheel(0, 350);
    await page.waitForTimeout(1600);
    const after = await position();
    assert.ok(after[0] - before[0] > 50, `Background must move at ${width}`);
    assert.ok(after[1] - before[1] > 15, `Heading must move at ${width}`);
    assert.ok(after[0] - after[1] > 30, `Layers must move at different speeds at ${width}`);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await page.screenshot({ path: `test-results/parallax-${width}.png` });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.waitForTimeout(200);
    assert.deepEqual(await position(), [0, 0], 'Reduced motion must restore static layers');
    await page.close();
    console.log(`${width}px: background ${after[0].toFixed(1)}px, title ${after[1].toFixed(1)}px; reduced motion OK`);
  }
} finally { await browser.close(); }
