const axios = require('axios');

const apiUrl = 'https://auto.dev/api/listings';

const apiKey = 'ZrQEPSkKbWF0dGtudWRzZW4xMEBnbWFpbC5jb20=';


function carSearch(carData) {
    console.log("carData", carData);
    const { Make, Model, Trim, MinYear, MaxYear, City, State, Lat, Long, Radius } = carData;

    console.log("make", Make);

    const apiParams = {
        apikey: apiKey,
        year_min: MinYear || undefined, 
        year_max: MaxYear || undefined, 
        make: Make || undefined, 
        model: Model || undefined,
        trim: Trim || undefined, 
        city: City || undefined, 
        state: State || undefined, 
        latitude: Lat || undefined, 
        longitude: Long || undefined, 
        radius: Radius || undefined 
    }

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
    carSearch: carSearch
}