var movingRect, fixedRect, rect1, rect2;

function setup() {
  createCanvas(800,600);

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(400,100,50,50);
  rect1.shapeColor = "blue";
  rect1.velocityY = 3;

  rect2 = createSprite(400,300,50,50);
  rect2.shapeColor = "blue";
  rect2.velocityY = -3;


}

function draw() {
  background(0);  

  movingRect.x= mouseX;
  movingRect.y = mouseY;

  if(collision(movingRect,fixedRect))
    {
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }
    else
        {
          movingRect.shapeColor = "green";
          fixedRect.shapeColor = "green";
        }

  bounceoff(rect1,rect2); 

        
  drawSprites();
}

