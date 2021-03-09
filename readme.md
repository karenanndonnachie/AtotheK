# P5js (the web version of Processing
This folder will contain snippets from Processing workshops and tutorials.

## Processing START HERE:
Download Processing ( https://processing.org/download/ ) and initiate the P5js mode (from the arrow on the top right of the Processing window --> 'add mode'.<br/>
P5js reference and everything else if here: http://p5js.org <br/>
Lots of community knowledge at http://openprocessing.org<br/>
### NEED TO KNOW:
* An empty Processing sketch is made up of the `setup()` and `draw()` functions. 
* `setup()` runs once and can set all values that remain static, You must at least create a canvas in this section.
* The `draw()` function loops once every frame. 
* Other functions can be added to be called on demand for example `keyPressed()`, `mousePressed()` and your own custom functions. Nested loops can also occur inside these functions eg. `if(test){ action if true; }` `for (i=0; i<10; i++){ run 10 times; }` 
* You set the fill() and stroke() colours before you draw the item (like dipping a brush in ink)
* Colour can be (r, g, b) ie. red, green, blue values, each set from 0-255. eg 'white' => (255, 255, 255) ; black => (0, 0, 0); or, you can just set a shade of grey. eg 'mid-grey' => (120);
* Fill and Stroke can be turned on and off => `noFill();` and `noStroke();` will turn those properties off until you set them again with a colour. ie `fill(0);` or `stroke(0);`

Common functions found in setup() include:
<pre>createCanvas (w, h); // makes a canvas
background (r, g, b); // colours the canvas with whatever colour you put in as r, g, b
</pre>
### Primitive Shapes [EXAMPLE SKETCH]: 
#### An example of a simple sketch from start to end (copy and paste it into your editor -entirely overwriting the existing text- and press play -> top left of editor):
<img src="images/primitive_shapes.JPG" width="400" height="auto"/>
<pre>function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0, 0, 0);
}


function draw() {
  noStroke();
  fill (0, 0, 255);
  ellipse (width/2, height/2, 200, 200);
  fill (255, 170, 0);
  stroke(0);
  ellipse (mouseX, mouseY, 60, 60);
  fill(255, 0, 0);
  noStroke();
  rect (200, height/4, 350, 350);
  fill(255, 255, 0);
  triangle (0.6*width, height/4, 0.75*width, 0.75*height, 0.45*width, 0.75*height);
}
</pre>

### Other functions and syntax you may need:
SHAPES | MATH | INPUT | COLOR
----------------------- |-----------------------  |-----------------------  |----------------------- 
point (x, y) | int / float / long | mouseX | background(r, g, b, a)
line (x1, y1, x2, y2) | width | mouseY | fill(r,g,b,a) 
rect (x1, y1, w, h) | height | pmouseX | stroke (r,g,b,a) colour
ellipse(cx, cy, w, h) | random (min, max) | pmouseY | noStroke()
triangle(x1,y1,x2,y2,x3,x3) | translate(x,y) | keyPressed() | noFill()
quad(x1,y1,x2,y2,x3,y3,x4,y4) | scale () | mousePressed() | strokeWeight(1) -->thickness
bezier(x1,y1,anchor1x,anchor1y,x2,y2,anchor2x,anchory2y)* | rotate (radians(°)) | millis() | color c = img.get (x,y)

### How you can use one or two of these...
### Primitive Shapes Udated [EXAMPLE SKETCH]: 
<img src="images/primitive_shapes_mouseFollow.JPG" width="400" height="auto"/>
<pre>
function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0, 0, 0);
}
function draw() {
  noStroke();
  fill (0, 0, 255);
  ellipse (width/2, height/2, 200, 200);
  fill (255, 170, 0)
  ellipse (mouseX, mouseY, 60, 60);
  fill(255, 0, 0);
  rect (200, height/4, 350, 350);
  fill(255, 255, 0);
  triangle (0.6*width, height/4, 0.75*width, 0.75*height, 0.45*width, 0.75*height);
}
</pre>
* PRO-TIP! Set 'temporary' settings to your shapes/text/objects by using `push();` *before* your settings (eg. `translate();` `rotate();` `fill();` etc.) and then 'UNDO' these settings by using `pop();` after your settings
