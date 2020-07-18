let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit, amount;

function setup() {
  // Canvas & color settings
  let can5 = createCanvas(700, 500);
  can5.position(100, 400);

  

  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 100;
  
  restart = createButton("RESTART GAME");
  restart.position(500, 800);

  //arrays to hold x and y coordinates of the coins
  coinX = [];
  coinY = [];
  time = 1000;
  gameIsOver = false;
  score = 0;
  amount = 20;
  
}

function draw() {
  background(backgroundColor);
  
  fill(300, 30, 100);
  
  handleTime();
  //draws coins on the screen
  populateCoins();
  
  //checks for collisions between the black coin and the purple coins
  for(let i =0; i <amount; i++){
    if(collideCircleCircle(mouseX, mouseY, 20, coinX[i], coinY[i], 20) ){
      handleCollision();
    }
  }

  fill(200, 40, 10);
  ellipse(mouseX, mouseY, 20);
  
  textSize(25);
  text(`Score: ${score}`, 20, 80); 
  text(`Time remaining: ${time}`, 20, 40); //if you do "Time remaining: ${time}" this is a string literal, tick marks lets variables display
  
  
}

function populateCoins(){
  //draws coins on the screen
  coinX.push(random(width));
  coinY.push(random(height));
  
  for(let i=0; i < amount; i++){
    ellipse(coinX[i], coinY[i], 20);
  }
  
}

function resetGame(){
  //resets variables that were changed in the game
  backgroundColor = 100;
  time = 1000;
  score = 0;
  coinX=[];
  coinY=[];
  gameIsOver = false;
}

function handleCollision() {
  // if coin is hit, score increments and coin move to another location
  if(!gameIsOver){
    score++;
    for(let i =0; i < amount; i++){
      coinX[i] = random(width);
      coinY[i] = random(height);
    }
    
  }
}

function handleTime() {
  //handles the time.
  if(time > 0){
    time--;
    return; //exits the function
  }
  gameIsOver = true;
  textSize(50);
  backgroundColor = 0;
  text("GAME OVER", width - 500, height/2 );
  
  
  restart.mousePressed(resetGame);
  
}
