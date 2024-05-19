var ball;
var position,db
var balloon
 

function preload(){
balloon=loadImage("hot_air_balloon.png")

}


function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball.addImage(balloon)
    ball.scale= 0.2


db=firebase.database()
var ballposition = db.ref('ball/position')
ballposition.on("value",function(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
})


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    db.ref("ball/position").set({

        "x":position.x+x,
        "y":position.y+y
    });


}
  









