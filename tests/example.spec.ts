import { test, expect } from '@playwright/test';

test('PWABuilder loads', async ({ page }) => {
  await page.goto('https://www.pwabuilder.com');
  await expect(page).toHaveTitle('PWABuilder');

  // locate the start button
  const startButton = await page.waitForSelector('text=Start');

  // start button should be there
  expect(startButton).toBeTruthy();

  // Take a screenshot
  await page.screenshot({ path: `pwabuilder.png` });

  // Close the page
  await page.close();
});

test('Can do test', async ({ page }) => {
  await page.goto('https://www.pwabuilder.com');
  await expect(page).toHaveTitle('PWABuilder');

  // locate the start button
  const startButton = await page.waitForSelector('#start-button');

  // start button should be there
  expect(startButton).toBeTruthy();

  // find input with id "input-box"
  const inputBox = await page.waitForSelector('#input');

  // input box should be there
  expect(inputBox).toBeTruthy();

  // type into the input box
  await page.fill('#input', 'https://webboard.app');

  // click the start button
  await startButton.click();

  // wait for the results to load
  // item-wrapper is a todo-item, which will only be shown
  // once the results are loaded
  await page.waitForSelector('#item-wrapper');

  // Take a screenshot
  await page.screenshot({ path: `pwabuilder-results.png` });

  // Close the page
  await page.close();
});

