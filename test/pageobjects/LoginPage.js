const Page = require('./Page');


class LoginPage extends Page {

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnLogin() {
        return $('//*[@id="root"]/div/div/form/button');
    }

    async login (useremail, password) {
        await this.inputEmail.setValue(useremail);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
