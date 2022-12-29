import { test, expect } from '@playwright/test';
import { clickCheckboxOnk6 } from '../pages/example-page';

test('checkbox should have been clicked', async ({ page }) => {
  await clickCheckboxOnk6(page);

  const checkBox = page.locator('#checkbox-info-display');

  await expect(checkBox).toHaveText('Thanks for checking the box');
});