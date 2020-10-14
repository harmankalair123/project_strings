const CharacterCount = require("./services/charCount.js")
const Average = require( "./services/avgLength.js")
const WordCount = require("./services/wordCount.js")

let readline = require('readline')

function main(){

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Type in words for analysis: ", (answer) => {
    console.log("Here are your results: ", 
    "Your Character count is: ", CharacterCount(answer), 
    "Your Average Length is: ", Average(answer), 
    "Your Word count is: ", WordCount(answer))
    rl.close()
  })
}
main()