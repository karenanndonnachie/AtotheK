var rad, pic, helv;
var rot=0;
function preload(){helv=loadFont('data/helv3.otf');
helv2=loadFont('data/helv2.otf');
helv3=loadFont('data/helv.otf');}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  stroke(255);
  angleMode(DEGREES);
  pic=loadImage("data/alatemplate.jpg");
  textAlign(CENTER);

}


function draw() {
  noFill();
  strokeWeight(4);
  background(0);
  if (height>=width){
    circle(width/2,height/2,0.98*width);
    rad=width/2;
  }
  else {
    circle(width/2,height/2,0.98*height);
    rad=height/2;
}

  textFont( helv, int(.8*rad));
  if (mouseX>0){
    rot=map(mouseX,0,width,-90,90);}
  push();
    translate(width/2, height/2-rad/8);
    push();
      noStroke();
      translate(-rad/2, -rad/4);
      rotate(rot);
      fill(255);
      text('A',0,rad/4);
    pop();
      push();
      translate(rad/2, -rad/4);
      rotate(rot);
      noStroke();
      fill(255);
      text('A',0,rad/4);
    pop();
    
  pop();
  push();
    noStroke();
    fill(255);
    translate(width/2,height/2-rad/8);
    textFont( helv, int(.8*rad));
    text('L',rad/10,2*rad/5);
    textFont(helv2, int(rad/6));
    strokeWeight(2);
    stroke(255);
    text('I    M    A    G    E   S',0, rad/2+rad/6);
    pop();
}
