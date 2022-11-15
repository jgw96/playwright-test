# playwright-test

This repo uses [Playwright](https://playwright.dev/docs/intro) to test pwabuilder.com. These tests are integration tests that test the actual site running in an actual browser.
Because we are using Playwright, these tests automatically run in Chromium (Edge and Chrome), Gecko (Firefox) and finally Webkit(Safari). Right now, these tests are just meant to
be run locally, however these can also easily be ran as part of our [Github Actions](https://playwright.dev/docs/ci-intro).

## Getting Started
1. Clone this repo
2. [Install Playwright](https://playwright.dev/docs/intro)
3. Open a terminal to the cloned repo, and run `npx playwright test` (What is npx? https://docs.npmjs.com/cli/v7/commands/npx#synopsis)
4. Test will run, and you can watch the progress in your terminal. When the tests are done, an HTML file will open in your default browser,
Giving you a visual of your tests, their state and, if they failed, why. (this can be turned off if annoying).
