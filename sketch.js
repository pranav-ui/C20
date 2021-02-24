
var fixR,moveR;

function setup() {
  createCanvas(800,400);
  fixR=createSprite(400, 200, 50, 50);
  movR=createSprite(800,200,50,50);
  movR.velocityX=-3;




}

function draw() {
  background(255,255,255);  
  drawSprites();
  //movR.x=mouseX;
  //movR.y=mouseY;

  if(fixR.x-movR.x<fixR.width/2+movR.width/2
    &&movR.x-fixR.x<fixR.width/2+movR.width/2
    &&fixR.y-movR.y<fixR.height/2+movR.height/2
    &&movR.y-fixR.y<fixR.height/2+movR.height/2){
      fixR.shapeColor="red";
      movR.shapeColor="red";
      movR.velocityX=0;
      
    }else{
      fixR.shapeColor="yellow";
      movR.shapeColor="yellow";
    }

  






}