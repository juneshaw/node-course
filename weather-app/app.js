const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

if (process.argv.length < 3) {
    console.log('Please enter location to forecast')
} else {
    const location = process.argv[2]
    geocode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error getting location')
    }
    forecast(latitude, longitude, (error, forecast) => {
        if (error) {
            return console.log('Error getting forecast')
        }
        res.send({
            forecastData,
            location
        })
    })
    })
}
