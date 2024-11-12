import { $ } from '@wdio/globals';
import Page from './page.js';


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

    usernames= ["standard_user", "locked_out_user", "problem_user", 
    "performance_glitch_user", "error_user", "visual_user"];

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

   async loopFunction(password){
        for (let i = 0; i<this.usernames.length; i++){
            this.login(usernames[i], password)
            //add expect -- create function for +/- test
        }
   }
  
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
