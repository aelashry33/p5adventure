//instace mode
var sketch = function (p) {
  p.setup = function () {
    let can1 = p.createCanvas(300, 500);
    can1.position(40, 350);
  };

  p.draw = function () {
    // Code here runs continuously
    
    //Google Maps Logo
    p.noFill();
    p.stroke(133, 130, 130);
    p.arc(90, 100, 70, 80, p.PI, 0); //top arch of logo

    p.fill(255);
    p.circle(90, 100, 25); //circle inside the logo

    p.strokeWeight(2.5);

    //curves and lines to complete the bottom half of the logo
    p.noFill();
    p.bezier(55, 100, 60, 130, 77, 140, 79, 150);
    p.bezier(125, 100, 120, 130, 97, 140, 97, 150);
    p.noFill();
    p.curve(55, 60, 79, 150, 85, 170, 100, 200);
    p.curve(120, 100, 97, 149, 89, 170, 91, 170);
    p.line(85, 170, 87, 175);
    p.line(89, 170, 87, 175);

    //Youtube logo
    p.fill(255);
    p.stroke(217, 217, 217);
    p.rect(120, 200, 120, 100, 10); //outside rectanlge
    p.noStroke();
    p.fill("red");
    p.rect(145, 225, 70, 50, 10); //inside red rectangle
    p.fill(255);
    p.noStroke();
    p.triangle(170, 240, 170, 260, 190, 250); //white triangle inside the red rect

    //Google Meet Logo
    p.noStroke();
    p.fill(0, 128, 129);
    p.circle(100, 400, 120); //outside circle
    p.triangle(90, 450, 150, 430, 90, 490); //point coming out of the circle

    //camera inside the turqiuose circle
    p.noStroke();
    p.fill(255);
    p.rect(60, 375, 60, 50, 10);
    p.triangle(140, 420, 140, 380, 110, 400);
  };
};

var myp5_1 = new p5(sketch);

var sketch2 = function (p) {
  let raindrop;
  p.setup = function () {
    let can1 = p.createCanvas(800, 600);
    can1.position(400, 350);

    raindrop = p.loadImage("/images/newrain.png");

    p.y = 150;
    p.mainVel = 2;
    p.yVel = p.mainVel;

    p.imageWidth = 30;
    p.imageHeight = 40;
  };

  p.draw = function () {
    

    p.fill(169, 169, 169);
    p.noStroke();
    //cloud 1
    p.ellipse(60, 50, 100, 100);
    p.ellipse(130, 50, 200, 100);
    p.ellipse(80, 90, 100, 100);
    p.ellipse(150, 90, 100, 100);
    p.ellipse(200, 90, 100, 100);
    p.ellipse(200, 50, 100, 100);
    p.ellipse(240, 60, 100, 100);

    //cloud 2
    p.ellipse(380, 50, 200, 100);
    p.ellipse(400, 100, 100, 100);
    p.ellipse(320, 90, 100, 100);
    p.ellipse(460, 90, 100, 100);
    p.ellipse(500, 70, 100, 100);

    //cloud 3
    p.ellipse(580, 60, 150, 100);
    p.ellipse(560, 90, 100, 100);
    p.ellipse(630, 90, 100, 100);
    p.ellipse(650, 70, 100, 100);


    p.noFill();
    //raindrops
    let i;
    for (p.i = 10; p.i < 600; p.i += 90) {
      p.image(raindrop, p.i, p.y, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 40, p.y + 60, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 90, p.y + 120, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 40, p.y + 190, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 90, p.y + 250, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 40, p.y + 300, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 90, p.y + 360, p.imageWidth, p.imageHeight);
      p.image(raindrop, p.i + 40, p.y + 420, p.imageWidth, p.imageHeight);
    }


    //raindrop motion
    if (p.y < 100) {
      p.yVel = p.mainVel;
    } else if (p.y > p.height - p.imageHeight) {
      p.y = 120;
    }
    p.y += p.yVel;
  };

};

var myp5_2 = new p5(sketch2);






