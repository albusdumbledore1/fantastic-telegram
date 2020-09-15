var runner,corona;
var ground,invisibleGround,workersGroup,specialWorkersGroup;
var cloudsGroup, cloudImage;
function preload(){
    cloudImage = loadImage("blueCloud.png");
}

function setup(){
    createCanvas(1200,400)
    runner = createSprite(600,600,20,20);
    ground = createSprite(600,350,1200,20);
    invisibleGround = createSprite(600,350,1200,20);
    invisibleGround.visible = false;
    //ground.addColor(0);
    
   // globe.addImage("phoenix",globeImg);
}

function draw(){
    background("#09eded");
    spawnClouds()
    drawSprites();
    
}
function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      var cloud = createSprite(1200,120,40,10);
      cloud.y = Math.round(random(5,120));
      cloud.addImage(cloudImage);
      cloud.scale = 0.3;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 700;
      
      //adjust the depth

  
      
      //add each cloud to the group
     // cloudsGroup.add(cloud);
    }
    
  }



