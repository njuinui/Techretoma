//  function declaration 

function greet() {
    console.log('hello there');
    
}

// function is a block of code to something that can be invork and run in any poin in the code

greet();
greet();
greet();

// function expression 

const speak = function(){
    console.log('good day!')
}
// invoking the function speak 
speak();
speak();
speak();

// hoisting

// function declaration 

greeting();
greeting();
greeting();

function greeting() {
    console.log('hi there!')
}

// function expression 

// talk();
// talk();
// talk();

// const talk = function () {
//     console.log('I am talking')
// }

// arguments & parameters 

const speaking = function (time, name) {
    console.log(`good ${time} ${name}`);
};
// the name parameter can't access outside the function because it is a local variable
// console.log(name);
speaking('morning', 'mario')

const talk = function (name= 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`);
    
} ;

talk();
talk('john')

// returniing values 
// `` this is backtist 

const calcArea = function (radius) {
   let area = 3.14 * radius ** 2;
//    return 3.14 * radius ** 2;
   return area; 
};

const a = calcArea(5);
console.log(a);

// arrow function 

const calculArea = radius => 3.14* radius**2;

const area = calculArea(5);
console.log('area is: ', area);

const bill = function (products,tax) {
   let total = 0;
   for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
    
   } 
   return total;
}
console.log(bill([10,15,30], 0.2));

const bills =(products,tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++) {
     total += products[i] + products[i] * tax;
     
    } 
    return total;
};

console.log(bill([10,15,30], 0.2));


const name = 'shaun';

//functions
const greetx = () => 'hello';
let resultOne = greetx();
console.log(resultOne);

// methods 

let resultTow = name.toUpperCase();
console.log(resultTow);

// callback function 

let people = ['mario','luigi', 'ryu','shaun','chu-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

// get a reference to the ul

const ul = document.querySelector('.people');

const peoples = ['mario','luigi', 'ryu','shaun','chu-li'];

let html = '';

people.forEach(function (person) {
    // create htm template 
    html += `<li style="color:purple">${person}</li>`;
    
});

console.log(html);
ul.innerHTML = html;