let backgroundColor, playerSnake, currentApple, score;

function setup() {
    // Canvas & color settings
    let can10 = createCanvas(700, 700);
    can10.position(130, 440);
    colorMode(HSB, 360, 100, 100);
    backgroundColor = 95;
    frameRate(12);

    //creating snake object
    playerSnake = new Snake();
    //creating player object
    currentApple = new Apple();

    score = 0;
}

function draw() {
    textSize(25);
    background(backgroundColor);

    // The snake performs the following four methods:
    playerSnake.moveSelf();
    playerSnake.showSelf();
    playerSnake.checkCollisions();
    playerSnake.checkApples();
    playerSnake.hitWall();

    // The apple needs fewer methods to show up on screen.
    currentApple.showSelf();

    //put the score in its own function for readability.
    displayScore();

    //checks to see if certain score is reached
    won();
}

function displayScore() {
    fill(0);
    text(`Score: ${score}`, 20, 20);
}

//snake class
class Snake {
    constructor() {
        this.size = 10;
        this.x = width / 2;
        this.y = height - 10;
        //key that is pressed on keypad to move snake
        this.direction = 'N';
        this.speed = 10;

        //array of tail segments that get added when the snake collides with the apple
        this.tail = [new TailSegment(this.x, this.y)];
    }

    //moving the snake with the keypad
    moveSelf() {
        if (this.direction === "N") {
            this.y -= this.speed;
        } else if (this.direction === "S") {
            this.y += this.speed;
        } else if (this.direction === "E") {
            this.x += this.speed;
        } else if (this.direction === "W") {
            this.x -= this.speed;
        } else {
            console.log("Error: invalid direction");
        }

        //add new tail segment to front of array and remove old segment from end of the array
        this.tail.unshift(new TailSegment(this.x, this.y));
        this.tail.pop();
        //ex 123 then 234 then 345 then 456 etc etc so it doesnt go forever on the screen 
    }

    //displays the snake (initially one rectangle. as collides with apple more rects get added on)
    showSelf() {
        stroke(240, 100, 100);
        noFill();
        rect(this.x, this.y, this.size, this.size);
        noStroke();

        //shows the added rectangles if there are any
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i].showSelf();
        }
    }

    //checks to see if rectangle has collided with apple on the screen
    //if so the score increments, apple is placed in a new location, tail segment is added
    checkApples() {
        if (collideRectRect(this.x, this.y, this.size, this.size, currentApple.x, currentApple.y, currentApple.size, currentApple.size)) {
            score++;
            currentApple = new Apple(); //since draw continously runs, every time collision occurs a new apple shows in a new location
            this.extendTail();
        }
    }

    //checks to see if snake collides with itself, then ends the game
    checkCollisions() {
        for (let i = 1; i < this.tail.legnth; i++) {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                gameOver();
            }
        }
    }

    //adds a tail segment
    extendTail() {
        //retrieves position of last tail segment
        let lastTailSegment = this.tail[this.tail.length - 1];
        //adds it to the tail segment array
        this.tail.push(new TailSegment(lastTailSegment.x, lastTailSegment.y));
    }

    //if the sides of the canvas are hit, the game is over
    hitWall() {
        if (this.x >= width - 10 || this.x <= 0) {
            gameOver();
        }
        if (this.y >= height - 10 || this.y <= 0) {
            gameOver();
        }
    }
}

//tail segment class
class TailSegment {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
    }

    //shows a tail segment rectanlge
    showSelf() {
        fill(0);
        rect(this.x, this.y, this.size, this.size);
    }
}

//apple class
class Apple {
    constructor() {
        this.x = random(width - 10);
        this.y = random(height - 10);
        this.size = 20;
    }

    //displays the apple
    showSelf() {
        fill(0, 80, 80);
        rect(this.x, this.y, this.size, this.size);
    }
}

function keyPressed() {
    console.log("key pressed: ", keyCode)
    if (keyCode === 87 && playerSnake.direction != 'S') {
        playerSnake.direction = "N";
    } else if (keyCode === 83 && playerSnake.direction != 'N') {
        playerSnake.direction = "S";
    } else if (keyCode === 68 && playerSnake.direction != 'W') {
        playerSnake.direction = "E";
    } else if (keyCode === 65 && playerSnake.direction != 'E') {
        playerSnake.direction = "W";
    } else if (keyCode == 32) {
        restartGame();
    } else {
        console.log("wrong key");
    }
}

function restartGame() {
    score = 0;
    playerSnake = new Snake();
    currentApple = new Apple();
    loop();
}

function gameOver() {

    text("GAME OVER", width / 2, height / 2);
    noLoop();
}

function won() {
    if (score == 7) {
        text("YOU WON", width / 2, height / 2);
        noLoop();
    }

}
