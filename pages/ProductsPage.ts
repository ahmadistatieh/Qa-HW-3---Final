import { Page } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async addFirstItemToCart() {
    await this.page.locator('[data-test^="add-to-cart"]').first().click();
  }

  async addTwoItemsToCart() {
    await this.page.locator('[data-test^="add-to-cart"]').nth(0).click();
    await this.page.locator('[data-test^="add-to-cart"]').nth(0).click();
  }

  async openCart() {
    await this.page.click('[data-test="shopping-cart-link"]');
  }
}