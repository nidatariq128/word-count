//import the "inquirer" module ,which is a comand line interface for node.js:
import inquirer from "inquirer";
// declear a constant `answer`and assign it to the result of inquirer.prompt function:
const answer = await inquirer.prompt([
    {
        name: "sentance",
        type: "input",
        message: "enter your scentance to count the word:",
    }
]);
// trim space ko  count krta h/split latter or space dono ko count krta h:
const words = answer.sentance.trim().split(" ");
//print the array of words to the console:
console.log(words);
//print the word count of the sentance to the console:
console.log(`your sentance word count is ${words.length}`);
