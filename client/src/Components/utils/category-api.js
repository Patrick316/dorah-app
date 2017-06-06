var axios = require('axios');

const methodsForCategories = {
  getCategories :(id)=>{
    return axios.get('http://localhost:8888/DORAHapp/wp-json/wp/v2/multiple-post-type?type[]=professional&type[]=personal/categories?slug=${id}`').then((data)=>{
        return data.data;
    });
  }
}

module.exports = methodsForCategories;
