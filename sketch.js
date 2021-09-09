const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world;
var bg;
var snow=[];

function preload(){
bg=loadImage("paper.gif");
}

function setup() {
  var canvas = createCanvas(800,400);
  
  

  
}


function draw() {
  background(bg);  


  if(frameCount%5==0){
    snow.push(new Snow(random(0,800),-20,30));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}
}
