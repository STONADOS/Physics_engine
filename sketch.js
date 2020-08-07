const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution:1.8
  }
  object = Bodies.rectangle(200, 100, 50, 50, options);
  World.add(world, object);
  ball = Bodies.circle(300, 100, 50, options);
  World.add(world, ball);
  // console.log(object);
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200 , 390 , 400 , 20, options);
  World.add(world, ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x, object.position.y, 50, 50);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 50, 50);
  
}