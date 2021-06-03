var font, song, mic, cnv, volume, i, start;
var state='scary';
var myTextList=['IN THIS WORLD...', 'YOU ARE NOT ALONE...', 'THERE MUST BE SOMEONE...', 'WATCHING FOR YOU...', 'LOOKING FOR YOU...', 'MONITORING YOUR ACTION...', 'YOU MUST BECAREFULL...', 'YOU MUST BE AWARE...', 'OR ELSE...', 'BETELGEUSE IS COMING'];
var myText = 'IN THIS WORLD...';

function preload(){
  font = loadFont('data/ClearSans-Regular.ttf');
  song = loadSound('data/Betelgeuse_Sampler_data_Lure_Of_The_Maw.mp3');
}

function setup() {
  cnv= createCanvas(windowWidth,windowHeight);
  song.setVolume(0.03);
  mic= new p5.AudioIn();
    mic.start();
    cnv.mousePressed(userStartAudio);
  i=0;
  background(0);
  fill(255);
  textSize(70);
  textFont('scary',map(volume,0,1,70,200));
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(150,0,0);
  //text(state, 100,100);
  if (state==='scary'){
    volume = mic.getLevel();
    if (volume>0.5){
    if (i<myTextList.length){
      i+=1;
    }
    else {i=0;}
    myText=myTextList[i];
    }
    push();
    translate(width/2,height/2);
    textSize(map(volume,0,1,70,200));
    textFont('scary', map(volume,0,1,70,200));
    text(myText, 0, 0);
    pop();
    push();
    fill( 128, 128, 128);
    textFont(font);
    textSize(15);
    text('press p to see pangram', width/2, height/2+290);
    pop();
  }
    
  else if (state==='pangram'){
    background (128, 0, 0);
    push();
    fill(0);
    textFont ('scary', 70);
    noStroke();
    textAlign(CENTER);
    text ('GRUMPY WIZARDS MAKE A TOXIC BREW FOR THE JOVIAL QUEEN', width/4, height/3, width/2, height/2);
    pop();
       
    push();
    fill(128, 128, 128);
    textFont (font);
    textSize (20);
    text('press b to go back', width/2, height/10);
    text("press s to see the sampler", width/2-20, height/8);
    pop();
    }
  else if (state==='sampler'){
    background (128, 0, 0);
    push ();
    textAlign (CENTER);
    fill (0);
    textFont ('scary', 70);
    noStroke();
    text('BETELGEUSE', width/2, height/4);
    text ('ABCDEFGHIJKLM', width/2, height/2-20);
    text ('NOPQRSTUVXYZ', width/2, height/2+50);
    text ('0123456789', width/2, height/2+120);
    text ('?!*&@%$(){}:;,.', width/2, height/2+190);
    pop();
    
    push();
    fill(128, 128, 128);
    textFont (font);
    textSize (15);
    fill (50);
    text('press b to go back', width/2, height/2+270);
    text('press p to see pangram', width/2, height/2+290);
    pop();
  }
  if (!start){
    push();
    fill(128, 128, 128);
    textFont (font);
    textSize (15);
    fill (50);
    text("CLICK ANYWHERE TO START AND SHOUT", width/2-20, height/12);
    pop();
  }
}
function keyPressed(){
  if (key==='s'){
    state='sampler';
  }
  else if (key==='b'){
    state='scary';
  }  
 else if (key==='p'){
    state='pangram';
  }
}
function mousePressed(){
    song.loop();
    start='true';
  }
    
function windowResized(){
resizeCanvas(windowWidth, windowHeight);
}
