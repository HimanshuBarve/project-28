
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
//var invisibleGround;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	
	mango2=new Mango(1030,90,30);
	
	mango3=new Mango(1060,200,30);
	
	mango4=new Mango(1000,250,30);
	
	mango5=new Mango(1200,174,30);
	
	mango6=new Mango(1250,213,30);
	
	mango7=new Mango(990,165,30);
	
	mango8=new Mango(875,230,30);
	
	mango9=new Mango(1090,254,30);
	
	mango10=new Mango(1154,210,30);

    stone= new Stone(235,423,35,35)
	//invisibleGround=new ground(235,430,10,20)
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	launcherObject = new Launcher(stone.body , { x : 235, y :423 })
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);	


  
  treeObj.display();
  mango1.display();
  stone.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  /*invisibleGround.display();
  invisibleGround.visible= false ;*/
launcherObject.display()
  groundObject.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  keyPressed();
}
function mouseDragged(){
        Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
        
}


function mouseReleased(){
    launcherObject.fly();
}
function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)


if(distance<mango.r+stone.r){
Matter.Body.setStatic(mango.body,false)
}
}
function keyPressed(){
if (keyCode === 32){
Matter.Body.setPosition(stoneObj.body, {x:235,y:423})
launcherObject.attach(stoneObj.body);
}
}
