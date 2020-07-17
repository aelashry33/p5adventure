//global variables
let dots, dotAmount, rects, rectsAmount, sliderX, sliderY, sliderX2, sliderY2, sliderSpeed, backgroundSetting;

const AMOUNT = 50;

function setup() {
    backgroundSetting = createCanvas(700, 600);
    backgroundSetting.position(130, 240);
    colorMode(HSB, 360, 100, 100);

    //create dots objects, stores in array
    dots = [];
    dotAmount = 50;
    for (let i = 0; i < AMOUNT; i++) {
        dots.push(new BouncyDot());
    }

    //creates rectangle objects, stores in array
    rects = [];
    rectsAmount = 50;
    for (let i = 0; i < AMOUNT; i++) {
        rects.push(new Rectangle());
    }

    //setting the position of the sliders
    sliderX = 0;
    sliderX2 = 0;

    sliderY = 0;
    sliderY2 = 0;
    sliderSpeed = 15;
}

function draw() {
    
    noStroke();
    //placing the shapes on the screen
    addMoreDots();
    addMoreRects();

    //beginning the animation
    drawSlider();

}

//draws the two lines the move back and forth accross the screen
function drawSlider() {
    fill(270, 10, 100);

    rect(sliderX, sliderY, 30, height);
    //move one slider vertically
    moveSliderX();

    rect(sliderX2, sliderY2, width, 30);
    //move one slider horizontally
    moveSliderY();
}

//moving the slider vertically
function moveSliderX() {
    sliderX += sliderSpeed;

    if (sliderX < width) {
        sliderSpeed *= 1;
    }
    if (sliderX >= width || sliderX == 0) {
        sliderSpeed *= -1;
    }
    //move to the right if less than width, move to the left if greater than width
}

//moving the other slider horizontally
function moveSliderY() {
    sliderY2 += sliderSpeed;

    if (sliderY2 < height) {
        sliderSpeed *= 1;
    }
    if (sliderY2 >= height || sliderY2 == 0) {
        sliderSpeed *= -1;
    }
}

//uses the BouncyDot class methods to display dots
function addMoreDots() {
    for (let i = 0; i < AMOUNT; i++) {
        dots[i].float();
        dots[i].display();
        dots[i].collisionDetection();
    }
}

//uses the Rectangle class methods to display rectangles
function addMoreRects() {
    for (let i = 0; i < AMOUNT; i++) {
        rects[i].float();
        rects[i].display();
        rects[i].collisionDetection();
    }
}

class BouncyDot {
    constructor() {
        // Randomly generate position
        this.x = random(width);
        this.y = random(height);
        // Randomly generate radius
        this.r = random(5, 12);
        // Randomly generate color
        this.color = random(360);
        // Randomly generate a master velocity (broken into components)...
        this.masterXvelocity = random(0.5, 3);
        this.masterYvelocity = random(0.5, 3);
        // ...and use those as starting velocities.
        this.xVelocity = this.masterXvelocity;
        this.yVelocity = this.masterYvelocity;
    }

    float() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        // Standard bounce code
        if (this.x + this.r > width) {
            this.xVelocity = -1 * this.masterXvelocity;
        }
        if (this.x - this.r < 0) {
            this.xVelocity = this.masterXvelocity;
        }
        if (this.y + this.r > height) {
            this.yVelocity = -1 * this.masterYvelocity;
        }
        if (this.y - this.r < 0) {
            this.yVelocity = this.masterYvelocity;
        }
    }

    display() {
        fill(this.color, 80, 70);
        noStroke();
        ellipse(this.x, this.y, this.r * 2);
    }

    //if dots collide with the slider in the +x direction, the dots turn white
    //if they collide in the -x direction, the dots retrieve their colors again
    collisionDetection() {
        if (
            collideRectCircle(sliderX, sliderY, 30, height, this.x, this.y, this.r) &&
            sliderSpeed >= 0
        ) {
            this.color = random(160);
        }

        if (
            collideRectCircle(sliderX, sliderY, 30, height, this.x, this.y, this.r) &&
            sliderSpeed < 0
        ) {
            this.color = random(360);
        }
    }
}

//class Rectangle inherits all attributes and methods of parent BouncyDot
//redefines the display and collisionDetection methods
class Rectangle extends BouncyDot {
    display() {
        fill(this.color, 80, 70);
        noStroke();
        rect(this.x, this.y, this.r, this.r * 2, 20);
    }

    //if rectangles collide with the slider in the +x direction, they turn white
    //if they collide in the -x direction, they retrieve their colors again
    collisionDetection() {
        if (
            collideRectRect(sliderX,sliderY,30,height,this.x,this.y,this.r,this.r * 2) && sliderSpeed >= 0) {
            this.color = random(160);
        }
        if (collideRectRect(sliderX, sliderY, 30, height, this.x, this.y, this.r, this.r * 2) && sliderSpeed < 0) {
            this.color = random(360);
        }
    }
}

