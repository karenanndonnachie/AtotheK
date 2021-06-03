var coords=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<9;i++){
    coords.push(createVector(random(width),random(height)));
  }
}
function draw() {
  background(0,10);
  fill(255,0,0);
  for (let c=0;c<9;c++){
    push();
    noStroke();
    translate(coords[c].x,coords[c].y) 
    fill(255,0,0);
    circle(map (mouseX,0, width, -5, 5), map (mouseY,0, height, -5, 5),width/8);
    noStroke();
    fill(0);
    pop();
    fill(0);
    circle(map(mouseX, 0,width, coords[c].x-width/32,coords[c].x+width/32), map(mouseY, 0,height, coords[c].y-width/28,coords[c].y+width/30),width/12);
    noStroke();
    fill(255,0,0);
    circle(map(mouseX, 0,width, coords[c].x-width/23,coords[c].x+width/23), map(mouseY, 0,height, coords[c].y-width/22,coords[c].y+width/23),width/28);
  } 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  coords=[];
  for (let i=0;i<9;i++){
    coords.push(createVector(random(width),random(height)));
  }
}
