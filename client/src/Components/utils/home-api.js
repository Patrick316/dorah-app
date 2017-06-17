var axios = require("axios");
const catUrl = `http://localhost:8888/Dorahapp/wp-json/wp/v2/categories?parent=2`;
const multUrl = `http://localhost:8888/Dorahapp/wp-json/wp/v2/multiple-post-type?type[]=professional&type[]=personal`
const getCatFeatData = {
    getCategories: () => {
        return axios.get(catUrl)
            .then((data) => {
                return data;
            }).catch((error) => {
                console.log(error);
            });
    },
    getFeatured: () => {
        return axios.get(multUrl)
            .then((data) => {
                return data.data;
                console.log(data.data);
            }).catch((error) => {
                console.log(error);
            });

    },

    makeASearch: (sel) => {
      let term = sel.toLowerCase();
          return axios.get(multUrl).then((response) => {

              let results = response.data;
              let selection = [];

              //Here is where we will check title, location, category

                results.map((value,index)=>{
                    let title = value.title.rendered.toLowerCase();
                    let categories = value.category_name.join();
                        categories = categories.toLowerCase();
                        categories = categories.split(',');

                    //titles
                    if (title.indexOf(term) >= 0) {
                        //titles
                        selection.push(value);
                    }

                    //location
                    if(typeof value.acf.address !== 'undefined'){
                        let addressLower = value.acf.address.toLowerCase();
                        if (addressLower.indexOf(term) >= 0) {
                            //address
                            selection.push(value);
                        }
                    }

                    //categories
                    if(categories.indexOf(term) >=0){
                      selection.push(value);
                    }
                });

                return selection;

          });

    }
}

module.exports = getCatFeatData;
