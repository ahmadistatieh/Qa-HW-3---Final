import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test.describe('Login Feature', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      testData.username,
      testData.password
    );

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
      'wrong_user',
      'wrong_password'
    );

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();
  });
});