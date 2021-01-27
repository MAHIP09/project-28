
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

function preload()
{
	boyImage=loadImage("images/boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;


    ground=new Ground(width/2,600,width,20)
    tree=new Tree(1050,350,500,500)

    stone=new Stone(235,420,30)

    launcher=new Launcher(stone.body,{x:235,y:420})

    mango1=new Mango(1100,100,30)
    mango2=new Mango(1100,230,40)
    mango3=new Mango(1100,70,40)
    mango4=new Mango(1200,200,40)
    mango5=new Mango(1000,70,40)
    mango6=new Mango(1170,130,30)
    mango7=new Mango(900,160,40)
    mango8=new Mango(1140,150,40)
    mango9=new Mango(900,230,40)
    mango10=new Mango(1110,140,30)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  image(boyImage,200,340,200,300)
   ground.display()
   
   stone.display()
   launcher.display()
   mango1.display()
   mango2.display()
   mango3.display()
   mango4.display()
   mango5.display()
   mango6.display()
   mango7.display()
   mango8.display()
   mango9.display()
   mango10.display()
   
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  tree.display()

}
function mouseDragged(){
   Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})  
}
function mouseReleased(){
    launcher.fly()
}
function detectCollision (ob1,ob2){
     var distance = dist(ob1.body.position.x,ob1.body.position.y,ob2.body.position.x,ob2.body.position.y )
   if( distance<= ob1.r+ob2.r){
     Matter.Body.setStatic(ob2.body,false)
   } 

}
function keyPressed(){
 if(keyCode===32){
   Matter.Body.setPosition(stone.body,{x:235,y:420})
   launcher.attach(stone.body)
 }
}