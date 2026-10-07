import { chromium } from "playwright";
import { readFileSync } from "node:fs";
const svg = readFileSync("/workspace/public/favicon.svg", "utf8");
const html = `<!DOCTYPE html><html><body style="margin:0;background:#ddd">
${svg.replace('<svg', '<svg width="32" height="32"')}
</body></html>`;
const browser = await chromium.launch({ headless: true, args: ["--no-sandbox", "--disable-dev-shm-usage"] });
try {
  for (const size of [16, 32, 64]) {
    const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 });
    await page.setContent(`<!DOCTYPE html><html><body style="margin:0">${svg.replace('<svg', `<svg width="${size}" height="${size}"`)}</body></html>`);
    await page.screenshot({ path: `/workspace/.grok/favicon-${size}.png`, omitBackground: false });
  }
} finally {
  await browser.close();
}
console.log("rasterized");
