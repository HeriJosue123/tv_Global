const { test, expect } = require('@playwright/test');

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

for (const viewport of viewports) {
  test(`Interfaz ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ browser }) => {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      ignoreHTTPSErrors: true
    });

    const page = await context.newPage();
    const consoleErrors = [];
    const failedRequests = [];
    const badResponses = [];

    page.on('pageerror', error => consoleErrors.push(error.message));

    page.on('console', message => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    page.on('requestfailed', request => {
      failedRequests.push({
        url: request.url(),
        error: request.failure()?.errorText
      });
    });

    page.on('response', response => {
      if (response.status() >= 400) {
        badResponses.push({
          status: response.status(),
          url: response.url()
        });
      }
    });

    try {
      const response = await page.goto('http://localhost:3000', {
        waitUntil: 'networkidle',
        timeout: 45000
      });

      expect(response, 'El servidor debe devolver una respuesta').not.toBeNull();
      expect(response.status()).toBe(200);

      await expect(page.locator('body')).toBeVisible();
      await page.screenshot({
        path: `test-results/${viewport.name}.png`,
        fullPage: true
      });

      console.log(`\n=== ${viewport.name.toUpperCase()} ===`);
      console.log('HTTP:', response.status());
      console.log('Título:', await page.title());
      console.log('Viewport:', viewport.width, 'x', viewport.height);
      console.log('Contenido:', (await page.locator('body').innerText()).slice(0, 1000));
      console.log('Errores JS:', JSON.stringify(consoleErrors));
      console.log('Solicitudes fallidas:', JSON.stringify(failedRequests));
      console.log('Respuestas HTTP problemáticas:', JSON.stringify(badResponses));

      expect(consoleErrors, 'No debe haber errores JavaScript').toEqual([]);
    } finally {
      await context.close();
    }
  });
}