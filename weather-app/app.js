const request = require('request')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

geocode('Boston', (error, response) => {
    if (error) {
        return console.log('Error getting location')
    }
    const latitude = response.latitude
    const longitude = response.longitude
    const location = response.location
    console.log(`Latitude: ${latitude} Longitude: ${longitude} Location: ${location}`)
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error getting forecast')
        }
        console.log(`${forecastData.body.daily.data[0].summary}  It is currently ${forecastData.body.currently.temperature} degrees out.  There is a ${forecastData.body.currently.precipProbability}% chance of rain.`)
    })
})
