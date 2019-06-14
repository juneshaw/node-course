const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/45811978579347844fcf844063d5e3ba/${longitude},${latitude}?units=us`
    request.get({url: url, json: true, strictSSL: false}, (error, response) => {
        callback(error, response)
        // console.log(`${response.body.daily.data[0].summary}  It is currently ${response.body.currently.temperature} degrees out.  There is a ${response.body.currently.precipProbability}% chance of rain.`)
    })
}

module.exports = forecast