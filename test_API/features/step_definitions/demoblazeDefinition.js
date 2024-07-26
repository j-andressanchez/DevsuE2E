const { Given, When, Then } = require("@cucumber/cucumber");
const data = require('../../src/resources/data.json');
const DemoblazeSteps = require("../../src/steps/DemoblazeSteps");

const demoSteps = new DemoblazeSteps;

Given("El usuario envía una solicitud de registro con datos válidos", async function(){
    await demoSteps.registerUser(data.userNuevo, data.passNuevo);
})

Given("El usuario envía una solicitud de registro con datos existentes", async function(){
    await demoSteps.registerUser(data.userExistente, data.passExistente);
})

Given("El usuario envía una solicitud de login con credenciales válidas", async function(){
    await demoSteps.loginUser(data.userExistente, data.passExistente);
})

Given("El usuario envía una solicitud de login con credenciales incorrectas", async function(){
    await demoSteps.loginUser(data.userInexistente, data.passInexistente);
})

When("La API responde con un código de estado {int}", async function(expectedCode){
    await demoSteps.validateCode(expectedCode);
})

Then("Se valida el mensaje de confirmación {string}", async function(expectedMessage){
    await demoSteps.validateMessage(expectedMessage);
})

Then("Se valida ausencia de data en la respuesta", async function(){
    await demoSteps.validateNoData();
})

Then("Se valida el mensaje de error {string}", async function(expectedMessage){
    await demoSteps.validateError(expectedMessage);
})

Then("Se valida generación de token de autenticación", async function(){
    await demoSteps.validateToken();
})