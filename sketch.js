var car;
var wall;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  
  speed=random(30,60)
  weight=random(400,1500)
 
  wall = createSprite(1300,200,60, height/2);
  wall.shapeColor = (80,80,80);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  

 
}

function draw() {
  background("black");
  text("walllxposition"+wall.x , 10,50); 
  text("carxposition"+car.x , 10,100); 
  text("Firstcondition "+wall.x - car.x,10,150);
  text("Secondcondition "+(wall.width + car.width)/2,10,200);
  if(wall.x - car.x < (car.width + wall.width)/2){
    text("insideifcondition",10,250);
    car.velocityX = 0;
    deformation = 0.5 * weight * speed* speed / 22508;
    text(deformation,250,250);
    if(deformation > 180)
    {
      car.shapeColor = "red";
    }
    
  if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }

  if(deformation < 100)
  {
    car.shapeColor = "green";
  }

  }

  drawSprites();
}