// On document load and ready...
$(document).ready(function(){
	//..the timer begins to countdown from 180 seconds
	//First we set a variable to hold that number
	var number = 20;
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
      	// ////////////////////////////////////
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
  	unansweredQuestions = 0;
  		//Loop through all of the buttons
  		for(var i = 1; i <= 44; i++) {
  			//setting a variable to represent the answer buttons by calling a universal name assignment
  			var buttons = $('[name="question ' + i + '"]');
  			//Boolean to represent whether there are buttons checked
  			var hasCheck = false;
  			console.log(buttons);
  				//Looping through the individual buttons
 					for(var j = 0; j < buttons.length; j++) {
 						
 						// console.log(buttons[j]);
 						//If a button is checked..
    				if(buttons[j].checked){
    					//Set Boolean to true
    					hasCheck = true;
    					console.log('check works');
	    					//if the button is checked and the assigned value is "true"...
	   						if($(buttons[j]).attr("value") == "true") {
	      					//add one to the correctAnswers
	      					correctAnswers++;
	      				}
	      					//otherwise add one to the incorrect answers
	      				else{
	      					incorrectAnswers++;
	      				}
	   
	      				if(buttons!=hasCheck){
	      					unansweredQuestions++;
      					}
      			}
      			
  				}
			}    

		
   
  				
               
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(11 - unansweredQuestions);













  })
})
                   