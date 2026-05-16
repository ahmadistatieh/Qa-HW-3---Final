import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../utils/testData';

test.describe('Remove From Cart Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      testData.username,
      testData.password
    );
  });

  test('Remove item from cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.addFirstItemToCart();

    await productsPage.openCart();

    await expect(page.locator('.cart_item')).toHaveCount(1);

    await cartPage.removeFirstItem();

    await expect(page.locator('.cart_item')).toHaveCount(0);
  });
});