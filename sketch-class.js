//copywright Micah Theriot
var starship1;


function setup () {
  createCanvas(320, 240);
  background(0);
  starship1 = new Starship(10, 2, 30);
  starship2 = new Starship(20,4,70);
}

function draw(){
  background(0);
  starship1.display();
  starship1.move();

  starship2.display();
  starship2.move();
}
// constructor = fancy term for a main function in an object
function Starship(tempWingspan, tempSpeed, tempXPosition) {   //properties
//methods
  this.wingspan = tempWingspan;
  this.speed = tempSpeed
  this.xPosition = tempXPosition;
var ey = 0;

  this.display = function(){
    ellipse(this.xPosition, ey, this.wingspan)
  };

  this.move = function() {
    ey+=this.speed
  };

  this.interact = function (){
    if(mouseX = this.xPosition){

    };
  }


}      //each time Starship is called, an new "instance" is created
