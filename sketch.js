
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	c1 = new stick(800,595,150,20);
	c2 = new stick(725,540,20,100);
	c3 = new stick(875,540,20,100);
	paper1 = new paper(100,360,50)
	ground1 = new stick(500,640,1000,20)
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("white");
  drawSprites();
  c1.display();
  c2.display();
  c3.display();
  paper1.display();
  imageMode(CENTER)
  image(dustbin,800,500,185,200)
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		console.log(paper1.body)
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:485,y:-455});
	  
	}
  }


