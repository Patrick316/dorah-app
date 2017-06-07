var axios = require('axios');

const methodsForCategories = {
  getCategories :()=>{
    return axios.get('http://localhost:8888/DORAHapp/wp-json/wp/v2/multiple-post-type?type[]=professional&type[]=personal').then((data)=>{
          return data.data;
    });
  }
}

module.exports = methodsForCategories;
