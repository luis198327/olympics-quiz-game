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
        },
        {
            question: "To the nearest million, what is the population of the Greater Tokyo Area?",
            answer1: "32 million",
            answer2: "35 million",
            answer3: "37 million",
            answer4: "43 million",
            correct: "3"
        },
        {
            question: "How many sports will be competed at the Tokyo Olympics?",
            answer1: "27",
            answer2: "30",
            answer3: "33",
            answer4: "36",
            correct: "3"
        },
        {
            question: "How many gold medals are on offer at the games?",
            answer1: "300",
            answer2: "315",
            answer3: "339",
            answer4: "356",
            correct: "3"
        },
        {
            question: "The mascot for the Tokyo games is called Miraitowa, but what meaning does this have?",
            answer1: "Future Forever",
            answer2: "Fire, Air, Earth and Water",
            answer3: "Cherry Blossom",
            answer4: "Reflection",
            correct: "1"
        },
        {
            question: "How many athletes will be expected to compete at the Tokyo Olympics?",
            answer1: "10,586",
            answer2: "11,091",
            answer3: "12,246",
            answer4: "13,621",
            correct: "2"
        },
        {
            question: "When do the athletes from Greece enter the stadium at the opening ceremony?",
            answer1: "First",
            answer2: "Last",
            answer3: "In alphabetical order",
            answer4: "Dependent on the drawing of lots",
            correct: "1"
        },
        {
            question: "What is Japan’s most successful Olympic sport?",
            answer1: "Wrestling",
            answer2: "Gymnastics",
            answer3: "Swimming ",
            answer4: "Judo",
            correct: "4"
        },
        {
            question: "The Japan National Stadium in Tokyo will host the opening and closing ceremonies, as well as the track and field events.  What capacity is the stadium?",
            answer1: "58,000",
            answer2: "62,000",
            answer3: "68,000",
            answer4: "74,000",
            correct: "3"
        },
        {
            question: "An Olympic gold medal is made mostly of what metal?",
            answer1: "Copper",
            answer2: "Silver",
            answer3: "Gold",
            answer4: "Nickel",
            correct: "2"
        },
        {
            question: "What country nearly swept the men's swimming events at the 1932 Summer Olympics?",
            answer1: "Sweden",
            answer2: "USA",
            answer3: "Italy",
            answer4: "Japan",
            correct: "4"
        },
        {
            question: "What colour Olympic ring represents Asia?",
            answer1: "Red",
            answer2: "Yellow",
            answer3: "Green",
            answer4: "Black",
            correct: "3"
        },
        {
            question: "Including Tokyo 2021, how many times has the Summer games been hosted in Asia?",
            answer1: "3",
            answer2: "4",
            answer3: "5",
            answer4: "6",
            correct: "2"
        },
        {
            question: "Which city will host the Summer Olympic Games in 2024?",
            answer1: "Athens",
            answer2: "Berlin",
            answer3: "Madrid",
            answer4: "Paris",
            correct: "4"
        },
        {
            question: "Tokyo was scheduled to host the Olympic Games in 1940, but due to the war this was rescheduled to take place where, before being suspended indefinitely?",
            answer1: "Helsinki",
            answer2: "Oslo",
            answer3: "Stockholm",
            answer4: "St. Petersburg",
            correct: "1"
        },
        {
            question: "Tokyo’s Shibuya Crossing is said to be the world’s busiest pedestrian crossing.  How many people are said to cross at a time?",
            answer1: "1000",
            answer2: "2000",
            answer3: "3000",
            answer4: "4000",
            correct: "3"
        },
        {
            question: "During the 1936 games in Berlin, two Japanese pole-vaulters tied for second place. How were the medals distributed?",
            answer1: "The first athlete to jump and clear the height took the silver medal",
            answer2: "The athletes cut and fused part of a silver and bronze medal, so each had a half silver and bronze medal",
            answer3: "They competed again to determine second place",
            answer4: "They both were awarded a bronze medal",
            correct: "2"
        },
        {
            question: "Japan first participated in the 1912 Summer Olympic Games.  How many medals have they won up to and including the 2016 games?",
            answer1: "362",
            answer2: "408",
            answer3: "439",
            answer4: "497",
            correct: "3"
        },
        {
            question: "As at December 2020, organisers believe Japan will have spent how much on the preparation of the Olympic Games?",
            answer1: "$15 billion dollars",
            answer2: "$1.6 trillion dollars",
            answer3: "$80 millon dollars",
            answer4: "$30 billion dollars",
            correct: "1"
        },
        {
            question: "Greece, France and Great Britain have participated at 28 Summer Olympic Games. But which other country has too?",
            answer1: "Italy",
            answer2: "Austria",
            answer3: "USA",
            answer4: "Switzerland",
            correct: "4"
        },
    ];

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
        // placeholder for what to do when game has reached its question limit of 10
     /*   if (questionNumber >= questionMaximum) {
            //need to determine what happens - show image?;
        }
*/
    questionNumber++;  //increments question number
    const questionLibIndex = Math.floor(Math.random() * unusedQuestions.length); //to obtain random question
    currentQuestion = unusedQuestions[questionLibIndex];  //ref to question
    question.innerHTML = currentQuestion.question;  //set HTML to the question property
  
    //for loop to get answer options of each question and applies to A, B, C, D options
    for (const answer of answers) {     
        const number = answer.dataset['answer'];
        answer.innerHTML = currentQuestion['answer' + number];
    }
    //Remove question from unused questions
    unusedQuestions.splice(questionLibIndex, 1);
};

for (answer of answers) {
    answer.addEventListener('click', function(event){
        answer['answer'];
        
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset['answer'];

        const correctIncorrect = 
        selectedAnswer == currentQuestion.correct ? "correct" : "incorrect";
        console.log(correctIncorrect); 
        
        newQuestion();
        });
    };
            
    playGame();
