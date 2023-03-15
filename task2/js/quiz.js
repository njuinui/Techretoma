

const numberQuestionToAnswer = document.querySelector(".number_question");
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
let optionContainer = document.querySelector(".option-container");
let answersIndicatorContainer = document.querySelector(".answers-indicator");
let instruction = document.querySelector(".instruction");
let quizBox = document.querySelector(".quiz-box");
let resultzBox = document.querySelector(".result");
let enterNumberQuestion = document.querySelector("#NQ");
let numberToAnswer = document.querySelector(".number-to-answer")

// const remainingTimeElement = document.querySelector(".timer-left");
// secondsLeft = 10;

// var now = new Date().getTime();
// var timeleft = countDownDate - now; 

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;


// push the question into availableQuestions Array 
function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
         availableQuestions.push(quiz[i])
    }
    
    //  console.log(availableQuestions)

}

function getNewQuestion(){
     numberToAnswer.innerHTML = "Question " + (questionCounter + 1) ;
    // set question text 
    // get random question 
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex
    questionText.innerHTML = currentQuestion.q;
    // console.log(questionIndex)
    // get the position of the questionIndex from the availableQuestions array 
    const index1 = availableQuestions.indexOf(questionIndex);
    //remove the questionIndex from the availableQuestion array, so that the question doesn't repeat
    availableQuestions.splice(index1, 1)
    // set option 
    // get the length of options 
    const optionLen  = currentQuestion.options.length;
    // console.log(currentQuestion.options)
    // push the options into  availableOptions Array
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i)
    }
    
    optionContainer.innerHTML = '';
    let animationDisplay = 0.15;
    // create an options in html 
    for (let i = 0; i < optionLen; i++) {
        // random option 
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        // get the position of the optionIndex from the availableOptions Array 
        const index2 = availableOptions.indexOf(optionIndex);
        // remove the optionIndex form the availableOptions so that the option dosn't repeat 
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDisplay = animationDisplay + 's';
        animationDisplay = animationDisplay + 0.5;
        option.className = "option";
        optionContainer.appendChild(option);
        
        option.setAttribute("onclick","getResult(this)");
       
    }

     questionCounter ++;
     
}

// get result of current attempt question 
function getResult(element){
    const id = parseInt(element.id);
    // get the answer by comparing the id of clicked option 
    if (id ===  currentQuestion.answer) {
        // set the green to the correct option
        element.classList.add("correct");
        // add the indicator to correct mark 
        updateAnswerIndicator("correct");
        correctAnswers ++;
        // console.log("correct:"+correctAnswers)
    }else{
        // set the red color to the incorrect option 
        element.classList.add("wrong");
        // add the indicator to wrong mark 
        updateAnswerIndicator("wrong")

        // if the answer is incorrect then show the correct answer by adding green color to the correct answer 
        const optionLen = optionContainer.children.length;
        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
            
        }
    }

    // increment attempt question 
    attempt ++;
    unclickableOptions();
}



// make all the options unclickable once the the user select an option (RESTRICT THE USER TO CHANGE OPTION)
function unclickableOptions(){

    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator(){
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);

        
    }
}

function updateAnswerIndicator(markType){
    answersIndicatorContainer.children[questionCounter-1].classList.add(markType)
}


function next(){
    // console.log(enterNumberQuestion.value)
    let NQ = enterNumberQuestion.value;
    // console.log(questionCounter)
    if(questionCounter == NQ){
        console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}

function quizOver(){
    // hide quiz quiz-box 
    quizBox.classList.add("hide");
    // show result Box 
    resultzBox.classList.remove("hide");
    quizResult();
}

// number of question to answer 

function numQuestion() {
    let nQ = enterNumberQuestion.value;
    if (!isNaN(nQ)) {
        if (nQ > quiz.length ) {
            alert("You've enter more than the number of question")
        }else if(nQ =='' || nQ === 0 ){
            alert("Enter the number of you want to answer")
        }
        else{
            questionNumber.innerHTML ="You're to answer " +  nQ + " question(s)";
            // hide number of quester 
            numberQuestionToAnswer.classList.add("hide");
            // show quizBox 
            quizBox.classList.remove("hide")
        }
    }else{
        alert("Only numbers are alowed")
    }
    
}

// get quiz result 
function quizResult(){
    resultzBox.querySelector(".total-question").innerHTML = enterNumberQuestion.value;
    resultzBox.querySelector(".total-attempt").innerHTML = attempt;
    resultzBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultzBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers/quiz.length) * 100;
    resultzBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultzBox.querySelector(".total-score").innerHTML = correctAnswers +" / " + enterNumberQuestion.value;
}


function resetQuiz() {
     questionCounter = 0;
     correctAnswers = 0;
     attempt = 0;
}

function tryAgainQuiz(){
    // hide the resultBox 
    resultzBox.classList.add("hide");
    // show the quizBox 
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
    numQuestion();
}

function goToHome(){
    // hide the resultBox 
    resultzBox.classList.add("hide");
    // show the quizBox 
    instruction.classList.remove("hide");
    resetQuiz();
   
}
 

// ##### STARTING POINT #### 

function startQuiz(){
    instruction.classList.add("hide");
    // show quiz box 
    numberQuestionToAnswer.classList.remove("hide")
   // first we'll set all question in availableQuestions array 
   setAvailableQuestions();
   // second we'll call getNewQestion() function 
   getNewQuestion();
   // to create answer indicator 
   answersIndicator();
   quizResult()

   

}

window.onload = function(){

    // instruction.querySelector(".total-question").innerHTML = quiz.length;
}

