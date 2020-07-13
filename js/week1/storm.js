
let raindrop;

function setup() {
    let can2 = createCanvas(600, 600);
    can2.position(200, 350);

    raindrop = loadImage("/images/newrain.png");

    y = 150;
    mainVel = 2;
    yVel = mainVel;

    imageWidth = 30;
    imageHeight = 40;

    c = 0;

   
};

function draw() {
    colorMode(HSB, 360, 100, 100);

    fill(c, 30, 30);
    c += 1;
    c = c % 330;


    noStroke();
    //cloud 1
    ellipse(60, 100, 100, 100);
    ellipse(130, 100, 200, 100);
    ellipse(80, 120, 100, 100);
    ellipse(150, 120, 100, 100);
    ellipse(200, 120, 100, 100);
    ellipse(200, 80, 100, 100);
    ellipse(240, 90, 100, 100);

    //cloud 2
    ellipse(380, 80, 200, 100);
    ellipse(400, 130, 100, 100);
    ellipse(320, 120, 100, 100);
    ellipse(460, 120, 100, 100);
    ellipse(500, 100, 100, 100);

    //cloud 3
    ellipse(520, 90, 150, 70);
    //ellipse(560, 120, 100, 100);



    noFill();
    //raindrops
    let i;
    for (i = 10; i < 600; i += 90) {
        image(raindrop, i, y, imageWidth, imageHeight);
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
};
  
