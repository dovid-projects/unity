import { Locator, expect, Page } from '@playwright/test'

export class PostPage {
    // Define Selectors
    readonly page: Page
    readonly createNew: Locator
    readonly title: Locator
    readonly content: Locator
    readonly newJsonItem: Locator
    readonly jsonNumber: Locator
    readonly jsonCheckBox: Locator
    readonly statusBox: Locator
    readonly statusActive: Locator
    readonly statusRemove: Locator
    readonly publisherCheckbox: Locator
    readonly publisher: Locator
    readonly publisherChoice: Locator
    readonly menuBar: Locator
    readonly editButton: Locator
    readonly submitButton: Locator
  
    // Init selectors using constructor
    constructor(page: Page) {
      this.page = page
      this.createNew = page.getByText('Create new')
      this.title = page.locator('[name="title"]')
      this.content = page.locator('[name="content"]')
      this.newJsonItem = page.getByText('Add new item')
      this.jsonNumber = page.locator('[name="someJson.0.number"]')
      this.jsonCheckBox = page.getByText('Some Json Boolean')
      this.statusBox = page.locator('//*[@id="app"]/section/section[2]/section[3]/form/section[1]/section[3]/div/div[1]/div/div[1]/div[2]')
      this.statusActive = page.locator('[id*="option-0"]')
      this.statusRemove = page.locator('[id*="option-1"]')
      this.publisherCheckbox = page.getByTestId('property-edit-published').locator('span')
      this.publisher = page.locator('//*[@id="app"]/section/section[2]/section[3]/form/section[1]/section[5]/div/div[1]/div/div[1]/div[2]')
      this.publisherChoice = page.locator('[id="react-select-6-option-0"]')
      this.menuBar = page.locator('[data-testid="actions-dropdown"]')
      this.editButton = page.locator('[data-testid="action-edit"]')
      this.submitButton = page.getByText('Save')
    }
  
    // Define Post page methods
    async visit() {
      await this.page.goto('http://localhost:3000/admin/resources/Post')
    }

    async createNewPost(title: string, content: string, jsonNumber: string) {
        await this.createNew.click()
        await this.title.fill(title)
        await this.content.fill(content)
        await this.newJsonItem.click()
        await this.jsonNumber.fill(jsonNumber)
        await this.jsonCheckBox.click()
        await this.statusBox.click()
        await this.statusActive.click()
        await this.publisherCheckbox.click()
        await this.publisher.click()
        await this.publisherChoice.click()
        await this.submitButton.click()
    }

    async editPost() {
        await this.menuBar.hover()
        await this.editButton.click()
        await this.statusBox.click()
        await this.statusRemove.click()
        await this.submitButton.click()
    }
  
  }
  