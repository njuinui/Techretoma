// if statement 
const age = 25;

if (age > 20) {
    console.log('you are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const password = 'p@ss';

if (password.length >= 12) {
    console.log('that password is mighty strong');
}else if (password.length >= 8) {
    console.log("that password is long enough!");
}else{
    console.log("this password is not log enough");
}



// Switch statement : 

// switch statement use strick equality ie (if grade = '50' and one of the cases = 50. it display but Not a valid grade)

const grade = 'A';

switch (grade) {
    case 'A':
        console.log('You got an A!');
        break;// this break is to enable go out of the loop when the condition is reach else it continue to run
    case 'B':
        console.log('You got an B!');
        break;
    case 'C':
        console.log('You got an C!');
        break;
    case 'D':
        console.log('You got an D!');
        break;
    case 'E':
        console.log('You got an E!');
        break;
    default:
        console.log("Not a valid grade");
}