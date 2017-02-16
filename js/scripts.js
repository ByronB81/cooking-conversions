// Business Logic
var convert = function(numberOfCups) {
  // console.log(cups);
	return numberOfCups * 16;
};


// Front-End Logic
$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var cupsInput = $("input#cups").val();
    var result = convert(cupsInput);
    // console.log(result);
    $(".solution").text(result);
    $("#answer").show();
  });
});
