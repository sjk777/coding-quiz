var startPage= document.getElementById('start-page');
var quizPage = document.getElementById('quiz-page');
var startBtn= document.getElementById('start-btn');

function startFunc(){
    console.log("click");
    startPage.style.display = "";
}

startBtn.addEventListener("click",startFunc)