import { test } from '@fixtures/pages.fixtures';

test('checkbox should have been clicked', async ({ mainPage }) => {
  await mainPage.clickCheckboxOnk6();
  await mainPage.verifyCheckboxText('Thanks for checking the box');
});