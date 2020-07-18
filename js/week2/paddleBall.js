//global variables
let width, height, player1, player2, pongBall, paddleWidth, paddleHeight, 
circleRadius, player1Score, player2Score, paddle1, paddle2, court ;

function setup() {
    court = color(205, 30, 100);

    width = 800;
    height = 500;
    colorMode(HSB, 360, 100, 100);


    paddleWidth = 20;
    paddleHeight = 100;

    circleRadius = 10;

    player1Score = 0;
    player2Score = 0;

    let can7 = createCanvas(width, height);
    can7.position(130, 440);
    frameRate(30);

    //creates two Paddle objects, player1 and player 2
    player1 = new Paddle(width - 770, height - 200, 255, 24, 100);
    player2 = new Paddle(width - 30, height - 100, 200, 100, 100);

    //creates a Ball object, names pongBall
    pongBall = new Ball(width / 2, height / 2, 255, 0, 0);

   
}

function draw() {
    
    background(court);

    //drawing and moving the left rectangle, player 1
    movePlayer1();
    player1.showSelf();

    //drawing and moving the right rectangle, player 2
    movePlayer2();
    player2.showSelf();

    //drawing and moving the ball accross the screen 
    pongBall.showSelf();
    pongBall.moveSelf();

    //displays scores
    displayScores();

    //checks for collisions between rectanlge (paddles) and ball
    checkCollisions();

    //increments player scores appropriately and displays winner
    checkWin();

}

//paddle ball class
class Ball {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        //colors
        this.r = r;
        this.g = g;
        this.b = b;

        //angle of the ball
        this.angle = random(-PI, PI);

        //speed of the ball
        this.deltaX = 3;
    }

    //displaying ball and color
    showSelf() {
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        circle(this.x, this.y, circleRadius);
    }

    moveSelf() {
        //if the ball hits the floor or ceiling, then the ball moves in the opposite direction 
        if (this.x > width || this.x < 0) {
            this.angle *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.angle *= -1;
        }


        //move the ball accross the screen 
        var slope = tan(this.angle);
        var deltaY = round(slope * this.deltaX);
        this.x += this.deltaX;
        this.y += deltaY;

    }
}

//class for the two paddles/players
class Paddle {
    constructor(x, y, r, g, b) {
        this.x = x;
        this.y = y;
        //color
        this.r = r;
        this.g = g;
        this.b = b;
    }

    //displays the paddles
    showSelf() {
        stroke(this.r, this.g, this.b);
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, 20, 100);
    }
}


function movePlayer1() {
    //if certain keys are pressed, then player either increments or decrements
    if (keyIsPressed) {
        if (key == 'a' || key == 'A') {
            //up
            player1.y -= 5;
        }
        if (key == 's' || key == 'S') {
            //down
            player1.y += 5;
        }
    }

}

function movePlayer2() {
    //if certain keys are pressed, then player either increments or decrements
    if (keyIsPressed) {
        if (key == 'k' || key == 'K') {
            //up
            player2.y -= 5;
        }
        if (key == 'l' || key == 'L') {
            //down
            player2.y += 5;
        }
    }
}



function checkCollisions() {
    //checks for collisions between either of the paddles and the ball
    //if a collision happens, the ball moves in the opposite direction and "speed" (deltaX)

    paddle1 = collideRectCircle(player1.x, player1.y, 20, 100, pongBall.x, pongBall.y, circleRadius);
    paddle2 = collideRectCircle(player2.x, player2.y, 20, 100, pongBall.x, pongBall.y, circleRadius);

    if (paddle1) {
        //move in opp direction and speed

        pongBall.angle *= -1;
        pongBall.deltaX *= -1;
        changePaddleColor();
    }
    if (paddle2) {

        pongBall.angle *= -1;
        pongBall.deltaX *= -1;
        changePaddleColor();
    }

}

function changePaddleColor() {
    //change color of paddles and background when hit
    player1.r = random(360);
    player1.g = random(100);
    player1.b = random(100);

    player2.r = random(360);
    player2.g = random(100);
    player2.b = random(100);

    court = color(random(360), random(90), random(50, 100));
}

function displayScores() {
    //displays the score of each player
    stroke('black');
    fill('black');
    textSize(20);
    text(`Player 1: ${player1Score}`, 10, 25);
    text(`Player 2: ${player2Score}`, width - 100, 25);
}

function checkWin() {
    //if the ball goes 'past' the paddle, the appropriate player's score increments
    //the ball is also reset
    if (pongBall.x >= width) {
        player1Score += 1;
        resetBall();
    }
    if (pongBall.x <= 0) {
        player2Score += 1;
        resetBall();
    }

    //checking to see if a player has won
    if (player1Score == 3 || player2Score == 3) {
        resetBall();
        gameOverText();
    }
}

function resetBall() {
    //reset ball position
    pongBall.x = width / 2;
    pongBall.y = height / 2;
    pongBall.angle = random(-PI, PI);

}


function gameOverText() {
    textSize(40);
    text("GAME OVER", width - 500, height / 2);

    //text to display which player wins
    textSize(20);
    if (player1Score == 3) {
        text("PLAYER ONE WINS", width - 500, height - 200);
    } else if (player2Score == 3) {
        text("PLAYER TWO WINS", width - 500, height - 200);
    }
}

