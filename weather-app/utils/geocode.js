const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoianVuZXNoYXciLCJhIjoiY2p3dzJ6NjQ4MDF1ajRhbXhmOHMzNm52ZyJ9.ckI6edAw1uQ3s3BPrs9y1g&limit=1'

    request({ url: url, json: true, strictSSL: false }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode