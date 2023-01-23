var todoList = document.querySelector("#todo-list");
var startBtn= document.querySelector(".startbtn");
var timer= document.querySelector(".timer");
var hsscore = document.getElementById("highscore");
var header = document.querySelector("header");
var instructions= document.querySelector(".instructions");
var points=document.querySelector(".points");
var timer= document.querySelector(".timer");
var questionTitle= document.querySelector(".ques");
var logScore= document.querySelector(".saveScore");
var quizsec =document.querySelector("#quizsec")
var userName=document.querySelector("#name");
var userScore =document.querySelector("#userScore");
var submitScore= document.querySelector("#submit");
var displayHS= document.querySelector("#HS");
var playerScore = document.querySelector("#playerScore")
var hsList=document.querySelector("#hsList");
var counter = 120;
var points=0;
var questionIndex=0
var questionCount=0

var quiz=[{
    question: "Inside which HTML element do we put the Javscript?",
    correctanswer: "<script>",
    options:["a) <javascript>", "b) <js>", "c) <script>", "d) <scripting>"]
    },
    {
    question: "What is the correct Javascript syntax to write 'Hello World'?",
    correctanswer: "document.write('Hello World)",
    options: ["a) response.write('Hello World) ", "b) 'Hello World", "c) document.write('Hello World') ", "('Hello World')"]
    },
    {
    question: "Where is the correct place to insert a Javascript",
    correctanswer: "a)Both the <head> section and the <body> section are correct",
    options: ["a)Both the <head> section and the <body> section are correct", "b) the body section", "c) the head section", "d) the footer section"]
    },
    {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'? ",
    correctanswer: "a) <script src = 'xxx.js'>",
    options: ["a) <script src = 'xxx.js'>", "b) script name = 'xxx.js'>", "c) <script href='xxx.js'>"]
    },
]

function startCountdown(){
    const interval = setInterval(() => {
        counter --;
        if((counter<0) || (questionCount >= 4)){
            clearInterval(interval);
            timer.textContent =("thats it.");
            endOfGame();
        }else{
            timer.textContent="Timer:" + counter};
    
    }, 1000);
};