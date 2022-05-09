class Laser {
    constructor(_xPos, _yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  
  display() {

  push();
  fill(255,0,0);
  translate(this.xPos, this.yPos);
  rect(0, 0, width/10, width/35);
  //let x1 = map(x, width/1.25, width, 0, 100, true);
  pop();
  }
  
  move(){
    
    if (this.xPos <= width){
      this.xPos += 4;
    } else if (this.xPos > width) {
      this.xPos = width * 0.75;
    }
}
}