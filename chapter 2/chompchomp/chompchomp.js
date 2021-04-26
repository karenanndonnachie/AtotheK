var font1;
const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var rand, listLength;
function preload() {
  font1 = loadFont('data/chompchomp.otf');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  textFont(font1);
  textSize(width/15);
  textAlign(CENTER);
  noStroke();
  listLength=letters.length;
  frameRate(15);
}
function draw() {
  background(200,1);
  rand = int(random(0, listLength-1));
  textSize(random(12,80));
  text(letters[rand], random(width), random(height));
  //text('CHOMPCHOMP', width/2, height/2);
}
function mousePressed(){
  push();
  fill (200);
  ellipse(mouseX, mouseY, 150,150);
  pop();
}
