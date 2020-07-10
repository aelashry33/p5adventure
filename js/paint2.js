let normal, thin, bold, increase, strokeSize, brushHue, decrease;

function setup() {
    let can4 = createCanvas(600, 600);
    can4.position(150, 300);
    colorMode(HSB, 360, 100, 100);
    background(100);

    writeText();

    clear = createButton("press to clear");
    clear.position(width - 150, height - 260);

    normal = createButton("NORMAL");
    normal.position(width - 500, height - 200);

    thin = createButton("THIN");
    thin.position(width - 500, height - 150);

    bold = createButton("BOLD");
    bold.position(width - 500, height - 100);


    increase = createButton("INCREASE");
    increase.position(width - 500, height - 50);

    decrease = createButton("DECREASE");
    decrease.position(width - 500, height);

    brushHue = 0;
    strokeSize = 0;

}



function draw() {
    clear.mousePressed(keyPressed);
    normal.mousePressed(normalChange);
    bold.mousePressed(boldChange);
    thin.mousePressed(thinChange);
    increase.mousePressed(increaseChange);
    decrease.mousePressed(decreaseChange);


    strokeWeight(strokeSize);
    if (mouseIsPressed && mouseX > width - 480) {
        chooseColors();
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}


function chooseColors() {
    brushHue = (brushHue + 1) % 360;
    stroke(brushHue, 50, 80);
}

function normalChange() {
    strokeSize = 5;
    chooseColors();

}

function boldChange() {
    strokeSize = 10;
    chooseColors();

}

function thinChange() {
    strokeSize = 2;
    chooseColors();

}


function increaseChange() {
    strokeSize = (strokeSize + 20) % 500;

    chooseColors();
}

function decreaseChange() {
    strokeSize = (strokeSize - 2) % 500;
    chooseColors();
}

function keyPressed() {
    background(100);
    writeText();
}

function writeText() {
    noStroke();
    textSize(30);
    fill(230, 30, 30);
    text("DRAW WITH DIFFERENT SIZES", 0, height - 570);

}


