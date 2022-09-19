/*
    Paste the code for your week 4 exercise below.
*/
function setup() {
    createCanvas(500, 500);
    noLoop();
  }
  
  function draw() {
    background(200);
    let circlex = 250;
    let circley = 250;
    let diameter = 150;
    let blue = 250;
    stroke(0,0,150);
    strokeWeight(15);
    fill(0,0,blue)
    circle(circlex,circley,diameter);
    fill(0,0,blue-50)
    circle(circlex,circley,diameter-50);
    fill(0,0,blue-70)
    circle(circlex,circley,diameter-50);
    fill(0,0,blue-50)
    circle(circlex,circley,diameter-50);
    fill(0,0,blue-10)
    circle(circlex,circley,diameter-100);
    
    stroke(0,80,255);
    strokeWeight(15);
    line(250,250,250,250)   //center circle
  }