 /* 
  * A to the K to the Z 2021 Studio 
  * Sketch developed by Karen ann Donnachie to display & manipulate variable types in P5js Canvas 
  * 
  */
var pfat=100;
function setup() {
  cnv=createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,BOTTOM);
  textFont('vartext', pfat);
}

function draw() {
  background(60);
  fill(220);
  pfat=map(mouseX, 0, width, 100, 900);
  checkLength();
  //textFont('vartext', 100);
  text('Hello', width/2, height/2);
}
function checkLength(){
  fill(220);
  let fs="'wght' "+ pfat;
  cnv.style('font-variation-settings', fs);
  console.log(fs);
  //fontWeight(pfat);
  textFont('vartext', 100);
  text('Hello', width/2, height/2);
}
