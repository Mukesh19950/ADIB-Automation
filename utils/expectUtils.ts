import { expect, Page, Locator } from "@playwright/test";
import { TIMEOUT } from "../config/timeoutManager";

export class ExpectUtil {

    async expectToBeVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible({ timeout: TIMEOUT.assertion });
    }

    async expectToHaveText(locator: Locator, text: string): Promise<void> {
        await expect(locator).toHaveText(text, { timeout: TIMEOUT.assertion });
    }

    static async expectToBeEnabled(page: Page, selector: string): Promise<void> {
        await expect(page.locator(selector)).toBeEnabled({ timeout: 10000 });
    }

    static async expectToContainURL(page: Page, urlPart: string): Promise<void> {
        await expect(page).toHaveURL(new RegExp(urlPart), { timeout: 10000 });
    }

    static async expectToBeTrue(actual: boolean): Promise<void> {
        expect(actual).toBeTruthy();
    }

    static async expectToBeFalse(actual: boolean): Promise<void> {
        expect(actual).toBeFalsy();
    }

    static async expectToContainTitle(page: Page, titlePart: string): Promise<void> {
        await expect(page).toHaveTitle(new RegExp(titlePart), { timeout: 10000 });
    }

    public static async assertStringEquals(actual: string, expected: string, message?: string): Promise<void> {
        expect(actual, message).toBe(expected);
    }

    public static async assertStringContains(actual: string, expected: string, message?: string): Promise<void> {
        expect(actual, message).toContain(expected);
    }

}