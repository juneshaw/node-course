const fs = require('fs')

const dataBuffer = fs.readFileSync('./1-json.json')
const jsonString = dataBuffer.toString()
const jsonData = JSON.parse(jsonString)
console.log('jsonData: ', jsonData.name);
jsonData.name = 'June'
jsonData.age = 21

const newJsonString = JSON.stringify(jsonData)
fs.writeFileSync('./1-json.json', newJsonString)