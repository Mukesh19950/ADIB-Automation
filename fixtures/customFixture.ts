import { test as base, BrowserContext, Page } from '@playwright/test';
import { BrowserFactory } from '../core/browserFactory';
import { LoginPage } from '../pages/loginPage';
import { UserData } from '../types/UserData';
import { TestDataReader } from '../utils/TestDataReader';
import { WaitActions } from '../wrapper/waitActions';

interface CustomFixtures {
    context: BrowserContext;
    page: Page;
    loginPage: LoginPage;
    users: UserData;
    waitActions: WaitActions;

}

export const test = base.extend<CustomFixtures>({

    context: async ({ }, use) => {
        const browser = await BrowserFactory.createBrowser();
        const context = await BrowserFactory.createContext(browser);
        await use(context);
        await context.close();
    },

    page: async ({ context }, use) => {

        const page = await BrowserFactory.createPage(context);
        await use(page);
        await page.close();
    },

    loginPage: async ({ page, context }, use) => {
        await use(new LoginPage(page, context));
    },

    users : async ({}, use) => {
        const users =  TestDataReader.getusers();
        await use(users);
    },
    
    waitActions: async ({ page, context }, use) => {
        await use(new WaitActions(page, context));
    },

});