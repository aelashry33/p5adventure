let drops, droplets, dropAmount, grassPatch, grassAmount;

function setup() {
  let can6 = createCanvas(700, 700);
  can6.position(130, 240);
  colorMode(HSB, 360, 100, 100);
  
  drops = [];
  dropAmount = 100;
  for(let i=0; i < dropAmount; i++){
    drops.push(new Droplet(color(random(360), random(100), random(100))));
  }
  
  grassPatch = [];
  grassAmount = 150;
  for(let i=0; i < grassAmount; i++){
    grassPatch.push(new Grass());
  }
  
}

function draw() {
  background(100);
  
  for(let i = 0; i < dropAmount; i++){
    drops[i].moveDrop();
    drops[i].displayDrop();
  }
  
  
  for(let i=0; i < grassAmount; i++){
    grassPatch[i].moveGrass();
    grassPatch[i].displayGrass();
  }
  
  

}

class Droplet {
  constructor(color){ //can also pass variables into constructor 
    this.dropX = random(width);
    this.dropY = random(height);
    this.dropD = random(5,15);
    this.dropSpeed = random(8,20);
    this.color = color;
  }
  
  
  moveDrop(){
    this.dropY += this.dropSpeed;
    if(this.dropY > height){
      //reset 
      this.dropY = random(height);
      this.dropX = random(width);
    }
  }
  
  displayDrop(){
    noStroke();
    fill(this.color);
    ellipse(this.dropX, this.dropY, this.dropD);
  }
}

class Grass{
  constructor(){
    this.grassY = height;
    this.grassX = random(width);
    this.grassSpeed = random(5,10);
  }
  
  moveGrass(){
    this.grassY -= this.grassSpeed;
    if(this.grassY < height - 30){
      this.grassY = height;
    }
  }
  
  displayGrass(){
    noStroke();
    fill(150, 30, 70);
    rect(0, height - 10, width, height);
    ellipse(this.grassX, this.grassY, 3, 100);
  }
}

