// Logica operator - Or || and &&: you these conditions into if check to check a combination of different condition

const pass = 'p@ss';

if (pass.length >= 12 && pass.includes('@')) {//we're checking if the pass is greater than or equal to 12 and it include @ symbol
    console.log('that password is mighty strong');// if the condition is true it will execute this
}else if (pass.length >= 8 || pass.includes('@') && pass.length >= 5) {//we're checking if the pass is greater than or equal to 8 or  it include @ symbol and pass is greater than or equql to 5. pass.include('@') && pass.length >= 5 is treated as one condition
    console.log("that password is long enough!");// if the condition is true it will execute this
}else{
    console.log("this password is not log enough");
}

// logical NOT (!)

let user = false;

if (!user) {//the result in the codeblock will run because the logical not operator switch user.
    console.log('you must be logged in to continue');
}

console.log(!true);// display false. it takes the true value and change it to false
console.log(!false);// display true. it takes the false value and change it to true
