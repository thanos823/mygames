//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies
var enemiesgroup,player,distance = 0
var gamestate = 1
function preload(){
  boyImg = loadImage("rishabs game/boy5.jpg")
  boy2Img  = loadImage("rishabs game/boy2.jpg")
  girlImg = loadImage("rishabs game/girld image.png")
  redCircleImg = loadImage("rishabs game/red circle.jpg")
  trackImg = loadImage("rishabs game/track.jpg")
}
function setup(){
  createCanvas(displayWidth-50,displayHeight-50)
 player = createSprite(500,800,100,200)
 player.addImage(boyImg)
 player.scale = 0.09
 enemiesgroup = new Group()
}
function keyPressed(){
  if(gamestate === 1){

  
  if(keyCode === 37){
    player.x = player.x -50
    //player.velocityY = 0
  }
  if(keyCode === 39){
    player.x = player.x + 50
    //player.velocityY = 0
  }
  if(keyCode === 38){
    distance = distance+50
    //player.y = player.y -50
  }
  //if(keyCode === 40){
    
    //player.y = player.y +50}
  }
}
function npc(){
  var boy2  = createSprite(random(150,800),-displayHeight*2)
  boy2.addImage(boy2Img)
  boy2.scale = 0.09
  boy2.velocityY = 7
  enemiesgroup.add(boy2)
}

function draw(){
  background("black")
console.log("x"+mouseX+":"+"y"+mouseY)
console.log("player"+player.x+"-"+player.y)
  image(trackImg,0,-displayHeight*2,displayWidth,displayHeight*4)
  camera.position.x = displayWidth/2
  camera.position.y = player.y
  if(gamestate === 1){
player.y = displayHeight-distance
  
  if(player.isTouching(enemiesgroup)){
    //player.destroy()
    gamestate = 0
    //enemiesgroup.setVelocityYEach(0)
  }
  if(World.frameCount%70===0)
  npc()
}
if(gamestate === 0){
  enemiesgroup.setVelocityYEach(0)
  player.tint = "green"
}
  drawSprites()
}