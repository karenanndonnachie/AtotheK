var font1, rand;
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var listLength;
function preload(){
  font1 = loadFont('data/chompchomp.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(72);
  noStroke();
  textAlign(CENTER);
  listLength=letters.length;
  frameRate(5);
}

function draw() {
  rand = int(random(0, listLength-1)); //random(0,25)
  push();
  textFont(font1);
  textSize(random(12, 60));
  //background(220, 80); //add more alpha to fade it quicker
  text(letters[rand], random(width), random(height));
  pop();
  push();
  fill(255, 0, 0);
  textAlign(LEFT);
  square(25, 25, 40, 10);
  fill(0);
  textSize(24);
  text(rand, 30, 50);
  pop();
}

function mouseDragged(){
  push();
  fill(220, map(mouseX, 0, width, 0, 255),map(mouseY, 0, height, 0, 255), 120 );
  stroke(0);
  circle(mouseX, mouseY, 100);
  pop();
}
//function mousePressed(){
//  push();
//  fill(220);
//  noStroke();
//  circle(mouseX, mouseY, 100);
//  pop();
//}
function keyPressed(){
  if (key===' '){
    background(random(0,255),random(0,255),random(0,255) );
  }
}
