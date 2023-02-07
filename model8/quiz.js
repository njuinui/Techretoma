
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswes = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers 
    userAnswes.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score +=25;
            
        }
    });

    // show result on page

    scrollTo(0,0);

    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        }else{
            output++;
        }
    }, 1000);
    

    
});


// global window 

    // console.log('hello');
    // window.console.log('hello');
    
    // console.log(document.querySelector('form'));
    // console.log(window.document.querySelector('form'));

    // alert('OK');
    // window.alert('ok');

    // setTimeout(() => {
    //     alert("Hello, ninjas");
    // }, 3000)

