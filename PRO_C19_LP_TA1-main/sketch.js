var ghost, ghostImg;
var towerImg, tower;
var doorImg, door;
var climberImg, climberImg;
var gameState = "play";

function preload() {
ghostImg = loadImage("ghost-standing.png");
towerImg = loadImage("tower.png");
doorImg = loadImage("door.png");
climberImg = loadImage("climber.png");
spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 2;

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.4;
  ghost.addImage(ghostImg);
}

function draw() {
  

  if (gameState === "play") {
    if(keyDown("space")){
      ghost.velocityY = -10;
    }

    if (keyDown("right_arrow")){
      ghost.x = ghost.x + 2;
    }

    if (keyDown("left_arrow")){
      ghost.x = ghost.x - 2;
    }
  }

  ghost.velocityY = ghost.velocityY + 0.5;

if(tower.y > 400){
  tower.y = 300;
}

  drawSprites();

  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");

  }
}