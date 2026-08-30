import { Locator } from '@playwright/test';

export class uiActions {

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async selectByValue(locator: Locator, value: string): Promise<void> {
        await locator.selectOption(value);
    }

    async pressSequentially(locator: Locator, text: string, delay: number = 0): Promise<void> {
        await locator.pressSequentially(text, {delay});
    }

}