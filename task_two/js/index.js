 const Data= [
    []
 ]
const correctAnswers = ['B', 'C', 'A', 'D', 'A', 'E', 'D', 'B', 'C', 'B'];
const button = document.querySelector('button');
const nQuestions = document.getElementById('nQuestion')
const Nquestions = document.getElementById('result')
const form = document.querySelector('.quiz');
const cards = document.getElementsByClassName('card');
let errors = document.getElementsByClassName('error')



function showResult(qNumber) {
    let nQ =  qNumber;
    let err = " You'v selected more than the number of questions.";
    if (nQ >= cards.length ) {
        alert("Error");
        
        
    }else{
        Nquestions.innerHTML = nQ;

    }

    
}

button.addEventListener('click', () => {
    showResult(nQuestions.value)

})

/**
 *! Next and Previous button
 **/
// const visibleDive = 0;

// function showDiv() {
//     $(".card").hide();
//     $(".card:eq("+ visibleDive +")").show();
// }

// showDiv();

// function next() {
//     if (visibleDive == $(".card").length - 1) {
//         visibleDive = 0;
//     }else{
//         visibleDive ++;
//     }
//     showDiv();
// }
// form.addEventListener('submit', e => {
    
// })

form.addEventListener('submit', e => {
   e.preventDefault();

   let score =0;
   const uAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

   uAnsers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
        score += 20;
    }
   });
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
   }, 10);
   
})