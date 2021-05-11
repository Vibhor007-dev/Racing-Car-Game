var gameState=0, database;
var game;
var form;
var player;
var playerCount=0;
var allPlayers=[];
var car1, car2, car3, car4;
var cars=[];

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
  game=new Game();
  game.getState();
  game.start();
}
 function draw(){
   player.getCount();
   console.log(playerCount);
  if(playerCount===4){
    game.updateState(1);
  }
  if(gameState===1){
    game.play();
  }
 } 
