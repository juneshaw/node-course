const request = require('request')

const url = 'https://api.darksky.net/forecast/45811978579347844fcf844063d5e3ba/39.63,105.31?units=us'

request.get({url: url, json: true, strictSSL: false}, (error, response) => {
    console.log(`${response.body.daily.data[0].summary}  It is currently ${response.body.currently.temperature} degrees out.  There is a ${response.body.currently.precipProbability}% chance of rain.`)
})
