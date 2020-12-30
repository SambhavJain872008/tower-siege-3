const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine , world ;
var stand1 , stand2 , box1 , ground , box2
var box3 , box4 , box5 , box6 , box7 , box8
var box9 , box10 , box11 , box12 , box13 , box14 
var box15 , box16 , box17 , box18 , box19 , box20
var box21 , box22 , box23 , box24 , box25 , box26
var box27 , box28 , box29 , box30 , box31 , box32
var box33 , box34 , box35 , box36 , box37 , box38
var box39 , box40 , box41 , box42 , box43 , box44
var box45 , box46 , box47 , box48 , box49 , box50
var box51 , box52 , box53 , box54 , box55 , box56
var box57 , box58 , box59 , box60 , box61 , box62
var box63
var score = 0


function preload() {
    polygon_img=loadImage("polygon.png");

}


function setup() {
    createCanvas(1300,700)

    engine = Engine.create();
	world = engine.world
	
	ground = new Ground()
    stand1 = new Ground(995,600,245,10);
    stand2 = new Ground(995,265,215,10);
    
    box1 = new Box(890,575,30,40)
    box2 = new Box(920,575,30,40)
    box3 = new Box(950,575,30,40)
    box4 = new Box(980,575,30,40)
    box5 = new Box(1010,575,30,40)
    box6 = new Box(1040,575,30,40)
    box7 = new Box(1070,575,30,40)
    box8 = new Box(1100,575,30,40)

    box9 = new Box(905,535,30,40)
    box10 = new Box(935,535,30,40)
    box11 = new Box(965,535,30,40)
    box12 = new Box(995,535,30,40)
    box13 = new Box(1025,535,30,40)
    box14 = new Box(1055,535,30,40)
    box15 = new Box(1085,535,30,40)

    box16 = new Box(920,495,30,40)
    box17 = new Box(950,495,30,40)
    box18 = new Box(980,495,30,40)
    box19 = new Box(1010,495,30,40)
    box20 = new Box(1040,495,30,40)
    box21 = new Box(1070,495,30,40)

    box22 = new Box(935,455,30,40)
    box23 = new Box(965,455,30,40)
    box24 = new Box(995,455,30,40)
    box25 = new Box(1025,455,30,40)
    box26 = new Box(1055,455,30,40)

    box27 = new Box(950,415,30,40)
    box28 = new Box(980,415,30,40)
    box29 = new Box(1010,415,30,40)
    box30 = new Box(1040,415,30,40)

    box31 = new Box(965,375,30,40)
    box32 = new Box(995,375,30,40)
    box33 = new Box(1025,375,30,40)

    box34 = new Box(980,335,30,40)
    box35 = new Box(1010,335,30,40)

    box36 = new Box(995,295,30,40)

    /////////////////////////////////////////////////////////////////////

    box37 = new Box(905,240,30,40)
    box38 = new Box(935,240,30,40)
    box39 = new Box(965,240,30,40)
    box40 = new Box(995,240,30,40)
    box41 = new Box(1025,240,30,40)
    box42 = new Box(1055,240,30,40)
    box43 = new Box(1085,240,30,40)

    box44 = new Box(920,200,30,40)
    box45 = new Box(950,200,30,40)
    box46 = new Box(980,200,30,40)
    box47 = new Box(1010,200,30,40)
    box48 = new Box(1040,200,30,40)
    box49 = new Box(1070,200,30,40)

    box50 = new Box(935,160,30,40)
    box51 = new Box(965,160,30,40)
    box52 = new Box(995,160,30,40)
    box53 = new Box(1025,160,30,40)
    box54 = new Box(1055,160,30,40)

    box55 = new Box(950,120,30,40)
    box56 = new Box(980,120,30,40)
    box57 = new Box(1010,120,30,40)
    box58 = new Box(1040,120,30,40)

    box59 = new Box(965,80,30,40)
    box60 = new Box(995,80,30,40)
    box61 = new Box(1025,80,30,40)

    box62 = new Box(980,40,30,40)
    box63 = new Box(1010,40,30,40)

	
    Engine.run(engine);
    
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingShot = new Slingshot(this.ball,{x:100,y:200});

   
 
}
    

function draw(){
    background(56,44,44)

  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
 
  fill("cyan")
  text("SCORE : "+ score,1100,40)
  textSize(20);
  text("Press Space to get a second Chance to Play!!",100 ,70);

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);

    fill("cyan");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();

    fill("yellow")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    fill("lime")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("cyan")
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    fill("yellow")
    box27.display();
    box28.display();
    box29.display();
    box30.display();

    fill("lime")
    box31.display();
    box32.display();
    box33.display();

    fill("cyan")
    box34.display();
    box35.display();

    fill("yellow")
    box36.display();

    ////////////////////////////////////////////////////////////

    fill("cyan")
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();

    fill("yellow")
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();

    fill("lime")
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();

    fill("cyan")
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    
    fill("yellow")
    box59.display();
    box60.display();
    box61.display();

    fill("lime")
    box62.display();
    box63.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();

    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    
    box31.score();
    box32.score();
    box33.score();

    box34.score();
    box35.score();

    box36.score();

    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();
    box43.score();
    
    box44.score();
    box45.score();
    box46.score();
    box47.score();
    box48.score();
    box49.score();

    box50.score();
    box51.score();
    box52.score();
    box53.score();
    box54.score();
 
    box55.score();
    box56.score();
    box57.score();
    box58.score();  
    
    box59.score();
    box60.score();
    box61.score();

    box62.score();
    box63.score();

    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);
  
    slingShot.display();
  }
  function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();

}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

