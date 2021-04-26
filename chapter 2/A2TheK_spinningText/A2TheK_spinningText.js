
function preload() {
  inconsolata = loadFont('data/inconsolata.otf');
  DIN = loadFont('data/DIN.otf');
  coldera=loadFont('data/chompchomp.otf');
}
var spin=0;
var letterSize=24;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(240);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
  fill(0); //text ink color!
  
  push();
  translate(width/2,height/2);
  rotate(spin);
  textSize(letterSize);
  textFont(coldera);
  text ('CHOMP\nCHOMP', 0,-letterSize*0.3);
  //spin-=5;
  spin+=map(mouseX,0,width,-10,10); //this will make the mouseX affect the spin direction and speed
  letterSize=map(mouseY,0,height,8,72);
  circle(0,0,letterSize/2);
  noFill();
  stroke(0);
  circle(0,0,letterSize*10);
  pop();
  
  background(220,51);
}
