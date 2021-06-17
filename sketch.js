const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Computerbase;


function preload() {
    ComputerbaseImage = loadImage("./assets/base2.png");
  
  }

 
function setup() {
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  canvas = createCanvas(windowWidth, windowHeight);
   //Create Player Base and Computer Base Object
   //computerbase = new Computerbase(150, 350, 160, 310);

 }

function draw() {

  background(180);
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   Computerbase.display();

   //display Player and computerplayer


}
