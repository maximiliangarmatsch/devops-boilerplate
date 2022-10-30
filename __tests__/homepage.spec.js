// @ts-check
const { test, expect } = require('@playwright/test');

require("dotenv").config()

const PORT = process.env.PORT || 3000

test('homepage has DBP Title', async ({ page }) => {
  await page.goto(`http://localhost:${PORT}`);

  const heading = page.locator("h1")
  await expect(heading).toHaveText(/dbp title/i)
});
