const chalk = require('chalk')
const getNotes = require('./notes')

console.log(getNotes())
console.log(chalk.green.bgWhite.bold('Success'))
console.log(chalk`{green Success with template}`)