/*
    Paste the code for your week 5 exercise below.
*/
var r=0;   //radius
var c=0;   //colour

function setup() {
  createCanvas(500, 500);
  noFill;
}

function draw() {
  background(200);
  let circlex = 250;
  let circley = 250;
  let diameter = r;
  let blue = 250;
  translate(0,0)
  fill(0,0,c)
  circle(circlex,circley,r);
  fill(0,0,c)
  circle(circlex,circley,diameter/2);
  fill(0,0,c)
  circle(circlex,circley,diameter/4);
  fill(0,0,c)
  circle(circlex,circley,diameter/10);
  
  stroke(0,r,c);
  strokeWeight(25);

  r++;
  c++
  
  if(r>500){
  r=0
  translate(0,0)
  fill(0,0,c)
  circle(circlex,circley,r);
  fill(0,0,c)
  circle(circlex,circley,diameter/2);
  fill(0,0,c)
  circle(circlex,circley,diameter/4);
  fill(0,0,c)
  circle(circlex,circley,diameter/8);
    
  }
    if(c>255){
     c=0
    
  } 
}