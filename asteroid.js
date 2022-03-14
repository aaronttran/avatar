class Asteroid {
  constructor(_xPos, _yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  
  display() {
    
    push();
    fill(80, 55, 37);
    translate(this.xPos, this.yPos);
    //circle(this.x1, this.y1, this.d1);
    //circle(this.x2, this.y2, this.d2);
    //circle(this.x3, this.y3, this.d3);
    circle(width * 0.1, height * 0.1, 50);
    circle(width * 0.13, height * 0.1, 50);
    circle(width * 0.115, height * 0.12, 50);
    //circle(width * 0.115, height * 0.08, 50);
    pop();
  }
  
  move(){
    
    if (this.xPos <= width){
      this.xPos += 2;
    } else if (this.xPos > width) {
      this.xPos = 0;
    }
  }
}