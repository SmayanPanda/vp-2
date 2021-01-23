var dog,happydog,database,foodS,foodStock,feed,add,fedTime,lastfed,foodobject

function preload()

{
happydogimage=loadImage("images/dogImg1.png")
dogimage=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(1000, 400);
  database=firebase.database()
  
  dog=createSprite(250,250,100,100)
  dog.addImage(dogimage)
  dog.scale=0.5
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
  foodobject=new Food()
  feed=createButton('feed the dog')
  feed.position(700,95)
  add=createButton('add food')
  add.position(800,95)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(happydogimage)
}
  drawSprites();
  textSize(20)
  fill("black")
  stroke("white")
  text("press UP_ARROW to feed the dog",100,50)

}

function readStock(data){
foodS=data.val()



}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}