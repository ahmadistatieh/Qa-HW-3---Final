import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeFirstItem() {
    await this.page.locator('[data-test^="remove"]').first().click();
  }
}