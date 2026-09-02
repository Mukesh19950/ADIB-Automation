import { chromium, firefox, webkit, Browser, BrowserContext, Page } from '@playwright/test';
import { ConfigManager } from '../config/configManager';

export class BrowserFactory {

  static async createBrowser(): Promise<Browser> {

    const browser = ConfigManager.getBrowser();

    switch (browser) {

      case "firefox":
        return await firefox.launch();

      case "webkit":
        return await webkit.launch();

      default:
        return await chromium.launch();

    }

  }

  static async createContext(browser: Browser): Promise<BrowserContext> {

    return await browser.newContext();
  }

  static async createPage(context: BrowserContext): Promise<Page> {
    return await context.newPage();

  }
}


