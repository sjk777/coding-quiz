var todoList = document.querySelector("#todo-list");
var startBtn = document.querySelector(".startbtn");
var timer = document.querySelector(".timer");
var header = document.querySelector("header");
var instructions = document.querySelector(".instructions");
var points = document.querySelector(".points");
var timer = document.querySelector(".timer");
var questionTitle = document.querySelector(".ques");
var logScore = document.querySelector(".saveScore");
var quizsec = document.querySelector("#quizsec");
var userName = document.querySelector("#name");
var userScore = document.querySelector("#userScore");
var submitScore = document.querySelector("#submit");
var playerScore = document.querySelector("#playerScore");
var hsList = document.querySelector("#hsList");
var counter = 120;
var points = 0;
var questionIndex = 0;
var questionCount = 0;

var quiz = [
  {
    question: "Inside which HTML element do we put the Javscript?",
    correctanswer: "c) <script>",
    options: ["a) <javascript>", "b) <js>", "c) <script>", "d) <scripting>"],
  },
  {
    question: "What is the correct Javascript syntax to write 'Hello World'?",
    correctanswer: "c) document.write('Hello World')",
    options: [
      "a) response.write('Hello World) ",
      "b) 'Hello World",
      "c) document.write('Hello World')",
      "d)('Hello World')",
    ],
  },
  {
    question: "Where is the correct place to insert a Javascript",
    correctanswer:
      "a)Both the <head> section and the <body> section are correct",
    options: [
      "a)Both the <head> section and the <body> section are correct",
      "b) the body section",
      "c) the head section",
      "d) the footer section",
    ],
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'? ",
    correctanswer: "a) <script src = 'xxx.js'>",
    options: [
      "a) <script src = 'xxx.js'>",
      "b) script name = 'xxx.js'>",
      "c) <script href='xxx.js'>",
      "d) <scrippee>",
    ],
  },
];

function startCountdown() {
  const interval = setInterval(() => {
    counter--;
    if (counter < 0 || questionCount >= 4) {
      clearInterval(interval);
      timer.textContent = "thats it.";
      gameOver();
    } else {
      timer.textContent = "Timer:" + counter;
    }
  }, 1000);
}

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  playerScore.style.display = "flex";
  instructions.style.display = "none";
  startCountdown();
  startQuestion();
  playerScore.innerHTML = 'Score: <span class= "points"> 0</span>';
});

startQuestion = function () {
  questionTitle.textContent = quiz[questionIndex].question;
  var options_length = 4;
  var op = quiz[0].options;
  for (var i = 0; i < options_length; i++) {
    var list = document.createElement("li");
    list.textContent = op[list];
    todoList.appendChild(list);
  }
};

renderNextQuestion = function () {
  questionIndex++;
  questionTitle.textContent = "";
  questionTitle.textContent = quiz[questionIndex].question;
  var option_length = 4;
  var op = quiz[questionIndex].options;
  todoList.textContent = "";
  for (var i = 0; i < option_length; i++) {
    var li = document.createElement("li");
    li.textContent = op[i];
    todoList.appendChild(li);
  }
};

var thisOrThat = document.getElementById("quizsec");
todoList.addEventListener("click", function (event) {
  questionCount++;
  if (event.target.matches("li")) {
    if (event.target.textContent === quiz[questionIndex].correctanswer) {
      var rowie = document.createElement("h3");
      rowie.textcontent = "Correct!";
      thisOrThat.appendChild(rowie);
      points++;
      playerScore.textContent = "Score: " + points;
      setTimeout(() => {
        renderNextQuestion();
        rowie.textContent = "";
      }, 1000);
    } else {
      var rowie = document.createElement("h3");
      rowie.textContent = "Incorrect!";
      thisOrThat.appendChild(rowie);
      counter = counter - 4;
      setTimeout(() => {
        renderNextQuestion();
        rowie.textContent = "";
      }, 1000);
    }
  }
});

gameOver = function () {
  quizsec.style.display = "none";
  todoList.style.display = "none";
  logScore.style.display = "block";
  userScore.value = points;
};

var highScoreInfo = JSON.parse(localStorage.getItem("UserInfo")) || [];
submitScore.addEventListener("click", function () {
  var newUserInfo = {
    name: userName.value,
    score: userScore.value,
  };
  highScoreInfo.push(newUserInfo);
  localStorage.setItem("UserInfo", JSON.stringify(highScoreInfo));
  var heading = document.createElement("h2");
  heading.textContent = "submitted score";
  highScoreDisplay.append(heading);

  var hslist = document.createElement("li");
  hslist.textContent = newUserInfo.name + "-" + newUserInfo.score;
  hsList.appendChild(hslist);
  allScores = [];
  allUsers = [];
  var lengthlist = highScoreInfo.length;
  for (let i = 0; i < lengthlist; i++) {
    allScores.push(highScoreInfo[i].score);
    allUsers.push(highScoreInfo[i].name);
  }

  var max = allScores.reduce((a, b) => Math.max(a, b), -Infinity);
  console.log(allUsers);
  console.log(allScores);
  console.log(max);
});

timer.textContent = "Timer: " + counter;
