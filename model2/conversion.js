/*
type conversion 
type conversion is onverting from one data types to another
*/

let score = '100';

console.log(score + 1)// gives 1001 because you are concatinating string and number

let scores = Number(score);
console.log(scores + 1)// gives 101 because you've converted string to number version before adding

console.log(typeof score); // gives a string
console.log(typeof scores); // gives a number

// you can't convert string to number 
let rEsult = Number('hello');

console.log(rEsult)// give NaN

// you can convert number to string 
let Result = String(50);
console.log(Result, typeof Result)// give '50' and string

let result = Boolean('');

console.log(result, typeof result)// give '50' and string