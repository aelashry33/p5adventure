
function setup() {
  let can1 = createCanvas(300, 600);
  can1.position(300, 350);
};

function draw() {
  // Code here runs continuously

  //Google Maps Logo
  noFill();
  stroke(133, 130, 130);
  arc(90, 100, 70, 80, PI, 0); //top arch of logo

  fill(255);
  circle(90, 100, 25); //circle inside the logo

  strokeWeight(2.5);

  //curves and lines to complete the bottom half of the logo
  noFill();
  bezier(55, 100, 60, 130, 77, 140, 79, 150);
  bezier(125, 100, 120, 130, 97, 140, 97, 150);
  noFill();
  curve(55, 60, 79, 150, 85, 170, 100, 200);
  curve(120, 100, 97, 149, 89, 170, 91, 170);
  line(85, 170, 87, 175);
  line(89, 170, 87, 175);

  //Youtube logo
  fill(255);
  stroke(217, 217, 217);
  rect(120, 200, 120, 100, 10); //outside rectanlge
  noStroke();
  fill("red");
  rect(145, 225, 70, 50, 10); //inside red rectangle
  fill(255);
  noStroke();
  triangle(170, 240, 170, 260, 190, 250); //white triangle inside the red rect

  //Google Meet Logo
  noStroke();
  fill(0, 128, 129);
  circle(100, 400, 120); //outside circle
  triangle(90, 450, 150, 430, 90, 490); //point coming out of the circle

  //camera inside the turqiuose circle
  noStroke();
  fill(255);
  rect(60, 375, 60, 50, 10);
  triangle(140, 420, 140, 380, 110, 400);
};


