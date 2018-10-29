const axios = require('axios');

// Optionally the request above could also be done as
function getAsteroids(end_date){
    axios.get('http://api.nasa.gov/neo/rest/v1/feed', {
        params: {
            end_date,
            detailed: true,
            api_key: 's9FVEKPZlN7AeoOhFp96xhkBdqwVZWchnT5oF2NN'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });  
}

export { getAsteroids }; 