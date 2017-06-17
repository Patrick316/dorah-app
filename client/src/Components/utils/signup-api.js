var axios = require("axios");

const userSign = {
    postSaved: (fname, lname, email, usrname, psswrd, cat, locale, stry, role)=> {

        var newUser = {
            firstname: fname,
            lastname: lname,
            username: usrname,
            password: psswrd,
            categories: cat,
            location: locale,
            about: stry,
            role: role
        };

        return axios.post("http://localhost:8888/Dorahapp/wp-json/wp/v2/user/userinfo", newUser)
            .then(function(response) {



            });
    }

}


module.exports = userSign;
