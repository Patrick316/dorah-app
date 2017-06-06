var axios = require("axios");

const getCatFeatData = {
  getCategories:()=>{
  return axios.get('http://localhost:8888/DORAHapp/wp-json/wp/v2/categories?parent=2')
		.then((data)=>{
      return data;
		}).catch((error)=>{
    		console.log(error);
  		});
	},
  getFeatured:()=>{
    return axios.get('http://localhost:8888/DORAHapp/wp-json/wp/v2/multiple-post-type?type[]=professional&type[]=personal')
  		.then((data)=>{
        return data.data;
        console.log(data.data);
  		}).catch((error)=>{
      		console.log(error);
    	});

  }
}


module.exports = getCatFeatData;
