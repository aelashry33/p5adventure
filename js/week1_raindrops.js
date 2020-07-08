let raindrop;

function setup() {
  createCanvas(800, 600);

  // We only want to load the logo once.
  raindrop = loadImage("/images/newrain.png");
  
  
  y = 150;
  mainVel = 2;
  yVel = mainVel;

  imageWidth = 30;
  imageHeight = 40;
}

function draw() {
  background(255);
  
  fill(169,169,169);
  noStroke();
  //cloud 1
  ellipse(60,50,100,100);
	ellipse(130,50,200,100);
  ellipse(80,90,100,100);
  ellipse(150,90,100,100);
  ellipse(200,90,100,100);
  ellipse(200,50,100,100);
  ellipse(240,60,100,100);
  
  //cloud 2
  ellipse(380,50,200,100);
  ellipse(400,100,100,100);
  ellipse(320,90,100,100);
  ellipse(460,90,100,100);
  ellipse(500,70,100,100);
  
  //cloud 3
  ellipse(580,60,150,100);
  ellipse(560,90,100,100);
  ellipse(630,90,100,100);
  ellipse(650,70,100,100);
  

  noFill();
  //raindrops
  for (let i = 10; i < 600; i += 90) {
    image(raindrop,i, y, imageWidth, imageHeight);
    image(raindrop, i + 40, y + 60, imageWidth, imageHeight);
    image(raindrop, i + 90, y + 120, imageWidth, imageHeight);
    image(raindrop, i + 40, y + 190, imageWidth, imageHeight);
    image(raindrop, i + 90, y + 250, imageWidth, imageHeight);
    image(raindrop, i + 40, y + 300, imageWidth, imageHeight);
    image(raindrop, i + 90, y + 360, imageWidth, imageHeight);
    image(raindrop, i + 40, y + 420, imageWidth, imageHeight);
  }
  
  
  //raindrop motion
  if (y < 100) {
    yVel = mainVel;
  } else if (y > height - imageHeight) {
    y = 120;
  }
  y += yVel;
}
