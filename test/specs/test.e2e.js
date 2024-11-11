import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser.url("https://www.saucedemo.com/inventory.html"))
    })
})

