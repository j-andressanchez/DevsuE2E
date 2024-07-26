const { By, until } = require("selenium-webdriver")
const BasePage = require('./BasePage')

class ProductPage extends BasePage {
    #addToCartButton
    #shoppingCartIcon
    #checkoutButton

    constructor() {
        super();
        this.#addToCartButton = By.xpath("//button[text()='Add to cart']");
        this.#shoppingCartIcon = By.css("[data-test='shopping-cart-link']");
        this.#checkoutButton = By.css("[data-test='checkout']");
    }

    async addProducts(cantidad){
        await this.waitForElement(this.#addToCartButton);
        const elements = await this.findElements(this.#addToCartButton);

        if(cantidad > elements.length){
            throw new Error(`Cantidad solicitada (${cantidad}) supera la cantidad de productos (${elements.length})`);
        }

        for(let i = 0 ; i < cantidad ; i++){
            await elements[i].click();
        }
    }

    async validateShoppingCart(){
        await this.waitForElement(this.#shoppingCartIcon);
        this.clickOnButton(this.#shoppingCartIcon);
    }

    async clickCheckout(){
        await this.waitForElement(this.#checkoutButton);
        this.clickOnButton(this.#checkoutButton)
    }
}

module.exports = ProductPage;