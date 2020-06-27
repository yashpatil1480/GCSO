var car,wall
var speed,weight


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,200,50,50)
  wall= createSprite(1500,260,60,height/2)

  car.velocityX=speed
}

function draw() {
  background(255,255,255);  


  drawSprites();
}

function deformation () {
  if (wall.x,-car.x < (car.width,wall.width)/2){
    car.velocity=0
    
    var deformation = 0.5 * weight *speed*speed/22509
    if (deormation>180){
      car.shapecolour=colour(230,230,0)
    }
    if(deformation<100){
      car.shapecolour=colour(0,255,0)
    }
    
      }
}