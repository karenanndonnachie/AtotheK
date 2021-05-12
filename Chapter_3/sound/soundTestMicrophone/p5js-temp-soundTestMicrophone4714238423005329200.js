var mic, song, cnv; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('data/beat.mp3'); 
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  cnv=createCanvas (windowWidth, windowHeight); // create full window canvas
  cnv.mousePressed(userStartAudio);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
  //analyzer = new p5.Amplitude();
  //analyzer.setInput(mic);
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0, 10);
  fill(120);
  var volume = mic.getLevel();
  //ellipse(width/2,height/2,volume,volume);
  fill(255);
  push();
  translate(width/2,height/2);
  textSize(map(volume,0,1,20,1000));
  rotate(volume);
  text('DANCE!', 0, 0);
  pop();
  text(int(volume), 100,100);
}

//function mousePressed() {
//  if (song.isPlaying()) {
//    background(255);
//    song.stop(); // if the song is playing, stop it
//    song.noLoop();
//  }
//  else {
//    background(0);
//    song.loop();
//    song.play(); 
//  }
//}
