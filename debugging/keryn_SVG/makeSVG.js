/* 
 * Perlin Noise Curve SVG Generator
 * with p5js https://p5js.org
 * & Gene Kogan's Perlin noise code https://genekogan.com/code/p5js-perlin-noise/
 * & p5.svg.js by Zeno Zeng https://github.com/zenozeng/p5.js-svg | http://zenozeng.github.io/p5.js-svg/examples/
 * stitched together by k.donnachie for A to the K studio, 2021
*/
var t=0.0;

function setup() {
  createCanvas(600, 600, SVG); // Create SVG Canvas
  strokeWeight(1);
  stroke(0);
  noFill();
}

function draw() {
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
    if (frameCount>200){
        noLoop();
        save();
	}	
}
