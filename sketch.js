
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var ground;
var survivaltime=0;
var bananaGroup,bananaImage;
var obstacleGroup,obstacleImage;
var survivaltime=0;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,300);
  
monkey=createSprite(60,230,10,10);  
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
ground = createSprite(400,267,900,10);
ground.velocityX=-4;  
console.log(ground.x); 
  
bananaGroup = createGroup();
obstacleGroup = createGroup();  
}


function draw() {
background("red");
  
if (ground.x < 0){
ground.x = ground.width/2;
}
  
spawnbananas();
  
spawnObstacles();
  
if(keyDown("space")){
  monkey.velocityY=-12
}  
  
monkey.velocityY = monkey.velocityY + 0.8
  
monkey.collide(ground);  

stroke("black");
textSize(24);
fill("black");
survivaltime = survivaltime+Math.round(getFrameRate()/60)  
text("Survival Time:"+survivaltime,120,40);
    
drawSprites();  
}

function spawnbananas(){
  if(frameCount % 60===0){
 var banana=createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);   
  }
}

function spawnObstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(900,240,10,40);
   obstacle.velocityX = -6;
   obstacle.x = Math.round(random(600,200));
   obstacle.addImage(obstacleImage);  
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   
   obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}

  
