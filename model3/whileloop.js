
/*
while loop 
While loop is similar to for loop, just inside the paranthesis we've only the condition statement. The initializationis done outside the while loop. and the increement is done in the codeblock 
*/

let s = 0;
while (s < 5) {
    console.log('in loop: ',s);
    s++;
    
}

const names = ['shaun', 'mario', 'luigi'];

let j = 0;

while (j < names.length) {
    console.log(names[j]);
    j++;
}//this will loops through the names array and display them