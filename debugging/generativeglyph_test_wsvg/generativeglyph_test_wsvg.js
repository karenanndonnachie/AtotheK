var t;
var myText = 'click to pause/play, press r to reset canvas, hit enter to save!';

function setup() {
  createCanvas(800, 600, SVG);
  //stroke(10, 100);
  strokeWeight(2);
  stroke('#000');
  noFill();
  t = 0;
  background(255,0,0);
  frameRate(1);
}

function draw() {

  beginShape ();
    curveVertex (random(100), random(100));
    curveVertex (200, 200);
  endShape();
  save();
  clear();
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
