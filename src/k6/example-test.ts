import { check } from 'k6';
import { Options } from 'k6/options';
// @ts-ignore k6 types for typescript does not contain chromium, we should ignore this error
import { chromium } from 'k6/experimental/browser';
import { k6MainPage } from '@pages/k6MainPage';

export let options: Options = {
    vus: 1,
    duration: '10s'
};

export default async function () {
    const browser = chromium.launch({
        headless: true, args: ['no-sandbox']
    });
    const context = browser.newContext();
    const page = context.newPage();
    try {
        let mainPage: k6MainPage = new k6MainPage(page);
        await mainPage.clickCheckboxOnk6();
        check(page, {
            'checkbox is checked': (p) =>
                p.locator('#checkbox-info-display').textContent() === 'Thanks for checking the box',
        });
    } finally {
        page.close();
        browser.close();
    }
};