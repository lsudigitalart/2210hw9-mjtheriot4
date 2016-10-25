var x = 200; // start x position
var y = 200; // start y position
var speed = 5;
var easing = .04;
var orb1;
var orb2;
function setup() {
  createCanvas(1200,700);

  orb1 = new Orb(100, 350, 20);
  orb2 = new Orb(1150, 650, 30);
  orb3 = new Orb(870, 50, 40);
  orb4 = new Orb(900, 260, 30);
  orb5 = new Orb(820, 20, 30);
  orb6 = new Orb(700, 350, 40);
  orb7 = new Orb(230, 550, 50);
  orb8 = new Orb(210, 350, 30);
  orb9 = new Orb(300, 520, 50);
  orb10 = new Orb(400, 100, 30);
  orb11 = new Orb(620, 100, 50);
  orb12 = new Orb(500, 260, 40);
  orb13 = new Orb(600, 150, 30);
  orb14 = new Orb(400, 300, 50);
  orb15 = new Orb(600, 250, 20);
  orb16 = new Orb(700, 380, 40);
  orb17 = new Orb(400, 350, 30);
  orb18 = new Orb(1000, 470, 40);
  orb19 = new Orb(800, 450, 50);

}

// function draw() {
//   background(0);
//   if (x > mouseX) {
//     x-=speed;
//   }
//   else if  x+=speed;
//   if (y > mouseY) {
//     y-=speed;
//   }
//   else y+=speed;
//     // x = startX + ((stopX-startX) * pct);
//     // y = startY + ((stopY-startX) * pct);
//
//   ellipse( x, y, 20, 20);
// }
var triggered = false;
function draw() {
  background(0);
//player
  noCursor();
  fill(100,255,100);
  ellipse(mouseX,mouseY,20);
//trigger
  fill(100,100,255);
  ellipse(width/2,height/2, 20);
  fill(255);
  if (dist(mouseX,mouseY,width/2,height/2) <= 10){
    triggered = true;
  }
  if (triggered == false){
    orb1.display();
    orb2.display();
    orb3.display();
    orb4.display();
    orb5.display();
    orb6.display();
    orb7.display();
    orb8.display();
    orb9.display();
    orb10.display();
    orb11.display();
    orb12.display();
    orb13.display();
    orb14.display();
    orb15.display();
    orb16.display();
    orb17.display();
    orb18.display();
    orb19.display();
  }
  if(triggered == true){
    orb1.chase();
    orb2.chase();
    orb3.chase();
    orb4.chase();
    orb5.chase();
    orb6.chase();
    orb7.chase();
    orb8.chase();
    orb9.chase();
    orb10.chase();
    orb11.chase();
    orb12.chase();
    orb13.chase();
    orb14.chase();
    orb15.chase();
    orb16.chase();
    orb17.chase();
    orb18.chase();
    orb19.chase();
  }
}

function Orb(initX,initY,initSize){  //constructor
  this.x = initX;                 //property
  this.y = initY;                 //property
  this.size = initSize;           //property
  this.won = false;

  this.display = function() {        //method 1
    ellipse( this.x, this.y, this.size);
  }
  this.chase = function(){           //method 2
    if (dist(this.x, this.y,mouseX,mouseY) <= 20){
      this.won = true;
    }
    this.x+= (mouseX - this.x) * easing;
    this.y+=(mouseY - this.y) * easing;
    if (this.won == false) {
      fill(255,100,100);
    }
    else {
      fill(255,255,0);
    }
    ellipse( this.x, this.y, this.size);

  }
}
