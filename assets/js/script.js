let question = document.getElementById("question");
let answers = Array.from(document.getElementsByClassName("answer"));
let questionMaximum = 10; //number of questions quiz will ask
let currentQuestion = {}; //current question
let score = 0; //score counter
let questionNumber = 0; //question number quiz is on
let questionLibrary = [ //questions are stored here
        {
            question: "The Olympic Games in Tokyo, Japan 2021 will officially be the 32nd Olympiad. But in what year did Tokyo last host the summer games?",
            answer1: "1960",
            answer2: "1964",
            answer3: "1968",
            answer4: "1972",
            correct: "2"
        },]

function playGame() {
    
}