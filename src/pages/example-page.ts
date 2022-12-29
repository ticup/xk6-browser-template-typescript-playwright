import type { Page } from "@playwright/test/types/test";

export async function clickCheckboxOnk6(page: Page) {
    await page.goto('https://test.k6.io/browser.php', { waitUntil: 'networkidle' })
    page.locator('#checkbox1').check();
}