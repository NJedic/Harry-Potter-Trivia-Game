// On document load and ready...
$(document).ready(function(){
	//..the timer begins to countdown from 180 seconds
	//First we set a variable to hold that number
	var number = 5;
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
      	//...the user is brought to the results page
      	location.href="results.html"
      		//Variable that holds the selected radio buttons
       		var selected = $("input[type=radio]:checked")
       		$.each(selected, function(){
       			console.log(this.value);
       		})
      }
    }
  //Execute the run funtion
  run();

  //On clicking the #submit button, the user is brought to the results page
  $("#submit").on("click", function(){
   		location.href="results.html"
   })
})