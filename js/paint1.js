
let green, red, yellow, violet, blue, darkBlue, purple, forestGreen, lineColor;

function setup() {
    let can3 = createCanvas(900, 600);
    can3.position(80, 300);

    colorMode(HSB, 360, 100, 100);
    background(99);
    lineColor = color(10);

    clear = createButton("press to clear");
    clear.position(width-100,height-200);

    green = color(90, 50, 80);
    violet = color(270, 50, 80);
    blue = color(180, 50, 80);
    forestGreen = color(150, 50, 80);
    darkBlue = color(200, 200, 80);
    purple = color(300, 50, 80);
    red = color(0, 50, 80);
    yellow = color(40, 50, 80);

    textSize(25);
    textFont("Courier");
    fill(50);
    text("PICK A COLOR AND DRAG ON THE SCREEN TO PAINT", width- 700, height- 540);
    
}

//paint app, pick a color, paint with it them 
function draw() {
    
    noStroke();
    drawPalette();
    pickColor();
    clear.mousePressed(keyPressed);

    strokeWeight(10);
    stroke(lineColor);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}
function keyPressed(){
    background(99);
    noStroke();
    textSize(25);
    textFont("Courier");
    fill(50);
    text("PICK A COLOR AND DRAG ON THE SCREEN TO PAINT", width- 700, height- 540);
    
}
function drawPalette() {
    //palette
    fill(40, 10, 100); //beige
    rect(width / 10, height - 590, 50, 1000, 10);


    fill(green); //green
    ellipse(115, 50, 30);

    fill(violet);//violet
    ellipse(115, 400, 30);


    fill(blue); //blue
    ellipse(115, 190, 30);

    fill(red); //red
    ellipse(115, 470, 30);


    fill(yellow); //yellow
    ellipse(115, 540, 30);

    fill(purple); //purple
    ellipse(115, 330, 30);


    fill(forestGreen); //forest green
    ellipse(115, 120, 30);

    fill(darkBlue); //dark blue
    ellipse(115, 260, 30);
}

function pickColor() {
    if (mouseIsPressed && mouseX >= width - 800 && mouseX <= width - 780) {
        if (mouseY >= 0 && mouseY <= height - 530) {
            lineColor = green;
        }
        if (mouseY >= height - 500 && mouseY <= height - 460) {
            lineColor = forestGreen;
        }
        if (mouseY >= height - 440 && mouseY <= height - 390) {
            lineColor = blue;
        }
        if (mouseY >= height - 370 && mouseY <= height - 330) {
            lineColor = darkBlue;
        }
        if (mouseY >= height - 290 && mouseY <= height - 260) {
            lineColor = purple;
        }
        if (mouseY >= height - 220 && mouseY <= height - 190) {
            lineColor = violet;
        }
        if (mouseY >= height - 150 && mouseY <= height - 120) {
            lineColor = red;
        }
        if (mouseY >= height - 80 && mouseY <= height - 50) {
            lineColor = yellow;
        }
    }
}

