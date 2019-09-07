$(document).ready(function() {
//identify global variables
var triviaQuestion;
var answer;
var rightAnswers = 0;
var wrongAnswers = 0;
var questionTimer;

//function for the game to display a question and change it

var gameManager = {

    setGameStart: function(question) {

    },
    changeQuestion: function (question) {
        switch (question) {
            case $("#question1"):
                triviaAnswers = new triviaAnswers(apple, pear, orange, grape);
                console.log(triviaQuestion);
                break;
        
            default:

            //if the timer runs out and an answer is selected
                break;
        }

    }
}

//function that can diplay to the user question and associated answers
function triviaAnswers(a1, a2, a3, a4) {
    this.answer = answer;
    this.a1 = a1; 
    this.a2 = a2;
    this.a3 = a3;
    this.a4 = a4;
}




//create 10 questions for the user to answer (true/false & multiple choice)/function to track timer

//create statements for correct and incorrect answers (ideally using if/else)/add a timer function

//display total number of correct and incorrect answers with restart prompt

});