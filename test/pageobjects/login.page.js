import { $ } from '@wdio/globals';
import Page from './page.js';
import { expect } from '@wdio/globals'

class LoginPage extends Page {
   
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get error () {
        return $('h3[data-test="error"]')
    }

    usernames = ["standard_user", "locked_out_user", "problem_user", 
    "performance_glitch_user", "error_user", "visual_user"];

    

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(browser.url("https://www.saucedemo.com/inventory.html"));
        if (await this.error.isExisting()){
            await expect(this.error).toHaveText([expect.stringContaining("do not match"), 
            expect.stringContaining("locked"),
            expect.stringContaining("Epic sadface")]);
        }
    }

   async loopFunction(password){
        for (let i = 0; i<this.usernames.length; i++){
            await this.login(this.usernames[i], password)
            await this.open()
        }
   }
  
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
