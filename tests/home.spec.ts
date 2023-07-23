import { expect, test } from "@playwright/test";

test("Should be accessable", async ({page}) => {
  await page.goto("/");
  await page.waitForLoadState('load');
  expect(await page.locator('.navbar-light').isVisible()).toBeTruthy();
  expect(await page.locator('div.home-page').isVisible()).toBeTruthy();
  expect(await page.locator('div.container.page').isVisible()).toBeTruthy();
});