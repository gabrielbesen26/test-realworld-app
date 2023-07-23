import { test, expect } from "@playwright/test";

test("Should have Home, Sign in, and Sign up options in NavBar", async ({page}) => {
  await page.goto("/");
  await page.waitForLoadState('load');
  const listMenuItems = page.locator('ul.navbar-nav').locator('li.nav-item');
  expect(await listMenuItems.count()).toEqual(3);
  expect(await listMenuItems.nth(0).innerText()).toEqual('Home');
  expect(await listMenuItems.nth(1).innerText()).toEqual('Sign in');
  expect(await listMenuItems.nth(2).innerText()).toEqual('Sign up');
  expect(await listMenuItems.nth(0).locator('a').getAttribute('href')).toEqual('/');
  expect(await listMenuItems.nth(1).locator('a').getAttribute('href')).toEqual('/login');
  expect(await listMenuItems.nth(2).locator('a').getAttribute('href')).toEqual('/register');
});

test("Click on Sign in should redirect to login page", async ({page}) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Sign in', exact: true }).click();
  await page.waitForURL("**/login");
  expect(page.url()).toEqual(`${process.env.BASE_URL}/login`);
});

test("Click on Sign up should redirect to register page", async ({page}) => {
  await page.goto("/");
  await page.getByRole('link', { name: 'Sign up', exact: true }).click();
  await page.waitForURL("**/register");
  expect(page.url()).toEqual(`${process.env.BASE_URL}/register`);
});