$(document).ready(function () {
    //identify global variables
    var triviaQuestion;
    var answer;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var count = 0;
    var questionTimer = 30;
    var questionCount = 1;
    var intervalId;
    var userPick;


    //create 10 questions for the user to answer (true/false or multiple choice)

    var triviaQuestion = [
        {
            question: "Forthy degrees fahrenheit is the same as _______ celsius.",
            choices: ["Forthy degrees celsius", "Twenty degrees celsius", "Thirty degress celsius", "Fifty degress celsius"],
            answer: 0,
            image: ""
        },

        {
            question: "How many letters are in the Hawaiian alphabet?",
            choices: ["27", "26", "13", "23"],
            answer: 2,
            image: ""
        },

        {
            question: "The term OMG was first used in?",
            choices: ["1994", "1917", "1984", "2001"],
            answer: 1,
            image: ""
        },

        {
            question: "Two full grown trees can support a family of?",
            choices: ["4", "2", "3", "5"],
            answer: 0,
            image: ""
        },

        {
            question: "A spider's silk is how many times stronger than steel?",
            choices: ["4", "2", "3", "5"],
            answer: 3,
            image: ""
        },

        {
            question: "The sun makes up ________ % of the mass in our Solar System.",
            choices: ["85", "20", "99", "90"],
            answer: 2,
            image: ""
        },

        {
            question: "Lettuce is to sunflower seeds, as a peach is to _____ ",
            choices: ["almonds", "soybeans", "onions", "cabbage"],
            answer: 0,
            image: ""
        },

        {
            question: "How many rings make up the symbol of the Olympic Games",
            choices: ["three", "five", "six", "seven"],
            answer: 1,
            image: ""
        },

        {
            question: "As the old idiom goes practice makes _______",
            choices: ["failure", "performance", "pancakes", "perfect"],
            answer: 3,
            image: ""
        },

        {
            question: "What is the most commonly eaten food in the world?",
            choices: ["wheat", "potatoes", "corn", "beans"],
            answer: 2,
            image: ""
        }

    ];


    //Timer to answer questions

    // Button to start the timer
    $("#startBtn").click(startTrivia);

    // Button to reset the game
    $("#resetBtn").click(stopTrivia);


    // Start the trivia game timer
    function startTrivia() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        questionTimer--;

        $("#timer").html("<span>" + number + "</span>");

        if (questionTimer === 0) {

            stopTrivia();

            alert("Time Up!");
        }
    }

    // Stop the tirivia game  
    function stopTrivia() {
        // ClearInterval for the question:
        clearInterval(intervalId);
    }

    startTrivia();


    function displayQuestion() {
        randomQuestion = Math.floor(Math.random() * triviaQuestion.length);

        display = triviaQuestion[i];
    }

    function changeQuestion() {
        count++;

        // Display question onto the window
        $("#question").html("<div>" + display.question + "</div>");

        // Display all answer choices for user selection
        for (let i = 0; i < display.choices.length; i++) {
            $("#answer").html ("<div>" + display.choices + "</div><br>");
        // Record user selections into an array
            userPick.attr("userValue", i);
            $("#answer").append(userPick);
        }
    }

    // Event delegation for user selecting an answer
    $("#answer").click(function() {

        // Document user array position to compare to integer value of answer
        userPick = parseInt.attr("userValue");

        // Trivia game outcomes

        if (userPick === display.answer ) {
            stopTrivia();
            rightAnswers++;
            $("#message").html("<p>Correct!<p>");
        }

        else {
            stopTrivia();
            wrongAnswers++;
            $("#message").html("<p>Wrong! The correct answer is: " + display.choices[display.answer] + "<p>");
        }
    })

    // $('.userPick').each(triviaQuestion.answer);

});



















        //create statements for correct and incorrect answers (ideally using if/else)/add a timer function

        //display total number of correct and incorrect answers with 

        //function to restart the game

   