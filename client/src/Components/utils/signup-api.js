var axios = require("axios");

const userSign = {
      postSaved: function(fname, role) {
      var newUser = { title: fname, role:role };
      return axios.post("http://localhost:3001/user", newUser)
        .then(function(response) {
          console.log("axios results", response);
          return response;
        });
    }
  }


module.exports = userSign;
