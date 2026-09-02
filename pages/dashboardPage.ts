import { BrowserContext, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/basePage';
import { LoginPage } from './loginPage';

export class DashboardPage extends BasePage {

    private loginPage: LoginPage;

    constructor(loginPage: LoginPage, context: BrowserContext) {
        super(loginPage.getPage(), context);
        this.loginPage = loginPage;
    }

    private get currentPage(): Page {
        return this.loginPage.getPage();
    }

    private get consolidatedBalance(): Locator {
        return this.currentPage.locator("//label[text()='Consolidated Balance']");
    }

    private get paymentMenu(): Locator {
        return this.currentPage.locator("#wsContainer__PYMNTS");
    }

    private get expectInitiate(): Locator {
        return this.currentPage.getByRole('button', {name:'Initiate'});
    }

    async verifyDashboard(): Promise<void> {
        await this.expectUtils.expectToHaveText(this.consolidatedBalance, "Consolidated Balance");
    }

    async clickPaymentMenu(): Promise<void> {
        await this.uiActions.click(this.paymentMenu);
        await this.expectUtils.expectToBeVisible(this.expectInitiate);

    }
}