// Your code goes here


var buttons = document.querySelectorAll(".btn");

buttons.addEventListener("mouseover", function(){
color=red;
});


var splashImage = document.querySelector(".splashIntro");
var clickState = 0;

splashImage.addEventListener("click", function(){

  if (clickState == 0) {
    // code snippet 1
    this.src = 'img/bus2.jpg';
    clickState = 1;
  } else {
    // code snippet 2
    this.src = 'img/fun-bus.jpg';
    clickState = 0;
  }

});