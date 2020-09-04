let backgroundColor, playerSnake, currentApple, score, video, classifier;


// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/FT-50ZLsZ/';


function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}

function setup() {
  // Canvas & color settings
  let can11 = createCanvas(600, 700);
  can11.position(130,570);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 97;
  frameRate(12);
  playerSnake = new Snake();
  currentApple = new Apple();
  
  score = 0;
  
  classifier.classify(gotResult);
}

function draw() {
  
  textSize(25);

  background(backgroundColor);
  
  
  text(label, 10, 50);

  // The snake performs the following four methods:
  controlSnake();
  playerSnake.moveSelf();
  playerSnake.showSelf();
  playerSnake.checkCollisions();
  playerSnake.checkApples();
  playerSnake.hitWall();
  // The apple needs fewer methods to show up on screen.
  currentApple.showSelf();
  // We put the score in its own function for readability.
  displayScore();
  won();
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}


function displayScore() {
  fill(0);
  text(`Score: ${score}`, 20, 20);
}

class Snake {
  constructor() {
    this.size = 10;
    this.x = width/2;
    this.y = height - 10;
    this.direction = 'N';
    this.speed = 3;
    this.tail = [new TailSegment(this.x, this.y)];
  }

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
    
    //add new tail segment to front of array and remove old segment from end of the array unshift(), and pop()
    this.tail.unshift(new TailSegment(this.x, this.y));
    
    this.tail.pop();
    //ex 123 then 234 then 345 then 456 etc etc
  }

  showSelf() {
    stroke(240, 100, 100);
    noFill();
    rect(this.x, this.y, this.size, this.size);
    noStroke();
    
    for(let i=0; i < this.tail.length; i++){
      this.tail[i].showSelf();
    }
  }

  checkApples() {
    if(collideRectRect(this.x, this.y, this.size, this.size, currentApple.x, currentApple.y, currentApple.size, currentApple.size)){
      score++;
      currentApple = new Apple(); //since draw continously runs, every time collision occurs a new apple shows in a new location
      this.extendTail();
    }
  }

  checkCollisions() {
    for(let i=1; i < this.tail.legnth; i++){
      if(this.x == this.tail[i].x && this.y == this.tail[i].y){
        gameOver();
      }
    }
  }

  extendTail() {
    let lastTailSegment = this.tail[this.tail.length - 1];
    this.tail.push(new TailSegment(lastTailSegment.x, lastTailSegment.y));
  }
  
  hitWall(){
    if(this.x >= width - 10 || this.x <= 0){
      gameOver();
    }
    if(this.y >= height -10 || this.y <= 0){
      gameOver();
    }
  }
}

class TailSegment{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.size = 10;
  }
  
  showSelf(){
    fill(0);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Apple {
  constructor() {
    this.x = random(width- 10);
    this.y = random(height - 10);
    this.size = 20;
  }

  showSelf() {
    fill(0,80,80);
    rect(this.x, this.y, this.size, this.size);
  }
}

function controlSnake() {
  
  if (label == 'up' ) {
    playerSnake.direction = "N";
  } else if (label == 'down' ) {
    playerSnake.direction = "S";
  } else if (label == 'right' ) {
    playerSnake.direction = "E";
  } else if (label == 'left' ) {
    playerSnake.direction = "W";
  }
  
}

function restartGame() {
  score = 0;
  playerSnake = new Snake();
  currentApple = new Apple();
  loop();
}

function gameOver() {
  
  text("GAME OVER", width/2, height/2);
  noLoop();
}

function won(){
  if(score == 3){
    text("YOU WON", width/2, height/2);
    noLoop();
  }
  
}

