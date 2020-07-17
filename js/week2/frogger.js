let backgroundColor, frogColor, frogSize, frogX, frogY, score, lives, gameIsOver, car1X, car1Y, car1V, car2X, car2y, car2V, car3X, car3Y, car3V, car4X, car4Y, car4V, 
    rectColor1, rectColor2, rectColor3, rectColor4, restart;

function setup() {
  // Canvas & color settings
  let can6 = createCanvas(600, 500);
  can6.position(40, 520);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 100;
  
  //moving frog
  frogX = width/2;
  frogY = height - 30;
  
  score = 0;
  lives = 5;
  gameIsOver = false;
  
  //obstacles, dimensions and speed
  car1X = 0;
  car1Y = 100;
  car1V = 8;
  
  car2X = width - 40;
  car2Y = 200;
  car2V = 7;
  
  car3X = 0;
  car3Y = 300;
  car3V = 6;
  
  car4X = width - 40;
  car4Y = 400;
  car4V = 10;
  
  frogSize = 60;
  frogColor = color(210, 80, 80);
  rectColor1 = color(150, 80,80);
  rectColor2  = color(60, 80, 80);
  rectColor3 = color(270, 80, 80);
  rectColor4 = color(330, 80, 80);
  
  
}

function draw() {
  restart = createButton("RESTART");
  restart.position(width - 100, 520);
  restart.mousePressed(restartGame);
  
  background(backgroundColor);
  // Code for gold goal line
  noStroke();
  fill(30, 20, 90);
  rect(0, 0, width, 60, 5);
  
  // Code to display Frog
  fill(frogColor);
  ellipse(frogX, frogY, frogSize);
  
  keyMovement();
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
  
}

function keyMovement() {
  if (keyIsDown(87)) {//up, w
    frogY -= 3;
  }
  if (keyIsDown(83)) {//down, s
    frogY += 3;
  }
  if (keyIsDown(68)) {//R, d
    frogX += 3;
  }
  if (keyIsDown(65)) {//L, a
    frogX -= 3;
  }
}

function moveCars() {
  // Move the car
  car1X += car1V;
  // Reset if it moves off screen
  if(car1X > width){
    car1X = 0;
  }
  
  car2X -= car2V;
  if(car2X < -width){
    car2X = width - 40;
  }
  
  car3X += car3V;
  if(car3X > width){
    car3X = 0;
  }
  
  car4X -= car4V;
  if(car4X < -width){
    car4X = width - 40;
  }
}

function drawCars() {
  // Code for car 1
  fill(rectColor1);
  rect(car1X, car1Y, 40, 30, 5);
  // Code for additional cars
  fill(rectColor2);
  rect(car2X, car2Y, 40, 30, 5);
  fill(rectColor3);
  rect(car3X, car3Y, 40, 30, 5);
  fill(rectColor4);
  rect(car4X, car4Y, 40, 30, 5);
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  if(collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20) || 
    collideRectCircle(car2X, car2Y, 40, 30, frogX, frogY, 20) ||
    collideRectCircle(car3X, car3Y, 40, 30, frogX, frogY, 20) ||
    collideRectCircle(car4X, car4Y, 40, 30, frogX, frogY, 20)){
    
    frogColor = color(random(360), random(100), random(100));
    
    frogSize -= 10;
    if(frogSize < 5){
      gameIsOver = true;
    }
    
    frogX = width/2;
    frogY = height - 30;
    if(lives >= 0){
      lives -= 1;
    }
    if(lives <= 0){
      lives = 0;
      gameIsOver = true;
    } 
  }
}


function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if(collideRectCircle(0, 0, width, 50, frogX, frogY, 20)){
    frogX = width/2;
    frogY = height - 30;
    score += 1;
  }
  
  
  if(score >= 3){
    textSize(60);
    fill(0);
    
    text("YOU WIN", width/6, height/2);
  }
}

function displayScores() {
  textSize(17);
  fill(0);
  // Display Lives
  text(`LIVES: ${lives}`, 10, 20);
  // Display Score
  text(`SCORE: ${score}`, 10, 40);
  // Display game over message if the game is over
  gameOver("GAME OVER");
}

function gameOver(displayString){
  if(gameIsOver){
    car1X = 0;
    car1Y = 100;
    car1V = 5;

    car2X = 0;
    car2Y = 200;
    car2V = 8;

    car3X = width - 40;
    car3Y = 300;
    car3V = 7;
    
    car4X = width - 40;
    car4Y = 400;
    car4V = 10;
    
    textSize(60);
    fill(0);
    
    text(`${displayString}`, width/6, height/2);
  }
}

function restartGame(){
  frogColor = color(210, 80, 80);
  gameIsOver = false;
  lives = 5;
  score = 0;
  frogSize = 60;
  
}

