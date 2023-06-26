let firstName = "Koby"
let lastName = "Grah"
let country = "USA"
let city = "Vancouver"
let age = 27
let isMarried = true
let year =  2023

console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof(isMarried))

console.log(typeof("10") == typeof(10))

console.log(parseInt("9.8") == 10)
//different ways to declare a bool
let truthyOne = 5 > 0
let truthyTwo = 1
let truthyThree = "Hello"
let falsyOne = 0 > 5
let falsyTwo = 0
let falsyThree = ''

//this exercise was just using comparison operators, skipping all simple ones
let comp = 4 === 4 //this operator is use to compare both value and data type

//using the date object
let now = new Date()
let thisYear = now.getFullYear()
let month = now.getMonth() + 1
let date = now.getDate()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
let time = now.getTime()
console.log(time)

/*using the prompt method
let base = prompt("Enter Base")
let height = prompt("Enter Height")
console.log(0.5 * base * height)
*/

/*
let a = prompt("Enter side A")
let b = prompt("Enter side B")
let c = prompt("Enter side C")
let perimiter = parseInt(a) + parseInt(b) + parseInt(c)
console.log(perimiter)
*/

/*
let length = prompt("Enter length")
let width = prompt("Enter width")
console.log(length * width)
*/

let line = "y = 2x -2"
let values = line.match(/\d+/gi)
console.log("Slope = " + values[0])
console.log("Y-intercept = " + values[1])

//turnery op example
/*
let year = prompt("Enter your birth year")
let now = new Date()
let age = now.getFullYear() - year


age >= 18
    ? console.log("You are " + age +". You can drive.")
    : console.log("You are " + age + ". You can drive in " + (18 - age) + " years.")

*/

//use the time vars created above to create a human readable date
console.log(year + '-' + month + '-' + date + ' ' + hours + ':' + minutes)

//human readable date but the hours and min will always be two digits
hours = parseInt(hours) //convert both vars to int so we can check if they need to be updated
minutes = parseInt(minutes)
hours < 10
    ? hours = `0${hours}` //if yes then convert into a string and add a leading zero
    : hours = hours //else leave alone
    
minutes < 10
    ? minutes = `0${minutes}` //if yes then convert into a string and add a leading zero
    : minutes = minutes //else leave alone

console.log(year + '-' + month + '-' + date + ' ' + hours + ':' + minutes)
