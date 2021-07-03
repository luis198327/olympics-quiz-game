const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("answer"));

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

const questionMaximum = 10; //number of questions quiz will ask

/**
 * New game
 */
function playGame() {
    questionNumber = 0;
    score = 0;
    unusedQuestions = [...questionLibrary];  //uses full copy of the question library
    newQuestion();
}

/*
 * Obtains new question from question library
 */
function newQuestion() {
    questionNumber++;  //increments question number
    const questionLibIndex = Math.floor(Math.random() * unusedQuestions.length); //to obtain random question
    currentQuestion = unusedQuestions[questionLibIndex];  //ref to question
    question.innerHTML = currentQuestion.question;  //set HTML to the question property
  
    //for loop to get answer options of each question and applies to A, B, C, D options
    for (const answer of answers) {     
        const number = answer.dataset['answer'];
        answer.innerHTML = currentQuestion['answer' + number];
    }}

    playGame();
