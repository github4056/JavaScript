const userName = "Tejveer";
const repoCount = 50;

// console.log("Hello, my name is " + userName + " and I have " + repoCount + " repositories.");
// console.log(`Hello, my name is ${userName} and I have ${repoCount} repositories.`);

// const gameName = new String('Counter-Strike');
// const gameName = new String('tejveersingh');
// console.log(gameName[2]);
// console.log(gameName.__proto__); // This will show the prototype of the String object
// console.log(gameName.length); // Length of the string
// console.log(gameName.toUpperCase()); // Convert to uppercase
// console.log(gameName.toLowerCase()); // Convert to lowercase
// console.log(gameName.charAt(5)); // Get character at index 0
// console.log(gameName.charAt('t')); // Get character at index 0
// console.log(gameName.indexOf('t')); // Find index of substring
// console.log(gameName.lastIndexOf('e')); // Find last index of character 'e'

const gameName = new String('tejveersingh');

const newString = gameName.substring(0, 4); // Get substring from index 0 to 5
//  console.log(newString); // Output: Coun
const anotherString = gameName.slice(-14, 5); // Get substring from index 0 to 5
console.log(anotherString); // Output: Stri

const newStringOne = "   tejveer   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove whitespace from both ends
const newStringTwo = "tejveer is a good";
// console.log(newStringTwo.replace('good', 'bad')); // Replace 'good' with 'bad'
const newStringThree = "tejveer is a good developer";
// console.log(newStringThree.includes('good')); // Check if 'good' is present
 
const url = "https://www.hemrix.com/web%20development";
console.log(url.replace('%20', '-')); // Replace '%' with space

console.log(url.includes('hemrix')); // Check if 'hemrix' is present in the URL
console.log(url.includes('devg')); // Check if 'hemrix.com' is present in the URL

console.log(gameName.split('-')); // Split the string into an array of characters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split