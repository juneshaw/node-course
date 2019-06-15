const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoianVuZXNoYXciLCJhIjoiY2p3dzJ6NjQ4MDF1ajRhbXhmOHMzNm52ZyJ9.ckI6edAw1uQ3s3BPrs9y1g&limit=1'

    request({ url, json: true, strictSSL: false }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const { features } = body
            callback(undefined, {
                latitude: features[0].center[0],
                longitude: features[0].center[1],
                location: features[0].place_name
            })
        }
    })
}

module.exports = geocode