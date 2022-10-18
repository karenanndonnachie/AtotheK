var rot;

function setup() {
  background(0);
  angleMode(DEGREES);
createCanvas(windowWidth, windowHeight);
rot=0;
frameRate(20);
}


function draw() {
  background(0);
  fill(255,255,255);
  text("Press mouse to pause at any frame", 10, 10);
  circle(width/2, height/2, height);
  translate(width/2,height/2);
  rotate(rot);
  for (let i=0; i<360; i+=2){
      line(180-i,-height/2,180-i, height/2);
      rotate(rot+1);
      line(i,-height/2,i, height/2);
  }
   for (let i=0; i<height; i+=3){
      line(i-height,-height,i-height, -height);
  }
  //rot++;
if (rot>358){rot=0;}
else{rot++; }
}
function mousePressed() {
  noLoop();
}
function mouseReleased() {
  loop();
}
