var coords=[];
var randomScale=[];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<9;i++){
    coords.push(createVector(random(width),random(height)));
    randomScale.push(random(0.4, 1.0));
  }
}
function draw() {
  background(0,10);
  fill(255,0,0);
  for (let c=0;c<9;c++){
    push();
    noStroke();
    translate(coords[c].x,coords[c].y);
    scale(randomScale[c], randomScale[c]);
    fill(255,0,0);
    circle(map (mouseX,0, width, -5, 5), map (mouseY,0, height, -5, 5),width/7);
    noStroke();
    fill(0);
    circle(map(mouseX, 0,width, 0-width/36,0+width/36), map(mouseY, 0,height, 0-width/36,0+width/36),width/12);
    noStroke();
    fill(255,0,0);
    circle(map(mouseX, 0,width, 0-width/23,0+width/23), map(mouseY, 0,height, 0-width/22, 0+width/23),width/28);
    pop();
  } 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  coords=[];
  for (let i=0;i<9;i++){
    coords.push(createVector(random(width),random(height)));
    randomScale=push(random(0.2, 1.0));
  }
}
