import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
        it('should login with valid credentials for ${username}', async () => {
       
            await LoginPage.open()
            await LoginPage.login(usernames, "secret_sauce")
            await expect(browser.url("https://www.saucedemo.com/inventory.html"));
            
            //make changes to get rid of usernames.js -- check parameters call to login.page

            if (await LoginPage.error.isExisting()){
                expect(LoginPage.error).containing("incorrect")
                expect(LoginPage.error).containing("locked");
            }
        });
});

