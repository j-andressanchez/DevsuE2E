const { Given, When, Then } = require("@cucumber/cucumber");
const sauceSteps = require('../../src/steps/saucedemoSteps')

Given('el usuario ingresa a la login page de saucedemo', async function(){
    await sauceSteps.goToLoginPage()
})

Given('se autentica con usuario {string} y contraseña {string}', async function(username, password){
    await sauceSteps.credentialsAuth(username,password)
})

When("el usuario agrega {int} productos al carrito", async function(cantidad){
    await sauceSteps.addProducts(cantidad);
})

When("visualiza los productos agregados en el carrito", async function(){
    await sauceSteps.validateShoppingCart();
})

Then("diligencia los datos en el formulario de Compra", async function(){
    await sauceSteps.fillCheckout();
})

Then("finaliza la compra y valida la confirmación {string}", async function(message){
    await sauceSteps.validateMessage(message);
})