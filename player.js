class Player {
    constructor() {
        this.distance = 0;
        this.name=null;
        this.index=null;
        
    }
    getCount(){
        database.ref("playerCount").on("value", (data)=>{
            playerCount=data.val();
        })
    }
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({name:this.name,distance:this.distance});
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}