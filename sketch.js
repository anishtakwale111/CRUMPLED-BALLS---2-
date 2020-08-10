
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,Lrect,Rrect,Mrect;

function preload()
{
	//bin = loadImage("img/dustbin.png");
}

function setup() {
	createCanvas(2000, 700);
	/*db = createSprite(1500,520,180,160)
	db.addImage(bin);
	db.scale = 0.75;*/

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

	ground = new Ground(1000,650,2000,20);
	paperObject = new Paper(200,400,25);
	
	
	 Lrect = new Box(1420,555,20,150);
	 Rrect = new Box(1580,555,20,150);
	 Mrect = new Box(1500,635,150,20);
	
	 //dustbin = new Dustbin(1500,560,180,160);

	 }
function draw() {
  background(255);
  
  drawSprites();

  ground.display();
  paperObject.display();
  Lrect.display();
  Mrect.display();
  Rrect.display();
  //dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:170,y:-170});
	}
}


