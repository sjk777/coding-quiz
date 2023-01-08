var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-page");
var startBtn = document.getElementById("start-btn");
var time = 100;

function startFunc() {
  console.log("click");
  startPage.style.display = "none";
  quizPage.style.display = "block";
  timer();
}

function timer() {
  var timerInterval = setInterval(function () {
    time--;
    console.log("Interval func");
  }, 1000);
}

startBtn.addEventListener("click", startFunc);
