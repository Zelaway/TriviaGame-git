//GLobal Variables
//-------------------------------------------------------------------
var randomQuestion = "";

var sCourtQuestions = ["How many Supreme Court Justices are there?",
 "Who in this Picture Does not belong?","Which Statue is this?"];


var wHouseQuestions = ["What is the address of White House?",
	"Has the White House ever been rebuilt from scratch?",
	"Is President Obama the 42nd President of the United States?"];

var cQuestions = ["How many House Members are there?",
	"How many senators are there?", "How many women were elected Speaker of the House?"];

var monQuestions = ["True or False: This is the Washington Monument?", 
	"True or False: This is the Lincoln Memorial?", "True or False: This is the Jefferson Memorial?"];

var correctAnswers = {
	answer1:"9", answer2:"Justice Obama",answer3:"",answer4:"1600 Penn Ave",
	answer5:"Yes",answer6: "Yes",answer7:"438",answer8:"100",
	answer9:"1",answer10:"false",answer11:"true",answer12:"true",
}

console.log(correctAnswers);
console.log(monQuestions.question11);


//Functions
//-------------------------------------------------------------------
function startTimer(duration, display) { // function to add timer
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var thirtySeconds = 60 / 2;
        display = $("#count").html(thirtySeconds);
    startTimer(thirtySeconds, display);
});

jQuery();


function choiceClick(){ // funciton to ask random quesitons
	$("#wh").click(function(){
		console.log("This works!");
		jQuery();
		var randomQuestion = wHouseQuestions[Math.floor(Math.random() * wHouseQuestions.length)];
		$("#question").html("<h3>" + randomQuestion + "</h3>");
		console.log(randomQuestion);
		// var result;
  //   	var count = 0;
	 //    for (var prop in obj)
	 //        if (Math.random() < 1/++count)
	 //           result = prop;
	 //    	return result;
	 //    	console.log(result);

			// randomQuestion = gems.red+totalScore;
			// $("#currentScore").html(totalScore);
			// console.log(totalScore);
			// winsLosses();

		});
	$("#sc").click(function(){
		console.log("This works!");
		var randomQuestion = sCourtQuestions[Math.floor(Math.random() * sCourtQuestions.length)];
		$("#question").html("<h3>" + randomQuestion + "</h3>");
		});
	$("#cm").click(function(){
		console.log("This works!");
		var randomQuestion = cQuestions[Math.floor(Math.random() * cQuestions.length)];
		$("#question").html("<h3>" + randomQuestion + "</h3>");
		});
	$("#mm").click(function(){
		console.log("This works!");
		var randomQuestion = monQuestions[Math.floor(Math.random() * monQuestions.length)];
	$("#question").html("<h3>" + randomQuestion + "</h3>");
		});
		
}
function radioButton(){
	var radioInput = document.createElement('input');
	radioInput.setAttribute('type', 'radio');
	radioInput.setAttribute('name', name);
}
choiceClick();


//Game
//-------------------------------------------------------------------