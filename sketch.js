var dog,di,hd,database,food,foodref,foods

function preload(){
  di=loadImage('images/dogImg.png')
  hd=loadImage('images/dogImg1.png')
}

function setup() {
  database = firebase.database();
  createCanvas(800, 400);
  dog=createSprite(400,300,20,20)
  dog.addImage(di)
  dog.scale=0.3
  var foodref = database.ref('dog');
  foodref.on("value",readPosition);
}


function draw() {
  background(46, 138, 87)
  textSize(30)
  fill('white')
  text('note:up arrow to feed the dog',10,30)
  text('food remaining:'+foods,10,50)
  if(food!==undefined){
  if(keyWentDown('up')){
   dog.addImage(hd)
   eatFood(1)
  } 
  if(keyWentUp('up')){
    dog.addImage(di)
  } 
  
console.log(food)
  drawSprites();
  //add styles here
  }
}
function readPosition(data){
  food = data.val(); 
  
}

function eatFood(x){
  database.ref('dog/').set({
    'food': x-= 1 
  })
}




