const axios = require('axios');
const {test} = require('./test.js');

const apiUrl = 'https://auto.dev/api/listings';

const apiKey = 'ZrQEPSkKbWF0dGtudWRzZW4xMEBnbWFpbC5jb20=';

const apiParams = {
  apikey: apiKey,
  year_min: 2019,
  year_max: 2020,
  make: 'Mercedes-Benz',
  city: 'Minneapolis',
  state: 'MN',
  trim: 'AMG C 43',
  //model: 'GLC',
  latitude: 44.986656,
  longitude: -93.258133,
  radius: 200,
};

function apiCall() {
  axios.get(apiUrl, { params: apiParams })
    .then(response => {
      const record = response.data.records;
      const recordSize = record.length;

      for (var i = 0; i < recordSize; i++) {
        console.log("");
        console.log(record[i].city);
        console.log(record[i].state);
        console.log(record[i].year);
        console.log(record[i].make);
        console.log(record[i].model);
        console.log(record[i].trim);
        //result1 = test();
        //console.log(result1);
      }
    })
    .catch(error => {
      console.error(error.message);
    });
}

module.exports = {
  apiCall: apiCall
};
