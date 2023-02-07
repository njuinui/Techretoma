// variable and block scope 

let Age = 30;
// const can still be use inthe place of let 
// this variable can be acess and change any where inthe code because it is declear globally 
if (true) {
    let Age = 50;//here we're declearing a new local variable Age which can't be acess outside this codeblock
   // Age = 40;//change Age from 30 to 40
   let name = 'shaun';
    console.log('inside 1st code block: ', Age, name);

    // nested code block if 
    if (true) {
        let Age = 60;
        console.log('inside 2nd code block: ', Age, name)
    }
}

 console.log('outside code block: ', Age, name);//the name shaun won't display because it wasn't declear globally(outside the codeblok)
