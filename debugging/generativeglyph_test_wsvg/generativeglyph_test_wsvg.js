var t;
var myText = 'click to pause/play, press r to reset canvas, hit enter to save!';

function setup() {
  createCanvas(800, 800, SVG);
  //stroke(10, 100);
  strokeWeight(2);
  stroke('#ED225D');
  noFill();
  t = 0;
  background(255);
  frameRate(20);
}

function draw() {
push();
  fill(0);
  noStroke();
  textAlign(CENTER);
  text(myText, windowWidth/2, 0.9*windowHeight);
pop();
//curves generating
  var x1 = width  * noise(t + 10);
  var x2 = mouseX * noise(t + 20);
  var x3 = width * noise(t + 30);
  var x4 = mouseX * noise(t + 40);
  var y1 = mouseY * noise(t + 50);
  var y2 = height * noise(t + 60);
  var y3 = mouseY * noise(t + 70);
  var y4 = height * noise(t + 80);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.009;
  var x = frameCount / 100;
  var y = sin(x * PI * 2);
  line(x * width, height * 0.5,
         x * width, y * height / 2 + height * 0.5);
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
