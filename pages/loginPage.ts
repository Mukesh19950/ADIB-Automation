import { BrowserContext, Page } from '@playwright/test';
import { BasePage } from '../core/basePage';
import { ConfigManager } from '../config/configManager';

export class LoginPage extends BasePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    private get corporateIdInput() {
        return this.page.getByPlaceholder(/Enter your Corporate ID/);
    }

    private get usernameInput() {
        return this.page.getByPlaceholder(/Enter your User ID/);
    }

    private get passwordInput() {
        return this.page.getByPlaceholder(/Enter your Password/);
    }

    private get submitButton() {
        return this.page.locator("a.Actionbtn.submit.next");
    }

    async navigate(): Promise<void> {
        const newPagePromise = this.waitActions.waitForNewPage();
        await this.page.goto(ConfigManager.getBaseUrl());
        const newPage = await newPagePromise;
        this.page = newPage;
    }

    async login(custid: string, userid: string, password: string,) {

        await this.uiActions.fill(this.corporateIdInput, custid);
        await this.uiActions.fill(this.usernameInput, userid);
        await this.uiActions.fill(this.passwordInput, password);
        await this.uiActions.click(this.submitButton);
    }

}



