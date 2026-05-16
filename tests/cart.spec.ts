import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { testData } from '../utils/testData';

test.describe('Cart Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      testData.username,
      testData.password
    );
  });

  test('Add single item to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addFirstItemToCart();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('1');

    await productsPage.openCart();

    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('Add multiple items to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.addTwoItemsToCart();

    await expect(
      page.locator('[data-test="shopping-cart-badge"]')
    ).toHaveText('2');

    await productsPage.openCart();

    await expect(page.locator('.cart_item')).toHaveCount(2);
  });
});