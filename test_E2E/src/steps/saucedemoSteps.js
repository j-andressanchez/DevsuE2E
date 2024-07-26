const { expect } = require("chai");
const CheckoutPage = require("../pages/CheckoutPage");
const LoginPage = require("../pages/LoginPage");
const ProductPage = require("../pages/ProductPage");

const loginPage = new LoginPage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();

module.exports = {
    async goToLoginPage(){
        await loginPage.open();
    },
    async credentialsAuth(username, password){
        await loginPage.typeUsername(username);
        await loginPage.typePassword(password);
        await loginPage.clickLogin();
    },
    async addProducts(cantidad){
        await productPage.addProducts(cantidad);
    },
    async validateShoppingCart(){
        await productPage.validateShoppingCart();
        await productPage.clickCheckout();
    },
    async fillCheckout(){
        await checkoutPage.typeFirstName();
        await checkoutPage.typeLastName();
        await checkoutPage.typepostalCode();
        await checkoutPage.clickContinue();
        await checkoutPage.clickFinish();
    },
    async validateMessage(message){
        const headerMessage = await checkoutPage.getHeaderMessage();
        expect(headerMessage).to.equal(message);
        checkoutPage.quit();
    }
}