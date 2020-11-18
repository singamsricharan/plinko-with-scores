var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions=[]
var particle;

var divisionHeight=300;
var score =0;
var particlecount=0;
var gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
      plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,375));
    }   
}
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(20);
  text("500",260,550);
  textSize(20);
  text("500",180,550);
  textSize(20);
  text("500",100,550);
  textSize(20);
  text("500",20,550);
  textSize(20);
  text("100",340,550);
  textSize(20);
  text("100",420,550);
  textSize(20);
  text("100",500,550);
  textSize(20);
  text("200",580,550);
  textSize(20);
  text("200",670,550);
  textSize(20);
  text("200",740,550);
  Engine.update(engine);
  console.log(particlecount)
    for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
   if (gameState==="end"){
      textSize(50); 
      text("GameOver",350,350);
   }
   if (particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x>0 && particle.body.position.x<300){
          score+=500;
          particle=null;
          if(particlecount>=5){
            gameState="end"
          }
       }
       if(particle.body.position.x>301 && particle.body.position.x<500){
          score+=100;
          particle=null;
          if(particlecount>=5){
            gameState="end"
          }
        }
        if(particle.body.position.x>501 && particle.body.position.x<800){
          score+=200;
          particle=null;
          if(particlecount>=5){
            gameState="end"
          }
        }
       }
   }
}
function mousePressed(){
if (gameState==="play"){
  particlecount+=1;
  particle=new Particle(mouseX,10,10,10);
}
}