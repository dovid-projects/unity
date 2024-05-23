export async function loadHomePage(page) {
    await page.goto('http://localhost:3000/admin/login')
}

export async function assertTitle(page) {
    await page.waitForSelector('h1')
}