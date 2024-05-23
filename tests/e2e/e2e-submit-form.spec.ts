import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { PublisherPage } from '../../page-objects/PublisherPage'
import { PostPage } from '../../page-objects/PostPage'

test.describe('Create Publisher and Post and Edit Post', () => {
  let loginPage: LoginPage
  let publisherPage: PublisherPage
  let postPage: PostPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login('admin@example.com', 'password')
    const welcomeMessage = page.locator('.adminjs_H2')
    await expect(welcomeMessage).toContainText('Welcome, Candidate!')
  })

  test('Create Publisher', async ({ page }) => {
    publisherPage = new PublisherPage(page)
    await publisherPage.visit()
    await publisherPage.createNewPublisher('test123', 'test@test.com')
  })

  test('Create Post', async ({ page }) => {
    postPage = new PostPage(page)
    await postPage.visit()
    await postPage.createNewPost('title', 'content', 'jsonNumber')
  })

  test('Edit Post', async ({ page }) => {
    postPage = new PostPage(page)
    await postPage.visit()
    await postPage.editPost()
    // Validate post status was changed to Remove from the Post page
    const postStatus = page.getByText('Removed')
    await expect(postStatus).toBeVisible()
  })
})
