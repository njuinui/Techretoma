// for loop 
// to create a for loop we start with a for keyword then a bracket. Inside the bracket we've three difference thing. 
// the first is an initialization variable(let i = 0), second(i < 5) the condition. this is going to evaluate to true or false. If the condition is true igoing to excute the code in currly braces.
// third(i++) each time codeblock is excuted, we take i and add plus 1 to it. 
for(let i = 0; i < 5 ; i++){
    console.log('in loop:', i)
}

console.log('loop finished');


const Name = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < Name.length; i++) {
    // console.log(Name[i])

    let html = `<div> ${Name[i]}</div>`;
    console.log(html);
    
}
