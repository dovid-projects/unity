import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {
    const baseUrl = 'http://localhost:3000/admin/api'

    test('Login', async ({ request }) => {
        const response = await request.post('http://localhost:3000/admin/login', {
            data: {
                email: 'admin@example.com',
                password: 'password'
            }
        })
        expect(response.status()).toBe(200)

        const responseBody = await response.text()
        console.log(responseBody)
    })

    test.skip('Create New Publisher', async ({request}) => {
        const response = await request.post(`${baseUrl}resources/Publisher/actions/new`)
    })

})