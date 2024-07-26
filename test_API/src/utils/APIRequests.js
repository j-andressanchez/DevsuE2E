const axios = require('axios');
const data = require('../resources/data.json');

class APIRequests {

    async registerUser(user, pass){
        try{
            const response = await axios.post(data.urlSignup, {
                username: user,
                password: pass
            });
            return response;
        } catch(error){
            console.log('Se presentó un error en el registro: ', error.response ? error.response.data : error.message);
        }
    }

    async loginUser(user, pass){
        try{
            const response  = await axios.post(data.urlLogin, {
                username: user,
                password: pass
            });
            return response;
        }catch(error){
            console.log('Se presentó un error en el login: ', error.response ? error.response.data : error.message);
        }
    }
}

module.exports = new APIRequests();
