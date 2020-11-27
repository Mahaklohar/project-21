var bullet, wall;
var speed, width, thickness;

var Damage;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  bullet = createSprite(50, 200, 60, 3);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200, 200, thickness, height/2)
  wall.shapeColor = color(80, 80, 80);


}

function draw() {
  background("black");  
  drawSprites();

  if(hasCollided(bullet, wall)){
    Damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;

    if(Damage>10){
      wall.shapeColor = "red";
    }

    if(Damage<10){
      wall.shapeColor = "green"
    }
  }


}


  function hasCollided (object1, object2){

    if(object1.x - object2.x< object1.width/2 + object2.width/2 && 
      object2.x - object1.x < object1.width/2 + object2.width/2 &&
      object1.y - object2.y< object1.width/2 + object2.width/2 && 
      object2.y - object1.y < object1.width/2 + object2.width/2 ){
          return true; 

      } else {
        return false;

      }
  }