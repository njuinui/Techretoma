const button = document.querySelector('button');
const nQuestions = document.getElementById('nQuestion')
const cards = document.getElementsByClassName('card');
let errors = document.getElementsByClassName('error');
const Nquestions = document.getElementById('result');
const numberQuestion = document.getElementById('numberQuestion');




const Data = [
    {
      question: " The vaue of x if 32 = 0.25 to the power x is:",
      a: "2/5 ",
      b: "5/2",
      c: "2/10",
      d: "-4",
      e: "None",
      correct: "d",
    },
    {
      question: " The equation of line through the origin perpendicular to 3x - 2y + 4 = 0 is:",
      a: "2x + 3y = 0",
      b: "3x - 2y = 0",
      c: "9x - 6y -26 = 0",
      d: "3x + 2y = 0",
      e: "2y - 3x + 1 = 0",
      correct: "b",
    },
    {
      question: "Given the differential equation cosx dy/dx = ysinx, then:",
      a: "y = in(secx) + K",
      b: "iny = (secx) + K",
      c: "y = secx + K",
      d: "iny = secx + K",
      e: "None",
      correct: "b",
    },
    {
      question: "(7-2)/2*2**2 is",
      a: "10 ",
      b: "3",
      c: "0.4",
      d: "5/8",
      e: "25",
      correct: "e",
    },
];

let questionCounter = 0;
let avilableQuestions = [];


const grabId = (idName) => {
    const ElementId = document.getElementById(idName);
    if (ElementId) return ElementId;
    throw new Error(`cannot find the id ${idName}`);
  };
  const option1 = grabId("option1");
  const option2 = grabId("option2");
  const option3 = grabId("option3");
  const option4 = grabId("option4");
  const option5 = grabId("option5");
  let nextBtn = grabId("btn-next");
  let prevBtn = grabId("btn-prev");
  const quiz = grabId("quiz");
  const question = document.querySelector("h3");
  const answers = document.querySelectorAll(".answer");
  
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

  const options=[option1,option2,option3,option4,option5]
  
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

   function getNewQuestion() {
    numberQuestion.innerHTML = "Question" + (questionCounter + 1) + "of" + Data.length;
    // set question text 
    // get random question 
    const questionIndex = avilableQuestions[Math.floor(Math.random() * avilableQuestions.length)]
    currentQuestion = questionIndex;
    question.innerHTML = currentQuestion.question;
    // get the position of the questionIndex from the avilableQuestions array 
    const index1 = avilableQuestions.indexOf(questionIndex);
    // console.log(index1);
    // remove the 'questionIndex'from the avilableQuestions array so that the question doesn't repeat 
    avilableQuestions.splice(index1,1)
    console.log(questionIndex)
    // console.log(avilableQuestions)
    // set options 
    // get the length of options
     const optionLen = currentQuestion.options.length
     console.log(currentQuestion.options);  
    questionCounter++;
   }

  window.onload = function () {
    // first we will set all questions in setAvailableQuestions Array
    setAvailableQuestions();
    // second we'll call getNewQuestion(): function 
    getNewQuestion();
  }

  
  function PreviousQuestion() {
      if (currentQuize.valueOf() === 0) {
        alert("Can't go back anymore");
      } else {
        currentQuize--;
        loadQuize();
      }
  }

  function getValue() {
    let value = undefined;
    answers.forEach((answer) => {
      
      
        if (answer.checked) {
           value = answer.id;
        }     
    });
    return value;
  }

  
  function unCheckAnswer() {
    answers.forEach((answer) => {
      answer.checked = false;
    });
  }

  
  function showResult(qNumber) {
    let nQ =  qNumber;
    let err = " You'v selected more than the number of questions.";
    if (!isNaN(nQ)) {
      if (nQ > Data.length ) {
        alert("You've enter more than the number of question");        
        
    }else{
        Nquestions.innerHTML = nQ;

    }

    }else{
      alert("No");
    }
   
    
}

button.addEventListener('click', () => {
    showResult(nQuestions.value)

})