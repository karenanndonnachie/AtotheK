/*
 * @name Letters
 * @description Letters can be drawn to the screen by loading a font, setting
 * its characteristics and then drawing the letters. This example uses a for
 * loop and unicode reference numbers to automatically fill the canvas with
 * characters in a grid. Vowels are selected and given a specific fill color.
 */
let font, counter, letter,cnv;
let fontsize ;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('data/SourceSansPro-Regular.otf');
  font = loadFont('data/AGaramondPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  counter=65;
  fontsize=height;
  letter = char(counter);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
    // Draw the letter to the screen
    text(letter, width/2, height/2-100);

}
function mousePressed() {
        // Increment the counter
      counter++;
      letter = char(counter);
    }
function keyTyped(){
  if (key == ' '){
  saveCanvas(letter, 'jpg');}
  else {letter=key;}
}
