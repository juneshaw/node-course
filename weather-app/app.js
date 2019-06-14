const request = require('request')

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoianVuZXNoYXciLCJhIjoiY2p3dzJ6NjQ4MDF1ajRhbXhmOHMzNm52ZyJ9.ckI6edAw1uQ3s3BPrs9y1g&limit=1'

const url = 'https://api.darksky.net/forecast/45811978579347844fcf844063d5e3ba/39.63,105.31?units=us'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})

request.get({url: url, json: true, strictSSL: false}, (error, response) => {
    console.log(`${response.body.daily.data[0].summary}  It is currently ${response.body.currently.temperature} degrees out.  There is a ${response.body.currently.precipProbability}% chance of rain.`)
})
