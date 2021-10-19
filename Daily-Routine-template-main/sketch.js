// UP_ARROW = 
//
//
//
//
//









var bg,sleep, brush, gym,gym1, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym12.png","images/gym11.png")
  gym1=loadAnimation("images/gym1.png","images/gym2.png")
  eat = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bath = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 move = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup(){
  createCanvas(400,400);
  //create Astronaut sprite 
astronaut = createSprite (300,230)
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1
}

function draw() {
background(bg);

if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush)
   astronaut.changeAnimation("brushing")
   astronaut.velocityX=0
   astronaut.velocityY=0
   astronaut.y = 350;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym,);
  astronaut.changeAnimation("gymming");
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  astronaut.y = 350;
   }
  
  
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  astronaut.y = 350;
              }

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  astronaut.y = 350;
}

if(keyDown("M")){
astronaut.addAnimation("moving",move);
astronaut.changeAnimation("moving");
astronaut.velocityX=0;
astronaut.velocityY=0;
astronaut.y = 200;
astronaut.x = 200
}


if(keyDown("N")){
  astronaut.addAnimation("gymming",gym1);
  astronaut.changeAnimation("gymming");
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  astronaut.y = 350;
   }


drawSprites();
}
