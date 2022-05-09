let tipHat;
var mic;
let micLevel;
let x = 0;
let asteroids = [];
let lasers = [];

function setup(){
  createCanvas(500, 500);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
  
  for (let i = 0; i <= 10; i++) {
    asteroids[i] = new Asteroid(random(10) / 10 * width * 0.5, random(10) * width * 0.1);
  }
  
  for (let i = 0; i <= 10; i++) {
    lasers[i] = new Laser(width/1.25, width/2.05);
  }
}


function draw(){
  console.log(mic.getLevel());
  background(100);
  micLevel = mic.getLevel();
  tipHat = map(mic.getLevel(), 0, -1.2, 0, 15);
 
  //asteroids
  for (i = 0; i < asteroids.length; i++){
    asteroids[i].display();
    asteroids[i].move();
  } 
  
  //body
  drawBody(width/2,width/2,width/1.5,width/2);
  
  //eye
  fill(255);
  beginShape();
  vertex(width/1.5,width/2);
  vertex(width/1.43,width/2.22);
  vertex(width/1.33,width/2.22);
  vertex(width/1.28,width/2);
  vertex(width/1.33,width/1.82);
  vertex(width/1.43,width/1.82);
  endShape(CLOSE);
  
  //pupil
  drawPupil(width/1.35,width/2,width/22);
  
  //mouth
  fill(100,0,255);
  beginShape(TRIANGLES);
  vertex(width/1.5,width/1.6);
  vertex(width/1.27,width/1.6);
  vertex(width/1.23,width/1.7);
  endShape();
  
  //legs
  fill(100,230,100);
  beginShape(QUADS);
  //left leg
  vertex(width/2.8,width/1.38);
  vertex(width/2.8,width/1.11);
  vertex(width/2.2,width/1.11);
  vertex(width/2.2,width/1.34);
  //right leg
  vertex(width/1.85,width/1.34);
  vertex(width/1.85,width/1.11);
  vertex(width/1.55,width/1.11);
  vertex(width/1.55,width/1.38);
  endShape();
  
  //shoes
  drawShoes(width/2.8,width/1.183,width/8,width/18);
  drawShoes(width/1.85,width/1.183,width/7.5,width/18);
  
  //hat
  fill(0);
  push();
  rectMode(CENTER);
  translate(width/2,width/4);
  rotate(tipHat);
  rect(0,0,width/3,width/18);
  pop();
  push();
  translate(width/2, width/4.4);
  rotate(tipHat);
  arc(0, 0, 110, 120, 180, 0);
  pop();
  
  //tail
  fill(100,230,100);
  beginShape(TRIANGLES);
  vertex(width/25,width/2.3);
  vertex(width/6,width/2);
  vertex(width/5.4,width/1.7);
  endShape();
  
  //laser
  for (i = 0; i < lasers.length; i++){
    lasers[i].display();
    lasers[i].move();
  }
}

function drawShoes(x1,y1,w1,h1,x2,y2,w2,h2){
  fill(0);
  rect(x1,y1,w1,h1);
  rect(x2,y2,w2,h2);
}

function drawBody(x,y,w,h){
  fill(100,230,100);
  noStroke();
  ellipse(x,y,w,h);
}

function drawPupil(x,y,d){
  fill(0)
  circle(x,y,d);
}