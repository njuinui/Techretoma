// Javascript data type 

// 1 Number e.g 1,2,100,3.14

let radius = 10;
const pi = 3.14;

console.log(radius, pi)

// maths operators +, -, *, /, **, % 
console.log(10 / 2); // gives 5
let divis = radius % 3;//give a remainder of 1
let tim = pi * radius**2; // gives 314

/*
order of operation - B I D M A S 
Bracket,index,Division,Multiplication,Addition and subtraction 
*/

let multi = 5 * (10-3)**2;

console.log(multi)
let likES =10;
likES = likES + 1;//it is the same as likrs++ ie add1 to the current value of likES
likES--; //to redues the value of likES by one
likES += 10; 
likES -= 5; // take 5 away from likES
likES *= 3; // multiply likES 3times
likES **= 2; //raise likES to the power 2
likES /= 2; //divide likES by 2
console.log(likES)

// NaN - not a number 
console.log( 5 / 'hello'); // gives NaN

// Concatinate strings and number 
let conName = 'the blog has ' + likES + ' likes';
console.log(conName);

/* 
2 String e.g "Hello" , "12@gmail.com"
we use string to store number and charaters. we store string with double or single quote
*/

 console.log('hello, world');

 let emaIl = 'des@yahoo.com';

 console.log(emaIl);
// string concatination: it is ude to join two strings tpgether
 let fName = 'Desmond';
 let lName = 'Njuinui';

let fullName = fName + ' ' + lName;
// console.log(fullName);
// getting charaters 
 console.log(fullName[3]);

// string has mehod and properties 
// string length 
console.log(fullName.length);

// string has many fuunctions and these functions are called methods 
// string methods
 console.log(fullName.toUpperCase());

let FULLNAME = fullName.toLowerCase();
console.log(FULLNAME);
//these method don't alter the original value
console.log(FULLNAME,fullName)
let index = emaIl.indexOf('@');
console.log(index);

// common string 
let emaiL = 'mario@gthenetninja.co.uk';
let reSUlt = emaiL.lastIndexOf('n'); 
console.log(reSUlt);
//slice() : it take parameters. the first parameter is where the slice start and last parameter is where the slice end 
let resULt = emaIl.slice(2,6);
console.log(resULt);
//substr() is very much like slice but a bit different. it takes two agurment, the first is the starting while the second is the number of characters that will be display 
let resULT = emaIl.substr(0,10) 
console.log(resULT);
//replace()
let reSULT = emaIl.replace('m','w') //this will replace the first m with w

console.log(reSULT);


//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatination way 

let resUlt = 'The blog called ' +  title + ' by ' + author + ' has ' + likes + ' likes';
console.log(resUlt)

// template strings way 

let results = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results)


// creating html 
let html = `
  <h2>${title}</2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes </p>
`;

console.log(html);



// 3 Boolean "true/false"

console.log(true,false, "true", "false");

// methods can return boolean 
let email= "luigi@thenetninja.co.uk";
let nameS = ['mario', 'luigi', 'toad'];

let resulT = email.includes('@')//the include will loop through the email variable to match @
console.log(resulT);
let resuLt = nameS.includes('luigi')//the include will loop through the names array to match luigi
console.log(resuLt)

// comparison operator 
let aGe = 25;

console.log(aGe == 25)
console.log(aGe == 30)
console.log(aGe != 30)
console.log(aGe > 25)
console.log(aGe < 25)
console.log(aGe <= 25)
console.log(aGe >= 25)

let nAme = 'shaun';

console.log(nAme == 'shaun');
console.log(nAme == 'Shaun');//return false in js
console.log(nAme > 'crystal');//return true because the earlier letter in the alphabet are les than the later ones
console.log(nAme > 'Shaun');// return true because lowerCase letters are greater than upperCase letter
// loose comparison(different types can still be equal) 

console.log(aGe == 25);
console.log(aGe == '25');
// the two comparison yield thesame output true. this is because js convert the string in int before comparing 

 console.log(aGe != 25);

 console.log(aGe != '25');

// strict comparison (different types can't be equal)
console.log(aGe === 25)// is age thesame value and type to 25 which is true
console.log(aGe === '25')// is age thesame value and type to '25' which is false
console.log(aGe !== 25)// is age not thesame value and type to 25 which is false
console.log(aGe !== '25')// is age not thesame value and type to '25' which is true

//  4 Null: explicitly set of values with no value
let AGE = null ;
console.log(AGE, AGE + 3, `the age is ${AGE}`);

// 5 undefined: for variables that have not yet been defined

/*
6 Object : Comlex data structures-Arrays, Dates, Literals and many more
Array: we use array to store collection of things like SVGAnimatedNumberList and strings
*/

let Ninjas = ["shaun", "ryu", "chun-li"]; //an array on ninjas
/*we can acess each an everyone of these ninjas using thire bases ie 
console.log(ninjas[1])//gives ryu. this is because js is a zero base langouge.
 we can equqlly over write one the in ninjas let say shaun 

 */

Ninjas[0] = "ken";
console.log(Ninjas[0])// now you will have ken at the begining og the array ninjas

let agE = [20,30,40,45];
console.log(agE[2])

// you can mixe the array with numbers and strings 
let random = ['shaun', 'crystal', '30,35'];
console.log(random)//to log the array on the browser
console.log(random.length)

// array method 
let reSult = Ninjas.join(',')//join() will join the strings in ninjas and sepaaete them with a comma
console.log(reSult)
let REsult = Ninjas.indexOf('chun-li');
let RESult = Ninjas.concat(['ken', 'crystal'])//concat is used to join to arrays together
let RESULT = Ninjas.push('Ken');//push() add at value in to the array and display the length of the new array
RESULT = Ninjas.pop();//it changes the original value of ninjas. it pop-off the last value inthe array.
console.log(RESULT) 


// 7 Symbol : use with objects