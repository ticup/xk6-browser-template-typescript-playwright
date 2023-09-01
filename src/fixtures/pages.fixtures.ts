import { test as base } from '@playwright/test';
import { k6MainPage } from "@pages/k6MainPage";

type PageFixtures = {
    mainPage: k6MainPage;
};

export const test = base.extend<PageFixtures>({
    mainPage: async ({ page }, use) => {
        await use(new k6MainPage(page));
      },
});
export { expect } from '@playwright/test';