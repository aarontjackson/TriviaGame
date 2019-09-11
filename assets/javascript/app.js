//create 10 questions for the user to answer (true/false or multiple choice)
var triviaQuestions = [
    {
        question: "Forthy degrees fahrenheit is the same as _______ celsius.",
        choices: ["Forthy Degrees Celsius", "Twenty Degrees Celsius", "Thirty Degress Celsius", "Fifty Degress Celsius"],
        answer: "Forthy Degrees Celsius"
    },

    {
        question: "How many letters are in the Hawaiian alphabet?",
        choices: ["27", "26", "13", "23"],
        answer: "13"
    },

    {
        question: "The term OMG was first used in?",
        choices: ["1994", "1917", "1984", "2001"],
        answer: "1917"
    },

    {
        question: "Two full grown trees can support a family of?",
        choices: ["4", "2", "3", "5"],
        answer: "4"
    },

    {
        question: "A spider's silk is how many times stronger than steel?",
        choices: ["4", "2", "3", "5"],
        answer: "3"
    },

    {
        question: "The sun makes up _______ % of the mass in our Solar System.",
        choices: ["85", "20", "99", "90"],
        answer: "99"
    },

    {
        question: "Lettuce is to sunflower seeds, as a peach is to _____ ",
        choices: ["Almonds", "Soybeans", "Onions", "Cabbage"],
        answer: "Almonds"
    },

    {
        question: "How many rings make up the symbol of the Olympic Games",
        choices: ["Three", "Five", "Six", "Seven"],
        answer: "Five"
    },

    {
        question: "As the old idiom goes practice makes _______",
        choices: ["Failure", "Performance", "Pancakes", "Perfect"],
        answer: "Perfect"
    },

    {
        question: "What is the most commonly eaten food in the world?",
        choices: ["Wheat", "Potatoes", "Corn", "Beans"],
        answer: "Corn"
    }
];

//identify global variables
var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

function nextQuestion() {

    //Continue through the trivia question array until all questions are displayed
    var questionComplete = (triviaQuestions.length - 1) === currentQuestion;

    if (questionComplete) {
        console.log("Done!");
        displayResults();
    }
    else {
        currentQuestion++;
        loadQuestion();
    }

}

// Timer functionality 

// Change the question if the timer reaches zero
function timeUp() {
    clearInterval(timer);

    lost++;

    nextQuestion();
}
// Timer countdown function
function countDown() {
    counter--;

    $("#time").html("Time Remaining: " + counter);

    if (counter === 0) {
        timeUp();
    }
}
// Load the question and answers with a 30 second timer for user to answer
function loadQuestion() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    var question = triviaQuestions[currentQuestion].question; //
    var choices = triviaQuestions[currentQuestion].choices; //

    $("#time").html("Time Remaining: " + counter);
    $("#game").html(`  
        <h4>${question}</h4>
        ${loadChoices(choices)}
        `);

}

// Timer for user to select an answer



// Function to show all answer choices to the user
function loadChoices(choices) {

    var result = "";
    // Iterate through the array to show all possible choices
    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`

    }

    return result;
}
loadQuestion();

// Event delegation for user selecting right/wrong answer
$(document).on("click", ".choice", function () {
    clearInterval;
    var selectedAnswer = $(this).attr("data-answer");
    var answer = triviaQuestions[currentQuestion].answer;
    console.log("click is up", selectedAnswer);

    if (answer === selectedAnswer) {
        score++;
        nextQuestion();
    }
    else {
        lost++;
        nextQuestion();
    }
});

function displayResults() {
    var result = `
            <p> You answered ${score} question(s) right!</p>
            <p> You missed ${lost} question(s)!</p>
            <p> A total of ${triviaQuestions.length} question(s) right!</p>
            <button class="btn btn-primary" id="reset">Reset Game</button>
        `;

    $("#game").html(result);
}

$(document).on("click", "#reset", function () {
    counter = 30;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer;

    loadQuestion();
});

loadQuestion();


        // Document user array position to compare to integer value of answer
        // userPick = parseInt.attr("userValue");

        // Trivia game outcomes

    //     if (userPick === display.answer ) {
    //         stopTrivia();
    //         rightAnswers++;
    //         $("#message").html("<p>Correct!<p>");
    //     }

    //     else {
    //         stopTrivia();
    //         wrongAnswers++;
    //         $("#message").html("<p>Wrong! The correct answer is: " + display.choices[display.answer] + "<p>");

    // });

    // Trivia reset
    // $("#resetBtn").click(function() {


    // });




















        //create statements for correct and incorrect answers (ideally using if/else)/add a timer function

        //display total number of correct and incorrect answers with 

        //function to restart the game

