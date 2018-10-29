const axios = require('axios');

// Optionally the request above could also be done as
async function getAsteroids(end_date){
  try {
    const response = await axios.get('https://api.nasa.gov/neo/rest/v1/feed', {
        params: {
            end_date,
            detailed: true,
            api_key: 's9FVEKPZlN7AeoOhFp96xhkBdqwVZWchnT5oF2NN'
        }
    });
    return response.data.near_earth_objects[end_date];
  } catch(e) {
    console.log(e);
  };
}

export { getAsteroids }; 