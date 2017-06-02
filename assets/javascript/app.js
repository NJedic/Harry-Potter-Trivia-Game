// On document load and ready...
$(document).ready(function(){
	//..the timer begins to countdown from 180 seconds
	//First we set a variable to hold that number
	var number = 120;
	//Variable that holds interval ID
	var intervalID;
	//The run function sets an interval that runs the decrement function once a second
	function run() {
      intervalId = setInterval(decrement, 1000);
    }
    //The decrement function
    function decrement() {
      //  Decrease number by one.
      number--;
      //  Show the number in the #timer span.
      $("#timer").html(number);
      //  Once number hits zero...
      if (number === 0) {
      	//Set the correct answers count to zero
  			correctAnswers = 0;
  			//Set the incorrect answers count to zero
  			incorrectAnswers = 0;
  			//Set the number of unanswered questions count to zero
  			unansweredQuestions = 11;
  			//Loop through all of the buttons
  			for(var i = 1; i <= 44; i++) {
  				//setting a variable to represent the answer buttons by calling a universal name assignment
  				var buttons = $('[name="question ' + i + '"]');
  				//Boolean to represent whether there are buttons checked
  				var hasCheck = false;
  						// console.log(buttons);
  					//Looping through the individual buttons
 						for(var j = 0; j < buttons.length; j++) {
 								// console.log(buttons[j]);
 							//If a button is checked..
    					if(buttons[j].checked){
    						//Set Boolean to true
    						hasCheck = true;
    							// console.log('check works');
	    				//if the button is checked and the assigned value is "true"...
	   					if($(buttons[j]).attr("value") == "true") {
	      					//add one to the correctAnswers
	      					correctAnswers++;
	      				}
	      					//otherwise add one to the incorrect answers
	      				else{
	      					incorrectAnswers++;
	      				}
	   							//if a button is checked, minus one from the unanswered questions
	      				if(buttons=hasCheck){
	      					unansweredQuestions--;
      					}
      			}
      			
  				}
			}  

  	//Return to the to top of the window
    window.scrollTo(0, 0);

    //Render results to the DOM
    $("#mainGame").html("<h4>The Results of Your Examination Are:</h4>");
    $("#mainGame").append("<h5>Correct Answers: " + correctAnswers + "</h5>");
    $("#mainGame").append("<h5>Incorrect Answers: " + incorrectAnswers + "</h5>");
    $("#mainGame").append("<h5>Questions Unanswered: " + unansweredQuestions + "</h5>");
      }
    }
  //Execute the run funtion
  run();

  //On clicking the #submit button, the user is brought their results
  $("#submit").on("click", function(){
  	//Set the correct answers count to zero
  	correctAnswers = 0;
  	//Set the incorrect answers count to zero
  	incorrectAnswers = 0;
  	//Set the number of unanswered questions count to zero
  	unansweredQuestions = 11;
  		//Loop through all of the buttons
  		for(var i = 1; i <= 44; i++) {
  			//setting a variable to represent the answer buttons by calling a universal name assignment
  			var buttons = $('[name="question ' + i + '"]');
  			//Boolean to represent whether there are buttons checked
  			var hasCheck = false;
  			// console.log(buttons);
  				//Looping through the individual buttons
 					for(var j = 0; j < buttons.length; j++) {
 						
 						// console.log(buttons[j]);
 						//If a button is checked..
    				if(buttons[j].checked){
    					//Set Boolean to true
    					hasCheck = true;
    					// console.log('check works');
	    					//if the button is checked and the assigned value is "true"...
	   						if($(buttons[j]).attr("value") == "true") {
	      					//add one to the correctAnswers
	      					correctAnswers++;
	      				}
	      					//otherwise add one to the incorrect answers
	      				else{
	      					incorrectAnswers++;
	      				}
	   							//if a button is checked, minus one from the unanswered questions
	      				if(buttons=hasCheck){
	      					unansweredQuestions--;
      					}
      			}
      			
  				}
			}  

		//Return to the top of the window
    window.scrollTo(0, 0);

    //Render results to the DOM
    $("#mainGame").html("<h4>The Results of Your Examination Are:</h4>");
    $("#mainGame").append("<h5>Correct Answers: " + correctAnswers + "</h5>");
    $("#mainGame").append("<h5>Incorrect Answers: " + incorrectAnswers + "</h5>");
    $("#mainGame").append("<h5>Questions Unanswered: " + unansweredQuestions + "</h5>");

  })


})
                   