const quizDate = [
    {
        question: "Чемпион мира по футболу 2022?",
        a:"Испания",
        b:"Германия",
        c:"Аргентина",
        d:"Франция",
        correct:"c"
    },
    {
        question: "Чемпион мира по футболу 2018?",
        a:"Испания",
        b:"Германия",
        c:"Аргентина",
        d:"Франция",
        correct:"a"
    },
    {
        question: "Чемпион мира по футболу 2014?",
        a:"Испания",
        b:"Германия",
        c:"Аргентина",
        d:"Франция",
        correct:"d"
    },
    {
        question: "Чемпион мира по футболу 2010?",
        a:"Испания",
        b:"Германия",
        c:"Аргентина",
        d:"Франция",
        correct:"b"
    },
]
const quiz = document.querySelector("#quiz");
const answer = document.querySelectorAll(".answer")
const question = document.querySelector("#question")
const a_text = document.querySelector("#a_text")
const b_text = document.querySelector("#b_text")
const c_text = document.querySelector("#c_text")
const d_text = document.querySelector("#d_text")

const submitBtn = document.querySelector("#submit")

let currentQuiz = 0
let score = 0


function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizDate[currentQuiz]

    question.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
loadQuiz()

function deselectAnswers(){
    answer.forEach(item=> item.checked = false)
}

function getSelected(){
let answerEl
answer.forEach(item =>{
    if(item.checked){
    answerEl = item.id 
    
    }
    
})
    return answerEl
}

submitBtn.addEventListener("click", ()=>{
   const answer =  getSelected()
   if(answer){
    if(answer === quizDate[currentQuiz].correct ){
        score++
    }
    currentQuiz++
    if(currentQuiz < quizDate.length){
        loadQuiz()
    } else{
        quiz.innerHTML = `
        <h2>Вы ответили на ${score} из ${quizDate.length} вопроса</h2>
        <button onclick="location.reload()">Начать заново</button>
        `   

    }
   }
})
