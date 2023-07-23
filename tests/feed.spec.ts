import { test, expect } from "@playwright/test";

test("Should have pagination in feed", async ({page}) => {
  await page.goto("/")
  expect(await page.locator('ul.pagination').isVisible()).toBeTruthy()
  expect(await page.locator('ul.pagination > li').count()).toBeGreaterThan(0)
})