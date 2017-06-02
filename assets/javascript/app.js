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
      	//Stop the function
      	stop();
      	//...the user is brought to the results page
      	// location.href="results.html"
      		//Variable that holds the selected radio buttons
       		// var selected = $("input[type=radio]:checked")
       		// $.each(selected, function(){
       		// 	console.log(this.value);
       		// })
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
  			var buttons = $("questions"+i);
  				//Looping through the individual buttons
 					for(var j = 0; j < buttons.length; j++) {
 						//Setting a variable to represent the button
    				var radio = buttons[j];
    					//if the button is checked and the assigned value is "true"...
   						if((radio).attr("value") == "true" && radio.checked) {
      					//add one to the correctAnswers
      					correctAnswers++
      				}
      					//otherwise add one to the incorrect answers
      				else{
      					incorrectAnswers++
      				}
      					//otherwise, if it's unchecked, add one to the unanswered questions
      				if(!radio.checked){
      					unansweredQuestions++
      				}
  				}
			}       
    	
      	// //Then loop through all of the buttons
       //  for(var j = 0; j < 45; j++){
       //  		//If a button is clicked...
       //      if(buttons[j].checked){
       //      		//Set Boolean to true
       //          hasClick = true;
       //          //if the button has a value of "true"...
       //          if($(buttons[j]).attr("value") == "true"){
       //              //add 1 to the Correct Answers
       //              correctAnswers++;
       //          }
       //          		//otherwise, add 1 to the Incorrect Answers 
       //          else{
       //              incorrectAnswers++;
       //          }
       //      }
       //  }
       //  //if a button hasn't been clicked...
       //  if(!hasClick){
       //  		//add 1 to the Unanswered Questions
       //      unansweredQuestions++;
       //  }

       //        console.log(correctAnswers);
       //        console.log(incorrectAnswers);
       //        console.log(unansweredQuestions);
  
               
        console.log(correctAnswers);
        console.log(incorrectAnswers);
        console.log(unansweredQuestions);













  })
})
                   