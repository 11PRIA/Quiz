const questions=[ 
    {
        question: "Which is largest animal in the world",
        answers: [
            {text:"Whale", correct:false},
            {text:"Shark", correct:true}, 
            {text:"Dolphin", correct:false}, 
            {text:"Shiwangi", correct:false},
        ]
    },
    {
        question: "With CSS you can transform bland HTML menus into this property.",
        answers: [
            {text:"Navigation Bars", correct:true},
            {text:"Menus", correct:false}, 
            {text:"Dialog Boxes", correct:false}, 
            {text:"Comments", correct:false},
        ]
    },
    {
        question: "CSS can be used to arrange or organize images into a ____.",
        answers: [
            {text:"Shadow Box", correct:false},
            {text:"Boxes", correct:false}, 
            {text:"Tables", correct:false}, 
            {text:"Gallery", correct:true},
        ]
    },
    {
        question: "What is the most important CSS property, used for controlling the layout?",
        answers: [
            {text:"Display", correct:true},
            {text:"div", correct:false}, 
            {text:"Tables", correct:false}, 
            {text:"Margin", correct:false},
        ]
    },
    {
        question: "All HTML elements are considered what?",
        answers: [
            {text:"Code", correct:true},
            {text:"Boxes", correct:false}, 
            {text:"Tables", correct:false}, 
            {text:"Objects", correct:false},
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
 
let currentQuestionIndex=0 ;
let score =0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML ="Next";
    showQuestion();


 }
 function showQuestion(){
    resetState();
 let currentQuestion =questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 questionElement.innerHTML =questionNo + ". " +currentQuestion.question;
 currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct =answer.correct;
    }
    button.addEventListener("click",selectAnswer);
 });

 }
 function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }
 function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButtons.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled ="true";
    });
    nextButton.style.display ="block";
 } 
 function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display ="block";
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }
 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 });
 startQuiz();