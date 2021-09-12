var bgimg,cat,mouse,catimg1,catimg2,mouseimg1,mouseimg2
function preload() {
    //load the images here
    bgimg=loadImage("garden.png")
    catimg1=loadAnimation("cat1.png")
    mouseimg1=loadAnimation("mouse1.png")
    catimg2=loadAnimation("cat2.png","cat3.png")
    mouseimg2=loadAnimation("mouse2.png","mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
mouse=createSprite(100,600,50,50)
cat=createSprite(800,600,50,50)
}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
    mouse.addAnimation("happy",mouseimg1)
    mouseimg1.changeAnimation("happy")

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouseimg2)
    mouse.changeAnimation("mouseteasing")
    mouse.frameDelay=25
}

}
