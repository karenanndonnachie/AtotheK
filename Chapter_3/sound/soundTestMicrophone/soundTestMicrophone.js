var mic, cnv, volume; //initiating our variable

function setup() {
  cnv=createCanvas (windowWidth, windowHeight); // create full window canvas
  cnv.mousePressed(userStartAudio);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
  fill(120);
  textSize(72);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0, 10);
  fill(120);
  volume = mic.getLevel();
  fill(255);
  push();
  translate(width/2,height/2);
  textSize(map(volume,0,1,20,1000));
  rotate(volume);
  text('DANCE!', 0, 0);
  pop();
  text(int(volume), 100,100);
}
