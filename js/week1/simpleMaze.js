let maze, circleX, circleY, points, pointAmount, pointColor;

function setup() {
    let can4 = createCanvas(600, 500);
    can4.position(50, 500);

    maze = loadImage("/images/penguin.jpg");

    colorMode(HSB, 360, 100, 100);
    background(100);

    textSize(60);

    //main circle position
    circleX = width - 460;
    circleY = height - 470;

    pointColor = color(200, 40, 70);

    pointAmount = 0;
}

function draw() {
    image(maze, 0, 0, 600, 500);

    fill(300, 50, 70);

    ellipse(circleX, circleY, 20);

    drawPoints();

    noLoop();
    collectPoints();
}

//movement of ball through the maze
function keyPressed() {
    loop();
    if (keyCode == UP_ARROW) {
        circleY -= 10;
    }
    if (keyCode == DOWN_ARROW) {
        circleY += 10;
    }
    if (keyCode == LEFT_ARROW) {
        circleX -= 10;
    }
    if (keyCode == RIGHT_ARROW) {
        circleX += 10;
    }
    if (keyCode == 32) {
        circleX = width - 460;
        circleY = height - 470;
        pointAmount = 0;
    }
}

//drawing the blue target points on the map
function drawPoints() {
    stroke(98);
    fill(pointColor);

    for (let i = 440; i > 360; i -= 50) {
        ellipse(width - 460, height - (i - 100), 10);
        ellipse(width - 460, height - (i - 200), 10);
        ellipse(width - 460, height - (i - 300), 10);
        ellipse(width - 460, height - (i - 400), 10);

        ellipse(width - 400, height - i, 10);
        ellipse(width - 400, height - (i - 200), 10);
        ellipse(width - 400, height - (i - 300), 10);

        ellipse(width - 330, height - (i - 100), 10);
        ellipse(width - 330, height - (i - 300), 10);

        ellipse(width - 210, height - i, 10);
        ellipse(width - 210, height - (i - 200), 10);

        ellipse(width - 90, height - (i - 100), 10);
        ellipse(width - 90, height - (i - 300), 10);
    }
}

//if dot collides with target the point score increments 
//disclaimer: this was done before I knew about the collide.2d library
function collectPoints() {
    for (let i = 470; i > 360; i -= 50) {
        if (
            circleY == height - i &&
            (circleX == width - 400 || circleX == width - 210)
        ) {
            pointAmount++;
        }
        if (
            circleY == height - (i - 100) &&
            (circleX == width - 460 ||
                circleX == width - 330 ||
                circleX == width - 90)
        ) {
            pointAmount++;
        }
        if (
            circleY == height - (i - 200) &&
            (circleX == width - 460 ||
                circleX == width - 400 ||
                circleX == width - 210)
        ) {
            pointAmount++;
        }
        if (
            circleY == height - (i - 300) &&
            (circleX == width - 460 ||
                circleX == width - 400 ||
                circleX == width - 330,
                circleX == width - 90)
        ) {
            pointAmount++;
        }
        if (circleY == height - (i - 400) && circleX == width - 460) {
            pointAmount++;
        }
    }
    text(pointAmount, 50, 50);
}

