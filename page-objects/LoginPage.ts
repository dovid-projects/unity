import { Locator, expect, Page } from '@playwright/test'

export class LoginPage {
  // Define Selectors
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator

  // Init selectors using constructor
  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('[name="email"]')
    this.passwordInput = page.locator('[name="password"]')
    this.submitButton = page.locator('text=Login')
  }

  // Define Login Page methods
  async visit() {
    await this.page.goto('http://localhost:3000/admin/login')
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}
