var balloon,balloonImage1,balloonImage2,database,position;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20);
  
  var balloonPosition=database.ref("balloon/height");
  balloonPosition.on("value",readPosition,showErrow);





}


function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("HotAirBalloon",balloonImage2);
    changePosistion(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("HotAirBalloon",balloonImage2);
    changePosistion(1,0);
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("HotAirBalloon",balloonImage2);
    changePosistion(0,-1); 
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("HotAirBalloon",balloonImage2);
    changePosistion(0,1);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changePosistion (x,y){
database.ref("balloon/height").set({
'x': height.x+x,
'y': height.y+y,
})
}

function readPosition(data){
height=data.val();
balloon.x=height.x;
balloon.y=height.y;
}

function showErrow(){
  console.log("hii there is a errow")
}






















