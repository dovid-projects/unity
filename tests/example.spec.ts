import { test, expect } from '@playwright/test'

import { loadHomePage, assertTitle } from '../helpers'

// test annotations
// .skip
// .only
// .describe -- can group tests together

// tags
// i.e. test('assertions @myTag', async ({ page }) => {
// then run npx playwright test --grep myTag : runs the tests with this tag
//
// to run all the tests without the tag:
// npx playwright test --grep-invert myTag

// inspector
// await page.pause()

// reporter
// --reporter=line : no comments
// --reporter=list : minimal comment
// --reporter=dot  : pass or fail
// --reporter=junit : for logging
// --reporter=html : creates a report with test results

// test('selectors', async ({page}) =>{
//     //text
//     await page.click('text=someText')

//     // CSS Selectors
//     await page.click('button');
//     await page.click('#id')
//     await page.click('.class')
//     await page.fill('[name="username"]', 'Max Smith')

//     //only visible CSS Selector
//     await page.click('.submit-button:visible')

//     //combinations
//     await page.click('#username .firstClass')

//     // xpath
//     await page.click('//button')
// })

test.describe.parallel.only('test suite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/admin/login')
  })

  test('sample test', async ({ page }) => {
    //await page.goto('http://localhost:3000/admin/login')
    const title = await page.locator('h2')
    await expect(title).toHaveText('Welcome')
  })

  test('click on element', async ({ page }) => {
    //await page.goto('http://localhost:3000/admin/login')
    await page.click('text=Login')
    const welcomeMessage = await page.locator('.adminjs_H2')
    await expect(welcomeMessage).toContainText('Welcome, Candidate!')
  })
})

// test('working with inputs', async ({page}) => {
//     await page.goto('http://localhost:3000/admin/login')
//     await page.fill('[name="email"]', 'admin@example.com')
//     await page.fill('[name="password"]','password' )
//     await page.click('text=Login')
//     const welcomeMessage = await page.locator('.adminjs_H2')
//     await expect(welcomeMessage).toContainText('Welcome, Candidate!')
// })

test('assertions @myTag', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login')
  await expect(page).toHaveURL('http://localhost:3000/admin/login')
  await expect(page).toHaveTitle('Unity Task')

  const element = await page.locator('h2')
  await expect(element).toBeVisible()
  await expect(element).toHaveText('Welcome')
  await expect(element).toHaveCount(1)

  const welcomeMessage = await page.locator('.adminjs_H2')
  await expect(welcomeMessage).not.toBeVisible
})

test('Custom Helpers', async ({ page }) => {
  await loadHomePage(page)
  await assertTitle(page)
})

test('a sample loging', async ({ page }) => {
  await page.goto('http://localhost:3000/admin/login')
  await page.fill('[name="email"]', 'username')
  const element = await page.locator('h2')
  await expect(element).toBeVisible()
})
