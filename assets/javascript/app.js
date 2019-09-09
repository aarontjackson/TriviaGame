$(document).ready(function () {
    //identify global variables
    var triviaQuestion;
    var answer;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var questionTimer = 30;
    var questionCount = 1;
    var intervalID;
    var showQuestion;

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
            choice: ["4", "2", "3", "5"],
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
            choice: ["almonds", "soybeans", "onions", "cabbage"],
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


    //Timer start
    $("#startBtn").click()
        questionTimer = setInterval(30000)
        setInterval(function () {
            seconds = (1000 * 20);

        })
    }

    //Timer to answer questions

    // Button to start the timer
    $("#startBtn").click(startTrivia);

    // Button to reset the game
    $("#resetBtn").click(stopTrivia);


    //function to start the game


    //function for the game to display a question and change it

    //function for timer

    // Start the trivia game
    function startTrivia() {

        // Hold the setInterval to run the next question.
        questionTimer = setInterval(funct, 30000);
      }

    // Stop the tirivia game  
    function stopTrivia() {

        // ClearInterval for the question:
        clearInterval = (showQuestion);
      }



    function changeQuestion() {
        $("#question").html("<div>" + question.length + "<div>");

        for (let i = 0; i < question.length; i++) {
            randomQuestion = Math.floor(Math.random() * question.length);
            console.log(question.length);
            var userPick = $("<div>");
            userAnswer.attr({
                "class": 'userPick'
            question.each(choices, function (i, val) {
                    $("answer" + i).append(choices)

                })

            }

    }


    }











    //create statements for correct and incorrect answers (ideally using if/else)/add a timer function

    //display total number of correct and incorrect answers with 

    //function to restart the game

});