//Level 1

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let char = '#'

for (i = 0; i < 8; i++) {
    console.log(char.repeat(i))
}

let randomArr = []

for (i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10))
}

let uniqueRandomArr = []

for (i = 0; i < 5; i++) {
    let newNum = Math.floor(Math.random() * 10)

    while (uniqueRandomArr.includes(newNum)) {
        newNum = Math.floor(Math.random() * 10)
    }

    uniqueRandomArr.push(newNum)
}

console.log(randomArr)
console.log(uniqueRandomArr)

//Level 2

let newCountries = [];


for (country of countries) {
    let singleCountry = [];
    singleCountry.push(country, country.slice(0,3).toUpperCase(), country.length);
    newCountries.push(singleCountry);
}

console.table(newCountries);

let landCountries = [];

for (country in countries) {
    if (countries[country].includes("land")) {
        landCountries.push(countries[country]);
    }
}

console.log(landCountries);

//Level 3

let copy = [];

for (country in countries) {
    copy.push(countries[country]);
}

console.log(copy)

const sortedCountries = copy.sort();
console.log(sortedCountries)