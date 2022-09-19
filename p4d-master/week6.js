/*
   try press,hood and move mouse 
*/
var r=0;   //radius
var c=0;   //colour
var cx,cy,mainColour
  
let myObj = {};
myObj.myProperty = "testc";
console.log(myObj.myProperty);

let myString = "testc";
console.log(myObj.myProperty);

let testc = {};
let keylog = [];
  
  
  function setup() {
  createCanvas(windowHeight, windowHeight); 
        
    cx=width/2;
    cy=height/2;
    
    testc.x=cx;
    testc.y=cy;
    testc.size=60;
    testc.fillColour=c;
    testc.moveIncrement=20;
  
  }

function draw() {
  if(mouseIsPressed){
     background(200);
  let diameter = r;
  let blue = 250;
  translate(0,0);
  fill(0,0,c);
  circle(mouseX,mouseY,r);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/2);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/4);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/10);
  
  stroke(0,r,c);
  strokeWeight(10);

  r++;
  c++
  
  if(r>200){
  r=0;
  translate(0,0);
  fill(0,0,c);
  circle(mouseX,mouseY,r);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/2);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/4);
  fill(0,0,c);
  circle(mouseX,mouseY,diameter/8);
    
  }
      if(c>255){
     c=0;
        
    }
    
    fill(testc.fillColour);
    circle(testc.x,testc.y,testc.size);

  }
}