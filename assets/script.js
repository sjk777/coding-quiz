var start_btn = docuement.querySelector(".start_btn button");
var quiz-page = document.querySelector(".quiz-page");
var result_box = document.querySelector(".result_box");
var options_list = document.querySelector(".options_list");
var time_line = document.querySelector("header .time_line");
var timeText = document.querySelector(".timer .time_left_txt");
var timeCount = document.querySelector(".timer  .timer_sec");

//start button
start_btn.onclick = () => {
  quiz_box.classList.add("activeQuiz");
}

var timeValue = 100;
var que_count = 0;
var que_numb = 1;
var userScore = 0;
var counter;
var counterLine;
var widthValue = 0;

var restart_quiz = result_box.querySelector(".buttons .restart");
var quit_quiz = result_box.querySelector(".buttons .quit")

restart_quiz.onclick = () => {
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  timeValue= 100;
  que_count= 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  clearInterval(counterLine);
  startTimer(timeValue);
  startTimerLine(widthValue);
  timeText.textContent = "Time Left";
  next_btn.classList.remove("show");
}

quit_quiz.onclick = () => {
  window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = () => {
  if(que_count < questions.length -1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
  }else{
    clearInterval(counter);
    clearInterval(counterLine);
    showResult();
  }
}