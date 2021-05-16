/* 
p5js Pangram and font glyph layout with paragraph split and line-by-line 
text-to-points function and parametric margins/space settings.
by k.donnachie, for AtoTheK, 2020
*/
var font, fillColor;
var viewPoints=false;
var viewOutline=false;
var viewAlphabet=false;
var points1=[];
var firstLetter=48;
var lastLetter=127;
var margin, topmargin;
var pangrams=['Sphinx of black quartz, judge my vow.', 'Pack my box with five dozen liquor jugs.', 'Glib jocks quiz nymph to vex dwarf.', 'Jackdaws love my big sphinx of quartz.', 'The five boxing wizards jump quickly.', 'How vexingly quick daft zebras jump!', 'Quick zephyrs blow, vexing daft Jim.', 'Two driven jocks help fax my big quiz.', 'The jay, pig, fox, zebra and my wolves quack!', 'Sympathizing would fix Quaker objectives.', 'A wizard\'s job is to vex chumps quickly in fog.', 'Watch \"Jeopardy!\", Alex Trebek\'s fun TV quiz game.', 'By Jove, my quick study of lexicography won a prize!', 'Waxy and quivering, jocks fumble the pizza.'];
var para = 'the quick brown fox jumps over a lazy dog'; //possibility to randomise pangram?
var words = para.split(' ');
var wx, wy;
var typesize;
var spacesize; //width of space between letters
var linesize; //height between lines
function preload() {
  font = loadFont('data/HelveticaNowDisplay.otf');   // this file must exist
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont(font);
  typesize=height/7;
  linesize=typesize;
  spacesize=typesize/4;
  textSize(typesize);
  margin=width/8;
  topmargin = height/8;
  fillColor=0;
  //strokeWeight(2); //point size (usually 1 or 2)
  //stroke(0); //point colour
  //noLoop();
  
}
function draw(){
  background(255);
  fill (fillColor); 
  wx = margin;
  wy = topmargin;
  //Writing the Pangram
  if (viewAlphabet==false){
    typesize=height/5;
    textSize(typesize);
    linesize=typesize;
    spacesize=typesize/4;
    for (let w=0; w<words.length;w++){
      if (wx+textWidth(words[w])<=width-(2*margin)){ //if the word fits, set the word
        points1 = font.textToPoints(words[w], wx, wy+50, typesize, 0.9);
        //insert timing delay here if you like…
        if (frameCount>10*w){ //timing delay using frameCount
          if (viewOutline!==true){
            noStroke();}
          else {
            stroke(0);} //takes off outline of letters
          text(words[w], wx, wy+50); //toggle off after debug...
          if (viewPoints==true){
            for (let i=0; i <points1.length; i++){  
              push();
              stroke(255,0,0);
              strokeWeight(2);
              point(points1[i].x, points1[i].y); //toggle on and off as needed
              pop();
              }
           }
        }
          wx+=textWidth(words[w])+spacesize;
        }
        else { //if it doesn't fit, return to the next line
          wx=margin;
          wy+=linesize;
          w--;
        }
    }
  }
  //Writing the Glyphs / Alphabet
  else {
    typesize=height/7;
    textSize(typesize);
    linesize=typesize;
    spacesize=typesize/4;
    for (var l=firstLetter; l<lastLetter; l++){  
      //see https://p5js.org/reference/#/p5/char
      if (wx+textWidth(char(l))<=width-margin){
        points1 = font.textToPoints(char(l), wx, wy+50, typesize, 0.9);
        if (frameCount>5*(l-firstLetter)){ //timing delay using frameCount
          if (viewOutline!==true){
            noStroke();}
          else {stroke(0);} //takes off outline of letters
          text(char(l), wx, wy+50); //toggle off after debug...
          if (viewPoints==true){
            for (let i=0; i <points1.length; i++){    
              stroke(255,0,0);
              point(points1[i].x, points1[i].y); //toggle on and off as needed
            }
            }
          }
          wx+=textWidth(char(l))+spacesize;
        }
        else { //if it doesn't fit, return to the next line
          wx=margin;
          wy+=linesize;
          l--;
        }
    } 
  }
}
function keyPressed(){
  if (keyCode === UP_ARROW){
   //toggles points
   viewPoints=!viewPoints;
  }
  else if (keyCode === DOWN_ARROW){
   //toggles fill [for white <-> black, will be trickier for RGB
   fillColor=255-fillColor;
  }
  else if (keyCode === LEFT_ARROW){
   //toggles stroke
   viewOutline=!viewOutline;
  }
  else if (keyCode === RIGHT_ARROW){
    //toggles Pangram <-> Alphabet
    frameCount=0;
    viewAlphabet=!viewAlphabet;
    para=random(pangrams);
    words = para.split(' ');
  }
  else if (key == ' '){
    //Saves a JPG of the screen
    saveCanvas('samplerShot_###', 'jpg');
  }
}
