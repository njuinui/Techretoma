const button = document.querySelector('button');
const nQuestions = document.getElementById('nQuestion')
const cards = document.getElementsByClassName('card');
let errors = document.getElementsByClassName('error');
const Nquestions = document.getElementById('result');
const numberQuestion = document.getElementById('numberQuestion');

let questionCounter = 0;
let avilableQuestions = [];

let currentQuize = 0;
let score = 0;

loadQuize();
function loadQuize() {
    unCheckAnswer();
    let nextOption = Data[currentQuize];
    question.innerText = nextOption.question;
    option1.innerText = nextOption.b;
    option2.innerText = nextOption.b;
    option3.innerText = nextOption.c;
    option4.innerText = nextOption.d;
    option5.innerText = nextOption.e;
    nextBtn.addEventListener("click", nextQuestion);
    prevBtn.addEventListener("click", PreviousQuestion);
}

function nextQuestion() {
    if (questionCounter === Data.length) {
     console.log("quiz Over");
    }else{
       getNewQuestion();
    }
    const answer = getValue();
    if (answer) {
        if (answer === Data[currentQuize].correct) {
             score++;          
        }
            
        if (nQuestions.value==0) {
            alert("Enter the Number of Question You want to answer!!")
        }
        else {
            currentQuize++;
            if (currentQuize < Data.length) {
              
              if (nQuestions.value > Data[currentQuize] //Data.indexOf(currentQuize)) {
              ){alert("You've reach your limit!!");
              }else{
                loadQuize();
              }
              
            } else if (score === Data.length) {
              quiz.innerHTML = `<h1 style="text-align:center;"> Congratulations 👏👏 <br/>You scored ${score}/${Data.length}</h1>`;
            } else {
              quiz.innerHTML = `<h1 style="text-align:center; color:white; "> You scored ${score}/${Data.length}`;
            }
          }
       }
      
       } 
       function setAvailableQuestions() {
        const totalQuestion = Data.length;
        for (let i = 0; i < totalQuestion; i++) {
          avilableQuestions.push(Data[i]);
          
        }
       }