var t;
var myText = 'click to pause/play, press r to reset canvas, hit enter to save!';

function setup() {
  createCanvas(800, 600, SVG);
  //stroke(10, 100);
  strokeWeight(2);
  stroke('#ED225D');
  noFill();
  t = 0;
  background(120);
  frameRate(10);
}

function draw() {

  var x = frameCount / 100;
  var y = sin(x * PI * 2);
  line(x * width, height * 0.5, x * width, y * height / 2 + height * 0.5);
  ellipse(width/2, height/2, 100, 100);
  }
  

function mouseClicked() {
if (isLooping()) {
  noLoop();
} else {
loop(); }
}

function keyPressed() {
  if (keyCode === 82) {
  clear();
  }
  if (keyCode === ENTER) {
    save();
  } 
}
