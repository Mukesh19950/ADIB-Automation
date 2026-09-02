import { BrowserContext, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/basePage';
import { ConfigManager } from '../config/configManager';

export class LoginPage extends BasePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    private get userIdInput() {
        return this.page.getByPlaceholder(/Enter your User ID/);
    }

    private get proceed() {
        return this.page.locator("a.proceed");
    }

    private get passwordInput() {
        return this.page.getByPlaceholder(/Enter your password/);
    }

    private get secQuestion() {
        return this.page.locator("//select[@id='securityQus0']");
    }

    private get enterAnswer() {
        return this.page.getByPlaceholder(/Enter your answer/);
    }

    private get submitLogin() {
        return this.page.locator("a.submit");
    }

    async navigate(): Promise<void> {
        const newPagePromise = this.waitActions.waitForNewPage();
        await this.page.goto(ConfigManager.getBaseUrl());
        const newPage = await newPagePromise;
        await newPage.waitForLoadState("domcontentloaded");
        this.page = newPage;
    }

    async login(userid: string, password: string, secQuestion: string, enterAnswer: string) {

        await this.uiActions.pressSequentially(this.userIdInput, userid, 250);
        await this.uiActions.click(this.proceed);
        await this.uiActions.pressSequentially(this.passwordInput, password, 250);
        await this.uiActions.selectByValue(this.secQuestion, secQuestion);
        await this.uiActions.pressSequentially(this.enterAnswer, enterAnswer, 250);
        await this.uiActions.click(this.submitLogin);
    }

}



