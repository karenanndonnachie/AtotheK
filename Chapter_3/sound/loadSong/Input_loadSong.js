/* Written by k.donnachie, 5 October 2020 
 * Based on P5js example sketch
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */
let song;
let input;
function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createFileInput((handleFile));
  input.position(width/2-150,height/2);
  input.attribute('title','upload a sound file');
  input.attribute('label','upload a sound file');
  background(0);
  
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    fill(0, 255, 0);
    circle(width/2, height/2, 300);
    text('Click To Play', width/2, height/2);
  } else {
    song.play();
    fill(255, 0, 0);
    circle(width/2, height/2, 300);
    text('Click To Stop', width/2, height/2);
  }
}

function draw(){
   
}


function handleFile(file) {
  print(file);
  input.attribute('style','visibility:hidden');
  fill(0, 255, 0);
  circle(width/2, height/2, 300);
  if (file.type === 'audio') {
    song = loadSound(file.data, '');
    song.play();
  } else {
    //
  }
}
