
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg;
var sprite;
var maxSnow, snowflakes;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  spriteimage = loadImage("character.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  //snow1 = new Snow(100,100,10,10)
  //snow2 = new Snow(50,300,10,10)
  //snow3 = new Snow(300,50,10,10)
  //snow4 = new Snow(700,100,10,10)
  //snow5 = new Snow(600,80,10,10)
  //snow6 = new Snow(100,100,10,10)
  //snow7 = new Snow(200,300,10,10)
  //snow8 = new Snow(400,50,10,10)
  //snow9 = new Snow(450,100,10,10)
  //snow10 = new Snow(230,80,10,10)
  if(frameCount%150===0){ 
    for(var i=0;i<maxSnow;i++){
       snowflakes.push(new Snow(random(0,800),random(0,400))) 
      } 
    }
    var maxSnow=100; var snowflakes=[];

  sprite = createSprite(400, 200, 50, 50);
  sprite.addImage(spriteimage);
  sprite.scale = 0.5

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  if(keyDown("left_arrow")){
    sprite.x=sprite.x-3;
  }
  if(keyDown("right_arrow")){
    sprite.x=sprite.x+3;
  }
  //snow1.display()
  //snow2.display()
  //snow3.display()
  //snow4.display()
  //snow5.display()
  //snow6.display()
  //snow7.display()
  //snow8.display()
  //snow9.display()
  //snow10.display()
  for(var i=0;i<maxSnow;i++){
     snowflakes[i].display();
     snowflakes[i].updateY(); 
    }

  drawSprites();
}