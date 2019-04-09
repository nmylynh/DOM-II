// Your code goes here


var buttons = document.querySelectorAll(".btn");

buttons.forEach(function(){
	addEventListener("mouseover", function(event) {   
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
});