const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var bgimg;
var boyimg;
var boy;
var snowball = []
var engine, world;

function preload(){
bgimg=loadImage("snow1.jpg")
boyimg=loadImage("boy.png")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  boy=createSprite(350, 300, 50, 50);
  boy.addImage(boyimg);
  boy.scale=0.1;
  for(var i=0 ; i<200 ; i++){
    snowball.push(new Snow (Math.random(10,800),20));  
    } 

}

function draw() {
  background(bgimg);
  Engine.update(engine);
 console.log (frameCount)
  
    
      for (var a=0; a<200; a++){
        snowball[a].display(); 
        snowball[a].update_y();
      }
      


 
  
   
  
  drawSprites();
}