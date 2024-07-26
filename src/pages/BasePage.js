const { Builder, until } = require("selenium-webdriver");
const { getDriver } = require("../utils/driver");

class BasePage{

    constructor() {
        this.driver = getDriver();
    }

    async openUrl(url){
        await this.driver.get(url);
        await this.driver.manage().window().maximize();
    }

    async findElement(locator){
        return await this.driver.findElement(locator);
    }

    async findElements(locator) {
        return await this.driver.findElements(locator);
    }

    async waitForElement(locator){
        await this.driver.wait(until.elementLocated(locator), 5000);
    }

    async typeText(locator, text){
        const input = await this.findElement(locator);
        await input.sendKeys(text);
    }

    async clickOnButton(locator){
        const button = await this.findElement(locator);
        await button.click();
    }

    async getText(locator) {
        const element = await this.driver.findElement(locator);
        return await element.getText();
    }

    async quit() {
        await this.driver.quit();
    }
}

module.exports = BasePage