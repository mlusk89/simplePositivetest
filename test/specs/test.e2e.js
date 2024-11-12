import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(browser.url("https://www.saucedemo.com/inventory.html"))
    })
    it('should not login with invalid credentials', async () =>{
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secrt_sauce')
        const error1 = await $('h3[data-test="error"]')
        await expect(error1).toHaveText('Epic sadface')
    })
})

