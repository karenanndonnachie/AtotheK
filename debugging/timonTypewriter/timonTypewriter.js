
var letter,size,rand,speed,xposition, yposition, chatter;
var fontSize=120;
var wigglyLetters = [];
function preload(){
   chatter=loadFont('data/Chatter-Regular.ttf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(fontSize);
  textFont(chatter);
  xposition = fontSize;
  yposition = 2*fontSize;
  
}
function draw() {
  fill(255);
  background(0);
  //each of the wiggly letters that we have
  for (var i=0; i<wigglyLetters.length ; i++){
    wigglyLetters[i].wiggle();
    wigglyLetters[i].display();
  }

}
function mousePressed(){
   rand = int(random(65,90));
   letter = char(rand);
   size= int(random(40,200));
   speed=int(100-size)/4;
   wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
function keyTyped(){
    if (xposition+fontSize>width-100){
      xposition=fontSize;
      yposition+=fontSize;
    }
  wigglyLetters.push(new Wiggle (xposition, yposition, fontSize, key, 1));
  xposition+=fontSize*1.5;
}
function keyPressed(){
  if (keyCode === LEFT_ARROW){
   wigglyLetters=[];
   xposition = fontSize;
   yposition = fontSize*2;
  }
  else if (keyCode === RIGHT_ARROW) {
   yposition +=fontSize;
   xposition = fontSize;
  }
}
class Wiggle {
 constructor(x, y, size, letter, speed){
   this.x= x;
   this.y= y;
   this.textSize=size;
   this.letter=letter;
   this.speed=speed;
 }
 wiggle() {  //randomwalker
   // x+=4  add 4 to the variable
   this.x += random(-this.speed, this.speed);
   this.y += random (-this.speed, this.speed);
   if (this.x <0){
     this.x += this.speed;
   }
 }
 display() {
   textSize(this.textSize);
   text(this.letter, this.x, this.y);
 }
}
