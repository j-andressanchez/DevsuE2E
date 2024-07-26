const { By } = require("selenium-webdriver");
const BasePage = require("./BasePage");
const data = require("../resources/data.json")

class CheckoutPage extends BasePage{
    #firstNameInput;
    #lastNameInput;
    #postalCodeInput;
    #continueButton;
    #finishButton;
    #headerMessage;

    constructor(){
        super();
        this.#firstNameInput = By.css("[data-test='firstName']");
        this.#lastNameInput = By.css("[data-test='lastName']");
        this.#postalCodeInput = By.css("[data-test='postalCode']");
        this.#continueButton = By.css("[data-test='continue']");
        this.#finishButton = By.css("[data-test='finish']");
        this.#headerMessage = By.css("[data-test='complete-header']");
    }

    async typeFirstName(){
        await this.waitForElement(this.#firstNameInput);
        await this.typeText(this.#firstNameInput, data.firstName);
    }

    async typeLastName(){
        await this.waitForElement(this.#lastNameInput);
        await this.typeText(this.#lastNameInput, data.lastName);
    }

    async typepostalCode(){
        await this.waitForElement(this.#postalCodeInput);
        await this.typeText(this.#postalCodeInput, data.postalCode);
    }

    async clickContinue(){
        await this.waitForElement(this.#continueButton);
        await this.clickOnButton(this.#continueButton);
    }

    async clickFinish(){
        await this.waitForElement(this.#finishButton);
        await this.clickOnButton(this.#finishButton);
    }

    async getHeaderMessage(){
        await this.waitForElement(this.#headerMessage);
        const headerMessage = await this.findElement(this.#headerMessage);
        return await headerMessage.getText();
    }
}

module.exports = CheckoutPage;