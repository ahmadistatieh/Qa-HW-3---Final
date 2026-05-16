import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { testData } from '../utils/testData';

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      testData.username,
      testData.password
    );
  });

  test('Sort products from A to Z', async ({ page }) => {
    await page.selectOption('[data-test="product-sort-container"]', 'az');

    const productNames = await page.locator('.inventory_item_name').allTextContents();

    const sortedNames = [...productNames].sort();

    expect(productNames).toEqual(sortedNames);
  });

  test('Sort products from price high to low', async ({ page }) => {
    await page.selectOption('[data-test="product-sort-container"]', 'hilo');

    const pricesText = await page.locator('.inventory_item_price').allTextContents();

    const prices = pricesText.map(price =>
      Number(price.replace('$', ''))
    );

    const sortedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(sortedPrices);
  });
});