var bullet,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,10,50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,255); 
 
  bullet.collide(wall);
  if(wall.x - bullet.x < (bullet.width + wall.width/2))
  {
    bullet.velocityX = 0
   // var deformation = weight*0.5*speed*speed/22509;
    
    /*if(weight === 32 && speed === 223 && thickness === 70 && damage === 3.68)
    {
      wall.shapeColor = color(0,255,0);
    }
    if(weight === 32 && speed === 223 && thickness === 40 && damage === 12.43)
    {
      wall.shapeColor = color(255,0,0);
    }
    if(deformation > 180)
    {
      bullet.shapeColor = color(0,255,0);
   }
  if(deformation < 180 && deformation > 100)
  {
    bullet.shapeColor = color(230,230,0);
  }
  if(deformation < 100){
    bullet.shapeColor = color(255,0,0);
   }*/
   hascollided();
  }
  drawSprites();
} 
function hascollided(lbullet,lwall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10)
  {
wall.shapeColor = color(255,0,0);

  }
if (damage<10){

  wall.shapeColor = color(0,255,0); 
}
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;

}