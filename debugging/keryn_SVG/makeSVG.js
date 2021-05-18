var new_x_cords;
var t=0.0;
var new_y_cords;
var x_cords = [100, 300, 100, 300];
var y_cords = [100, 100, 300, 300];
function setup() {
    createCanvas(600, 600, SVG); // Create SVG Canvas
    strokeWeight(1);
	new_x_cords = shuffle (x_cords);
   new_y_cords = shuffle (y_cords); // shuffles the array to create random set
	noFill();
	stroke(0);
  test_x_cords = join(new_x_cords, '');
  test_y_cords = join(new_y_cords, '');
}

function draw() {
    //var x = frameCount / 100;
    //var y = sin(x * PI * 2);
    //line(x * width, height * 0.5,
         //x * width, y * height / 2 + height * 0.5);
	//ellipse(width/2, height/2, 100, 100);
	//beginShape ();
//    curveVertex (new_x_cords[0], new_y_cords[0]);
//    curveVertex (new_x_cords[0], new_y_cords[0]);
//
//    curveVertex (random (100,width-100), random (100,height-100));
//
//    curveVertex (new_x_cords[1], new_y_cords[1]);
//
//    curveVertex (random (100,width-100), random (100,height-100));
//
//    curveVertex (new_x_cords[2], new_y_cords[2]);
//
//    curveVertex (random (100,width-100), random (100,height-100));
//
//    curveVertex (new_x_cords[3], new_y_cords[3]);
//    curveVertex (new_x_cords[3], new_y_cords[3]);
//
//    endShape ();
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
