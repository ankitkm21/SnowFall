const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Background
var Snow1
var SnowImg
var Character;
var CharacterImg;
var Snowman;
var SnowmanImg;
function preload(){
Background = loadImage("snow2.jpg");
CharacterImg = loadImage("Character.png");
SnowImg = loadImage("Snowman.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  if(frameCount%90 === 0){
    Snow1 = new Snow(random(width/2-10,width/2+10),10,10);
    console.log("hi")
      }
      
  Character = createSprite(540,350,10,10);
  Character.addImage(CharacterImg);
  Character.scale = 0.3;

  Snowman = createSprite(260,300,10,10);
  Snowman.addImage(SnowImg);
  Snowman.scale = 0.3;

}

function draw() {
  background(Background);  
  Engine.update(engine);
 
  Snow1.display();
  drawSprites();
}