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
    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return console.log('Error getting forecast')
        }
        const { temperature, precipProbability } = forecastData.currently
        console.log(`Latitude: ${latitude} Longitude: ${longitude} Location: ${location}`)
        console.log(`${forecastData.daily.data[0].summary}  It is currently ${temperature} degrees out.  There is a ${precipProbability}% chance of rain.`)
    })
    })
}
