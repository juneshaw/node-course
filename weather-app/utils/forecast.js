const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/45811978579347844fcf844063d5e3ba/${longitude},${latitude}?units=us`
    request.get({url, json: true, strictSSL: false}, (error, { body }) => {
        callback(error, body)
    })
}

module.exports = forecast