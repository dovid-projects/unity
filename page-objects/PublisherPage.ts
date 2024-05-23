import { Locator, expect, Page } from '@playwright/test'

export class PublisherPage {
    // Define Selectors
    readonly page: Page
    readonly createNew: Locator
    readonly name: Locator
    readonly email: Locator
    readonly submitButton: Locator
  
    // Init selectors using constructor
    constructor(page: Page) {
      this.page = page
      this.createNew = page.getByText('Create new')
      this.name = page.locator('[name="name"]')
      this.email = page.locator('[name="email"]')
      this.submitButton = page.getByText('Save')
    }
  
    // Define Publisher page methods
    async visit() {
      await this.page.goto('http://localhost:3000/admin/resources/Publisher')
    }

    async createNewPublisher(name: string, email: string) {
        await this.createNew.click()
        await this.name.fill(name)
        await this.email.fill(email)
        await this.submitButton.click()
    }
  
  }
  