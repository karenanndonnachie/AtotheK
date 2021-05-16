/* Interactive simple Font displayer with sound by karen ann donnachie
 * REQUIRES SOUND LIBRARY *
 * Mouse click and keyType can display one letter at a time.
 * Tone (sound) is played by setting midi note to unicode char number
 * Space bar will save current glyph as jpg
 * Set firstLetter as an integer of first usable glyph in font
 * Set lastLetter as last usable glyph in font
 * If you have 'empty' glyphs, you may need to set math to skip or make a list of 'allowed' keys
 */
let font, counter, letter,cnv, polysynth, osc, env;
let firstLetter=65; //the first coded glyph (as unicode number)
let lastLetter=135; //the last coded glyph (as unicode number)
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
  counter=firstLetter;
  fontsize=height*0.75;
  letter = char(counter);
  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  osc = new p5.TriOsc();
  env = new p5.Envelope();
}

function draw() {
  background(0);
    // Draw the letter to the screen
    text(letter, width/2, height/2);
}
function mousePressed() {
  userStartAudio();
  osc.start();
  // Increment the counter & display next if not yet exhausted all glyphs
  if (counter<lastLetter){
  counter++;}
  else {counter=firstLetter;} //if end of glyphs, start from first
  freq = midiToFreq(counter-30); //the math here just adjusts the scale (lowers frequency of sound)
  osc.freq(freq);
  env.ramp(osc, 0, 1.0, 0);
  letter=char(counter);
    }
function keyTyped(){
  if (key == ' '){
  saveCanvas(letter, 'jpg');} // pressing space bar will save current glyph as a jpg
  userStartAudio();
  letter = unchar(key);
  osc.start();
  freq = midiToFreq(letter-30); //the math here adjusts the scale -30 (lowers frequency of sound)
  osc.freq(freq);
  env.ramp(osc, 0, 1.0, 0);
  if (key == ' '){
  saveCanvas(letter, 'jpg');
  }
  letter=key;
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  fontsize=height*0.75;;
  // Set text characteristics
  textSize(fontsize);
}
