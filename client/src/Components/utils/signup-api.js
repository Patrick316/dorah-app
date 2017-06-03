var axios = require("axios");

const createUser = {
    userData: (first, last, usr, nck, loc, eml, pss, role, stry) => {

        return axios.post('http://localhost:4000/new/user/', "um whyyy???")
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
         });

    }
}


module.exports = createUser;
