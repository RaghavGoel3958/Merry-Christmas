var snowImage;
var flakeImg;
var shinImg;

function preload () {
  snowImg = loadImage("snow3.jpg") 
  flakeImg = loadAnimation("snow4.webp")
  shinImage= loadImage ("shinchan.png")
}
function setup() {
  createCanvas(800,400);

  flake=createSprite(400, 200, 50, 50);
  flake.addAnimation("flake",flakeImg);
  flake.scale=0.2;

  shinchan=createSprite(400,200,30,30)
  shinchan.addImage(shinImage)
  shinchan.scale=0.5;
}

function draw() {
  background(snowImg);  
  flake.velocity=0.1;
  drawSprites();
}

function keyPressed(){

  if(keycode=32){
    shinchan.velocityY=-1;
  }
}