const space = require('to-space-case-g')

const toCapitalCase = string => space(string).replace(/(^|\s)(\w)/g, (matches, previous, letter) => previous + letter.toUpperCase())

module.exports = toCapitalCase
