import { Locator, Page, expect } from "@playwright/test";

export class k6MainPage {
    constructor(
        private page: Page,
        private firstCheckBox: Locator = page.locator('#checkbox1'),
        private checkBox: Locator = page.locator('#checkbox-info-display'),
        ){
            
        }

        async gotoTestK6() {
            await this.page.goto('https://test.k6.io/browser.php', { waitUntil: 'networkidle' })    
        }

        async clickCheckboxOnk6() {
            this.gotoTestK6();
            this.firstCheckBox.check();
        }   
        
        async verifyCheckboxText(text: string) {
            await expect(this.checkBox).toHaveText(text);
        }
}