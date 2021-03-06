import CharacterCount from "./services/charCount"
import Average from "./services/avgLength"
import WordCount from "./services/wordCount"
import MostCommon from "./services/mostCommon"

// let readline = require('readline')

export default function main(str: string) :object {

  return ({
    CharacterCount: CharacterCount(str),
    AverageCount: Average(str),
    WordCount: WordCount(str),
    MostCommon: JSON.stringify(MostCommon(str))
    
  })

// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rl.question("Type in words for analysis: ", (answer: string) : void => {
//     console.log("Your Character count is:", CharacterCount(answer)), 
//     console.log("Your Average word Length is:", Average(answer)), 
//     console.log("Your Word count is:", WordCount(answer))
//     console.log("Your Most Common word is:", MostCommon(answer))
//     rl.close()
//   })
}
// main()