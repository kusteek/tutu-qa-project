const { test, expect } = require('@playwright/test');

test('Поиск билетов Tutu.ru', async ({ page }) => {
  await page.goto('https://www.tutu.ru/');
  await page.fill('#from', 'Москва');
  await page.fill('#to', 'Санкт-Петербург');
  await page.click('button[type=submit]');
  await expect(page.locator('.search-results')).toBeVisible();
});
