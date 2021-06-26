const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var upButton, rightButton
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var BallOptions={
    restitution: 1
  }
  ball= Bodies.circle(200, 20, 20, BallOptions)
  World.add(world,ball)
  upButton = createImg("up.png")
  rightButton = createImg("right.png")
  upButton.position(50, 50)
  rightButton.position(200, 50)
  upButton.mouseClicked(vForce)
  upButton.size(50, 50)
  rightButton.size(50, 50)
  rightButton.mouseClicked(hForce)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20, 20)
}
function hForce(){
Matter.Body.applyForce(ball,{x:0, y:0},{x:0.05, y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0, y: 0.05})
  }