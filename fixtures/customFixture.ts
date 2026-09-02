import { test as base, BrowserContext, Page } from '@playwright/test';
import { BrowserFactory } from '../core/browserFactory';
import { LoginPage } from '../pages/loginPage';
import { UserData } from '../types/UserData';
import { TestDataReader } from '../utils/TestDataReader';
import { WaitActions } from '../wrapper/waitActions';
import { DashboardPage } from '../pages/dashboardPage';

interface CustomFixtures {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    users: UserData;
    waitActions: WaitActions;

}

export const test = base.extend<CustomFixtures>({

    context: async ({ }, use) => {
        const browser = await BrowserFactory.createBrowser();
        const context = await BrowserFactory.createContext(browser);
        await use(context);
        await context.close();
        await browser.close();
    },

    page: async ({ context }, use) => {

        const page = await BrowserFactory.createPage(context);
        await use(page);
        await page.close();
    },

    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },

    dashboardPage: async ({ loginPage, context }, use) => {
        await use(new DashboardPage(loginPage, context));
    },

    users: async ({ }, use) => {
        const users = TestDataReader.getusers();
        await use(users);
    },

    waitActions: async ({ page, context }, use) => {
        await use(new WaitActions(page, context));
    },



});