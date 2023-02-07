// dates & times 
const now = new Date();

console.log(now);
console.log(typeof naw);


// year, months, day, times 
console.log('getFullYear:',now.getFullYear());
console.log('getMonth:',now.getMonth());
console.log('getDate:',now.getDate());
console.log('getDay:',now.getDay())
console.log('getHours:',now.getHours())
console.log('getMinutes:',now.getMinutes())
console.log('getSeconds:',now.getSeconds())


// timestamps 
console.log('timestamp:', now.getTime());

// date strings 

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// timestamps 

const before = new Date('February 1 2019 7:30:59');
const Now = new Date();

console.log(Now.getTime(), before.getTime());

const diff = Now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 60);

console.log(mins, hours, days);

console.log(`the blog was written ${days}days ago`);

// converting timstaps into date objects
const timestamp = 167593874990;
console.log(new Date(timestamp));

// building a degital clock 
const clock = document.querySelector('.clock');

const tick = () =>{
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    //html template to eject into clock
    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);// to update every after one second


