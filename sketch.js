var fixedRect, movingRect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,200,50,50);
  rect1.shapeColor = "purple"
  rect1.velocityX = +2;
  rect2 = createSprite(200,200,50,50);
  rect2.shapeColor = "purple"
  rect3 = createSprite(300,200,50,50);
  rect3.shapeColor = "purple"
  rect3.velocityX = -3;
  rect4 = createSprite(500,200,50,50);
  rect4.shapeColor = "purple"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect4)){
    movingRect.shapeColor = "red";
    rect4.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }

  bounceOff(rect1,rect3);

  drawSprites();
}
