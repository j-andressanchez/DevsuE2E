const APIRequests = require("../utils/APIRequests");
const APIAssertions = require("../utils/APIAssertions");

class DemoblazeSteps {

    #response;

    async registerUser(user, pass){
        this.#response = await APIRequests.registerUser(user, pass);
    }

    async loginUser(user, pass){
        this.#response = await APIRequests.loginUser(user, pass);
    }

    async validateCode(expectedCode){
        await APIAssertions.assertStatusCode(this.#response.status, expectedCode);
    }

    async validateMessage(expectedMessage){
        await APIAssertions.assertMessage(this.#response.statusText, expectedMessage);
    }

    async validateError(expectedMessage){
        await APIAssertions.assertError(this.#response.data.errorMessage, expectedMessage);
    }

    async validateToken(){
        await APIAssertions.assertToken(this.#response.data);
    }

    async validateNoData(){
        await APIAssertions.validateNoData(this.#response.data);
    }

}

module.exports = DemoblazeSteps;