/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
also you need the patched version of p5.js
this will save an SVG file in your download folder
*/

function setup() {
  createCanvas(200, 200, SVG); // Create SVG Canvas
  strokeWeight(1); // do 0.1 for laser
  stroke(255, 0, 0); // red is good for laser
  noFill(); // better not to have a fill for laser
}

function draw() {
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      rect(x * 10, y * 10, x, y);
    }
}
}
function keyPressed(){
save("mySVG_###.svg"); // give file name
}
