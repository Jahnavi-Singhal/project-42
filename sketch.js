var spacecraft;
var iss, issimg, spacebg, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var hasDocked=false;

function preload(){
  spacebg = loadImage("images/spacebg.jpg");
  issimg = loadImage("images/iss.png");
  spacecraft1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spacecraft4.png");
  }

function setup() {
  createCanvas(1600,800);
  

 iss = createSprite(800,300);
 iss.addImage(issimg);
 iss.scale= 1;

 spacecraft = createSprite(600,600);
 spacecraft.addImage(spacecraft1);
 spacecraft.scale= 0.3;
}



function draw() {
  background(spacebg); 
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("left")){
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x-1;
    }

    if(keyDown("right")){
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x+1;
    }

    if(keyDown("up")){
      spacecraft.y = spacecraft.y-1;
    }
    if(keyDown("down")){
      spacecraft.addImage(spacecraft2);
      spacecraft.y = spacecraft.y+1;
    }
  }
  
  if(spacecraft.y <= (iss.y+100) && spacecraft.x <= (iss.x-50)){
    hasDocked = true;

    textSize(25);
    fill("white");
    text("Docking Successful", 1272, 637 );
  }
  drawSprites();
}

