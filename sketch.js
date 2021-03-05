
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,rope;
var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1= new BobObject1(200,500,20,20);
	bobObject2= new BobObject2(220,500,20,20);
	bobObject3= new BobObject3(240,500,20,20);
	bobObject4= new BobObject4(260,500,20,20);
	bobObject5= new BobObject5(280,500,20,20);
	rope= new rope(210,500,1,380);
	
	roof= new Roof(400,100,500,50);


	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope.display();
  
  drawSprites();
 
}



