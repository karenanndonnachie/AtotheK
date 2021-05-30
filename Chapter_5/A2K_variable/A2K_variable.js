 /* 
  * A to the K (to the Z): Computational Typography
  * Studio by K. Donnachie & A. Simionato, 2021
  * Sketch developed by Karen ann Donnachie to display 
  * & manipulate variable types in P5js Canvas 
  * To use: Customize CSS in index file 
  * [@fontface | font-variation-settings etc.]
  * then set updateVariableFont(whatToMap, lowest, highest)
  * Sampled variable font by Sylvain Girard, 2021
  */

//set starting variable type width (x-axis)
var pvar=100;
//set starting variable type size
var typeSize = 200;
var cnv, mapper; 
function setup() {
  cnv=createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,BOTTOM);
  textFont('vartext', typeSize);
}

function draw() {
  background(60);
  fill(220);
  //update the variable font with mapping
  //use updateVariableFont(whatToMap, lowest, highest);
  updateVariableFont(frameCount, 0, 2000);
  text('Hello', width/2, height/2);
}

function mousePressed(){
  //saveCanvas('samplerShot_###', 'jpg');
}
