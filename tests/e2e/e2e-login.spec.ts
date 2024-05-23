import { test, expect } from '@playwright/test'

// test.describe.parallel('Login / Logout Flow', () => {
//   // Before hook
//   test.beforeEach(async ({ page }) => {
//     await page.goto('http://localhost:3000/admin/login')
//   })

//   // Negative scenario
//   test('Negative scenario', async ({ page }) => {
//     await page.fill('[name="email"]', 'invalid email')
//     await page.fill('[name="password"]', 'invalid password')
//     await page.click('text=Login')
//     //const element = await page.locator('#app > section > section > form > section > div > section.sc-dmqHEX.EzJFr.adminjs_Box > div > div')
//     const element = await page.locator('div.fjclwx')
//     await expect(element).toContainText('Email')
//   })
//   // Positive scenario + Logout
//   test('Postive test', async ({page}) => {
//     await page.fill('[name="email"]', 'admin@example.com')
//     await page.fill('[name="password"]','password' )
//     await page.click('text=Login')
//     const welcomeMessage = await page.locator('.adminjs_H2')
//     await expect(welcomeMessage).toContainText('Welcome, Candidate!')

//     await page.locator('[alt="admin@example.com"]').hover()
//     await page.locator('a:has-text("Log out")').click()
//     await expect(page).toHaveURL('http://localhost:3000/admin/login')
//   })

// })
