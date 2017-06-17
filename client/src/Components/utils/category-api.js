var axios = require('axios');

const methodsForCategories = {
    getCategories: (id) => {
        var cat = id.toString();
        cat = cat.replace(/-/g, ' ');

        function toTitleCase(str) {
            cat = str.replace(/\w\S*/g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        toTitleCase(cat);

        return axios.get('http://localhost:8888/Dorahapp/wp-json/wp/v2/user/wp-json/wp/v2/multiple-post-type?type[]=professional&type[]=personal').then((data) => {
            let cats = data.data;
            let results = [];
            for (let prop in cats) {
                let catName = cats[prop].category_name;
                if (typeof catName !== 'undefined') {
                    for (let i = 0; i < catName.length; i++) {
                        if (cat === catName[i]) {
                            results.push(cats[prop]);
                        }
                    }
                }

            }
            return results;

        });


    }
}

module.exports = methodsForCategories;
