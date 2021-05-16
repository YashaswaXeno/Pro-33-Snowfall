const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgrnd, r
var snow = []




function preload(){
  bgrnd = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  if(bgrnd)
  background(bgrnd); 
  Engine.update(engine);
  snowfall()
  for(r = 0; r<snow.length; r++){
    snow[r].display()
  }
 
  drawSprites();
}

function snowfall(){
  if(frameCount%3===0){
    snow.push(new Snowfall(random(0,800),0,50,50))
  }
}

