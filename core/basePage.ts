import { BrowserContext, Page } from '@playwright/test';
import { uiActions } from '../actions/uiActions';
import { WaitActions } from '../wrapper/waitActions';
import { ExpectUtil } from '../utils/expectUtils';

export class BasePage {

    protected  page: Page;
    protected  uiActions: uiActions;
    protected  waitActions: WaitActions;
    protected  context: BrowserContext;
    protected  expectUtils: ExpectUtil;
   

    
    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.uiActions = new uiActions();
        this.expectUtils = new ExpectUtil();
        this.context = context;
        this.waitActions = new WaitActions(page, context);

       
    }

}
