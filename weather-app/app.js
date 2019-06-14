const request = require('request')

const url = 'https://api.darksky.net/forecast/45811978579347844fcf844063d5e3ba/37.8267,-122.4233'

request.get({url: url, json: true, strictSSL: false}, (error, response) => {
    console.log(`It is currently ${response.body.currently.temperature} degrees out.  There is a ${response.body.currently.precipProbability} chance of rain.`)
})
