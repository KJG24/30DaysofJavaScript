//level 1

let challenge = "30 Days of JavaScript"
console.log(challenge)
console.log(challenge.length)
/*
challenge = challenge.toUpperCase()
console.log(challenge)
challenge = challenge.toLowerCase()
console.log(challenge)
challenge = challenge.substring(3)
*/
console.log(challenge.includes("Script"))
//challenge = challenge.split(" ")
//console.log(challenge)
let fang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
fang = fang.split(",")
console.log(fang)
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let testSentence = "You cannot end a sentence with because because because is a conjunction"
console.log(testSentence.indexOf("because"))
console.log(testSentence.lastIndexOf("because"))
console.log(testSentence.search("because"))
let testString = " 30 Days Of JavaScript"
console.log(testString.trim(' '))
testString = testString.trim(' ')
console.log(testString.startsWith("30"))
console.log(testString.endsWith('t'))
console.log(testString.match(/a/gi))
let firstString = "30 Days of"
let secondString = "JavaScript"
console.log(firstString.concat(secondString))
console.log(challenge.repeat(2))


//Level 2
let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote)
let secondQuote = "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
console.log(secondQuote)
console.log(typeof(Number("10")) == typeof(10))
console.log(parseInt(parseInt('9.8')) + 1 == 10)
console.log("python".search(/on/) == "jargon".search(/on/))
console.log("I hope this course is not full of jargon".match(/jargon/))
console.log(Math.random() * 101)
console.log(Math.floor(Math.random() * 50 + 50))
console.log(Math.floor(Math.random() * 256))

let pattern = "1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"
console.log(pattern)

//level 3

let level3Quote = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(level3Quote.match(/love/gi))
let level3SecondQuote = "You cannot end a sentence with because because because is a conjunction"
console.log(level3SecondQuote.match(/because/gi))
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let newSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "")
console.log(newSentence)
let newSentenceArr = newSentence.split(" ")

function findMostRepeatedWord(sentence) {
    // Convert the sentence to lowercase and split into an array of words
    var words = sentence.toLowerCase().split(/\s+/);
  
    // Create an object to store word frequencies
    var wordFrequency = {};
  
    // Count the frequency of each word
    words.forEach(function(word) {
      if (word in wordFrequency) {
        wordFrequency[word]++;
      } else {
        wordFrequency[word] = 1;
      }
    });
  
    // Find the word with the highest frequency
    var mostRepeatedWord = '';
    var highestFrequency = 0;
  
    for (var word in wordFrequency) {
      if (wordFrequency[word] > highestFrequency) {
        mostRepeatedWord = word;
        highestFrequency = wordFrequency[word];
      }
    }
  
    return mostRepeatedWord;
  }

  var mostRepeated = findMostRepeatedWord(newSentence);
  console.log(mostRepeated); 

  let salarySentence = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
  let salary = salarySentence.match(/\d+/g)
  let total = 0
  for (let i = 0; i < 2; i++) {
    total = total + parseInt(salary[i])
  }
  console.log(total)
  
 console.log(salary)