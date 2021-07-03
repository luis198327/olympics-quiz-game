const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer"));
console.log(answers);
/*const questionMaximum = 10; //number of questions quiz will ask
let currentQuestion = {}; //current question
let score = 0; //score counter
let questionNumber = 0; //question number quiz is on
let unusedQuestions = []; //will obtain a new question for user
let questionLibrary = [ //questions are stored here
        {
            question: "The Olympic Games in Tokyo, Japan 2021 will officially be the 32nd Olympiad. But in what year did Tokyo last host the summer games?",
            answer1: "1960",
            answer2: "1964",
            answer3: "1968",
            answer4: "1972",
            correct: "2"
        },]

/**
 * New game
 *//*
function playGame() {
    questionNumber = 0;
    score = 0;
    unusedQuestions = [...questionLibrary]  //uses full copy of the question library
    newQuestion();
}

/**
 * Obtains new question from question library
 *//*
function newQuestion() {
    questionNumber++;
    const questionIndex = Math.floor(Math.random() * unusedQuestions.length);   
    currentQuestion = unusedQuestions[questionIndex];
    question.innertext = currentQuestion.question;
};


playGame();*/