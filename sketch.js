const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var body1;
var body2; 
var ground;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    var options = {
        isStatic: true
    }
    body1 = Bodies.rectangle(400,200,50,50,options);
    World.add(world,body1);
    console.log(body1.position.x);

    ground = Bodies.rectangle(400,380,800,20,options);
    World.add(world,ground);

    var body2_options ={
        restitution: 1
    }
    body2 = Bodies.circle(400,200,10,body2_options);
    World.add(world,body2);
   
}

function draw(){
 
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(body1.position.x,body1.position.y,50,50);
    rect(ground.position.x,ground.position.y,800,20);
    ellipse(body2.position.x,body2.position.y,20)
    
}










