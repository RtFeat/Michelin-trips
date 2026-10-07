import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";

const art = readFileSync(
  "/workspace/artifacts/imagine_images/bbd1761a-2684-45a2-acf9-9f128e0eb8ed.jpg",
).toString("base64");
const font = readFileSync(
  "/workspace/.grok/fonts/CormorantGaramond-Light.ttf",
).toString("base64");

const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<style>
@font-face {
  font-family: "Cormorant Garamond";
  src: url(data:font/ttf;base64,${font}) format("truetype");
  font-weight: 300;
  font-style: normal;
}
html, body {
  margin: 0;
  width: 1792px;
  height: 1008px;
  overflow: hidden;
  background: #F4EFE6;
}
.card {
  position: relative;
  width: 1792px;
  height: 1008px;
  background: url(data:image/jpeg;base64,${art}) center / cover no-repeat;
}
.veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(244, 239, 230, 0.62) 0%,
    rgba(244, 239, 230, 0.28) 30%,
    rgba(244, 239, 230, 0.00) 56%
  );
}
.lockup {
  position: absolute;
  left: 0;
  right: 0;
  top: 132px;
  text-align: center;
  color: #1A1612;
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.l1 {
  font-size: 84px;
  letter-spacing: 0.24em;
  line-height: 1;
  padding-left: 0.24em;
}
.l2 {
  font-size: 76px;
  letter-spacing: 0.36em;
  line-height: 1;
  margin-top: 16px;
  padding-left: 0.36em;
}
.rule {
  width: 72px;
  height: 1px;
  background: #7A3F3A;
  margin: 26px auto 16px;
}
.tag {
  font-size: 15px;
  letter-spacing: 0.58em;
  color: #6E675E;
  padding-left: 0.58em;
  line-height: 1;
}
</style>
</head>
<body>
  <div class="card">
    <div class="veil"></div>
    <div class="lockup">
      <div class="l1">МИШЛЕНОВСКИЕ</div>
      <div class="l2">ПУТЕШЕСТВИЯ</div>
      <div class="rule"></div>
      <div class="tag">САНКТ-ПЕТЕРБУРГ</div>
    </div>
  </div>
</body>
</html>`;

writeFileSync("/workspace/.grok/og-compose.html", html);

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1792, height: 1008 },
    deviceScaleFactor: 2,
  });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(async () => document.fonts.ready);
  await page.waitForTimeout(120);
  await page.screenshot({
    path: "/workspace/.grok/og-raw.png",
    type: "png",
    animations: "disabled",
  });
  console.log("wrote /workspace/.grok/og-raw.png");
} finally {
  await browser.close();
}
