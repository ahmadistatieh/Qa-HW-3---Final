import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../utils/testData';

test.describe('Checkout Feature', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      testData.username,
      testData.password
    );
  });

  test('Complete checkout successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.addFirstItemToCart();

    await productsPage.openCart();

    await checkoutPage.startCheckout();

    await checkoutPage.fillCheckoutInfo(
      testData.firstName,
      testData.lastName,
      testData.postalCode
    );

    await expect(page).toHaveURL(/checkout-step-two/);

    await checkoutPage.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);

    await expect(
      page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
  });
});