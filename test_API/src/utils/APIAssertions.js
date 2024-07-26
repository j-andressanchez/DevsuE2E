const {expect} = require('chai');

class APIAssertions {

    async assertStatusCode(responseCode, expectedCode) {
      const mensaje = `Se esperaba un código ${expectedCode} y se recibió un ${responseCode}.`;
      expect(responseCode, mensaje).to.equal(expectedCode);
    }

    async assertMessage(responseMessage, expectedMessage) {
      const mensaje = `Se esperaba respuesta ${expectedMessage} y se recibió ${responseMessage}.`;
      expect(responseMessage, mensaje).to.equal(expectedMessage);
    }

    async assertError(responseMessage, expectedMessage) {
      const mensaje = `Se esperaba respuesta ${expectedMessage} y se recibió ${responseMessage}.`;
      expect(responseMessage, mensaje).to.equal(expectedMessage);
    }

    async assertToken(token) {
      await expect(token, 'No se recibió token en la respuesta.').to.be.a('string').and.not.be.empty;
      await expect(token, ' La respuesta no contiene "Auth_token:"').to.include('Auth_token:');
      console.log(`Token de autenticación generado: ${token}`);
    }

    async validateNoData(data){
      await expect(data, `Se esperaba vacio y se recibió ${JSON.stringify(data)}`).to.be.a('string').that.is.empty;
    }

}

module.exports = new APIAssertions();