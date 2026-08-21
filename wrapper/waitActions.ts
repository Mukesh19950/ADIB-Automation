import { BrowserContext, Page } from "@playwright/test";

export class WaitActions {

  constructor(private readonly page: Page, private readonly context: BrowserContext
  ) {}

  async waitForTimeout(timeout: number): Promise<void> {
    await this.page.waitForTimeout(timeout);
  }

  async waitForNewPage(): Promise<Page> {
    return await this.context.waitForEvent("page");
  }

}