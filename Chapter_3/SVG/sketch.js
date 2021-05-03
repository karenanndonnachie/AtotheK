/* export SVG
DDF 2019
need to have p5.svg.js in project and in index.html
also you need the patched version of p5.js
this will save an SVG file in your download folder
*/

function setup() {
    createCanvas(800, 600, SVG);
    background(120);
    noLoop();
}

function draw() {
    ellipse(400, 300, 200, 200);
}
function keyPressed(){
save("mySVG_###.svg"); // give file name
}
