//instance mode
var sketch = function (p) {
  p.setup = function () {
    let can1 = p.createCanvas(300, 500);
    can1.position(40, 350);

    p.textFont("arial");
    p.fill("olive");
    p.textSize(25);
    p.text("GOOGLE LOGOS", 0,20);
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
    let can2 = p.createCanvas(600, 600);
    can2.position(350, 350);

    raindrop = p.loadImage("/images/newrain.png");

    p.y = 150;
    p.mainVel = 2;
    p.yVel = p.mainVel;

    p.imageWidth = 30;
    p.imageHeight = 40;

    p.c = 0;

    p.textFont("arial");
    p.fill("olive");
    p.textSize(25);
    p.text("COLOR CHANGING STORM", 0,20);
  };

  p.draw = function () {
    p.colorMode(p.HSB, 360, 100, 100);

    p.fill(p.c, 30, 30);
    p.c += 1;
    p.c = p.c % 330;


    p.noStroke();
    //cloud 1
    p.ellipse(60, 100, 100, 100);
    p.ellipse(130, 100, 200, 100);
    p.ellipse(80, 120, 100, 100);
    p.ellipse(150, 120, 100, 100);
    p.ellipse(200, 120, 100, 100);
    p.ellipse(200, 80, 100, 100);
    p.ellipse(240,90, 100, 100);

    //cloud 2
    p.ellipse(380, 80, 200, 100);
    p.ellipse(400, 130, 100, 100);
    p.ellipse(320, 120, 100, 100);
    p.ellipse(460, 120, 100, 100);
    p.ellipse(500, 100, 100, 100);

    //cloud 3
    p.ellipse(520, 90, 150, 70);
    //p.ellipse(560, 120, 100, 100);
    


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


let sketch3 = function (p) {
  let green, red, yellow, violet, blue, darkBlue, purple, forestGreen, lineColor;

  p.setup = function() {
    let can3 = p.createCanvas(900, 600);
    can3.position(40, 1100);

    p.colorMode(p.HSB, 360, 100, 100);
    p.backgroundColor = p.color(98);
    p.lineColor = p.color(10);

    p.green = p.color(90, 50, 80);
    p.violet = p.color(270, 50, 80);
    p.blue = p.color(180, 50, 80);
    p.forestGreen = p.color(150, 50, 80);
    p.darkBlue = p.color(200, 200, 80);
    p.purple = p.color(300, 50, 80);
    p.red = p.color(0, 50, 80);
    p.yellow = p.color(40, 50, 80);

    p.textFont("arial");
    p.fill("olive");
    p.textSize(25);
    p.text("PAINTING ON THE SCREEN", 0,20);


    p.textFont("Courier");
    p.fill(50);
    p.text("PICK A COLOR AND DRAG ON THE SCREEN TO PAINT", 230, 60);

  }

  //paint app, pick a color, paint with it them 
  p.draw = function() {
    //background(backgroundColor);
    p.noStroke();
    p.drawPalette();
    p.pickColor();

    p.strokeWeight(10);
    p.stroke(p.lineColor);
    if (p.mouseIsPressed) {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    }

  }

  p.drawPalette = function() {
    //palette
    p.fill(40, 10, 100); //beige
    p.rect(p.width / 10, 30, 50, 1000, 10);


    p.fill(p.green); //green
    p.ellipse(115, 50, 30);

    p.fill(p.violet);//violet
    p.ellipse(115, 400, 30);


    p.fill(p.blue); //blue
    p.ellipse(115, 190, 30);

    p.fill(p.red); //red
    p.ellipse(115, 470, 30);


    p.fill(p.yellow); //yellow
    p.ellipse(115, 540, 30);

    p.fill(p.purple); //purple
    p.ellipse(115, 330, 30);


    p.fill(p.forestGreen); //forest green
    p.ellipse(115, 120, 30);

    p.fill(p.darkBlue); //dark blue
    p.ellipse(115, 260, 30);
  }

  p.pickColor = function() {
    if (p.mouseIsPressed && p.mouseX >= 100 && p.mouseX <= 120) {
      if (p.mouseY >= 0 && p.mouseY <= 70) {
        p.lineColor = p.green;
      }
      if (p.mouseY >= 100 && p.mouseY <= 140) {
        p.lineColor = p.forestGreen;
      }
      if (p.mouseY >= 160 && p.mouseY <= 210) {
        p.lineColor = p.blue;
      }
      if (p.mouseY >= 230 && p.mouseY <= 270) {
        p.lineColor = p.darkBlue;
      }
      if (p.mouseY >= 310 && p.mouseY <= 340) {
        p.lineColor = p.purple;
      }
      if (p.mouseY >= 380 && p.mouseY <= 410) {
        p.lineColor = p.violet;
      }
      if (p.mouseY >= 450 && p.mouseY <= 480) {
        p.lineColor = p.red;
      }
      if (p.mouseY >= 520 && p.mouseY <= 550) {
        p.lineColor = p.yellow;
      }
    }
  }

}


var myp5_3 = new p5(sketch3);