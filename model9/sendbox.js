// In this tutorial we're going to see five array method in totaly  
// 1. filter method: It iterate an array and form a check on each item inthe array inside a callback function.  

const score = [10, 30, 15, 25, 50, 40, 5];

const filteredScores = score.filter((score) => {
    return score > 20;
});

console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chu-li', premium: true}
];

const premiumUsers = users.filter(user => {
    return user.premium
});

console.log(premiumUsers)


//2. map method: it circle through an array and create a new array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map((price) => {
    return price / 2;
});
//const salePrices = prices.map(price => price /2)

console.log(salePrices);

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

const saleProducts = products.map((product) => {
    if (product.price > 30) {
       return {name:product.name, price:product.price / 2} 
    }else{
        return product;
    }
});

console.log(saleProducts)

// 3. reduce method: it work different from filter and map array. It circle through an array and form a callback function but it doesn't nessarily return an array at the end of it just return the value
const Scores = [10, 20, 60, 40, 70, 90, 30];

const result = Scores.reduce((acc, curr) => {
    if (curr > 50) {
        acc++;
    }
    return acc;
}, 0);

console.log(result)

const scoreS = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 30},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 90},
    {player: 'crystal', score: 60},
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 80},
    {player: 'crystal', score: 60}
];

const marioTotal = scoreS.reduce((acc, curr) => {
    if (curr.player === 'mario') {
        acc += curr.score;
    }
    return acc;
}, 0)
console.log(marioTotal);

// 4. find method : it circle through an array and form a callback fuction and return only a single value in the array

const SCores = [10, 5, 0, 40, 30, 20, 90, 100];

const firstHighScore = SCores.find(score => score> 50);

console.log(firstHighScore)

// 5. sort method : it circle through an array and arrange them in alphabetica order or ascending order
// example 1 - sorting strings 
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
names.reverse();
console.log(names);

// example 2 - sorting numbers 
const SCORES = [10, 50, 20, 5,35, 70,45];

// SCORES.sort();
// SCORES.reverse();

SCORES.sort((a,b) => b - a);
console.log(SCORES)

// example 3 - sorting objects 
const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
];

players.sort((a,b) => {
    if (a.score > b.score) {
        return -1;
    } else if (b.score > a.score){
        return 1;
    }else {
        return 0;
    }
});

// short code 
players.sort((a,b) => b.score - a.score);

console.log(players);

// chain method 

const Products = [
    {name: 'gold star', price: 30},
    {name: 'mushroom', price: 10},
    {name: 'green shells', price: 5},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
];

// const filtered = Products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//     return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = Products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);


console.log(promos);



