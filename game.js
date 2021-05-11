class Game
{
    constructor(){}
    getState(){
        
        database.ref("gameState").on("value", function(data){
            gameState=data.val();
        })
        
    }
    start(){
       
        if(gameState===0){
            player= new Player();
            form= new Form();
            form.display();
            car1 = createSprite(100,300,20,20);
            car2= createSprite(400, 300, 20, 20);
            car3 = createSprite(700, 300, 20, 20);
            car4 = createSprite(900, 300, 20, 20);
            cars=[car1, car2, car3, car4];
        }
    }
    updateState(data){
        database.ref("/").update({gameState:data});
    }
    play(){
        background("brown");
        form.hide();
        Player.getPlayerInfo();
        //console.log(allPlayers);
        if(allPlayers!=undefined){
            var x = 200;
            var y = 0;
            var index=0;
            for(var plr in allPlayers){
                x=x+200;
                y=displayHeight-allPlayers[plr].distance-70;
                cars[index].x=x;
                cars[index].y=y;
                index=index+1;
                if(index===player.index){
                    cars[index-1].shapeColor="red";
                }
            }
            if(keyIsDown(UP_ARROW)){
                player.distance=player.distance+50;
                console.log("Key is working!");
            }
            drawSprites();
        }
    }
    
}
