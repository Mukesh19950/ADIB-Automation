import { BrowserContext, Page } from '@playwright/test';
import { BasePage } from '../core/basePage';
import { ConfigManager } from '../config/configManager';

export class OwnAccount extends BasePage {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    private get paymentCont() {
        return this.page.locator("//li[@id='wsContainer__PYMNTS']");
    }

    private get initiateButton(){
        return this.page.getByRole('button', {name: 'Initiate'});
    }

    async performOAT(){
        await this.uiActions.click(this.paymentCont);
        await this.uiActions.click(this.initiateButton);

    }

}