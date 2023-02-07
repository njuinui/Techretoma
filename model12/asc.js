//Synchronous Javascript: javascript can run ONE statement at a time.
//Async : Start something now & finish it later.
//HTTP Request: Is use to make request from another server or your own database to get the data and use. 
// Making an HTTP Request 
const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState === 4) {
            reject('error getting resource');
        }
    });
    
    request.open('GET', 'resource');//it take two argument. the first argurme is a string and it's the type of request we wnat to make. The second is where we want to make the request to.,what's the endpoint we want to get data from
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');//it take two argument. the first argurme is a string and it's the type of request we wnat to make. The second is where we want to make the request to.,what's the endpoint we want to get data from
    request.send(); 
    })

};



// promise exaple 
// const getSomething = () => {
//     return new Promise((resolve, reject) =>{
//         // fetch something 
//         resolve('some data');
//         // reject('some error');
//     });//A promice is something propably which is to take time to do. It 
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err)
// });

getSomething().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// getTodos((err, data) => {
//     console.log('callback fire');
    
//     if (err) {
//         console.log(err) 
//     }else{
//         console.log(data)
//     }
// });  

