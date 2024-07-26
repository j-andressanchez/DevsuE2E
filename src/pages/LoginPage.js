const { By, until } = require("selenium-webdriver")
const BasePage = require('./BasePage')

class LoginPage extends BasePage {
    #baseUrl;
    #usernameInput;
    #passwordInput;
    #loginButton;

    constructor() {
        super();
        this.#baseUrl = 'https://www.saucedemo.com';
        this.#usernameInput = By.css("[data-test='username']");
        this.#passwordInput = By.css("[data-test='password']");
        this.#loginButton = By.css("[data-test='login-button']");
    }

    async open(){
        super.openUrl(this.#baseUrl);
    }

    async typeUsername(username){
        await super.typeText(this.#usernameInput, username);
    }

    async typePassword(password){
        await super.typeText(this.#passwordInput, password);
    }

    async clickLogin(){
        await super.clickOnButton(this.#loginButton);
    }
}

module.exports = LoginPage