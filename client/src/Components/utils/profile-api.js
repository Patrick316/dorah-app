var axios = require("axios");

const userDataApi = {
  getUser : (usr, type)=>{
  return axios.get(`http://localhost:8888/Dorahapp/wp-json/wp/v2/user/wp-json/wp/v2/${type}/?slug=${usr}`)
		.then((data)=>{
      return data.data;
		}).catch((error)=>{
    		console.log(error);
  		});
	},
  getUserComments(usr){
    return axios.get(`http://localhost:8888/Dorahapp/wp-json/wp/v2/user/wp-json/wp/v2/comments/?post=${usr}`)
    .then((data)=>{
        return data.data;
    }).catch((error)=>{
      console.log(error);
    });
  },
  postUserComments(cmt){
    console.log(cmt);
  }
}


module.exports = userDataApi;
