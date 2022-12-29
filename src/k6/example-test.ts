import { check } from 'k6';
import { Options } from 'k6/options';
import { chromium } from 'k6/x/browser';
import { clickCheckboxOnk6 } from '@pages/example-page';


export let options: Options = {
    vus: 1,
    duration: '10s'
};

export default async function () {
    const browser = chromium.launch({
        headless: true
    });
    const context = browser.newContext();
    const page = context.newPage();
    try {
        await clickCheckboxOnk6(page);
        check(page, {
            'checkbox is checked': (p) =>
                p.locator('#checkbox-info-display').textContent() === 'Thanks for checking the box',
        });
    } finally {
        page.close();
        browser.close();
    }
};