import { BrowserContext, Page } from '@playwright/test';
import { uiActions } from '../actions/uiActions';
import { ConfigManager } from '../config/configManager';
import { WaitActions } from '../wrapper/waitActions';

export class BasePage {

    protected  page: Page;
    protected  uiActions: uiActions;
    protected  waitActions: WaitActions;
    protected  context: BrowserContext;
    
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.uiActions = new uiActions();
        this.context = context;
        this.waitActions = new WaitActions(page, context);
       

    }

}
