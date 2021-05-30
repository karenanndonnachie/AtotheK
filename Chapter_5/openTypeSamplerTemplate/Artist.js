class Artist{
  constructor(name, posX, posY, link){
    this.name = name;
    this.x= posX;
    this.y= posY;
    this.link=link;
    this.ahref=createA(this.link, name, '_blank'); 

    //this.ahref.attribute('onclick', 'return confirm(\"Are you sure ?\")');
  }
  update() {
    this.bounds = font.textBounds(this.name, 0, 0, tSize);
    //rand=random(-3,3);
    //if (width-50 > this.x+rand > 0){this.x +=rand;}
    //rand=random(-3,3);
    //if (height-14 > this.y+rand > 20){this.y +=rand;}
  }
  display() {
    fill(0);
    textSize(tSize);
    if (lineX+tSize+this.bounds.w > width*0.98){
      lineX=tSize;
      lineY+=tSize*1.1;
    }
    else if (lineX == tSize){}
    else {
      //lineX+=tSize;
    }
    this.ahref.position(lineX, lineY);
    this.ahref.style("font-size", tSize);
    this.ahref.style("z-index", "0");
    //this.ahref.style("background-color", "#FFF");
    this.ahref.style("font-weight", "bold");
    if (mouseX > lineX && mouseX < lineX + this.bounds.w && mouseY < lineY+tSize && mouseY > lineY-5 ){ this.ahref.style("color", "grey");}
    else {this.ahref.style("color", "black");}
    this.ahref.style("font-family", "Helvetica, Arial, Sans-serif");
    if (this.name == 'Grid View' | this.name == 'Slave to the Algorithm' | this.name == 'House of Leaves'){this.ahref.style('color', 'blue'); lineX+=tSize;}
    if (this.name == 'Yasmin Harith Brewer' | this.name == 'Sylvain Girard' ){
      lineX+=(tSize/2);
    }
    lineX+=this.bounds.w;
    lineX+=(tSize*2.2/2);
    //else {
    //this.ahref.style('color', 'white');}
    //this.ahref.mousePressed(goLink);
    //text (this.name, this.x, this.y);
    
  }
}
