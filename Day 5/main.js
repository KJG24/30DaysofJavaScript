/*Level  1

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]


const emptyArr = []
const arrWithMoreThan5Elements = Array(6)
console.log(arrWithMoreThan5Elements.length)
let middle = Math.floor(countries.length / 2)
console.log(countries[0], countries[middle], countries[countries.length - 1])
let mixedDataTypes = ["Int", "String", "LinkedList", "BST", "List", "Array"]
console.log(mixedDataTypes.length)
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itCompanies)
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])
console.log(`${itCompanies} are big IT companies.`)
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(2,6))
console.log(itCompanies.slice(0,4))
*/

//Level 2

const {webTechs} = require('./web_techs.js')
console.log(webTechs)
const {countries} = require('./countries.js')
console.log(countries)

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[^a-zA-Z0-9\s]/gi, '')
words = words.split(' ')
console.log(words)
console.log(words.length)

//Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages[0], ages[ages.length - 1]) //youngest and oldest
console.log(ages[ages.length / 2]) //middle age

console.log(countries.slice(0,10))

