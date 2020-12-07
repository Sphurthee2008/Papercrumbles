
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function setup() {
	createCanvas(1200, 1000);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper = new Paper(200,400,20);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
force()
  drawSprites();
 
}

function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}


