//create 10 questions for the user to answer (true/false or multiple choice)
var triviaQuestions = [
    {
        question: "Forty degrees fahrenheit is the same as _______ celsius.",
        choices: ["Forty Degrees Celsius", "Twenty Degrees Celsius", "Thirty Degress Celsius", "Fifty Degress Celsius"],
        answer: "Forty Degrees Celsius",
        rightImage: "./assets/images/thermoRight.gif",
        wrongImage: "./assets/images/thermoWrong.gif"
    },

    {
        question: "How many letters are in the Hawaiian alphabet?",
        choices: ["27", "26", "13", "23"],
        answer: "13",
        rightImage:  "./assets/images/alphabetRight.gif",
        wrongImage: "./assets/images/alphabetWrong.gif"
    },

    {
        question: "The term OMG was first used in?",
        choices: ["1994", "1917", "1984", "2001"],
        answer: "1917",
        rightImage:  "./assets/images/omgRight.gif",
        wrongImage: "./assets/images/omgWrong.gif"
    },

    {
        question: "Two full grown trees can support a family of?",
        choices: ["4", "2", "3", "5"],
        answer: "4",
        rightImage:  "./assets/images/treesRight.gif",
        wrongImage: "./assets/images/treesWrong.gif"
    },

    {
        question: "A spider's silk is how many times stronger than steel?",
        choices: ["4", "2", "3", "5"],
        answer: "5",
        rightImage:  "./assets/images/spiderRight.gif",
        wrongImage: "./assets/images/spiderWrong.gif"
    },

    {
        question: "The sun makes up _______ % of the mass in our Solar System.",
        choices: ["85", "20", "99", "90"],
        answer: "99",
        rightImage:  "./assets/images/sunRight.gif",
        wrongImage: "./assets/images/sunWrong.gif"
    },

    {
        question: "Lettuce is to sunflower seeds, as an almond is to _____ ",
        choices: ["Peaches", "Soybeans", "Onions", "Cabbage"],
        answer: "Peaches",
        rightImage:  "./assets/images/almondRight.gif",
        wrongImage: "./assets/images/almondWrong.gif"
    },

    {
        question: "How many rings make up the symbol of the Olympic Games",
        choices: ["Three", "Five", "Six", "Seven"],
        answer: "Five",
        rightImage:  "./assets/images/olympicsRight.gif",
        wrongImage: "./assets/images/olympicsWrong.gif"
    },

    {
        question: "As the old idiom goes practice makes _______",
        choices: ["Failure", "Performance", "Pancakes", "Perfect"],
        answer: "Perfect",
        rightImage:  "./assets/images/practiceRight.gif",
        wrongImage: "./assets/images/practiceWrong.gif"
    },

    {
        question: "What is the most commonly eaten food in the world?",
        choices: ["Wheat", "Potatoes", "Corn", "Beans"],
        answer: "Corn",
        rightImage:  "./assets/images/cornRight.gif",
        wrongImage: "./assets/images/cornWrong.gif"
    }
];

//Images for right and wrong user selections
// var rightImages = [
//     "./assets/images/thermoRight.gif",
//     "./assets/images/alphabetRight.gif",
//     "./assets/images/omgRight.gif",
//     "./assets/images/treesRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif"
// ];

// var wrongImages = [
//     "./assets/images/thermoWrong.gif",
//     "./assets/images/alphabetWrong.gif",
//     "./assets/images/omgWrong.gif",
//     "./assets/images/treesWrong.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif",
//     "./assets/images/thermoRight.gif"
// ];

//identify global variables
var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;

//Continue through the trivia question array until all questions are displayed
function nextQuestion() {
    var questionComplete = (triviaQuestions.length - 1) === currentQuestion;

    if (questionComplete) {
        console.log("Game is done!");
        displayResults();
    }
    else {
        console.log("Continue on!");
        currentQuestion++;
        loadQuestion();
    }

}

// 30 second timer functionality 

// Change the question if the timer reaches zero
function timeUp() {
    clearInterval(timer);

    lost++;

    loadImages("lost");

    setTimeout(nextQuestion, 3 * 1000);
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

    var question = triviaQuestions[currentQuestion].question;
    var choices = triviaQuestions[currentQuestion].choices;

    $("#time").html("Time Remaining: " + counter);
    $("#game").html(`
    <h4>${question}</h4>
    ${loadChoices(choices)}
    `);
}

// Function to show all answer choices to the user
function loadChoices(choices) {
    var result = "";
    // Iterate through the array to show all possible choices
    for (let i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;

    }

    return result;
}

// Event delegation for user selecting right/wrong answer
$(document).on("click", ".choice", function () {
    clearInterval(timer);

    var selectedAnswer = $(this).attr("data-answer");

    var answer = triviaQuestions[currentQuestion].answer;

    console.log("click is up", selectedAnswer);

    if (answer === selectedAnswer) {

        score++;
        loadImages("win");
        setTimeout(nextQuestion, 3 * 1000);
    }
    else {

        lost++;
        loadImages("lost");
        setTimeout(nextQuestion, 3 * 1000);
    }
});

function displayResults() {

    var result = `
            <p>You answered ${score} question(s) right!</p>
            <p>You missed ${lost} question(s)!</p>
            <p>A total of ${triviaQuestions.length} question(s) right!</p>
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

// Display images for right or wrong questions
function loadImages(record) {
    var answer = triviaQuestions[currentQuestion].answer;
    var rightImage = triviaQuestions[currentQuestion].rightImage;
    var wrongImage = triviaQuestions[currentQuestion].wrongImage;

    if (record === "win") {
        $("#game").html(`
            <p class="preload-image">Correct! You know your random facts!</p>
            <p class="preload-image">The correct answer is <strong>${answer}</strong></p>
            <img src="${rightImage}"/>
        `);
    }
    else {
        $("#game").html(`
            <p class="preload-image">Wrong! The correct answer is <strong>${answer}</strong></p>
            <p class="preload-image"> So close... but wrong</p>
            <img src="${wrongImage}"/>
        `);
    }

}

$("#start").click(function() {
    $("#start").hide();
    $("#time").html(counter);
    loadQuestion();
});


