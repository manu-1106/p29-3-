const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var engine, world;


var base1,block1,block2,block3,block4,block5,block6;
var block7,block8,block9,block10,block11,block13,block14;
var block15,block16,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;  
var base2;
var polygon1,slingshot;




function setup() {
  createCanvas(800,400);
  //background.shapecolour="black";
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

  base1= new Ground(280,350,90,10);
base2=new Ground(670,58,80,5)
  polygon1=new polygon(30,30) 
  slingshot = new SlingShot(polygon1.body,{x:200, y:50});
   

mouseReleased();
  //level 4

              block1=new Box(250,340,10,10);
                block2=new Box(260,340,10,10);
                block3=new Box(270,340,10,10);
                block4=new Box(280,340,10,10);
                block5=new Box(290,340,10,10);
                block6=new Box(300,340,10,10);
                block7=new Box(310,340,10,10);

//level3
          block8=new Box(260,330,10,10);
          block9=new Box(270,330,10,10);
          block10=new Box(280,330,10,10);
          block11=new Box(290,330,10,10);
          block12=new Box(300,330,10,10);

  //level 2
          block13=new Box(270,320,10,10);
        block14=new Box(280,320,10,10);
        block15=new Box(290,320,10,10);
//level1
      block16=new Box(280,310,10,10);

// level 3
          block17=new Box(650,50,10,10);
          block18=new Box(660,50,10,10);
          block19=new Box(670,50,10,10);
          block20=new Box(680,50,10,10);
          block21=new Box(690,50,10,10);

//level2
      block22=new Box(660,40,10,10);
      block23=new Box(670,40,10,10);
      block24=new Box(680,40,10,10);
//level1
      block25=new Box(670,30,10,10)
mouseDragged();
}
function draw() {
  background(0,255,0); 
  base1.display();
  base2.display();
  //polygon1.display(); 
  
               block1.display();
           block2.display();
          block3.display();
         block4.display();
      block5.display();
     block6.display();
 block7.display();
             block8.display();
     block9.display();
      block10.display();
  block11.display();
    block12.display();

  block13.display();
     block14.display();
         block15.display();
        
         block16.display();
         

                block17.display();
                block18.display();
                block19.display();
                block20.display();
                block21.display();
                block22.display();
                block23.display();
                  block24.display();
         block25.display();
         slingshot.display(); 


        
 
  
  imageMode(CENTER);
  
  drawSprites();
 
  
     
}     

  function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x:mouseX , y:mouseY});
  }
  
  function mouseReleased(){
      slingshot.fly();
     
  }
  function keyPressed(){
    if(keyCode === 32&&polygon1.body.speed<1){
       slingshot.attach(polygon1.body);
       Matter.Body.setPosition(polygon1.body,{x:200,y:50})
    }
}