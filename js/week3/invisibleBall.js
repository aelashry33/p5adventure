//invisible cirlce, try to find where it is
//press g: reveals the circle, click anywhere with your mouse to reset the position of the invisible circle

let backgroundColor, spherePosition, rectPosition, distance1, mousePosition, distance2, category, circleColor;

function setup() {
    // Canvas & color settings
    let can8 = createCanvas(750, 650);
    can8.position(130, 440);
    colorMode(HSB, 360, 100, 100);
    backgroundColor = 95;
    rectMode(CENTER);

    //json objects for the invisible sphere and rectangle
    spherePosition = {
        "x": 100,
        "y": 100
    }

    rectPosition = {
        "x": 200,
        "y": 240
    }

    circleColor = color(100);
}

function draw() {
    //draws shapes on canvas
    noStroke();
    background(backgroundColor);

    //invisible sphere
    fill(circleColor);
    ellipse(spherePosition.x, spherePosition.y, 30);

    //rectanlge
    fill(0);
    rect(rectPosition.x, rectPosition.y, 50, 50, 10);
    noStroke();

    //computing the distance between the rectangle and the sphere
    distance1 = computeDistance(spherePosition, rectPosition);
    textSize(20);
    text(`The invisible sphere and the rectangle are ${round(distance1)} units apart`, 20, 20);

    //json object for the mouse on the canvas, in the draw function it updates continously 
    mousePosition = {
        "x": mouseX,
        "y": mouseY
    }

    //continously computes distance between mouse and the sphere
    distance2 = computeDistance(spherePosition, mousePosition);
    category = computeCategoryofDistance(spherePosition, mousePosition);

    text(`The invisible sphere and the mouse are ${round(distance2)} units apart; you are ${category}`, 20, 40);

    //if the mouse is above the sphere, reveal the sphere and display a winning message
    if (distance2 < 5) {
        win();
    }

    //if the user needs a hint, the ball is revealed for a split second
    revealCircle();
}


function revealCircle() {
    //if the g key is pressed the sphere is revealed
    if (keyIsPressed && key == 'g' || key == 'G') {
        circleColor = color(100);
    }
}

function computeCategoryofDistance(point1, point2) {
    //if the distance between the sphere and the mouse is at certain thresholds, the background and circle color
    //update accordingly
    let distance = computeDistance(point1, point2);
    // >200 = "cold"
    // >50, <200 = "warm"
    // <50 = "hot"
    if (distance > 2000) {
        backgroundColor = color(180, 10, 100);
        circleColor = color(180, 10, 100);
        return "freezing";
    }
    if (distance > 1000) {
        backgroundColor = color(270, 10, 100);
        circleColor = color(270, 10, 100);
        return "cold";
    }
    if (distance > 300) {
        backgroundColor = color(0, 10, 100);
        circleColor = color(0, 10, 100);
        return "warm";
    }
    backgroundColor = color(0, 70, 100);
    circleColor = color(0, 70, 100);
    return "hot";

}

function computeDistance(point1, point2) {
    //uses the distance between two points formula to compute
    let distance = sqrt((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2);
    return distance;
}

function mousePressed() {
    //if the mouse is clicked on the canvas, the ball is moved to a new position
    spherePosition.x = random(width);
    spherePosition.y = random(height);
}

function win() {
    //if the ball is found, the sphere is revealed and the winning message is displayed
    textSize(30);
    circleColor = color(100);
    text("THE CIRCLE HAS BEEN FOUND!", width / 20, height / 2);
}

