var pathImage,boy,boyImage
function preload(){
    //pre-load images
    pathImage=loadImage("path.png")
    boyImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
    createCanvas(400,700);
   
    
   
    path=createSprite(200,200);
    path.addImage(pathImage)
    path.velocityY=4
    path.scale=1.2
    
    boy=createSprite(50,600,10,40)
    boy.addAnimation("boy",boyImage)
    boy.scale=0.08

    lb=createSprite(200,350,10,700)
    // lb.visible=false
    
    rb=createSprite(380,350,10,700)
    rb.visible=false
    
}

function draw() {
   background(0);

   if(path.y>400){
     path.y=300
   }
   
   boy.x=mouseX
   boy.collide(lb)
   boy.collide(rb)
   drawSprites()
  
}
