var t;
var myText = 'click to pause/play, press r to reset canvas, hit enter to save!';

function setup() {
  createCanvas(800, 600, SVG);
  //stroke(10, 100);
  strokeWeight(2);
  stroke('#000');
  noFill();
  t = 0;
  background(200);
  frameRate(1);
}

function draw() {

  beginShape ();
   
beginShape();
curveVertex(84, 91);
curveVertex(84, 91);
curveVertex(68, 19);
curveVertex(21, 17);
curveVertex(32, 91);
curveVertex(32, 91);
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
